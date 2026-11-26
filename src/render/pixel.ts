import * as THREE from 'three';
import { inkUniform } from './voxel';

/**
 * 도트 3D: the scene is rendered into a small frame (≈ `targetHeight` rows), posterized with an
 * ordered dither, and shown with whole-number nearest-neighbour upscaling — every screen pixel
 * block is one clean "dot". The HUD stays at native resolution on top.
 */
export class PixelPipeline {
  /** Screen pixels per dot. */
  scale = 3;
  width = 320;
  height = 180;
  private readonly rt: THREE.WebGLRenderTarget;
  private readonly quad: THREE.Mesh;
  private readonly quadScene = new THREE.Scene();
  private readonly quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly mat: THREE.ShaderMaterial;

  constructor(private readonly renderer: THREE.WebGLRenderer) {
    this.rt = new THREE.WebGLRenderTarget(this.width, this.height, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      type: THREE.HalfFloatType,
      depthBuffer: true,
    });
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tScene: { value: this.rt.texture }, levels: { value: 20 }, dither: { value: 1 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: `
        uniform sampler2D tScene; uniform float levels; uniform float dither; varying vec2 vUv;
        float bayer4(vec2 p){
          vec2 a = floor(mod(p, 4.0));
          float i = a.x + a.y * 4.0;
          // 4×4 ordered-dither matrix, row-major.
          if (i < 0.5) return 0.0;   if (i < 1.5) return 8.0;   if (i < 2.5) return 2.0;   if (i < 3.5) return 10.0;
          if (i < 4.5) return 12.0;  if (i < 5.5) return 4.0;   if (i < 6.5) return 14.0;  if (i < 7.5) return 6.0;
          if (i < 8.5) return 3.0;   if (i < 9.5) return 11.0;  if (i < 10.5) return 1.0;  if (i < 11.5) return 9.0;
          if (i < 12.5) return 15.0; if (i < 13.5) return 7.0;  if (i < 14.5) return 13.0; return 5.0;
        }
        void main(){
          gl_FragColor = texture2D(tScene, vUv);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          // Limited palette: a fixed number of steps per channel, broken up with an ordered dither.
          float t = (bayer4(gl_FragCoord.xy) + 0.5) / 16.0 - 0.5;
          vec3 c = gl_FragColor.rgb * levels + t * dither;
          gl_FragColor = vec4(floor(c + 0.5) / levels, 1.0);
        }`,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);
    const c = renderer.domElement;
    c.style.imageRendering = 'pixelated';
  }

  /** Fit the window: whole-number scale so the frame has about `targetHeight` rows. */
  resize(winW: number, winH: number, targetHeight: number): void {
    this.scale = Math.max(2, Math.round(winH / targetHeight));
    this.width = Math.ceil(winW / this.scale);
    this.height = Math.ceil(winH / this.scale);
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(this.width, this.height, false);
    this.rt.setSize(this.width, this.height);
    // Ink outlines stay ~1¼ dots wide.
    inkUniform.value = (1.25 * 2) / this.height;
    const c = this.renderer.domElement;
    c.style.width = `${this.width * this.scale}px`;
    c.style.height = `${this.height * this.scale}px`;
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    const r = this.renderer;
    r.setRenderTarget(this.rt);
    r.render(scene, camera);
    r.setRenderTarget(null);
    r.render(this.quadScene, this.quadCam);
  }

  dispose(): void {
    this.rt.dispose();
    this.mat.dispose();
    this.quad.geometry.dispose();
  }
}
