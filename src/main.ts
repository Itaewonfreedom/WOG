import './ui/style.css';
import { Game } from './game';

/** Animated film grain for the black-and-white "Kurosawa" mode. */
function startGrain(canvas: HTMLCanvasElement): void {
  const size = 256;
  canvas.width = size;
  canvas.height = size;
  canvas.style.width = '200vw';
  canvas.style.height = '200vh';
  canvas.style.imageRendering = 'pixelated';
  const g = canvas.getContext('2d');
  if (!g) return;
  const img = g.createImageData(size, size);
  const tick = () => {
    if (document.body.classList.contains('kurosawa')) {
      for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 255;
      }
      g.putImageData(img, 0, 0);
    }
    setTimeout(tick, 70);
  };
  tick();
}

const app = document.getElementById('app')!;
startGrain(document.getElementById('grain') as HTMLCanvasElement);
new Game(app);
