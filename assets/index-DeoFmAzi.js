(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Xc="186",zf=0,Uh=1,Hf=2,er=1,Vf=2,$a=3,us=0,xn=1,hn=2,Fi=0,ma=1,fs=2,Nh=3,Fh=4,Gf=5,ca=100,Wf=101,Yf=102,Xf=103,qf=104,Kf=200,$f=201,Zf=202,Jf=203,Cu=204,Pu=205,Qf=206,jf=207,tp=208,ep=209,np=210,ip=211,sp=212,ap=213,rp=214,Yl=0,Xl=1,ql=2,lr=3,Kl=4,$l=5,Zl=6,Jl=7,qc=0,op=1,lp=2,wi=0,Lu=1,Du=2,ku=3,Kc=4,Iu=5,Uu=6,Nu=7,Fu=300,Ps=301,Ma=302,Xo=303,qo=304,Fo=306,Ql=1e3,Ni=1001,jl=1002,Ke=1003,cp=1004,xr=1005,_n=1006,Ko=1007,Rs=1008,Gn=1009,Ou=1010,Bu=1011,cr=1012,$c=1013,Ei=1014,di=1015,fi=1016,Zc=1017,Jc=1018,hr=1020,zu=35902,Hu=35899,Vu=1021,Gu=1022,Yn=1023,Hi=1026,Cs=1027,Qc=1028,jc=1029,Ls=1030,th=1031,eh=1033,mo=33776,go=33777,vo=33778,_o=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,ac=37492,rc=37496,oc=37488,lc=37489,So=37490,cc=37491,hc=37808,dc=37809,uc=37810,fc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,xc=37817,yc=37818,Mc=37819,bc=37820,Sc=37821,wc=36492,Ec=36494,Tc=36495,Ac=36283,Rc=36284,wo=36285,Cc=36286,hp=3200,Eo=0,dp=1,ls="",cn="srgb",To="srgb-linear",Ao="linear",Me="srgb",$o=7680,up=519,fp=512,pp=513,mp=514,nh=515,gp=516,vp=517,ih=518,_p=519,Wu=35044,Oh="300 es",bi=2e3,dr=2001;function xp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){const i=Ro("canvas");return i.style.display="block",i}const Bh={};function Co(...i){const t="THREE."+i.shift();console.log(t,...i)}function Yu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Yu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=Yu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ga(...i){const t=i.join(" ");t in Bh||(Bh[t]=!0,Bt(...i))}function Mp(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const bp={[Yl]:Xl,[ql]:Zl,[Kl]:Jl,[lr]:$l,[Xl]:Yl,[Zl]:ql,[Jl]:Kl,[$l]:lr};class ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const nr=Math.PI/180,ur=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function Sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wp(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Ep(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function Tp(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function Ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pp(i,t){return i+Math.random()*(t-i)}function Lp(i){return i*(.5-Math.random())}function Dp(i){i!==void 0&&(zh=i);let t=zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kp(i){return i*nr}function Ip(i){return i*ur}function Up(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),d=a((t-n)/2),u=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ah={DEG2RAD:nr,RAD2DEG:ur,generateUUID:Oi,clamp:ie,euclideanModulo:sh,mapLinear:Sp,inverseLerp:wp,lerp:ir,damp:Ep,pingpong:Tp,smoothstep:Ap,smootherstep:Rp,randInt:Cp,randFloat:Pp,randFloatSpread:Lp,seededRandom:Dp,degToRad:kp,radToDeg:Ip,isPowerOfTwo:Up,ceilPowerOfTwo:Np,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Op,normalize:be,denormalize:hi},Ch=class Ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;let Nt=Ch;class dn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(d!==x||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*x;m<0&&(u=-u,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);f=Math.sin(f*b)/R,o=Math.sin(o*b)/R,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+x*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+x*o;const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(a/2),u=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let A=Ph;const Zo=new A,Hh=new dn,Lh=class Lh{constructor(t,e,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],b=s[1],R=s[4],y=s[7],T=s[2],w=s[5],E=s[8];return a[0]=r*x+o*b+l*T,a[3]=r*m+o*R+l*w,a[6]=r*f+o*y+l*E,a[1]=c*x+h*b+d*T,a[4]=c*m+h*R+d*w,a[7]=c*f+h*y+d*E,a[2]=u*x+p*b+g*T,a[5]=u*m+p*R+g*w,a[8]=u*f+p*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*r)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*a-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;let Yt=Lh;const Jo=new Yt,Vh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){const i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Me&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Me&&(s.r=va(s.r),s.g=va(s.g),s.b=va(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const oe=Bp();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function va(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class zp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Ro("canvas")),Bs.width=t.width,Bs.height=t.height;const s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Bi(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hp=0;class rh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Qo(s[r].image)):a.push(Qo(s[r]))}else a=Qo(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Vp=0;const jo=new A;class yn extends ks{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=Ni,s=Ni,a=_n,r=Rs,o=Yn,l=Gn,c=yn.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Oi(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ql:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ql:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Fu;yn.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,y=(p+1)/2,T=(f+1)/2,w=(h+u)/4,E=(d+x)/4,v=(g+m)/4;return R>y&&R>T?R<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(R),s=w/n,a=E/n):y>T?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=w/s,a=v/s):T<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),n=E/a,s=v/a),this.set(n,s,a,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let ke=Dh;class Gp extends ks{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},a=new yn(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new rh(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Gp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xu extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wp extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const No=class No{constructor(t,e,n,s,a,r,o,l,c,h,d,u,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,d,u,p,g,x,m)}set(t,e,n,s,a,r,o,l,c,h,d,u,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),a=1/zs.setFromMatrixColumn(t,1).length(),r=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,p=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=x+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=x-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,Xp)}lookAt(t,e,n){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(n,On),Zi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(n,On)),Zi.normalize(),yr.crossVectors(On,Zi),s[0]=Zi.x,s[4]=yr.x,s[8]=On.x,s[1]=Zi.y,s[5]=yr.y,s[9]=On.y,s[2]=Zi.z,s[6]=yr.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],b=n[3],R=n[7],y=n[11],T=n[15],w=s[0],E=s[4],v=s[8],S=s[12],C=s[1],k=s[5],D=s[9],F=s[13],L=s[2],I=s[6],W=s[10],X=s[14],nt=s[3],Y=s[7],j=s[11],it=s[15];return a[0]=r*w+o*C+l*L+c*nt,a[4]=r*E+o*k+l*I+c*Y,a[8]=r*v+o*D+l*W+c*j,a[12]=r*S+o*F+l*X+c*it,a[1]=h*w+d*C+u*L+p*nt,a[5]=h*E+d*k+u*I+p*Y,a[9]=h*v+d*D+u*W+p*j,a[13]=h*S+d*F+u*X+p*it,a[2]=g*w+x*C+m*L+f*nt,a[6]=g*E+x*k+m*I+f*Y,a[10]=g*v+x*D+m*W+f*j,a[14]=g*S+x*F+m*X+f*it,a[3]=b*w+R*C+y*L+T*nt,a[7]=b*E+R*k+y*I+T*Y,a[11]=b*v+R*D+y*W+T*j,a[15]=b*S+R*F+y*X+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],b=l*p-c*u,R=o*p-c*d,y=o*u-l*d,T=r*p-c*h,w=r*u-l*h,E=r*d-o*h;return e*(x*b-m*R+f*y)-n*(g*b-m*T+f*w)+s*(g*R-x*T+f*E)-a*(g*y-x*w+m*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=e*o-n*r,R=e*l-s*r,y=e*c-a*r,T=n*l-s*o,w=n*c-a*o,E=s*c-a*l,v=h*x-d*g,S=h*m-u*g,C=h*f-p*g,k=d*m-u*x,D=d*f-p*x,F=u*f-p*m,L=b*F-R*D+y*k+T*C-w*S+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(o*F-l*D+c*k)*I,t[1]=(s*D-n*F-a*k)*I,t[2]=(x*E-m*w+f*T)*I,t[3]=(u*w-d*E-p*T)*I,t[4]=(l*C-r*F-c*S)*I,t[5]=(e*F-s*C+a*S)*I,t[6]=(m*y-g*E-f*R)*I,t[7]=(h*E-u*y+p*R)*I,t[8]=(r*D-o*C+c*v)*I,t[9]=(n*C-e*D-a*v)*I,t[10]=(g*w-x*y+f*b)*I,t[11]=(d*y-h*w-p*b)*I,t[12]=(o*S-r*k-l*v)*I,t[13]=(e*k-n*S+s*v)*I,t[14]=(x*R-g*T-m*b)*I,t[15]=(h*T-d*R+u*b)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,x=r*h,m=r*d,f=o*d,b=l*c,R=l*h,y=l*d,T=n.x,w=n.y,E=n.z;return s[0]=(1-(x+f))*T,s[1]=(p+y)*T,s[2]=(g-R)*T,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(u+f))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+R)*E,s[9]=(m-b)*E,s[10]=(1-(u+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=zs.set(s[0],s[1],s[2]).length();const o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();a<0&&(r=-r),ii.copy(this);const c=1/r,h=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,e.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,s,a,r,o=bi,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===bi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===dr)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=bi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===bi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===dr)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};No.prototype.isMatrix4=!0;let ae=No;const zs=new A,ii=new ae,Yp=new A(0,0,0),Xp=new A(1,1,1),Zi=new A,yr=new A,On=new A,Wh=new ae,Yh=new dn;class pi{constructor(t=0,e=0,n=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qp=0;const Xh=new A,Hs=new dn,Ri=new ae,Mr=new A,Ra=new A,Kp=new A,$p=new dn,qh=new A(1,0,0),Kh=new A(0,1,0),$h=new A(0,0,1),Zh={type:"added"},Zp={type:"removed"},Vs={type:"childadded",child:null},tl={type:"childremoved",child:null};class Je extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new A,e=new pi,n=new dn,s=new A(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Yt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ra,Mr,this.up):Ri.lookAt(Mr,Ra,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zp),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*s,a[13]+=n-a[1]*e-a[5]*n-a[9]*s,a[14]+=s-a[2]*e-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Je.DEFAULT_UP=new A(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Un extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jp={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},br={h:0,s:0,l:0};function nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=sh(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=nl(r,a,t+1/3),this.g=nl(r,a,t),this.b=nl(r,a,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(a){a!==void 0&&parseFloat(a)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return oe.workingToColorSpace(mn.copy(this),t),Math.round(ie(mn.r*255,0,255))*65536+Math.round(ie(mn.g*255,0,255))*256+Math.round(ie(mn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,a=mn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=cn){oe.workingToColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,s=mn.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(br);const n=ir(Ji.h,br.h,e),s=ir(Ji.s,br.s,e),a=ir(Ji.l,br.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new kt;kt.NAMES=Ku;class oh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $u extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const si=new A,Ci=new A,il=new A,Pi=new A,Gs=new A,Ws=new A,Jh=new A,sl=new A,al=new A,rl=new A,ol=new ke,ll=new ke,cl=new ke;class ti{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){si.subVectors(s,e),Ci.subVectors(n,e),il.subVectors(t,e);const r=si.dot(si),o=si.dot(Ci),l=si.dot(il),c=Ci.dot(Ci),h=Ci.dot(il),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return ol.setScalar(0),ll.setScalar(0),cl.setScalar(0),ol.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ol,a.x),r.addScaledVector(ll,a.y),r.addScaledVector(cl,a.z),r}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ci.subVectors(t,e),si.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;Gs.subVectors(s,n),Ws.subVectors(a,n),sl.subVectors(t,n);const l=Gs.dot(sl),c=Ws.dot(sl);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);const h=Gs.dot(al),d=Ws.dot(al);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Gs,r);rl.subVectors(t,a);const p=Gs.dot(rl),g=Ws.dot(rl);if(g>=0&&p<=g)return e.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ws,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Jh.subVectors(a,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Jh,o);const f=1/(m+x+u);return r=x*f,o=u*f,e.copy(n).addScaledVector(Gs,r).addScaledVector(Ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Is{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ai):ai.fromBufferAttribute(a,r),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),wr.subVectors(this.max,Ca),Ys.subVectors(t.a,Ca),Xs.subVectors(t.b,Ca),qs.subVectors(t.c,Ca),Qi.subVectors(Xs,Ys),ji.subVectors(qs,Xs),ms.subVectors(Ys,qs);let e=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-ms.z,ms.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,ms.z,0,-ms.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-ms.y,ms.x,0];return!hl(e,Ys,Xs,qs,wr)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Ys,Xs,qs,wr))?!1:(Er.crossVectors(Qi,ji),e=[Er.x,Er.y,Er.z],hl(e,Ys,Xs,qs,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new A,new A,new A,new A,new A,new A,new A,new A],ai=new A,Sr=new Is,Ys=new A,Xs=new A,qs=new A,Qi=new A,ji=new A,ms=new A,Ca=new A,wr=new A,Er=new A,gs=new A;function hl(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){gs.fromArray(i,a);const o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ze=new A,Tr=new Nt;let Qp=0;class We extends ks{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Zu extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ju extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const jp=new Is,Pa=new A,dl=new A;class Us{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pa.subVectors(t,this.center);const e=Pa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pa.copy(t.center).add(dl)),this.expandByPoint(Pa.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let t0=0;const $n=new ae,ul=new Je,Ks=new A,Bn=new Is,La=new Is,rn=new A;class Ne extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?Ju:Zu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Yt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Bn.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];La.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Bn.min,La.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,La.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(La.min),Bn.expandByPoint(La.max))}Bn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)rn.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(t,c),rn.add(Ks)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new A,l[v]=new A;const c=new A,h=new A,d=new A,u=new Nt,p=new Nt,g=new Nt,x=new A,m=new A;function f(v,S,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,C),u.fromBufferAttribute(a,v),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,C),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(k),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(k),o[v].add(x),o[S].add(x),o[C].add(x),l[v].add(m),l[S].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,S=b.length;v<S;++v){const C=b[v],k=C.start,D=C.count;for(let F=k,L=k+D;F<L;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const R=new A,y=new A,T=new A,w=new A;function E(v){T.fromBufferAttribute(s,v),w.copy(T);const S=o[v];R.copy(S),R.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(w,S);const k=y.dot(l[v])<0?-1:1;r.setXYZW(v,R.x,R.y,R.z,k)}for(let v=0,S=b.length;v<S;++v){const C=b[v],k=C.start,D=C.count;for(let F=k,L=k+D;F<L;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new A,a=new A,r=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new We(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class e0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const wn=new A;class Po{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),a=be(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Po(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fl=new A,n0=new A,i0=new Yt;class os{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fl.subVectors(n,e).cross(n0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(fl),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||i0.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let s0=0;class Gi extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=ma,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new os().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qu extends Gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $s;const Da=new A,Zs=new A,Js=new A,Qs=new Nt,ka=new Nt,ju=new ae,Ar=new A,Ia=new A,Rr=new A,Qh=new Nt,pl=new Nt,jh=new Nt;class a0 extends Je{constructor(t=new Qu){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new e0(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Po(n,3,0,!1)),$s.setAttribute("uv",new Po(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Cr(Ar.set(-.5,-.5,0),Js,r,Zs,s,a),Cr(Ia.set(.5,-.5,0),Js,r,Zs,s,a),Cr(Rr.set(.5,.5,0),Js,r,Zs,s,a),Qh.set(0,0),pl.set(1,0),jh.set(1,1);let o=t.ray.intersectTriangle(Ar,Ia,Rr,!1,Da);if(o===null&&(Cr(Ia.set(-.5,.5,0),Js,r,Zs,s,a),pl.set(0,1),o=t.ray.intersectTriangle(Ar,Rr,Ia,!1,Da),o===null))return;const l=t.ray.origin.distanceTo(Da);l<t.near||l>t.far||e.push({distance:l,point:Da.clone(),uv:ti.getInterpolation(Da,Ar,Ia,Rr,Qh,pl,jh,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cr(i,t,e,n,s,a){Qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ka.x=a*Qs.x-s*Qs.y,ka.y=s*Qs.x+a*Qs.y):ka.copy(Qs),i.copy(t),i.x+=ka.x,i.y+=ka.y,i.applyMatrix4(ju)}const Di=new A,ml=new A,Pr=new A,Lr=new A;class lh{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ml.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(ml);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Pr),o=Lr.dot(this.direction),l=-Lr.dot(Pr),c=Lr.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ml).addScaledVector(Pr,u),p}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),s=Di.dot(Di)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,p=t.z-r.z,g=e.x-r.x,x=e.y-r.y,m=e.z-r.z,f=n.x-r.x,b=n.y-r.y,R=n.z-r.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let E,v,S,C,k,D,F,L,I,W,X,nt;if(y>=T&&y>=w?(S=l,D=d,I=g,nt=f,l>=0?(E=c,v=h,C=u,k=p,F=x,L=m,W=b,X=R):(E=h,v=c,C=p,k=u,F=m,L=x,W=R,X=b)):T>=w?(S=c,D=u,I=x,nt=b,c>=0?(E=h,v=l,C=p,k=d,F=m,L=g,W=R,X=f):(E=l,v=h,C=d,k=p,F=g,L=m,W=f,X=R)):(S=h,D=p,I=m,nt=R,h>=0?(E=l,v=c,C=d,k=u,F=g,L=x,W=f,X=b):(E=c,v=l,C=u,k=d,F=x,L=g,W=b,X=f)),S===0)return null;const Y=E/S,j=v/S,it=1/S,Lt=C-Y*D,Ct=k-j*D,ge=F-Y*I,qt=L-j*I,te=W-Y*nt,$=X-j*nt,et=te*qt-$*ge,vt=Lt*$-Ct*te,It=ge*Ct-qt*Lt;if(s){if(et<0||vt<0||It<0)return null}else if((et<0||vt<0||It<0)&&(et>0||vt>0||It>0))return null;const _t=et+vt+It;if(_t===0)return null;const Kt=it*(et*D+vt*I+It*nt);return(_t>0?Kt<0:Kt>0)?null:this.at(Kt/_t,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ba extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const td=new ae,vs=new lh,Dr=new Us,ed=new A,kr=new A,Ir=new A,Ur=new A,gl=new A,Nr=new A,nd=new A,Fr=new A;class Ue extends Je{constructor(t=new Ne,e=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Nr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(gl.fromBufferAttribute(d,t),r?Nr.addScaledVector(gl,h):Nr.addScaledVector(gl.sub(e),h))}e.add(Nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(a),vs.copy(t.ray).recast(t.near),!(Dr.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Dr,ed)===null||vs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(a).invert(),vs.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=R;y<T;y+=3){const w=o.getX(y),E=o.getX(y+1),v=o.getX(y+2);s=Or(this,f,t,n,c,h,d,w,E,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=Or(this,r,t,n,c,h,d,b,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,T=R;y<T;y+=3){const w=y,E=y+1,v=y+2;s=Or(this,f,t,n,c,h,d,w,E,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,R=m+1,y=m+2;s=Or(this,r,t,n,c,h,d,b,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function r0(i,t,e,n,s,a,r,o){let l;if(t.side===xn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===us,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:i}}function Or(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,kr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Ur);const h=r0(i,t,e,n,kr,Ir,Ur,nd);if(h){const d=new A;ti.getBarycoord(nd,kr,Ir,Ur,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,l,c,d,new Nt)),a&&(h.uv1=ti.getInterpolatedAttribute(a,o,l,c,d,new Nt)),r&&(h.normal=ti.getInterpolatedAttribute(r,o,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new A,materialIndex:0};ti.getNormal(kr,Ir,Ur,u.normal),h.face=u,h.barycoord=d}return h}class Oo extends yn{constructor(t=null,e=1,n=1,s,a,r,o,l,c=Ke,h=Ke,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class id extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const js=new ae,sd=new ae,Br=[],ad=new Is,o0=new ae,Ua=new Ue,Na=new Us;class xo extends Ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new id(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,o0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),ad.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(ad)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Na.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),t.ray.intersectsSphere(Na)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,js),sd.multiplyMatrices(n,js),Ua.matrixWorld=sd,Ua.raycast(t,Br);for(let r=0,o=Br.length;r<o;r++){const l=Br[r];l.instanceId=a,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new id(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oo(new Float32Array(s*this.count),s,this.count,Qc,di));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _s=new Us,l0=new Nt(.5,.5),zr=new A;class ch{constructor(t=new os,e=new os,n=new os,s=new os,a=new os,r=new os){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],b=a[12],R=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,p-h,f-g,T-b).normalize(),s[1].setComponents(c+r,p+h,f+g,T+b).normalize(),s[2].setComponents(c+o,p+d,f+x,T+R).normalize(),s[3].setComponents(c-o,p-d,f-x,T-R).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,f-m,T-y).normalize();else if(s[4].setComponents(c-l,p-u,f-m,T-y).normalize(),e===bi)s[5].setComponents(c+l,p+u,f+m,T+y).normalize();else if(e===dr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const e=l0.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hh extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new A,Do=new A,rd=new ae,Fa=new lh,Hr=new Us,vl=new A,od=new A;class tf extends Je{constructor(t=new Ne,e=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)Lo.fromBufferAttribute(e,s-1),Do.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new se(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=a,t.ray.intersectsSphere(Hr)===!1)return;rd.copy(s).invert(),Fa.copy(t.ray).applyMatrix4(rd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),b=h.getX(x+1),R=Vr(this,t,Fa,l,f,b,x);R&&e.push(R)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Vr(this,t,Fa,l,x,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=Vr(this,t,Fa,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Vr(this,t,Fa,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Vr(i,t,e,n,s,a,r){const o=i.geometry.attributes.position;if(Lo.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,a),e.distanceSqToSegment(Lo,Do,vl,od)>n)return;vl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vl);if(!(c<t.near||c>t.far))return{distance:c,point:od.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const ld=new A,cd=new A;class c0 extends tf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)ld.fromBufferAttribute(e,s),cd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ld.distanceTo(cd);t.setAttribute("lineDistance",new se(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h0 extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hd=new ae,Pc=new lh,Gr=new Us,Wr=new A;class ef extends Je{constructor(t=new Ne,e=new h0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=a,t.ray.intersectsSphere(Gr)===!1)return;hd.copy(s).invert(),Pc.copy(t.ray).applyMatrix4(hd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);Wr.fromBufferAttribute(d,m),dd(Wr,m,l,s,t,e,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,x=p;g<x;g++)Wr.fromBufferAttribute(d,g),dd(Wr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function dd(i,t,e,n,s,a,r){const o=Pc.distanceSqToPoint(i);if(o<e){const l=new A;Pc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class nf extends yn{constructor(t=[],e=Ps,n,s,a,r,o,l,c,h){super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends yn{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fr extends yn{constructor(t,e,n=Ei,s,a,r,o=Ke,l=Ke,c,h=Hi,d=1){if(h!==Hi&&h!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class d0 extends fr{constructor(t,e=Ei,n=Ps,s,a,r=Ke,o=Ke,l,c=Hi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sf extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pn extends Ne{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(x,m,f,b,R,y,T,w,E,v,S){const C=y/E,k=T/v,D=y/2,F=T/2,L=w/2,I=E+1,W=v+1;let X=0,nt=0;const Y=new A;for(let j=0;j<W;j++){const it=j*k-F;for(let Lt=0;Lt<I;Lt++){const Ct=Lt*C-D;Y[x]=Ct*b,Y[m]=it*R,Y[f]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Lt/E),d.push(1-j/v),X+=1}}for(let j=0;j<v;j++)for(let it=0;it<E;it++){const Lt=u+it+I*j,Ct=u+it+I*(j+1),ge=u+(it+1)+I*(j+1),qt=u+(it+1)+I*j;l.push(Lt,Ct,qt),l.push(Ct,ge,qt),nt+=6}o.addGroup(p,nt,S),p+=nt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ci extends Ne{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;b(),r===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(p,2));function b(){const y=new A,T=new A;let w=0;const E=(e-t)/n;for(let v=0;v<=a;v++){const S=[],C=v/a,k=C*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,L=F*l+o,I=Math.sin(L),W=Math.cos(L);T.x=k*I,T.y=-C*n+m,T.z=k*W,d.push(T.x,T.y,T.z),y.set(I,E,W).normalize(),u.push(y.x,y.y,y.z),p.push(F,1-C),S.push(g++)}x.push(S)}for(let v=0;v<s;v++)for(let S=0;S<a;S++){const C=x[S][v],k=x[S+1][v],D=x[S+1][v+1],F=x[S][v+1];(t>0||S!==0)&&(h.push(C,k,F),w+=3),(e>0||S!==a-1)&&(h.push(k,D,F),w+=3)}c.addGroup(f,w,0),f+=w}function R(y){const T=g,w=new Nt,E=new A;let v=0;const S=y===!0?t:e,C=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),g++;const k=g;for(let D=0;D<=s;D++){const L=D/s*l+o,I=Math.cos(L),W=Math.sin(L);E.x=S*W,E.y=m*C,E.z=S*I,d.push(E.x,E.y,E.z),u.push(0,C,0),w.x=I*.5+.5,w.y=W*.5*C+.5,p.push(w.x,w.y),g++}for(let D=0;D<s;D++){const F=T+D,L=k+D;y===!0?h.push(L,L+1,F):h.push(L+1,L,F),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(a.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const R=new A,y=new A,T=new A;for(let w=0;w<e.length;w+=3)p(e[w+0],R),p(e[w+1],y),p(e[w+2],T),l(R,y,T,b)}function l(b,R,y,T){const w=T+1,E=[];for(let v=0;v<=w;v++){E[v]=[];const S=b.clone().lerp(y,v/w),C=R.clone().lerp(y,v/w),k=w-v;for(let D=0;D<=k;D++)D===0&&v===w?E[v][D]=S:E[v][D]=S.clone().lerp(C,D/k)}for(let v=0;v<w;v++)for(let S=0;S<2*(w-v)-1;S++){const C=Math.floor(S/2);S%2===0?(u(E[v][C+1]),u(E[v+1][C]),u(E[v][C])):(u(E[v][C+1]),u(E[v+1][C+1]),u(E[v+1][C]))}}function c(b){const R=new A;for(let y=0;y<a.length;y+=3)R.x=a[y+0],R.y=a[y+1],R.z=a[y+2],R.normalize().multiplyScalar(b),a[y+0]=R.x,a[y+1]=R.y,a[y+2]=R.z}function h(){const b=new A;for(let R=0;R<a.length;R+=3){b.x=a[R+0],b.y=a[R+1],b.z=a[R+2];const y=m(b)/2/Math.PI+.5,T=f(b)/Math.PI+.5;r.push(y,1-T)}g(),d()}function d(){for(let b=0;b<r.length;b+=6){const R=r[b+0],y=r[b+2],T=r[b+4],w=Math.max(R,y,T),E=Math.min(R,y,T);w>.9&&E<.1&&(R<.2&&(r[b+0]+=1),y<.2&&(r[b+2]+=1),T<.2&&(r[b+4]+=1))}}function u(b){a.push(b.x,b.y,b.z)}function p(b,R){const y=b*3;R.x=t[y+0],R.y=t[y+1],R.z=t[y+2]}function g(){const b=new A,R=new A,y=new A,T=new A,w=new Nt,E=new Nt,v=new Nt;for(let S=0,C=0;S<a.length;S+=9,C+=6){b.set(a[S+0],a[S+1],a[S+2]),R.set(a[S+3],a[S+4],a[S+5]),y.set(a[S+6],a[S+7],a[S+8]),w.set(r[C+0],r[C+1]),E.set(r[C+2],r[C+3]),v.set(r[C+4],r[C+5]),T.copy(b).add(R).add(y).divideScalar(3);const k=m(T);x(w,C+0,b,k),x(E,C+2,R,k),x(v,C+4,y,k)}}function x(b,R,y,T){T<0&&b.x===1&&(r[R]=b.x-1),y.x===0&&y.z===0&&(r[R]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.detail)}}class uh extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uh(t.radius,t.detail)}}class fh extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fh(t.radius,t.detail)}}class Vi extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*u-r;for(let R=0;R<c;R++){const y=R*d-a;g.push(y,-b,0),x.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const R=b+c*f,y=b+c*(f+1),T=b+1+c*(f+1),w=b+1+c*f;p.push(R,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ph extends Ne{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,p=new A,g=new Nt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const b=f+m,R=b,y=b+n+1,T=b+n+2,w=b+1;o.push(R,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ko extends Ne{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new A,u=new A,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const b=[],R=f/n,y=r+R*o,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T);let E=0;f===0&&r===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){const S=v/e,C=s+S*a;d.x=-w*Math.cos(C),d.y=T,d.z=w*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(S+E,1-R),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const R=h[f][b+1],y=h[f][b],T=h[f+1][b],w=h[f+1][b+1];(f!==0||r>0)&&p.push(R,y,w),(f!==n-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Sa(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(ud(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ud(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][n]=a}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){const t={};for(let e=0;e<i.length;e++){const n=Sa(i[e]);for(const s in n)t[s]=n[s]}return t}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function u0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function af(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const rf={clone:Sa,merge:An};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sa(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class m0 extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g0 extends Gi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ha extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=qc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class v0 extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _0 extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mh extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class x0 extends mh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const _l=new ae,fd=new A,pd=new A;class y0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===dr||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yr=new A,Xr=new dn,vi=new A;class of extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,Xr,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Xr,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Yr,Xr,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Xr,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new A,md=new Nt,gd=new Nt;class jn extends of{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,md,gd),e.subVectors(gd,md)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class zo extends of{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class M0 extends y0{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends mh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new M0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class S0 extends mh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ta=-90,ea=1;class w0 extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jn(ta,ea,t,e);s.layers=this.layers,this.add(s);const a=new jn(ta,ea,t,e);a.layers=this.layers,this.add(a);const r=new jn(ta,ea,t,e);r.layers=this.layers,this.add(r);const o=new jn(ta,ea,t,e);o.layers=this.layers,this.add(o);const l=new jn(ta,ea,t,e);l.layers=this.layers,this.add(l);const c=new jn(ta,ea,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class E0 extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kh=class kh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const a=this.elements;return a[0]=t,a[2]=e,a[1]=n,a[3]=s,this}};kh.prototype.isMatrix2=!0;let vd=kh;function _d(i,t,e,n){const s=T0(n);switch(e){case Vu:return i*t;case Qc:return i*t/s.components*s.byteLength;case jc:return i*t/s.components*s.byteLength;case Ls:return i*t*2/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case Gu:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case eh:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(i,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(i,8)*Math.max(t,8)/2;case sc:case ac:case oc:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:case So:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wc:case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(i){switch(i){case Gn:case Ou:return{byteLength:1,components:1};case cr:case Bu:case fi:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case Ei:case $c:case di:return{byteLength:4,components:1};case zu:case Hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);function lf(){let i=null,t=!1,e=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function A0(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:k0,aomap_fragment:I0,aomap_pars_fragment:U0,batching_pars_vertex:N0,batching_vertex:F0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:V0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:K0,color_pars_vertex:$0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:j0,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:am,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:dm,fog_pars_vertex:um,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:_m,lights_pars_begin:xm,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Im,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Ym,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Km,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:ag,dithering_fragment:rg,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:dg,shadowmap_vertex:ug,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:_g,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:Mg,transmission_fragment:bg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:kg,depth_vert:Ig,depth_frag:Ug,distance_vert:Ng,distance_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Yg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Kg,meshnormal_frag:$g,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:jg,meshtoon_vert:tv,meshtoon_frag:ev,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:av,sprite_vert:rv,sprite_frag:ov},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:An([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:An([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:An([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:An([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:An([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:An([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:An([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:An([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:An([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:An([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:An([ft.common,ft.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:An([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const qr={r:0,b:0,g:0},lv=new ae,cf=new Yt;cf.set(-1,0,0,0,1,0,0,0,1);function cv(i,t,e,n,s,a){const r=new kt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const y=b.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(b){let R=!1;const y=p(b);y===null?m(r,o):y&&y.isColor&&(m(y,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,R){const y=p(R);y&&(y.isCubeTexture||y.mapping===Fo)?(c===void 0&&(c=new Ue(new Pn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Sa(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cf),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==Me,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ue(new Vi(2,2),new un({name:"BackgroundMaterial",uniforms:Sa(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,R){b.getRGB(qr,af(i)),e.buffers.color.setClear(qr.r,qr.g,qr.b,R,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,R=1){r.set(b),o=R,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(r,o)},render:g,addToRenderList:x,dispose:f}}function hv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(k,D,F,L,I){let W=!1;const X=d(k,L,F,D);a!==X&&(a=X,c(a.object)),W=p(k,L,F,I),W&&g(k,L,F,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,y(k,D,F,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function d(k,D,F,L){const I=L.wireframe===!0;let W=n[D.id];W===void 0&&(W={},n[D.id]=W);const X=k.isInstancedMesh===!0?k.id:0;let nt=W[X];nt===void 0&&(nt={},W[X]=nt);let Y=nt[F.id];Y===void 0&&(Y={},nt[F.id]=Y);let j=Y[I];return j===void 0&&(j=u(l()),Y[I]=j),j}function u(k){const D=[],F=[],L=[];for(let I=0;I<e;I++)D[I]=0,F[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:L,object:k,attributes:{},index:null}}function p(k,D,F,L){const I=a.attributes,W=D.attributes;let X=0;const nt=F.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const it=I[Y];let Lt=W[Y];if(Lt===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Lt=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Lt=k.instanceColor)),it===void 0||it.attribute!==Lt||Lt&&it.data!==Lt.data)return!0;X++}return a.attributesNum!==X||a.index!==L}function g(k,D,F,L){const I={},W=D.attributes;let X=0;const nt=F.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let it=W[Y];it===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(it=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(it=k.instanceColor));const Lt={};Lt.attribute=it,it&&it.data&&(Lt.data=it.data),I[Y]=Lt,X++}a.attributes=I,a.attributesNum=X,a.index=L}function x(){const k=a.newAttributes;for(let D=0,F=k.length;D<F;D++)k[D]=0}function m(k){f(k,0)}function f(k,D){const F=a.newAttributes,L=a.enabledAttributes,I=a.attributeDivisors;F[k]=1,L[k]===0&&(i.enableVertexAttribArray(k),L[k]=1),I[k]!==D&&(i.vertexAttribDivisor(k,D),I[k]=D)}function b(){const k=a.newAttributes,D=a.enabledAttributes;for(let F=0,L=D.length;F<L;F++)D[F]!==k[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function R(k,D,F,L,I,W,X){X===!0?i.vertexAttribIPointer(k,D,F,I,W):i.vertexAttribPointer(k,D,F,L,I,W)}function y(k,D,F,L){x();const I=L.attributes,W=F.getAttributes(),X=D.defaultAttributeValues;for(const nt in W){const Y=W[nt];if(Y.location>=0){let j=I[nt];if(j===void 0&&(nt==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),nt==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),j!==void 0){const it=j.normalized,Lt=j.itemSize,Ct=t.get(j);if(Ct===void 0)continue;const ge=Ct.buffer,qt=Ct.type,te=Ct.bytesPerElement,$=qt===i.INT||qt===i.UNSIGNED_INT||j.gpuType===$c;if(j.isInterleavedBufferAttribute){const et=j.data,vt=et.stride,It=j.offset;if(et.isInstancedInterleavedBuffer){for(let _t=0;_t<Y.locationSize;_t++)f(Y.location+_t,et.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let _t=0;_t<Y.locationSize;_t++)R(Y.location+_t,Lt/Y.locationSize,qt,it,vt*te,(It+Lt/Y.locationSize*_t)*te,$)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)f(Y.location+et,j.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<Y.locationSize;et++)m(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let et=0;et<Y.locationSize;et++)R(Y.location+et,Lt/Y.locationSize,qt,it,Lt*te,Lt/Y.locationSize*et*te,$)}}else if(X!==void 0){const it=X[nt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}b()}function T(){S();for(const k in n){const D=n[k];for(const F in D){const L=D[F];for(const I in L){const W=L[I];for(const X in W)h(W[X].object),delete W[X];delete L[I]}}delete n[k]}}function w(k){if(n[k.id]===void 0)return;const D=n[k.id];for(const F in D){const L=D[F];for(const I in L){const W=L[I];for(const X in W)h(W[X].object),delete W[X];delete L[I]}}delete n[k.id]}function E(k){for(const D in n){const F=n[D];for(const L in F){const I=F[L];if(I[k.id]===void 0)continue;const W=I[k.id];for(const X in W)h(W[X].object),delete W[X];delete I[k.id]}}}function v(k){for(const D in n){const F=n[D],L=k.isInstancedMesh===!0?k.id:0,I=F[L];if(I!==void 0){for(const W in I){const X=I[W];for(const nt in X)h(X[nt].object),delete X[nt];delete I[W]}delete F[L],Object.keys(F).length===0&&delete n[D]}}}function S(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function dv(i,t,e){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function uv(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const v=E===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Gn&&E!==di&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:y,maxSamples:T,samples:w}}function fv(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new os,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const b=a?0:n,R=b*4;let y=f.clippingState||null;l.value=y,y=h(g,u,R,p);for(let T=0;T!==R;++T)y[T]=e[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,y=p;R!==x;++R,y+=4)r.copy(d[R]).applyMatrix4(b,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const pa=4,pv=6,mv=20,gv=256,Oa=new zo,xd=new kt;let xl=null,yl=0,Ml=0,bl=!1;const vv=new A,xs=new A;class yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=vv}=a;xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,yl,Ml),this._renderer.xr.enabled=bl,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ma?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:fi,format:Yn,colorSpace:To,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_v(a)),this._blurMaterial=yv(a,t,e),this._ggxMaterial=xv(a,t,e)}return s}_compileMaterial(t){const e=new Ue(new Ne,t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s,a){const l=new jn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(xd),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Pn,new ba({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(xd),f=!0);for(let R=0;R<6;R++){const y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[R],a.y,a.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[R],a.z)):(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[R]));const T=this._cubeSize;na(s,y*T,R>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(x,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;na(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-pa?n-g+pa:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,na(a,m,f,3*x,2*x),s.setRenderTarget(a),s.render(o,Oa),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,na(t,m,f,3*x,2*x),s.setRenderTarget(t),s.render(o,Oa)}_blur(t,e,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,n,r),this._blurPass(a,t,n,n,r)}_blurPass(t,e,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-pa?s-this._lodMax+pa:0),u=4*(this._cubeSize-h);na(e,d,u,3*h,2*h),r.setRenderTarget(e),r.render(l,Oa)}}function _v(i){const t=[],e=[];let n=i;const s=i-pa+1+pv;for(let a=0;a<s;a++){const r=Math.pow(2,n);t.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){const b=f%3*2/3-1,R=f>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(y,p*u*f);for(let T=0;T<u;T++){const w=h[T*2]*2-1,E=h[T*2+1]*2-1;f===0?xs.set(1,E,w):f===1?xs.set(-w,1,-E):f===2?xs.set(-w,E,1):f===3?xs.set(-1,E,-w):f===4?xs.set(-w,-1,E):xs.set(w,E,-1),xs.toArray(x,(f*u+T)*p)}}const m=new Ne;m.setAttribute("position",new We(g,p)),m.setAttribute("outputDirection",new We(x,p)),e.push(new Ue(m,null)),n>pa&&n--}return{lodMeshes:e,sizeLods:t}}function Md(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xv(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yv(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:mv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function bd(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sd(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hf extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),a=new un({name:"CubemapFromEquirect",uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Fi});a.uniforms.tEquirect.value=e;const r=new Ue(s,a),o=e.minFilter;return e.minFilter===Rs&&(e.minFilter=_n),new w0(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}function Mv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?r(u):a(u)}function a(u){if(u&&u.isTexture){const p=u.mapping;if(p===Xo||p===qo)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new hf(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,g=p===Xo||p===qo,x=p===Ps||p===Ma;if(g||x){let m=e.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new yd(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return g&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new yd(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Xo?u.mapping=Ps:p===qo&&(u.mapping=Ma),u}function l(u){let p=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function bv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ga("WebGLRenderer: "+n+" extension not supported."),s}}}function Sv(i,t,e,n){const s={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const p=a.get(u);p&&(t.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const b=p.array;x=p.version;for(let R=0,y=b.length;R<y;R+=3){const T=b[R+0],w=b[R+1],E=b[R+2];u.push(T,w,w,E,E,T)}}else{const b=g.array;x=g.version;for(let R=0,y=b.length/3-1;R<y;R+=3){const T=R+0,w=R+1,E=R+2;u.push(T,w,w,E,E,T)}}const m=new(g.count>=65535?Ju:Zu)(u,1);m.version=x;const f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function wv(i,t,e){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){i.drawElements(n,u,a,d*r),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,a,d*r,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,d,0,p);let x=0;for(let m=0;m<p;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ev(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:ue("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tv(i,t,e){const n=new WeakMap,s=new ke;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let C=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var p=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*w*4*d),v=new Xu(E,T,w,d);v.type=di,v.needsUpdate=!0;const S=y*4;for(let k=0;k<d;k++){const D=f[k],F=b[k],L=R[k],I=T*w*4*k;for(let W=0;W<D.count;W++){const X=W*S;g===!0&&(s.fromBufferAttribute(D,W),E[I+X+0]=s.x,E[I+X+1]=s.y,E[I+X+2]=s.z,E[I+X+3]=0),x===!0&&(s.fromBufferAttribute(F,W),E[I+X+4]=s.x,E[I+X+5]=s.y,E[I+X+6]=s.z,E[I+X+7]=0),m===!0&&(s.fromBufferAttribute(L,W),E[I+X+8]=s.x,E[I+X+9]=s.y,E[I+X+10]=s.z,E[I+X+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Nt(T,w)},n.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Av(i,t,e,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Rv={[Lu]:"LINEAR_TONE_MAPPING",[Du]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Uu]:"AGX_TONE_MAPPING",[Nu]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};function Cv(i,t,e,n,s,a){const r=new ni(t,e,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ne;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));const h=new m0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(c,h),u=new zo(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,f=null,b=[],R=!1;this.setSize=function(y,T){r.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let w=0;w<b.length;w++){const E=b[w];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){b=y,R=b.length>0&&b[0].isRenderPass===!0;const T=r.width,w=r.height;b.length>0&&o===null&&(o=new ni(T,w,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(T,w,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<b.length;E++){const v=b[E];v.setSize&&v.setSize(T,w)}},this.begin=function(y,T){if(x||y.toneMapping===wi&&b.length===0)return!1;if(f=T,T!==null){const w=T.width,E=T.height;(r.width!==w||r.height!==E)&&this.setSize(w,E)}return R===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return R},this.end=function(y,T){y.toneMapping=m,x=!0;let w=r,E=o;for(let v=0;v<b.length;v++){const S=b[v];S.enabled!==!1&&(S.render(y,E,w,T),S.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},oe.getTransfer(p)===Me&&(h.defines.SRGB_TRANSFER="");const v=Rv[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(f),y.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const df=new yn,Lc=new fr(1,1),uf=new Xu,ff=new Wp,pf=new nf,wd=[],Ed=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Aa(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=wd[s];if(a===void 0&&(a=new Float32Array(s),wd[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function Iv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),nn(e,n)}}function Uv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),nn(e,n)}}function Nv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),nn(e,n)}}function Fv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function Hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function Yv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Lc.compareFunction=e.isReversedDepthBuffer()?ih:nh,a=Lc):a=df,e.setTexture2D(t||a,s)}function Xv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function qv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pf,s)}function Kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uf,s)}function $v(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return kv;case 35674:return Iv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Zv(i,t){i.uniform1fv(this.addr,t)}function Jv(i,t){const e=Aa(t,this.size,2);i.uniform2fv(this.addr,e)}function Qv(i,t){const e=Aa(t,this.size,3);i.uniform3fv(this.addr,e)}function jv(i,t){const e=Aa(t,this.size,4);i.uniform4fv(this.addr,e)}function t_(i,t){const e=Aa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e_(i,t){const e=Aa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n_(i,t){const e=Aa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function a_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function l_(i,t){i.uniform2uiv(this.addr,t)}function c_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function d_(i,t,e){const n=this.cache,s=t.length,a=Vo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Lc:r=df;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function u_(i,t,e){const n=this.cache,s=t.length,a=Vo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ff,a[r])}function f_(i,t,e){const n=this.cache,s=t.length,a=Vo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||pf,a[r])}function p_(i,t,e){const n=this.cache,s=t.length,a=Vo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||uf,a[r])}function m_(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return jv;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return a_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$v(e.type)}}class v_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}}class __{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function x_(i,t,e){const n=i.name,s=n.length;for(Sl.lastIndex=0;;){const a=Sl.exec(n),r=Sl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Cd(e,c===void 0?new g_(o,i,t):new v_(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new __(o),Cd(e,d)),e=d}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);x_(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Pd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y_=37297;let M_=0;function b_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Ld=new Yt;function S_(i){oe._getMatrix(Ld,oe.workingColorSpace,i);const t=`mat3( ${Ld.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+b_(i.getShaderSource(t),o)}else return a}function w_(i,t){const e=S_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const E_={[Lu]:"Linear",[Du]:"Reinhard",[ku]:"Cineon",[Kc]:"ACESFilmic",[Uu]:"AgX",[Nu]:"Neutral",[Iu]:"Custom"};function T_(i,t){const e=E_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new A;function A_(){oe.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function C_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Za(i){return i!==""}function kd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(L_,k_)}const D_=new Map;function k_(i,t){let e=Jt[t];if(e===void 0){const n=D_.get(t);if(n!==void 0)e=Jt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dc(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(I_,U_)}function U_(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Nd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const N_={[er]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function F_(i){return N_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const O_={[Ps]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function B_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":O_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const z_={[Ma]:"ENVMAP_MODE_REFRACTION"};function H_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V_={[qc]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function G_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V_[i.combine]||"ENVMAP_BLENDING_NONE"}function W_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Y_(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=F_(e),c=B_(e),h=H_(e),d=G_(e),u=W_(e),p=R_(e),g=C_(a),x=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Za).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Za).join(`
`),f.length>0&&(f+=`
`)):(m=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),f=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==wi?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),A_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Za).join(`
`)),r=Dc(r),r=kd(r,e),r=Id(r,e),o=Dc(o),o=kd(o,e),o=Id(o,e),r=Ud(r),o=Ud(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=b+m+r,y=b+f+o,T=Pd(s,s.VERTEX_SHADER,R),w=Pd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(k){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(w)||"",I=D.trim(),W=F.trim(),X=L.trim();let nt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,w);else{const j=Dd(s,T,"vertex"),it=Dd(s,w,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+I+`
`+j+`
`+it)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(W===""||X==="")&&(Y=!1);Y&&(k.diagnostics={runnable:nt,programLog:I,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(T),s.deleteShader(w),v=new yo(s,x),S=P_(s,x)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,y_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new K_(t),e.set(t,n)),n}}class K_{constructor(t){this.id=X_++,this.code=t,this.usedTimes=0}}function $_(i){return i===Ls||i===So||i===wo}function Z_(i,t,e,n,s,a){const r=new qu,o=new q_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,S,C,k,D,F){const L=k.fog,I=D.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||W,X),Y=nt&&nt.mapping===Fo?nt.image.height:null,j=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Bt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const it=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Lt=it!==void 0?it.length:0;let Ct=0;I.morphAttributes.position!==void 0&&(Ct=1),I.morphAttributes.normal!==void 0&&(Ct=2),I.morphAttributes.color!==void 0&&(Ct=3);let ge,qt,te,$;if(j){const Se=Mi[j];ge=Se.vertexShader,qt=Se.fragmentShader}else{ge=v.vertexShader,qt=v.fragmentShader;const Se=o.getVertexShaderStage(v),pe=o.getFragmentShaderStage(v);o.update(v,Se,pe),te=Se.id,$=pe.id}const et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),It=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Kt=!!v.map,Ge=!!v.matcap,$t=!!nt,ee=!!v.aoMap,fe=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,xe=!!v.normalMap,Fe=!!v.displacementMap,sn=!!v.emissiveMap,Ce=!!v.metalnessMap,He=!!v.roughnessMap,O=v.anisotropy>0,Oe=v.clearcoat>0,he=v.dispersion>0,P=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,V=v.transmission>0,K=O&&!!v.anisotropyMap,at=Oe&&!!v.clearcoatMap,lt=Oe&&!!v.clearcoatNormalMap,Z=Oe&&!!v.clearcoatRoughnessMap,tt=_&&!!v.iridescenceMap,ct=_&&!!v.iridescenceThicknessMap,Tt=B&&!!v.sheenColorMap,ut=B&&!!v.sheenRoughnessMap,rt=!!v.specularMap,bt=!!v.specularColorMap,Dt=!!v.specularIntensityMap,Gt=V&&!!v.transmissionMap,N=V&&!!v.thicknessMap,ot=!!v.gradientMap,Q=!!v.alphaMap,ht=v.alphaTest>0,pt=!!v.alphaHash,st=!!v.extensions;let Pt=wi;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const St={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:qt,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:It,instancingColor:It&&D.instanceColor!==null,instancingMorph:It&&D.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:Ge,envMap:$t,envMapMode:$t&&nt.mapping,envMapCubeUVHeight:Y,aoMap:ee,lightMap:fe,bumpMap:Ft,normalMap:xe,displacementMap:Fe,emissiveMap:sn,normalMapObjectSpace:xe&&v.normalMapType===dp,normalMapTangentSpace:xe&&v.normalMapType===Eo,packedNormalMap:xe&&v.normalMapType===Eo&&$_(v.normalMap.format),metalnessMap:Ce,roughnessMap:He,anisotropy:O,anisotropyMap:K,clearcoat:Oe,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:Z,dispersion:he,retroreflection:P,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:B,sheenColorMap:Tt,sheenRoughnessMap:ut,specularMap:rt,specularColorMap:bt,specularIntensityMap:Dt,transmission:V,transmissionMap:Gt,thicknessMap:N,gradientMap:ot,opaque:v.transparent===!1&&v.blending===ma&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:pt,combine:v.combine,mapUv:Kt&&g(v.map.channel),aoMapUv:ee&&g(v.aoMap.channel),lightMapUv:fe&&g(v.lightMap.channel),bumpMapUv:Ft&&g(v.bumpMap.channel),normalMapUv:xe&&g(v.normalMap.channel),displacementMapUv:Fe&&g(v.displacementMap.channel),emissiveMapUv:sn&&g(v.emissiveMap.channel),metalnessMapUv:Ce&&g(v.metalnessMap.channel),roughnessMapUv:He&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:at&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(v.sheenRoughnessMap.channel),specularMapUv:rt&&g(v.specularMap.channel),specularColorMapUv:bt&&g(v.specularColorMap.channel),specularIntensityMapUv:Dt&&g(v.specularIntensityMap.channel),transmissionMapUv:Gt&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xe||O),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Kt||Q),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&xe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===Me,decodeVideoTextureEmissive:sn&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hn,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(S,v),b(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function f(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function R(v){const S=p[v.type];let C;if(S){const k=Mi[S];C=rf.clone(k.uniforms)}else C=v.uniforms;return C}function y(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new Y_(i,S,v,s),c.push(C),h.set(S,C)),C}function T(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:E}}function J_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Od(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,m,f){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=r(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function l(u,p,g,x,m,f,b){b.reversedDepth===!0&&(m=-m);const R=o(u,p,g,x,m,f);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,p,g,x,m,f){const b=o(u,p,g,x,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(p||Fd),s.length>1&&s.sort(p||Fd)}function d(){for(let u=t,p=i.length;u<p;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function j_(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new Od,i.set(n,[r])):s>=a.length?(r=new Od,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new kt};break;case"SpotLight":e={position:new A,direction:new A,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ex(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let nx=0;function ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sx(i){const t=new tx,e=ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,a=new ae,r=new ae;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,R=0,y=0,T=0,w=0,E=0,v=0,S=0,C=0;c.sort(ix);for(let D=0,F=c.length;D<F;D++){const L=c[D],I=L.color,W=L.intensity,X=L.distance;let nt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ls?nt=L.shadow.map.texture:nt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*W,d+=I.g*W,u+=I.b*W;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],W);C++}else if(L.isSunLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=nt;const Lt=j.getViewportCount();for(let Ct=0;Ct<Lt;Ct++)n.sunShadowMatrix[x+Ct]=j.getMatrix(Ct),n.sunShadowCascade[x+Ct]=j._cascadeData[Ct];x+=Lt,g++}n.sun[p]=Y,p++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(I).multiplyScalar(W),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[b]=Y;const j=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[b]=j.matrix,L.castShadow){const it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.spotShadow[b]=it,n.spotShadowMap[b]=nt,E++}b++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(I).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=Y,R++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,n.pointShadow[f]=it,n.pointShadowMap[f]=nt,n.pointShadowMatrix[f]=L.shadow.matrix,w++}n.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(W),Y.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[y]=Y,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const k=n.hash;(k.sunLength!==p||k.directionalLength!==m||k.pointLength!==f||k.spotLength!==b||k.rectAreaLength!==R||k.hemiLength!==y||k.numSunShadows!==g||k.numDirectionalShadows!==T||k.numPointShadows!==w||k.numSpotShadows!==E||k.numSpotMaps!==v||k.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=f,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,k.sunLength=p,k.directionalLength=m,k.pointLength=f,k.spotLength=b,k.rectAreaLength=R,k.hemiLength=y,k.numSunShadows=g,k.numDirectionalShadows=T,k.numPointShadows=w,k.numSpotShadows=E,k.numSpotMaps=v,k.numLightProbes=C,n.version=nx++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,m=0;const f=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){const y=c[b];if(y.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),d++}else if(y.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(y.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),r.identity(),a.copy(y.matrixWorld),a.premultiply(f),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),x++}else if(y.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Bd(i){const t=new sx(i),e=[],n=[],s=[];function a(u){d.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function ax(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Bd(i),t.set(s,[o])):a>=r.length?(o=new Bd(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],cx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],zd=new ae,Ba=new A,wl=new A;function hx(i,t,e){let n=new ch;const s=new Nt,a=new Nt,r=new ke,o=new v0,l=new _0,c={},h=e.maxTextureSize,d={[us]:xn,[xn]:us,[hn]:hn},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ue(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let f=this.type;this.render=function(w,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vf&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const S=i.getRenderTarget(),C=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Fi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=f!==this.type;F&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=w.length;L<I;L++){const W=w[L],X=W.shadow;if(X===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const nt=X.getFrameExtents();s.multiply(nt),a.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,X.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,X.mapSize.y=a.y));const Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===$a){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ni(s.x,s.y,{format:Ls,type:fi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new fr(s.x,s.y,di),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Hi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke}else W.isPointLight?(X.map=new hf(s.x),X.map.depthTexture=new d0(s.x,Ei)):(X.map=new ni(s.x,s.y),X.map.depthTexture=new fr(s.x,s.y,Ei)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Hi,this.type===er?(X.map.depthTexture.compareFunction=Y?ih:nh,X.map.depthTexture.minFilter=_n,X.map.depthTexture.magFilter=_n):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,v);for(let it=0;it<j;it++){const Lt=X.getCamera(it);if(W.isPointLight){const Ct=X.camera,ge=X.matrix,qt=W.distance||Ct.far;qt!==Ct.far&&(Ct.far=qt,Ct.updateProjectionMatrix()),Ba.setFromMatrixPosition(W.matrixWorld),Ct.position.copy(Ba),wl.copy(Ct.position),wl.add(lx[it]),Ct.up.copy(cx[it]),Ct.lookAt(wl),Ct.updateMatrixWorld(),ge.makeTranslation(-Ba.x,-Ba.y,-Ba.z),zd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(zd,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,it),i.clear();else{it===0&&(i.setRenderTarget(X.map),i.clear());const Ct=X.getViewport(it);r.set(a.x*Ct.x,a.y*Ct.y,a.x*Ct.z,a.y*Ct.w),D.viewport(r)}n=X.getFrustum(it),y(E,v,Lt,W,this.type)}X.isPointLightShadow!==!0&&this.type===$a&&b(X,v),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,C,k)};function b(w,E){const v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ni(s.x,s.y,{format:Ls,type:fi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,v,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,v,p,x,null)}function R(w,E,v,S){let C=null;const k=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)C=k;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=C.uuid,F=E.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let I=L[F];I===void 0&&(I=C.clone(),L[F]=I,E.addEventListener("dispose",T)),C=I}if(C.visible=E.visible,C.wireframe=E.wireframe,S===$a?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=v}return C}function y(w,E,v,S,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===$a)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const F=t.update(w),L=w.material;if(Array.isArray(L)){const I=F.groups;for(let W=0,X=I.length;W<X;W++){const nt=I[W],Y=L[nt.materialIndex];if(Y&&Y.visible){const j=R(w,Y,S,C);w.onBeforeShadow(i,w,E,v,F,j,nt),i.renderBufferDirect(v,null,F,j,w,nt),w.onAfterShadow(i,w,E,v,F,j,nt)}}}else if(L.visible){const I=R(w,L,S,C);w.onBeforeShadow(i,w,E,v,F,I,null),i.renderBufferDirect(v,null,F,I,w,null),w.onAfterShadow(i,w,E,v,F,I,null)}}const D=w.children;for(let F=0,L=D.length;F<L;F++)y(D[F],E,v,S,C)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const S=c[v],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function dx(i,t){function e(){let N=!1;const ot=new ke;let Q=null;const ht=new ke(0,0,0,0);return{setMask:function(pt){Q!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),Q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,st,Pt,St,Se){Se===!0&&(pt*=St,st*=St,Pt*=St),ot.set(pt,st,Pt,St),ht.equals(ot)===!1&&(i.clearColor(pt,st,Pt,St),ht.copy(ot))},reset:function(){N=!1,Q=null,ht.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,Q=null,ht=null,pt=null;return{setReversed:function(st){if(ot!==st){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ot=st;const St=pt;pt=null,this.setClear(St)}},getReversed:function(){return ot},setTest:function(st){st?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){Q!==st&&!N&&(i.depthMask(st),Q=st)},setFunc:function(st){if(ot&&(st=bp[st]),ht!==st){switch(st){case Yl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case ql:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Zl:i.depthFunc(i.GREATER);break;case Jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=st}},setLocked:function(st){N=st},setClear:function(st){pt!==st&&(pt=st,ot&&(st=1-st),i.clearDepth(st))},reset:function(){N=!1,Q=null,ht=null,pt=null,ot=!1}}}function s(){let N=!1,ot=null,Q=null,ht=null,pt=null,st=null,Pt=null,St=null,Se=null;return{setTest:function(pe){N||(pe?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(pe){ot!==pe&&!N&&(i.stencilMask(pe),ot=pe)},setFunc:function(pe,J,dt){(Q!==pe||ht!==J||pt!==dt)&&(i.stencilFunc(pe,J,dt),Q=pe,ht=J,pt=dt)},setOp:function(pe,J,dt){(st!==pe||Pt!==J||St!==dt)&&(i.stencilOp(pe,J,dt),st=pe,Pt=J,St=dt)},setLocked:function(pe){N=pe},setClear:function(pe){Se!==pe&&(i.clearStencil(pe),Se=pe)},reset:function(){N=!1,ot=null,Q=null,ht=null,pt=null,st=null,Pt=null,St=null,Se=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,b=null,R=null,y=null,T=null,w=null,E=null,v=new kt(0,0,0),S=0,C=!1,k=null,D=null,F=null,L=null,I=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,nt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=nt>=2);let j=null,it={};const Lt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),ge=new ke().fromArray(Lt),qt=new ke().fromArray(Ct);function te(N,ot,Q,ht){const pt=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Q;Pt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ot+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return st}const $={};$[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(i.DEPTH_TEST),r.setFunc(lr),Ft(!1),xe(Uh),et(i.CULL_FACE),ee(Fi);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function It(N,ot){return u[N]!==ot?(i.bindFramebuffer(N,ot),u[N]=ot,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(N,ot){let Q=g,ht=!1;if(N){Q=p.get(ot),Q===void 0&&(Q=[],p.set(ot,Q));const pt=N.textures;if(Q.length!==pt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Pt=pt.length;st<Pt;st++)Q[st]=i.COLOR_ATTACHMENT0+st;Q.length=pt.length,ht=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Q)}function Kt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}const Ge={[ca]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Yf]:i.FUNC_REVERSE_SUBTRACT};Ge[Xf]=i.MIN,Ge[qf]=i.MAX;const $t={[Kf]:i.ZERO,[$f]:i.ONE,[Zf]:i.SRC_COLOR,[Cu]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[Jf]:i.ONE_MINUS_SRC_COLOR,[Pu]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[ap]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(N,ot,Q,ht,pt,st,Pt,St,Se,pe){if(N===Fi){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),N!==Gf){if(N!==f||pe!==C){if((b!==ca||T!==ca)&&(i.blendEquation(i.FUNC_ADD),b=ca,T=ca),pe)switch(N){case ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",N);break}else switch(N){case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",N);break}R=null,y=null,w=null,E=null,v.set(0,0,0),S=0,f=N,C=pe}return}pt=pt||ot,st=st||Q,Pt=Pt||ht,(ot!==b||pt!==T)&&(i.blendEquationSeparate(Ge[ot],Ge[pt]),b=ot,T=pt),(Q!==R||ht!==y||st!==w||Pt!==E)&&(i.blendFuncSeparate($t[Q],$t[ht],$t[st],$t[Pt]),R=Q,y=ht,w=st,E=Pt),(St.equals(v)===!1||Se!==S)&&(i.blendColor(St.r,St.g,St.b,Se),v.copy(St),S=Se),f=N,C=!1}function fe(N,ot){N.side===hn?vt(i.CULL_FACE):et(i.CULL_FACE);let Q=N.side===xn;ot&&(Q=!Q),Ft(Q),N.blending===ma&&N.transparent===!1?ee(Fi):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),sn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){k!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),k=N)}function xe(N){N!==zf?(et(i.CULL_FACE),N!==D&&(N===Uh?i.cullFace(i.BACK):N===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=N}function Fe(N){N!==F&&(X&&i.lineWidth(N),F=N)}function sn(N,ot,Q){N?(et(i.POLYGON_OFFSET_FILL),(L!==ot||I!==Q)&&(L=ot,I=Q,r.getReversed()&&(ot=-ot),i.polygonOffset(ot,Q))):vt(i.POLYGON_OFFSET_FILL)}function Ce(N){N?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function He(N){N===void 0&&(N=i.TEXTURE0+W-1),j!==N&&(i.activeTexture(N),j=N)}function O(N,ot,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+W-1:Q=j);let ht=it[Q];ht===void 0&&(ht={type:void 0,texture:void 0},it[Q]=ht),(ht.type!==N||ht.texture!==ot)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(N,ot||$[N]),ht.type=N,ht.texture=ot)}function Oe(){const N=it[j];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(N){ue("WebGLState:",N)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(N){ue("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){ue("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){ue("WebGLState:",N)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ue("WebGLState:",N)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ue("WebGLState:",N)}}function at(){try{i.texStorage2D(...arguments)}catch(N){ue("WebGLState:",N)}}function lt(){try{i.texStorage3D(...arguments)}catch(N){ue("WebGLState:",N)}}function Z(){try{i.texImage2D(...arguments)}catch(N){ue("WebGLState:",N)}}function tt(){try{i.texImage3D(...arguments)}catch(N){ue("WebGLState:",N)}}function ct(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Tt(N,ot){d[N]!==ot&&(i.pixelStorei(N,ot),d[N]=ot)}function ut(N){ge.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ge.copy(N))}function rt(N){qt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),qt.copy(N))}function bt(N,ot){let Q=c.get(ot);Q===void 0&&(Q=new WeakMap,c.set(ot,Q));let ht=Q.get(N);ht===void 0&&(ht=i.getUniformBlockIndex(ot,N.name),Q.set(N,ht))}function Dt(N,ot){const ht=c.get(ot).get(N);l.get(ot)!==ht&&(i.uniformBlockBinding(ot,ht,N.__bindingPointIndex),l.set(ot,ht))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,it={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,b=null,R=null,y=null,T=null,w=null,E=null,v=new kt(0,0,0),S=0,C=!1,k=null,D=null,F=null,L=null,I=null,ge.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:vt,bindFramebuffer:It,drawBuffers:_t,useProgram:Kt,setBlending:ee,setMaterial:fe,setFlipSided:Ft,setCullFace:xe,setLineWidth:Fe,setPolygonOffset:sn,setScissorTest:Ce,activeTexture:He,bindTexture:O,unbindTexture:Oe,compressedTexImage2D:he,compressedTexImage3D:P,texImage2D:Z,texImage3D:tt,pixelStorei:Tt,getParameter:ct,updateUBOMapping:bt,uniformBlockBinding:Dt,texStorage2D:at,texStorage3D:lt,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ut,viewport:rt,reset:Gt}}function ux(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,_){return g?new OffscreenCanvas(P,_):Ro("canvas")}function m(P,_,B){let V=1;const K=he(P);if((K.width>B||K.height>B)&&(V=B/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const at=Math.floor(V*K.width),lt=Math.floor(V*K.height);u===void 0&&(u=x(at,lt));const Z=_?x(at,lt):u;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(P,0,0,at,lt),Bt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+lt+")."),Z}else return"data"in P&&Bt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function f(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,_,B,V,K,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt;V&&(lt=t.get("EXT_texture_norm16"),lt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),B===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),B===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),B===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){const tt=at?Ao:oe.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=tt===Me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),B===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(P,_){let B;return P?_===null||_===Ei||_===hr?B=i.DEPTH24_STENCIL8:_===di?B=i.DEPTH32F_STENCIL8:_===cr&&(B=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ei||_===hr?B=i.DEPTH_COMPONENT24:_===di?B=i.DEPTH_COMPONENT32F:_===cr&&(B=i.DEPTH_COMPONENT16),B}function w(P,_){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ke&&P.minFilter!==_n?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function E(P){const _=P.target;_.removeEventListener("dispose",E),S(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(P){const _=P.target;_.removeEventListener("dispose",v),k(_)}function S(P){const _=n.get(P);if(_.__webglInit===void 0)return;const B=P.source,V=p.get(B);if(V){const K=V[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(P),Object.keys(V).length===0&&p.delete(B)}n.remove(P)}function C(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const B=P.source,V=p.get(B);delete V[_.__cacheKey],r.memory.textures--}function k(P){const _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[V][K]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=P.textures;for(let V=0,K=B.length;V<K;V++){const at=n.get(B[V]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),r.memory.textures--),n.remove(B[V])}n.remove(P)}let D=0;function F(){D=0}function L(){return D}function I(P){D=P}function W(){const P=D;return P>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function X(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function nt(P,_){const B=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const V=P.image;if(V===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,P,_);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(P,_){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){vt(B,P,_);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function j(P,_){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){vt(B,P,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function it(P,_){const B=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){It(B,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const Lt={[Ql]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[jl]:i.MIRRORED_REPEAT},Ct={[Ke]:i.NEAREST,[cp]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},ge={[fp]:i.NEVER,[_p]:i.ALWAYS,[pp]:i.LESS,[nh]:i.LEQUAL,[mp]:i.EQUAL,[ih]:i.GEQUAL,[gp]:i.GREATER,[vp]:i.NOTEQUAL};function qt(P,_){if(_.type===di&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===_n||_.magFilter===Ko||_.magFilter===xr||_.magFilter===Rs||_.minFilter===_n||_.minFilter===Ko||_.minFilter===xr||_.minFilter===Rs)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Lt[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Lt[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Lt[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ct[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ct[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==xr&&_.minFilter!==Rs||_.type===di&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(P,_){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",E));const V=_.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const at=X(_);if(at!==P.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),K[at].usedTimes++;const lt=K[P.__cacheKey];lt!==void 0&&(K[P.__cacheKey].usedTimes--,lt.usedTimes===0&&C(_)),P.__cacheKey=at,P.__webglTexture=K[at].texture}return B}function $(P,_,B){return Math.floor(Math.floor(P/B)/_)}function et(P,_,B,V){const at=P.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,V,_.data);else{at.sort((Tt,ut)=>Tt.start-ut.start);let lt=0;for(let Tt=1;Tt<at.length;Tt++){const ut=at[lt],rt=at[Tt],bt=ut.start+ut.count,Dt=$(rt.start,_.width,4),Gt=$(ut.start,_.width,4);rt.start<=bt+1&&Dt===Gt&&$(rt.start+rt.count-1,_.width,4)===Dt?ut.count=Math.max(ut.count,rt.start+rt.count-ut.start):(++lt,at[lt]=rt)}at.length=lt+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Tt=0,ut=at.length;Tt<ut;Tt++){const rt=at[Tt],bt=Math.floor(rt.start/4),Dt=Math.ceil(rt.count/4),Gt=bt%_.width,N=Math.floor(bt/_.width),ot=Dt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Gt,N,ot,Q,B,V,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function vt(P,_,B){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const K=te(P,_),at=_.source;e.bindTexture(V,P.__webglTexture,i.TEXTURE0+B);const lt=n.get(at);if(at.version!==lt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=oe.getPrimaries(oe.workingColorSpace),ht=_.colorSpace===ls?null:oe.getPrimaries(_.colorSpace),pt=_.colorSpace===ls||Q===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=Oe(_,tt);const ct=a.convert(_.format,_.colorSpace),Tt=a.convert(_.type);let ut=y(_.internalFormat,ct,Tt,_.normalized,_.colorSpace,_.isVideoTexture);qt(V,_);let rt;const bt=_.mipmaps,Dt=_.isVideoTexture!==!0,Gt=lt.__version===void 0||K===!0,N=at.dataReady,ot=w(_,tt);if(_.isDepthTexture)ut=T(_.format===Cs,_.type),Gt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ct,Tt,null));else if(_.isDataTexture)if(bt.length>0){Dt&&Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,bt[0].width,bt[0].height);for(let Q=0,ht=bt.length;Q<ht;Q++)rt=bt[Q],Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,Tt,rt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,ct,Tt,rt.data);_.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,tt.width,tt.height),N&&et(_,tt,ct,Tt)):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ct,Tt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ut,bt[0].width,bt[0].height,tt.depth);for(let Q=0,ht=bt.length;Q<ht;Q++)if(rt=bt[Q],_.format!==Yn)if(ct!==null)if(Dt){if(N)if(_.layerUpdates.size>0){const pt=_d(rt.width,rt.height,_.format,_.type);for(const st of _.layerUpdates){const Pt=rt.data.subarray(st*pt/rt.data.BYTES_PER_ELEMENT,(st+1)*pt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,st,rt.width,rt.height,1,ct,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ct,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ut,rt.width,rt.height,tt.depth,0,rt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ct,Tt,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ut,rt.width,rt.height,tt.depth,0,ct,Tt,rt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Dt&&Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,bt[0].width,bt[0].height);for(let Q=0,ht=bt.length;Q<ht;Q++)rt=bt[Q],_.format!==Yn?ct!==null?Dt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,rt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,Tt,rt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,ct,Tt,rt.data)}else if(_.isDataArrayTexture)if(Dt){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ut,tt.width,tt.height,tt.depth),N)if(_.layerUpdates.size>0){const Q=_d(tt.width,tt.height,_.format,_.type);for(const ht of _.layerUpdates){const pt=tt.data.subarray(ht*Q/tt.data.BYTES_PER_ELEMENT,(ht+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,tt.width,tt.height,1,ct,Tt,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,tt.width,tt.height,tt.depth,0,ct,Tt,tt.data);else if(_.isData3DTexture)Dt?(Gt&&e.texStorage3D(i.TEXTURE_3D,ot,ut,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ut,tt.width,tt.height,tt.depth,0,ct,Tt,tt.data);else if(_.isFramebufferTexture){if(Gt)if(Dt)e.texStorage2D(i.TEXTURE_2D,ot,ut,tt.width,tt.height);else{let Q=tt.width,ht=tt.height;for(let pt=0;pt<ot;pt++)e.texImage2D(i.TEXTURE_2D,pt,ut,Q,ht,0,ct,Tt,null),Q>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(_),Q.onpaint=ht=>{const pt=ht.changedElements;for(const st of d)pt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const pt=i.RGBA,st=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,st,Pt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Dt&&Gt){const Q=he(bt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ut,Q.width,Q.height)}for(let Q=0,ht=bt.length;Q<ht;Q++)rt=bt[Q],Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct,Tt,rt):e.texImage2D(i.TEXTURE_2D,Q,ut,ct,Tt,rt);_.generateMipmaps=!1}else if(Dt){if(Gt){const Q=he(tt);e.texStorage2D(i.TEXTURE_2D,ot,ut,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,ut,ct,Tt,tt);f(_)&&b(V),lt.__version=at.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function It(P,_,B){if(_.image.length!==6)return;const V=te(P,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);const at=n.get(K);if(K.version!==at.__version||V===!0){e.activeTexture(i.TEXTURE0+B);const lt=oe.getPrimaries(oe.workingColorSpace),Z=_.colorSpace===ls?null:oe.getPrimaries(_.colorSpace),tt=_.colorSpace===ls||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ct=_.isCompressedTexture||_.image[0].isCompressedTexture,Tt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let st=0;st<6;st++)!ct&&!Tt?ut[st]=m(_.image[st],!0,s.maxCubemapSize):ut[st]=Tt?_.image[st].image:_.image[st],ut[st]=Oe(_,ut[st]);const rt=ut[0],bt=a.convert(_.format,_.colorSpace),Dt=a.convert(_.type),Gt=y(_.internalFormat,bt,Dt,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ot=at.__version===void 0||V===!0,Q=K.dataReady;let ht=w(_,rt);qt(i.TEXTURE_CUBE_MAP,_);let pt;if(ct){N&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,rt.width,rt.height);for(let st=0;st<6;st++){pt=ut[st].mipmaps;for(let Pt=0;Pt<pt.length;Pt++){const St=pt[Pt];_.format!==Yn?bt!==null?N?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Gt,St.width,St.height,0,St.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,St.width,St.height,bt,Dt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Gt,St.width,St.height,0,bt,Dt,St.data)}}}else{if(pt=_.mipmaps,N&&ot){pt.length>0&&ht++;const st=he(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,st.width,st.height)}for(let st=0;st<6;st++)if(Tt){N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ut[st].width,ut[st].height,bt,Dt,ut[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,ut[st].width,ut[st].height,0,bt,Dt,ut[st].data);for(let Pt=0;Pt<pt.length;Pt++){const Se=pt[Pt].image[st].image;N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,Se.width,Se.height,bt,Dt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Gt,Se.width,Se.height,0,bt,Dt,Se.data)}}else{N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt,Dt,ut[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,bt,Dt,ut[st]);for(let Pt=0;Pt<pt.length;Pt++){const St=pt[Pt];N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,bt,Dt,St.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Gt,bt,Dt,St.image[st])}}}f(_)&&b(i.TEXTURE_CUBE_MAP),at.__version=K.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function _t(P,_,B,V,K,at){const lt=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),tt=y(B.internalFormat,lt,Z,B.normalized,B.colorSpace),ct=n.get(_),Tt=n.get(B);if(Tt.__renderTarget=_,!ct.__hasExternalTextures){const ut=Math.max(1,_.width>>at),rt=Math.max(1,_.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,tt,ut,rt,_.depth,0,lt,Z,null):e.texImage2D(K,at,tt,ut,rt,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Tt.__webglTexture,0,Ce(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Tt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(P,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,at=T(_.stencilBuffer,K),lt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(_),at,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,P)}else{const V=_.textures;for(let K=0;K<V.length;K++){const at=V[K],lt=a.convert(at.format,at.colorSpace),Z=a.convert(at.type),tt=y(at.internalFormat,lt,Z,at.normalized,at.colorSpace);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(_),tt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(P,_,B){const V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_.depthTexture);const ct=a.convert(_.depthTexture.format),Tt=a.convert(_.depthTexture.type);let ut;_.depthTexture.format===Hi?ut=i.DEPTH_COMPONENT24:_.depthTexture.format===Cs&&(ut=i.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ut,_.width,_.height,0,ct,Tt,null)}}else nt(_.depthTexture,0);const at=K.__webglTexture,lt=Ce(_),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=_.depthTexture.format===Cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,at,0);else if(_.depthTexture.format===Cs)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(P){const _=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const V=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=V}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Ge(_.__webglFramebuffer[V],P,V);else{const V=P.texture.mipmaps;V&&V.length>0?Ge(_.__webglFramebuffer[0],P,0):Ge(_.__webglFramebuffer,P,0)}else if(B){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Kt(_.__webglDepthbuffer[V],P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else{const V=P.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Kt(_.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(P,_,B){const V=n.get(P);_!==void 0&&_t(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(P)}function fe(P){const _=P.texture,B=n.get(P),V=n.get(_);P.addEventListener("dispose",v);const K=P.textures,at=P.isWebGLCubeRenderTarget===!0,lt=K.length>1;if(lt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,r.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let tt=0;tt<_.mipmaps.length;tt++)B.__webglFramebuffer[Z][tt]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,tt=K.length;Z<tt;Z++){const ct=n.get(K[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&He(P)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const tt=K[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ct=a.convert(tt.format,tt.colorSpace),Tt=a.convert(tt.type),ut=y(tt.internalFormat,ct,Tt,tt.normalized,tt.colorSpace,P.isXRRenderTarget===!0),rt=Ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ut,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(B.__webglFramebuffer[Z][tt],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else _t(B.__webglFramebuffer[Z],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,tt=K.length;Z<tt;Z++){const ct=K[Z],Tt=n.get(ct);let ut=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Tt.__webglTexture),qt(ut,ct),_t(B.__webglFramebuffer,P,ct,i.COLOR_ATTACHMENT0+Z,ut,0),f(ct)&&b(ut)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),qt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(B.__webglFramebuffer[tt],P,_,i.COLOR_ATTACHMENT0,Z,tt);else _t(B.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,Z,0);f(_)&&b(Z),e.unbindTexture()}P.depthBuffer&&$t(P)}function Ft(P){const _=P.textures;for(let B=0,V=_.length;B<V;B++){const K=_[B];if(f(K)){const at=R(P),lt=n.get(K).__webglTexture;e.bindTexture(at,lt),b(at),e.unbindTexture()}}}const xe=[],Fe=[];function sn(P){if(P.samples>0){if(He(P)===!1){const _=P.textures,B=P.width,V=P.height;let K=i.COLOR_BUFFER_BIT;const at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(P),Z=_.length>1;if(Z)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const tt=P.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Tt=n.get(_[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,K,i.NEAREST),l===!0&&(xe.length=0,Fe.length=0,xe.push(i.COLOR_ATTACHMENT0+ct),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xe.push(at),Fe.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Tt=n.get(_[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ce(P){return Math.min(s.maxSamples,P.samples)}function He(P){const _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(P){const _=r.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function Oe(P,_){const B=P.colorSpace,V=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==To&&B!==ls&&(oe.getTransfer(B)===Me?(V!==Yn||K!==Gn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",B)),_}function he(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=nt,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=ee,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fx(i,t){function e(n,s=ls){let a;const r=oe.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Vu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===Yn)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===Ls)return i.RG;if(n===th)return i.RG_INTEGER;if(n===eh)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(r===Me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===ac||n===rc||n===oc||n===lc||n===So||n===cc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sc||n===ac)return r===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return a.COMPRESSED_R11_EAC;if(n===lc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===So)return a.COMPRESSED_RG11_EAC;if(n===cc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===dc||n===uc||n===fc||n===pc||n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===Mc||n===bc||n===Sc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===hc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ec||n===Tc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===wc)return r===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===wo||n===Cc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ac)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new sf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vx extends ks{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new gx,f={},b=e.getContextAttributes();let R=null,y=null;const T=[],w=[],E=new Nt;let v=null,S=null;const C=new jn;C.viewport=new ke;const k=new jn;k.viewport=new ke;const D=[C,k],F=new E0;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=T[$];return et===void 0&&(et=new el,T[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=T[$];return et===void 0&&(et=new el,T[$]=et),et.getGripSpace()},this.getHand=function($){let et=T[$];return et===void 0&&(et=new el,T[$]=et),et.getHandSpace()};function W($){const et=w.indexOf($.inputSource);if(et===-1)return;const vt=T[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||r),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<T.length;$++){const et=w[$];et!==null&&(w[$]=null,T[$].disconnect(et))}L=null,I=null,m.reset();for(const $ in f)delete f[$];if(t.setRenderTarget(R),p=null,u=null,d=null,s=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),S!==null){const $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,It=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?Cs:Hi,It=b.stencil?hr:Ei);const Kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ni(u.textureWidth,u.textureHeight,{format:Yn,type:Gn,depthTexture:new fr(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ni(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt($){for(let et=0;et<$.removed.length;et++){const vt=$.removed[et],It=w.indexOf(vt);It>=0&&(w[It]=null,T[It].disconnect(vt))}for(let et=0;et<$.added.length;et++){const vt=$.added[et];let It=w.indexOf(vt);if(It===-1){for(let Kt=0;Kt<T.length;Kt++)if(Kt>=w.length){w.push(vt),It=Kt;break}else if(w[Kt]===null){w[Kt]=vt,It=Kt;break}if(It===-1)break}const _t=T[It];_t&&_t.connect(vt)}}const Y=new A,j=new A;function it($,et,vt){Y.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const It=Y.distanceTo(j),_t=et.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,Ge=_t[14]/(_t[10]-1),$t=_t[14]/(_t[10]+1),ee=(_t[9]+1)/_t[5],fe=(_t[9]-1)/_t[5],Ft=(_t[8]-1)/_t[0],xe=(Kt[8]+1)/Kt[0],Fe=Ge*Ft,sn=Ge*xe,Ce=It/(-Ft+xe),He=Ce*-Ft;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const O=Ge+Ce,Oe=$t+Ce,he=Fe-He,P=sn+(It-He),_=ee*$t/Oe*O,B=fe*$t/Oe*O;$.projectionMatrix.makePerspective(he,P,_,B,O,Oe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Lt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),F.near=k.near=C.near=et,F.far=k.far=C.far=vt,(L!==F.near||I!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,I=F.far),F.layers.mask=$.layers.mask|6,C.layers.mask=F.layers.mask&-5,k.layers.mask=F.layers.mask&-3;const It=$.parent,_t=F.cameras;Lt(F,It);for(let Kt=0;Kt<_t.length;Kt++)Lt(_t[Kt],It);_t.length===2?it(F,C,k):F.projectionMatrix.copy(C.projectionMatrix),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),Ct($,F,It)};function Ct($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return f[$]};let ge=null;function qt($,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let It=!1;vt.length!==F.cameras.length&&(F.cameras.length=0,It=!0);for(let $t=0;$t<vt.length;$t++){const ee=vt[$t];let fe=null;if(p!==null)fe=p.getViewport(ee);else{const xe=d.getViewSubImage(u,ee);fe=xe.viewport,$t===0&&(t.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(y))}let Ft=D[$t];Ft===void 0&&(Ft=new jn,Ft.layers.enable($t),Ft.viewport=new ke,D[$t]=Ft),Ft.matrix.fromArray(ee.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(ee.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(fe.x,fe.y,fe.width,fe.height),$t===0&&(F.matrix.copy(Ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),It===!0&&F.cameras.push(Ft)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const $t=d.getDepthInformation(vt[0]);$t&&$t.isValid&&$t.texture&&m.init($t,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let $t=0;$t<vt.length;$t++){const ee=vt[$t].camera;if(ee){let fe=f[ee];fe||(fe=new sf,f[ee]=fe);const Ft=d.getCameraImage(ee);fe.sourceTexture=Ft}}}}for(let vt=0;vt<T.length;vt++){const It=w[vt],_t=T[vt];It!==null&&_t!==void 0&&_t.update(It,et,c||r)}ge&&ge($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new lf;te.setAnimationLoop(qt),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const _x=new ae,mf=new Yt;mf.set(-1,0,0,0,1,0,0,0,1);function xx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,af(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,R,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),R=b.envMap,y=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yx(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const w=T.program;n.uniformBlockBinding(y,w)}function c(y,T){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",b));const E=T.program;n.updateUBOMapping(y,E);const v=t.render.frame;a[y.id]!==v&&(u(y),a[y.id]=v)}function h(y){const T=d();y.__bindingPointIndex=T;const w=i.createBuffer(),E=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=s[y.id],w=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,S=w.length;v<S;v++){const C=w[v];if(Array.isArray(C))for(let k=0,D=C.length;k<D;k++)p(C[k],v,k,E);else p(C,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,T,w,E){if(x(y,T,w,E)===!0){const v=y.__offset,S=y.value;if(Array.isArray(S)){let C=0;for(let k=0;k<S.length;k++){const D=S[k],F=f(D);g(D,y.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function x(y,T,w,E){const v=y.value,S=T+"_"+w;if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{const C=E[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(y){const T=y.uniforms;let w=0;const E=16;for(let S=0,C=T.length;S<C;S++){const k=Array.isArray(T[S])?T[S]:[T[S]];for(let D=0,F=k.length;D<F;D++){const L=k[D],I=Array.isArray(L.value)?L.value:[L.value];for(let W=0,X=I.length;W<X;W++){const nt=I[W],Y=f(nt),j=w%E,it=j%Y.boundary,Lt=j+it;w+=it,Lt!==0&&E-Lt<Y.storage&&(w+=E-Lt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Y.storage}}}const v=w%E;return v>0&&(w+=E-v),y.__size=w,y.__cache={},this}function f(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),T}function b(y){const T=y.target;T.removeEventListener("dispose",b);const w=r.indexOf(T.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function R(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:R}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function bx(){return _i===null&&(_i=new Oo(Mx,16,16,Ls,fi),_i.name="DFG_LUT",_i.minFilter=_n,_i.magFilter=_n,_i.wrapS=Ni,_i.wrapT=Ni,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class Sx{constructor(t={}){const{canvas:e=yp(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Gn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const x=p,m=new Set([eh,th,jc]),f=new Set([Gn,Ei,cr,hr,Zc,Jc]),b=new Uint32Array(4),R=new Int32Array(4),y=new A;let T=null,w=null;const E=[],v=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let k=!1,D=null,F=null,L=null,I=null;this._outputColorSpace=cn;let W=0,X=0,nt=null,Y=-1,j=null;const it=new ke,Lt=new ke;let Ct=null;const ge=new kt(0);let qt=0,te=e.width,$=e.height,et=1,vt=null,It=null;const _t=new ke(0,0,te,$),Kt=new ke(0,0,te,$);let Ge=!1;const $t=new ch;let ee=!1,fe=!1;const Ft=new ae,xe=new A,Fe=new ke,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function He(){return nt===null?et:1}let O=n;function Oe(M,U){return e.getContext(M,U)}let he,P,_,B,V,K,at,lt,Z,tt,ct,Tt,ut,rt,bt,Dt,Gt,N,ot,Q,ht,pt,st;try{const M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",J,!1),O===null){const U="webgl2";if(O=Oe(U,M),O===null)throw Oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(M){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",J,!1),ue("WebGLRenderer: "+M.message),M}function Pt(){he=new bv(O),he.init(),ht=new fx(O,he),P=new uv(O,he,t,ht),_=new dx(O,he),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=O.createFramebuffer(),L=O.createFramebuffer(),I=O.createFramebuffer(),B=new Ev(O),V=new J_,K=new ux(O,he,_,V,P,ht,B),at=new Mv(C),lt=new A0(O),pt=new hv(O,lt),Z=new Sv(O,lt,B,pt),tt=new Av(O,Z,lt,pt,B),N=new Tv(O,P,K),bt=new fv(V),ct=new Z_(C,at,he,P,pt,bt),Tt=new xx(C,V),ut=new j_,rt=new ax(he),Gt=new cv(C,at,_,tt,g,l),Dt=new hx(C,tt,P),st=new yx(O,B,P,_),ot=new dv(O,he,B),Q=new wv(O,he,B),B.programs=ct.programs,C.capabilities=P,C.extensions=he,C.properties=V,C.renderLists=ut,C.shadowMap=Dt,C.state=_,C.info=B}x!==Gn&&(S=new Cv(x,e.width,e.height,o,s,a));const St=new vx(C,O);this.xr=St,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(te,$,!1))},this.getSize=function(M){return M.set(te,$)},this.setSize=function(M,U,q=!0){if(St.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,$=U,e.width=Math.floor(M*et),e.height=Math.floor(U*et),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(te*et,$*et).floor()},this.setDrawingBufferSize=function(M,U,q){te=M,$=U,et=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===Gn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,U,q,z){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,U,q,z),_.viewport(it.copy(_t).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Kt)},this.setScissor=function(M,U,q,z){M.isVector4?Kt.set(M.x,M.y,M.z,M.w):Kt.set(M,U,q,z),_.scissor(Lt.copy(Kt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){_.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){vt=M},this.setTransparentSort=function(M){It=M},this.getClearColor=function(M){return M.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let z=0;if(M){let H=!1;if(nt!==null){const gt=nt.texture.format;H=m.has(gt)}if(H){const gt=nt.texture.type,Mt=f.has(gt),mt=Gt.getClearColor(),wt=Gt.getClearAlpha(),Rt=mt.r,Zt=mt.g,jt=mt.b;Mt?(b[0]=Rt,b[1]=Zt,b[2]=jt,b[3]=wt,O.clearBufferuiv(O.COLOR,0,b)):(R[0]=Rt,R[1]=Zt,R[2]=jt,R[3]=wt,O.clearBufferiv(O.COLOR,0,R))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Gt.dispose(),ut.dispose(),rt.dispose(),V.dispose(),at.dispose(),tt.dispose(),pt.dispose(),st.dispose(),ct.dispose(),St.dispose(),St.removeEventListener("sessionstart",ye),St.removeEventListener("sessionend",on),Ye.stop()};function Se(M){M.preventDefault(),Co("WebGLRenderer: Context Lost."),k=!0}function pe(){Co("WebGLRenderer: Context Restored."),k=!1;const M=B.autoReset,U=Dt.enabled,q=Dt.autoUpdate,z=Dt.needsUpdate,H=Dt.type;Pt(),B.autoReset=M,Dt.enabled=U,Dt.autoUpdate=q,Dt.needsUpdate=z,Dt.type=H}function J(M){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function dt(M){const U=M.target;U.removeEventListener("dispose",dt),At(U)}function At(M){Vt(M),V.remove(M)}function Vt(M){const U=V.get(M).programs;U!==void 0&&(U.forEach(function(q){ct.releaseProgram(q)}),M.isShaderMaterial&&ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,z,H,gt){U===null&&(U=sn);const Mt=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Ns(M,U,q,z,H);_.setMaterial(z,Mt);let wt=q.index,Rt=1;if(z.wireframe===!0){if(wt=Z.getWireframeAttribute(q),wt===void 0)return;Rt=2}const Zt=q.drawRange,jt=q.attributes.position;let Et=Zt.start*Rt,_e=(Zt.start+Zt.count)*Rt;gt!==null&&(Et=Math.max(Et,gt.start*Rt),_e=Math.min(_e,(gt.start+gt.count)*Rt)),wt!==null?(Et=Math.max(Et,0),_e=Math.min(_e,wt.count)):jt!=null&&(Et=Math.max(Et,0),_e=Math.min(_e,jt.count));const $e=_e-Et;if($e<0||$e===1/0)return;pt.setup(H,z,mt,q,wt);let Ie,Ae=ot;if(wt!==null&&(Ie=lt.get(wt),Ae=Q,Ae.setIndex(Ie)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*He()),Ae.setMode(O.LINES)):Ae.setMode(O.TRIANGLES);else if(H.isLine){let fn=z.linewidth;fn===void 0&&(fn=1),_.setLineWidth(fn*He()),H.isLineSegments?Ae.setMode(O.LINES):H.isLineLoop?Ae.setMode(O.LINE_LOOP):Ae.setMode(O.LINE_STRIP)}else H.isPoints?Ae.setMode(O.POINTS):H.isSprite&&Ae.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const fn=H._multiDrawStarts,yt=H._multiDrawCounts,Sn=H._multiDrawCount,de=wt?lt.get(wt).bytesPerElement:1,Kn=V.get(z).currentProgram.getUniforms();for(let gi=0;gi<Sn;gi++)Kn.setValue(O,"_gl_DrawID",gi),Ae.render(fn[gi]/de,yt[gi])}else if(H.isInstancedMesh)Ae.renderInstances(Et,$e,H.count);else if(q.isInstancedBufferGeometry){const fn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,fn);Ae.renderInstances(Et,$e,yt)}else Ae.render(Et,$e)};function Ot(M,U,q,z){D!==null&&M.isNodeMaterial&&D.setObject(z,M),ee===!0&&bt.setState(M,q,!1),M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,Ve(M,U,z),M.side=us,M.needsUpdate=!0,Ve(M,U,z),M.side=hn):Ve(M,U,z)}this.compile=function(M,U,q=null){q===null&&(q=M),D!==null&&D.renderStart(M,U,q),w=rt.get(q),w.init(U),v.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),fe=this.localClippingEnabled,ee=bt.init(this.clippingPlanes,fe),ee===!0&&bt.setGlobalState(this.clippingPlanes,U),D!==null&&Dt.render(w.state.shadowsArray,q,U);const z=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let Mt=0;Mt<gt.length;Mt++){const mt=gt[Mt];Ot(mt,q,U,H),z.add(mt)}else Ot(gt,q,U,H),z.add(gt)}),w=v.pop(),D!==null&&D.renderEnd(),z},this.compileAsync=function(M,U,q=null){const z=this.compile(M,U,q);return new Promise(H=>{function gt(){if(z.forEach(function(Mt){const wt=V.get(Mt).currentProgram;(wt===void 0||wt.isReady())&&z.delete(Mt)}),z.size===0){H(M);return}setTimeout(gt,10)}he.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ht=null;function Ut(M){Ht&&Ht(M)}function ye(){Ye.stop()}function on(){Ye.start()}const Ye=new lf;Ye.setAnimationLoop(Ut),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(M){Ht=M,St.setAnimationLoop(M),M===null?Ye.stop():Ye.start()},St.addEventListener("sessionstart",ye),St.addEventListener("sessionend",on),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;D!==null&&D.renderStart(M,U);const q=St.enabled===!0&&St.isPresenting===!0,z=S!==null&&(nt===null||q)&&S.begin(C,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(U),U=St.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,nt),w=rt.get(M,v.length),w.init(U),w.state.textureUnits=K.getTextureUnits(),v.push(w),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(Ft,bi,U.reversedDepth),fe=this.localClippingEnabled,ee=bt.init(this.clippingPlanes,fe),T=ut.get(M,E.length),T.init(),E.push(T),St.enabled===!0&&St.isPresenting===!0){const Mt=C.xr.getDepthSensingMesh();Mt!==null&&Pe(Mt,U,-1/0,C.sortObjects)}Pe(M,U,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(vt,It),Ce=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Ce&&Gt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&bt.beginShadows();const H=w.state.shadowsArray;if(Dt.render(H,M,U),ee===!0&&bt.endShadows(),(z&&S.hasRenderPass())===!1){const Mt=T.opaque,mt=T.transmissive;if(w.setupLights(),U.isArrayCamera){const wt=U.cameras;if(mt.length>0)for(let Rt=0,Zt=wt.length;Rt<Zt;Rt++){const jt=wt[Rt];Fn(Mt,mt,M,jt)}Ce&&Gt.render(M);for(let Rt=0,Zt=wt.length;Rt<Zt;Rt++){const jt=wt[Rt];an(T,M,jt,jt.viewport)}}else mt.length>0&&Fn(Mt,mt,M,U),Ce&&Gt.render(M),an(T,M,U)}nt!==null&&X===0&&(K.updateMultisampleRenderTarget(nt),K.updateRenderTargetMipmap(nt)),z&&S.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),pt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(w=v[v.length-1],K.setTextureUnits(w.state.textureUnits),ee===!0&&bt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,D!==null&&D.renderEnd()};function Pe(M,U,q,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($t)){z&&Fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ft);const Mt=tt.update(M),mt=M.material;mt.visible&&T.push(M,Mt,mt,q,Fe.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($t))){const Mt=tt.update(M),mt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Fe.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Fe.copy(Mt.boundingSphere.center)),Fe.applyMatrix4(M.matrixWorld).applyMatrix4(Ft)),Array.isArray(mt)){const wt=Mt.groups;for(let Rt=0,Zt=wt.length;Rt<Zt;Rt++){const jt=wt[Rt],Et=mt[jt.materialIndex];Et&&Et.visible&&T.push(M,Mt,Et,q,Fe.z,jt,U)}}else mt.visible&&T.push(M,Mt,mt,q,Fe.z,null,U)}}const gt=M.children;for(let Mt=0,mt=gt.length;Mt<mt;Mt++)Pe(gt[Mt],U,q,z)}function an(M,U,q,z){const{opaque:H,transmissive:gt,transparent:Mt}=M;w.setupLightsView(q),ee===!0&&bt.setGlobalState(C.clippingPlanes,q),z&&_.viewport(it.copy(z)),H.length>0&&ve(H,U,q),gt.length>0&&ve(gt,U,q),Mt.length>0&&ve(Mt,U,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Fn(M,U,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){const Et=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new ni(1,1,{generateMipmaps:!0,type:Et?fi:Gn,minFilter:Rs,samples:Math.max(4,P.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const gt=w.state.transmissionRenderTarget[z.id],Mt=z.viewport||it;gt.setSize(Mt.z*C.transmissionResolutionScale,Mt.w*C.transmissionResolutionScale);const mt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Rt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(ge),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&Gt.render(q);const Zt=C.toneMapping;C.toneMapping=wi;const jt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),ee===!0&&bt.setGlobalState(C.clippingPlanes,z),ve(M,q,z),K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let _e=0,$e=U.length;_e<$e;_e++){const Ie=U[_e],{object:Ae,geometry:fn,material:yt,group:Sn}=Ie;if(yt.side===hn&&Ae.layers.test(z.layers)){const de=yt.side;yt.side=xn,yt.needsUpdate=!0,ne(Ae,q,z,fn,yt,Sn),yt.side=de,yt.needsUpdate=!0,Et=!0}}Et===!0&&(K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt))}C.setRenderTarget(mt,wt,Rt),C.setClearColor(ge,qt),jt!==void 0&&(z.viewport=jt),C.toneMapping=Zt}function ve(M,U,q){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,gt=M.length;H<gt;H++){const Mt=M[H],{object:mt,geometry:wt,group:Rt}=Mt;let Zt=Mt.material;Zt.allowOverride===!0&&z!==null&&(Zt=z),mt.layers.test(q.layers)&&ne(mt,U,q,wt,Zt,Rt)}}function ne(M,U,q,z,H,gt){D!==null&&H.isNodeMaterial&&D.setObject(M,H),M.onBeforeRender(C,U,q,z,H,gt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(C,U,q,z,M,gt),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,C.renderBufferDirect(q,U,z,H,M,gt),H.side=us,H.needsUpdate=!0,C.renderBufferDirect(q,U,z,H,M,gt),H.side=hn):C.renderBufferDirect(q,U,z,H,M,gt),M.onAfterRender(C,U,q,z,H,gt)}function Ve(M,U,q){U.isScene!==!0&&(U=sn);const z=V.get(M),H=w.state.lights,gt=w.state.shadowsArray,Mt=H.state.version,mt=ct.getParameters(M,H.state,gt,U,q,w.state.lightProbeGridArray),wt=ct.getProgramCacheKey(mt);let Rt=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=at.get(M.envMap||z.environment,Zt),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",dt),Rt=new Map,z.programs=Rt);let jt=Rt.get(wt);if(jt!==void 0){if(z.currentProgram===jt&&z.lightsStateVersion===Mt)return qn(M,mt),jt}else mt.uniforms=ct.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,q,mt),M.onBeforeCompile(mt,C),jt=ct.acquireProgram(mt,wt),Rt.set(wt,jt),z.uniforms=mt.uniforms;const Et=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=bt.uniform),qn(M,mt),z.needsLights=Xi(M),z.lightsStateVersion=Mt,z.needsLights&&(Et.ambientLightColor.value=H.state.ambient,Et.lightProbe.value=H.state.probe,Et.sunLights.value=H.state.sun,Et.sunLightShadows.value=H.state.sunShadow,Et.directionalLights.value=H.state.directional,Et.directionalLightShadows.value=H.state.directionalShadow,Et.spotLights.value=H.state.spot,Et.spotLightShadows.value=H.state.spotShadow,Et.rectAreaLights.value=H.state.rectArea,Et.ltc_1.value=H.state.rectAreaLTC1,Et.ltc_2.value=H.state.rectAreaLTC2,Et.pointLights.value=H.state.point,Et.pointLightShadows.value=H.state.pointShadow,Et.hemisphereLights.value=H.state.hemi,Et.sunShadowMatrix.value=H.state.sunShadowMatrix,Et.sunShadowCascade.value=H.state.sunShadowCascade,Et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Et.spotLightMatrix.value=H.state.spotLightMatrix,Et.spotLightMap.value=H.state.spotLightMap,Et.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=jt,z.uniformsList=null,jt}function bn(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=yo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function qn(M,U){const q=V.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Wi(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,z=M.length;q<z;q++){const H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Ns(M,U,q,z,H){U.isScene!==!0&&(U=sn),K.resetTextureUnits();const gt=U.fog,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,mt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:oe.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Rt=at.get(z.envMap||Mt,wt),Zt=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,jt=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!q.morphAttributes.position,_e=!!q.morphAttributes.normal,$e=!!q.morphAttributes.color;let Ie=wi;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ie=C.toneMapping);const Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fn=Ae!==void 0?Ae.length:0,yt=V.get(z),Sn=w.state.lights;if(ee===!0&&(fe===!0||M!==j)){const Le=M===j&&z.id===Y;bt.setState(z,M,Le)}let de=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Sn.state.version||yt.outputColorSpace!==mt||H.isBatchedMesh&&yt.batching===!1||!H.isBatchedMesh&&yt.batching===!0||H.isBatchedMesh&&yt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&yt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&yt.instancing===!1||!H.isInstancedMesh&&yt.instancing===!0||H.isSkinnedMesh&&yt.skinning===!1||!H.isSkinnedMesh&&yt.skinning===!0||H.isInstancedMesh&&yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&yt.instancingMorph===!1&&H.morphTexture!==null||yt.envMap!==Rt||z.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==bt.numPlanes||yt.numIntersection!==bt.numIntersection)||yt.vertexAlphas!==Zt||yt.vertexTangents!==jt||yt.morphTargets!==Et||yt.morphNormals!==_e||yt.morphColors!==$e||yt.toneMapping!==Ie||yt.morphTargetsCount!==fn||!!yt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,yt.__version=z.version);let Kn=yt.currentProgram;de===!0&&(Kn=Ve(z,U,H),D&&z.isNodeMaterial&&D.onUpdateProgram(z,Kn,yt));let gi=!1,qi=!1,Fs=!1;const we=Kn.getUniforms(),Xe=yt.uniforms;if(_.useProgram(Kn.program)&&(gi=!0,qi=!0,Fs=!0),z.id!==Y&&(Y=z.id,qi=!0),yt.needsLights){const Le=Wi(w.state.lightProbeGridArray,H);yt.lightProbeGrid!==Le&&(yt.lightProbeGrid=Le,qi=!0)}if(gi||j!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),we.setValue(O,"projectionMatrix",M.projectionMatrix),we.setValue(O,"viewMatrix",M.matrixWorldInverse);const $i=we.map.cameraPosition;$i!==void 0&&$i.setValue(O,xe.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&we.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&we.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,qi=!0,Fs=!0)}if(yt.needsLights&&(Sn.state.sunShadowMap.length>0&&we.setValue(O,"sunShadowMap",Sn.state.sunShadowMap,K),Sn.state.directionalShadowMap.length>0&&we.setValue(O,"directionalShadowMap",Sn.state.directionalShadowMap,K),Sn.state.spotShadowMap.length>0&&we.setValue(O,"spotShadowMap",Sn.state.spotShadowMap,K),Sn.state.pointShadowMap.length>0&&we.setValue(O,"pointShadowMap",Sn.state.pointShadowMap,K)),H.isSkinnedMesh){we.setOptional(O,H,"bindMatrix"),we.setOptional(O,H,"bindMatrixInverse");const Le=H.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),we.setValue(O,"boneTexture",Le.boneTexture,K))}H.isBatchedMesh&&(we.setOptional(O,H,"batchingTexture"),we.setValue(O,"batchingTexture",H._matricesTexture,K),we.setOptional(O,H,"batchingIdTexture"),we.setValue(O,"batchingIdTexture",H._indirectTexture,K),we.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(O,"batchingColorTexture",H._colorsTexture,K));const Ki=q.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&N.update(H,q,Kn),(qi||yt.receiveShadow!==H.receiveShadow)&&(yt.receiveShadow=H.receiveShadow,we.setValue(O,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Xe.envMapIntensity.value=U.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=bx()),qi){if(we.setValue(O,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&Yi(Xe,Fs),gt&&z.fog===!0&&Tt.refreshFogUniforms(Xe,gt),Tt.refreshMaterialUniforms(Xe,z,et,$,w.state.transmissionRenderTarget[M.id]),yt.needsLights&&yt.lightProbeGrid){const Le=yt.lightProbeGrid;Xe.probesSH.value=Le.texture,Xe.probesMin.value.copy(Le.boundingBox.min),Xe.probesMax.value.copy(Le.boundingBox.max),Xe.probesResolution.value.copy(Le.resolution)}yo.upload(O,bn(yt),Xe,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(yo.upload(O,bn(yt),Xe,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&we.setValue(O,"center",H.center),we.setValue(O,"modelViewMatrix",H.modelViewMatrix),we.setValue(O,"normalMatrix",H.normalMatrix),we.setValue(O,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const Le=z.uniformsGroups;for(let $i=0,Os=Le.length;$i<Os;$i++){const Ih=Le[$i];st.update(Ih,Kn),st.bind(Ih,Kn)}}return Kn}function Yi(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Xi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,U,q){const z=V.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=U,V.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const q=V.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){nt=M,W=U,X=q;let z=null,H=!1,gt=!1;if(M){const mt=V.get(M);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),it.copy(M.viewport),Lt.copy(M.scissor),Ct=M.scissorTest,_.viewport(it),_.scissor(Lt),_.setScissorTest(Ct),Y=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(mt.__hasExternalTextures)K.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Zt=M.depthTexture;if(mt.__boundDepthTexture!==Zt){if(Zt!==null&&V.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(gt=!0);const Rt=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?z=Rt[U][q]:z=Rt[U],H=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?z=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?z=Rt[q]:z=Rt,it.copy(M.viewport),Lt.copy(M.scissor),Ct=M.scissorTest}else it.copy(_t).multiplyScalar(et).floor(),Lt.copy(Kt).multiplyScalar(et).floor(),Ct=Ge;if(q!==0&&(z=F),_.bindFramebuffer(O.FRAMEBUFFER,z)&&_.drawBuffers(M,z),_.viewport(it),_.scissor(Lt),_.setScissorTest(Ct),H){const mt=V.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,q)}else if(gt){const mt=U;for(let wt=0;wt<M.textures.length;wt++){const Rt=V.get(M.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,q,mt)}}else if(M!==null&&q!==0){const mt=V.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,q)}Y=-1};function Ai(M){const U=V.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=P.textureFormatReadable(M.format),U.__typeReadable=P.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,z,H,gt,Mt,mt=0){if(!(M&&M.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){_.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Rt=M.textures[mt],Zt=Rt.format,jt=Rt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);const Et=Ai(Rt);if(Et.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&q>=0&&q<=M.height-H&&O.readPixels(U,q,z,H,ht.convert(Zt),ht.convert(jt),gt)}finally{const Rt=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,z,H,gt,Mt,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt)if(U>=0&&U<=M.width-z&&q>=0&&q<=M.height-H){_.bindFramebuffer(O.FRAMEBUFFER,wt);const Rt=M.textures[mt],Zt=Rt.format,jt=Rt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);const Et=Ai(Rt);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(U,q,z,H,ht.convert(Zt),ht.convert(jt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const $e=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,$e);const Ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Mp(O,Ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(_e),O.deleteSync(Ie),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){const z=Math.pow(2,-q),H=Math.floor(M.image.width*z),gt=Math.floor(M.image.height*z),Mt=U!==null?U.x:0,mt=U!==null?U.y:0;K.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Mt,mt,H,gt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,z=null,H=0,gt=0){let Mt,mt,wt,Rt,Zt,jt,Et,_e,$e;const Ie=M.isCompressedTexture?M.mipmaps[gt]:M.image;if(q!==null)Mt=q.max.x-q.min.x,mt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Rt=q.min.x,Zt=q.min.y,jt=q.isBox3?q.min.z:0;else{const Xe=Math.pow(2,-H);Mt=Math.floor(Ie.width*Xe),mt=Math.floor(Ie.height*Xe),M.isDataArrayTexture?wt=Ie.depth:M.isData3DTexture?wt=Math.floor(Ie.depth*Xe):wt=1,Rt=0,Zt=0,jt=0}z!==null?(Et=z.x,_e=z.y,$e=z.z):(Et=0,_e=0,$e=0);const Ae=ht.convert(U.format),fn=ht.convert(U.type);let yt;U.isData3DTexture?(K.setTexture3D(U,0),yt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),yt=O.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),yt=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Sn=_.getParameter(O.UNPACK_ROW_LENGTH),de=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Kn=_.getParameter(O.UNPACK_SKIP_PIXELS),gi=_.getParameter(O.UNPACK_SKIP_ROWS),qi=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(O.UNPACK_SKIP_IMAGES,jt);const Fs=M.isDataArrayTexture||M.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Xe=V.get(M),Ki=V.get(U),Le=V.get(Xe.__renderTarget),$i=V.get(Ki.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Le.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Os=0;Os<wt;Os++)Fs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,jt+Os),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(U).__webglTexture,gt,$e+Os)),O.blitFramebuffer(Rt,Zt,Mt,mt,Et,_e,Mt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){const Xe=V.get(M),Ki=V.get(U);_.bindFramebuffer(O.READ_FRAMEBUFFER,L),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,I);for(let Le=0;Le<wt;Le++)Fs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.__webglTexture,H,jt+Le):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,H),we?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ki.__webglTexture,gt,$e+Le):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ki.__webglTexture,gt),H!==0?O.blitFramebuffer(Rt,Zt,Mt,mt,Et,_e,Mt,mt,O.COLOR_BUFFER_BIT,O.NEAREST):we?O.copyTexSubImage3D(yt,gt,Et,_e,$e+Le,Rt,Zt,Mt,mt):O.copyTexSubImage2D(yt,gt,Et,_e,Rt,Zt,Mt,mt);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else we?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(yt,gt,Et,_e,$e,Mt,mt,wt,Ae,fn,Ie.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,gt,Et,_e,$e,Mt,mt,wt,Ae,Ie.data):O.texSubImage3D(yt,gt,Et,_e,$e,Mt,mt,wt,Ae,fn,Ie):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,Et,_e,Mt,mt,Ae,fn,Ie.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,Et,_e,Ie.width,Ie.height,Ae,Ie.data):O.texSubImage2D(O.TEXTURE_2D,gt,Et,_e,Mt,mt,Ae,fn,Ie);_.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Kn),_.pixelStorei(O.UNPACK_SKIP_ROWS,gi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,qi),gt===0&&U.generateMipmaps&&O.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){W=0,X=0,nt=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Jn={result:"normal",dmgMul:1,postureMul:1},da=(i,t)=>({result:"effective",dmgMul:i,postureMul:t}),kc={ronin:{id:"ronin",name:"낭인 검사",kanji:"浪人",hp:60,posture:60,radius:.42,speed:3.6,turnRate:.14,defense:{slash:Jn,thrust:Jn,blunt:Jn},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[{move:"ro_cut1",weight:5,minRange:0,maxRange:2.8},{move:"ro_lunge",weight:2,minRange:2.2,maxRange:4.6},{move:"ro_feint",weight:1,minRange:0,maxRange:3.2}],ai:{preferredRange:2.4,aggression:.5,guardChance:.35,courage:.5,cooldown:[75,150],comboChance:.55,feintChance:.15,poise:3,breakout:"parry"},tip:"베기·찌르기 모두 통한다. 파란 링 공격은 막을 수 없으니 튕기기로 받아내라."},shield:{id:"shield",name:"방패 무사",kanji:"盾持",hp:70,posture:80,radius:.5,speed:3,turnRate:.1,defense:{slash:{result:"bounce",dmgMul:0,postureMul:.25,frontalOnly:!0},thrust:da(1.25,2),blunt:{result:"effective",dmgMul:1,postureMul:1.4}},arrow:{bodyMul:1,headMul:1,shieldFront:!0},weakness:"thrust",moves:[{move:"sh_stab",weight:5,minRange:0,maxRange:2.8},{move:"sh_charge",weight:2,minRange:1.5,maxRange:4.8}],ai:{preferredRange:2.3,aggression:.45,guardChance:0,courage:.7,cooldown:[70,140],comboChance:0,feintChance:0,poise:2,breakout:"bash"},tip:"정면 베기는 방패에 튕겨난다. 찌르기로 방패 틈을 꿰뚫거나, 방패 치기·관통 화살로 방패를 걷어내라."},spear:{id:"spear",name:"창병",kanji:"槍足軽",hp:60,posture:60,radius:.42,speed:3.3,turnRate:.11,defense:{slash:da(1.2,2),thrust:{result:"haft",dmgMul:.25,postureMul:.3,frontalOnly:!0},blunt:Jn},arrow:{bodyMul:1,headMul:1},weakness:"slash",moves:[{move:"sp_thrust",weight:5,minRange:1.8,maxRange:4.5},{move:"sp_sweep",weight:2,minRange:0,maxRange:4}],ai:{preferredRange:3.6,aggression:.5,guardChance:0,courage:.4,cooldown:[60,120],comboChance:.45,feintChance:0,poise:2,breakout:"backstep"},tip:"찌르기는 긴 창대에 막힌다. 베기로 창대를 쳐내며 파고들어라. 빨간 링 휩쓸기는 회피나 흘리기로."},armored:{id:"armored",name:"갑주 무사",kanji:"鎧武者",hp:130,posture:110,radius:.55,speed:2.6,turnRate:.08,defense:{slash:{result:"glance",dmgMul:.25,postureMul:.45},thrust:da(1.6,1.6),blunt:{result:"glance",dmgMul:.3,postureMul:.6}},arrow:{bodyMul:.3,headMul:1.2,glanceBody:!0},weakness:"thrust",moves:[{move:"ar_cleave",weight:4,minRange:0,maxRange:3.2},{move:"ar_sweep",weight:2,minRange:0,maxRange:3.3},{move:"ar_crush",weight:2,minRange:1,maxRange:4.2}],ai:{preferredRange:2.6,aggression:.6,guardChance:0,courage:.9,cooldown:[80,150],comboChance:0,feintChance:0,poise:99,breakout:"none"},heavyBody:!0,tip:"베기는 갑옷에 미끄러진다. 찌르기로 갑옷 틈을 노려라. 관통 화살은 갑옷을 뚫는다."},duelist:{id:"duelist",name:"쌍검 시노비",kanji:"双刃",hp:45,posture:45,radius:.38,speed:4.6,turnRate:.2,defense:{slash:da(1.4,1.5),thrust:{result:"evade",dmgMul:0,postureMul:0},blunt:Jn},arrow:{bodyMul:1,headMul:1},weakness:"slash",moves:[{move:"du_f1",weight:5,minRange:0,maxRange:2.6},{move:"du_leap",weight:2,minRange:2.6,maxRange:5.5},{move:"du_kunai",weight:1,minRange:4,maxRange:12}],ai:{preferredRange:3.2,aggression:.7,guardChance:0,courage:.35,cooldown:[40,100],comboChance:.8,feintChance:0,poise:2,breakout:"backstep"},tip:"찌르기는 몸을 틀어 피한다. 넓게 휘두르는 베기로 잡아라. 연속 공격은 튕기기로 끊어낼 수 있다."},archer:{id:"archer",name:"궁수",kanji:"弓兵",hp:35,posture:30,radius:.4,speed:3.4,turnRate:.12,defense:{slash:Jn,thrust:Jn,blunt:Jn},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[{move:"ac_shot",weight:5,minRange:5,maxRange:30},{move:"ac_knife",weight:3,minRange:0,maxRange:2.2}],ai:{preferredRange:13,aggression:.5,guardChance:0,courage:.2,cooldown:[90,160],comboChance:0,feintChance:0,ranged:!0,poise:3,breakout:"backstep"},tip:"날아오는 화살도 튕기기로 쳐낼 수 있다. 활 헤드샷(만작)이면 한 발에 쓰러진다."},boss:{id:"boss",name:"철갑 대장 카게토라",kanji:"影虎",hp:540,posture:150,radius:.55,speed:3.8,turnRate:.16,defense:{slash:{result:"glance",dmgMul:.35,postureMul:.5},thrust:da(1.4,1.5),blunt:{result:"glance",dmgMul:.3,postureMul:.6}},arrow:{bodyMul:.4,headMul:1.2,glanceBody:!0},weakness:"thrust",moves:[{move:"bo_c1",weight:5,minRange:0,maxRange:2.9},{move:"bo_lunge",weight:2,minRange:2.4,maxRange:5},{move:"bo_red",weight:2,minRange:0,maxRange:3.6},{move:"bo_feint",weight:1,minRange:0,maxRange:3.4}],ai:{preferredRange:2.6,aggression:.8,guardChance:.5,courage:1,cooldown:[30,80],comboChance:.75,feintChance:.2,poise:2,breakout:"parry"},isBoss:!0,heavyBody:!0,tip:"갑옷을 두른 1막에는 찌르기, 갑옷이 부서진 2막에는 베기가 통한다."},dummy:{id:"dummy",name:"수련용 허수아비",kanji:"藁人形",hp:9999,posture:80,radius:.4,speed:0,turnRate:0,defense:{slash:Jn,thrust:Jn,blunt:Jn},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[],ai:{preferredRange:2,aggression:0,guardChance:0,courage:1,cooldown:[9999,9999],comboChance:0,feintChance:0,poise:99,breakout:"none"},tip:"마음껏 연격을 연습하라."}},wx={slash:da(1.4,1.5),thrust:{result:"normal",dmgMul:.7,postureMul:.7},blunt:Jn},Qe=(i,t)=>({x:i.x+t.x,z:i.z+t.z}),ce=(i,t)=>({x:i.x-t.x,z:i.z-t.z}),zt=(i,t)=>({x:i.x*t,z:i.z*t}),Ic=(i,t)=>i.x*t.x+i.z*t.z,Nn=i=>Math.hypot(i.x,i.z),ps=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),je=i=>{const t=Nn(i);return t>1e-6?{x:i.x/t,z:i.z/t}:{x:0,z:0}},Ex=(i,t,e)=>i+(t-i)*e,gh=(i,t,e)=>i<t?t:i>e?e:i,Tx=i=>gh(i,0,1),vh=i=>({x:Math.sin(i),z:Math.cos(i)}),mi=i=>Math.atan2(i.x,i.z),gf=i=>(i=(i+Math.PI)%(Math.PI*2),i<0&&(i+=Math.PI*2),i-Math.PI),vf=(i,t)=>gf(t-i),Si=(i,t,e)=>{const n=vf(i,t);return Math.abs(n)<=e?t:gf(i+Math.sign(n)*e)},Ax=(i,t,e)=>{const n=ce(e,t),s=Ic(n,n);if(s<1e-9)return ps(i,t);const a=Tx(Ic(ce(i,t),n)/s);return ps(i,{x:t.x+n.x*a,z:t.z+n.z*a})};class Rx{s;constructor(t=1234567){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){const e=t.reduce((s,a)=>s+a,0);let n=this.next()*e;for(let s=0;s<t.length;s++)if(n-=t[s],n<=0)return s;return t.length-1}}const Cx=60,Rn=1/Cx,G={inputBuffer:10,deflectWindow:12,deflectHeatCool:24,deflectHeatLimit:1.4,deflectHeatMax:4,guardArc:70*Math.PI/180,deflectRecoil:42,deflectPostureDmg:26,hajikiIssenWindow:20,riposteWindow:40,playerMaxPosture:100,blockPostureMul:.9,guardBreakStun:55,flowWindow:14,flowStepDur:22,flowAnimDur:26,flowSideStep:1.3,overextendDur:70,issenWindow:7,issenChainTime:110,issenChainWindow:10,issenMashLockout:18,issenDur:34,bossIssenFrac:.18,dodgeDur:18,dodgeIFrames:[2,11],dodgeDist:2.6,dodgeCancelFrom:12,perfectDodgeFrames:8,rollDur:30,rollDist:4.4,rollIFrames:[2,18],dodgeCounterWindow:45,chargeCheck:4,chargeMin:16,chargeMax:40,hitstun:18,stagger:34,brokenDur:170,postureRegenDelay:100,postureRegen:.35,playerPostureRegen:.6,finishHpFrac:.2,finisherRange:3.4,finisherSlashDur:64,finisherThrustDur:70,finisherFlowDur:44,finisherImpact:{slash:30,thrust:34,flow:12},finisherChainFrom:40,finisherChainRange:7,bossFinisherFrac:.22,terrifyRadius:9,terrifyChance:.35,terrifyWeaknessBonus:.25,fearDur:110,resolveMax:3,resolveGain:{deflect:.3,flow:.45,issen:.6,finisher:1,kill:.2,headshot:.3,perfectDodge:.15},healCost:1,healDur:48,healFrac:.45,galeCost:2,focusDrainPerSec:.5,drawTicks:{standard:34,heavy:52,fire:40},perfectDrawWindow:18,fatigueTicks:120,arrowSpeed:[20,62],arrowGravity:9.8,arrowDamage:{standard:22,heavy:34,fire:14},headshotMul:2.6,perfectMul:1.3,maxArrows:{standard:24,heavy:6,fire:4},quickshotDur:20,quickshotDamage:11,aimMoveSpeed:2.4,focusScale:.3,dodgeAimSlowmoSec:1.1,burnTicks:150,burnDps:5,runSpeed:5.4,guardMoveSpeed:2.3,playerTurnRate:.35,arenaRadius:24,softTargetRange:6.5,maxAttackers:2,maxShooters:1,glintLead:20,attackSpacing:26,telegraphLead:36,standoffStrikeWindow:14,standoffChainMax:3,standoffFailDamage:30},tn={light:3,heavy:6,effective:5,block:3,deflect:7,bounce:6,flow:5,issen:10,finisher:8};class Hd{id;team;arch;pos;prevPos;yaw;prevYaw;radius;vel={x:0,z:0};kb={x:0,z:0};hp;maxHp;posture=0;maxPosture;postureIdle=0;act={kind:"free",t:0,dur:1/0};serial=0;replaced=null;shieldOpen=0;burning=0;phase=1;hitFlash=0;glint=null;age=0;deadTicks=0;speed=0;deathKind=null;brain=null;size=1;poiseHits=0;poiseTimer=0;constructor(t,e,n,s,a,r,o,l){this.id=t,this.team=e,this.arch=n,this.pos={...s},this.prevPos={...s},this.yaw=a,this.prevYaw=a,this.hp=r,this.maxHp=r,this.maxPosture=o,this.radius=l}get alive(){return this.hp>0&&this.act.kind!=="dead"}get targetable(){return this.alive&&this.act.kind!=="finished"}get isPlayer(){return this.team==="player"}set(t,e,n={}){const s=this.act;return s.kind==="attack"&&s.move&&(this.replaced={move:s.move,t:s.t,serial:this.serial}),this.act={kind:t,t:0,dur:e,...n},this.serial++,this.act}is(...t){return t.includes(this.act.kind)}get free(){return this.act.kind==="free"}get attacking(){const t=this.act;return t.kind==="attack"&&!!t.move&&t.t<t.move.startup+t.move.active}get attackPhase(){const t=this.act;return t.kind!=="attack"||!t.move?null:t.t<t.move.startup?"startup":t.t<t.move.startup+t.move.active?"active":"recovery"}get defenseless(){return this.is("broken","recoil","overextended","guardbreak","fear","stagger")}forward(){return vh(this.yaw)}angleTo(t){return Math.abs(vf(this.yaw,mi(ce(t,this.pos))))}yawTo(t){return mi(ce(t,this.pos))}distTo(t){return ps(this.pos,t.pos)}gapTo(t){return Math.max(0,ps(this.pos,t.pos)-this.radius-t.radius)}addPosture(t){return this.posture=Math.min(this.maxPosture,this.posture+t),this.postureIdle=0,this.posture>=this.maxPosture}regenPosture(){this.poiseTimer>0&&--this.poiseTimer===0&&(this.poiseHits=0),this.postureIdle++;const t=this.act.kind==="guard";this.isPlayer?this.postureIdle>40&&(this.posture=Math.max(0,this.posture-G.playerPostureRegen*(t?.5:1))):this.postureIdle>G.postureRegenDelay&&!this.is("broken")&&(this.posture=Math.max(0,this.posture-G.postureRegen*(t?1.6:1)))}}const ia=["slash","thrust","guard","dodge","aim","fire","quickshot","focus","heal","gale","standoff","lock","arrowNext","arrow1","arrow2","arrow3"],_h=()=>({move:{x:0,z:0},camYaw:0,aimOrigin:{x:0,y:1.6,z:0},aimDir:{x:0,y:0,z:1},held:{},pressed:{},released:{}});class Px{last=new Map;consumed=new Map;pressTick=new Map;prevPressTick=new Map;record(t,e){for(const n of Object.keys(t.pressed))t.pressed[n]&&(this.last.set(n,e),this.prevPressTick.set(n,this.pressTick.get(n)??-9999),this.pressTick.set(n,e))}peek(t,e,n){const s=this.last.get(t);return s===void 0||(this.consumed.get(t)??-1)>=s?!1:e-s<=n}consume(t,e,n){return this.peek(t,e,n)?(this.consumed.set(t,this.last.get(t)),!0):!1}clear(t){if(t)this.consumed.set(t,this.last.get(t)??-1);else for(const[e,n]of this.last)this.consumed.set(e,n)}}const Lx=Math.PI/180;function Qt(i){const t=i.startup+i.active;return{chainFrom:t,cancelFrom:t+2,...i}}const ze=(i,t)=>({kind:"arc",range:i,halfAngle:t*Lx}),kn=(i,t)=>({kind:"line",range:i,width:t}),Dx=[Qt({id:"r_s1",name:"역베기",kanji:"逆袈裟",type:"slash",startup:7,active:4,recovery:16,damage:12,posture:14,shape:ze(2.3,70),lunge:1.8,next:{slash:"r_s2",thrust:"r_st"},trackUntil:5}),Qt({id:"r_s2",name:"가사베기",kanji:"袈裟斬",type:"slash",startup:8,active:4,recovery:17,damage:13,posture:15,shape:ze(2.3,75),lunge:1.4,next:{slash:"r_s3",thrust:"r_t3"},trackUntil:5}),Qt({id:"r_s3",name:"횡베기",kanji:"横一文字",type:"slash",startup:9,active:5,recovery:18,damage:14,posture:16,shape:ze(2.5,105),lunge:1.2,next:{slash:"r_s4",thrust:"r_t3"},trackUntil:6}),Qt({id:"r_s4",name:"회전베기",kanji:"旋風",type:"slash",startup:12,active:8,recovery:26,damage:20,posture:28,shape:ze(2.7,180),lunge:1,knockback:1.2,hitstop:6,finale:!0,trackUntil:6}),Qt({id:"r_t1",name:"찌르기",kanji:"突",type:"thrust",startup:6,active:3,recovery:15,damage:11,posture:12,shape:kn(2.8,.6),lunge:2,next:{thrust:"r_t2",slash:"r_ts"},trackUntil:4}),Qt({id:"r_t2",name:"연속 찌르기",kanji:"二段突",type:"thrust",startup:6,active:3,recovery:16,damage:12,posture:13,shape:kn(2.8,.6),lunge:1.4,next:{thrust:"r_t3",slash:"r_s3"},trackUntil:4}),Qt({id:"r_t3",name:"관통 찌르기",kanji:"諸手突",type:"thrust",startup:11,active:4,recovery:24,damage:22,posture:30,shape:kn(3.4,.7),lunge:2.6,knockback:1.5,hitstop:6,finale:!0,trackUntil:7}),Qt({id:"r_st",name:"되돌려 찌르기",kanji:"返突",type:"thrust",startup:6,active:3,recovery:17,damage:12,posture:15,shape:kn(2.9,.6),lunge:1.6,next:{slash:"r_s3",thrust:"r_t2"},trackUntil:4}),Qt({id:"r_ts",name:"뽑아베기",kanji:"抜払",type:"slash",startup:7,active:4,recovery:18,damage:13,posture:15,shape:ze(2.4,95),lunge:1,next:{slash:"r_s2",thrust:"r_t2"},trackUntil:5}),Qt({id:"r_hs",name:"강베기",kanji:"唐竹割",type:"slash",startup:8,active:5,recovery:24,damage:26,posture:42,shape:ze(2.6,80),lunge:2.4,heavy:!0,knockback:1,hitstop:7,finale:!0}),Qt({id:"r_ht",name:"강찌르기",kanji:"破突",type:"thrust",startup:7,active:4,recovery:24,damage:28,posture:46,shape:kn(3.6,.7),lunge:3,heavy:!0,knockback:1.6,hitstop:7,finale:!0}),Qt({id:"r_bash",name:"방패 치기",kanji:"盾打",type:"blunt",startup:5,active:3,recovery:16,damage:3,posture:22,shape:ze(1.8,60),lunge:1.4,interrupt:!0,shieldBreak:!0,next:{slash:"r_s2",thrust:"r_t2"},hitstop:5}),Qt({id:"r_gale",name:"질풍참",kanji:"疾風斬",type:"slash",startup:8,active:2,recovery:8,damage:18,posture:70,shape:ze(2.4,60),lunge:5,trueStrike:!0,heavy:!0,hitstop:5})],kx=[Qt({id:"ro_cut1",name:"내려베기",type:"slash",startup:28,active:4,recovery:24,damage:12,posture:18,shape:ze(2.5,60),lunge:1.4,trackUntil:18,next:{slash:"ro_cut2"}}),Qt({id:"ro_cut2",name:"되베기",type:"slash",startup:22,active:4,recovery:26,damage:12,posture:18,shape:ze(2.5,70),lunge:1,trackUntil:12}),Qt({id:"ro_lunge",name:"돌진 찌르기",type:"thrust",startup:38,active:5,recovery:32,damage:20,posture:25,shape:kn(3.8,.7),lunge:3.4,unblockable:"blue",trackUntil:28}),Qt({id:"ro_feint",name:"허초",type:"slash",startup:20,active:0,recovery:10,damage:0,posture:0,shape:ze(0,0),lunge:.4,feint:!0}),Qt({id:"sh_stab",name:"방패 뒤 찌르기",type:"thrust",startup:26,active:4,recovery:22,damage:11,posture:16,shape:kn(2.7,.6),lunge:1,trackUntil:16}),Qt({id:"sh_charge",name:"방패 돌격",type:"blunt",startup:36,active:7,recovery:30,damage:16,posture:38,shape:kn(2.3,1.3),lunge:3.6,unblockable:"blue",trackUntil:26,hyperArmor:!0}),Qt({id:"sp_thrust",name:"창 찌르기",type:"thrust",startup:28,active:4,recovery:22,damage:14,posture:18,shape:kn(4.3,.55),lunge:.8,trackUntil:18,next:{slash:"sp_thrust2"}}),Qt({id:"sp_thrust2",name:"창 연속 찌르기",type:"thrust",startup:22,active:4,recovery:26,damage:12,posture:16,shape:kn(4.3,.55),lunge:.6,trackUntil:12}),Qt({id:"sp_sweep",name:"창 휩쓸기",type:"slash",startup:42,active:6,recovery:34,damage:22,posture:30,shape:ze(4.1,110),lunge:.4,unblockable:"red",trackUntil:32}),Qt({id:"ar_cleave",name:"대도 내려치기",type:"slash",startup:32,active:5,recovery:34,damage:24,posture:40,shape:ze(3,50),lunge:1.4,hyperArmor:!0,trackUntil:22}),Qt({id:"ar_sweep",name:"대도 휘두르기",type:"slash",startup:38,active:7,recovery:36,damage:26,posture:40,shape:ze(3.1,120),lunge:.8,unblockable:"blue",hyperArmor:!0,trackUntil:28}),Qt({id:"ar_crush",name:"투구 깨기",type:"slash",startup:48,active:6,recovery:42,damage:34,posture:60,shape:ze(2.9,45),lunge:2.4,unblockable:"red",hyperArmor:!0,trackUntil:38}),Qt({id:"du_f1",name:"쌍검 연참",type:"slash",startup:24,active:3,recovery:12,damage:8,posture:10,shape:ze(2.1,70),lunge:1.4,trackUntil:14,next:{slash:"du_f2"}}),Qt({id:"du_f2",name:"쌍검 연참",type:"slash",startup:20,active:3,recovery:12,damage:8,posture:10,shape:ze(2.1,70),lunge:.8,trackUntil:10,next:{slash:"du_f3"}}),Qt({id:"du_f3",name:"쌍검 연참",type:"slash",startup:20,active:4,recovery:24,damage:10,posture:12,shape:ze(2.2,90),lunge:.8,trackUntil:10}),Qt({id:"du_leap",name:"도약 베기",type:"slash",startup:32,active:5,recovery:28,damage:18,posture:26,shape:ze(2.3,70),lunge:4.2,unblockable:"blue",trackUntil:22}),Qt({id:"du_kunai",name:"쿠나이 투척",type:"thrust",startup:22,active:1,recovery:22,damage:7,posture:8,shape:kn(0,0),lunge:0,projectile:"kunai",trackUntil:12}),Qt({id:"ac_shot",name:"활 사격",type:"thrust",startup:50,active:1,recovery:26,damage:14,posture:14,shape:kn(0,0),lunge:0,projectile:"arrow",trackUntil:40}),Qt({id:"ac_knife",name:"단도 베기",type:"slash",startup:24,active:3,recovery:20,damage:7,posture:10,shape:ze(1.9,70),lunge:1,trackUntil:14}),Qt({id:"bo_c1",name:"연참",type:"slash",startup:26,active:4,recovery:16,damage:14,posture:20,shape:ze(2.7,70),lunge:1.6,trackUntil:16,next:{slash:"bo_c2"}}),Qt({id:"bo_c2",name:"연참",type:"slash",startup:20,active:4,recovery:16,damage:14,posture:20,shape:ze(2.7,80),lunge:1.2,trackUntil:10,next:{slash:"bo_c3"}}),Qt({id:"bo_c3",name:"연참 마무리",type:"thrust",startup:24,active:4,recovery:28,damage:18,posture:26,shape:kn(3.4,.7),lunge:2,trackUntil:14,unblockable:"blue"}),Qt({id:"bo_lunge",name:"섬광 찌르기",type:"thrust",startup:32,active:5,recovery:30,damage:22,posture:30,shape:kn(4.2,.7),lunge:3.8,unblockable:"blue",trackUntil:22}),Qt({id:"bo_red",name:"귀신베기",type:"slash",startup:44,active:6,recovery:38,damage:34,posture:50,shape:ze(3.1,85),lunge:2.8,unblockable:"red",hyperArmor:!0,trackUntil:34}),Qt({id:"bo_feint",name:"허초",type:"slash",startup:20,active:0,recovery:8,damage:0,posture:0,shape:ze(0,0),lunge:.6,feint:!0})],pr=Object.fromEntries([...Dx,...kx].map(i=>[i.id,i])),xh={slash:"r_s1",thrust:"r_t1"},Ix={slash:"r_hs",thrust:"r_ht"};function Mn(i){const t=pr[i];if(!t)throw new Error(`Unknown move ${i}`);return t}const Ln=(i,t,e)=>({x:i,y:t,z:e}),Io=(i,t)=>Ln(i.x+t.x,i.y+t.y,i.z+t.z),yh=(i,t)=>Ln(i.x-t.x,i.y-t.y,i.z-t.z),wa=(i,t)=>Ln(i.x*t,i.y*t,i.z*t),Go=i=>Math.hypot(i.x,i.y,i.z),Uo=i=>{const t=Go(i);return t>1e-9?wa(i,1/t):Ln(0,0,1)},_f=i=>Ln(i.pos.x,1.62*i.size,i.pos.z),xf=.17;function Ux(i,t){const e=_f(i),n=xf*i.size;if((t.x-e.x)**2+(t.y-e.y)**2+(t.z-e.z)**2<=n*n)return"head";if(t.y<.1||t.y>1.45*i.size)return null;const s=i.radius*.85;return(t.x-i.pos.x)**2+(t.z-i.pos.z)**2<=s*s?"body":null}function mr(i,t,e=1){const n=G.drawTicks[t],s=Math.min(1,i/n),a=n+G.perfectDrawWindow*e,r=i>=n&&i<=a,o=Math.max(0,(i-a)/G.fatigueTicks),l=r?0:(1-s)*.07+Math.min(1,o)*.06;return{amount:s,perfect:r,fatigue:o,spread:l,full:n}}function Nx(i,t,e,n){const s=yh(i,e),a=s.x*t.x+s.y*t.y+s.z*t.z,r=s.x*s.x+s.y*s.y+s.z*s.z-n*n,o=a*a-r;if(o<0)return-1;const l=-a-Math.sqrt(o);return l>0?l:-1}function Fx(i,t,e){let n=90;for(const s of i.fighters){if(s.team!=="enemy"||!s.targetable)continue;const a=s.size,r=[[_f(s),xf*a],[Ln(s.pos.x,1.2*a,s.pos.z),s.radius*.8],[Ln(s.pos.x,.8*a,s.pos.z),s.radius*.85],[Ln(s.pos.x,.4*a,s.pos.z),s.radius*.8]];for(const[o,l]of r){const c=Nx(t,e,o,l);c>0&&c<n&&(n=c)}}if(e.y<-.001){const s=-t.y/e.y;s>0&&s<n&&(n=s)}return Io(t,wa(e,n))}function Mh(i,t,e,n){const s=yh(t,i),r=Go(s)/e,o=wa(Uo(s),e);return o.y+=.5*n*r,o}function bh(i,t,e){if(e<=0)return t;const n=Go(t),s=Uo(t),a=Uo(Ln(s.x+i.rng.range(-e,e),s.y+i.rng.range(-e,e)*.8,s.z+i.rng.range(-e,e)));return wa(a,n)}function yf(i){const t=i.forward();return Ln(i.pos.x+t.x*.35-t.z*.12,1.48,i.pos.z+t.z*.35+t.x*.12)}function Sh(i,t,e,n,s,a,r,o,l){const c={id:i.newProjectileId(),kind:e,arrowType:n,ownerId:t.id,team:t.team,pos:{...s},prevPos:{...s},vel:a,damage:r,gravity:o,alive:!0,stuck:!1,age:0,perfect:l};if(i.projectiles.push(c),i.projectiles.length>90){const h=i.projectiles.findIndex(d=>d.stuck);h>=0&&i.projectiles.splice(h,1)}return c}function Ox(i,t,e,n){const s=i.ps,a=s.arrowType;if(s.arrows[a]<=0)return;const r=mr(n,a,i.settings.windowScale),o=Ex(G.arrowSpeed[0],G.arrowSpeed[1],Math.pow(r.amount,.8))*(a==="heavy"?.8:1),l=G.arrowGravity*(a==="heavy"?.6:.4),c=yf(t),h=Fx(i,e.aimOrigin,Uo(e.aimDir)),d=bh(i,Mh(c,h,o,l),r.spread),u=G.arrowDamage[a]*(.35+.65*r.amount)*(r.perfect?G.perfectMul:1);Sh(i,t,"arrow",a,c,d,u,l,r.perfect),s.arrows[a]--,i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:a,perfect:r.perfect}),r.perfect&&i.emit({type:"text",text:"정사",sub:"만작",style:"info",id:t.id})}function Bx(i,t){const e=i.ps;if(e.arrows.standard<=0)return;const n=i.get(t.act.targetId),s=yf(t),a=G.arrowGravity*.4,r=n&&n.targetable?Ln(n.pos.x,1.15*n.size,n.pos.z):Io(s,Ln(t.forward().x*30,0,t.forward().z*30)),o=bh(i,Mh(s,r,55,a),.01);Sh(i,t,"arrow","standard",s,o,G.quickshotDamage,a,!1),e.arrows.standard--,i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:"standard",perfect:!1})}function zx(i,t,e){const n=i.player,s=e.projectile==="kunai",a=s?24:34,r=G.arrowGravity*(s?.5:.4),o=t.forward(),l=Ln(t.pos.x+o.x*.4,1.45,t.pos.z+o.z*.4),h=Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)/a*.5,d=Ln(n.pos.x+n.vel.x*h,1.15,n.pos.z+n.vel.z*h),u=bh(i,Mh(l,d,a,r),.012);Sh(i,t,s?"kunai":"arrow","standard",l,u,e.damage,r,!1),i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:"standard",perfect:!1})}function Hx(i){for(const t of i.projectiles){if(t.age++,!t.alive)continue;if(t.stuck){t.age>900&&(t.alive=!1);continue}t.prevPos={...t.pos},t.vel.y-=t.gravity*Rn;const e=Io(t.pos,wa(t.vel,Rn)),n=yh(e,t.pos),s=Math.max(1,Math.ceil(Go(n)/.08));let a=!1;for(let r=1;r<=s&&!a;r++){const o=Io(t.pos,wa(n,r/s));if(o.y<=0){t.pos=Ln(o.x,.02,o.z),t.stuck=!0,a=!0,t.team==="player"&&i.emit({type:"arrowMiss",pos:t.pos});break}for(const l of i.fighters){if(l.team===t.team||!l.targetable)continue;const c=Ux(l,o);if(c){if(t.team==="enemy"){if(bf(i,l))continue;a=Vx(i,t,l,o)}else a=Gx(i,t,l,c==="head",o);if(a){t.pos=o;break}}}}a||(t.pos=e),(t.age>240||Math.hypot(t.pos.x,t.pos.z)>140)&&(t.alive=!1)}for(let t=i.projectiles.length-1;t>=0;t--)i.projectiles[t].alive||i.projectiles.splice(t,1)}function Uc(i,t,e){i.stuck=!0,i.stuckTo=t.id;const n=e.x-t.pos.x,s=e.z-t.pos.z,a=Math.cos(-t.yaw),r=Math.sin(-t.yaw),o=Math.atan2(i.vel.x,i.vel.z)-t.yaw;i.stuckOffset={x:n*a+s*r,y:e.y,z:-n*r+s*a,yaw:o},i.age=0}function Vx(i,t,e,n){const s={x:e.pos.x-t.vel.x,z:e.pos.z-t.vel.z},a=e.angleTo(s)<=G.guardArc,r=i.get(t.ownerId)??e;return e.is("guard","deflect","blockstun")&&a?(t.alive=!1,Ef(i,e)?(Eh(i),i.stats.deflects++,i.gainResolve(G.resolveGain.deflect*.5),i.freeze(tn.block),i.emit({type:"deflect",defender:e.id,attacker:r.id,pos:{x:n.x,z:n.z},arrow:!0}),i.emit({type:"text",text:"화살 튕기기",sub:"矢弾き",style:"deflect",id:e.id})):(e.addPosture(8),i.emit({type:"block",defender:e.id,attacker:r.id,pos:{x:n.x,z:n.z},enemy:!1})),!0):(Uc(t,e,n),t.alive=!1,Th(i,r,e,t.damage,!1),!0)}function Gx(i,t,e,n,s){const a=i.player,r=e.arch,o=mi({x:-t.vel.x,z:-t.vel.z}),l=Math.abs((o-e.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)<=70*Math.PI/180,c=t.arrowType==="heavy";if(r.arrow.shieldFront&&l&&e.shieldOpen<=0&&!e.defenseless&&!(n&&t.perfect))return Uc(t,e,s),c?(e.shieldOpen=160,e.set("stagger",30),e.brain&&(e.brain.token=!1),i.emit({type:"shieldOpen",id:e.id}),i.emit({type:"text",text:"방패 걷어냄",sub:"관통 화살",style:"effective",id:e.id})):i.emit({type:"text",text:"방패에 막힘",sub:"관통 화살(2)을 써라",style:"bad",id:e.id}),i.emit({type:"arrowHit",target:e.id,pos:s,headshot:!1,dmg:0,lethal:!1,blocked:!c}),!0;let h=n?G.headshotMul*r.arrow.headMul:r.arrow.bodyMul;const d=!n&&r.arrow.glanceBody&&!c;!n&&r.arrow.glanceBody&&c&&(h=1.1);const u=t.damage*h;Uc(t,e,s),d&&i.emit({type:"text",text:"갑옷에 튕김",sub:"관통 화살 / 머리를 노려라",style:"bad",id:e.id});const p=e.hp;Rf(i,a,e,u,u*.6,{heavy:c||n,interrupt:!0,result:d?"glance":n?"effective":"normal",atkType:"thrust",knockback:c?.6:0,arrow:!0});const g=p>0&&e.hp<=0;return n&&(i.stats.headshots++,i.gainResolve(G.resolveGain.headshot),i.emit({type:"text",text:"헤드샷",sub:t.perfect?"정사 · 頭":"頭",style:"effective",id:e.id})),t.arrowType==="fire"&&e.alive&&(e.burning=G.burnTicks,!r.heavyBody&&!r.isBoss&&!e.is("broken","finished")&&(e.set("fear",90),e.brain&&(e.brain.token=!1)),i.emit({type:"burn",id:e.id})),i.emit({type:"arrowHit",target:e.id,pos:s,headshot:n,dmg:u,lethal:g,blocked:!1}),g&&e.deathKind!=="arrow"&&(e.deathKind="arrow"),g&&!e.alive&&e.brain&&(e.brain.token=!1),!0}function wh(i){return i.feint||i.projectile?0:Math.max(2,Math.min(6,Math.round(i.startup*.34)))}function Wx(i){const t=wh(i),e=i.startup,n=e-t,s=i.startup+i.active,a=Math.min(s+i.recovery,s+Math.max(3,Math.round(i.recovery*.38)));return{windupEnd:Math.max(1,Math.round(n*.78)),release:n,contact:e,activeEnd:s,followEnd:a,end:s+i.recovery,trail:[n,Math.min(a,s+3)]}}function El(i){const t=G.finisherImpact[i];if(i==="slash"){const n=G.finisherSlashDur;return{dur:n,dash:7,windupEnd:t-10,release:t-4,contact:t,followEnd:t+4,holdEnd:t+20,pull:t+24,trail:[t-4,t+6],victimFall:t+8,victimDown:t+38,victimDur:n+6,stand:.85}}if(i==="thrust"){const n=G.finisherThrustDur;return{dur:n,dash:7,windupEnd:t-12,release:t-4,contact:t,followEnd:t+2,holdEnd:t+14,pull:t+19,trail:[t-4,t+2],victimFall:t+19,victimDown:t+54,victimDur:n+6,stand:1}}const e=G.finisherFlowDur;return{dur:e,dash:5,windupEnd:t-5,release:t-3,contact:t,followEnd:t+4,holdEnd:t+18,pull:t+22,trail:[t-3,t+5],victimFall:t+3,victimDown:t+34,victimDur:e+6,stand:.85}}const zi={slash:El("slash"),thrust:El("thrust"),flow:El("flow")},ui={dur:G.issenDur,travel:5,contact:1,trail:[0,7],victimFreeze:22,victimDown:52,victimDur:56},Xn={seg:15,contact:3,trail:[1,8]};function Nc(i){return((i-1)%Xn.seg+Xn.seg)%Xn.seg}const ua={result:"normal",dmgMul:1,postureMul:1},Yx=75*Math.PI/180,hs=i=>(i=Math.max(0,Math.min(1,i)),1-(1-i)*(1-i)),Vd=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Ea=i=>({x:-Math.cos(i),z:Math.sin(i)});function Mf(i,t){return i.arch?i.arch.isBoss&&i.phase===2?wx[t]:i.arch.defense[t]:ua}function Xx(i,t,e){const n=e.shape,s=ps(i.pos,t.pos);if(n.kind==="arc"){if(n.range<=0||s>n.range+t.radius)return!1;if(n.halfAngle>=Math.PI-.001)return!0;const r=s>.001?Math.asin(Math.min(1,t.radius/s)):Math.PI;return i.angleTo(t.pos)<=n.halfAngle+r}if(n.range<=0)return!1;const a=i.forward();return Ic(ce(t.pos,i.pos),a)<-t.radius?!1:Ax(t.pos,i.pos,Qe(i.pos,zt(a,n.range)))<=n.width/2+t.radius}function Tl(i){const t=i.act;if(!t.from||!t.to||!t.travel)return{x:0,z:0};if(t.t>t.travel)return{x:0,z:0};const e=hs((t.t-1)/t.travel),n=hs(t.t/t.travel);return zt(ce(t.to,t.from),n-e)}function qx(i,t){const e=t.act;switch(e.kind){case"attack":return Kx(i,t);case"charge":{const n=i.get(e.targetId);return n&&n.targetable&&(t.yaw=Si(t.yaw,t.yawTo(n.pos),.08)),{x:0,z:0}}case"dodge":{const n=e.value===1?G.rollDist:G.dodgeDist,s=hs((e.t-1)/(e.dur*.8)),a=hs(e.t/(e.dur*.8));return zt(e.dir??{x:0,z:0},n*(a-s))}case"flowStep":{const n=hs((e.t-1)/10),s=hs(e.t/10);return zt(e.dir??{x:0,z:0},.8*(s-n))}case"flow":case"issen":{const n=i.get(e.targetId);return n&&e.kind==="flow"&&(t.yaw=Si(t.yaw,t.yawTo(n.pos),.3)),Tl(t)}case"finisher":{const n=i.get(e.targetId);if(n){e.t<=8&&(t.yaw=Si(t.yaw,t.yawTo(n.pos),.5)),e.finisher!=="flow"&&(n.yaw=Si(n.yaw,n.yawTo(t.pos),.4));const s=zi[e.finisher].contact;e.t===s&&!e.done&&(e.done=!0,o1(i,t,n,e.finisher??"slash"))}return Tl(t)}case"overextended":case"evade":case"standoff":return Tl(t);case"gale":return c1(i,t);case"quickshot":return e.t===6&&Bx(i,t),{x:0,z:0};default:return{x:0,z:0}}}function Kx(i,t){const e=t.act,n=e.move,s=i.get(e.targetId);if(s&&s.targetable&&e.t<=(n.trackUntil??0)){const c=t.isPlayer?.5:(t.arch?.turnRate??.12)*1.4;t.yaw=Si(t.yaw,t.yawTo(s.pos),c)}const a=n.startup+n.active;if(!e.lunge||e.t>a)return{x:0,z:0};const r=Vd((e.t-1)/a),o=Vd(e.t/a);let l=e.lunge*(o-r);return s&&s.targetable&&t.gapTo(s)<.25&&(l=0),zt(t.forward(),l)}function $x(i,t){const e=t.act,n=e.move;if(!t.isPlayer&&n.unblockable&&n.unblockable!=="none"&&e.t===Math.max(1,n.startup-G.glintLead)&&(t.glint={color:n.unblockable,t:0},i.emit({type:"glint",id:t.id,color:n.unblockable,move:n})),n.feint)return;if(!t.isPlayer&&!n.projectile&&e.t===Math.max(1,n.startup-i.win(n.unblockable==="red"?G.flowWindow:G.deflectWindow))&&i.emit({type:"cue",id:t.id,grade:n.unblockable==="red"?"red":n.unblockable==="blue"?"blue":"white"}),!n.projectile&&e.t===Math.max(1,n.startup-wh(n))&&i.emit({type:"swing",id:t.id,move:n}),e.t===n.startup){!t.isPlayer&&!n.projectile&&(i.lastEnemyContact.tick=i.tick,i.lastEnemyContact.id=t.id),n.projectile&&(i.emit({type:"swing",id:t.id,move:n}),zx(i,t,n));const a=i.player;!t.isPlayer&&!n.projectile&&a.is("dodge")&&a.distTo(t)<=n.shape.range+G.dodgeDist+a.radius&&Tf(i,t,a)}if(n.projectile||e.t<n.startup||e.t>=n.startup+n.active)return;e.hit??=new Set;const s=t.isPlayer?i.fighters.filter(a=>a.team==="enemy"&&a.targetable):i.player.targetable?[i.player]:[];for(const a of s)if(!(e.hit.has(a.id)||!Xx(t,a,n))&&(e.hit.add(a.id),t.isPlayer?Af(i,t,a,n):Jx(i,t,a,n),t.act!==e))break}function bf(i,t){const e=t.act;if(e.kind==="dodge"){const[n,s]=e.value===1?G.rollIFrames:G.dodgeIFrames;return e.t>=n&&e.t<=s}return e.kind==="flowStep"&&e.t<=i.win(G.flowWindow)?!1:t.is("finisher","issen","flow","gale","dead")}function Sf(i){const t=i.ps,e=Math.max(G.deflectHeatCool,i.win(G.deflectWindow)*1.8),n=Math.max(0,t.guardHeat-(i.tick-t.guardHeatTick)/e);t.guardMashed=n>=G.deflectHeatLimit,t.guardHeat=Math.min(G.deflectHeatMax,n+1),t.guardHeatTick=i.tick}function wf(i){i.ps.guardHeat=Math.max(0,i.ps.guardHeat-1)}function Eh(i){i.ps.guardHeat=0,i.ps.guardMashed=!1}function Ef(i,t){return!t.is("guard","deflect","blockstun")||i.tick-i.ps.guardStartTick>i.win(G.deflectWindow)?!1:!i.ps.guardMashed}function Tf(i,t,e){const n=e.act,s=i.ps;if(n.kind!=="dodge")return;const a=n.value===1?G.rollIFrames[0]:G.dodgeIFrames[0],r=i.tick-n.t;n.t<a||n.t-a>G.perfectDodgeFrames||s.perfectDodgeTick===r||i.tick-s.lastPerfectDodgeTick<30||(s.perfectDodgeTick=r,s.lastPerfectDodgeTick=i.tick,s.dodgeCounterUntil=i.tick+G.dodgeCounterWindow,i.stats.perfectDodges++,i.gainResolve(G.resolveGain.perfectDodge),i.slowmo(.35,.4),i.emit({type:"perfectDodge",id:e.id,attacker:t.id}),i.emit({type:"text",text:"완벽 회피",sub:"見切り",style:"info",id:e.id}))}function Zx(i,t,e){const n=t.act;if(n.kind!=="attack"||!n.move)return!1;const s=i.ps,a=i.tick<=s.issenChainUntil,r=i.win(a?G.issenChainWindow:G.issenWindow);return n.t>r||n.t>=n.move.startup+n.move.active||!a&&s.attackPressTick-s.prevAttackPressTick<G.issenMashLockout?!1:t.angleTo(e.pos)<=Math.PI*.6}function Jx(i,t,e,n){const s=e.act;if(bf(i,e)){Tf(i,t,e);return}if(Zx(i,e,t)){Wo(i,e,t,!1);return}if(s.kind==="flowStep"&&s.t<=i.win(G.flowWindow)){n1(i,e,t,s.side??1);return}const a=n.unblockable??"none",r=e.angleTo(t.pos)<=G.guardArc;if(e.is("guard","deflect","blockstun")&&r){if(a!=="red"&&Ef(i,e)){e1(i,e,t);return}const o=a!=="red"?Qx(i):null;if(a==="none"){o&&i.emit({type:"text",text:o.text,sub:o.sub,style:"info",id:e.id}),t1(i,e,t,n);return}o?i.emit({type:"text",text:o.text,sub:`${o.sub} · 파란 링은 튕기기로만`,style:"bad",id:e.id}):i.emit({type:"text",text:a==="red"?"막을 수 없다":"튕기기로만 막힌다",style:"bad",id:e.id})}else a!=="red"&&!n.projectile&&(i.ps.struckTick=i.tick);Th(i,t,e,n.damage,a!=="none"||n.damage>=20)}function Qx(i){const t=i.ps,e=i.tick-t.guardStartTick,n=i.win(G.deflectWindow);return e<=n?{text:"방패 연타",sub:"연타한 방패는 막기만 된다"}:e>n+30?null:{text:"빨랐다",sub:`${e-n}틱 일찍`}}function jx(i,t){const e=i.ps;if(e.struckTick<0||!t.pressed.guard)return;const n=i.tick-e.struckTick<=10&&i.player.alive;if(e.struckTick=-9999,!n)return;const s=i.win(G.deflectWindow)+G.inputBuffer;for(const a of i.fighters){const r=a.act.move;if(a.team!=="enemy"||!a.alive||a.act.kind!=="attack"||!r||r.feint||r.projectile)continue;const o=r.startup-a.act.t;if(o>0&&o<=s)return}i.emit({type:"text",text:"늦었다",sub:"링이 닿기 전에",style:"bad",id:i.player.id})}function Th(i,t,e,n,s){const a=n*i.settings.enemyDamage;i.settings.invincible||(e.hp-=a),i.stats.damageTaken+=a,e.hitFlash=8,i.ps.combo=0,i.ps.draw=0,i.ps.focusing=!1;const r=je(ce(e.pos,t.pos));if(i.emit({type:"hit",attacker:t.id,target:e.id,pos:e.pos,dmg:a,result:"normal",atkType:"slash",lethal:e.hp<=0,heavy:s}),e.hp<=0){e.hp=0,e.set("dead",1/0),i.pushBack(e,r,1.2),i.mode="defeat",i.slowmo(.3,1.6),i.emit({type:"defeat"});return}e.set(s?"stagger":"hitstun",s?G.stagger:G.hitstun),i.pushBack(e,r,s?1.2:.45),i.freeze(s?tn.heavy:tn.light)}function t1(i,t,e,n){const s=t.addPosture(n.posture*G.blockPostureMul);if(i.emit({type:"block",defender:t.id,attacker:e.id,pos:Ti(t,e),enemy:!1}),s){t.set("guardbreak",G.guardBreakStun),t.posture=t.maxPosture*.6,i.pushBack(t,ce(t.pos,e.pos),.8),i.emit({type:"guardBreak",id:t.id,pos:t.pos}),i.emit({type:"text",text:"방패가 밀렸다",sub:"체간 붕괴",style:"bad",id:t.id}),i.freeze(tn.heavy);return}t.set("blockstun",10),i.pushBack(t,ce(t.pos,e.pos),.3),i.freeze(tn.block)}function e1(i,t,e){const n=i.ps;e.addPosture(G.deflectPostureDmg*(e.arch?.isBoss?.8:1))?_r(i,e):e.set("recoil",G.deflectRecoil),i.pushBack(e,ce(e.pos,t.pos),.5),e.brain&&(e.brain.token=!1),t.set("deflect",14,{targetId:e.id}),t.yaw=t.yawTo(e.pos),n.hajikiTarget=e.id,n.hajikiUntil=i.tick+i.win(G.hajikiIssenWindow),n.riposteTarget=e.id,n.riposteUntil=i.tick+G.riposteWindow,n.lastDeflectTick=i.tick,Eh(i),i.stats.deflects++,i.gainResolve(G.resolveGain.deflect),i.freeze(tn.deflect),i.slowmo(.55,.15),i.emit({type:"deflect",defender:t.id,attacker:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕기기",sub:"弾き",style:"deflect",id:t.id})}function n1(i,t,e,n){const s=i.ps;Eh(i);const a=Ea(t.yaw),r=Qe(t.pos,Qe(zt(a,n*G.flowSideStep),zt(t.forward(),.2)));t.set("flow",G.flowAnimDur,{targetId:e.id,from:{...t.pos},to:r,travel:8,side:n});const o=e.forward();e.set("overextended",G.overextendDur,{from:{...e.pos},to:Qe(e.pos,zt(o,1.7)),travel:18}),e.addPosture(20),e.brain&&(e.brain.token=!1),s.flowTarget=e.id,s.flowUntil=i.tick+G.overextendDur,i.stats.flows++,i.gainResolve(G.resolveGain.flow),i.freeze(tn.flow),i.slowmo(.35,.35),i.emit({type:"flow",defender:t.id,attacker:e.id,pos:Ti(t,e),side:n}),i.emit({type:"text",text:"흘리기",sub:"流し",style:"flow",id:t.id})}function Wo(i,t,e,n,s=!1){const a=i.ps,r=!n&&!s&&i.tick<=a.issenChainUntil?a.issenChain+1:1;!n&&!s&&(a.issenChain=r,a.issenChainUntil=i.tick+G.issenChainTime,i.stats.maxIssenChain=Math.max(i.stats.maxIssenChain,r));const o=je(ce(e.pos,t.pos)),l=Qe(e.pos,zt(o,e.radius+1.1)),c=s?"standoff":n?"hajiki":"issen";t.set("issen",ui.dur,{targetId:e.id,from:{...t.pos},to:l,travel:ui.travel,finisher:c}),(n||s)&&(t.act.t=-1),t.yaw=mi(o),a.hajikiTarget=-1,e.brain&&(e.brain.token=!1),e.arch?.isBoss?(e.hp=Math.max(0,e.hp-e.maxHp*G.bossIssenFrac),e.addPosture(40),e.set("finished",40,{finisher:c,targetId:t.id}),e.hp<=0?Ds(i,e,c):Ah(i,e)):(e.hp=0,e.set("finished",ui.victimDur,{finisher:c,targetId:t.id}),e.deathKind=c,Ds(i,e,c)),s?i.stats.standoffKills++:i.stats.issens++,i.gainResolve(G.resolveGain.issen),i.freeze(tn.issen),i.slowmo(.18,r>1?.45:.7),i.emit({type:"issen",performer:t.id,victim:e.id,pos:Ti(t,e),chain:r,hajiki:n});const h=s?"대치 참":n?"튕기기 일섬":r>1?`연쇄 일섬 ×${r}`:"일섬",d=s?"対峙斬り":n?"弾き一閃":r>1?"連鎖一閃":"一閃";i.emit({type:"text",text:h,sub:d,style:"issen",id:t.id})}function Af(i,t,e,n){if(!e.targetable||e.is("evade"))return;const s=t.act,a=e.angleTo(t.pos)<=Yx;let r=n.trueStrike?ua:Mf(e,n.type);if(r.frontalOnly&&!a&&(r=ua),e.arch?.id==="shield"&&e.shieldOpen>0&&r.result==="bounce"&&(r=ua),(r.result==="bounce"||r.result==="evade"||r.result==="haft")&&e.defenseless&&(r=ua),r.result==="evade")if(e.is("attack","hitstun","stagger","blockstun","finished"))r=ua;else return s1(i,e,t);if(r.result==="bounce")return a1(i,t,e,n,r);if(r.result==="haft")return r1(i,t,e,n,r);if(e.act.kind==="guard"&&a&&!n.trueStrike){if(e.act.value===1&&!n.heavy&&!n.interrupt)return i1(i,t,e);if(n.heavy||n.interrupt){e.set("guardbreak",50),e.addPosture(n.posture*.5),i.pushBack(e,ce(e.pos,t.pos),.6),i.emit({type:"guardBreak",id:e.id,pos:e.pos}),i.emit({type:"text",text:"가드 붕괴",sub:"崩し",style:"effective",id:e.id}),i.freeze(tn.heavy);return}const d=e.addPosture(n.posture*.6*r.postureMul);i.emit({type:"block",defender:e.id,attacker:t.id,pos:Ti(t,e),enemy:!0}),i.freeze(tn.block),d?_r(i,e):e.brain&&i.rng.chance(.35)&&(e.brain.counter=!0);return}n.shieldBreak&&e.arch?.id==="shield"&&e.shieldOpen<=0&&(e.shieldOpen=150,i.emit({type:"shieldOpen",id:e.id}),i.emit({type:"text",text:"방패 걷어냄",sub:"盾崩し",style:"effective",id:e.id}));const l=s.kind==="attack"&&n.heavy?1+.3*(s.value??0):1;let c=n.damage*r.dmgMul*(s.dmgBonus??1)*l,h=n.posture*r.postureMul*(s.postureBonus??1)*l;e.is("fear")&&(h*=1.5),e.is("overextended")&&(c*=1.5),Rf(i,t,e,c,h,{heavy:!!(n.heavy||n.finale),interrupt:!!n.interrupt,result:r.result,atkType:n.type,knockback:n.knockback??0})}function Rf(i,t,e,n,s,a){e.hp-=n,e.hitFlash=6,a.result==="effective"&&i.stats.effectiveHits++,a.result==="glance"&&(i.stats.badHits++,i.emit({type:"glance",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"미끄러짐",sub:e.arch?.weakness==="thrust"?"갑옷 틈을 찔러라":"",style:"bad",id:e.id})),i.ps.combo++,i.ps.comboTimer=120;const r=e.hp<=0,o=je(ce(e.pos,t.pos));if(i.emit({type:"hit",attacker:t.id,target:e.id,pos:Ti(t,e),dmg:n,result:a.result,atkType:a.atkType,lethal:r,heavy:a.heavy}),r){e.hp=0,e.set("dead",1/0),e.deathKind=a.arrow?"arrow":a.atkType,i.pushBack(e,o,a.heavy?1.4:.7),Ds(i,e,a.arrow?"arrow":a.atkType),i.freeze(tn.heavy);return}const l=e.addPosture(s);if(Ah(i,e),!e.is("finished")){if(l&&!e.is("broken")){_r(i,e),i.freeze(tn.heavy);return}if(!e.is("broken","overextended")){const c=!!e.arch?.heavyBody||e.attacking&&!!e.act.move?.hyperArmor;a.interrupt&&e.attackPhase==="startup"&&!(a.arrow&&c)?(e.set("hitstun",G.hitstun),i.pushBack(e,o,.5)):a.result==="glance"||c?a.heavy&&!e.attacking&&!e.arch?.isBoss&&(e.set("stagger",26),i.pushBack(e,o,.4+a.knockback*.5)):a.heavy?(e.set("stagger",G.stagger),i.pushBack(e,o,.6+a.knockback)):(e.set("hitstun",G.hitstun),i.pushBack(e,o,.35)),e.brain&&(e.brain.token=e.brain.token&&!e.is("hitstun","stagger"),e.arch&&i.rng.chance(e.arch.ai.guardChance)&&(e.brain.pendingGuard=!0),e.arch&&!a.arrow&&e.arch.ai.breakout!=="none"&&(e.poiseHits++,e.poiseTimer=90,e.poiseHits>=e.arch.ai.poise&&(e.poiseHits=0,e.brain.breakout=!0,e.brain.pendingGuard=!1,e.is("hitstun")&&(e.act.dur=Math.min(e.act.dur,8)))))}i.freeze(a.result==="effective"?tn.effective:a.heavy?tn.heavy:tn.light)}}function i1(i,t,e){t.set("recoil",30),i.pushBack(t,ce(t.pos,e.pos),.5),e.set("guard",16,{value:0}),e.brain&&(e.brain.counter=!0,e.brain.guardTimer=16),i.stats.badHits++,i.freeze(tn.deflect),i.emit({type:"deflect",defender:e.id,attacker:t.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕겨냈다",sub:"적의 튕기기 — 강공격·방패 치기로 깨라",style:"bad",id:e.id})}function s1(i,t,e){const n=i.rng.chance(.5)?1:-1,s=Ea(t.yawTo(e.pos)),a=je(ce(t.pos,e.pos));t.set("evade",20,{from:{...t.pos},to:Qe(t.pos,Qe(zt(s,1.7*n),zt(a,.4))),travel:10,side:n}),t.brain&&(t.brain.counter=!0),i.stats.badHits++,i.emit({type:"evade",id:t.id,attacker:e.id}),i.emit({type:"text",text:"회피당함",sub:"넓게 베어라",style:"bad",id:t.id})}function a1(i,t,e,n,s){t.set("recoil",n.heavy?30:24),i.pushBack(t,ce(t.pos,e.pos),.5),e.addPosture(n.posture*s.postureMul)?_r(i,e):e.brain&&(e.brain.counter=!0),i.stats.badHits++,i.freeze(tn.bounce),i.emit({type:"bounce",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕겨남",sub:"방패엔 찌르기",style:"bad",id:e.id})}function r1(i,t,e,n,s){if(t.set("recoil",14),i.pushBack(t,ce(t.pos,e.pos),.8),e.hp-=n.damage*s.dmgMul,e.hp<=0){e.hp=0,e.set("dead",1/0),e.deathKind=n.type,Ds(i,e,n.type);return}e.addPosture(n.posture*s.postureMul)&&_r(i,e),i.stats.badHits++,i.freeze(tn.block),i.emit({type:"haft",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"창대에 막힘",sub:"창병엔 베기",style:"bad",id:e.id})}function _r(i,t){t.set("broken",G.brokenDur),t.posture=t.maxPosture,t.glint=null,t.brain&&(t.brain.token=!1),i.emit({type:"postureBreak",id:t.id,pos:t.pos}),i.emit({type:"text",text:"체간 붕괴",sub:"피니쉬!",style:"finisher",id:t.id})}function Ds(i,t,e){i.stats.kills++,i.ps.arrows.standard=Math.min(G.maxArrows.standard,i.ps.arrows.standard+1),i.gainResolve(G.resolveGain.kill),t.brain&&(t.brain.token=!1),t.glint=null,i.emit({type:"kill",victim:t.id,killer:i.player.id,cause:e}),i.liveEnemies().length===0&&i.mode==="combat"&&i.slowmo(.22,1.2)}function Ah(i,t){!t.arch?.isBoss||t.phase!==1||t.hp>t.maxHp*.55||(t.phase=2,t.posture=0,t.is("finished")||t.set("stagger",60),i.emit({type:"armorShatter",id:t.id,pos:t.pos}),i.emit({type:"text",text:"갑옷 파쇄",sub:"이제 베기가 통한다",style:"warn",id:t.id}),i.slowmo(.3,.8))}function Fc(i,t,e=-1){const n=i.ps,s=i.get(n.flowTarget);if(s&&s.id!==e&&s.targetable&&s.is("overextended")&&i.tick<=n.flowUntil&&t.distTo(s)<=4)return{target:s,kind:"flow"};const a=i.get(n.hajikiTarget);if(a&&a.id!==e&&a.targetable&&a.is("recoil")&&i.tick<=n.hajikiUntil&&t.distTo(a)<=4.2)return{target:a,kind:"hajiki"};let r=null,o=1/0;for(const l of i.fighters){if(l.team!=="enemy"||l.id===e||!l.targetable)continue;const c=!l.arch?.isBoss&&l.hp<=l.maxHp*G.finishHpFrac&&l.is("stagger","guardbreak","fear","hitstun");if(!l.is("broken")&&!c)continue;const h=t.distTo(l)-l.radius,d=e>=0?G.finisherChainRange:G.finisherRange;if(h>d)continue;const u=h+t.angleTo(l.pos)*.8;u<o&&(o=u,r=l)}return r?{target:r,kind:"finisher"}:null}function Oc(i,t,e,n){const s=zi[n],a=s.dur,r=je(ce(e.pos,t.pos)),o=s.stand+e.radius*.6,l=ce(e.pos,zt(r,o));t.set("finisher",a,{finisher:n,targetId:e.id,from:{...t.pos},to:l,travel:s.dash}),e.kb={x:0,z:0},e.vel={x:0,z:0},t.yaw=mi(r),e.set("finished",s.victimDur,{finisher:n,targetId:t.id}),e.glint=null,n!=="flow"&&(e.yaw=mi(zt(r,-1))),e.brain&&(e.brain.token=!1);const c=n!=="flow"&&e.arch?.weakness===n;i.ps.flowTarget=-1,i.emit({type:"finisherStart",performer:t.id,victim:e.id,kind:n,weakness:c})}function o1(i,t,e,n){const s=e.arch?.weakness===n;e.hp<=0||(e.arch?.isBoss?(e.hp=Math.max(0,e.hp-e.maxHp*G.bossFinisherFrac*(s?1.2:1)),e.posture=0,e.hp<=0?(e.deathKind=n,Ds(i,e,n)):Ah(i,e)):(e.hp=0,e.deathKind=n,Ds(i,e,n))),i.stats.finishers++,i.gainResolve(G.resolveGain.finisher+(s?.25:0)),i.freeze(tn.finisher),i.slowmo(.3,.5),i.emit({type:"finisherImpact",performer:t.id,victim:e.id,kind:n,pos:e.pos});const a=n==="slash"?["일도양단","一刀両断"]:n==="thrust"?["심장 관통","心突"]:["흘려베기","流し斬り"];i.emit({type:"text",text:a[0],sub:s?`${a[1]} · 약점 마무리`:a[1],style:"finisher",id:t.id}),l1(i,e.pos,s)}function l1(i,t,e){for(const n of i.fighters){if(n.team!=="enemy"||!n.targetable||n.arch?.isBoss||n.is("broken","fear")||ps(n.pos,t)>G.terrifyRadius)continue;const s=G.terrifyChance*(1-(n.arch?.ai.courage??.5)*.6)+(e?G.terrifyWeaknessBonus:0);i.rng.chance(s)&&(n.set("fear",G.fearDur),n.brain&&(n.brain.token=!1),i.emit({type:"fear",id:n.id}),i.emit({type:"text",text:"겁먹음",sub:"怯え",style:"info",id:n.id}))}}const gr=Xn.seg;function c1(i,t){const e=t.act,n=Math.floor((e.t-1)/gr),s=(e.t-1)%gr,a=i.get(i.ps.galeTargets[n]);if(!a)return{x:0,z:0};if(s===0){const l=je(ce(a.pos,t.pos));e.from={...t.pos},e.to=Qe(a.pos,zt(l,a.radius+.9)),t.yaw=mi(l)}if(!e.from||!e.to||s>5)return{x:0,z:0};const r=hs(s/5),o=hs((s+1)/5);return zt(ce(e.to,e.from),o-r)}function h1(i,t){const e=t.act,n=Math.floor((e.t-1)/gr),s=(e.t-1)%gr,a=i.get(i.ps.galeTargets[n]);s===Xn.contact-2&&a&&a.targetable&&i.emit({type:"swing",id:t.id,move:pr.r_gale}),s===Xn.contact&&a&&a.targetable&&Af(i,t,a,pr.r_gale)}function Ti(i,t){return zt(Qe(i.pos,t.pos),.5)}function d1(i,t){const e=i.player,n=i.ps,s=i.buffer,a=i.tick;{const c=u=>s.pressTick.get(u)??-9999,h=u=>s.prevPressTick.get(u)??-9999,d=[c("slash"),c("thrust"),h("slash"),h("thrust")].sort((u,p)=>p-u);n.attackPressTick=d[0],n.prevAttackPressTick=d[1]}if(t.pressed.arrow1&&(n.arrowType="standard"),t.pressed.arrow2&&(n.arrowType="heavy"),t.pressed.arrow3&&(n.arrowType="fire"),t.pressed.arrowNext){const c=["standard","heavy","fire"];n.arrowType=c[(c.indexOf(n.arrowType)+1)%c.length]}if(t.pressed.lock){const c=i.get(n.lockTarget);c&&c.targetable?n.lockTarget=null:n.lockTarget=sr(i,e,t,14)?.id??null}if(n.lockTarget!==null&&!i.get(n.lockTarget)?.targetable&&(n.lockTarget=null),!e.alive||i.mode==="victory"){e.vel={x:0,z:0};return}const r=Fc(i,e);n.finisherTarget=r?.target.id??null,n.finisherKindHint=r?.kind??null,n.softTarget=sr(i,e,t,G.softTargetRange)?.id??null;const o=G.inputBuffer,l=e.act;switch(e.vel={x:0,z:0},l.kind){case"free":if(t.pressed.standoff&&i.waves?.standoffAvailable&&i.standoff.begin(i)||Ss(i,e)||Bc(i,e,t))return;if(t.held.heal&&n.resolve>=G.healCost&&e.hp<e.maxHp){e.set("heal",G.healDur);return}if(t.held.aim)return Mo(i,e);if(s.consume("quickshot",a,o)&&Cf(i,e))return;if(s.consume("dodge",a,o))return oi(i,e,t);if(t.held.guard)return rs(i,e,Ui(i));if(s.peek("slash",a,o)||s.peek("thrust",a,o))return za(i,e,t);Al(i,e,t,G.runSpeed);return;case"guard":{{const c=Ui(i);c!==null&&(n.prevGuardStartTick=n.guardStartTick,n.guardStartTick=c,Sf(i))}if(Ss(i,e))return;if(!t.held.guard&&a-n.guardStartTick>i.win(G.deflectWindow)){e.set("free",1/0),Al(i,e,t,G.runSpeed);return}if(s.consume("dodge",a,o))return f1(i,e,t);if(s.consume("slash",a,o))return wf(i),_a(i,e,t,Mn("r_bash"),"slash",!1);if(s.peek("thrust",a,o))return s.consume("thrust",a,o),_a(i,e,t,Mn(xh.thrust),"thrust",!0);if(t.held.aim)return Mo(i,e);Al(i,e,t,G.guardMoveSpeed,!0);return}case"deflect":if(Ss(i,e))return;{const c=Ui(i);if(c!==null)return rs(i,e,c)}return l.t>=6&&s.consume("dodge",a,o)?oi(i,e,t):l.t>=8&&(s.peek("slash",a,o)||s.peek("thrust",a,o))?za(i,e,t):void 0;case"blockstun":{const c=Ui(i);if(c!==null)return rs(i,e,c)}return;case"flow":return l.t>=6&&Ss(i,e)?void 0:l.t>=14&&s.consume("dodge",a,o)?oi(i,e,t):void 0;case"flowStep":if(l.t>i.win(G.flowWindow)+4){if(s.peek("slash",a,o)||s.peek("thrust",a,o))return za(i,e,t);{const c=Ui(i);if(c!==null)return rs(i,e,c)}}return;case"attack":return u1(i,e,t);case"charge":{const c=l.button??"slash",h=sr(i,e,t,G.softTargetRange);if(h?l.targetId=h.id:Nn(t.move)>.2&&(e.yaw=Si(e.yaw,mi(t.move),.1)),s.consume("dodge",a,o))return oi(i,e,t);if(!t.held[c]&&l.t>=G.chargeMin||l.t>=G.chargeMax){const d=Math.min(1,l.t/G.chargeMax),u=Mn(Ix[c]);_a(i,e,t,u,c,!1,d)}return}case"dodge":if(l.value!==1&&l.t>=3&&l.t<=14&&s.consume("dodge",a,o)){e.set("dodge",G.rollDur,{dir:l.dir,value:1});return}if(l.t>=(l.value===1?22:G.dodgeCancelFrom)){if(Ss(i,e))return;if(t.held.aim)return Mo(i,e);if(s.peek("slash",a,o)||s.peek("thrust",a,o))return za(i,e,t);if(t.held.guard&&s.peek("guard",a,o))return rs(i,e,Ui(i))}return;case"aim":return p1(i,e,t);case"quickshot":if(l.t>=12){if(s.peek("slash",a,o)||s.peek("thrust",a,o))return za(i,e,t);if(s.consume("dodge",a,o))return oi(i,e,t)}return;case"finisher":if(l.t>=G.finisherChainFrom){const c=Fc(i,e,l.targetId??-1);if(c&&(s.peek("slash",a,o)||s.peek("thrust",a,o))){const h=Yo(i);c.kind==="hajiki"?Wo(i,e,c.target,!0):Oc(i,e,c.target,c.kind==="flow"?"flow":h),i.emit({type:"text",text:"연쇄 피니쉬",sub:"連殺",style:"finisher",id:e.id});return}if(l.t>=l.dur-12&&s.consume("dodge",a,o))return oi(i,e,t)}return;case"issen":if(l.t>=l.dur-12){if(Ss(i,e))return;if(s.consume("dodge",a,o))return oi(i,e,t);if(s.peek("guard",a,o))return rs(i,e,Ui(i))}return;case"recoil":if(l.t>=12){if(s.peek("guard",a,o))return rs(i,e,Ui(i));if(s.consume("dodge",a,o))return oi(i,e,t)}return;case"hitstun":return l.t>=10&&s.consume("dodge",a,o)?oi(i,e,t):void 0;case"heal":(t.pressed.dodge||t.pressed.guard)&&e.set("free",1/0);return;default:return}}function Al(i,t,e,n,s=!1){const a=e.move,r=Math.min(1,Nn(a));t.vel=zt(a,n*r);const o=i.get(i.ps.lockTarget);if(o&&o.targetable)i.faceToward(t,o.pos,G.playerTurnRate);else if(s){const l=i.get(i.ps.softTarget);l?i.faceToward(t,l.pos,.2):r>.1&&(t.yaw=Si(t.yaw,mi(a),.15))}else r>.1&&(t.yaw=Si(t.yaw,mi(a),G.playerTurnRate))}function sr(i,t,e,n){const s=i.get(i.ps.lockTarget);if(s&&s.targetable&&t.distTo(s)<n+4)return s;const a=Nn(e.move)>.25?je(e.move):t.forward();let r=null,o=1/0;for(const l of i.fighters){if(l.team!=="enemy"||!l.targetable)continue;const c=ce(l.pos,t.pos),h=Nn(c)-l.radius;if(h>n)continue;const d=Math.abs(Math.atan2(a.x*c.z-a.z*c.x,a.x*c.x+a.z*c.z));if(d>Math.PI*.6&&h>1.8)continue;const u=h*(1+d*1.3);u<o&&(o=u,r=l)}return r}function Yo(i){const t=G.inputBuffer,e=i.buffer.pressTick.get("slash")??-1,n=i.buffer.pressTick.get("thrust")??-1,s=i.buffer.peek("slash",i.tick,t),a=i.buffer.peek("thrust",i.tick,t),r=s&&a?n>e?"thrust":"slash":a?"thrust":"slash";return i.buffer.consume("slash",i.tick,t),i.buffer.consume("thrust",i.tick,t),r}function Ss(i,t){const e=G.inputBuffer;if(!i.buffer.peek("slash",i.tick,e)&&!i.buffer.peek("thrust",i.tick,e))return!1;const n=Fc(i,t);if(!n)return!1;const s=Yo(i);return n.kind==="hajiki"?Wo(i,t,n.target,!0):n.kind==="flow"?Oc(i,t,n.target,"flow"):Oc(i,t,n.target,s),!0}function Bc(i,t,e){const n=i.ps,s=i.buffer.pressTick.get("slash")??-99,a=i.buffer.pressTick.get("thrust")??-999,r=Math.abs(s-a)<=3&&i.tick-Math.max(s,a)<=4;if(!(e.pressed.gale||r))return!1;if(n.resolve<G.galeCost)return e.pressed.gale&&i.emit({type:"text",text:"결의 부족",style:"bad",id:t.id}),!1;const o=i.fighters.filter(l=>l.team==="enemy"&&l.targetable&&t.distTo(l)<10).sort((l,c)=>t.distTo(l)-t.distTo(c)).slice(0,3);return o.length===0?!1:(i.buffer.clear("slash"),i.buffer.clear("thrust"),n.resolve-=G.galeCost,n.galeTargets=o.map(l=>l.id),t.set("gale",gr*o.length+12),i.slowmo(.5,.6),i.emit({type:"gale",id:t.id}),i.emit({type:"text",text:"질풍참",sub:"疾風斬",style:"issen",id:t.id}),!0)}function za(i,t,e){const n=Yo(i);_a(i,t,e,Mn(xh[n]),n,!0)}function _a(i,t,e,n,s,a,r=0){const o=i.ps,l=sr(i,t,e,G.softTargetRange);let c=n.lunge*.3;if(l){t.yaw=t.yawTo(l.pos);const u=n.shape.range,p=ps(t.pos,l.pos)-t.radius-l.radius;c=Math.max(0,Math.min(n.lunge,p-u*.45+.2))}else Nn(e.move)>.2&&(t.yaw=mi(e.move));let h=1,d=1;i.tick<=o.dodgeCounterUntil&&(h*=1.6,d*=1.25,o.dodgeCounterUntil=-1,i.emit({type:"text",text:"회피 반격",style:"info",id:t.id})),l&&l.id===o.riposteTarget&&i.tick<=o.riposteUntil&&(h*=2,o.riposteUntil=-1),t.set("attack",n.startup+n.active+n.recovery,{move:n,hit:new Set,targetId:l?.id,lunge:c,opener:a,button:s,value:r,postureBonus:h,dmgBonus:d})}function u1(i,t,e){const n=t.act,s=n.move,a=i.buffer,r=i.tick,o=G.inputBuffer;if(!(n.opener&&n.t<=4&&Bc(i,t,e))){if(n.button&&!s.heavy&&s.id!=="r_bash"&&n.t===s.startup+s.active+G.chargeCheck&&e.held[n.button]&&!a.peek(n.button,r,o)){t.set("charge",1/0,{button:n.button,targetId:n.targetId});return}if(n.t>=s.chainFrom){if(Ss(i,t)||Bc(i,t,e))return;const l=a.peek("slash",r,o),c=a.peek("thrust",r,o);if(l||c){const h=l&&c?Yo(i):l?"slash":"thrust",d=s.next?.[h];if(d){a.consume(h,r,o),_a(i,t,e,Mn(d),h,!1);return}if(n.t>=s.cancelFrom+4){a.consume(h,r,o),_a(i,t,e,Mn(xh[h]),h,!0);return}}}if(n.t>=s.cancelFrom){if(a.consume("dodge",r,o))return oi(i,t,e);if(a.peek("guard",r,o)&&e.held.guard)return rs(i,t,Ui(i));if(e.held.aim)return Mo(i,t);if(a.consume("quickshot",r,o)&&Cf(i,t))return}}}function Ui(i){const t=i.buffer.pressTick.get("guard");return t===void 0||!i.buffer.consume("guard",i.tick,G.inputBuffer)?null:t}function rs(i,t,e){const n=i.ps;n.prevGuardStartTick=n.guardStartTick,n.guardStartTick=e??-9999,e!==null?Sf(i):n.guardMashed=!1,t.set("guard",1/0)}function oi(i,t,e){const n=Nn(e.move)>.2?je(e.move):zt(t.forward(),-1);i.ps.dodgePressTick=i.tick,t.set("dodge",G.dodgeDur,{dir:n}),i.ps.draw=0}function f1(i,t,e){wf(i);const n=Ea(t.yaw),a=e.move.x*n.x+e.move.z*n.z<-.2?-1:1;t.set("flowStep",G.flowStepDur,{side:a,dir:zt(n,a)})}function Mo(i,t){const e=i.ps;(i.tick-e.lastDodgeEnd<20||t.is("dodge"))&&(e.dodgeAimSlowmo=G.dodgeAimSlowmoSec),e.draw=0,t.set("aim",1/0)}function p1(i,t,e){const n=i.ps;if(!e.held.aim){n.draw=0,n.focusing=!1,n.dodgeAimSlowmo=0,t.set("free",1/0);return}if(i.buffer.consume("dodge",i.tick,G.inputBuffer))return n.focusing=!1,oi(i,t,e);t.yaw=e.camYaw,t.vel=zt(e.move,G.aimMoveSpeed*Math.min(1,Nn(e.move))),n.focusing=!!(e.held.focus||e.held.guard)&&n.resolve>.02,!!(e.held.slash||e.held.fire)?n.arrows[n.arrowType]>0?n.draw++:(e.pressed.slash||e.pressed.fire)&&i.emit({type:"text",text:"화살이 없다",style:"bad",id:t.id}):n.draw>0&&(n.draw>=8&&Ox(i,t,e,n.draw),n.draw=0)}function Cf(i,t){if(i.ps.arrows.standard<=0)return i.emit({type:"text",text:"화살이 없다",style:"bad",id:t.id}),!1;const e=sr(i,t,i.input,28);return e&&(t.yaw=t.yawTo(e.pos)),t.set("quickshot",G.quickshotDur,{targetId:e?.id}),!0}function m1(i,t){const e=t.arch?.ai.cooldown??[60,120];return{token:!1,cooldown:Math.round(i.rng.range(e[0]*.5,e[1])),strafeDir:i.rng.chance(.5)?1:-1,strafeTimer:Math.round(i.rng.range(60,180)),plan:null,guardTimer:0,pendingGuard:!1,counter:!1,aware:!0,slot:0,rangedCooldown:Math.round(i.rng.range(60,140)),breakout:!1}}function xa(i){return i.player.is("finisher","issen","gale")}function zc(i,t){if(xa(i))return!1;if(t.arch?.ai.ranged||t.brain?.token)return!0;const e=i.fighters.filter(a=>a!==t&&a.team==="enemy"&&a.targetable&&a.brain&&!a.arch.ai.ranged),n=e.some(a=>a.arch.isBoss)||t.arch?.isBoss?1:G.maxAttackers;return e.filter(a=>a.brain.token||a.is("attack")&&!a.act.move?.feint).length>=n?!1:(t.brain.token=!0,!0)}function Rh(i,t,e){if(e.feint||e.projectile)return!0;const n=i.lastEnemyContact;if(n.id!==t.id&&i.tick+e.startup-1-n.tick<G.attackSpacing)return!1;for(const s of i.fighters){if(s===t||s.team!=="enemy"||!s.alive||s.act.kind!=="attack")continue;const a=s.act.move;if(!a||a.feint||a.projectile)continue;const r=a.startup-s.act.t;if(Math.abs(e.startup-r)<G.attackSpacing)return!1}return!0}function Ha(i,t,e){return Rh(i,t,e)?(Ta(i,t,e),!0):!1}function g1(i){const t=i.player,e=i.fighters.filter(n=>n.team==="enemy"&&n.targetable&&n.brain);if(e.length!==0&&i.mode!=="standoff"){if(i.mode!=="combat"){for(const n of e)n.vel={x:0,z:0},n.is("free")&&i.faceToward(n,t.pos,n.arch.turnRate);return}v1(i,e),e.forEach((n,s)=>{n.brain.slot=s,_1(i,n)})}}function v1(i,t){const e=i.player,n=t.filter(l=>!l.arch.ai.ranged&&l.brain.aware),s=n.filter(l=>l.brain.token||l.is("attack")&&!l.act.move?.feint),a=n.find(l=>l.arch.isBoss),r=a?1:G.maxAttackers;if(a){!a.brain.token&&a.is("free")&&a.brain.cooldown<=0&&(a.brain.token=!0);return}if(s.length>=r||!e.alive)return;const o=n.filter(l=>!l.brain.token&&l.brain.cooldown<=0&&l.is("free","guard")).sort((l,c)=>l.distTo(e)-c.distTo(e));for(const l of o.slice(0,r-s.length))l.brain.token=!0}function _1(i,t){const e=t.brain,n=t.arch,s=i.player;if(e.cooldown>0&&e.cooldown--,e.rangedCooldown>0&&e.rangedCooldown--,t.vel={x:0,z:0},n.id==="dummy"){t.hp<t.maxHp*.5&&(t.hp=t.maxHp);return}const a=t.act,r=t.distTo(s),o=t.gapTo(s),l=n.speed*(n.isBoss&&t.phase===2?1.2:1);switch(a.kind){case"attack":{const x=a.move,m=x.startup+x.active+Math.floor(x.recovery*.35);if(a.t!==m)return;if(x.next?.slash)s.targetable&&o<Mn(x.next.slash).shape.range+.8&&i.rng.chance(n.ai.comboChance)&&!xa(i)&&Ha(i,t,Mn(x.next.slash))||(e.token=!1,e.cooldown=Math.round(i.rng.range(n.ai.cooldown[0],n.ai.cooldown[1])*(1.4-n.ai.aggression)));else if(x.feint&&e.token&&o<3&&!xa(i)){const f=$r(i,t,o,!0);f&&Ha(i,t,f)}return}case"guard":if(i.faceToward(t,s.pos,n.turnRate),t.vel=zt(Ea(t.yaw),e.strafeDir*l*.25),--e.guardTimer<=0)t.set("free",1/0);else if(e.counter&&(s.is("recoil")||s.attackPhase==="recovery")&&o<2.8&&zc(i,t)){e.counter=!1;const x=$r(i,t,o,!1);x&&Ha(i,t,x)}return;case"fear":{const x=je(ce(t.pos,s.pos));t.vel=zt(x,l*.55),i.faceToward(t,s.pos,n.turnRate);return}case"free":break;default:return}if(!s.targetable){i.faceToward(t,s.pos,n.turnRate*.5);return}if(i.faceToward(t,s.pos,n.turnRate),!e.aware){r>7.5&&(t.vel=zt(je(ce(s.pos,t.pos)),l*.35));return}if(e.breakout)return e.breakout=!1,x1(i,t,o);if(e.pendingGuard){e.pendingGuard=!1,t.set("guard",1/0),e.guardTimer=Math.round(i.rng.range(50,100));return}if(n.ai.guardChance>0&&(!e.token||n.isBoss)&&s.attackPhase==="startup"&&o<2.6&&i.rng.chance(n.ai.guardChance*.25)){t.set("guard",1/0,{value:n.isBoss&&i.rng.chance(.5)?1:0}),e.guardTimer=Math.round(i.rng.range(40,80));return}if(n.ai.ranged)return y1(i,t,o,l);const c=xa(i);if(e.token&&!c){if(e.counter){e.counter=!1;const m=$r(i,t,o,!1);if(m&&o<=m.shape.range+.2&&Ha(i,t,m))return}if(!e.plan){const m=$r(i,t,o,!1,!0);e.plan=m?.id??null}const x=e.plan?Mn(e.plan):null;if(x?.projectile){const m=n.moves.find(f=>f.move===x.id);if(e.plan=null,o>=m.minRange-.5&&o<=m.maxRange)return Ta(i,t,x)}else if(x){const m=(x.shape.kind==="line",x.shape.range),f=Math.max(.3,m*.8+(x.lunge>2?x.lunge*.6:0));if(o<=f){Ha(i,t,x)&&(e.plan=null);return}t.vel=zt(je(ce(s.pos,t.pos)),l);return}}const h=n.ai.preferredRange+1.6+e.slot%3*.7,d=je(ce(s.pos,t.pos)),u=zt(Ea(t.yaw),e.strafeDir);let p=0;r<h-.5?p=-1:r>h+.5&&(p=1);const g=Qe(zt(d,p),zt(u,.6));t.vel=zt(je(g),l*(p===1&&r>h+3?.9:.45));for(const x of i.fighters){if(x===t||x.team!=="enemy"||!x.targetable)continue;const m=ce(t.pos,x.pos),f=Nn(m);f<1.8&&f>.001&&(t.vel=Qe(t.vel,zt(m,(1.8-f)/f*1.2)))}--e.strafeTimer<=0&&(e.strafeTimer=Math.round(i.rng.range(80,200)),e.strafeDir=e.strafeDir===1?-1:1)}function x1(i,t,e){const n=t.brain,s=i.player;switch(t.arch.ai.breakout){case"parry":t.set("guard",1/0,{value:1}),n.guardTimer=50,n.counter=!0,i.emit({type:"text",text:"튕기기 자세",sub:"강공격·방패 치기로 깨라",style:"warn",id:t.id});return;case"backstep":{const a=je(ce(t.pos,s.pos));t.set("evade",20,{from:{...t.pos},to:Qe(t.pos,zt(a,2.2)),travel:12,side:1}),n.counter=zc(i,t);return}case"bash":e<4.5&&Rh(i,t,Mn("sh_charge"))&&zc(i,t)&&Ta(i,t,Mn("sh_charge"));return;default:return}}function y1(i,t,e,n){const s=t.brain,a=i.player,r=t.arch,o=je(ce(a.pos,t.pos));if(e<2&&s.cooldown<=0&&!xa(i)&&Rh(i,t,Mn("ac_knife")))return s.cooldown=Math.round(i.rng.range(r.ai.cooldown[0],r.ai.cooldown[1])),Ta(i,t,Mn("ac_knife"));if(e<6){t.vel=zt(o,-n*.8);return}const l=i.fighters.filter(c=>c.team==="enemy"&&c.targetable&&c.is("attack")&&c.act.move?.projectile==="arrow").length;if(s.rangedCooldown<=0&&l<G.maxShooters&&!xa(i))return s.rangedCooldown=Math.round(i.rng.range(r.ai.cooldown[0],r.ai.cooldown[1])),Ta(i,t,Mn("ac_shot"));e>r.ai.preferredRange+4?t.vel=zt(o,n*.6):t.vel=zt(Ea(t.yaw),s.strafeDir*n*.3),--s.strafeTimer<=0&&(s.strafeTimer=Math.round(i.rng.range(90,200)),s.strafeDir=s.strafeDir===1?-1:1)}function $r(i,t,e,n,s=!1){const a=t.arch,r=a.moves.filter(l=>{const c=Mn(l.move);return c.projectile&&l.move==="ac_shot"||n&&c.feint||c.feint&&!i.rng.chance(a.ai.feintChance*4)?!1:s?e>=l.minRange-.5:e>=l.minRange-.5&&e<=l.maxRange+.5});if(r.length===0)return null;const o=r.map(l=>l.weight*(e>=l.minRange&&e<=l.maxRange?2:1));return Mn(r[i.rng.weighted(o)].move)}function Ta(i,t,e){const n=i.player,s=t.brain,a=t.arch;t.yaw=Si(t.yaw,t.yawTo(n.pos),.6);const r=t.gapTo(n),o=Math.max(0,Math.min(e.lunge,r-e.shape.range*.55+.3));t.set("attack",e.startup+e.active+e.recovery,{move:e,hit:new Set,targetId:n.id,lunge:o}),!e.next?.slash&&!e.feint&&(s.token=!1,s.cooldown=Math.round(i.rng.range(a.ai.cooldown[0],a.ai.cooldown[1])*(1.4-a.ai.aggression)))}const Rl=18;class M1{phase="done";leaderId=-1;t=0;strikeAt=0;feints=[];held=!1;everHeld=!1;kills=0;struck=new Set;impact=Rl;get active(){return this.phase!=="done"}begin(t){const e=t.player,n=t.liveEnemies().filter(a=>!a.arch?.ai.ranged);if(n.length===0||!e.free)return!1;n.sort((a,r)=>a.distTo(e)-r.distTo(e));const s=n[0];this.leaderId=s.id,this.phase="approach",this.t=0,this.kills=0,this.struck.clear(),this.held=!1,this.everHeld=!1,t.mode="standoff",t.waves&&(t.waves.standoffAvailable=!1),e.set("standoff",1/0),e.yaw=e.yawTo(s.pos);for(const a of t.liveEnemies())a.set("free",1/0),a.vel={x:0,z:0};return t.emit({type:"standoff",phase:"begin",id:s.id}),t.emit({type:"text",text:"대치",sub:"베기를 누른 채 기다려라 — 달려드는 순간 떼라",style:"info",id:e.id}),!0}update(t,e){const n=t.player,s=t.get(this.leaderId);if(this.t++,n.vel={x:0,z:0},(!s||!s.alive)&&this.phase!=="between")return this.end(t);switch(e.held.slash&&(this.held=!0,this.everHeld=!0),this.phase){case"approach":{const a=s,r=ce(n.pos,a.pos),o=Math.hypot(r.x,r.z);if(n.yaw=n.yawTo(a.pos),a.yaw=a.yawTo(n.pos),o>6.5?a.vel=zt(je(r),4.2):a.vel={x:0,z:0},a.act={kind:"free",t:0,dur:1/0},o<=6.6||this.t>90){a.vel={x:0,z:0},this.phase="tension",this.t=0,this.strikeAt=Math.round(t.rng.range(110,260)),this.feints=[];const l=t.rng.chance(.4)?2:t.rng.chance(.7)?1:0;for(let c=0;c<l;c++)this.feints.push(Math.round(t.rng.range(45,this.strikeAt-30)))}return}case"tension":{const a=s;if(a.vel={x:0,z:0},this.feints.includes(this.t)&&(a.set("standoff",22,{value:2}),t.emit({type:"standoff",phase:"feint",id:a.id})),e.released.slash&&this.everHeld)return this.fail(t,a,"성급했다");if(this.t>=this.strikeAt){if(!this.held||!e.held.slash)return this.fail(t,a,"베기를 누르고 있어야 한다");this.charge(t,a)}return}case"strike":{const a=s;return(this.kills===0?e.released.slash:e.pressed.slash)?this.t>=this.impact-t.win(G.standoffStrikeWindow)&&this.t<=this.impact+2?this.win(t,a):this.fail(t,a,"너무 일렀다"):this.t>this.impact+2?this.fail(t,a,"늦었다"):void 0}case"punish":{this.t>=this.impact&&s&&(this.end(t),Th(t,s,n,G.standoffFailDamage,!0));return}case"between":{if(this.t<46)return;if(this.kills>=G.standoffChainMax)return this.end(t);const a=t.liveEnemies().filter(r=>!r.arch?.ai.ranged&&!r.arch?.isBoss&&!this.struck.has(r.id)&&r.distTo(n)<14).sort((r,o)=>r.distTo(n)-o.distTo(n))[0];if(!a)return this.end(t);this.leaderId=a.id,n.yaw=n.yawTo(a.pos),this.charge(t,a);return}default:return}}charge(t,e,n="strike"){const s=t.player,a=je(ce(s.pos,e.pos)),r=ce(s.pos,zt(a,1.5));e.yaw=e.yawTo(s.pos),e.set("standoff",Rl+30,{value:1,from:{...e.pos},to:r,travel:Rl}),e.glint={color:"blue",t:0},this.phase=n,this.t=0,n==="strike"&&t.emit({type:"standoff",phase:"strike",id:e.id})}win(t,e){const n=t.player;Wo(t,n,e,!1,!0),this.kills++,this.struck.add(e.id),e.arch?.isBoss&&(this.kills=G.standoffChainMax),this.phase="between",this.t=0,t.emit({type:"standoff",phase:"win",id:e.id})}fail(t,e,n){if(t.emit({type:"standoff",phase:"fail",id:e.id}),t.emit({type:"text",text:"대치 실패",sub:n,style:"bad",id:t.player.id}),this.phase==="strike"){this.phase="punish";return}this.charge(t,e,"punish")}end(t){this.phase="done",t.mode==="standoff"&&(t.mode="combat");const e=t.player;e.is("standoff")&&e.set("free",1/0);for(const n of t.liveEnemies())n.is("standoff")&&n.set("free",1/0),n.brain&&(n.brain.aware=!0,n.brain.cooldown=Math.min(n.brain.cooldown,40));t.waves?.engage(t)}}class Gd{tick=0;fighters=[];projectiles=[];player;ps;buffer=new Px;rng;settings={windowScale:1,invincible:!1,enemyDamage:1};lastEnemyContact={tick:-9999,id:-1};stats={deflects:0,flows:0,issens:0,maxIssenChain:0,finishers:0,headshots:0,kills:0,perfectDodges:0,effectiveHits:0,badHits:0,standoffKills:0,damageTaken:0,time:0};mode="combat";waves=null;standoff;hitstop=0;alpha=0;timeScale=1;input=_h();events=[];eventTicks=[];freezeA0=0;freezeT=0;slowmos=[];acc=0;pending={pressed:{},released:{}};nextId=1;nextProjectileId=1;seen=new Set;constructor(t=20260929){this.rng=new Rx(t),this.player=new Hd(this.nextId++,"player",null,{x:0,z:0},0,100,G.playerMaxPosture,.4),this.fighters.push(this.player),this.ps={resolve:1,arrows:{...G.maxArrows},arrowType:"standard",guardStartTick:-9999,prevGuardStartTick:-9999,attackPressTick:-9999,prevAttackPressTick:-9999,dodgePressTick:-9999,lastDodgeEnd:-9999,dodgeCounterUntil:-1,riposteTarget:-1,riposteUntil:-1,hajikiTarget:-1,hajikiUntil:-1,flowTarget:-1,flowUntil:-1,issenChain:0,issenChainUntil:-1,draw:0,focusing:!1,dodgeAimSlowmo:0,lockTarget:null,softTarget:null,finisherTarget:null,finisherKindHint:null,galeTargets:[],combo:0,comboTimer:0,perfectDodgeTick:-1,lastPerfectDodgeTick:-9999,lastDeflectTick:-9999,struckTick:-9999,guardHeat:0,guardHeatTick:0,guardMashed:!1},this.standoff=new M1}spawn(t,e,n){const s=kc[t],a=new Hd(this.nextId++,"enemy",s,e,n??this.player.yawTo(e)+Math.PI,s.hp,s.posture,s.radius);return a.yaw=n??Math.atan2(this.player.pos.x-e.x,this.player.pos.z-e.z),a.prevYaw=a.yaw,a.size=t==="armored"?1.1:t==="boss"?1.12:t==="duelist"?.96:1,a.brain=m1(this,a),this.fighters.push(a),a}get(t){if(!(t==null||t<0))return this.fighters.find(e=>e.id===t)}enemies(){return this.fighters.filter(t=>t.team==="enemy")}liveEnemies(){return this.fighters.filter(t=>t.team==="enemy"&&t.alive)}removeCorpses(){for(let t=this.fighters.length-1;t>=0;t--){const e=this.fighters[t];e.team==="enemy"&&!e.alive&&this.fighters.splice(t,1)}for(let t=this.projectiles.length-1;t>=0;t--)this.projectiles[t].stuckTo!==void 0&&this.projectiles.splice(t,1)}newProjectileId(){return this.nextProjectileId++}emit(t){this.events.push(t),this.eventTicks.push(this.tick)}drainEvents(){const t=this.events;return this.events=[],this.eventTicks=[],t}drainTimedEvents(){const t=this.events.map((e,n)=>({ev:e,tick:this.eventTicks[n]}));return this.events=[],this.eventTicks=[],t}get displayTick(){return this.tick-1+this.alpha}slowmo(t,e){this.slowmos.push({scale:t,left:e})}freeze(t){this.hitstop=Math.max(this.hitstop,t)}win(t){return Math.round(t*this.settings.windowScale)}update(t,e){t=Math.min(t,.1);for(const a in e.pressed)e.pressed[a]&&(this.pending.pressed[a]=!0);for(const a in e.released)e.released[a]&&(this.pending.released[a]=!0);let n=1;for(const a of this.slowmos)a.left-=t,n=Math.min(n,a.scale);this.slowmos=this.slowmos.filter(a=>a.left>0),this.ps.focusing&&(n=Math.min(n,G.focusScale),this.ps.resolve=Math.max(0,this.ps.resolve-G.focusDrainPerSec*t),this.ps.resolve<=0&&(this.ps.focusing=!1)),this.ps.dodgeAimSlowmo>0&&this.player.act.kind==="aim"&&(n=Math.min(n,.4),this.ps.dodgeAimSlowmo-=t),this.timeScale=n,this.stats.time+=t,this.acc+=t*n,this.hitstop>0&&(this.freezeT+=t*n);let s=0;for(;this.acc>=Rn&&s<8;){this.acc-=Rn;const a=this.hitstop>0,r={...e,pressed:s===0?this.pending.pressed:{},released:s===0?this.pending.released:{}};this.step(r),s===0&&(this.pending={pressed:{},released:{}}),s++,!a&&this.hitstop>0?(this.freezeA0=Math.min(1,this.acc/Rn),this.freezeT=0,this.acc-=Rn):a&&this.hitstop===0&&(this.acc+=Rn)}return s===8&&(this.acc=0),this.alpha=this.hitstop>0?Math.min(1,this.freezeA0+this.freezeT/Rn):Math.min(1,Math.max(0,this.acc/Rn)),s}get simClock(){return(this.tick+this.alpha)*Rn}step(t){if(this.input=t,this.buffer.record(t,this.tick),jx(this,t),this.hitstop>0){this.hitstop--;return}this.tick++;for(const e of this.fighters)e.prevPos={...e.pos},e.prevYaw=e.yaw;this.mode==="standoff"?this.standoff.update(this,t):d1(this,t),g1(this);for(const e of this.fighters)this.stepFighter(e);for(const e of this.fighters)e.alive&&(e.act.kind==="attack"?$x(this,e):e.act.kind==="gale"&&h1(this,e));Hx(this),this.separate(),this.waves?.update(this),this.ps.comboTimer>0&&--this.ps.comboTimer===0&&(this.ps.combo=0)}stepFighter(t){if(t.age++,t.hitFlash>0&&t.hitFlash--,t.glint&&++t.glint.t>36&&(t.glint=null),t.shieldOpen>0&&t.shieldOpen--,!t.alive){t.deadTicks++,t.act.kind==="finished"&&(t.act.t++,t.act.t>=t.act.dur&&t.set("dead",1/0)),t.kb=zt(t.kb,.85),t.pos=Qe(t.pos,zt(t.kb,Rn));return}if(t.burning>0&&!t.is("finished")&&(t.burning--,t.burning%20===0&&(t.hp-=G.burnDps/3,t.hitFlash=4,t.hp<=0))){t.hp=0,t.set("dead",1/0),t.deathKind="burn",Ds(this,t,"burn");return}t.regenPosture();const e=t.act;e.t++;let n={x:0,z:0};switch(e.kind){case"free":case"guard":case"aim":case"heal":n=zt(t.vel,Rn);break;case"fear":n=zt(t.vel,Rn);break;default:n=qx(this,t)}const s=zt(t.kb,Rn);t.kb=zt(t.kb,.84),Nn(t.kb)<.05&&(t.kb={x:0,z:0});const a=Qe(n,s);t.pos=Qe(t.pos,a),t.speed=Nn(a)/Rn,e.t>=e.dur&&this.endAction(t)}endAction(t){const e=t.act.kind;if(e==="broken"&&(t.posture=t.maxPosture*.4),e==="dodge"&&(this.ps.lastDodgeEnd=this.tick),e==="finished"){if(t.hp<=0){t.set("dead",1/0);return}t.set("stagger",30);return}if(e==="heal"&&t.isPlayer){const n=t.maxHp*G.healFrac;t.hp=Math.min(t.maxHp,t.hp+n),this.ps.resolve=Math.max(0,this.ps.resolve-G.healCost),this.emit({type:"heal",id:t.id,amount:n})}if(t.set("free",1/0),t.isPlayer){if(this.input.held.aim)t.set("aim",1/0);else if(this.input.held.guard){const n=this.buffer.pressTick.get("guard")??-9999,s=this.buffer.consume("guard",this.tick,G.inputBuffer);t.set("guard",1/0),this.ps.prevGuardStartTick=this.ps.guardStartTick,this.ps.guardStartTick=s?n:-9999}}}separate(){const t=this.fighters.filter(e=>e.alive&&!e.is("finished","finisher","issen","flow","gale"));for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],a=t[n],r=ps(s.pos,a.pos),o=s.radius+a.radius;if(r<o&&r>1e-4){const l=zt(je(ce(a.pos,s.pos)),(o-r)*.5),c=s.isPlayer&&s.is("dodge")?.2:1,h=a.isPlayer&&a.is("dodge")?.2:1;s.pos=ce(s.pos,zt(l,c)),a.pos=Qe(a.pos,zt(l,h))}}for(const e of this.fighters){const n=Nn(e.pos);n>G.arenaRadius&&(e.pos=zt(e.pos,G.arenaRadius/n))}}faceToward(t,e,n){t.yaw=Si(t.yaw,t.yawTo(e),n)}pushBack(t,e,n){const s=je(e);t.kb=Qe(t.kb,zt(s,n*9))}ahead(t,e){return Qe(t.pos,zt(vh(t.yaw),e))}gainResolve(t){const e=this.ps.resolve;this.ps.resolve=gh(this.ps.resolve+t,0,G.resolveMax),this.ps.resolve!==e&&this.emit({type:"resolve",amount:t,total:this.ps.resolve})}}const b1=[{title:"一 · 첫 대면",subtitle:"낭인 검사 — 링이 닿을 때 방패: 튕기기를 익혀라",spawns:[["ronin",2]],standoff:!0},{title:"二 · 방패의 벽",subtitle:"방패 무사 — 베기는 튕겨난다. 찔러라",spawns:[["shield",2],["ronin",1]],standoff:!0},{title:"三 · 창과 그림자",subtitle:"창병은 베고, 시노비는 넓게 베어라",spawns:[["spear",2],["duelist",1]],standoff:!0},{title:"四 · 철갑과 활",subtitle:"갑주는 찌르고, 궁수는 활로",spawns:[["armored",1],["archer",2],["ronin",1]],standoff:!0},{title:"五 · 결투",subtitle:"철갑 대장 카게토라",spawns:[["boss",1]],standoff:!0}];class S1{constructor(t=b1){this.waves=t}waves;index=-1;state="intro";timer=0;standoffAvailable=!1;get current(){return this.waves[this.index]??null}start(t){this.next(t)}update(t){if(!(t.mode==="standoff"||t.mode==="defeat"||t.mode==="victory"))switch(this.timer++,this.state){case"intro":this.timer>=100&&this.spawnWave(t);break;case"approach":{const e=t.liveEnemies(),n=e.some(a=>a.distTo(t.player)<5.5),s=e.some(a=>a.hp<a.maxHp||!a.is("free"));(this.timer>=330||n||s||t.player.is("aim","attack","quickshot"))&&this.engage(t);break}case"fight":if(t.liveEnemies().length===0){this.state="clear",this.timer=0;const e=t.ps.arrows;e.standard=Math.min(G.maxArrows.standard,e.standard+8),e.heavy=Math.min(G.maxArrows.heavy,e.heavy+2),e.fire=Math.min(G.maxArrows.fire,e.fire+1),t.player.hp=Math.min(t.player.maxHp,t.player.hp+t.player.maxHp*.25),t.emit({type:"waveClear",index:this.index})}break;case"clear":this.timer>=210&&this.next(t);break}}engage(t){this.standoffAvailable=!1,this.state="fight",this.timer=0;for(const e of t.liveEnemies())e.brain&&(e.brain.aware=!0)}next(t){if(this.index++,t.removeCorpses(),this.index>=this.waves.length){this.state="done",t.mode="victory",t.emit({type:"victory"});return}this.state="intro",this.timer=0;const e=this.waves[this.index];t.emit({type:"wave",index:this.index,title:e.title,subtitle:e.subtitle})}spawnWave(t){const e=this.waves[this.index],n=t.player,s=Nn(n.pos)>3?Math.atan2(-n.pos.x,-n.pos.z):n.yaw,a=[];for(const[r,o]of e.spawns)for(let l=0;l<o;l++)a.push(r);a.forEach((r,o)=>{const l=(o-(a.length-1)/2)*.42,c=r==="archer"?17:12.5;let h=Qe(n.pos,zt(vh(s+l),c));const d=Nn(h);d>G.arenaRadius-2&&(h=zt(h,(G.arenaRadius-2)/d));const u=t.spawn(r,h);u.brain&&(u.brain.aware=!1,u.brain.cooldown=Math.round(gh(u.brain.cooldown,20,90))),t.seen.has(r)||(t.seen.add(r),t.emit({type:"text",text:kc[r].name,sub:kc[r].tip,style:"info",id:u.id}))}),this.state=e.standoff?"approach":"fight",this.standoffAvailable=e.standoff,this.timer=0,e.standoff||this.engage(t)}}const Wt={zenith:2038600,skyUpper:6178181,horizon:15639164,sunGlow:16760426,sunDisk:16774098,cloudDark:7228536,cloudLit:16757374,sunLight:16757356,hemiSky:14858670,hemiGround:3815964,ambient:7301296,groundA:8027188,groundB:11048774,groundDark:5660970,dirt:11047014,field:12098642,litter:9053206,grassRoot:3424794,grassMid:7502383,grassTip:13807966,pampasRoot:5000220,pampasMid:10521150,pampasTip:14202476,plume:13940872,trunk:3877668,stone:9275260,toriiRed:11875358,toriiBlack:1840660,lanternGlow:16757854,mote:16754768,maple:[10886683,12726815,14242858,9050144,14711342,12068892]},Cl=ah.degToRad(15),Pl=ah.degToRad(-38),Wd=3.1,ki=-.42,Ll=Math.PI+.33,Va=18,qe=Math.PI*2;function Yd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Zn=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Ja(i,t){let e=Math.imul(i|0,374761393)^Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Xd(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,a=t-n,r=s*s*(3-2*s),o=a*a*(3-2*a),l=Ja(e,n),c=Ja(e+1,n),h=Ja(e,n+1),d=Ja(e+1,n+1);return l+(c-l)*r+(h-l)*o+(l-c-h+d)*r*o}const Hc=`
float wog_hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float wog_noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wog_hash(i), wog_hash(i + vec2(1.0, 0.0)), u.x), mix(wog_hash(i + vec2(0.0, 1.0)), wog_hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float wog_fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * wog_noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
`;class Zr{constructor(t){this.rng=t}rng;pos=[];nrm=[];col=[];p=new A;c=new kt;add(t,e,n,s=.1,a){const r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(e);const o=r.getAttribute("position"),l=r.getAttribute("normal"),c=new kt(n);for(let h=0;h<o.count;h++){h%3===0&&this.c.copy(c).multiplyScalar(1+(this.rng()-.5)*s),this.p.fromBufferAttribute(o,h);const d=a?a(this.p):1;this.pos.push(this.p.x,this.p.y,this.p.z),this.nrm.push(l.getX(h),l.getY(h),l.getZ(h)),this.col.push(this.c.r*d,this.c.g*d,this.c.b*d)}r.dispose(),t.dispose()}build(){const t=new Ne;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("normal",new se(this.nrm,3)),t.setAttribute("color",new se(this.col,3)),t.computeBoundingSphere(),t}}const vr=new dn,ar=new A,Vc=new A,rr=new A(0,1,0);function ys(i,t,e,n=0,s=1,a=1,r=1){return vr.setFromAxisAngle(rr,n),new ae().compose(new A(i,t,e),vr,ar.set(s,a,r))}function Dl(i,t,e,n,s,a,r=7){const o=Vc.subVectors(e,t),l=o.length(),c=new ci(s,n,l,r,1,!0);vr.setFromUnitVectors(rr,o.normalize()),i.add(c,new ae().compose(t.clone().lerp(e,.5),vr,ar.set(1,1,1)),a,.12)}function qd(i,t,e){const n=i.getAttribute("position");for(let s=0;s<n.count;s++){const a=n.getX(s),r=n.getY(s),o=n.getZ(s),c=1+(Ja(Math.round(a*97+r*13)+e,Math.round(o*97-r*31))-.5)*t;n.setXYZ(s,a*c,r*c,o*c)}return i.computeVertexNormals(),i}function Qa(i,t,e,n,s,a){const r=i.pos.length/3;for(let o=0;o<=t;o++){const l=o/t,c=e(l),h=e(Math.min(1,l+.01)).sub(e(Math.max(0,l-.01))).normalize(),d=s(h).normalize(),u=new A().crossVectors(d,h).normalize(),p=n(l)*.5;if(i.pos.push(c.x-d.x*p,c.y-d.y*p,c.z-d.z*p,c.x+d.x*p,c.y+d.y*p,c.z+d.z*p),i.nrm.push(u.x,u.y,u.z,u.x,u.y,u.z),i.uv.push(0,l,1,l),i.part.push(a(l),a(l)),o<t){const g=r+o*2;i.idx.push(g,g+1,g+3,g,g+3,g+2)}}}function Pf(i){const t=new Ne;return t.setAttribute("position",new se(i.pos,3)),t.setAttribute("normal",new se(i.nrm,3)),t.setAttribute("uv",new se(i.uv,2)),t.setAttribute("aPart",new se(i.part,1)),t.setIndex(i.idx),t}const Lf=()=>({pos:[],nrm:[],uv:[],part:[],idx:[]}),vn=(i,t,e)=>new A(i,t,e);function w1(i){const t=Lf();return[1,.78,.62].forEach((n,s)=>{const a=s*(qe/3)+.4*s,r=Math.cos(a),o=Math.sin(a),l=(c,h,d)=>vn(c*r+(d+.05)*o,h,-c*o+(d+.05)*r);Qa(t,i,c=>l(0,c*n,(.12+.1*s)*c*c*n),c=>.13*(.8+.2*n)*Math.pow(1-c,.75),()=>vn(r,0,-o),()=>0)}),Pf(t)}function E1(i){const t=Lf(),e=3;Qa(t,e,o=>vn(.015*o*o,.8*o,0),o=>.02*(1-.4*o),()=>vn(1,0,0),()=>0);const n=o=>vn(.015+.14*o*o,.73+.27*o-.06*o*o*o,0),s=o=>.085*Math.pow(Math.sin(Math.PI*Math.min(1,.1+o*.9)),.7)+.004,a=o=>.7+.3*Math.min(1,o*3);Qa(t,e+1,n,s,()=>vn(0,0,1),a),i&&Qa(t,e+1,n,o=>s(o)*.8,o=>new A().crossVectors(o,vn(0,0,1)),a);const r=i?3:1;for(let o=0;o<r;o++){const l=.9+o*2.1,c=vn(Math.cos(l),0,Math.sin(l));Qa(t,e,h=>c.clone().multiplyScalar(.34*Math.pow(h,1.5)).add(vn(0,.6*h-.2*h*h*h,0)),h=>.045*Math.pow(1-h,.7),()=>vn(c.z,0,-c.x),()=>0)}return Pf(t)}const T1=`
uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;
uniform vec3 uBenders[8]; uniform int uBenderCount;
uniform vec4 uWave; uniform float uWaveAmp;
uniform vec3 uSunDir; uniform vec3 uFocus; uniform float uStiff;
attribute float aPart;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
${Hc}
`,A1=`
  vec3 gRoot = instanceMatrix[3].xyz;
  float h = clamp(position.y, 0.0, 1.0);
  vec3 gPos = (instanceMatrix * vec4(position, 1.0)).xyz;
  vec2 wp = gRoot.xz;
  float rnd = wog_hash(wp * 1.37 + 11.0);

  // Layered wind: rolling gust patches travel downwind, a long wave ripples the field, blades flutter.
  float patchN = wog_noise(wp * 0.05 - uWind * uTime * 0.45);
  float wave = sin(dot(wp, uWind) * 0.25 - uTime * 1.7 + patchN * 2.5);
  float sway = uWindAmp * (0.25 + 1.1 * patchN * patchN) * (0.8 + 0.35 * wave) * (1.0 + uGust * 2.4);
  float flutter = sin(uTime * (2.6 + rnd * 2.4) + rnd * 6.2831 + h * 1.7) * (0.12 + 0.3 * uGust);
  vec2 bend = uWind * (sway + flutter * 0.4) + vec2(-uWind.y, uWind.x) * flutter * 0.35;

  // Expanding shock ring from gust() (issen / finisher).
  vec2 fromO = wp - uWave.xz; float dO = length(fromO) + 1e-3;
  bend += fromO / dO * exp(-pow((dO - uWave.w * 14.0) * 0.4, 2.0)) * uWaveAmp * 1.6;

  // Fighters push the grass aside.
  float heightK = 1.0;
  for (int i = 0; i < 8; i++) {
    if (i >= uBenderCount) break;
    vec2 d = wp - uBenders[i].xz; float dist = length(d) + 1e-3;
    bend += d / dist * (1.0 - smoothstep(0.2, 1.05, dist)) * 2.4;
  }
#ifdef TALL
  // Keep the camera -> player sight line clear of tall pampas (camera may sit inside the field).
  vec2 cam = cameraPosition.xz; vec2 seg = uFocus.xz - cam;
  float st = clamp(dot(wp - cam, seg) / max(dot(seg, seg), 1e-3), 0.0, 1.0);
  vec2 away = wp - (cam + seg * st); float ad = length(away) + 1e-3;
  float clearK = 1.0 - smoothstep(0.9, 2.6, ad);
  bend += away / ad * clearK * 2.5;
  heightK = 1.0 - 0.55 * clearK;
#endif

  // Bend = rotate each vertex about the root; angle grows toward the tip (stiff base, no stretching).
  float bendLen = length(bend);
  float ang = min(bendLen * uStiff, 1.35);
  vec2 bdir = bend / max(bendLen, 1e-4);
  float a = ang * (0.3 * h + 0.7 * h * h);
  vec3 rel = gPos - gRoot; rel.y *= heightK;
  rel.xz += bdir * rel.y * sin(a);
  rel.y *= cos(a);
  gPos = gRoot + rel;

  // Thin blades transmit light: face every blade toward the sun, bias up so the field shades evenly.
  vec3 bn = normalize(mat3(instanceMatrix) * normal);
  bn *= dot(bn, uSunDir) < 0.0 ? -1.0 : 1.0;
  vec3 objectNormal = normalize(mix(bn, vec3(0.0, 1.0, 0.0), 0.35 + 0.3 * aPart) + vec3(bdir.x, 0.0, bdir.y) * ang * 0.4);
  vH = h; vPart = aPart; vGWorld = gPos; vGUv = uv;
`,R1=`
uniform vec3 uRoot; uniform vec3 uMid; uniform vec3 uTip; uniform vec3 uPlume;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uSss;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
`;function Kd(i,t,e){const n=new ha({side:hn});return i==="tall"&&(n.defines={TALL:""}),n.onBeforeCompile=s=>{Object.assign(s.uniforms,t,e),s.vertexShader=T1+s.vertexShader.replace("#include <beginnormal_vertex>",A1).replace("#include <defaultnormal_vertex>","vec3 transformedNormal = normalMatrix * objectNormal;").replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
gl_Position = projectionMatrix * mvPosition;`).replace("#include <worldpos_vertex>","vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);"),s.fragmentShader=R1+s.fragmentShader.replace("#include <color_fragment>",`
        vec3 gCol = mix(uRoot, uMid, smoothstep(0.0, 0.5, vH));
        gCol = mix(gCol, uTip, smoothstep(0.45, 1.0, vH)) * vColor.rgb;
        float across = abs(vGUv.x - 0.5) * 2.0;
        diffuseColor.rgb = mix(gCol, uPlume * (0.8 + 0.25 * vColor.rgb) * mix(0.85, 1.1, across), vPart);
        if (vPart > 0.5) {
          // Feathery plume: slanted barbs cut into the ribbon edge up close (faded out at range to avoid sparkle).
          float fk = 1.0 - smoothstep(7.0, 16.0, length(vGWorld - cameraPosition));
          float barb = fract(vGUv.y * 22.0 - across * 1.7);
          if (across > 0.3 && barb > mix(1.01, 0.5, fk)) discard;
        }`).replace("#include <normal_fragment_begin>",`float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
vec3 normal = normalize(vNormal);`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        float back = pow(clamp(dot(normalize(vGWorld - cameraPosition), uSunDir), 0.0, 1.0), 5.0);
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * back * (0.55 * vH + 1.1 * vPart) * uSss;`)},n.customProgramCacheKey=()=>"wog-grass-"+i,n}function $d(i,t,e){const n=e.arenaRadius,s=e.quality==="high",a=Yd(8016323),r=new Un;r.name="Environment",i.add(r);const o=[],l=J=>(o.push(J),J),c=J=>new kt(J);t.shadowMap.enabled=!0,t.shadowMap.type=er,t.toneMapping=Kc,t.toneMappingExposure=1.12,t.outputColorSpace=cn;const h=new oh(Wt.horizon,45,340);i.fog=h;const d=c(Wt.horizon);i.background=d;const u=new A(Math.sin(Pl)*Math.cos(Cl),Math.sin(Cl),Math.cos(Pl)*Math.cos(Cl)),p=new Nt(Math.cos(Ll),Math.sin(Ll)),g={uTime:{value:0},uWind:{value:p.clone()},uWindAmp:{value:.6},uGust:{value:0},uBenders:{value:Array.from({length:8},()=>new A(1e4,0,1e4))},uBenderCount:{value:0},uWave:{value:new ke(0,0,0,100)},uWaveAmp:{value:0},uSunDir:{value:u.clone()},uSunCol:{value:c(Wt.sunLight).multiplyScalar(Wd)},uFocus:{value:new A}},x=new Nt(Math.sin(ki),Math.cos(ki)),m=n+.8,f=J=>Math.sin(J*Math.PI/m)*1.2,b=(J,dt)=>({u:J*x.x+dt*x.y,v:-J*x.y+dt*x.x}),R=(J,dt)=>new A(J*x.x-dt*x.y,0,J*x.y+dt*x.x);function y(J,dt){const{u:At,v:Vt}=b(J,dt),Ot=At>m,Ht=Ot?1.05:.75,Ut=Zn(-2,2,At)*(1-Zn(m+40,m+60,At)),ye=(1-Zn(Ht*.6,Ht*1.4,Math.abs(Vt-f(At))))*Ut;return Math.max(ye*(Ot?1:.45),(1-Zn(2,3.6,Math.hypot(J,dt)))*.4)}const T=[],w=(J,dt,At=0)=>T.some(Vt=>(J-Vt.x)**2+(dt-Vt.z)**2<(Vt.r+At)**2),E=(J,dt)=>{const At=Zn(n+12,n+60,Math.hypot(J,dt));return At<=0?0:At*(1.4+Math.sin(J*.045+1.3)*Math.cos(dt*.038-.7)*1.6+Math.sin(J*.021-dt*.027+2.1)*2)},v=l(new un({side:xn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:c(Wt.zenith)},uUpper:{value:c(Wt.skyUpper)},uHorizon:{value:c(Wt.horizon)},uGlow:{value:c(Wt.sunGlow)},uSunCol:{value:c(Wt.sunDisk)},uSunDir:{value:u},uCloudDark:{value:c(Wt.cloudDark)},uCloudLit:{value:c(Wt.cloudLit)},uTime:g.uTime},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;                      // pinned to the far plane, follows camera rotation only
      }`,fragmentShader:`
      uniform vec3 uZenith, uUpper, uHorizon, uGlow, uSunCol, uSunDir, uCloudDark, uCloudLit;
      uniform float uTime;
      varying vec3 vDir;
      ${Hc}
      void main() {
        vec3 d = normalize(vDir);
        float h = max(d.y, 0.0);
        vec3 col = mix(uHorizon, uUpper, smoothstep(0.0, 0.42, pow(h, 0.75)));
        col = mix(col, uZenith, smoothstep(0.3, 1.0, h));
        float mu = dot(d, uSunDir);
        float az = max(dot(normalize(d.xz + 1e-5), normalize(uSunDir.xz)), 0.0);
        col = mix(col, uGlow, pow(az, 4.0) * exp(-h * 5.0) * 0.8);            // golden band hugging the horizon
        // Wispy stratus streaks, lit gold toward the sun and dusky purple away from it.
        vec2 cuv = d.xz / (d.y + 0.12);
        float c = wog_fbm(cuv * vec2(0.7, 2.6) + vec2(uTime * 0.004, 0.0));
        float cm = smoothstep(0.52, 0.78, c) * smoothstep(0.03, 0.12, d.y) * (1.0 - smoothstep(0.28, 0.55, d.y));
        vec3 cloud = mix(uCloudDark, uCloudLit, pow(max(mu, 0.0), 3.0) * 0.9 + 0.1 * az);
        col = mix(col, cloud, cm * 0.65);
        float s = max(mu, 0.0);
        col += uSunCol * (pow(s, 10.0) * 0.35 + pow(s, 80.0) * 0.6 + smoothstep(0.9993, 0.99965, mu) * 3.0);
        col = mix(col, uHorizon, smoothstep(0.0, -0.03, d.y));                // below horizon = fog colour
        col = col / (1.0 + max(col - 1.0, 0.0));                             // soft clip only above 1
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
        gl_FragColor.rgb += (wog_hash(gl_FragCoord.xy) - 0.5) / 255.0;        // dither away banding
      }`})),S=new Ue(l(new ko(100,48,24)),v);S.frustumCulled=!1,S.renderOrder=1e6,r.add(S);const C=new b0(Wt.sunLight,Wd);C.castShadow=!0;const k=s?2048:1024;C.shadow.mapSize.set(k,k);const D=C.shadow.camera;D.left=-Va,D.right=Va,D.top=Va,D.bottom=-Va,D.near=1,D.far=160,D.updateProjectionMatrix(),C.shadow.bias=-4e-4,C.shadow.normalBias=.035,C.shadow.radius=s?3:2,r.add(C,C.target);const F=new x0(Wt.hemiSky,Wt.hemiGround,1.05),L=new S0(Wt.ambient,.35);r.add(F,L);const I=new Zr(a),W=new Zr(a),X=new Zr(a),nt=new Zr(a);{const J=R(m,0),dt=ys(J.x,0,J.z,ki),At=Ut=>.75+.25*Zn(0,1.6,Ut.y)-.1*Xd(Ut.x*3+Ut.y*4,Ut.z*3),Vt=(Ut,ye,on,Ye,Pe,an=At)=>I.add(Ut,dt.clone().multiply(ys(ye,on,Ye)),Pe,.05,an);for(const Ut of[-1.9,1.9])Vt(new ci(.21,.25,4.7,14),Ut,2.35,0,Wt.toriiRed),Vt(new ci(.29,.29,.42,14),Ut,.21,0,Wt.toriiBlack,()=>1),T.push({x:J.x+Math.cos(ki)*Ut,z:J.z-Math.sin(ki)*Ut,r:.55});Vt(new Pn(5,.26,.2),0,3.65,0,Wt.toriiRed),Vt(new Pn(.24,.62,.18),0,4.08,0,Wt.toriiRed),Vt(new Pn(5.5,.3,.36),0,4.52,0,Wt.toriiRed);const Ot=new Pn(6.6,.3,.5,24,1,1),Ht=Ot.getAttribute("position");for(let Ut=0;Ut<Ht.count;Ut++){const ye=Ht.getX(Ut)/3.3;Ht.setY(Ut,Ht.getY(Ut)+.32*ye*ye*ye*ye+(Ht.getY(Ut)>0?.04*ye*ye:0))}Ot.computeVertexNormals(),Vt(Ot,0,4.82,0,Wt.toriiBlack,()=>1)}const Y=(J,dt,At)=>{const Vt=ys(J,0,dt,At),Ot=(Ht,Ut,ye=Wt.stone)=>I.add(Ht,Vt.clone().multiply(ys(0,Ut,0)),ye,.12,on=>.8+.2*Zn(0,1.8,on.y));Ot(new ci(.42,.5,.2,6),.1),Ot(new ci(.13,.16,.8,8),.6),Ot(new ci(.36,.26,.16,6),1.08);for(let Ht=0;Ht<6;Ht++){const Ut=Ht/6*qe;I.add(new Pn(.06,.34,.06),Vt.clone().multiply(ys(Math.cos(Ut)*.22,1.33,Math.sin(Ut)*.22)),Wt.stone,.1)}Ot(new ci(.05,.52,.28,6),1.64),Ot(new ko(.1,8,6),1.84),nt.add(new ci(.19,.19,.3,6),Vt.clone().multiply(ys(0,1.33,0)),Wt.lanternGlow,0),T.push({x:J,z:dt,r:.9})};for(const J of[-2.5,2.5]){const dt=R(m+1.8,J);Y(dt.x,dt.z,ki)}for(const J of[ki+2.1,ki-2.3])Y(Math.sin(J)*(n+1.8),Math.cos(J)*(n+1.8),J);const j=[],it=[[-.5,6,1.25],[.95,7,1.15],[2,5.5,1.3],[3.1,7.5,1.2],[-2.1,6.5,1.1]];for(const[J,dt,At]of it){const Vt=ki+J,Ot=n+dt,Ht=Math.sin(Vt)*Ot,Ut=Math.cos(Vt)*Ot,ye=new A(a()-.5,0,a()-.5).multiplyScalar(.9*At),on=vn(Ht,-.2,Ut),Ye=on.clone().add(vn(ye.x*.4,1.6*At,ye.z*.4)),Pe=Ye.clone().add(vn(ye.x*.7+(a()-.5)*.4,1.4*At,ye.z*.7+(a()-.5)*.4));Dl(I,on,Ye,.36*At,.26*At,Wt.trunk),Dl(I,Ye,Pe,.26*At,.17*At,Wt.trunk);const an=Pe.clone().add(vn(0,.9*At,0)),Fn=s?22:14;for(let ve=0;ve<Fn;ve++){const ne=a()*qe,Ve=Math.sqrt(a())*3.1*At,bn=an.clone().add(vn(Math.cos(ne)*Ve,(a()-.3)*1.3*At-Ve*Ve*.09,Math.sin(ne)*Ve));ve<5&&Dl(I,Pe,bn.clone().lerp(Pe,.25),.11*At,.05*At,Wt.trunk,5);const qn=(.75+a()*.6)*At,Wi=qd(new fh(1,1),.28,ve*7+Math.round(Ht));W.add(Wi,new ae().compose(bn,vr.setFromAxisAngle(rr,a()*qe),ar.set(qn,qn*.72,qn)),Wt.maple[Math.floor(a()*Wt.maple.length)],.18)}j.push(new ke(Ht,Ut,4.2*At,0)),T.push({x:Ht,z:Ut,r:1.1})}for(let J=0;J<9;J++){const dt=a()*qe,At=n+2+a()*10,Vt=.35+a()*.9,Ot=Math.sin(dt)*At,Ht=Math.cos(dt)*At;if(w(Ot,Ht,Vt+1)||y(Ot,Ht)>.1)continue;const Ut=qd(new uh(1,1),.35,J*13);X.add(Ut,ys(Ot,E(Ot,Ht)+Vt*.15,Ht,a()*qe,Vt*(1+a()*.6),Vt*.65,Vt),8222830,.15),T.push({x:Ot,z:Ht,r:Vt*1.2})}const Lt=l(new ha({vertexColors:!0})),Ct=l(new ha({vertexColors:!0,flatShading:!0})),ge=l(new ha({vertexColors:!0,flatShading:!0,emissive:1704962}));ge.onBeforeCompile=J=>{Object.assign(J.uniforms,g),J.vertexShader=`uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;
varying vec3 vFW;
`+J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float fk = clamp((transformed.y - 2.5) / 4.0, 0.0, 1.0);
        float fs = sin(uTime * 1.3 + transformed.x * 0.35 + transformed.z * 0.27) + 0.5 * sin(uTime * 2.7 + transformed.y * 1.3);
        transformed.xz += uWind * (fs * 0.07 + 0.06) * fk * (uWindAmp + uGust * 2.0);
        vFW = transformed;`),J.fragmentShader=`uniform vec3 uSunDir; uniform vec3 uSunCol;
varying vec3 vFW;
`+J.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * pow(clamp(dot(normalize(vFW - cameraPosition), uSunDir), 0.0, 1.0), 4.0) * 0.45;`)},ge.customProgramCacheKey=()=>"wog-foliage";const qt=(J,dt,At,Vt=!0)=>{const Ot=new Ue(l(J),dt);return Ot.castShadow=At,Ot.receiveShadow=Vt,r.add(Ot),Ot};qt(I.build(),Lt,!0),qt(X.build(),Ct,!0),qt(W.build(),ge,!0),qt(nt.build(),l(new ba({vertexColors:!0})),!1,!1);const te=new Vi(640,640,160,160);te.rotateX(-Math.PI/2);{const J=te.getAttribute("position");for(let dt=0;dt<J.count;dt++)J.setY(dt,E(J.getX(dt),J.getZ(dt)));te.computeVertexNormals()}for(;j.length<5;)j.push(new ke(1e4,1e4,0,0));const $=l(new ha);$.onBeforeCompile=J=>{Object.assign(J.uniforms,{uGA:{value:c(Wt.groundA)},uGB:{value:c(Wt.groundB)},uGDark:{value:c(Wt.groundDark)},uDirt:{value:c(Wt.dirt)},uField:{value:c(Wt.field)},uLitter:{value:c(Wt.litter)},uPathAxis:{value:x},uPathLen:{value:m},uArenaR:{value:n},uTrees:{value:j}}),J.vertexShader=`varying vec3 vGWorld;
`+J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vGWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),J.fragmentShader=`
      uniform vec3 uGA, uGB, uGDark, uDirt, uField, uLitter;
      uniform vec2 uPathAxis; uniform float uPathLen; uniform float uArenaR; uniform vec4 uTrees[5];
      varying vec3 vGWorld;
      ${Hc}
      float pathMask(vec2 p, float n) {
        float u = dot(p, uPathAxis), v = dot(p, vec2(-uPathAxis.y, uPathAxis.x));
        float outer = step(uPathLen, u);
        float hw = mix(0.75, 1.05, outer) + (n - 0.5) * 0.6;
        float along = smoothstep(-2.0, 2.0, u) * (1.0 - smoothstep(uPathLen + 40.0, uPathLen + 60.0, u));
        float m = (1.0 - smoothstep(hw * 0.6, hw * 1.4, abs(v - sin(u * 3.14159265 / uPathLen) * 1.2))) * along;
        return max(m * mix(0.45, 1.0, outer), (1.0 - smoothstep(2.0 + n, 3.6 + n, length(p))) * 0.4);
      }
      `+J.fragmentShader.replace("#include <color_fragment>",`
        vec2 p = vGWorld.xz;
        float n1 = wog_fbm(p * 0.06), n2 = wog_fbm(p * 0.33 + 7.0), n3 = wog_noise(p * 1.9);
        vec3 gc = mix(uGA, uGB, smoothstep(0.3, 0.7, n1));
        gc = mix(gc, uGDark, smoothstep(0.5, 0.78, n2) * 0.65) * (0.82 + 0.3 * n3);
        float r = length(p);
        gc = mix(gc, uField * (0.7 + 0.25 * wog_noise(p * vec2(0.9, 0.25)) + 0.35 * n1), smoothstep(uArenaR + 1.0, uArenaR + 12.0, r) * 0.8);
        gc = mix(gc, uDirt * (0.82 + 0.3 * n3), pathMask(p, n2) * 0.85);
        float litter = 0.0;
        for (int i = 0; i < 5; i++) litter = max(litter, 1.0 - smoothstep(uTrees[i].z * 0.35, uTrees[i].z, length(p - uTrees[i].xy)));
        litter *= smoothstep(0.35, 0.7, wog_noise(p * 2.4 + 3.0));
        gc = mix(gc, uLitter * (0.75 + 0.45 * n3), litter * 0.85);
        diffuseColor.rgb = gc;`)},$.customProgramCacheKey=()=>"wog-ground";const et=qt(te,$,!1);et.name="Ground";const vt=new ae,It=new dn,_t=new pi,Kt=new kt,Ge=[[1,1,1],[.92,1.06,.84],[1.1,.96,.8],[1.05,1.02,.95],[.85,.95,.8]],$t=J=>{const dt=Ge[Math.floor(a()*Ge.length)],At=1+(a()-.5)*.18;return Kt.setRGB(1+(dt[0]-1)*J,1+(dt[1]-1)*J,1+(dt[2]-1)*J).multiplyScalar(At)},ee=s?14e3:3e3,fe=new xo(l(w1(3)),l(Kd("short",g,{uRoot:{value:c(Wt.grassRoot)},uMid:{value:c(Wt.grassMid)},uTip:{value:c(Wt.grassTip)},uPlume:{value:c(Wt.plume)},uStiff:{value:.5},uSss:{value:.55}})),ee);let Ft=0;for(let J=0;Ft<ee&&J<ee*6;J++){const dt=Math.sqrt(a())*(n+4),At=a()*qe,Vt=Math.sin(At)*dt,Ot=Math.cos(At)*dt;if(a()<Zn(n+.5,n+4,dt)*.85)continue;const Ht=y(Vt,Ot);if(a()<Ht*.6||w(Vt,Ot))continue;let Ut=.25+.3*(.35*a()+.65*Xd(Vt*.18,Ot*.18));Ut=Math.max(.2,Ut*(1-Ht*.35))*(1+Zn(n,n+4,dt)*.6),_t.set((a()-.5)*.45,a()*qe,(a()-.5)*.45,"YXZ"),vt.compose(Vc.set(Vt,0,Ot),It.setFromEuler(_t),ar.set(Ut*(.8+a()*.5),Ut,Ut)),fe.setMatrixAt(Ft,vt),fe.setColorAt(Ft,$t(1)),Ft++}fe.count=Ft;const xe=s?12e3:3e3,Fe=new xo(l(E1(s)),l(Kd("tall",g,{uRoot:{value:c(Wt.pampasRoot)},uMid:{value:c(Wt.pampasMid)},uTip:{value:c(Wt.pampasTip)},uPlume:{value:c(Wt.plume)},uStiff:{value:.38},uSss:{value:.45}})),xe);Ft=0;const sn=new A,Ce=new A,He=new dn;for(let J=0;Ft<xe&&J<xe*4;J++){const dt=a()<.22,At=dt?n+12+a()*38:n+2.2+-Math.log(1-a()*.96)*7,Vt=a()*qe;if(At>n+50)continue;const Ot=Math.sin(Vt)*At,Ht=Math.cos(Vt)*At,{u:Ut,v:ye}=b(Ot,Ht);if(Ut>m-1&&Math.abs(ye-f(Ut))<2||w(Ot,Ht,.4))continue;const on=dt?3+Math.floor(a()*5):6+Math.floor(a()*9),Ye=1.15+a()*.5+Zn(n+3,n+14,At)*.2;for(let Pe=0;Pe<on&&Ft<xe;Pe++){const an=a()*qe,Fn=Math.sqrt(a())*.75,ve=Ot+Math.cos(an)*Fn,ne=Ht+Math.sin(an)*Fn,Ve=Math.min(1.9,Ye*(.85+a()*.22))*(.72+.28*Zn(n+2,n+5,At));sn.set(Math.cos(an),0,Math.sin(an)),Ce.set(sn.z,0,-sn.x),He.setFromAxisAngle(rr,a()*qe),It.setFromAxisAngle(Ce,.05+Fn*.3+a()*.08).multiply(He),vt.compose(Vc.set(ve,E(ve,ne)-.12,ne),It,ar.set(Ve,Ve,Ve)),Fe.setMatrixAt(Ft,vt),Fe.setColorAt(Ft,$t(.8)),Ft++}}Fe.count=Ft;for(const J of[fe,Fe])J.frustumCulled=!1,J.receiveShadow=!0,r.add(J);{const J=[],dt=[],At=c(Wt.horizon),Vt=c(14256762),Ot=new kt,Ht=new kt,Ut=Yd(3805657),ye=[{r:128,depth:16,base:4,amp:15,color:4866674},{r:166,depth:22,base:9,amp:26,color:6643090},{r:212,depth:28,base:14,amp:38,color:8748203}],on=200;for(const Pe of ye){const an=[Ut()*qe,Ut()*qe,Ut()*qe,Ut()*qe],Fn=ve=>{const ne=(Ve,bn)=>Math.pow(1-Math.abs(Math.sin(ve*Ve+bn)),2.2);return Pe.base+Pe.amp*(.5*ne(3,an[0])+.3*ne(7,an[1])+.14*ne(17,an[2])+.06*ne(41,an[3]))};for(let ve=0;ve<on;ve++){const ne=ve/on*qe,Ve=(ve+1)/on*qe,bn=(Ai,M,U)=>[Math.sin(Ai)*M,U,Math.cos(Ai)*M],qn=bn(ne,Pe.r,-14),Wi=bn(Ve,Pe.r,-14),Ns=bn(ne,Pe.r+Pe.depth,Fn(ne)),Yi=bn(Ve,Pe.r+Pe.depth,Fn(Ve));J.push(...qn,...Wi,...Yi,...qn,...Yi,...Ns);const Xi=.5-.5*Math.cos(ne-Pl);Ot.set(Pe.color).lerp(At,.55),Ht.set(Pe.color).lerp(Vt,Xi*.3);for(const Ai of[Ot,Ot,Ht,Ot,Ht,Ht])dt.push(Ai.r,Ai.g,Ai.b)}}const Ye=new Ne;Ye.setAttribute("position",new se(J,3)),Ye.setAttribute("color",new se(dt,3)),qt(Ye,l(new ba({vertexColors:!0,side:hn})),!1,!1)}const O=l(C1()),Oe=s?400:120,he=l(new ha({map:O,alphaTest:.5,side:hn}));he.onBeforeCompile=J=>{Object.assign(J.uniforms,g),J.vertexShader=`varying vec3 vLW;
`+J.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),J.fragmentShader=`uniform vec3 uSunDir; uniform vec3 uSunCol;
varying vec3 vLW;
`+J.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      float lb = pow(clamp(dot(normalize(vLW - cameraPosition), uSunDir), 0.0, 1.0), 3.0);
      totalEmissiveRadiance += diffuseColor.rgb * (0.3 + uSunCol * lb * 0.35);`)},he.customProgramCacheKey=()=>"wog-leaves";const P=new xo(l(new Vi(1,1)),he,Oe);P.frustumCulled=!1;const _=22,B=new Float32Array(Oe*3),V=new Float32Array(Oe*3),K=new Float32Array(Oe*3),at=new Float32Array(Oe*3),lt=[12593180,14172959,15234090,15770929,10361627,13851170],Z=(J,dt,At)=>{const Vt=a()*qe,Ot=Math.sqrt(a())*_;B[J*3]=dt.x+Math.cos(Vt)*Ot-p.x*8,B[J*3+1]=At?a()*11:5+a()*7,B[J*3+2]=dt.z+Math.sin(Vt)*Ot-p.y*8;for(let Ht=0;Ht<3;Ht++)V[J*3+Ht]=a()*qe,K[J*3+Ht]=(a()-.5)*6;at[J*3]=.14+a()*.08,at[J*3+1]=.45+a()*.45,at[J*3+2]=a()*qe};for(let J=0;J<Oe;J++)Z(J,vn(0,0,0),!0),P.setColorAt(J,Kt.set(lt[J%lt.length]));r.add(P);const tt=s?240:70,ct=l(new Ne);{const J=new Float32Array(tt*4);for(let dt=0;dt<J.length;dt++)J[dt]=a();ct.setAttribute("position",new se(new Float32Array(tt*3),3)),ct.setAttribute("aSeed",new se(J,4))}const Tt=l(new un({transparent:!0,depthWrite:!1,blending:fs,fog:!1,uniforms:{uTime:g.uTime,uWind:g.uWind,uGust:g.uGust,uFocus:g.uFocus,uPx:{value:800},uColor:{value:c(Wt.mote)}},vertexShader:`
      uniform float uTime, uGust, uPx; uniform vec2 uWind; uniform vec3 uFocus;
      attribute vec4 aSeed; varying float vA;
      void main() {
        vec3 box = vec3(34.0, 3.0, 34.0);
        vec3 p = aSeed.xyz * box;
        p.xz += uWind * uTime * (0.4 + aSeed.w * 0.5) * (1.0 + uGust);
        p += vec3(sin(uTime * 0.7 + aSeed.w * 40.0), 0.5 * sin(uTime * 0.9 + aSeed.w * 17.0), cos(uTime * 0.6 + aSeed.w * 23.0)) * 0.5;
        vec3 lo = uFocus - box * 0.5;
        vec2 rel = mod(p.xz - lo.xz, box.xz);
        vec3 wp = vec3(lo.x + rel.x, 0.25 + mod(p.y, box.y), lo.z + rel.y);
        vec2 e = abs(rel / box.xz * 2.0 - 1.0);
        vec4 mv = modelViewMatrix * vec4(wp, 1.0);
        vA = (1.0 - smoothstep(0.7, 1.0, max(e.x, e.y))) * (0.45 + 0.55 * sin(uTime * 1.7 + aSeed.w * 60.0)) * (1.0 - smoothstep(8.0, 20.0, -mv.z));
        gl_PointSize = min(16.0, (0.025 + 0.03 * aSeed.w) * uPx * projectionMatrix[1][1] * 0.5 / max(-mv.z, 0.1));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; varying float vA;
      void main() {
        float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * max(vA, 0.0);
        gl_FragColor = vec4(uColor * a * 0.42, 1.0);
        #include <colorspace_fragment>
      }`})),ut=new ef(ct,Tt);ut.frustumCulled=!1,ut.renderOrder=10,r.add(ut);let rt=0,bt=0,Dt=100,Gt=0;const N=new A,ot=new A,Q=new A,ht=new A;ot.crossVectors(rr,u).normalize(),Q.crossVectors(u,ot).normalize();const pt=new Nt,st=new A,Pt=new A;function St(J,dt,At,Vt){dt=Math.min(Math.max(dt,0),.1),N.copy(At);const Ot=Ll+Math.sin(J*.05)*.22+Math.sin(J*.17+1.3)*.07;p.set(Math.cos(Ot),Math.sin(Ot)),rt*=Math.exp(-dt/.5),bt+=(rt-bt)*Math.min(1,dt*12),Dt+=dt,g.uTime.value=J,g.uWind.value.copy(p),g.uWindAmp.value=.62+.18*Math.sin(J*.23),g.uGust.value=bt,g.uWave.value.w=Dt,g.uWaveAmp.value=Gt*Math.exp(-Dt*1.4)*Zn(0,.06,Dt),g.uFocus.value.copy(At);const Ht=g.uBenders.value,Ut=Math.min(8,Vt.length);for(let ve=0;ve<Ut;ve++)Ht[ve].copy(Vt[ve]);g.uBenderCount.value=Ut;const ye=2*Va/C.shadow.mapSize.x,on=Math.round(At.dot(ot)/ye)*ye,Ye=Math.round(At.dot(Q)/ye)*ye;ht.copy(ot).multiplyScalar(on).addScaledVector(Q,Ye).addScaledVector(u,At.dot(u)),C.target.position.copy(ht),C.position.copy(ht).addScaledVector(u,80),C.target.updateMatrixWorld();const Pe=1+bt*3.5,an=-p.y,Fn=p.x;for(let ve=0;ve<Oe;ve++){const ne=ve*3,Ve=at[ne+2],bn=Math.sin(J*1.7+Ve)*.6,qn=(1+Ve%1*.8)*Pe;B[ne]+=(p.x*qn+an*bn)*dt,B[ne+2]+=(p.y*qn+Fn*bn)*dt,B[ne+1]-=at[ne+1]*(1+.6*Math.sin(J*2.3+Ve*3))*dt;for(let Xi=0;Xi<3;Xi++)V[ne+Xi]+=K[ne+Xi]*dt*(1+bt*1.5);const Wi=B[ne]-At.x,Ns=B[ne+2]-At.z;(B[ne+1]<.02||Wi*Wi+Ns*Ns>(_+10)**2)&&Z(ve,At,!1),It.setFromEuler(_t.set(V[ne],V[ne+1],V[ne+2]));const Yi=at[ne];vt.compose(st.set(B[ne],B[ne+1],B[ne+2]),It,Pt.set(Yi,Yi,Yi)),P.setMatrixAt(ve,vt)}P.instanceMatrix.needsUpdate=!0,t.getDrawingBufferSize(pt),Tt.uniforms.uPx.value=pt.y}function Se(J){const dt=ah.clamp(J,0,1);rt=Math.max(rt,dt),Gt=dt,Dt=0,g.uWave.value.set(N.x,N.y,N.z,0)}function pe(){i.remove(r),i.fog===h&&(i.fog=null),i.background===d&&(i.background=null),C.shadow.dispose();for(const J of o)J.dispose();fe.dispose(),Fe.dispose(),P.dispose(),o.length=0}return St(0,0,new A,[]),{update:St,sun:C,wind:p,gust:Se,dispose:pe}}function C1(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");if(e){e.translate(64/2,64*.54);const s=[[0,1],[1.05,.9],[-1.05,.9],[2.1,.55],[-2.1,.55]];e.beginPath();for(let a=0;a<=160;a++){const r=a/160*qe-Math.PI;let o=.22;for(const[h,d]of s)o+=d*Math.exp(-(((r-h)/.3)**2));o*=(1+.08*Math.sin(r*26))*64*.36;const l=Math.sin(r)*o,c=-Math.cos(r)*o;a===0?e.moveTo(l,c):e.lineTo(l,c)}e.closePath(),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="rgba(120,60,40,0.55)",e.lineWidth=1.2;for(const[a]of s)e.beginPath(),e.moveTo(0,0),e.lineTo(Math.sin(a)*64*.3,-Math.cos(a)*64*.3),e.stroke();e.beginPath(),e.moveTo(0,0),e.lineTo(0,64*.4),e.lineWidth=2,e.stroke()}const n=new dh(t);return n.colorSpace=cn,n}const P1=1512221;let es=null;function L1(){if(es)return es;const i=[172,216,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),es=new Oo(t,i.length,1,Yn),es.minFilter=es.magFilter=Ke,es.generateMipmaps=!1,es.needsUpdate=!0,es}function Wn(i,t={}){return new g0({color:t.map?16777215:i,map:t.map??null,gradientMap:L1(),emissive:t.emissive??0,side:t.side??us})}function Df(i,t){const e=i.length,n=i[0].length,s=new Uint8Array(n*e*4);for(let r=0;r<e;r++){const o=i[e-1-r];for(let l=0;l<n;l++){const c=t[o[l]??o[o.length-1]]??16711935,h=(r*n+l)*4;s[h]=c>>16&255,s[h+1]=c>>8&255,s[h+2]=c&255,s[h+3]=255}}const a=new Oo(s,n,e,Yn);return a.colorSpace=cn,a.minFilter=a.magFilter=Ke,a.generateMipmaps=!1,a.needsUpdate=!0,a}const kf={value:1.25*2/240},If=new un({uniforms:rf.merge([ft.fog,{color:{value:new kt(P1)}}]),vertexShader:`
    attribute vec3 inkDir;
    uniform float uInk;
    #include <fog_pars_vertex>
    void main(){
      vec3 sc = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), length(modelMatrix[2].xyz));
      float w = (projectionMatrix * modelViewMatrix * vec4(position, 1.0)).w;
      float t = clamp(uInk * w / projectionMatrix[1][1], 0.004, 0.07);
      vec4 mvPosition = modelViewMatrix * vec4(position + inkDir * t / max(sc, vec3(1e-4)), 1.0);
      gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
    }`,fragmentShader:`
    uniform vec3 color;
    #include <fog_pars_fragment>
    void main(){
      gl_FragColor = vec4(color, 1.0);
      #include <fog_fragment>
    }`,side:xn,fog:!0});If.uniforms.uInk=kf;const Jr=new A;function D1(i){if(i.getAttribute("inkDir"))return;i.boundingBox||i.computeBoundingBox(),i.boundingBox.getCenter(Jr);const t=i.getAttribute("position"),e=new Float32Array(t.count*3),n=s=>s>1e-5?1:s<-1e-5?-1:0;for(let s=0;s<t.count;s++)e[s*3]=n(t.getX(s)-Jr.x),e[s*3+1]=n(t.getY(s)-Jr.y),e[s*3+2]=n(t.getZ(s)-Jr.z);i.setAttribute("inkDir",new We(e,3))}function ya(i){D1(i.geometry);const t=new Ue(i.geometry,If);return t.castShadow=!1,t.receiveShadow=!1,t.name="ink",i.add(t),t}function me(i,t,e,n,s=!0){const a=new Ue(new Pn(i,t,e),n);return a.castShadow=!0,s&&ya(a),a}function k1(i,t=i){const e=new Pn(i,1,t);return e.translate(0,.5,0),e}function kl(i,t,e,n,s){const a=[[-i/2,0,t/2],[i/2,0,t/2],[i/2,0,-t/2],[-i/2,0,-t/2]],r=[[-e/2,-s,n/2],[e/2,-s,n/2],[e/2,-s,-n/2],[-e/2,-s,-n/2]],o=[],l=[],c=(d,u,p,g)=>{o.push(...d,...u,...p,...d,...p,...g),l.push(0,0,1,0,1,1,0,0,1,1,0,1)};for(let d=0;d<4;d++){const u=(d+1)%4;c(r[d],r[u],a[u],a[d])}c(a[0],a[1],a[2],a[3]);const h=new Ne;return h.setAttribute("position",new se(o,3)),h.setAttribute("uv",new se(l,2)),h.computeVertexNormals(),h}const I1={player:{skin:14856328,cloth:4164188,cloth2:8018492,trim:13123631,metal:15660024,hat:"hood",skirt:"tunic",cape:3107400,armor:!1,weapon:"shortsword",offhand:"buckler",bulk:1},ronin:{skin:14263422,cloth:5073576,cloth2:7828076,trim:15129792,metal:15133938,hat:"jingasa",skirt:"hakama",cape:null,armor:!1,weapon:"katana",offhand:"none",bulk:1},shield:{skin:14263422,cloth:10119744,cloth2:5722700,trim:11680302,metal:14212837,hat:"jingasaDark",skirt:"armor",cape:null,armor:!0,weapon:"shortyari",offhand:"tate",bulk:1.08},spear:{skin:14263422,cloth:4161430,cloth2:5722700,trim:14733212,metal:15133938,hat:"jingasaDark",skirt:"hakama",cape:null,armor:!1,weapon:"yari",offhand:"none",bulk:1},armored:{skin:13080178,cloth:4013906,cloth2:2763318,trim:14264639,metal:15659766,hat:"kabuto",skirt:"armor",cape:null,armor:!0,weapon:"nodachi",offhand:"none",bulk:1.18},duelist:{skin:14263422,cloth:3420223,cloth2:4538447,trim:12593724,metal:15133938,hat:"mask",skirt:"none",cape:null,armor:!1,weapon:"wakizashi",offhand:"wakizashi",bulk:.92},archer:{skin:14263422,cloth:9080912,cloth2:6971464,trim:15787724,metal:15133938,hat:"band",skirt:"hakama",cape:null,armor:!1,weapon:"knife",offhand:"yumi",bulk:.98},boss:{skin:13080178,cloth:11545130,cloth2:3809830,trim:15777872,metal:16054010,hat:"kabutoBoss",skirt:"armor",cape:5902872,armor:!0,weapon:"katana",offhand:"none",bulk:1.15},dummy:{skin:14203e3,cloth:13149288,cloth2:10123336,trim:8017458,metal:8947848,hat:"straw",skirt:"none",cape:null,armor:!1,weapon:"none",offhand:"none",bulk:1.05}},ja=new A(0,1,0),Vn=new A,ws=new A,Zd=new A,Jd=new ae;class yi{mesh;constructor(t,e,n=t){this.mesh=new Ue(k1(t,n),e),this.mesh.castShadow=!0,ya(this.mesh)}place(t,e){Vn.subVectors(e,t);const n=Vn.length();this.mesh.position.copy(t),n>1e-5&&this.mesh.quaternion.setFromUnitVectors(ja,Vn.multiplyScalar(1/n)),this.mesh.scale.set(1,Math.max(n,.001),1)}}const U1=4871524,Uf=i=>Wn(i,{emissive:U1}),N1=new A(0,0,1),Ga=.58,F1=40,Qd=.875,Qr=.07,Ee=()=>new A,xt={hipQ:new dn,chestQ:new dn,bodyQ:new dn,headQ:new dn,q:new dn,e:new pi,m:new ae,pivot:Ee(),chestTop:Ee(),shR:Ee(),shL:Ee(),headPos:Ee(),hipR:Ee(),hipL:Ee(),handR:Ee(),handL:Ee(),elbowR:Ee(),elbowL:Ee(),poleR:Ee(),poleL:Ee(),ankR:Ee(),ankL:Ee(),footR:Ee(),footL:Ee(),kneeR:Ee(),kneeL:Ee(),poleKR:Ee(),poleKL:Ee(),pel:Ee(),bladeR:Ee(),edgeR:Ee(),bladeL:Ee(),edgeL:Ee(),tmp:Ee(),tmp2:Ee()};function jd(i){return i.sub(xt.pivot).applyQuaternion(xt.bodyQ).add(xt.pivot)}const O1=[xt.chestTop,xt.shR,xt.shL,xt.headPos,xt.hipR,xt.hipL,xt.elbowR,xt.elbowL,xt.handR,xt.handL,xt.kneeR,xt.kneeL,xt.ankR,xt.ankL,xt.footR,xt.footL];class ds{dir=new A;init=!1;static t=new A;static u=new A;static w=new A;solve(t,e,n,s,a,r,o){const l=ds.t.subVectors(e,t);let c=l.length();c<1e-5?l.set(0,-1,0):l.multiplyScalar(1/c),c=Math.min(n+s-1e-4,Math.max(Math.abs(n-s)+1e-4,c));const h=ds.u.copy(a).addScaledVector(l,-a.dot(l)),d=h.length(),u=a.length()||1;if(!this.init)d<1e-4&&h.set(0,0,1).addScaledVector(l,-l.z),this.dir.copy(h).normalize(),this.init=!0;else if(d>.15*u&&r>0){h.multiplyScalar(1/d);const x=Math.acos(Math.max(-1,Math.min(1,this.dir.dot(h))));if(x>1e-5){const m=Math.min(x*(1-Math.exp(-r*30)),F1*r),f=ds.w.crossVectors(this.dir,h);f.lengthSq()<1e-10&&f.copy(l),this.dir.applyAxisAngle(f.normalize(),m)}}this.dir.addScaledVector(l,-this.dir.dot(l)),this.dir.lengthSq()<1e-8&&this.dir.copy(h.lengthSq()>1e-8?h:ws.set(0,0,1).addScaledVector(l,-l.z)),this.dir.normalize();const p=(n*n+c*c-s*s)/(2*n*c),g=Math.sqrt(Math.max(0,1-p*p));return o.copy(t).addScaledVector(l,n*p).addScaledVector(this.dir,n*g)}}function sa(i,t,e){Vn.copy(t).normalize(),ws.copy(e).addScaledVector(Vn,-e.dot(Vn)),ws.lengthSq()<1e-6&&ws.set(0,0,1).addScaledVector(Vn,-Vn.z),ws.normalize(),Zd.crossVectors(Vn,ws).normalize(),Jd.makeBasis(Zd,Vn,ws),i.quaternion.setFromRotationMatrix(Jd)}function Nf(i,t){const e=new Un,n=Uf(t.metal),s=Wn(2893346),a=Wn(14264639),r=Wn(9067060),o=(l,c,h,d,u,p=0,g=0)=>{const x=me(l,c,h,d);return x.position.set(p,u,g),e.add(x),x};switch(i){case"shortsword":return o(.075,.54,.028,n,.35),o(.04,.07,.028,n,.655),o(.2,.04,.06,a,.07),o(.04,.13,.04,s,-.01),o(.06,.05,.06,a,-.095),{group:e,tip:.7,base:.1};case"katana":case"nodachi":case"wakizashi":{const l=i==="nodachi"?1.1:i==="katana"?.78:.5,c=i==="wakizashi"?.14:.27,h=i==="nodachi"?.062:.05,d=3;for(let u=0;u<d;u++){const p=.05+l/d*u,g=o(h,l/d+.01,.026,n,p+l/d/2);g.position.z=-Math.pow((u+.5)/d,2)*.04*l,g.rotation.x=.03*(u+1)*l}return o(.11,.022,.11,a,.035),o(.04,c,.04,s,.02-c/2),{group:e,tip:.05+l,base:.1}}case"yari":case"shortyari":{const l=i==="yari"?1:.45,c=i==="yari"?1.6:.9;return o(.04,l+c,.04,r,(c-l)/2),o(.075,.2,.028,n,c+.1),o(.04,.07,.028,n,c+.225),o(.07,.05,.07,a,c-.01),{group:e,tip:c+.26,base:c-.1}}case"knife":return o(.045,.22,.022,n,.14),o(.035,.1,.035,s,-.02),{group:e,tip:.26,base:.05};default:return{group:e,tip:.1,base:0}}}function B1(i,t){const e=new Un,n=(s,a,r,o)=>(s.position.set(a,r,o),e.add(s),s);switch(i){case"buckler":{const s=Wn(10119740),a=Uf(13620958),r=(o,l,c)=>{const h=new Ue(new ci(o,o,l,8),c);return h.rotation.y=Math.PI/8,h.castShadow=!0,ya(h),h};return n(r(.2,.03,a),0,-.006,0),n(r(.165,.04,s),0,.004,0),n(me(.1,.05,.1,a),0,.03,0),{group:e,tip:0,base:0}}case"tate":{const s=Df(["bbbbbbbb","wwwwwwww","wwwwwwww","wwwttwww","wwtwwtww","wwtwwtww","wwwttwww","wwwwwwww","wwwwwwww","bbbbbbbb","wwwwwwww","wwwwwwww"],{w:11680302,b:3812386,t:t.trim===11680302?15787724:t.trim}),a=Wn(11680302),r=Wn(16777215,{map:s});return n(me(.64,1.14,.06,[a,a,a,a,r,a]),0,.1,.02),{group:e,tip:.6,base:-.4}}case"wakizashi":{const s=Nf("wakizashi",t);return{group:s.group,tip:s.tip,base:s.base}}case"yumi":{const r=[];for(let l=0;l<=8;l++){const c=-.72+1.97*l/8,h=(c- -.72)/(1.25- -.72);r.push(new A(0,c,Math.sin(h*Math.PI)*.14-Math.sin(h*Math.PI*2)*.02))}e.add(Ff(r,Wn(4861984))),n(me(.05,.1,.05,Wn(15787724)),0,0,.14);const o=Of();return e.add(o),{group:e,tip:1.25,base:-.72,bowString:o,bowTips:[new A(0,1.25,0),new A(0,-.72,0)]}}default:return null}}function Ff(i,t){const e=new Un;for(let n=0;n+1<i.length;n++){const s=new yi(.034,t);s.place(i[n],i[n+1]),e.add(s.mesh)}return e}function Of(){const i=new Ne;i.setAttribute("position",new We(new Float32Array(9),3));const t=new tf(i,new hh({color:16051932}));return t.frustumCulled=!1,t}function z1(){const i=new Un,t=[];for(let n=0;n<=8;n++){const s=n/8;t.push(new A(0,-.6+1.2*s,Math.sin(s*Math.PI)*.12-Math.pow(Math.abs(s-.5)*2,6)*.07))}i.add(Ff(t,Wn(6964262)));const e=Of();return i.add(e),{group:i,string:e,tips:[new A(0,.6,-.07),new A(0,-.6,-.07)]}}function Ms(i,t){const e=Math.round((i>>16&255)*t),n=Math.round((i>>8&255)*t),s=Math.round((i&255)*t);return e<<16|n<<8|s}const H1={hood:{front:["cccccccc","CCCCCCCC","kkkkkkkk","kdkssdkk","ssssssss","rrrrrrrr","rrrrrrrr","rrrrrrrr"],side:["cccccccc","cccccccc","cccccccc","cccccccc","cccccccc","rrrrrrrr","rrrrrrrr","rrrrrrrr"],top:"c"},jingasa:{front:["hhhhhhhh","kkkkkkkk","kkkkkkkk","sdsssdss","ssssssss","ssssssss","ssmmmmss","ssssssss"],side:["hhhhhhhh","hhhhhhhh","hhhhhsss","hhhhssss","hhhsssss","ssssssss","ssssssss","ssssssss"],top:"h"},jingasaDark:{front:["hhhhhhhh","kkkkkkkk","kkkkkkkk","sdsssdss","ssssssss","ssssssss","sssmmsss","ssssssss"],side:["hhhhhhhh","hhhhhhhh","hhhhhsss","hhhhssss","hhhsssss","ssssssss","ssssssss","ssssssss"],top:"h"},kabuto:{front:["tttttttt","kkkkkkkk","kekkkkek","kkkkkkkk","nnnnnnnn","nNnNnNnN","nnnnnnnn","nnnnnnnn"],side:["tttttttt","kkkkkkkk","kkkkkkkk","kkkkkkkk","nnnnnnnn","nnnnnnnn","nnnnnnnn","nnnnnnnn"],top:"t"},kabutoBoss:{front:["nnnnnnnn","kkkkkkkk","keekkeek","kkkkkkkk","nnnnnnnn","nwnwnwnw","nnnnnnnn","nnnnnnnn"],side:["nnnnnnnn","kkkkkkkk","kkkkkkkk","kkkkkkkk","nnnnnnnn","nnnnnnnn","nnnnnnnn","nnnnnnnn"],top:"n"},mask:{front:["cccccccc","cccccccc","rrrrrrrr","rwrrrrwr","rrrrrrrr","cccccccc","CCCCCCCC","cccccccc"],side:["cccccccc","cccccccc","rrrrrrrr","rrrrrrrr","rrrrrrrr","cccccccc","cccccccc","cccccccc"],top:"c"},band:{front:["hhhhhhhh","wwwwwwww","ssssssss","sdsssdss","ssssssss","ssssssss","sssmmsss","ssssssss"],side:["hhhhhhhh","wwwwwwww","hhhhhsss","hhhhssss","hhhsssss","ssssssss","ssssssss","ssssssss"],top:"h"},straw:{front:["ssssssss","ssssssss","sdsssdss","ssssssss","ssssssss","sdddddds","ssssssss","ssssssss"],side:["ssssssss","ssssssss","ssssssss","ssssssss","ssssssss","ssssssss","ssssssss","ssssssss"],top:"s"}};class V1{root=new Un;kind;look;mats=[];textures=[];torso;pelvisMesh;head;neck;uArmR;lArmR;uArmL;lArmL;thighR;shinR;thighL;shinL;joints=[];handRMesh;handLMesh;footRMesh;footLMesh;skirt=null;cape=null;shoulderPads=[];chestPlate=null;weapon;weaponTip;weaponBase;offhand;offTip;offBase;offKind;bowString=null;bowTips=null;rangerBow=null;quiver=null;nocked=null;glintSprite;shieldOpen=0;armorBroken=!1;capeLift=0;grip;bendR=new ds;bendL=new ds;bendKR=new ds;bendKL=new ds;jHandR=new A;jHandL=new A;jHead=new A;jChest=new A;constructor(t,e){this.kind=t;const n=this.look=I1[t],s=(L,I)=>{const W=Wn(L,I);return this.mats.push(W),W},a=(L,I)=>{const W=Df(L,I);return this.textures.push(W),W},r=s(n.skin),o=s(n.cloth),l=s(n.cloth2),c=s(n.trim),h=n.bulk;this.grip=n.weapon==="katana"?-.2:n.weapon==="nodachi"?-.25:n.weapon==="yari"?.55:null;const d=Ms(n.cloth2,.55),u={c:n.cloth,C:Ms(n.cloth,.78),l:n.cloth2,t:n.trim,s:n.skin,b:d,y:15777872,a:n.cloth,A:Ms(n.cloth,.7)},p=n.armor?s(16777215,{map:a(["aaaa","AAAA","tttt","aaaa","AAAA","tttt"],u)}):o,g=t==="player"?["cccccccc","lccccccc","clcccccc","cclccccc","ccclcccc","cccclccc","bbbbbybb","bbbbbybb","cccccccc","CCCCCCCC"]:t==="dummy"?["cccccccc","cCcccCcc","cccccccc","ccCcccCc","cccccccc","cCcccCcc","bbbbbbbb","cccccccc","ccCcccCc","cccccccc"]:n.armor?["llllllll","llllllll","llllllll","llllllll","llllllll","llllllll","bbbbbbbb","bbbbbbbb","llllllll","llllllll"]:["ctsssstc","cctsstcc","ccctcccc","ccctcccc","cccctccc","cccccccc","bbbbbbbb","bbbbbbbb","cccccccc","CCCCCCCC"],x=g.map((L,I)=>I===6||I===7?"bbbbbbbb":L[0].repeat(8)),m=s(16777215,{map:a(g,u)}),f=s(16777215,{map:a(x,u)}),b=n.armor?l:o;this.torso=me(.34*h,.5,.22*h,[f,f,b,b,m,f]),this.root.add(this.torso),this.pelvisMesh=me(.3*h,.16,.2*h,l),this.root.add(this.pelvisMesh),this.neck=new yi(.09,r),this.root.add(this.neck.mesh),this.head=this.buildHead(n,s,a),this.root.add(this.head);const R=n.armor?p:o,y=t==="player"||n.armor?l:o;this.uArmR=new yi(.115*h,R),this.lArmR=new yi(.1*h,y),this.uArmL=new yi(.115*h,R),this.lArmL=new yi(.1*h,y);const T=t==="player"?s(9072206):l,w=t==="player"||n.armor?s(3812904):T;this.thighR=new yi(.145*h,T),this.shinR=new yi(.125*h,w),this.thighL=new yi(.145*h,T),this.shinL=new yi(.125*h,w);for(const L of[this.uArmR,this.lArmR,this.uArmL,this.lArmL,this.thighR,this.shinR,this.thighL,this.shinL])this.root.add(L.mesh);for(let L=0;L<4;L++){const I=(L<2?.112:.14)*h,W=me(I,I,I,L<2?R:T,!1);this.joints.push(W),this.root.add(W)}const E=t==="player"?l:r;this.handRMesh=me(.1,.1,.1,E),this.handLMesh=me(.1,.1,.1,E);const v=new Pn(.12,.08,.25);v.translate(0,.04,.04);const S=s(t==="dummy"?n.cloth2:3352874),C=()=>{const L=new Ue(v,S);return L.castShadow=!0,ya(L),L};this.footRMesh=C(),this.footLMesh=C();for(const L of[this.handRMesh,this.handLMesh,this.footRMesh,this.footLMesh])this.root.add(L);if(n.skirt!=="none"){const L=n.skirt==="hakama",I=n.skirt==="armor",W=L?kl(.36*h,.25*h,.62*h,.5*h,.6):I?kl(.38*h,.27*h,.58*h,.44*h,.38):kl(.36*h,.25*h,.48*h,.37*h,.34),X=L?s(16777215,{map:a(["llll","llll","llll","llll","LLLL"],{l:n.cloth2,L:Ms(n.cloth2,.75)}),side:hn}):I?s(16777215,{map:a(["aaaa","AAAA","tttt","aaaa","AAAA","tttt"],u),side:hn}):s(16777215,{map:a(["cccc","cccc","cccc","CCCC","tttt"],u),side:hn}),nt=new Ue(W,X);nt.castShadow=!0,ya(nt),this.skirt=nt,this.root.add(nt)}if(n.cape!==null){const L=new Pn(.46*h,.92,.035);L.translate(0,-.46,0),this.cape=new Ue(L,s(n.cape)),this.cape.castShadow=!0,ya(this.cape),this.root.add(this.cape)}if(n.armor){for(let L=0;L<2;L++){const I=me(.19*h,.07,.23*h,p),W=me(.2*h,.025,.24*h,c,!1);W.position.y=-.04,I.add(W),this.shoulderPads.push(I),this.root.add(I)}this.chestPlate=me(.37*h,.32,.07,p),this.root.add(this.chestPlate)}const k=Nf(n.weapon,n);this.weapon=k.group,this.weaponTip=k.tip,this.weaponBase=k.base,this.root.add(this.weapon),this.offKind=n.offhand;const D=B1(n.offhand,n);if(this.offhand=D?.group??null,this.offTip=D?.tip??0,this.offBase=D?.base??0,D?.bowString&&(this.bowString=D.bowString,this.bowTips=D.bowTips),this.offhand&&this.root.add(this.offhand),t==="player"){this.rangerBow=z1(),this.root.add(this.rangerBow.group);const L=me(.1,.5,.1,s(8018492));this.quiver=L,this.root.add(L);const I=me(.11,.1,.11,s(16051932));I.position.y=.3,L.add(I)}if(t==="player"||t==="archer"){const L=new Pn(.02,.8,.02);L.translate(0,.4,0);const I=new Ue(L,s(15786684));this.nocked=I,this.root.add(I)}const F=new Qu({map:e,color:6728447,transparent:!0,depthWrite:!1,blending:fs,opacity:0});this.glintSprite=new a0(F),this.glintSprite.scale.setScalar(.01),this.root.add(this.glintSprite),this.root.traverse(L=>{L.isMesh&&(L.receiveShadow=!1)})}buildHead(t,e,n){const s=new Un,a=.25,o={s:t.skin,k:Ms(t.skin,.62),d:1840152,h:3023912,m:Ms(t.skin,.72),w:16777215,c:t.cloth,C:Ms(t.cloth,.7),t:t.trim,r:13123631,e:16734780,n:2760740,N:4864572},l=H1[t.hat],c=e(16777215,{map:n(l.front,o)}),h=e(16777215,{map:n(l.side,o)}),d=e(16777215,{map:n(l.side.map(m=>[...m].reverse().join("")),o)}),u=e(o[l.top]),p=e(o[l.side[7][0]]),g=(m,f=0,b=0,R=0)=>(m.position.set(f,b,R),s.add(m),m);g(me(a,a,a*.96,[d,h,u,p,c,e(16777215,{map:n(l.side.map(m=>m[0].repeat(8)),o)})]));const x=e(t.cloth);switch(t.hat){case"hood":{g(me(.29,.28,.27,x),0,.02,-.03),g(me(.29,.05,.07,x),0,.125,.115),g(me(.14,.12,.12,x),0,.02,-.2);break}case"jingasa":case"jingasaDark":{const m=t.hat==="jingasa",f=e(m?14727264:4867136),b=e(m?13081160:3420206);g(me(.64,.035,.64,b),0,.105,0),g(me(.44,.05,.44,f),0,.145,0),g(me(.22,.05,.22,b),0,.19,0);break}case"kabuto":case"kabutoBoss":{const m=t.hat==="kabutoBoss",f=e(m?3809830:t.trim),b=e(15777872);if(g(me(.3,.13,.3,f),0,.1,0),g(me(.32,.03,.1,b),0,.05,.13),g(me(.4,.1,.24,e(16777215,{map:n(["aaaa","tttt","aaaa"],{a:t.cloth,t:t.trim})})),0,-.03,-.09),m){for(const R of[-1,1]){const y=g(me(.05,.26,.03,b),R*.17,.3,.12);y.rotation.z=-R*.3,y.name="armor"}g(me(.3,.05,.03,b),0,.185,.12).name="armor"}else for(const R of[-1,1]){const y=g(me(.045,.22,.03,b),R*.09,.26,.12);y.rotation.z=-R*.5}break}case"mask":g(me(.07,.07,.1,e(12593724)),.05,.02,-.16);break;case"band":g(me(.06,.14,.05,e(15787724)),.05,-.02,-.15);break;case"straw":g(me(.34,.04,.34,e(14729336)),0,.13,0),g(me(.2,.07,.2,e(13281376)),0,.18,0);break}return s}applyPose(t,e,n){const s=this.look.bulk,a=t.pelvis,r=xt.hipQ.setFromAxisAngle(ja,t.pelvisYaw),o=xt.chestQ.setFromEuler(xt.e.set(t.lean,t.pelvisYaw+t.torsoYaw,t.roll,"YXZ")),l=xt.bodyQ.setFromEuler(xt.e.set(t.bodyPitch,0,t.bodyRoll,"XYZ"));xt.pivot.copy(a);const c=xt.chestTop.set(0,.5,0).applyQuaternion(o).add(a),h=xt.shR.set(-.19*s,.45,0).applyQuaternion(o).add(a),d=xt.shL.set(.19*s,.45,0).applyQuaternion(o).add(a),u=xt.headQ.copy(o).multiply(xt.q.setFromEuler(xt.e.set(t.headPitch-t.lean*.6,t.headYaw,0,"YXZ"))),p=xt.headPos.set(0,.17,.01).applyQuaternion(u).add(c),g=xt.hipR.set(-.1*s,-.02,0).applyQuaternion(r).add(a),x=xt.hipL.set(.1*s,-.02,0).applyQuaternion(r).add(a),m=xt.handR.copy(t.handR),f=xt.handL.copy(t.handL);aa(h,m,Ga),this.grip!==null?(f.copy(m).addScaledVector(t.bladeR,this.grip),f.distanceTo(d)>Ga&&(aa(d,f,Ga),m.copy(f).addScaledVector(t.bladeR,-this.grip),aa(h,m,Ga),f.copy(m).addScaledVector(t.bladeR,this.grip))):aa(d,f,Ga);const b=xt.poleR.set(-.7,-.5,-.5).applyQuaternion(o),R=xt.poleL.set(.7,-.5,-.5).applyQuaternion(o),y=this.bendR.solve(h,m,.29,.29,b,n,xt.elbowR),T=this.bendL.solve(d,f,.29,.29,R,n,xt.elbowL),w=xt.ankR.copy(t.footR).setY(t.footR.y+Qr),E=xt.ankL.copy(t.footL).setY(t.footL.y+Qr);aa(g,w,Qd),aa(x,E,Qd);const v=xt.footR.copy(w).setY(w.y-Qr),S=xt.footL.copy(E).setY(E.y-Qr),C=xt.poleKR.set(Math.sin(t.pelvisYaw)+Math.sin(t.footYawR),.4,Math.cos(t.pelvisYaw)+Math.cos(t.footYawR)),k=xt.poleKL.set(Math.sin(t.pelvisYaw)+Math.sin(t.footYawL),.4,Math.cos(t.pelvisYaw)+Math.cos(t.footYawL)),D=this.bendKR.solve(g,w,.44,.44,C,n,xt.kneeR),F=this.bendKL.solve(x,E,.44,.44,k,n,xt.kneeL);for(const Y of O1)jd(Y);const L=jd(xt.pel.copy(a));if(o.premultiply(l),r.premultiply(l),u.premultiply(l),this.torso.position.set(0,.27,0).applyQuaternion(o).add(L),this.torso.quaternion.copy(o),this.pelvisMesh.position.copy(L),this.pelvisMesh.quaternion.copy(r),this.neck.place(xt.tmp.copy(c).setY(c.y-.03),p),this.head.position.copy(p),this.head.quaternion.copy(u),this.jHead.copy(p),this.jChest.copy(this.torso.position),this.uArmR.place(h,y),this.lArmR.place(y,m),this.uArmL.place(d,T),this.lArmL.place(T,f),this.thighR.place(g,D),this.shinR.place(D,w),this.thighL.place(x,F),this.shinL.place(F,E),this.joints[0].position.copy(y),this.joints[1].position.copy(T),this.joints[2].position.copy(D),this.joints[3].position.copy(F),this.handRMesh.position.copy(m),this.handLMesh.position.copy(f),this.footRMesh.position.copy(v),this.footLMesh.position.copy(S),this.footRMesh.quaternion.setFromAxisAngle(ja,t.footYawR).premultiply(l),this.footLMesh.quaternion.setFromAxisAngle(ja,t.footYawL).premultiply(l),this.jHandR.copy(m),this.jHandL.copy(f),this.skirt){this.skirt.position.copy(L),this.skirt.position.y+=.1;const Y=(S.z-v.z)*.25;this.skirt.quaternion.copy(r).multiply(xt.q.setFromEuler(xt.e.set(Y*.4,0,0)))}this.cape&&(this.capeLift+=(Math.min(1,e/6)-this.capeLift)*(1-Math.exp(-n*5)),this.cape.position.set(0,.47,-.13*s).applyQuaternion(o).add(L),this.cape.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(.12+this.capeLift*.9-t.lean*.5,0,0)))),this.chestPlate&&(this.chestPlate.position.set(0,.3,.1*s).applyQuaternion(o).add(L),this.chestPlate.quaternion.copy(o));for(let Y=0;Y<this.shoulderPads.length;Y++){const j=this.shoulderPads[Y];j.position.copy(Y===0?h:d),j.position.y+=.03,j.quaternion.copy(o).multiply(xt.q.setFromAxisAngle(N1,(Y===0?1:-1)*.5))}const I=xt.bladeR.copy(t.bladeR).applyQuaternion(l),W=xt.edgeR.copy(t.edgeR).applyQuaternion(l);this.kind==="player"&&t.bowInHand>.5?(this.weapon.position.set(.2,-.02,.06).applyQuaternion(r).add(L),sa(this.weapon,xt.tmp.set(.15,-.55,-1).applyQuaternion(r),xt.tmp2.set(1,0,0).applyQuaternion(r))):(this.weapon.position.copy(m),sa(this.weapon,I,W));const X=xt.bladeL.copy(t.bladeL).applyQuaternion(l),nt=xt.edgeL.copy(t.edgeL).applyQuaternion(l);if(this.offhand)if(this.offKind==="buckler"){const Y=xt.tmp.subVectors(f,T).normalize();this.offhand.position.copy(f).addScaledVector(Y,-.07).addScaledVector(X,.03),sa(this.offhand,X,Y)}else this.offKind==="tate"?(this.offhand.position.copy(f).addScaledVector(nt,.06),sa(this.offhand,X,nt)):(this.offhand.position.copy(f),sa(this.offhand,X,nt));if(this.bowString&&this.bowTips&&this.offhand&&this.updateString(this.bowString,this.offhand,this.bowTips,m,t.bowDraw),this.rangerBow){const Y=this.rangerBow.group;t.bowInHand>.5?(Y.position.copy(f),sa(Y,X,nt)):(Y.position.set(.02,.28,-.17*s).applyQuaternion(o).add(L),Y.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(0,Math.PI,.55)))),this.updateString(this.rangerBow.string,Y,this.rangerBow.tips,m,t.bowInHand>.5?t.bowDraw:0)}if(this.quiver&&(this.quiver.position.set(-.12,.3,-.16*s).applyQuaternion(o).add(L),this.quiver.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(.15,0,-.35)))),this.nocked){const Y=(this.kind==="archer"?1:t.bowInHand)>.5&&t.bowDraw>.05;if(this.nocked.visible=Y,Y){const j=this.rangerBow?this.rangerBow.group:this.offhand,it=xt.tmp.subVectors(j.position,m),Lt=it.length();this.nocked.position.copy(m),this.nocked.quaternion.setFromUnitVectors(ja,it.normalize()),this.nocked.scale.set(1,Math.max(1,(Lt+.12)/.8),1)}}}updateString(t,e,n,s,a){const r=t.geometry.getAttribute("position");e.updateMatrix();const o=xt.m.copy(e.matrix).invert(),l=xt.tmp.set(0,(n[0].y+n[1].y)/2,n[0].z),c=xt.tmp2.copy(s).applyMatrix4(o);l.lerp(c,Math.min(1,a*1.15)),r.setXYZ(0,n[0].x,n[0].y,n[0].z),r.setXYZ(1,l.x,l.y,l.z),r.setXYZ(2,n[1].x,n[1].y,n[1].z),r.needsUpdate=!0}bladeWorld(t,e,n=!1){const s=n&&this.offhand?this.offhand:this.weapon;s.updateWorldMatrix(!0,!1),t.set(0,n?this.offBase:this.weaponBase,0).applyMatrix4(s.matrixWorld),e.set(0,n?this.offTip:this.weaponTip,0).applyMatrix4(s.matrixWorld)}shatterArmor(){if(this.armorBroken)return;this.armorBroken=!0,this.chestPlate&&(this.chestPlate.visible=!1);for(const e of this.shoulderPads)e.visible=!1;if(this.head.traverse(e=>{e.name==="armor"&&(e.visible=!1)}),this.skirt){const e=this.skirt.material;e.map=null,e.color.setHex(4858920),e.needsUpdate=!0}const t=Wn(this.look.cloth2);this.mats.push(t);for(const e of[this.uArmR.mesh,this.uArmL.mesh,this.joints[0],this.joints[1]])e.material=t}setFlash(t,e=16777215){for(const n of this.mats)n.emissive.setHex(e),n.emissiveIntensity=t}setGlint(t,e){const n=this.glintSprite;if(!t){n.material.opacity=0;return}const s=n.material;s.color.setHex(t==="blue"?8373503:16726826);const a=Math.min(1,e/6),r=e>20?Math.max(0,1-(e-20)/16):1;s.opacity=a*r,n.scale.setScalar((.25+.55*a)*(1+.15*Math.sin(e*.9))),n.material.rotation=e*.05,n.position.set(0,this.weaponTip*.8,0).applyQuaternion(this.weapon.quaternion).add(this.weapon.position)}dispose(){this.root.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()});for(const t of this.mats)t.dispose();for(const t of this.textures)t.dispose()}}function aa(i,t,e){Vn.subVectors(t,i);const n=Vn.length();n>e&&t.copy(i).addScaledVector(Vn,e/n)}const Ii=(i,t,e)=>new A(i,t,e);function Cn(){return{pelvis:Ii(0,.92,0),pelvisYaw:0,torsoYaw:0,lean:.05,roll:0,headYaw:0,headPitch:0,handR:Ii(-.28,1,.3),bladeR:Ii(0,.5,1).normalize(),edgeR:Ii(0,1,0),handL:Ii(.26,1.05,.22),bladeL:Ii(.2,0,1).normalize(),edgeL:Ii(0,1,0),footR:Ii(-.13,0,-.12),footL:Ii(.13,0,.14),bodyPitch:0,bodyRoll:0,bodyYaw:0,bowDraw:0,bowInHand:0,footYawL:0,footYawR:0}}function Te(i,t=Cn()){return t.pelvis.copy(i.pelvis),t.pelvisYaw=i.pelvisYaw,t.torsoYaw=i.torsoYaw,t.lean=i.lean,t.roll=i.roll,t.headYaw=i.headYaw,t.headPitch=i.headPitch,t.handR.copy(i.handR),t.bladeR.copy(i.bladeR),t.edgeR.copy(i.edgeR),t.handL.copy(i.handL),t.bladeL.copy(i.bladeL),t.edgeL.copy(i.edgeL),t.footR.copy(i.footR),t.footL.copy(i.footL),t.bodyPitch=i.bodyPitch,t.bodyRoll=i.bodyRoll,t.bodyYaw=i.bodyYaw,t.bowDraw=i.bowDraw,t.bowInHand=i.bowInHand,t.footYawL=i.footYawL,t.footYawR=i.footYawR,t}const De=(i,t,e)=>i+(t-i)*e;function Re(i,t,e,n){return n.pelvis.lerpVectors(i.pelvis,t.pelvis,e),n.pelvisYaw=De(i.pelvisYaw,t.pelvisYaw,e),n.torsoYaw=De(i.torsoYaw,t.torsoYaw,e),n.lean=De(i.lean,t.lean,e),n.roll=De(i.roll,t.roll,e),n.headYaw=De(i.headYaw,t.headYaw,e),n.headPitch=De(i.headPitch,t.headPitch,e),n.handR.lerpVectors(i.handR,t.handR,e),ei(i.bladeR,t.bladeR,e,n.bladeR),ei(i.edgeR,t.edgeR,e,n.edgeR),n.handL.lerpVectors(i.handL,t.handL,e),ei(i.bladeL,t.bladeL,e,n.bladeL),ei(i.edgeL,t.edgeL,e,n.edgeL),n.footR.lerpVectors(i.footR,t.footR,e),n.footL.lerpVectors(i.footL,t.footL,e),n.bodyPitch=De(i.bodyPitch,t.bodyPitch,e),n.bodyRoll=De(i.bodyRoll,t.bodyRoll,e),n.bodyYaw=De(i.bodyYaw,t.bodyYaw,e),n.bowDraw=De(i.bowDraw,t.bowDraw,e),n.bowInHand=De(i.bowInHand,t.bowInHand,e),n.footYawL=De(i.footYawL,t.footYawL,e),n.footYawR=De(i.footYawR,t.footYawR,e),n}function ns(i,t,e,n,s,a,r){return a.pelvis.lerpVectors(i.pelvis,t.pelvis,e),a.pelvisYaw=De(i.pelvisYaw,t.pelvisYaw,e),a.footR.lerpVectors(i.footR,t.footR,e),a.footL.lerpVectors(i.footL,t.footL,e),a.footYawL=De(i.footYawL,t.footYawL,e),a.footYawR=De(i.footYawR,t.footYawR,e),a.bodyPitch=De(i.bodyPitch,t.bodyPitch,e),a.bodyRoll=De(i.bodyRoll,t.bodyRoll,e),a.bodyYaw=De(i.bodyYaw,t.bodyYaw,e),a.torsoYaw=De(i.torsoYaw,t.torsoYaw,n),a.lean=De(i.lean,t.lean,n),a.roll=De(i.roll,t.roll,n),a.headYaw=De(i.headYaw,t.headYaw,n),a.headPitch=De(i.headPitch,t.headPitch,n),r?(tu(i.handR,t.handR,r,s,a.handR),tu(i.handL,t.handL,r,s,a.handL)):(a.handR.lerpVectors(i.handR,t.handR,s),a.handL.lerpVectors(i.handL,t.handL,s)),ei(i.bladeR,t.bladeR,s,a.bladeR),ei(i.edgeR,t.edgeR,s,a.edgeR),ei(i.bladeL,t.bladeL,s,a.bladeL),ei(i.edgeL,t.edgeL,s,a.edgeL),a.bowDraw=De(i.bowDraw,t.bowDraw,s),a.bowInHand=De(i.bowInHand,t.bowInHand,s),a}const ra=new A,jr=new A;function tu(i,t,e,n,s){ra.subVectors(i,e),jr.subVectors(t,e);const a=ra.length(),r=jr.length();return a<1e-4||r<1e-4?s.lerpVectors(i,t,n):(ra.multiplyScalar(1/a),jr.multiplyScalar(1/r),ei(ra,jr,n,ra),s.copy(e).addScaledVector(ra,a+(r-a)*n))}const Wa=new A,to=new A;function ei(i,t,e,n){const s=Math.max(-1,Math.min(1,i.dot(t)));if(s>.9999)return n.lerpVectors(i,t,e).normalize();s<-.9999?(to.set(0,1,0).addScaledVector(i,-i.y),to.lengthSq()<1e-6&&to.set(1,0,0).addScaledVector(i,-i.x),Wa.crossVectors(i,to).normalize()):Wa.crossVectors(i,t).normalize();const a=Math.acos(s)*e,r=Math.cos(a),o=Math.sin(a),l=i.x,c=i.y,h=i.z,d=Wa.x,u=Wa.y,p=Wa.z,g=d*l+u*c+p*h;return n.set(l*r+(u*h-p*c)*o+d*g*(1-r),c*r+(p*l-d*h)*o+u*g*(1-r),h*r+(d*c-u*l)*o+p*g*(1-r)),n.normalize()}function eu(i,t,e){return Te(i,e),t.hand&&e.handR.set(...t.hand),t.blade&&e.bladeR.set(...t.blade).normalize(),t.edge&&e.edgeR.set(...t.edge).normalize(),t.lhand&&e.handL.set(...t.lhand),t.lblade&&e.bladeL.set(...t.lblade).normalize(),t.ledge&&e.edgeL.set(...t.ledge).normalize(),t.torso!==void 0&&(e.torsoYaw=t.torso),t.pelvisYaw!==void 0&&(e.pelvisYaw=t.pelvisYaw),t.lean!==void 0&&(e.lean=t.lean),t.roll!==void 0&&(e.roll=t.roll),t.pelvisY!==void 0&&(e.pelvis.y=t.pelvisY),t.step!==void 0&&(e.footL.z=.14+t.step,e.footR.z=-.12-t.step*.6),t.head!==void 0&&(e.headYaw=t.head),t.headPitch!==void 0&&(e.headPitch=t.headPitch),t.bodyPitch!==void 0&&(e.bodyPitch=t.bodyPitch),t.bodyRoll!==void 0&&(e.bodyRoll=t.bodyRoll),t.draw!==void 0&&(e.bowDraw=t.draw),t.bow!==void 0&&(e.bowInHand=t.bow),e}const G1=.875,W1=.07;function nu(){return{fresh:!1,ahead:-1,airOff:new A,planted:new A,plantedYaw:0,swinging:!1,from:new A,fromYaw:0,yawE0:0,to:new A,toYaw:0,u:0,dur:.15,lift:.05,stance:1,cur:new A,curYaw:0}}const li=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},oa=i=>i*i*(3-2*i);function Y1(i,t,e,n,s,a){return t.set(e.x+(i.x*n+i.z*s)*a,i.y*a,e.z+(-i.x*s+i.z*n)*a)}function Il(i,t,e,n,s,a){const r=(i.x-e.x)/a,o=(i.z-e.z)/a;return t.set(r*n-o*s,i.y/a,r*s+o*n)}const Be=[new A,new A],X1=[0,0],q1=[0,0],ri=[0,1],K1=[0,1],$1=[1,0],Ya=new A,Ul=new A,Nl=new dn,Fl=new dn,Z1=new pi,is=new A,eo=new A,iu=new A,su=new A;class J1{feet=[nu(),nu()];init=!1;planned=null;pivotFree=-1;drop=0;inAir=!1;airLift=0;lastRoot=new A;handK=1;phase=0;walking=!1;landings=[];gait=0;reset(){this.init=!1,this.planned=null,this.pivotFree=-1}planStep(t,e,n){this.planned={foot:t,dur:Math.max(.05,e),lift:n}}isPlanted(t){return!this.inAir&&!this.feet[t].swinging&&this.pivotFree!==t}worldFoot(t){return this.feet[t].cur}update(t,e,n,s,a,r,o,l,c=1){this.landings.length=0,su.subVectors(e,this.lastRoot).setY(0),this.lastRoot.copy(e);const h=t.bowInHand>.5?0:1;this.handK=this.init?this.handK+(h-this.handK)*(1-Math.exp(-r*15)):h;const d=Math.cos(n),u=Math.sin(n),p=Math.abs(li(t.bodyPitch))>1e-4||Math.abs(li(t.bodyRoll))>1e-4;p&&(Nl.setFromEuler(Z1.set(t.bodyPitch,0,t.bodyRoll,"XYZ")),Fl.copy(Nl).invert(),is.copy(t.pelvis));for(const w of ri)eo.copy(w===0?t.footL:t.footR),p&&eo.sub(is).applyQuaternion(Nl).add(is),Y1(eo,Be[w],e,d,u,s);const g=X1;g[0]=n+t.footYawL,g[1]=n+t.footYawR;const x=this.init&&(Be[0].distanceTo(this.feet[0].cur)>2.2||Be[1].distanceTo(this.feet[1].cur)>2.2);if(!this.init||x){for(const w of ri){const E=this.feet[w];E.swinging=!1,E.planted.copy(Be[w]).setY(0),E.plantedYaw=g[w],E.cur.copy(Be[w]),E.curYaw=g[w],E.stance=1}this.init=!0,this.inAir=!1,this.airLift=0,this.pivotFree=-1,this.planned=null,this.drop=0;return}const m=Math.hypot(a.x,a.z);if(o==="air"){if(!this.inAir){this.inAir=!0,this.airLift=0;for(const v of ri)this.feet[v].airOff.subVectors(this.feet[v].cur,Be[v]).add(su)}const w=Math.exp(-r*25),E=m>8?Math.min(.08,(m-8)*.004+.03)*s:0;this.airLift+=(E-this.airLift)*(1-Math.exp(-r*Math.max(40,m*3)));for(const v of ri){const S=this.feet[v];S.swinging=!1,S.airOff.multiplyScalar(w),S.cur.copy(Be[v]).add(S.airOff),S.cur.y=Math.max(S.cur.y,this.airLift,0),S.curYaw+=li(g[v]-S.curYaw)*(1-w),S.planted.copy(S.cur).setY(0),S.plantedYaw=S.curYaw,S.stance=1}this.pivotFree=-1,this.planned=null,this.gait*=Math.exp(-r*10),this.drop*=Math.exp(-r*10),this.writeBack(t,e,n,d,u,s,p),this.applyDrop(t);return}if(this.inAir){this.inAir=!1;for(const w of ri){const E=this.feet[w];E.cur.y>.005*s&&(E.swinging=!0,E.fresh=!1,E.ahead=-1,E.to.copy(Be[w]).setY(0),E.toYaw=g[w],E.from.copy(E.cur).multiplyScalar(2).sub(E.to).setY(0),E.fromYaw=E.curYaw,E.lift=E.cur.y/s,E.u=.5,E.yawE0=.5,E.dur=.14)}}for(const w of ri)this.feet[w].stance+=r;if(o==="pivot"){const w=this.feet[l.lead];w.swinging=!1,w.plantedYaw=g[l.lead],w.cur.copy(w.planted),w.curYaw=w.plantedYaw;const E=l.lead===0?1:0,v=this.feet[E];v.swinging=!1,v.planted.copy(Be[E]).setY(0),v.plantedYaw=g[E],v.cur.copy(v.planted).setY(Math.max(Be[E].y,.04*s)),v.curYaw=v.plantedYaw,this.pivotFree=E}else{if(this.pivotFree>=0){const S=this.pivotFree,C=this.feet[S];this.pivotFree=-1,C.swinging=!0,C.from.copy(C.cur).setY(0),C.fromYaw=C.curYaw,this.predict(Be[S],a,.08,l,m,s,C.to),C.toYaw=g[S],C.lift=Math.max(.01,C.cur.y/s),C.u=.5,C.yawE0=.5,C.dur=.16}if(this.planned){const S=this.planned;this.planned=null;const C=this.feet[S.foot];if(C.swinging&&(1-C.u)*C.dur>S.dur*.5)C.ahead=-1,C.dur=Math.min(.5,S.dur/Math.max(.05,1-C.u));else{const k=C.swinging?Math.max(0,C.cur.y):0;Ya.copy(C.cur).setY(0),C.swinging&&(C.swinging=!1,C.planted.copy(Ya),C.plantedYaw=C.curYaw),this.beginStep(S.foot,Be[S.foot],g[S.foot],a,m,l,s),C.lift=Math.max(S.lift,k/s);const D=Math.asin(Math.min(1,k/(C.lift*s)))/Math.PI,F=oa(D);F>1e-6&&C.from.copy(Ya).addScaledVector(C.to,-F).multiplyScalar(1/(1-F)).setY(0),C.u=D,C.yawE0=F,C.dur=S.dur/(1-D)}C.fresh=!0}const w=l.stride>0&&m>.4?m/(l.stride*s):0;if(w>0){const S=Math.min(l.swingDur,.42/w),C=m*Math.max(0,1/w-S)/2;if(!this.walking){const D=this.feet[0].swinging?0:this.feet[1].swinging?1:-1;if(D!==-1){const F=this.feet[D],L=D===l.lead?0:.5,I=(1-F.u)*F.dur*w;this.phase=((L+Math.min(F.u*S*w,.5-I))%1+1)%1,F.ahead=C;const W=oa(F.u);W<.9&&(this.predict(Be[D],a,F.dur*(1-F.u),l,m,s,F.to,C),F.from.copy(F.cur).setY(0).addScaledVector(F.to,-W).multiplyScalar(1/(1-W)).setY(0))}else{const F=Math.hypot(this.feet[0].planted.x-Be[0].x,this.feet[0].planted.z-Be[0].z),L=Math.hypot(this.feet[1].planted.x-Be[1].x,this.feet[1].planted.z-Be[1].z),I=Math.abs(F-L)<.001*s?l.lead:F>L?0:1;this.phase=I===l.lead?.999:.499}}this.walking=!0;for(const D of ri){const F=this.feet[D],L=this.feet[D===0?1:0];if(F.swinging||L.swinging&&L.u<.5)continue;if(((F.planted.x-Be[D].x)*a.x+(F.planted.z-Be[D].z)*a.z)/m<-(C+.1*s)){this.phase=((D===l.lead?0:.5)+.999)%1;break}}const k=this.phase;this.phase=(this.phase+r*w)%1;for(const D of ri){const F=D===l.lead?0:.5,L=(this.phase-F+1)%1,I=L<(this.phase-k+1)%1||k===this.phase&&L===0,W=this.feet[D];!I||W.swinging||(this.beginStep(D,Be[D],g[D],a,m,l,s,C),W.dur=S,W.u=Math.max(0,Math.min(.5,L/w/S)),W.yawE0=oa(W.u),W.fresh=!0)}}else this.walking=!1;const E=q1;E[0]=0,E[1]=0;for(const S of ri){const C=this.feet[S];if(C.swinging)continue;const k=Math.hypot(C.planted.x-Be[S].x,C.planted.z-Be[S].z),D=Math.abs(li(C.plantedYaw-g[S])),F=e.x+(S===0?.1:-.1)*c*d*s,L=e.z+-(S===0?.1:-.1)*c*u*s,W=Math.hypot(C.planted.x-F,C.planted.z-L)/s>.6||D>1.6;w>0&&!W&&k<.6*s&&D<.95||(k>l.threshold*s||D>.95||W)&&(E[S]=k/s+(W?10:0)+(S===l.lead?.001:0))}const v=E[0]>=E[1]?K1:$1;for(const S of v){if(E[S]<=0)continue;const C=S===0?1:0,k=E[S]>=10;if(!(this.feet[C].swinging&&!l.allowBoth&&!k)&&!(this.feet[S].stance<Math.min(.06,l.swingDur*.4)&&!k)&&(this.beginStep(S,Be[S],g[S],a,m,l,s),!l.allowBoth&&!k))break}}let f=0;for(const w of ri){const E=this.feet[w];if(!E.swinging){if(w===this.pivotFree)continue;E.cur.copy(E.planted),E.curYaw=E.plantedYaw;continue}E.fresh?E.fresh=!1:E.u=Math.min(1,E.u+r/E.dur),this.predict(Be[w],a,E.dur*(1-E.u),l,m,s,Ya,E.ahead);const v=1-oa(Math.min(1,Math.max(0,(E.u-.55)/.35))),S=Math.min(1,1-Math.exp(-r*18))*v;E.to.lerp(Ya,S),E.toYaw=E.toYaw+li(g[w]-E.toYaw)*S;const C=oa(E.u);E.cur.lerpVectors(E.from,E.to,C),E.cur.y=Math.sin(Math.PI*E.u)*E.lift*s,E.curYaw=E.fromYaw+li(E.toYaw-E.fromYaw)*(E.yawE0>0?Math.max(0,(C-E.yawE0)/(1-E.yawE0)):C),f+=(w===0?1:-1)*Math.sin(Math.PI*E.u),E.u>=1-1e-6&&(E.swinging=!1,E.planted.copy(E.to).setY(0),E.plantedYaw=E.toYaw,E.cur.copy(E.planted),E.curYaw=E.plantedYaw,E.stance=0,this.landings.push({foot:w,pos:E.planted,strength:Math.min(1,l.weight*(.6+Math.min(1,m/6)*.6))}))}this.gait=f,this.writeBack(t,e,n,d,u,s,p);let b=1/0;for(const w of ri){const E=this.feet[w];if(!E.swinging)continue;const v=oa(Math.min(1,E.u));iu.copy(E.cur).lerp(eo.copy(E.to).setY(0),v),Il(iu,w===0?t.footL:t.footR,e,d,u,s),b=Math.min(b,(1-E.u)*E.dur)}const R=t.pelvis.y-au(t,c,!0,!0);this.writeBack(t,e,n,d,u,s,p);const y=t.pelvis.y-au(t,c,!this.feet[0].swinging,!this.feet[1].swinging),T=R>this.drop?Math.max(1-Math.exp(-r*25),Math.min(1,r/(b+r))):1-Math.exp(-r*10);this.drop+=(R-this.drop)*T,this.drop=Math.max(this.drop,y),this.applyDrop(t),p&&this.drop>0&&(is.y=t.pelvis.y,this.writeBack(t,e,n,d,u,s,p))}applyDrop(t){t.pelvis.y-=this.drop,t.handR.y-=this.drop*this.handK,t.handL.y-=this.drop*this.handK}writeBack(t,e,n,s,a,r,o){Il(this.feet[0].cur,t.footL,e,s,a,r),Il(this.feet[1].cur,t.footR,e,s,a,r),o&&(t.footL.sub(is).applyQuaternion(Fl).add(is),t.footR.sub(is).applyQuaternion(Fl).add(is)),t.footYawL=li(this.feet[0].curYaw-n),t.footYawR=li(this.feet[1].curYaw-n)}predict(t,e,n,s,a,r,o,l=-1){if(o.copy(t).setY(0),o.x+=e.x*n,o.z+=e.z*n,a>.3){const c=l>=0?Math.min(l,.4*r):Math.min(s.threshold*r*.6,.3*r);o.x+=e.x/a*c,o.z+=e.z/a*c}return o}beginStep(t,e,n,s,a,r,o,l=-1){const c=this.feet[t];c.swinging=!0,c.fresh=!1,c.u=0,c.yawE0=0,c.ahead=l,c.from.copy(c.planted),c.fromYaw=c.plantedYaw,this.predict(e,s,r.swingDur,r,a,o,c.to,l),c.toYaw=n;const h=c.from.distanceTo(c.to)/o;c.dur=Math.max(.06,r.swingDur*Math.min(1,.45+h*1.4),Math.abs(li(n-c.fromYaw))*.06),c.lift=Math.max(.03,r.lift*Math.min(1,.5+h*1.6))}}function au(i,t=1,e=!0,n=!0){if(Math.abs(li(i.bodyPitch))>.25||Math.abs(li(i.bodyRoll))>.25)return i.pelvis.y;const s=Math.cos(i.pelvisYaw),a=Math.sin(i.pelvisYaw);let r=i.pelvis.y;for(let o=0;o<2;o++){if(!(o===0?e:n))continue;const l=o===0?i.footL:i.footR,c=(o===0?1:-1)*.1*t;Ul.set(i.pelvis.x+c*s,0,i.pelvis.z-c*a);const h=Math.hypot(l.x-Ul.x,l.z-Ul.z),d=G1*.975;if(h>=d)continue;const u=l.y+W1+Math.sqrt(d*d-h*h)+.02;r=Math.min(r,u)}return Math.max(i.pelvis.y-.22,r)}const Q1={player:"ranger",ronin:"katana",boss:"katana",armored:"nodachi",spear:"yari",shield:"shield",duelist:"dual",archer:"archer",dummy:"dummy"},j1={ranger:{hand:[-.26,1.02,.32],blade:[.05,.55,1],edge:[1,0,0],lhand:[.24,1.1,.26],lblade:[.35,.1,1],ledge:[0,1,0],torso:-.12,lean:.08,pelvisY:.9,step:.02},katana:{hand:[-.05,1.08,.36],blade:[0,.62,.78],edge:[1,0,0],torso:-.05,lean:.06,pelvisY:.9,step:.05},nodachi:{hand:[-.2,1.45,.1],blade:[-.1,.9,-.3],edge:[1,0,0],torso:-.2,lean:.02,pelvisY:.88,step:.08},yari:{hand:[-.2,1,-.12],blade:[.04,.1,1],edge:[0,1,0],torso:-.35,lean:.06,pelvisY:.88,step:.12},shield:{hand:[-.26,1.32,.05],blade:[.02,-.03,1],edge:[0,1,0],lhand:[.12,1.02,.38],lblade:[0,1,0],ledge:[.1,0,1],torso:.05,lean:.1,pelvisY:.86,step:.1},dual:{hand:[-.26,1,.3],blade:[.1,.35,1],edge:[1,0,0],lhand:[.26,1,.26],lblade:[-.1,.35,1],ledge:[1,0,0],torso:0,lean:.15,pelvisY:.84,step:.1},archer:{hand:[-.25,.95,.12],blade:[0,-.3,1],edge:[1,0,0],lhand:[.26,1,.22],lblade:[.05,1,.2],ledge:[0,0,1],torso:0,lean:.03,pelvisY:.92,step:.05},dummy:{hand:[-.45,1.3,.05],blade:[0,-1,0],lhand:[.45,1.3,.05],torso:0,lean:0,pelvisY:.95,step:0}},Gc={r_s1:{windup:{hand:[-.38,.86,.02],blade:[-.35,-.55,-.75],edge:[0,1,0],torso:-.55,lhand:[.28,1.2,.3],pelvisY:.86,step:.1},strike:{hand:[-.08,1.2,.5],blade:[.55,.25,1],edge:[0,1,.3],torso:0,lean:.18,step:.3,pelvisY:.85},follow:{hand:[.2,1.55,.32],blade:[.55,.85,-.1],edge:[0,0,1],torso:.5,lean:.05,lhand:[.3,1.05,-.05],step:.3}},r_s2:{windup:{hand:[.12,1.62,.2],blade:[.45,.85,-.3],edge:[0,0,1],torso:.5,lean:-.05,lhand:[.32,1.05,0],step:.15},strike:{hand:[-.1,1.15,.52],blade:[-.5,-.1,1],edge:[0,1,.2],torso:0,lean:.2,step:.35,pelvisY:.84},follow:{hand:[-.38,.92,.18],blade:[-.7,-.65,.1],edge:[0,1,0],torso:-.55,lean:.25,pelvisY:.84,lhand:[.22,1.2,.35],step:.35}},r_s3:{windup:{hand:[-.5,1.18,-.05],blade:[-.85,.05,-.45],edge:[0,1,0],torso:-.8,lhand:[.25,1.2,.35],step:.2,pelvisY:.86},strike:{hand:[-.05,1.18,.55],blade:[.2,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.84},follow:{hand:[.4,1.2,.25],blade:[.95,.05,-.2],edge:[0,1,0],torso:.85,lhand:[.35,1,-.15],step:.35,pelvisY:.84}},r_s4:{windup:{hand:[-.5,1.2,-.1],blade:[-.9,.05,-.4],edge:[0,1,0],torso:-.3,lhand:[.3,1.2,.2],pelvisY:.82,step:.2},strike:{hand:[-.56,1.15,.12],blade:[-1,0,.15],edge:[0,1,0],torso:0,lean:.1,pelvisY:.8,lhand:[.4,1.25,0]},follow:{hand:[.1,1.15,.5],blade:[.6,0,1],edge:[0,1,0],torso:.2,lean:.15,pelvisY:.8,step:.3}},r_t1:{windup:{hand:[-.24,1.08,-.08],blade:[.02,.06,1],edge:[0,1,0],torso:-.35,lhand:[.22,1.2,.35],pelvisY:.87,step:.1},strike:{hand:[-.06,1.24,.56],blade:[.02,.02,1],edge:[0,1,0],torso:.15,lean:.25,step:.42,pelvisY:.84,lhand:[.28,1.08,.05]},follow:{hand:[-.06,1.24,.56],blade:[.02,.02,1],edge:[0,1,0],torso:.15,lean:.25,step:.42,pelvisY:.84,lhand:[.28,1.08,.05]}},r_t2:{windup:{hand:[-.2,1.2,0],blade:[.04,.02,1],edge:[0,1,0],torso:-.25,lhand:[.24,1.2,.35],pelvisY:.86,step:.3},strike:{hand:[-.02,1.3,.56],blade:[.05,-.02,1],edge:[0,1,0],torso:.2,lean:.25,step:.45,pelvisY:.84,lhand:[.3,1.1,0]},follow:{hand:[-.02,1.3,.56],blade:[.05,-.02,1],edge:[0,1,0],torso:.2,lean:.25,step:.45,pelvisY:.84,lhand:[.3,1.1,0]}},r_t3:{windup:{hand:[-.3,1.1,-.2],blade:[0,.05,1],edge:[0,1,0],torso:-.55,lean:-.05,lhand:[.22,1.25,.38],pelvisY:.84,step:.2},strike:{hand:[-.02,1.2,.58],blade:[0,0,1],edge:[0,1,0],torso:.25,lean:.35,step:.62,pelvisY:.76,lhand:[.3,1.05,-.1]},follow:{hand:[-.02,1.2,.58],blade:[0,0,1],edge:[0,1,0],torso:.25,lean:.35,step:.62,pelvisY:.76,lhand:[.3,1.05,-.1]}},r_st:{windup:{hand:[.05,1.45,.2],blade:[-.1,-.35,1],edge:[0,1,0],torso:.3,lhand:[.3,1.05,.05],step:.25},strike:{hand:[-.05,1.22,.56],blade:[-.05,-.1,1],edge:[0,1,0],torso:.1,lean:.25,step:.45,pelvisY:.84},follow:{hand:[-.05,1.22,.56],blade:[-.05,-.1,1],edge:[0,1,0],torso:.1,lean:.25,step:.45,pelvisY:.84}},r_ts:{windup:{hand:[.18,1.2,.45],blade:[.9,.05,.35],edge:[0,1,0],torso:.5,lhand:[.3,1.1,0],step:.35},strike:{hand:[-.1,1.18,.5],blade:[-.3,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.85},follow:{hand:[-.48,1.15,.1],blade:[-.95,0,-.2],edge:[0,1,0],torso:-.7,lean:.1,lhand:[.22,1.2,.35],step:.3}},r_hs:{windup:{hand:[-.1,1.85,-.05],blade:[0,.35,-1],edge:[1,0,0],torso:-.2,lean:-.12,lhand:[.25,1.35,.2],pelvisY:.86,step:.15},strike:{hand:[-.05,1.12,.56],blade:[0,-.3,1],edge:[1,0,0],torso:0,lean:.3,step:.5,pelvisY:.8,lhand:[.3,1,0]},follow:{hand:[-.05,.8,.45],blade:[0,-.9,.35],edge:[1,0,0],torso:0,lean:.45,step:.55,pelvisY:.76,lhand:[.32,.95,-.05]}},r_ht:{windup:{hand:[-.32,1.1,-.3],blade:[0,.08,1],edge:[0,1,0],torso:-.7,lean:-.05,lhand:[.2,1.25,.4],pelvisY:.82,step:.25},strike:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],torso:.3,lean:.4,step:.7,pelvisY:.74,lhand:[.32,1.02,-.12]},follow:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],torso:.3,lean:.4,step:.7,pelvisY:.74,lhand:[.32,1.02,-.12]}},r_bash:{windup:{lhand:[.28,1.15,.05],lblade:[.3,0,1],torso:.45,hand:[-.3,1.05,.05],pelvisY:.87,step:.1},strike:{lhand:[.12,1.3,.62],lblade:[0,.15,1],torso:-.3,lean:.2,step:.4,pelvisY:.84,hand:[-.34,1.02,-.05]},follow:{lhand:[.12,1.3,.6],lblade:[0,.15,1],torso:-.3,lean:.2,step:.4,pelvisY:.84,hand:[-.34,1.02,-.05]}},r_gale:{windup:{hand:[-.45,1,-.2],blade:[-.6,-.2,-.8],edge:[0,1,0],torso:-.7,lean:.35,pelvisY:.78,step:.4},strike:{hand:[0,1.15,.55],blade:[.2,0,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.5},follow:{hand:[.42,1.15,.2],blade:[.95,0,-.25],edge:[0,1,0],torso:.85,lean:.25,pelvisY:.8,step:.5}}},Es={overhead:{windup:{hand:[-.05,1.75,0],blade:[0,.6,-.8],edge:[1,0,0],torso:-.05,lean:-.1,step:.05,pelvisY:.9},strike:{hand:[0,1.25,.5],blade:[0,.1,1],edge:[1,0,0],lean:.25,step:.35,pelvisY:.84},follow:{hand:[.05,.85,.42],blade:[.05,-.75,.6],edge:[1,0,0],lean:.4,step:.4,pelvisY:.8}},rising:{windup:{hand:[-.35,.9,.1],blade:[-.3,-.6,-.6],edge:[0,1,0],torso:-.5,pelvisY:.86,step:.1},strike:{hand:[-.05,1.2,.5],blade:[.4,.3,1],edge:[0,1,.3],torso:0,lean:.2,step:.3,pelvisY:.85},follow:{hand:[.2,1.55,.25],blade:[.4,.9,-.2],edge:[0,0,1],torso:.5,lean:.05,step:.3}},thrust:{windup:{hand:[-.2,1.1,-.15],blade:[0,.05,1],edge:[0,1,0],torso:-.3,pelvisY:.86,step:.1},strike:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],lean:.3,step:.5,pelvisY:.8,torso:.1},follow:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],lean:.3,step:.5,pelvisY:.8,torso:.1}},horizontal:{windup:{hand:[-.5,1.2,-.1],blade:[-.9,.1,-.3],edge:[0,1,0],torso:-.9,pelvisY:.86,step:.15},strike:{hand:[0,1.15,.55],blade:[.1,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.82},follow:{hand:[.45,1.15,.15],blade:[.9,0,-.3],edge:[0,1,0],torso:.9,lean:.1,step:.35,pelvisY:.82}},crush:{windup:{hand:[0,1.95,-.1],blade:[0,.3,-1],edge:[1,0,0],torso:0,lean:-.2,pelvisY:.95,step:.1},strike:{hand:[0,1.05,.58],blade:[0,-.3,1],edge:[1,0,0],lean:.35,step:.55,pelvisY:.76},follow:{hand:[0,.7,.5],blade:[0,-.9,.3],edge:[1,0,0],lean:.5,step:.55,pelvisY:.7}},feint:{windup:{hand:[-.05,1.55,.1],blade:[0,.8,-.4],edge:[1,0,0],lean:.12,step:.2,pelvisY:.86},strike:{hand:[-.05,1.5,.15],blade:[0,.8,-.3],edge:[1,0,0],lean:.1,step:.15,pelvisY:.87},follow:{hand:[-.05,1.2,.3],blade:[0,.7,.6],edge:[1,0,0],step:.05}}},ru={thrust:{windup:{hand:[-.2,1.05,-.35],blade:[.03,.08,1],edge:[0,1,0],torso:-.45,pelvisY:.86,step:.15},strike:{hand:[-.05,1.15,.45],blade:[0,0,1],edge:[0,1,0],torso:-.05,lean:.25,step:.45,pelvisY:.82},follow:{hand:[-.05,1.15,.45],blade:[0,0,1],edge:[0,1,0],torso:-.05,lean:.25,step:.45,pelvisY:.82}},sweep:{windup:{hand:[-.3,1,.1],blade:[-1,-.1,.45],edge:[0,1,0],torso:-1,pelvisY:.82,step:.2},strike:{hand:[-.1,.95,.35],blade:[0,-.15,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.76,step:.35},follow:{hand:[.15,.95,.2],blade:[1,-.1,.25],edge:[0,1,0],torso:.95,lean:.2,pelvisY:.76,step:.35}}},ou={stab:{windup:{hand:[-.28,1.35,-.15],blade:[.02,-.04,1],torso:-.1,lean:.05,step:.1},strike:{hand:[-.16,1.3,.55],blade:[.03,-.05,1],torso:.1,lean:.2,step:.35,pelvisY:.83},follow:{hand:[-.16,1.3,.55],blade:[.03,-.05,1],torso:.1,lean:.2,step:.35,pelvisY:.83}},charge:{windup:{lhand:[.12,1.05,.3],hand:[-.3,1.3,-.05],lean:-.05,pelvisY:.84,step:.05},strike:{lhand:[.05,1.1,.55],hand:[-.3,1.25,.1],lean:.4,pelvisY:.78,step:.5},follow:{lhand:[.05,1.1,.55],hand:[-.3,1.25,.1],lean:.4,pelvisY:.78,step:.5}}},Xa={right:{windup:{hand:[-.45,1.3,0],blade:[-.7,.5,-.4],edge:[0,1,0],torso:-.6,lhand:[.25,1.05,.3],pelvisY:.82,step:.15},strike:{hand:[0,1.1,.5],blade:[.3,-.1,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.35},follow:{hand:[.3,.95,.25],blade:[.8,-.4,.1],edge:[0,1,0],torso:.5,lean:.25,pelvisY:.8,step:.35}},left:{windup:{lhand:[.45,1.3,0],lblade:[.7,.5,-.4],ledge:[0,1,0],torso:.6,hand:[-.28,1.05,.3],pelvisY:.82,step:.2},strike:{lhand:[0,1.1,.5],lblade:[-.3,-.1,1],ledge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.35},follow:{lhand:[-.3,.95,.25],lblade:[-.8,-.4,.1],ledge:[0,1,0],torso:-.5,lean:.25,pelvisY:.8,step:.35}},cross:{windup:{hand:[-.3,1.55,.05],blade:[-.4,.8,-.3],lhand:[.3,1.55,.05],lblade:[.4,.8,-.3],lean:-.1,pelvisY:.86,step:.1},strike:{hand:[.1,1.1,.5],blade:[.6,-.4,.7],lhand:[-.1,1.1,.5],lblade:[-.6,-.4,.7],lean:.3,pelvisY:.8,step:.4},follow:{hand:[.25,.9,.35],blade:[.7,-.7,.2],lhand:[-.25,.9,.35],lblade:[-.7,-.7,.2],lean:.35,pelvisY:.78,step:.4}},leap:{windup:{hand:[-.25,1.75,-.05],blade:[-.2,.7,-.6],lhand:[.25,1.75,-.05],lblade:[.2,.7,-.6],lean:-.15,pelvisY:1.35,step:.3},strike:{hand:[-.1,1.05,.5],blade:[.1,-.5,.9],lhand:[.1,1.05,.5],lblade:[-.1,-.5,.9],lean:.4,pelvisY:.78,step:.45},follow:{hand:[-.1,.85,.45],blade:[.1,-.85,.4],lhand:[.1,.85,.45],lblade:[-.1,-.85,.4],lean:.45,pelvisY:.72,step:.45}},throw:{windup:{hand:[-.32,1.55,-.2],blade:[0,1,-.2],torso:-.6,lean:-.05,step:.15},strike:{hand:[-.08,1.4,.52],blade:[0,.3,1],torso:.25,lean:.2,step:.3},follow:{hand:[.05,1.2,.45],blade:[0,-.2,1],torso:.3,lean:.2,step:.3}}},ty={windup:{hand:[-.4,1.25,0],blade:[-.6,.6,-.3],torso:-.5,step:.1},strike:{hand:[0,1.1,.5],blade:[.4,-.1,1],torso:.1,lean:.2,step:.3},follow:{hand:[.25,1,.3],blade:[.8,-.3,.2],torso:.4,lean:.2,step:.3}};function no(i,t){if(i==="ranger")return Gc[t.id]??null;const e=t.id;return i==="katana"||i==="nodachi"?t.feint?Es.feint:e==="ro_cut1"||e==="ar_cleave"||e==="bo_c1"?Es.overhead:e==="ro_cut2"||e==="bo_c2"?Es.rising:e==="ar_sweep"?Es.horizontal:e==="ar_crush"||e==="bo_red"?Es.crush:Es.thrust:i==="yari"?e==="sp_sweep"?ru.sweep:ru.thrust:i==="shield"?e==="sh_charge"?ou.charge:ou.stab:i==="dual"?e==="du_f1"?Xa.right:e==="du_f2"?Xa.left:e==="du_f3"?Xa.cross:e==="du_leap"?Xa.leap:Xa.throw:i==="archer"?ty:null}const Dn=i=>i<0?0:i>1?1:i,Xt=i=>(i=Dn(i),i*i*(3-2*i)),En=i=>(i=Dn(i),1-(1-i)*(1-i)*(1-i)),ey=i=>(i=Dn(i),i*i),io=(i,t)=>Math.pow(Dn(i),t),la=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},so=new A(-.02,1.3,.04);function ny(i){return i.type==="thrust"?{arc:!1,pow:i.heavy?2.6:2.2}:i.type==="blunt"?{arc:!1,pow:1.8}:{arc:!0,pow:i.heavy||i.finale?2.1:1.7}}const le={guardRanger:{hand:[-.3,1.02,.08],blade:[.1,.7,.7],lhand:[.1,1.32,.42],lblade:[.05,.08,1],torso:.1,lean:.1,pelvisY:.86,step:.12},parryKatana:{hand:[-.16,1.5,.3],blade:[.3,.12,1],edge:[0,1,0],torso:-.25,lean:.08,pelvisY:.84,step:.25,head:.2},guardKatana:{hand:[-.12,1.32,.38],blade:[.95,.35,.15],edge:[0,1,0],lean:-.05,pelvisY:.86,step:.1},deflectUp:{hand:[-.3,1.05,.1],blade:[.1,.6,.7],lhand:[.22,1.42,.52],lblade:[.55,.35,1],torso:-.15,lean:-.02,pelvisY:.86,step:.15},flowR:{hand:[-.36,1.08,-.1],blade:[-.2,-.2,-1],lhand:[.3,1.32,.38],lblade:[.8,.25,.7],torso:.5,lean:.2,pelvisY:.8,step:.2,roll:-.12},flowL:{hand:[-.36,1.08,-.1],blade:[-.2,-.2,-1],lhand:[.3,1.32,.38],lblade:[-.4,.25,.7],torso:-.5,lean:.2,pelvisY:.8,step:.2,roll:.12},recoil:{hand:[-.32,1.72,-.12],blade:[-.2,.8,-.6],lhand:[.35,1.2,.05],lean:-.32,pelvisY:.84,headPitch:-.2,torso:-.3,step:-.05},guardbreak:{hand:[-.5,1.25,-.05],blade:[-.8,.3,-.3],lhand:[.5,1.3,-.05],lblade:[.8,.5,.3],lean:-.35,pelvisY:.8,headPitch:-.3,step:-.05},broken:{hand:[-.3,.55,.32],blade:[-.15,-.95,.3],lhand:[.3,.7,.25],lblade:[.2,-.5,1],lean:.55,pelvisY:.62,headPitch:.45,step:.25,torso:.1},overextended:{hand:[-.1,.85,.55],blade:[.2,-.7,.7],lhand:[.25,.9,.45],lean:.62,pelvisY:.74,step:.5,headPitch:.25},fear:{hand:[-.2,1.42,.28],blade:[.2,.9,.3],lhand:[.22,1.35,.3],lean:-.22,pelvisY:.82,headPitch:-.1,step:-.1},heal:{hand:[-.25,.9,.1],blade:[-.1,-.9,.3],lhand:[.05,1.3,.2],pelvisY:.66,lean:.25,headPitch:.4,step:.2},standoffPlayer:{hand:[-.32,.95,-.12],blade:[-.3,-.35,-.9],lhand:[.2,1.15,.36],lblade:[.2,.1,1],torso:-.35,head:.3,pelvisY:.82,lean:.12,step:.35},standoffFeint:{hand:[-.05,1.5,.2],blade:[0,.8,-.3],lean:.2,step:.25,pelvisY:.84},standoffCharge:{hand:[-.1,1.7,0],blade:[0,.6,-.8],lean:.35,pelvisY:.84,step:.35},issenStrike:{hand:[-.1,1.1,.5],blade:[.2,-.1,1],edge:[0,1,0],torso:.1,lean:.35,pelvisY:.8,step:.45},issenZanshin:{hand:[-.5,1.12,-.02],blade:[-.82,-.15,-.55],edge:[0,1,0],torso:-.7,lean:.22,pelvisY:.76,step:.6,lhand:[.3,1.1,.3],head:.4},runRanger:{hand:[-.3,.98,-.05],blade:[-.15,-.25,-1],lhand:[.26,1.05,.2]},archerDraw:{lhand:[.08,1.48,.55],lblade:[.1,1,.1],ledge:[0,0,1],torso:.5,pelvisY:.9,head:-.4,step:.12},stunned:{hand:[-.3,.7,.3],blade:[-.1,-.9,.3],lhand:[.3,.8,.25],lean:.35,pelvisY:.74,headPitch:.3,step:.2},slashHit:{hand:[-.42,.95,.12],blade:[-.3,-.9,.2],lhand:[.4,1.25,.02],torso:.55,roll:.3,lean:.12,pelvisY:.72,head:.4,headPitch:-.25,step:.1},slashKneel:{hand:[-.45,.5,.15],blade:[-.2,-1,.1],lhand:[.2,.75,.3],torso:.45,roll:.35,lean:.35,pelvisY:.46,headPitch:.4,head:.3,step:.12},impaled:{hand:[-.12,1.02,.3],blade:[.1,-.8,.5],lhand:[.1,1.05,.32],lblade:[0,-.5,1],lean:.5,pelvisY:.8,headPitch:.5,step:.05,torso:.05},pulledOff:{hand:[-.2,.95,.2],blade:[0,-1,.2],lhand:[.12,1,.22],lean:-.18,pelvisY:.78,headPitch:-.3,step:-.15},thrustKneel:{hand:[-.3,.6,.2],blade:[0,-1,.2],lhand:[.15,.85,.25],lean:.15,pelvisY:.5,headPitch:.3,step:0},arched:{hand:[-.5,1.2,.1],blade:[-.6,.4,.4],lhand:[.5,1.25,.1],lean:-.35,pelvisY:.8,headPitch:-.45,step:.35},kneel:{hand:[-.3,.6,.35],blade:[0,-1,.2],lhand:[.3,.6,.35],lean:.45,pelvisY:.5,headPitch:.3,step:.2},issenKneel:{hand:[-.2,.5,.3],blade:[0,-1,.2],lhand:[.2,.55,.3],pelvisY:.45,lean:.7,headPitch:.5,step:.2},down:{hand:[-.45,.4,.2],blade:[-.5,-.2,.8],lhand:[.45,.45,.1],lean:.1,pelvisY:.2,headPitch:.1,step:.1}};function iy(i){const t=zi[i],e={hand:[-.42,1.05,.28],blade:[-.9,-.35,.3],edge:[0,1,0],torso:-.4,lean:.1,pelvisY:.84,step:.3};if(i==="slash"){const s={hand:[-.3,.95,-.1],blade:[-.2,-.3,-1],lean:.35,pelvisY:.82,step:.4},a={hand:[.25,.78,.4],blade:[.5,-.85,.2],edge:[1,0,0],torso:.35,lean:.45,pelvisY:.72,step:.6,lhand:[.35,1,-.1]};return[{t:t.dash,key:s},{t:t.windupEnd,key:{hand:[-.1,1.9,-.05],blade:[0,.3,-1],edge:[1,0,0],torso:-.25,lean:-.15,lhand:[.3,1.4,.2],pelvisY:.9,step:.25}},{t:t.release,key:{hand:[-.1,1.92,-.04],blade:[0,.4,-1],edge:[1,0,0],torso:-.32,lean:-.2,lhand:[.3,1.42,.2],pelvisY:.9,step:.25}},{t:t.contact,ease:"in",key:{hand:[-.05,1.15,.55],blade:[.2,-.3,1],edge:[1,0,0],torso:0,lean:.3,pelvisY:.8,step:.5}},{t:t.followEnd,ease:"out",key:a},{t:t.holdEnd,key:{...a,lean:.42,pelvisY:.73}},{t:t.pull,key:e},{t:t.dur,key:{}}]}if(i==="thrust"){const s={hand:[-.3,.95,-.1],blade:[-.2,-.3,-1],lean:.35,pelvisY:.82,step:.4};return[{t:t.dash,key:s},{t:t.windupEnd,key:{hand:[-.3,1.12,-.3],blade:[0,.05,1],edge:[0,1,0],torso:-.6,lhand:[.25,1.28,.45],lblade:[.1,.2,1],pelvisY:.84,step:.3}},{t:t.release,key:{hand:[-.3,1.12,-.35],blade:[0,.05,1],edge:[0,1,0],torso:-.66,lhand:[.25,1.28,.46],lblade:[.1,.2,1],pelvisY:.83,step:.3}},{t:t.contact,ease:"in",key:{hand:[0,1.25,.55],blade:[0,.02,1],edge:[0,1,0],torso:.2,lean:.3,pelvisY:.8,step:.6,lhand:[.3,1.1,0]}},{t:t.followEnd,ease:"out",key:{hand:[.01,1.25,.6],blade:[.02,.02,1],edge:[0,1,0],torso:.24,lean:.34,pelvisY:.79,step:.62,lhand:[.3,1.1,0]}},{t:t.holdEnd,key:{hand:[.02,1.27,.57],blade:[.05,.1,1],edge:[.3,1,0],torso:.25,lean:.3,pelvisY:.8,step:.6,lhand:[.3,1.1,0]}},{t:t.pull,ease:"out",key:{hand:[-.25,1.15,.12],blade:[0,.1,1],edge:[0,1,0],torso:-.2,lean:.05,pelvisY:.84,step:.35,lhand:[.15,1.3,.62],lblade:[0,.2,1]}},{t:t.pull+7,key:e},{t:t.dur,key:{}}]}const n={hand:[.15,.95,.45],blade:[.6,-.6,.4],edge:[1,0,0],torso:.4,lean:.4,pelvisY:.76,step:.55};return[{t:t.dash,key:{hand:[-.3,1.2,0],blade:[-.3,.5,-.8],lean:.2,pelvisY:.84,step:.3}},{t:t.windupEnd,key:{hand:[-.3,1.62,.05],blade:[-.3,.8,-.5],edge:[1,0,0],torso:-.45,lean:-.05,pelvisY:.86,step:.3}},{t:t.release,key:{hand:[-.3,1.66,.03],blade:[-.3,.85,-.5],edge:[1,0,0],torso:-.5,lean:-.07,pelvisY:.86,step:.3}},{t:t.contact,ease:"in",key:{hand:[-.02,1.22,.52],blade:[.35,-.25,1],edge:[1,0,0],torso:.05,lean:.28,pelvisY:.8,step:.45}},{t:t.followEnd,ease:"out",key:n},{t:t.holdEnd,key:{...n,lean:.38,pelvisY:.77}},{t:t.pull,key:{...e,lean:.12,step:.35}},{t:t.dur,key:{}}]}const Tn=Cn(),sy=Cn(),ay=Cn(),qa=new A,ao=new A,lu=new A,cu=new A,ry=new A(.05,1.48,.46),oy=new A(-.08,1.55,.02),hu=new A(-.45,1.3,0),du=new A(.45,1.25,0),ly=new A(-.1,1.02,.26),cy=new A(.1,1.05,.26),hy={px:0,pz:-1,lat:0,type:"slash",heavy:!1,amp:1},uu={id:"r_gale_seg",name:"",type:"slash",startup:Xn.contact,active:2,recovery:Xn.seg-Xn.contact-2,damage:0,posture:0,shape:{kind:"arc",range:0,halfAngle:0},lunge:0,chainFrom:0,cancelFrom:0},fu=new Map;function fa(i){let t=fu.get(i.id);return t||(t=Wx(i),(i.projectile||i.feint)&&(t={...t,release:Math.max(1,t.contact-3),windupEnd:Math.max(1,Math.min(t.windupEnd,t.contact-5))}),fu.set(i.id,t)),t}function bo(i,t){return Math.max(0,i.act.t-1+t.alpha)}const Ol=i=>i.startup-3,pu=i=>i.active+12;class dy{constructor(t){this.kind0=t,this.family=Q1[t],eu(Cn(),j1[this.family],this.stance),this.fixHands(this.stance),Te(this.stance,this.pose),Te(this.stance,this.animPose),this.prevHand.copy(this.stance.handR)}kind0;pose=Cn();animPose=Cn();target=Cn();from=Cn();entry=Cn();stance=Cn();frozen=Cn();corpse=Cn();blend=1;blendDur=.1;serial=-1;kind="";prevKind="";galeSeg=-1;stepPlanned=!1;victimKind="slash";victimPerf=-1;victimT=0;deadClock=0;dtSim=0;atkMove=null;atkT=0;atkTick=0;atkSerial=-1;replMove=null;replT=0;replEndTick=0;replSerial=-1;replEntry=Cn();replEntryVel=new A;appr={move:null,t:0,serial:-1};approachOn=!1;aimSink=0;bobK=1;perfX=0;perfZ=1;perfLatched=!1;fallX=0;fallZ=1;prevHand=new A;handVel=new A;entryVel=new A;hit=null;hitAge=99;hitSerial=-1;cache=new Map;finKeys=new Map;planter=new J1;family;fixHands(t){const e=this.family;e==="katana"?t.handL.copy(t.handR).addScaledVector(t.bladeR,-.2):e==="nodachi"?t.handL.copy(t.handR).addScaledVector(t.bladeR,-.25):e==="yari"&&(t.handL.copy(t.handR).addScaledVector(t.bladeR,.55),t.bladeL.copy(t.bladeR))}kp(t){let e=this.cache.get(t);return e||(e=eu(this.stance,t,Cn()),this.fixHands(e),this.cache.set(t,e)),e}sweepSign(t){if(t.type!=="slash")return 0;const e=no(this.family,t);if(!e||!e.follow.hand||!e.strike.hand)return 0;const n=e.follow.hand[0]-e.strike.hand[0];return Math.abs(n)<.05?0:Math.sign(n)}onHit(t,e,n,s,a,r){const o=Math.hypot(e,n)||1,l=Math.sin(t.serial*12.9898+t.id*78.233)*43758.5453,c=.85+(l-Math.floor(l))*.3;this.hit={px:e/o,pz:n/o,lat:s,type:a,heavy:r,amp:c},this.hitAge=0,this.hitSerial=t.serial}get rawPose(){return this.animPose}get landings(){return this.planter.landings}update(t,e,n,s,a,r){const o=t.act,l=Math.max(0,o.t-1+n);(t.serial!==this.serial||o.kind!==this.kind)&&this.onActionStart(t,e),o.kind==="attack"&&(this.atkMove=o.move??null,this.atkT=o.t,this.atkTick=e.tick,this.atkSerial=t.serial);const c=e.displayTick;if(this.approachOn=this.replMove!==null&&o.kind!=="attack"&&c<=this.replEndTick+1e-9,this.approachOn&&(this.appr.move=this.replMove,this.appr.t=this.replT+(c-this.replEndTick),this.appr.serial=this.replSerial),o.kind==="gale"){const R=Math.floor(Math.max(0,l-1)/Xn.seg);R!==this.galeSeg&&(this.galeSeg=R,this.snapshot(this.entry),this.entryVel.copy(this.handVel))}if(this.hitAge+=s,this.dtSim=s,this.approachOn){const R=this.replMove;this.attackPose(no(this.family,R),R,fa(R),this.appr.t,this.replEntry,this.target,this.replEntryVel)}else this.actionPose(t,e,l,this.target);const h=(t.pos.x-t.prevPos.x)*60,d=(t.pos.z-t.prevPos.z)*60,u=Math.hypot(h,d),p=Math.cos(t.yaw),g=Math.sin(t.yaw),x=u>.001?(h*p-d*g)/u:0,m=u>.001?(h*g+d*p)/u:0;this.locomotion(t,this.target,u,x,m),this.flinch(t,this.target),this.approachOn||(this.blend+=s);const f=this.blendDur<=0||this.approachOn?1:Xt(this.blend/this.blendDur);f>=1?Te(this.target,this.animPose):Re(this.from,this.target,f,this.animPose),this.fixHands(this.animPose),s>0&&(qa.subVectors(this.animPose.handR,this.prevHand).multiplyScalar(1/s),this.handVel.lerp(qa,1-Math.exp(-s*40)),this.prevHand.copy(this.animPose.handR)),Te(this.animPose,this.pose),this.pose.footYawL+=this.pose.pelvisYaw*.8,this.pose.footYawR+=this.pose.pelvisYaw*.8,lu.set(h,0,d);const b=this.feetMode(t,this.pose,l);return this.planter.update(this.pose,a,r+this.pose.bodyYaw,t.size,lu,s,b,this.stepParams(t,l,u,x,m),1),this.pose}prevKindIs(t){return this.prevKind===t}settle(t,e,n,s){return Re(this.entry,t,Xt(e/Math.max(1,n)),s)}snapshot(t){return Te(this.animPose,t),t.bodyYaw=la(t.bodyYaw),t.bodyPitch=la(t.bodyPitch),t.bodyRoll=la(t.bodyRoll),t}onActionStart(t,e){const n=t.act;this.prevKind=this.kind,this.kind=n.kind,this.serial=t.serial,this.galeSeg=-1,this.stepPlanned=!1,this.snapshot(this.from);const s=this.prevKindIs("attack")?this.atkMove:null,a=s&&!s.projectile?no(this.family,s):null;if(this.replMove=null,s&&a){const o=fa(s),l=t.replaced&&t.replaced.serial===this.atkSerial?t.replaced:null,c=Math.min(o.end,l?l.t:this.atkT+Math.max(0,e.tick-this.atkTick));Te(this.entry,this.replEntry),this.replEntryVel.copy(this.entryVel),this.attackPose(a,s,o,c,this.replEntry,this.from,this.replEntryVel),this.fixHands(this.from),this.from.bodyYaw=s.id==="r_s4"?la(this.from.bodyYaw):0,l&&(this.replMove=s,this.replT=c,this.replEndTick=this.atkTick+(l.t-this.atkT),this.replSerial=this.atkSerial)}Te(this.from,this.entry),this.entryVel.copy(this.handVel);const r=3.5;if(this.entryVel.length()>r&&this.entryVel.setLength(r),n.kind==="finished"&&(n.finisher==="issen"||n.finisher==="hajiki"||n.finisher==="standoff")&&Te(this.from,this.frozen),n.kind==="finished"&&(this.victimKind=n.finisher??"slash",this.victimPerf=n.targetId??-1,this.victimT=0,this.perfLatched=!1),n.kind==="dead"){Te(this.from,this.corpse),this.deadClock=0;const o=this.hit&&this.hitAge<.5?this.hit:null;this.fallX=o?o.px:0,this.fallZ=o?o.pz:1}this.animPose.bodyYaw=this.from.bodyYaw,this.blend=0,this.blendDur=fy(n.kind)}swingPose(t,e,n,s,a,r,o=!1,l=this.entryVel){const c=this.kp(t.windup),h=this.kp(t.strike),d=this.kp(t.follow),u=ny(e),p=u.arc?so:void 0;if(o)return Te(c,r);const g=ay;if(n.release-n.windupEnd>=1?(Re(h,c,1.06,g),g.torsoYaw=c.torsoYaw+(c.torsoYaw-h.torsoYaw)*.08):Te(c,g),s<n.windupEnd){const f=s/n.windupEnd;ns(a,c,Xt(f*1.35),Xt(f*1.12),Xt(f),r,p);const b=f*(1-f)*(1-f)*(n.windupEnd/60);return r.handR.addScaledVector(l,b),r}if(s<n.release){const f=(s-n.windupEnd)/Math.max(.001,n.release-n.windupEnd);return Re(c,g,Xt(f),r)}if(s<n.contact){const f=(s-n.release)/Math.max(.001,n.contact-n.release);return ns(g,h,Xt(f*1.5),io(f,u.pow*.6),io(f,u.pow),r,p)}if(s<n.followEnd){const f=(s-n.contact)/Math.max(.001,n.followEnd-n.contact);return ns(h,d,Xt(f*1.2),En(f),En(f),r,p)}const x=(s-n.followEnd)/Math.max(.001,n.end-n.followEnd),m=Dn((x-.2)/.8);return ns(d,this.stance,Xt(m*1.15),Xt(m),Xt(m),r,p)}attackPose(t,e,n,s,a,r,o=this.entryVel){if(this.swingPose(t,e,n,s,a,r,!1,o),e.id==="r_s4"&&(r.bodyYaw=Xt((s-Ol(e))/pu(e))*Math.PI*2),e.id==="du_leap"){const l=Dn(s/(e.startup+e.active));r.pelvis.y+=Math.sin(l*Math.PI)*.55}return r}get approach(){return this.approachOn?this.appr:null}actionPose(t,e,n,s){const a=t.act,r=this.family;Te(this.stance,s);const o=(l,c)=>Math.sin((t.age+n)*c+t.id)*l;switch(a.kind){case"attack":{const l=a.move,c=no(r,l);if(!c)return s;if(r==="archer"&&l.projectile)return this.archerShot(n,l,s);const h=fa(l);if(this.attackPose(c,l,h,n,this.entry,s),!this.stepPlanned&&!l.projectile&&!l.feint&&l.id!=="du_leap"&&l.id!=="r_s4"&&(a.lunge??0)>.3){const d=Math.min(h.contact-1,l.heavy||l.finale?12:9);n>=h.contact-d&&(this.stepPlanned=!0,this.planter.planStep(0,(h.contact-n)/60,.07))}return s}case"charge":{const l=Gc[t.act.button==="thrust"?"r_ht":"r_hs"];Te(this.kp(l.windup),s);const c=Math.min(1,n/G.chargeMax);return s.pelvis.y-=c*.05,s.handR.x+=o(.008*c,2.1),s.handR.y+=o(.008*c,2.7),s}case"guard":case"blockstun":{if(r==="ranger"?Te(this.kp(le.guardRanger),s):(r==="katana"||r==="nodachi")&&a.value===1?Te(this.kp(le.parryKatana),s):(r==="katana"||r==="nodachi")&&Te(this.kp(le.guardKatana),s),a.kind==="blockstun"){const l=1-Dn(n/10);s.lean-=.12*l,s.pelvis.z-=.05*l}return s}case"deflect":{const l=En(n/4),c=Xt((n-6)/8);return this.settle(this.kp(le.guardRanger),n,6,Tn),Re(Tn,this.kp(le.deflectUp),l*(1-c),s)}case"flow":case"flowStep":{const l=a.kind==="flow"?En(n/6):Xt(n/6);return this.settle(this.stance,n,6,Tn),Re(Tn,this.kp((a.side??1)>0?le.flowR:le.flowL),l,s)}case"dodge":{const l=a.value===1,c=a.dir??{x:0,z:-1},h=Math.cos(t.yaw),d=Math.sin(t.yaw),u=c.x*h-c.z*d,p=c.x*d+c.z*h,g=n/a.dur,x=Math.sin(Math.min(1,g*1.2)*Math.PI);if(s.pelvis.y=l?.9-x*.4:.9-x*.14,s.lean=.08+p*.25*x,s.roll=-u*.3*x,s.footL.z+=p*.2*x,s.footR.z-=p*.2*x,s.footL.x+=u*.12*x,s.footR.x+=u*.12*x,l){const m=Xt(g/.8)*Math.PI*2;Math.abs(p)>=Math.abs(u)?s.bodyPitch=m*Math.sign(p||1):s.bodyRoll=-m*Math.sign(u),s.handR.set(-.2,1.1,.2),s.handL.set(.2,1.1,.2)}return s}case"hitstun":case"stagger":return this.hitPose(t,n,s);case"recoil":case"guardbreak":{const l=Math.sin(Math.min(1,n/7)*Math.PI*.5)*(1-Xt((n-a.dur*.55)/(a.dur*.45)));return this.settle(this.stance,n,a.dur*.6,Tn),Re(Tn,this.kp(a.kind==="recoil"?le.recoil:le.guardbreak),l,s)}case"broken":{const l=Xt(n/12)*(1-Xt((n-a.dur+14)/14));return this.settle(this.stance,n,12,Tn),Re(Tn,this.kp(le.broken),l,s),s.pelvis.x+=o(.02,.09)*l,s.lean+=o(.04,.07)*l,s}case"overextended":{const l=En(n/10)*(1-Xt((n-a.dur+16)/16));return this.settle(this.stance,n,10,Tn),Re(Tn,this.kp(le.overextended),l,s)}case"fear":return Te(this.kp(le.fear),s),s.handR.x+=o(.02,1.3),s.pelvis.x+=o(.01,1.7),s;case"evade":{const l=a.side??1,c=Math.sin(Math.min(1,n/a.dur)*Math.PI);return this.settle(this.stance,n,a.dur*.5,s),s.roll=-l*.35*c,s.pelvis.y-=.12*c,s.lean-=.1*c,s}case"aim":case"quickshot":return this.aimPose(t,e,n,s);case"heal":{const l=Xt(n/10)*(1-Xt((n-a.dur+8)/8));return Re(this.stance,this.kp(le.heal),l,s)}case"standoff":return this.standoffPose(t,n,s);case"issen":return this.issenPose(n,a.dur,s);case"finisher":return this.finisherPose(t,e,n,s);case"gale":{const l=Nc(n);return this.swingPose(Gc.r_gale,uu,fa(uu),l,this.entry,s)}case"finished":return this.victimT=n,this.victimPose(t,e,n,this.victimKind,this.victimPerf,s);case"dead":return this.deadPose(t,e,s);default:return s}}hitPose(t,e,n){const s=t.act,a=s.kind==="stagger";Re(this.entry,this.stance,Xt(e/(s.dur*.7)),n);const r=this.hit&&this.hitSerial===t.serial?this.hit:hy,l=Math.sin(Math.min(1,e/(a?6:4))*Math.PI*.5)*(1-Xt((e-s.dur*.45)/(s.dur*.55))),c=(a?1.35:1)*r.amp*(r.heavy&&!a?1.15:1);return n.lean+=r.pz*.28*c*l,n.roll+=-r.px*.22*c*l,n.pelvis.x+=r.px*.05*c*l,n.pelvis.z+=r.pz*.05*c*l,n.pelvis.y-=(a?.1:.05)*l,r.type==="thrust"?(n.lean+=.42*c*l,n.headPitch+=.35*l,n.handR.lerp(ly,.55*l),n.handL.lerp(cy,.5*l)):r.type==="blunt"?(n.headPitch-=.45*l,n.lean+=r.pz*.15*l,n.handR.lerp(hu,.4*l),n.handL.lerp(du,.4*l)):(n.torsoYaw+=r.lat*.5*c*l,n.headYaw+=r.lat*.35*l,n.headPitch-=.25*l,n.handR.lerp(hu,(r.lat>0?.35:.65)*l),n.handL.lerp(du,(r.lat>0?.65:.35)*l)),this.fixHands(n),n}flinch(t,e){const n=this.hit;if(!n||this.hitAge>.4)return;const s=t.act.kind;if(s==="hitstun"||s==="stagger"||s==="dead"||s==="finished")return;const a=Math.sin(Math.min(1,this.hitAge/.05)*Math.PI*.5)*Math.exp(-this.hitAge/.1)*(n.heavy?.6:.4)*n.amp;e.lean+=n.pz*.25*a,e.roll-=n.px*.2*a,e.torsoYaw+=n.lat*.4*a,e.headPitch-=.3*a,e.pelvis.x+=n.px*.03*a,e.pelvis.z+=n.pz*.03*a}downPose(t,e,n){const s=Math.hypot(t,e)||1;return Te(this.kp(le.down),n),n.bodyPitch=1.45*(e/s),n.bodyRoll=-1.45*(t/s),n.handR.z+=e/s*.2,n.handL.z+=e/s*.2,n}collapse(t,e,n,s,a,r,o){if(a<r){const h=a/r;return ns(t,e,En(h*1.2),En(h),Xt(h),o)}const l=this.downPose(n,s,sy),c=ey((a-r)/(1-r));return Re(e,l,c,o)}victimPose(t,e,n,s,a,r){const o=t.hp>0,l=s==="issen"||s==="hajiki"||s==="standoff"?ui.victimFreeze:zi[s==="thrust"||s==="flow"?s:"slash"].contact;if(!this.perfLatched){const f=e.get(a);if(f){const b=f.pos.x-t.pos.x,R=f.pos.z-t.pos.z,y=Math.hypot(b,R)||1,T=Math.cos(t.yaw),w=Math.sin(t.yaw);this.perfX=(b*T-R*w)/y,this.perfZ=(b*w+R*T)/y}n>=l&&(this.perfLatched=!0)}const c=this.perfX,h=this.perfZ;if(s==="issen"||s==="hajiki"||s==="standoff"){const f=ui;if(n<f.victimFreeze)return Te(this.frozen,r);const b=(n-f.victimFreeze)/(f.victimDown-f.victimFreeze);if(o){const R=Math.sin(Dn(b*1.5)*Math.PI);return Re(this.frozen,this.stance,Xt(b),r),r.lean-=.3*R,r.headPitch-=.3*R,r}return this.collapse(this.frozen,this.kp(le.issenKneel),0,1,Dn(b),.45,r)}const d=zi[s==="thrust"||s==="flow"?s:"slash"];if(n<d.contact)return Re(this.entry,this.kp(s==="flow"?le.overextended:le.stunned),Xt(n/8),r);const u=this.kp(s==="flow"?le.overextended:le.stunned);if(s==="thrust"){const f=this.kp(le.impaled);if(n<d.pull)return Re(u,f,En((n-d.contact)/4),r),r.handR.y+=Math.sin(n*1.7)*.01,r.headPitch+=Math.sin(n*1.3)*.03,r;const b=this.kp(le.pulledOff),R=(n-d.pull)/(d.victimDown-d.pull);return R<.25?(Re(f,b,Xt(R/.25),r),r.pelvis.z-=.2*Xt(R/.25),r):o?Re(b,this.stance,Xt((R-.25)/.75),r):(Te(b,Tn),Tn.pelvis.z-=.2,this.collapse(Tn,this.kp(le.thrustKneel),-c,-h,Dn((R-.25)/.75),.35,r))}if(s==="flow"){const f=this.kp(le.arched);if(n<d.victimFall)return Re(u,f,En((n-d.contact)/Math.max(1,d.victimFall-d.contact)),r);const b=(n-d.victimFall)/(d.victimDown-d.victimFall);return o?Re(f,this.stance,Xt(b),r):this.collapse(f,this.kp(le.kneel),-c,-h,Dn(b),.4,r)}const p=this.kp(le.slashHit);if(n<d.victimFall)return Re(u,p,En((n-d.contact)/5),r);const g=(n-d.victimFall)/(d.victimDown-d.victimFall);if(o)return Re(p,this.stance,Xt(g),r);const x=-.85-c*.5,m=-h*.5;return this.collapse(p,this.kp(le.slashKneel),x,m,Dn(g),.4,r)}deadPose(t,e,n){if(this.deadClock+=this.dtSim,this.prevKind==="finished")return this.victimPose(t,e,this.victimT+this.deadClock*60,this.victimKind,this.victimPerf,n);const s=Dn(this.deadClock*60/34),a=this.fallX,r=this.fallZ,o=Te(this.kp(le.kneel),Tn);return o.lean=.45*r,o.roll=-.3*a,this.collapse(this.corpse,o,a,r,s,.35,n)}archerShot(t,e,n){const s=Xt((t-6)/(e.startup-10)),a=t>=e.startup-1;return Re(this.stance,this.kp(le.archerDraw),Xt(t/8),n),n.handR.copy(ry).lerp(oy,a?1:s),a&&(n.handR.x-=.08),a&&(n.handR.y+=.02),a&&(n.handR.z-=.08),n.bladeR.set(0,1,0),n.bowDraw=a?0:s,n}aimPose(t,e,n,s){const a=e.ps,r=t.act.kind==="quickshot",o=Math.asin(Math.max(-.8,Math.min(.8,e.input.aimDir.y)));let l;r?l=n<5?En(n/5):0:l=mr(a.draw,a.arrowType,e.settings.windowScale).amount;const c=r?Xt(n/3)*(1-Xt((n-14)/6)):1,h=1.45+o*.35,d=Tn;if(Te(this.stance,d),d.handR.set(.05,h,.45),d.bladeR.set(0,1,0),d.handL.set(.1,h,.54-Math.abs(o)*.1),d.bladeL.set(.22,1,-o*.8).normalize(),d.edgeL.set(0,o*.9,1).normalize(),d.torsoYaw=.55,d.pelvisYaw=.35,d.headYaw=-.85,d.headPitch=-o*.8,d.pelvis.y=.9,d.footL.z=.14+.18,d.footR.z=-.12-.18*.6,d.bowInHand=1,cu.set(-.1,1.56+o*.2,.02),d.handR.lerp(cu,l),d.bowDraw=l,!r){const u=mr(a.draw,a.arrowType,e.settings.windowScale),p=Math.min(1,u.fatigue)*.012;d.handL.x+=Math.sin(t.age*1.9)*p,d.handL.y+=Math.sin(t.age*2.3+1)*p}return Re(this.stance,d,c,s),s.bowInHand=c>.3?1:0,s}standoffPose(t,e,n){if(t.isPlayer)return Te(this.kp(le.standoffPlayer),n);const s=t.act.value??0;if(s===2){const a=Math.sin(Math.min(1,e/22)*Math.PI);return Re(this.stance,this.kp(le.standoffFeint),a,n)}if(s===1){const a=t.act.travel??18,r=this.kp(le.standoffCharge);return e<a-4?Te(r,n):Re(r,this.kp(Es.overhead.strike),En((e-a+4)/5),n)}return n}issenPose(t,e,n){const s=ui,a=this.kp(le.issenStrike),r=this.kp(le.issenZanshin);return t<=s.contact?Te(a,n):t<s.trail[1]?ns(a,r,Xt((t-s.contact)/3),En((t-s.contact)/4),En((t-s.contact)/(s.trail[1]-s.contact)),n,so):t<e-10?Te(r,n):Re(r,this.stance,Xt((t-e+10)/10),n)}finTrack(t){let e=this.finKeys.get(t);return e||(e=iy(t).map(n=>[n.t,this.kp(n.key),n.ease??"smooth"]),this.finKeys.set(t,e)),e}finisherPose(t,e,n,s){const a=t.act.finisher??"slash",r=zi[a],o=this.finTrack(a);let l=this.entry,c=0,h=!1;for(let d=0;d<o.length;d++){const[u,p,g]=o[d];if(n<=u){const x=(n-c)/Math.max(.001,u-c),m=g==="in"?io(x,2.2):g==="out"?En(x):Xt(x);g==="in"?ns(l,p,Xt(x*1.5),io(x,1.3),m,s,a==="thrust"?void 0:so):g==="out"?ns(l,p,Xt(x*1.2),m,m,s,a==="thrust"?void 0:so):Re(l,p,m,s),h=!0;break}l=p,c=u}return h||Te(o[o.length-1][1],s),this.finisherContact(t,e,a,r,n,s),!this.stepPlanned&&n>=r.release-2&&(this.stepPlanned=!0,this.planter.planStep(0,Math.max(.05,(r.contact-n)/60),.06)),s}finisherContact(t,e,n,s,a,r){const o=e.get(t.act.targetId);if(!o)return;const l=s.release-3,c=a<l?0:a<s.contact?Xt((a-l)/(s.contact-l)):a<s.holdEnd?1:1-Xt((a-s.holdEnd)/Math.max(1,s.pull-s.holdEnd));if(c<=0)return;const h=Math.cos(t.yaw),d=Math.sin(t.yaw),u=o.pos.x-t.pos.x,p=o.pos.z-t.pos.z,g=(u*d+p*h)/t.size,x=(u*h-p*d)/t.size,m=o.size/t.size,f=this.finTrack(n);let b=f[0][1];for(const[E,v]of f)E===s.contact&&(b=v);const R=Math.max(1,Math.min(1.45,1.2*m));let y,T;n==="thrust"?(y=x*.9-.02,T=g+.05-.68):(y=b.handR.x+x*.5,T=g-.14*m-.33),qa.set(y-b.handR.x,R-b.handR.y,T-b.handR.z),ao.copy(b.handR).add(qa);const w=uy(b,ao);r.handR.addScaledVector(qa,c),r.pelvis.z+=w*c,r.footL.z+=w*1.1*c,r.lean+=w*.3*c,n==="thrust"&&(ao.set(x-r.handR.x,R+.02-r.handR.y,g-r.handR.z).normalize(),ei(r.bladeR,ao,c,r.bladeR))}locomotion(t,e,n,s,a){const r=t.act.kind,l=(r==="free"||r==="guard"||r==="aim"||r==="fear"||r==="standoff"&&!t.isPlayer&&(t.act.value??0)!==2||r==="heal")&&n>=.15,c=1-Math.exp(-this.dtSim*10);if(this.aimSink+=((l&&r==="aim"?.06*Math.min(1,n/2):0)-this.aimSink)*c,this.bobK+=((r==="aim"?0:1)-this.bobK)*c,e.pelvis.y-=this.aimSink,!l)return;const h=Dn((n-2.5)/3),d=this.planter.gait;if(e.pelvis.y-=(1-Math.abs(d))*.035*Math.min(1,n/3)*this.bobK,e.lean+=a*h*.18,e.roll+=-s*h*.08,e.torsoYaw+=d*.06*Math.min(1,n/3),r==="free"){if(e.handR.z+=d*.1*h,e.handL.z-=d*.1*h,this.family==="ranger"&&h>0){const u=this.kp(le.runRanger);e.handR.lerp(u.handR,h),ei(e.bladeR,u.bladeR,h,e.bladeR)}this.fixHands(e)}}feetMode(t,e,n){if(Math.abs(la(e.bodyPitch))>.3||Math.abs(la(e.bodyRoll))>.3||e.pelvis.y>this.stance.pelvis.y+.08)return"air";const s=t.act;return s.kind==="attack"&&s.move?.id==="r_s4"&&n>=Ol(s.move)-1&&n<=Ol(s.move)+pu(s.move)?"pivot":s.kind==="issen"&&n>0&&n<=ui.travel+2||s.kind==="gale"&&Nc(n)<Xn.contact+2?"air":"ground"}stepParams(t,e,n,s,a){const r=t.act,o=this.params;switch(o.stride=0,r.kind){case"attack":{const l=r.move?fa(r.move):null,c=l?e<l.release:!1;return o.threshold=c?.24:.15,o.swingDur=.12,o.lift=.05,o.allowBoth=!1,o.lead=0,o.weight=.75,o}case"finisher":case"issen":case"gale":return o.threshold=.18,o.swingDur=.11,o.lift=.06,o.allowBoth=!1,o.lead=0,o.weight=.8,o;case"dodge":case"flowStep":case"flow":case"evade":return o.threshold=.1,o.swingDur=.1,o.lift=.07,o.allowBoth=!0,o.lead=s>.35?0:s<-.35?1:a>=0?0:1,o.weight=.65,o;case"hitstun":case"stagger":case"recoil":case"guardbreak":case"blockstun":case"overextended":{const l=this.hit;return o.threshold=.14,o.swingDur=.13,o.lift=.05,o.allowBoth=!0,o.lead=l&&l.px>.3?0:(l&&l.px<-.3,1),o.weight=.4,o}case"finished":case"dead":return o.threshold=.22,o.swingDur=.16,o.lift=.04,o.allowBoth=!0,o.lead=1,o.weight=.3,o;default:return o.threshold=Math.min(.42,.14+n*.05),o.swingDur=Math.max(.14,Math.min(.3,.3-n*.03)),o.lift=Math.min(.14,.04+n*.018),o.allowBoth=!1,o.lead=s>.5?0:s<-.5||a<-.2?1:0,o.weight=Math.min(1,.3+n*.08),o.stride=Math.min(1.4,.8+n*.12)*(1-.3*Math.min(1,Math.abs(s))),o}}params={threshold:.2,swingDur:.2,lift:.05,allowBoth:!1,lead:0,weight:.4,stride:0}}function uy(i,t){const e=i.pelvisYaw+i.torsoYaw,n=Math.cos(e),s=Math.sin(e),a=-.19,r=.45*Math.sin(i.lean),o=i.pelvis.x+a*n+r*s,l=i.pelvis.z-a*s+r*n,c=i.pelvis.y+.45*Math.cos(i.lean),h=.56,d=t.y-c;if(Math.abs(d)>=h)return 0;const u=Math.sqrt(h*h-d*d),p=t.x-o,g=t.z-l,x=Math.sqrt(Math.max(0,u*u-p*p));return Math.max(0,Math.min(.2,g-x))}function fy(i){switch(i){case"attack":case"finisher":case"issen":case"gale":case"hitstun":case"stagger":case"dead":return 0;case"deflect":case"flow":case"flowStep":case"recoil":case"guardbreak":case"broken":case"overextended":case"evade":return 0;case"blockstun":return .05;case"finished":return 0;case"free":return .14;default:return .1}}function py(i,t,e,n){const s=i.act;let a=bo(i,t),r=null,o=i.serial,l=i.isPlayer?16773328:13619151,c=i.isPlayer?1:.6;const h=e.approach,d=s.kind==="attack"?s.move:h?h.move:null;if(h&&(a=h.t,o=h.serial),d&&!d.feint&&!d.projectile&&d.type!=="blunt"){const u=d;r=fa(u).trail,i.isPlayer&&(l=u.type==="thrust"?12578559:u.heavy?16765562:16773328),u.unblockable==="red"?(l=16730672,c=1.2):u.unblockable==="blue"&&(l=9227007,c=1.1)}else if(!h){if(s.kind==="finisher"){const u=s.finisher;(u==="slash"||u==="thrust"||u==="flow")&&(r=zi[u].trail),l=16770752,c=1.4}else if(s.kind==="issen")r=ui.trail,l=16777215,c=2;else if(s.kind==="gale")o=i.serial*64+Math.floor((s.t-1)/Xn.seg),a=Nc(a),r=Xn.trail,l=11071743,c=1.6;else if(s.kind==="standoff"&&!i.isPlayer&&s.value===1){const u=s.travel??18;r=[u-3,u+6]}}return n.active=!!r&&a>=r[0]&&a<r[1],n.key=o,n.color=l,n.intensity=c,n.maxSpeed=!h&&(s.kind==="issen"||s.kind==="gale")?1/0:45,n}const my=(i,t,e=new A)=>e.set(Math.sin(i)*Math.cos(t),-Math.sin(t),Math.cos(i)*Math.cos(t)),gy=(i,t=new A)=>t.set(-Math.cos(i),0,Math.sin(i)),mu=new A,gu=new A,vy=new A,_y=new A,xy=new A,yy=new A,ln=new A,My=new A(0,1,0),by=new A,Sy=new A,wy=new A,ro=.38,Ey=.55,zn=(i,t)=>1-Math.exp(-i*t);class Ty{camera;yaw=0;pitch=ro;dist=5.9;wasAiming=!1;aimLevel=0;viewYaw=0;lastYaw=0;following=!1;aimSwing=0;target=new A(0,1.4,0);pos=new A(0,3,-5);look=new A;aimBlend=0;cine=null;cineBlend=0;cinePos=new A;cineLook=new A;focus=new A;focusW=0;cineFov=44;trauma=0;time=0;sinceManual=99;fovKick=0;sensitivity=.0024;constructor(t){this.camera=new jn(58,t,.05,900)}get aiming(){return this.aimBlend>.5}get inCinematic(){return this.cine!==null}get style(){return this.cine?this.cine.style:null}look2(t,e){t===0&&e===0||(this.yaw-=t*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.1,this.pitch+e*this.sensitivity)),this.sinceManual=0,e!==0&&(this.aimLevel=0))}shake(t){this.trauma=Math.min(1,this.trauma+t)}cinematic(t,e,n,s,a=s){if(t=t.clone().setY(0),e=e.clone().setY(0),this.cine&&this.cine.style===n&&n==="standoff"){const d=this.cine;if(d.a.copy(t),d.b.copy(e),d.t=Math.min(d.t,.5),d.dur=Math.max(d.dur,1),d.maxDur=Math.max(d.maxDur,1),ln.subVectors(e,t).setY(0),ln.lengthSq()>1e-4&&(ln.normalize(),Math.abs(ln.dot(d.axis))<Math.cos(.35))){d.axis.copy(ln);const u=mu.copy(t).add(e).multiplyScalar(.5);d.perp.set(-ln.z,0,ln.x),gu.copy(this.cinePos).sub(u).setY(0).dot(d.perp)<0&&d.perp.multiplyScalar(-1)}return}const r=t.clone().add(e).multiplyScalar(.5),o=e.clone().sub(t).setY(0);o.lengthSq()<1e-6&&o.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),o.normalize();const l=new A(-o.z,0,o.x),h=this.camera.position.clone().sub(r).setY(0).dot(l)>=0?1:-1;this.cine={a:t.clone(),b:e.clone(),axis:o,perp:l.multiplyScalar(h),style:n,t:0,dur:s,maxDur:Math.max(s,a),progress:null,side:h},this.focusW=0}track(t,e,n,s,a=null){this.cine&&(this.cine.a.copy(t).setY(0),this.cine.b.copy(e).setY(0),this.cine.progress=a,n&&this.focus.copy(n),this.focusW=n?s:0)}releaseCinematic(){this.cine&&(this.cine=null,ln.subVectors(this.cineLook,this.cinePos),ln.x*ln.x+ln.z*ln.z>1e-6&&(this.yaw=this.viewYaw=this.lastYaw=Math.atan2(ln.x,ln.z),this.following=!1,this.sinceManual=0))}reset(t){this.yaw=this.viewYaw=this.lastYaw=t,this.pitch=ro,this.following=!1,this.aimSwing=0,this.aimLevel=0,this.wasAiming=!1,this.endCinematic()}endCinematic(){this.cine=null,this.cineBlend=0}update(t,e,n){this.time+=t,this.sinceManual+=t;const s=ss(this.yaw-this.lastYaw),a=n.aiming&&!this.wasAiming;let r=null;if(!n.aiming){if(n.lockTarget)r=n.lockTarget;else if(n.threat&&this.sinceManual>1.2){const v=ln.subVectors(n.threat,e);Math.abs(ss(Math.atan2(v.x,v.z)-this.yaw))<(this.following?1.4:1)&&(r=n.threat)}}let o=!1,l=0;if(r){const v=ln.subVectors(r,e);v.x*v.x+v.z*v.z>.36&&(l=Math.atan2(v.x,v.z),this.yaw+=ss(l-this.yaw)*zn(n.lockTarget?12:8,t),o=!0),n.lockTarget&&(this.pitch+=(ro-this.pitch)*zn(2,t))}if(this.following=o,o)this.viewYaw+=ss(l+Ey-this.viewYaw)*zn(n.lockTarget?4:1.6,t),this.aimSwing=0;else if(a&&n.lockTarget&&(this.aimSwing=.3),this.aimSwing>0&&n.aiming)this.aimSwing-=t,this.viewYaw+=ss(this.yaw-this.viewYaw)*zn(18,t),this.aimSwing<=0&&(this.viewYaw=this.yaw);else{if(this.aimSwing=0,this.yaw=this.viewYaw+s,n.moveDir&&this.sinceManual>1.5&&!n.aiming){const v=ss(Math.atan2(n.moveDir.x,n.moveDir.z)-this.yaw);Math.abs(v)<1.1&&(this.yaw+=v*zn(.8,t))}this.viewYaw=this.yaw}this.yaw=ss(this.yaw),this.viewYaw=ss(this.viewYaw),this.lastYaw=this.yaw,a&&(this.aimLevel=.35),this.wasAiming=n.aiming,n.aiming||(this.aimLevel=0),this.aimLevel>0?(this.aimLevel-=t,this.pitch+=(.1-this.pitch)*zn(14,t)):!n.aiming&&this.sinceManual>2&&(this.pitch+=(ro-this.pitch)*zn(1.5,t)),this.aimBlend+=((n.aiming?1:0)-this.aimBlend)*zn(12,t);const c=5.7+Math.min(2.4,n.crowd*.5)-(n.slowmo?.6:0);this.dist+=(c-this.dist)*zn(2.5,t);const h=this.aimBlend,d=this.viewYaw,u=my(d,this.pitch,by),p=gy(d,Sy);this.target.lerp(ln.copy(e).setY(e.y+1.45),zn(14,t));const g=.45+h*.35,x=this.dist*(1-h)+2.2*h,m=wy.copy(this.target).addScaledVector(p,g).addScaledVector(u,-x);if(m.y+=h*.1,m.y=Math.max(.35,m.y),this.pos.copy(m),this.look.copy(this.target).addScaledVector(p,g).addScaledVector(u,4),this.look.y-=(1-h)*.5,this.cine){const v=this.cine;v.t+=t;const S=mu.copy(v.a).add(v.b).multiplyScalar(.5),C=v.axis,k=v.perp,D=Math.min(1,v.progress??v.t/v.dur),F=vy,L=_y;switch(v.style){case"standoff":F.copy(S).addScaledVector(k,7.5-D*1.5).setY(S.y+1.1),L.copy(S).setY(S.y+1.1);break;case"issen":F.copy(S).addScaledVector(k,3.6+D*.8).addScaledVector(C,-.8-D*.8).setY(S.y+.9),L.copy(S).setY(S.y+1.1);break;case"killcam":F.copy(v.b).addScaledVector(k,3).addScaledVector(C,-1.5).setY(v.b.y+1+D*.4),L.copy(v.b).setY(v.b.y+.9);break;default:{const I=(D-.5)*.7*v.side,W=gu.copy(k).applyAxisAngle(My,I);F.copy(S).addScaledVector(W,3.5).addScaledVector(C,-.9).setY(S.y+1.2-D*.2),L.copy(S).setY(S.y+1.1)}}this.focusW>0&&L.lerp(this.focus,Math.min(1,this.focusW)*.6),this.cineBlend===0&&(this.cinePos.copy(F),this.cineLook.copy(L)),this.cinePos.lerp(F,zn(8,t)),this.cineLook.lerp(L,zn(8,t)),v.t>=(v.progress===null?v.dur:v.maxDur)&&this.releaseCinematic()}this.cineBlend+=((this.cine?1:0)-this.cineBlend)*zn(this.cine?14:2.6,t),this.cineBlend<.001&&(this.cineBlend=0);const f=Ay(this.cineBlend),b=xy.copy(this.pos).lerp(this.cinePos,f),R=yy.copy(this.look).lerp(this.cineLook,f);this.trauma=Math.max(0,this.trauma-t*1.6);const y=this.trauma*this.trauma,T=v=>Math.sin(this.time*37+v)*.5+Math.sin(this.time*61+v*2.3)*.5;b.x+=T(1)*.22*y,b.y+=T(2)*.18*y,b.z+=T(3)*.22*y,this.camera.position.copy(b),this.camera.lookAt(R),this.camera.rotateZ(T(4)*.03*y),this.cine&&(this.cineFov=this.cine.style==="standoff"?38:44);const w=this.cineFov,E=50*(1-h)+46*h;this.fovKick*=Math.pow(.02,t),this.camera.fov=E*(1-f)+w*f-this.fovKick,this.camera.updateProjectionMatrix()}aimRay(t,e){t.copy(this.camera.position),this.camera.getWorldDirection(e)}}function ss(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Ay(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}class Ry{constructor(t){this.renderer=t,this.rt=new ni(this.width,this.height,{minFilter:Ke,magFilter:Ke,type:fi,depthBuffer:!0}),this.mat=new un({uniforms:{tScene:{value:this.rt.texture},levels:{value:20},dither:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
        }`,depthTest:!1,depthWrite:!1}),this.quad=new Ue(new Vi(2,2),this.mat),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);const e=t.domElement;e.style.imageRendering="pixelated"}renderer;scale=3;width=320;height=180;rt;quad;quadScene=new $u;quadCam=new zo(-1,1,1,-1,0,1);mat;resize(t,e,n){this.scale=Math.max(2,Math.round(e/n)),this.width=Math.ceil(t/this.scale),this.height=Math.ceil(e/this.scale),this.renderer.setPixelRatio(1),this.renderer.setSize(this.width,this.height,!1),this.rt.setSize(this.width,this.height),kf.value=1.25*2/this.height;const s=this.renderer.domElement;s.style.width=`${this.width*this.scale}px`,s.style.height=`${this.height*this.scale}px`}render(t,e){const n=this.renderer;n.setRenderTarget(this.rt),n.render(t,e),n.setRenderTarget(null),n.render(this.quadScene,this.quadCam)}dispose(){this.rt.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}function Cy(i,t,e=0,n){const s=t.act,a=s.move;if(t.isPlayer||!t.alive||s.kind!=="attack"||!a||a.feint||a.projectile)return null;const r=a.startup-(s.t+e);if(r<0||r>G.telegraphLead)return null;const o=n??{};return o.grade=a.unblockable==="red"?"red":a.unblockable==="blue"?"blue":"white",o.left=r,o.open=r/G.telegraphLead,o.band=i.win(o.grade==="red"?G.flowWindow:G.deflectWindow)/G.telegraphLead,o.issenBand=i.win(G.issenWindow)/G.telegraphLead,o}const Bl=2,Py=1.75,Ly=.36,vu=.86,_u=.8,zl=5,Dy={white:new kt(16774880),blue:new kt(5880063),red:new kt(16726826)},ky="varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Iy=`
  varying vec2 vUv;
  uniform float uOpen, uBand, uIssen, uLine, uAlpha;
  uniform vec3 uColor;
  void main(){
    float r = length(vUv);
    float R0 = ${Ly.toFixed(3)};
    float span = 0.96 - R0;
    float rc = R0 + span * uOpen;          // the closing ring
    float rb = R0 + span * uBand;          // outer edge of the answer window
    float target = step(abs(r - R0), uLine);
    // The window is a light checker of dots (never hides the fighter inside the ring).
    vec2 cell = floor(gl_FragCoord.xy);
    float checker = mod(cell.x + cell.y, 2.0);
    float band = step(R0, r) * step(r, rb) * 0.42 * checker;
    float ring = step(abs(r - rc), uLine * 1.4);
    bool inWindow = uOpen <= uBand;
    vec3 col = uColor;
    if (ring > 0.5) col = uOpen <= uIssen ? vec3(1.0, 0.82, 0.25) : inWindow ? mix(uColor, vec3(1.0), 0.65) : uColor;
    else if (target > 0.5 && inWindow) col = mix(uColor, vec3(1.0), 0.5);
    float a = max(max(target * 0.85, band), ring);
    if (a <= 0.0) discard;
    gl_FragColor = vec4(col, a * uAlpha);
  }`;class Uy{group=new Un;geo=new Vi(2,2);items=new Map;tg={};pos=new A;inv=new ae;item(t){let e=this.items.get(t);if(!e){const n=new un({uniforms:{uOpen:{value:1},uBand:{value:0},uIssen:{value:0},uLine:{value:.02},uAlpha:{value:1},uColor:{value:new kt}},vertexShader:ky,fragmentShader:Iy,transparent:!0,depthTest:!1,depthWrite:!1}),s=new Ue(this.geo,n);s.renderOrder=50,s.frustumCulled=!1,this.group.add(s),e={mesh:s,mat:n,used:!1},this.items.set(t,e)}return e}update(t,e,n,s){for(const r of this.items.values())r.used=!1;const a=e.projectionMatrix.elements[5];for(const r of t.fighters){const o=Cy(t,r,t.alpha-1,this.tg);if(!o)continue;const l=s(r.id);if(!l)continue;const c=this.item(r.id);c.used=!0;let h=Py*r.size;c.mesh.visible=!0,c.mesh.position.set(l.x,1.05*r.size,l.z);const d=this.pos.copy(c.mesh.position).applyMatrix4(this.inv.copy(e.matrixWorld).invert()),u=1/a,p=u*e.aspect,g=d.z<-.05?d.x/(-d.z*p):NaN,x=d.z<-.05?d.y/(-d.z*u):NaN;if(!(Math.abs(g)<vu&&Math.abs(x)<_u)){let y=d.x,T=d.z<-.05?d.y:Math.min(d.y,-.2*Math.abs(d.x)-.01);const w=Math.hypot(y/p,T/u)||1;y/=p*w,T/=u*w;const E=Math.min(vu/Math.max(1e-6,Math.abs(y)),_u/Math.max(1e-6,Math.abs(T)));c.mesh.position.set(y*E*p*zl,T*E*u*zl,-zl).applyMatrix4(e.matrixWorld),h=.42}c.mesh.quaternion.copy(e.quaternion),c.mesh.scale.setScalar(h);const m=c.mat.uniforms,f=G.telegraphLead;m.uOpen.value=Math.max(0,o.left-Bl)/f,m.uBand.value=Math.max(0,o.band-Bl/f),m.uIssen.value=Math.max(0,o.issenBand-Bl/f),m.uColor.value.copy(Dy[o.grade]),m.uAlpha.value=Math.min(1,(f-o.left)/4+.35);const R=2*this.pos.copy(c.mesh.position).sub(e.position).length()/(a*n);m.uLine.value=Math.min(.08,1.5*R/2/h)}for(const[r,o]of this.items)o.used||(t.get(r)?o.mesh.visible=!1:(this.group.remove(o.mesh),o.mat.dispose(),this.items.delete(r)))}clear(){for(const t of this.items.values())this.group.remove(t.mesh),t.mat.dispose();this.items.clear()}}const as=48,oo=.1,lo=32,Ny=1/240,co=new A,ho=new A,Ka=new A,Hl=new A,uo=new A;class xu{mesh;sb=new Float32Array(as*3);st=new Float32Array(as*3);stime=new Float64Array(as);sseg=new Int32Array(as);head=0;count=0;now=0;segId=0;wasActive=!1;dashing=!1;lastKey=Number.NaN;pos;alpha;index;geo;mat;constructor(t){const e=lo*2;this.pos=new Float32Array(e*3),this.alpha=new Float32Array(e),this.index=new Uint16Array((lo-1)*6),this.geo=new Ne,this.geo.setAttribute("position",new We(this.pos,3)),this.geo.setAttribute("alpha",new We(this.alpha,1)),this.geo.setIndex(new We(this.index,1)),this.geo.setDrawRange(0,0),this.mat=new un({uniforms:{color:{value:new kt(t)},intensity:{value:1}},vertexShader:`attribute float alpha; varying float vA; varying float vEdge;
        void main(){ vA = alpha; vEdge = mod(float(gl_VertexID), 2.0); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 color; uniform float intensity; varying float vA; varying float vEdge;
        void main(){ float a = vA * mix(0.25, 1.0, vEdge); gl_FragColor = vec4(color * intensity, a); }`,transparent:!0,depthWrite:!1,side:hn,blending:fs}),this.mesh=new Ue(this.geo,this.mat),this.mesh.frustumCulled=!1}setColor(t,e=1){this.mat.uniforms.color.value.setHex(t),this.mat.uniforms.intensity.value=e}get sampleCount(){return this.count}get drawnIndices(){return this.geo.drawRange.count}update(t,e,n,s,a=0,r=45){if(this.now+=s,n){(!this.wasActive||a!==this.lastKey)&&(this.segId++,this.dashing=!1);const o=this.count>0?this.head:-1,l=o>=0&&this.sseg[o]===this.segId;if(!l||s>0){let c=!1;if(l){const d=o*3,u=Math.hypot(t.x-this.sb[d],t.y-this.sb[d+1],t.z-this.sb[d+2]),p=this.now-this.stime[o],g=this.count>1?this.idx(1):-1,x=u/Math.max(p,1/240);this.dashing=x>(this.dashing?r*.5:r),this.dashing?this.segId++:g>=0&&this.sseg[g]===this.segId&&this.now-this.stime[g]<Ny&&(c=!0)}c||(this.head=this.count===0?0:(this.head+1)%as,this.count=Math.min(as,this.count+1));const h=this.head;this.sb[h*3]=t.x,this.sb[h*3+1]=t.y,this.sb[h*3+2]=t.z,this.st[h*3]=e.x,this.st[h*3+1]=e.y,this.st[h*3+2]=e.z,this.stime[h]=this.now,this.sseg[h]=this.segId}}for(this.wasActive=n,this.lastKey=a;this.count>1&&this.now-this.stime[this.idx(this.count-2)]>=oo;)this.count--;this.count===1&&this.now-this.stime[this.head]>oo&&(this.count=0),this.build()}idx(t){return(this.head-t+as*2)%as}sampleAt(t,e,n,s){if(this.count===0)return-1;const a=this.stime[this.head];if(t>a+1e-7)return-1;for(;e.m<this.count&&this.stime[this.idx(e.m)]>t;)e.m++;if(e.m>=this.count)return-1;const r=this.idx(e.m);if(e.m===0)return n.fromArray(this.sb,r*3),s.fromArray(this.st,r*3),this.sseg[r];const o=this.idx(e.m-1);if(this.sseg[r]!==this.sseg[o])return-1;const l=this.stime[r],c=this.stime[o],h=c>l?(t-l)/(c-l):0;n.fromArray(this.sb,r*3),Hl.fromArray(this.sb,o*3),Ka.fromArray(this.st,r*3).sub(n);const d=Ka.length();uo.fromArray(this.st,o*3).sub(Hl);const u=uo.length();return n.lerp(Hl,h),d>1e-5&&u>1e-5?(ei(Ka.multiplyScalar(1/d),uo.multiplyScalar(1/u),h,Ka),s.copy(n).addScaledVector(Ka,d+(u-d)*h)):s.fromArray(this.st,r*3).lerp(uo.fromArray(this.st,o*3),h),this.sseg[r]}cursor={m:0};build(){let t=0,e=-1;this.cursor.m=0;for(let n=0;n<lo;n++){const s=oo*n/(lo-1),a=this.sampleAt(this.now-s,this.cursor,co,ho),r=n*2;if(a>=0){this.pos[r*3]=co.x,this.pos[r*3+1]=co.y,this.pos[r*3+2]=co.z,this.pos[r*3+3]=ho.x,this.pos[r*3+4]=ho.y,this.pos[r*3+5]=ho.z;const o=1-s/oo,l=o*o*.6;if(this.alpha[r]=l,this.alpha[r+1]=l,n>0&&a===e){const c=r-2;this.index[t++]=c,this.index[t++]=c+1,this.index[t++]=c+2,this.index[t++]=c+1,this.index[t++]=c+3,this.index[t++]=c+2}}else this.alpha[r]=0,this.alpha[r+1]=0;e=a}this.geo.setDrawRange(0,t),this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("alpha").needsUpdate=!0,this.geo.getIndex().needsUpdate=!0}dispose(){this.geo.dispose(),this.mat.dispose()}}class Fy{mesh;list=[];pos;col;cap;constructor(t=600){this.cap=t,this.pos=new Float32Array(t*6),this.col=new Float32Array(t*6);const e=new Ne;e.setAttribute("position",new We(this.pos,3)),e.setAttribute("color",new We(this.col,3)),this.mesh=new c0(e,new hh({vertexColors:!0,transparent:!0,blending:fs,depthWrite:!1})),this.mesh.frustumCulled=!1}burst(t,e,n,s,a={}){const r=new kt(n);for(let o=0;o<e;o++){this.list.length>=this.cap&&this.list.shift();const l=new A(Math.random()-.5,Math.random()-.5+(a.up??.3),Math.random()-.5).normalize();a.dir&&l.lerp(a.dir,1-(a.spread??.6)).normalize(),l.multiplyScalar(s*(.4+Math.random()*.8));const c=(a.life??.35)*(.5+Math.random()*.8);this.list.push({p:t.clone(),v:l,life:c,max:c,color:r.clone().offsetHSL(0,0,(Math.random()-.5)*.15),g:a.gravity??9})}}update(t){let e=0;for(let s=this.list.length-1;s>=0;s--){const a=this.list[s];if(a.life-=t,a.life<=0){this.list.splice(s,1);continue}a.v.y-=a.g*t,a.v.multiplyScalar(1-2.5*t),a.p.addScaledVector(a.v,t)}for(const s of this.list){const a=s.life/s.max,r=s.p.clone().addScaledVector(s.v,-.035);this.pos.set([s.p.x,s.p.y,s.p.z,r.x,r.y,r.z],e*6),this.col.set([s.color.r*a,s.color.g*a,s.color.b*a,0,0,0],e*6),e++}this.pos.fill(0,e*6),this.col.fill(0,e*6);const n=this.mesh.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("color").needsUpdate=!0,n.setDrawRange(0,e*2)}}class yu{points;list=[];pos;col;size;alpha;cap;constructor(t,e){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t);const n=new Ne;n.setAttribute("position",new We(this.pos,3)),n.setAttribute("color",new We(this.col,3)),n.setAttribute("size",new We(this.size,1)),n.setAttribute("alpha",new We(this.alpha,1));const s=new un({uniforms:{scale:{value:600}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vA;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = vA * smoothstep(0.5, 0.15, r); gl_FragColor = vec4(vC, a); }`,transparent:!0,depthWrite:!1,blending:e?fs:ma});this.points=new ef(n,s),this.points.frustumCulled=!1}setViewportHeight(t){this.points.material.uniforms.scale.value=t*.9}emit(t,e,n){for(let s=0;s<e;s++){this.list.length>=this.cap&&this.list.shift();const a=new A(Math.random()-.5,Math.random()-.5+(n.up??0),Math.random()-.5).normalize();n.dir&&a.lerp(n.dir,1-(n.spread??.6)).normalize(),a.multiplyScalar(n.speed*(.3+Math.random()));const r=n.life*(.6+Math.random()*.7),o=t.clone();n.jitter&&o.add(new A((Math.random()-.5)*n.jitter,(Math.random()-.5)*n.jitter,(Math.random()-.5)*n.jitter)),this.list.push({p:o,v:a,life:r,max:r,size:n.size*(.6+Math.random()*.8),grow:n.grow??0,color:new kt(n.color),g:n.gravity??0,drag:n.drag??1.5,alpha:n.alpha??1})}}update(t){let e=0;for(let s=this.list.length-1;s>=0;s--){const a=this.list[s];if(a.life-=t,a.life<=0||a.p.y<-.2){this.list.splice(s,1);continue}a.v.y-=a.g*t,a.v.multiplyScalar(Math.max(0,1-a.drag*t)),a.p.addScaledVector(a.v,t),a.p.y<.02&&a.g>0&&(a.p.y=.02,a.v.set(0,0,0)),a.size+=a.grow*t}for(const s of this.list){const a=s.life/s.max;this.pos.set([s.p.x,s.p.y,s.p.z],e*3),this.col.set([s.color.r,s.color.g,s.color.b],e*3),this.size[e]=s.size,this.alpha[e]=s.alpha*Math.min(1,a*2.5),e++}for(let s=e;s<this.cap;s++)this.alpha[s]=0;const n=this.points.geometry;for(const s of["position","color","size","alpha"])n.getAttribute(s).needsUpdate=!0;n.setDrawRange(0,e)}}class Oy{group=new Un;list=[];geo=new ph(.85,1,48);spawn(t,e,n=.5,s=6,a=!0){const r=new ba({color:e,transparent:!0,opacity:.8,blending:fs,depthWrite:!1,side:hn}),o=new Ue(this.geo,r);o.position.copy(t),a&&(o.rotation.x=-Math.PI/2),o.scale.setScalar(.2),this.group.add(o),this.list.push({mesh:o,life:n,max:n,grow:s})}update(t,e){for(let n=this.list.length-1;n>=0;n--){const s=this.list[n];s.life-=t;const a=1-s.life/s.max;s.mesh.scale.setScalar(.2+s.grow*(1-(1-a)*(1-a))),s.mesh.material.opacity=.8*(1-a),s.mesh.rotation.x===0&&s.mesh.quaternion.copy(e.quaternion),s.life<=0&&(this.group.remove(s.mesh),s.mesh.material.dispose(),this.list.splice(n,1))}}}class By{mesh;i=0;born;cap;time=0;constructor(t=64){this.cap=t;const e=zy(),n=new ba({map:e,transparent:!0,depthWrite:!1,color:5900810,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-2}),s=new Vi(1,1);s.rotateX(-Math.PI/2),this.mesh=new xo(s,n,t),this.mesh.count=0,this.born=new Array(t).fill(-1),this.mesh.frustumCulled=!1}add(t,e,n){const s=new ae().compose(new A(t,.015+this.i*1e-4,e),new dn().setFromAxisAngle(new A(0,1,0),Math.random()*6.28),new A(n,1,n));this.mesh.setMatrixAt(this.i,s),this.born[this.i]=this.time,this.i=(this.i+1)%this.cap,this.mesh.count=Math.min(this.cap,Math.max(this.mesh.count,this.i===0?this.cap:this.i)),this.mesh.instanceMatrix.needsUpdate=!0}update(t){this.time+=t}clear(){this.mesh.count=0,this.i=0}}function zy(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#fff";for(let n=0;n<14;n++){const s=10+Math.random()*26,a=Math.random()*Math.PI*2,r=Math.random()*30;t.beginPath(),t.arc(64+Math.cos(a)*r,64+Math.sin(a)*r,s,0,Math.PI*2),t.fill()}const e=new dh(i);return e.colorSpace=cn,e}function Hy(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,255,0.8)"),e.addColorStop(.4,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[s,a]of[[128,6],[6,128]]){const r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-s/2,64-a/2,s,a)}const n=new dh(i);return n.colorSpace=cn,n}const Mu={slash:["KeyJ"],thrust:["KeyK"],guard:["ShiftLeft","ShiftRight","KeyL"],dodge:["Space"],aim:["KeyQ"],quickshot:["KeyE"],focus:["KeyV"],heal:["KeyR"],gale:["KeyF"],standoff:["KeyT"],lock:["Tab","KeyC"],arrow1:["Digit1"],arrow2:["Digit2"],arrow3:["Digit3"]},bu={slash:[0],thrust:[2],lock:[1]},Su={slash:[2],thrust:[3],dodge:[1],standoff:[0],guard:[4],quickshot:[5],aim:[6],fire:[7],focus:[10],lock:[11],heal:[13],gale:[12],arrowNext:[15]};class Vy{constructor(t){this.el=t,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.lastDevice="kbm",(e.code==="Escape"||e.code==="KeyP")&&(this.pausePressed.v=!0),this.noteTap(e.code,null))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.clear()}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{if(!this.locked&&!this.lockAttempted&&document.pointerLockElement!==t){this.lockAttempted=!0;try{const n=t.requestPointerLock?.();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}e.button!==0&&this.addMouse(e.button);return}this.addMouse(e.button)}),window.addEventListener("mouseup",e=>this.mouse.delete(e.button)),window.addEventListener("mousemove",e=>{document.pointerLockElement===t?(this.lookDX+=e.movementX,this.lookDY+=e.movementY):(this.mouse.size>0||e.buttons&4)&&(this.lookDX+=e.movementX*.6,this.lookDY+=e.movementY*.6)}),window.addEventListener("wheel",e=>{this.wheelSteps+=Math.sign(e.deltaY)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{const e=this.locked;this.locked=document.pointerLockElement===t,e&&!this.locked&&(this.lockAttempted=!1)})}el;keys=new Set;mouse=new Set;prevHeld={};wheelSteps=0;lookDX=0;lookDY=0;tapped=new Set;prevPad=new Set;pausePressed={v:!1};locked=!1;lockAttempted=!1;lastDevice="kbm";touch=null;addMouse(t){this.mouse.add(t),this.lastDevice="kbm",this.noteTap(null,t)}noteTap(t,e){for(const n of ia)t&&Mu[n]?.includes(t)&&this.tapped.add(n),e!==null&&bu[n]?.includes(e)&&this.tapped.add(n)}releasePointer(){document.pointerLockElement===this.el&&document.exitPointerLock()}sample(t){const e=_h();e.camYaw=t;const n={};for(const m of ia)n[m]=!!(Mu[m]?.some(f=>this.keys.has(f))||bu[m]?.some(f=>this.mouse.has(f)));let s=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),a=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),r=this.lookDX+((this.keys.has("ArrowRight")?1:0)-(this.keys.has("ArrowLeft")?1:0))*14,o=this.lookDY+((this.keys.has("ArrowDown")?1:0)-(this.keys.has("ArrowUp")?1:0))*8;this.lookDX=0,this.lookDY=0;const l=navigator.getGamepads?.()??[],c=Array.from(l).find(m=>m&&m.connected)??null,h=new Set;if(c){c.buttons.forEach((R,y)=>{(R.pressed||R.value>.5)&&h.add(y)});for(const R of ia)Su[R]?.some(y=>h.has(y))&&(n[R]=!0);const m=R=>Math.abs(R)<.18?0:R,f=m(c.axes[0]??0),b=-m(c.axes[1]??0);(f||b)&&(s=f,a=b,this.lastDevice="pad"),r+=m(c.axes[2]??0)*18,o+=m(c.axes[3]??0)*10,h.has(9)&&!this.prevPad.has(9)&&(this.pausePressed.v=!0),h.size&&(this.lastDevice="pad"),h.has(14)&&!this.prevPad.has(14)&&(this.wheelSteps-=1);for(const R of ia)Su[R]?.some(y=>h.has(y)&&!this.prevPad.has(y))&&this.tapped.add(R)}if(this.prevPad=h,this.touch?.active){const m=this.touch.sample();for(const f of ia)this.touch.held[f]&&(n[f]=!0);for(const f of m.taps)this.tapped.add(f);(m.mx||m.my)&&(s=m.mx,a=m.my),r+=m.lookDX,o+=m.lookDY,(m.mx||m.my||m.taps.size||m.lookDX)&&(this.lastDevice="touch")}const d=Math.hypot(s,a);d>1&&(s/=d,a/=d);const u=Math.sin(t),p=Math.cos(t),g=-Math.cos(t),x=Math.sin(t);e.move={x:u*a+g*s,z:p*a+x*s},this.wheelSteps!==0&&(this.tapped.add("arrowNext"),this.wheelSteps=0);for(const m of ia){const f=!!n[m],b=!!this.prevHeld[m],R=this.tapped.has(m);(f&&!b||R)&&(e.pressed[m]=!0),(!f&&b||R&&!f)&&(e.released[m]=!0),e.held[m]=f||R&&!b}return this.prevHeld=n,this.tapped.clear(),{frame:e,lookDX:r,lookDY:o}}}class Gy{constructor(t,e){this.onActivate=e,this.root=document.createElement("div"),this.root.className="touch",this.root.innerHTML=`
      <div class="t-zone left"></div><div class="t-zone right"></div>
      <div class="t-stick"><div class="t-knob"></div></div>
      <div class="t-btns">
        <button class="t-b big" data-b="slash">斬<small>베기</small></button>
        <button class="t-b big" data-b="thrust">突<small>찌르기</small></button>
        <button class="t-b" data-b="guard">盾<small>방패</small></button>
        <button class="t-b" data-b="dodge">避<small>회피</small></button>
        <button class="t-b" data-b="aim" data-latch="1">弓<small>조준</small></button>
      </div>
      <div class="t-row">
        <button class="t-s" data-b="quickshot">속사</button>
        <button class="t-s" data-b="gale">질풍</button>
        <button class="t-s" data-b="heal">회복</button>
        <button class="t-s" data-b="standoff">대치</button>
        <button class="t-s" data-b="lock">락온</button>
        <button class="t-s" data-b="arrowNext">화살</button>
      </div>`,t.appendChild(this.root),this.base=this.root.querySelector(".t-stick"),this.knob=this.root.querySelector(".t-knob");const n=this.root.querySelector(".t-zone.left"),s=this.root.querySelector(".t-zone.right");n.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0];this.stick={id:o.identifier,x0:o.clientX,y0:o.clientY,x:o.clientX,y:o.clientY},this.base.style.left=`${o.clientX}px`,this.base.style.top=`${o.clientY}px`,this.base.classList.add("on")},{passive:!1}),s.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0];this.look={id:o.identifier,x0:o.clientX,y0:o.clientY,x:o.clientX,y:o.clientY}},{passive:!1}),window.addEventListener("touchmove",r=>{for(const o of Array.from(r.changedTouches))this.stick&&o.identifier===this.stick.id?(this.stick.x=o.clientX,this.stick.y=o.clientY):this.look&&o.identifier===this.look.id&&(this.lookDX+=(o.clientX-this.look.x)*1.6,this.lookDY+=(o.clientY-this.look.y)*1.2,this.look.x=o.clientX,this.look.y=o.clientY)},{passive:!0});const a=r=>{for(const o of Array.from(r.changedTouches))this.stick&&o.identifier===this.stick.id&&(this.stick=null,this.base.classList.remove("on"),this.knob.style.transform=""),this.look&&o.identifier===this.look.id&&(this.look=null)};window.addEventListener("touchend",a),window.addEventListener("touchcancel",a),this.root.querySelectorAll("[data-b]").forEach(r=>{const o=r.dataset.b;r.addEventListener("touchstart",c=>{if(c.preventDefault(),r.dataset.latch){this.aimLatched=!this.aimLatched,r.classList.toggle("on",this.aimLatched),this.held.aim=this.aimLatched,this.aimLatched&&this.taps.add("aim");return}this.held[o]=!0,this.taps.add(o),r.classList.add("on")},{passive:!1});const l=c=>{c.preventDefault(),!r.dataset.latch&&(this.held[o]=!1,r.classList.remove("on"))};r.addEventListener("touchend",l),r.addEventListener("touchcancel",l)}),window.addEventListener("touchstart",()=>this.activate(),{passive:!0,capture:!0})}onActivate;root;held={};taps=new Set;stick=null;look=null;knob;base;aimLatched=!1;lookDX=0;lookDY=0;active=!1;activate(){this.active||(this.active=!0,document.body.classList.add("touch-ui"),this.onActivate())}setVisible(t){this.root.style.display=t&&this.active?"":"none"}sample(){let t=0,e=0;if(this.stick){const s=this.stick.x-this.stick.x0,a=this.stick.y-this.stick.y0,r=Math.hypot(s,a),o=56,l=Math.min(1,r/o);r>6&&(t=s/r*l,e=-a/r*l);const c=r>o?s/r*o:s,h=r>o?a/r*o:a;this.knob.style.transform=`translate(${c}px, ${h}px)`}const n={mx:t,my:e,lookDX:this.lookDX,lookDY:this.lookDY,taps:new Set(this.taps)};return this.lookDX=0,this.lookDY=0,this.taps.clear(),n}}const Bf=2,Wy=25,Yy=64,Vl=1e-4,cs=(i,t,e)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):t,In=(i,t)=>i+Math.random()*(t-i),Xy=()=>typeof performance<"u"?performance.now():Date.now();function or(i){try{i.disconnect()}catch{}}function Qn(...i){for(let t=0;t<i.length-1;t++)i[t].connect(i[t+1])}function gn(i,t){const e=i.createGain();return e.gain.value=t,e}function Ts(i,t,e,n=.7){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function As(i,t,e="sine"){const n=i.createOscillator();return n.type=e,n.frequency.value=t,n}function Wc(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function wu(i,t){if(typeof i.createStereoPanner!="function")return null;const e=i.createStereoPanner();return e.pan.value=cs(t,-1,1),e}class qy{constructor(t,e,n,s,a,r,o){this.ctx=t,this.noiseBuf=e,this.out=n,this.busNodes=s,this.t=a,this.p=r,this.onDone=o}ctx;noiseBuf;out;busNodes;t;p;onDone;pending=0;done=!1;hz(t){return cs(t*this.p,20,this.ctx.sampleRate/2-100)}env(t){const e=this.t+(t.at??0),n=Math.max(.001,t.a??.002),s=t.h??0,a=e+n+s+Math.max(.005,t.d),r=Math.max(Vl*2,t.g),o=this.ctx.createGain();return o.gain.setValueAtTime(Vl,e),o.gain.linearRampToValueAtTime(r,e+n),s>0&&o.gain.setValueAtTime(r,e+n+s),o.gain.exponentialRampToValueAtTime(Vl,a),{g:o,t0:e,end:a}}track(t,e,n){t.stop(n+.02),this.pending++,t.onended=()=>{or(t),e.forEach(or),--this.pending<=0&&this.settle()}}settle(){this.pending>0||this.done||(this.done=!0,this.busNodes.forEach(or),this.onDone())}tone(t){const e=this.ctx,{g:n,t0:s,end:a}=this.env(t),r=As(e,this.hz(t.f),t.type);r.frequency.setValueAtTime(this.hz(t.f),s),t.f2!==void 0&&r.frequency.exponentialRampToValueAtTime(this.hz(t.f2),s+(t.st??a-s));const o=t.filt?Ts(e,t.filt[0],this.hz(t.filt[1]),t.filt[2]):null;if(o?Qn(r,o,n,this.out):Qn(r,n,this.out),t.vib){const l=As(e,t.vib[0]),c=gn(e,t.vib[1]);l.connect(c),c.connect(r.detune),l.start(s),this.track(l,[c],a)}r.start(s),this.track(r,o?[o,n]:[n],a)}noise(t){const e=this.ctx,{g:n,t0:s,end:a}=this.env(t),r=t.type??"bandpass",o=t.q??(r==="bandpass"?1:.7),l=Ts(e,r,this.hz(t.f),o);if(l.frequency.setValueAtTime(this.hz(t.f),s),t.f2!==void 0){const g=t.st??(t.f3!==void 0?(a-s)/2:a-s);l.frequency.exponentialRampToValueAtTime(this.hz(t.f2),s+g),t.f3!==void 0&&l.frequency.exponentialRampToValueAtTime(this.hz(t.f3),a)}const c=e.sampleRate/2,h=this.hz(t.f2!==void 0?Math.sqrt(t.f*t.f2):t.f),d=r==="bandpass"?h/o:r==="highpass"?c-h:h,u=gn(e,cs(.5*Math.sqrt(c/Math.max(d,1)),.5,6)),p=Wc(e,this.noiseBuf);Qn(p,l,u,n,this.out),p.start(s,Math.random()*(Bf-.2)),this.track(p,[l,u,n],a)}}function xi(i,t,e,n,s,a=0){e.forEach((r,o)=>{i.tone({f:t*r*In(.998,1.002),at:a,a:.001,d:n/(1+o*.5),g:s/(1+o*.6)})})}const tr={swingLight:i=>i.noise({f:600,f2:2600,f3:1400,st:.06,q:1.4,a:.025,d:.13,g:.6}),swingHeavy:i=>{i.noise({f:280,f2:1500,f3:600,st:.12,q:1.1,a:.07,d:.26,g:.6}),i.noise({type:"lowpass",f:450,a:.08,d:.22,g:.25})},swingThrust:i=>{i.noise({f:1800,f2:3800,q:2.2,a:.008,d:.075,g:.75}),i.noise({type:"highpass",f:5e3,a:.004,d:.03,g:.35})},swingEnemy:i=>i.noise({f:420,f2:1900,f3:900,st:.08,q:1.2,a:.04,d:.18,g:.5}),hitFlesh:i=>{i.tone({f:120,f2:45,st:.12,d:.16,g:.85}),i.noise({type:"lowpass",f:2200,f2:400,d:.08,g:.5}),i.noise({f:1e3,q:1.2,d:.045,g:.3})},hitHeavy:i=>{i.tone({f:95,f2:34,st:.22,d:.3,g:1}),i.tone({type:"triangle",f:62,f2:30,d:.24,g:.35}),i.noise({type:"lowpass",f:1500,f2:220,d:.18,g:.6}),i.noise({f:2600,q:1.5,d:.04,g:.3})},hitEffective:i=>{tr.hitFlesh(i),i.noise({type:"highpass",f:3200,d:.03,g:.55}),i.noise({f:5200,f2:1800,q:3,d:.09,g:.3}),i.tone({type:"square",f:1600,f2:500,d:.045,g:.07})},block:i=>{xi(i,520,[1,2.41,3.93],.13,.3),i.noise({f:1800,q:1.4,d:.05,g:.5}),i.tone({f:190,f2:120,d:.08,g:.35})},deflect:i=>{const t=In(1e3,1300);i.noise({type:"highpass",f:2800,d:.035,g:1}),i.noise({f:6500,q:2,d:.07,g:.35}),xi(i,t,[1,2.76,5.4,8.93],1.1,.42),i.tone({f:t*1.006,d:.9,g:.15})},bounce:i=>{i.tone({f:230,f2:140,d:.1,g:.6}),i.noise({f:750,q:2,d:.06,g:.45}),xi(i,720,[1,2.32,4.1],.28,.13,.004)},glance:i=>{i.noise({f:3e3,f2:4400,q:9,a:.01,d:.15,g:.5}),i.noise({f:5600,f2:4800,q:12,a:.015,d:.13,g:.3}),i.noise({type:"highpass",f:6e3,d:.02,g:.2})},haft:i=>{i.tone({f:400,f2:260,d:.06,g:.5}),i.tone({type:"triangle",f:950,d:.03,g:.18}),i.noise({f:1300,q:3,d:.04,g:.4})},bash:i=>{i.tone({f:140,f2:52,st:.14,d:.2,g:.95}),i.noise({type:"lowpass",f:1e3,f2:200,d:.13,g:.55}),i.noise({f:520,q:1.6,d:.08,g:.4}),xi(i,410,[1,2.7],.16,.08)},flow:i=>{i.noise({f:1100,f2:5200,q:4,a:.06,d:.26,g:.45}),xi(i,1760,[1,2.76,5.4],.55,.12,.08)},issen:i=>{i.noise({type:"highpass",f:5e3,d:.05,g:.5}),i.noise({f:1800,f2:9500,q:12,a:.005,d:.38,g:.7}),xi(i,2350,[1,2.76,5.4],1.4,.13,.01),i.tone({f:72,f2:28,st:.5,a:.004,d:.95,g:1}),i.tone({f:44,a:.02,d:1.3,g:.4}),i.noise({f:3e3,f2:1400,q:.7,at:.05,a:.3,d:1.8,g:.12})},finisher:i=>{i.tone({type:"sawtooth",f:55,filt:["lowpass",320],a:.75,d:.45,g:.22}),i.tone({type:"sawtooth",f:55.6,filt:["lowpass",320],a:.75,d:.45,g:.22}),i.tone({f:110,f2:138,a:.7,d:.4,g:.1}),i.noise({type:"lowpass",f:250,f2:700,a:.75,d:.4,g:.2})},finisherImpact:i=>{i.noise({f:1500,f2:6e3,q:3,d:.12,g:.55}),tr.hitHeavy(i),i.tone({f:60,f2:24,st:.6,d:1,g:.9}),i.noise({type:"lowpass",f:320,d:.55,g:.3})},guardBreak:i=>{xi(i,380,[1,2.2,3.71,5.93],.38,.36),i.noise({f:1500,q:1,d:.1,g:.7}),i.noise({type:"lowpass",f:700,f2:150,d:.22,g:.5}),i.tone({f:110,f2:48,d:.26,g:.9})},postureBreak:i=>{i.tone({f:92,f2:34,st:.4,d:.75,g:1}),i.noise({type:"lowpass",f:260,d:.4,g:.3}),xi(i,660,[1,2.76,5.4],1,.16,.02)},perfectDodge:i=>{i.noise({f:500,f2:3200,f3:1500,st:.12,q:1.5,a:.05,d:.3,g:.4}),i.tone({f:2093,at:.05,d:.6,g:.13}),i.tone({f:3136,at:.1,d:.45,g:.08})},dodge:i=>{i.noise({f:900,f2:2200,f3:1200,st:.07,q:.9,a:.03,d:.15,g:.3}),i.noise({type:"lowpass",f:700,d:.1,g:.12})},bowDraw:i=>{i.tone({type:"sawtooth",f:34,f2:56,filt:["bandpass",900,4],a:.05,d:.3,g:.7}),i.noise({f:600,f2:900,q:6,a:.05,d:.3,g:.12})},bowRelease:i=>{i.tone({type:"triangle",f:165,f2:112,st:.08,d:.35,g:.6}),i.tone({f:330,f2:225,st:.06,d:.2,g:.2}),i.noise({f:2e3,q:1,d:.05,g:.35}),i.noise({type:"highpass",f:1500,at:.01,d:.1,g:.2})},bowPerfect:i=>{tr.bowRelease(i),i.tone({f:2637,at:.02,d:.7,g:.14}),i.tone({f:3951,at:.04,d:.45,g:.07})},arrowWhiz:i=>{i.tone({f:2700,f2:1300,a:.06,d:.34,g:.08}),i.noise({f:3200,f2:1500,q:6,a:.06,d:.34,g:.3})},arrowHit:i=>{i.tone({f:210,f2:90,d:.09,g:.7}),i.noise({f:850,q:2,d:.05,g:.45}),i.tone({type:"triangle",f:430,f2:300,d:.14,g:.08,vib:[38,30]})},arrowHeadshot:i=>{i.noise({type:"highpass",f:2600,d:.025,g:.75}),i.noise({f:1500,q:1,d:.05,g:.35}),tr.arrowHit(i)},arrowBlock:i=>{xi(i,2200,[1,2.76,5.4],.18,.16),i.noise({type:"highpass",f:4e3,d:.02,g:.4})},glintBlue:i=>{i.tone({f:2500,d:.35,g:.42}),i.tone({f:5e3,d:.15,g:.1})},glintRed:i=>{i.tone({type:"sawtooth",f:220,filt:["lowpass",1400],a:.01,h:.12,d:.17,g:.2}),i.tone({type:"sawtooth",f:227,filt:["lowpass",1400],a:.01,h:.12,d:.17,g:.2}),i.tone({type:"square",f:110,filt:["lowpass",600],d:.3,g:.1})},cue:i=>{i.tone({type:"square",f:1320,filt:["lowpass",3200],d:.07,g:.16}),i.tone({f:2640,d:.04,g:.07})},kill:i=>{i.tone({f:90,f2:45,d:.25,g:.5}),i.noise({type:"lowpass",f:300,d:.15,g:.2})},resolve:i=>{[880,1320,1760,2640].forEach((t,e)=>i.tone({f:t,f2:t*1.05,at:e*.06,a:.02,d:.6,g:.08})),i.noise({f:3e3,f2:6500,q:2,a:.2,d:.4,g:.05})},heal:i=>{i.tone({f:330,a:.25,d:.6,g:.15,vib:[4,6]}),i.tone({f:495,a:.3,d:.6,g:.1}),i.tone({type:"triangle",f:660,a:.35,d:.5,g:.05})},fear:i=>{i.noise({type:"lowpass",f:150,a:.3,h:.4,d:.8,g:.14}),i.tone({f:45,a:.3,h:.3,d:.9,g:.16,vib:[6,40]}),i.tone({type:"sawtooth",f:58,f2:50,filt:["lowpass",200],a:.4,d:.8,g:.1})},shieldOpen:i=>{i.noise({f:1800,q:1,d:.03,g:.7}),i.noise({f:700,q:3,d:.1,g:.35}),i.tone({f:260,f2:140,d:.1,g:.4}),i.noise({f:2400,q:1.2,at:.04,d:.025,g:.45})},armorShatter:i=>{for(let t=0;t<6;t++)xi(i,In(700,3500),[1,2.76],In(.2,.6),.1,In(0,.08));i.noise({type:"highpass",f:2e3,d:.4,g:.55}),i.noise({f:800,d:.2,g:.55}),i.tone({f:120,f2:50,d:.2,g:.5})},standoffTension:i=>{i.tone({type:"sawtooth",f:55,filt:["lowpass",260],a:1.4,h:.3,d:.6,g:.18}),i.tone({type:"sawtooth",f:55.4,filt:["lowpass",260],a:1.4,h:.3,d:.6,g:.18}),i.tone({f:110,a:1.4,h:.2,d:.6,g:.08,vib:[.8,10]}),i.noise({f:200,q:2,a:1.5,h:.2,d:.6,g:.12}),i.tone({f:1760,a:1.6,d:.5,g:.02,vib:[5,8]})},standoffStrike:i=>{i.noise({f:2500,f2:8500,q:6,d:.15,g:.7}),i.noise({type:"highpass",f:4e3,d:.04,g:.5}),i.tone({f:66,f2:25,st:.5,d:1,g:1}),i.noise({type:"lowpass",f:400,d:.6,g:.3})},waveStart:i=>{i.tone({f:120,f2:50,st:.25,d:.6,g:1}),i.tone({f:185,f2:75,st:.12,d:.25,g:.3}),i.noise({type:"lowpass",f:1300,f2:300,d:.08,g:.55}),i.noise({f:250,q:1,d:.3,g:.2})},waveClear:i=>{i.tone({f:565,f2:587.33,st:.18,a:.15,h:.45,d:.6,g:.15,vib:[5,12]}),i.tone({f:1130,f2:1174.66,st:.18,a:.15,h:.45,d:.5,g:.025}),i.noise({f:1200,q:3,a:.1,h:.4,d:.5,g:.08})},victory:i=>{[440,523.25,587.33].forEach((t,e)=>{const n=e===2;i.tone({type:"triangle",f:t,at:e*.2,d:n?1.3:.55,g:.3,vib:n?[5.5,10]:void 0}),i.tone({f:t*2,at:e*.2,d:n?.8:.3,g:.08}),i.noise({f:t*4,q:4,at:e*.2,d:.02,g:.12})}),i.tone({type:"triangle",f:146.83,at:.4,d:1.2,g:.15})},defeat:i=>{i.tone({type:"triangle",f:220,f2:110,a:.05,d:1.4,g:.25}),i.tone({f:110,f2:55,a:.05,d:1.5,g:.3}),i.tone({type:"sawtooth",f:222,f2:111,filt:["lowpass",500],a:.05,d:1.3,g:.06})},footstep:i=>{i.noise({f:1400,q:.8,a:.01,d:.06,g:.14}),i.noise({type:"lowpass",f:500,d:.05,g:.08})},uiSelect:i=>{i.tone({f:1800,d:.03,g:.15}),i.noise({type:"highpass",f:5e3,d:.01,g:.1})},fireIgnite:i=>{i.noise({type:"lowpass",f:300,f2:2200,a:.15,d:.5,g:.35});for(let t=0;t<8;t++)i.noise({type:"highpass",f:In(2500,5e3),at:In(0,.6),d:In(.01,.022),g:In(.2,.4)})}},Ky={deflect:.35,issen:.6,finisher:.35,finisherImpact:.45,postureBreak:.35,guardBreak:.2,standoffTension:.45,standoffStrike:.55,waveStart:.45,waveClear:.4,victory:.35,defeat:.4,perfectDodge:.25,flow:.2,glintBlue:.2,glintRed:.15,bowPerfect:.2,resolve:.3,heal:.25,fear:.25,armorShatter:.3,kill:.1},$y=new Set(["victory","defeat","waveClear","uiSelect","glintBlue","glintRed","cue","heal","resolve"]);function Zy(i){const t=i.createBuffer(1,Math.floor(i.sampleRate*Bf),i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function Jy(i,t,e){const n=Math.floor(i.sampleRate*t),s=Math.floor(i.sampleRate*.012),a=i.createBuffer(2,n,i.sampleRate);for(let r=0;r<2;r++){const o=a.getChannelData(r);let l=0;for(let c=s;c<n;c++){const h=c/n;l+=(Math.random()*2-1-l)*(.85-.7*h),o[c]=l*Math.pow(1-h,e)}}return a}function Eu(i,t,e,n,s){const a=i.currentTime;t.gain.cancelScheduledValues(a),t.gain.setValueAtTime(t.gain.value,a),t.gain.linearRampToValueAtTime(0,a+s),e[0].onended=()=>[...e,...n,t].forEach(or),e.forEach(r=>r.stop(a+s+.05))}class Qy{ctx=null;master=null;slowLp=null;hallIn=null;noiseBuf=null;volume=.8;muted=!1;timeScale=1;active=0;disabled=!1;last=new Map;amb=null;ambWanted=!1;draw=null;constructor(){}unlock(){if(!this.disabled)try{if(this.ctx&&this.ctx.state==="closed"&&this.teardown(),!this.ctx){const t=typeof window<"u"?window:void 0,e=t?.AudioContext??t?.webkitAudioContext;if(!e){this.disabled=!0;return}this.ctx=new e,this.build(this.ctx)}this.ctx.state!=="running"&&this.ctx.resume().then(()=>{this.ambWanted&&this.buildAmbience()},()=>{}),this.ambWanted&&this.buildAmbience()}catch{this.teardown(),this.disabled=!0}}get ready(){return!!this.ctx&&!!this.master&&this.ctx.state==="running"}setMasterVolume(t){this.volume=cs(t,0,1),this.applyMaster()}setMuted(t){this.muted=!!t,this.applyMaster()}play(t,e={}){const{ctx:n,master:s,noiseBuf:a}=this;if(!n||!s||!a||n.state!=="running")return null;const r=tr[t];if(!r)return null;let o=null;try{const l=Xy();if(l-(this.last.get(t)??-1/0)<Wy||this.active>=Yy)return null;const c=cs(e.volume??1,0,4);if(c<=0)return null;this.last.set(t,l);let h=cs(e.pitch??1,.25,4);$y.has(t)||(h*=In(.97,1.03));const d=gn(n,c),u=e.pan?wu(n,e.pan):null,p=u?[d,u]:[d],g=p[p.length-1];g.connect(s),u&&d.connect(u);const x=Ky[t];if(x&&this.hallIn){const m=gn(n,x);Qn(g,m,this.hallIn),p.push(m)}return this.active++,o=new qy(n,a,d,p,n.currentTime+.005,h,()=>{this.active--}),r(o),o.settle(),{stop:()=>{try{d.gain.cancelScheduledValues(n.currentTime),d.gain.setTargetAtTime(0,n.currentTime,.02)}catch{}}}}catch{return o?.settle(),null}}startAmbience(){this.ambWanted=!0,this.buildAmbience()}stopAmbience(){this.ambWanted=!1;const t=this.amb;if(this.amb=null,!(!t||!this.ctx))try{window.clearTimeout(t.timer),Eu(this.ctx,t.out,t.srcs,t.nodes,.4)}catch{}}setDrawTension(t){const e=this.ctx;if(e)try{if(t===null||!Number.isFinite(t)){const o=this.draw;this.draw=null,o&&Eu(e,o.out,o.srcs,o.nodes,.08);return}if(e.state!=="running")return;const n=this.draw??(this.draw=this.buildDraw(e));if(!n)return;const s=cs(t,0,1),a=e.currentTime,r=(o,l)=>{o.setTargetAtTime(l,a,.05)};r(n.out.gain,.1+.55*s),r(n.noiseF.frequency,380+s*900),r(n.saw.frequency,20+s*38),r(n.sawF.frequency,700+s*1500),r(n.lfo.frequency,4+s*10)}catch{}}setTimeScale(t){this.timeScale=cs(t,.05,1);const e=this.ctx;if(!(!e||!this.slowLp))try{const n=e.currentTime,s=this.timeScale,a=s>=.999?2e4:Math.max(900,18e3*s*s);this.slowLp.frequency.setTargetAtTime(Math.min(a,e.sampleRate/2-100),n,.08),this.amb?.wind.playbackRate.setTargetAtTime(this.ambRate(),n,.15)}catch{}}build(t){this.noiseBuf=Zy(t);const e=gn(t,this.muted?0:this.volume),n=Ts(t,"lowpass",Math.min(2e4,t.sampleRate/2-100),.5),s=t.createDynamicsCompressor();s.threshold.value=-14,s.knee.value=12,s.ratio.value=5,s.attack.value=.003,s.release.value=.2,Qn(e,n,s,t.destination);const a=t.createConvolver();a.buffer=Jy(t,2.4,2.8),Qn(a,gn(t,.7),e),this.master=e,this.slowLp=n,this.hallIn=a,this.setTimeScale(this.timeScale)}teardown(){try{window.clearTimeout(this.amb?.timer)}catch{}try{this.ctx?.close().catch(()=>{})}catch{}this.ctx=this.master=this.slowLp=this.hallIn=this.noiseBuf=this.amb=this.draw=null,this.active=0}applyMaster(){if(!(!this.ctx||!this.master))try{this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.02)}catch{}}ambRate(){return .72+.28*this.timeScale}buildAmbience(){const{ctx:t,master:e,noiseBuf:n}=this;if(!(!t||!e||!n||this.amb||t.state==="closed"))try{const s=t.currentTime,a=gn(t,0);a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+2),a.connect(e);const r=Wc(t,n);r.playbackRate.value=this.ambRate();const o=Ts(t,"lowpass",520,.6),l=gn(t,.055),c=Ts(t,"bandpass",850,4),h=gn(t,.025);Qn(r,o,l,a),Qn(r,c,h,a);const d=As(t,.07),u=As(t,.113),g=[[d,.038,l.gain],[d,.018,h.gain],[u,220,o.frequency],[u,300,c.frequency]].map(([x,m,f])=>{const b=gn(t,m);return x.connect(b),b.connect(f),b});r.start(s,Math.random()),d.start(s),u.start(s),this.amb={out:a,wind:r,srcs:[r,d,u],nodes:[o,l,c,h,...g],timer:0},this.scheduleCricket()}catch{}}scheduleCricket(){const t=this.amb;t&&(t.timer=window.setTimeout(()=>{this.amb===t&&(this.chirp(t),this.scheduleCricket())},In(400,2200)))}chirp(t){const e=this.ctx;if(!(!e||e.state!=="running"))try{const n=e.currentTime+.02,s=2+Math.floor(Math.random()*3),a=In(.006,.014),r=As(e,In(4300,5e3)*this.ambRate()),o=gn(e,0);for(let h=0;h<s;h++){const d=n+h*.045;o.gain.setValueAtTime(0,d),o.gain.linearRampToValueAtTime(a,d+.008),o.gain.linearRampToValueAtTime(0,d+.03)}const l=wu(e,In(-.8,.8)),c=l?[o,l]:[o];Qn(r,...c,t.out),r.onended=()=>[r,...c].forEach(or),r.start(n),r.stop(n+s*.045+.02)}catch{}}buildDraw(t){if(!this.master||!this.noiseBuf)return null;const e=gn(t,0),n=gn(t,1),s=As(t,20,"sawtooth"),a=Ts(t,"bandpass",700,5),r=gn(t,.4),o=Wc(t,this.noiseBuf),l=Ts(t,"bandpass",380,7),c=gn(t,.3),h=As(t,4),d=gn(t,.6);Qn(s,a,r,n),Qn(o,l,c,n),Qn(n,e,this.master),h.connect(d),d.connect(n.gain);const u=t.currentTime;return s.start(u),o.start(u,Math.random()),h.start(u),{out:e,noiseF:l,saw:s,sawF:a,lfo:h,srcs:[s,o,h],nodes:[n,a,r,l,c,d]}}}const jy={kbm:{slash:"좌클릭/J",thrust:"우클릭/K",guard:"Shift",dodge:"Space",aim:"Q",quick:"E",heal:"R",gale:"F",standoff:"T",lock:"Tab"},pad:{slash:"□",thrust:"△",guard:"L1",dodge:"○",aim:"L2",quick:"R1",heal:"↓",gale:"↑",standoff:"×",lock:"R3"},touch:{slash:"斬",thrust:"突",guard:"盾",dodge:"避",aim:"弓",quick:"속사",heal:"회복",gale:"질풍",standoff:"대치",lock:"락온"}},Tu=[{type:"standard",kan:"矢",name:"일반"},{type:"heavy",kan:"貫",name:"관통"},{type:"fire",kan:"火",name:"화전"}];function re(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}function tM(i){return i.arch?i.arch.isBoss?Mf(i,"slash").result==="effective"?"slash":"thrust":i.arch.weakness:null}class eM{root=re("div");hpFill;hpLag;poFill;pips=[];arrowSlots=[];reticle;ring;reticleLabel;tags=new Map;layer=re("div");waveEl;promptEl;tipEl;comboEl;helpEl;flashEl;vignetteEl;fpsEl;flash=0;hurt=0;waveTimer=0;tipTimer=0;recent=new Map;time=0;fpsAcc=0;fpsN=0;device="kbm";constructor(t){this.root.id="hud",t.appendChild(this.root),this.root.appendChild(re("div","letterbox top")),this.root.appendChild(re("div","letterbox bottom")),this.flashEl=re("div"),this.flashEl.id="flash",this.vignetteEl=re("div"),this.vignetteEl.id="vignette",this.root.append(this.flashEl,this.vignetteEl,this.layer);const e=re("div","player-panel");e.appendChild(re("div","name-row","레인저 <small>숏소드 · 버클러 · 활</small>"));const n=re("div","bar");this.hpLag=re("b"),this.hpFill=re("i"),n.append(this.hpLag,this.hpFill);const s=re("div","bar posture");this.poFill=re("i"),s.appendChild(this.poFill);const a=re("div","resolve");for(let o=0;o<G.resolveMax;o++){const l=re("div","pip");this.pips.push(l),a.appendChild(l)}a.appendChild(re("small","","결의")),e.append(n,s,a),this.root.appendChild(e);const r=re("div","arrow-panel");Tu.forEach((o,l)=>{const c=re("div","arrow-slot",`<b>${o.kan}</b>${l+1} ${o.name} <span class="n">0</span>`);this.arrowSlots.push(c),r.appendChild(c)}),this.root.appendChild(r),this.reticle=re("div"),this.reticle.id="reticle",this.reticle.innerHTML='<svg viewBox="0 0 70 70"><circle class="ring" cx="35" cy="35" r="30"/><circle class="dot" cx="35" cy="35" r="2"/><path d="M35 8v8M35 54v8M8 35h8M54 35h8" stroke="rgba(239,230,210,.6)" stroke-width="1.5"/></svg><div class="label"></div>',this.ring=this.reticle.querySelector(".ring"),this.reticleLabel=this.reticle.querySelector(".label"),this.root.appendChild(this.reticle),this.waveEl=re("div","",'<div class="t"></div><div class="s"></div>'),this.waveEl.id="wave",this.promptEl=re("div"),this.promptEl.id="prompt",this.tipEl=re("div"),this.tipEl.id="tip",this.comboEl=re("div"),this.comboEl.id="combo",this.helpEl=re("div"),this.helpEl.id="help",this.fpsEl=re("div"),this.fpsEl.id="fps",this.root.append(this.waveEl,this.promptEl,this.tipEl,this.comboEl,this.helpEl,this.fpsEl),this.renderHelp()}k(t){return`<span class="k">${jy[this.device][t]}</span>`}renderHelp(){const t=e=>this.k(e);this.helpEl.innerHTML=`<h4>조작 <small style="font-size:12px;opacity:.6">H: 숨기기</small></h4>
      <table>
      <tr><td>${t("slash")}</td><td>베기 (누르고 있으면 강베기)</td></tr>
      <tr><td>${t("thrust")}</td><td>찌르기 (누르고 있으면 강찌르기)</td></tr>
      <tr><td>${t("guard")}</td><td>방패 막기 · <b>링이 닿을 때 누르면 튕기기</b></td></tr>
      <tr><td colspan="2" class="ring-legend"><span class="rl w">○</span> 흰 링 막기·튕기기 <span class="rl b">○</span> 파랑 튕기기만 <span class="rl r">○</span> 빨강 흘리기·회피</td></tr>
      <tr><td>${t("guard")}+${t("dodge")}</td><td><b>흘리기</b> (빨간 공격도)</td></tr>
      <tr><td>${t("guard")}+${t("slash")}</td><td>방패 치기</td></tr>
      <tr><td>적 타격 직전 공격</td><td><b>일섬</b></td></tr>
      <tr><td>${t("dodge")}</td><td>회피 (두 번: 구르기)</td></tr>
      <tr><td>${t("aim")} 누른 채 ${t("slash")}</td><td>활 당기기 → 만작에 놓기</td></tr>
      <tr><td>${t("quick")} · 1/2/3</td><td>속사 · 화살 종류</td></tr>
      <tr><td>${t("gale")} · ${t("heal")}</td><td>질풍참(결의2) · 회복(결의1)</td></tr>
      <tr><td>${t("standoff")} · ${t("lock")}</td><td>대치 · 락온</td></tr>
      </table>`}toggleHelp(){this.helpEl.classList.toggle("off")}setHelpVisible(t){this.helpEl.classList.toggle("off",!t)}pulse(t,e=1){t==="flash"?this.flash=Math.max(this.flash,e):this.hurt=Math.max(this.hurt,e)}showWave(t,e,n=3.2){this.waveEl.querySelector(".t").textContent=t,this.waveEl.querySelector(".s").textContent=e,this.waveEl.classList.add("on"),this.waveTimer=n}showTip(t,e,n=7){this.tipEl.innerHTML=`<b>${t}</b>${e}`,this.tipEl.classList.add("on"),this.tipTimer=n}clear(){this.layer.innerHTML="",this.tags.clear(),this.waveEl.classList.remove("on"),this.tipEl.classList.remove("on")}project(t,e,n,s){const a=t.clone().project(e);return{x:(a.x+1)/2*n,y:(1-a.y)/2*s,ok:a.z<1&&a.z>-1}}popup(t,e,n,s,a){const r=t.text+(t.id??""),o=this.recent.get(r)??-9;if(this.time-o<.5)return;if(this.recent.set(r,this.time),t.style==="info"&&t.sub&&t.sub.length>25){this.showTip(t.text,t.sub,9);return}const l=t.style==="deflect"||t.style==="flow"||t.style==="issen"||t.style==="finisher"||t.style==="warn",c=re("div",`popup ${t.style}${l?"":" small"}`);c.innerHTML=`<div class="big">${t.text}</div>${t.sub?`<div class="kan">${t.sub}</div>`:""}`;let h=s/2,d=a*.36;if(l)(t.style==="deflect"||t.style==="flow")&&(d=a*.3);else{const u=e.get(t.id);if(u){const p=new A(u.pos.x,2.25*u.size,u.pos.z),g=this.project(p,n,s,a);g.ok&&(h=g.x,d=g.y-30)}else d=a*.3}c.style.left=`${h}px`,c.style.top=`${d}px`,this.layer.appendChild(c),setTimeout(()=>c.remove(),1300)}update(t,e,n,s,a){this.time+=a,this.fpsAcc+=a,this.fpsN++,this.fpsAcc>.5&&(this.fpsEl.textContent=`${Math.round(this.fpsN/this.fpsAcc)} fps`,this.fpsAcc=0,this.fpsN=0);const r=t.player,o=t.ps,l=`${Math.max(0,r.hp)/r.maxHp*100}%`;this.hpFill.style.width=l,this.hpLag.style.width=l,this.poFill.style.width=`${r.posture/r.maxPosture*100}%`,this.pips.forEach((p,g)=>p.style.setProperty("--f",`${Math.max(0,Math.min(1,o.resolve-g))}`)),Tu.forEach((p,g)=>{const x=this.arrowSlots[g];x.classList.toggle("on",o.arrowType===p.type),x.querySelector(".n").textContent=`${o.arrows[p.type]}`});const c=r.is("aim");if(this.reticle.classList.toggle("on",c),c){const p=mr(o.draw,o.arrowType,t.settings.windowScale);this.ring.style.strokeDashoffset=`${188.5*(1-p.amount)}`,this.reticle.classList.toggle("perfect",p.perfect),this.reticle.classList.toggle("tired",p.fatigue>.05);const g=Math.min(1,p.fatigue)*5;this.reticle.style.transform=g>0?`translate(${Math.sin(this.time*40)*g}px, ${Math.cos(this.time*33)*g}px)`:"",this.reticleLabel.textContent=p.perfect?"만작 — 놓아라":p.fatigue>.05?"팔이 떨린다":o.focusing?"집중":""}const h=new Set;for(const p of t.fighters){if(p.team!=="enemy"||!p.alive)continue;const g=new A(p.pos.x,2.05*p.size+(p.arch?.id==="ronin"||p.arch?.id==="spear"||p.arch?.id==="shield"?.12:0),p.pos.z),x=this.project(g,e,n,s),m=Math.hypot(p.pos.x-r.pos.x,p.pos.z-r.pos.z);let f=this.tags.get(p.id);f||(f=this.makeTag(p)),h.add(p.id);const b=x.ok&&m<26&&!p.is("finished");if(f.root.style.opacity=b?"1":"0",!b)continue;f.root.style.left=`${x.x}px`,f.root.style.top=`${x.y}px`,f.hp.style.width=`${p.hp/p.maxHp*100}%`,f.po.style.width=`${p.posture/p.maxPosture*100}%`,f.root.classList.toggle("broken",p.is("broken")),f.root.classList.toggle("target",o.softTarget===p.id||o.lockTarget===p.id),f.glint.className=`glint-mark ${p.glint?p.glint.color:""}`;const R=tM(p),y=R??"";y!==f.lastWeak&&(f.lastWeak=y,f.weak.style.display=R?"":"none",f.weak.className=`weak ${y}`,f.weak.innerHTML=R==="slash"?"약점 <b>斬</b> 베기":R==="thrust"?"약점 <b>突</b> 찌르기":""),f.root.classList.toggle("parry",p.is("guard")&&p.act.value===1);const T=o.finisherTarget===p.id;if(f.fin.style.display=T?"block":"none",T){const w=o.finisherKindHint;f.fin.innerHTML=w==="hajiki"?`튕기기 일섬 ${this.k("slash")}`:w==="flow"?`흘려베기 ${this.k("slash")}`:`피니쉬 ${this.k("slash")}<span style="font-size:14px">일도양단</span> ${this.k("thrust")}<span style="font-size:14px">관통</span>`}}for(const[p,g]of this.tags)h.has(p)||(g.root.remove(),this.tags.delete(p));let d="";if(t.mode==="standoff"){const p=t.standoff;d=p.phase==="tension"||p.phase==="approach"?`${this.k("slash")}를 누른 채 — 적이 <b>진짜로</b> 달려드는 순간 떼라`:p.phase==="between"||p.phase==="strike"&&p.kills>0?`다음 적이 달려든다 — ${this.k("slash")}`:""}else t.waves?.standoffAvailable?d=`${this.k("standoff")} <span class="hot">대치</span> — 적이 다가온다`:o.finisherKindHint==="hajiki"?d='<span class="hot">튕기기 일섬</span> — 지금 공격':o.finisherKindHint==="flow"?d='<span class="hot">흘려베기</span> — 등이 열렸다':r.hp<r.maxHp*.35&&o.resolve>=G.healCost&&r.alive&&(d=`${this.k("heal")} 결의로 회복`);this.promptEl.innerHTML!==d&&(this.promptEl.innerHTML=d),this.comboEl.classList.toggle("on",o.combo>=3),o.combo>=3&&(this.comboEl.innerHTML=`${o.combo}<small>연격</small>`),this.flash*=Math.pow(.02,a),this.flashEl.style.opacity=`${Math.min(.85,this.flash)}`,this.hurt=Math.max(0,this.hurt-a*1.6);const u=r.alive&&r.hp<r.maxHp*.3?.35+Math.sin(this.time*5)*.1:0;this.vignetteEl.style.opacity=`${Math.max(u,this.hurt)}`,this.waveTimer>0&&(this.waveTimer-=a)<=0&&this.waveEl.classList.remove("on"),this.tipTimer>0&&(this.tipTimer-=a)<=0&&this.tipEl.classList.remove("on")}makeTag(t){const e=re("div","enemy-tag"),n=re("div","glint-mark"),s=re("div","nm",t.arch?`${t.arch.name}`:""),a=re("div","hp"),r=re("i");a.appendChild(r);const o=re("div","po"),l=re("i");o.appendChild(l);const c=re("div","weak"),h=re("div","fin-prompt");e.append(n,s,a,o,c,h),this.layer.appendChild(e);const d={root:e,hp:r,po:l,nm:s,weak:c,glint:n,fin:h,lastWeak:"-"};return this.tags.set(t.id,d),d}}const Yc={difficulty:"normal",kurosawa:!1,blood:!0,sensitivity:1,volume:.8,quality:"high"};function bs(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}const nM=`
<table class="controls-table">
<tr><th>동작</th><th>키보드 · 마우스</th><th>게임패드</th></tr>
<tr><td>이동 / 카메라</td><td>WASD / 마우스·방향키</td><td>L스틱 / R스틱</td></tr>
<tr><td>베기 (길게: 강베기)</td><td>좌클릭 · J</td><td>□ / X</td></tr>
<tr><td>찌르기 (길게: 강찌르기)</td><td>우클릭 · K</td><td>△ / Y</td></tr>
<tr><td>방패 막기 · 튕기기</td><td>Shift · L</td><td>L1 / LB</td></tr>
<tr><td>흘리기</td><td>방패 + Space (타이밍)</td><td>L1 + ○</td></tr>
<tr><td>방패 치기</td><td>방패 + 베기</td><td>L1 + □</td></tr>
<tr><td>회피 / 구르기</td><td>Space / 두 번</td><td>○ / B</td></tr>
<tr><td>활 조준 · 당기기</td><td>Q 누른 채 · 좌클릭 누르고 떼기</td><td>L2 · R2</td></tr>
<tr><td>집중 조준 (슬로우)</td><td>조준 중 Shift</td><td>조준 중 L1</td></tr>
<tr><td>속사 · 화살 종류</td><td>E · 1/2/3·휠</td><td>R1 · 십자키 →</td></tr>
<tr><td>질풍참 · 회복</td><td>F (또는 베기+찌르기) · R</td><td>십자키 ↑ · ↓</td></tr>
<tr><td>대치 · 락온 · 일시정지</td><td>T · Tab · Esc</td><td>× · R3 · Start</td></tr>
</table>`,iM=`
<div class="sub" style="text-align:left;max-width:620px;margin:0 auto 18px">
<b>타이밍 링</b> — 적이 공격하면 링이 일정한 속도로 조여든다. <b>링이 안쪽 원에 닿는 순간</b>이 타격이다. 점무늬 띠 안에 들어왔을 때 누르면 된다.<br>
<b>링 색</b> — 흰색: 막기·튕기기 · <span style="color:#59b8ff">파랑</span>: 튕기기만 · <span style="color:#ff5a48">빨강</span>: 흘리기·회피만 · 링이 없는 동작은 허초(속임수).<br>
<b>튕기기(弾き)</b> — 링이 닿을 때 방패를 올려라. 적의 칼이 튕겨나고, 곧바로 공격하면 <b>튕기기 일섬</b>.<br>
<b>흘리기(流し)</b> — 방패를 든 채 링이 닿을 때 회피. 빨간 링 공격까지 흘려내고 등을 벤다.<br>
<b>일섬(一閃)</b> — 적의 타격 직전, 단 한 번의 공격. 연타하면 나가지 않는다. 이어가면 <b>연쇄 일섬</b>.<br>
<b>상성</b> — 방패·갑주엔 찌르기, 창·시노비엔 베기. 체간을 무너뜨리면 <b>피니쉬</b>.
</div>`;class sM{constructor(t,e,n){this.h=e,this.settings={...n},this.title=bs(`<div class="menu on"><div class="box">
      <div class="kanji-bg">剣 ・ 盾 ・ 弓</div>
      <h1>W<span class="red">O</span>G</h1>
      <div class="sub">레인저 찬바라 — 숏소드와 버클러, 그리고 활<br><small style="opacity:.7">튕기기 · 흘리기 · 일섬 · 피니쉬</small></div>
      <div class="btns">
        <button class="btn primary" data-a="campaign">전투 시작</button>
        <button class="btn" data-a="practice">수련장</button>
        <button class="btn" data-a="controls">조작법 · 시스템</button>
        <button class="btn" data-a="settings">설정</button>
      </div></div></div>`),this.pause=bs(`<div class="menu"><div class="box"><h2>일시정지</h2><div class="btns">
      <button class="btn primary" data-a="resume">계속</button>
      <button class="btn" data-a="restart">다시 시작</button>
      <button class="btn" data-a="controls">조작법 · 시스템</button>
      <button class="btn" data-a="settings">설정</button>
      <button class="btn" data-a="title">타이틀로</button></div></div></div>`),this.settingsEl=bs(`<div class="menu"><div class="box"><h2>설정</h2>
      <div class="settings">
        <label>난이도 (판정 시간)</label><select data-s="difficulty"><option value="easy">쉬움 — 더 넓은 띠</option><option value="normal">보통</option><option value="hard">어려움 — 칼날 위의 타이밍</option></select>
        <label>흑백 영화 모드</label><input type="checkbox" data-s="kurosawa">
        <label>피 효과</label><input type="checkbox" data-s="blood">
        <label>도트 크기</label><select data-s="quality"><option value="high">고운 도트 (세로 약 270줄)</option><option value="low">굵은 도트 (세로 약 216줄 · 가벼움)</option></select>
        <label>카메라 감도</label><input type="range" min="0.3" max="2.5" step="0.1" data-s="sensitivity">
        <label>음량</label><input type="range" min="0" max="1" step="0.05" data-s="volume">
      </div>
      <div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`),this.controls=bs(`<div class="menu"><div class="box"><h2>조작법 · 시스템</h2>${nM}${iM}<div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`),this.over=bs(`<div class="menu"><div class="box"><h2 style="color:var(--red)">패배</h2><div class="sub">칼끝은 한 치 차이로 갈린다.</div><div class="stats"></div><div class="btns">
      <button class="btn primary" data-a="restart">다시 도전</button><button class="btn" data-a="title">타이틀로</button></div></div></div>`),this.victory=bs(`<div class="menu"><div class="box"><h2 style="color:var(--gold)">승리</h2><div class="sub">철갑 대장 카게토라가 쓰러졌다.</div><div class="stats"></div><div class="btns">
      <button class="btn primary" data-a="restart">다시 싸우기</button><button class="btn" data-a="title">타이틀로</button></div></div></div>`),this.practice=bs(`<div class="practice">
      <button class="btn" data-p="ronin">+ 낭인 검사</button>
      <button class="btn" data-p="shield">+ 방패 무사</button>
      <button class="btn" data-p="spear">+ 창병</button>
      <button class="btn" data-p="armored">+ 갑주 무사</button>
      <button class="btn" data-p="duelist">+ 쌍검 시노비</button>
      <button class="btn" data-p="archer">+ 궁수</button>
      <button class="btn" data-p="boss">+ 대장</button>
      <button class="btn" data-p="dummy">+ 허수아비</button>
      <button class="btn" data-p="clear">모두 제거</button>
      <button class="btn" data-p="inv">무적: 끔</button>
    </div>`);for(const a of[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory,this.practice])t.appendChild(a);const s=(a,r)=>a.addEventListener("click",o=>{const l=o.target.closest("[data-a],[data-p]");l&&(o.stopPropagation(),this.h.click(),r(l.dataset.a??l.dataset.p??"",l))});s(this.title,a=>{a==="campaign"||a==="practice"?this.h.start(a):a==="settings"?this.openSettings(this.title):a==="controls"&&this.openControls(this.title)}),s(this.pause,a=>{a==="resume"?this.h.resume():a==="restart"?this.h.restart():a==="title"?this.h.title():a==="settings"?this.openSettings(this.pause):a==="controls"&&this.openControls(this.pause)}),s(this.settingsEl,a=>a==="back"&&this.settingsBack()),s(this.controls,a=>a==="back"&&this.settingsBack());for(const a of[this.over,this.victory])s(a,r=>{r==="restart"?this.h.restart():r==="title"&&this.h.title()});s(this.practice,(a,r)=>{if(a==="clear")this.h.clearEnemies();else if(a==="inv"){const o=this.h.toggleInvincible();r.textContent=`무적: ${o?"켬":"끔"}`,r.classList.toggle("on",o)}else this.h.spawn(a)}),this.settingsEl.querySelectorAll("[data-s]").forEach(a=>{const r=a.dataset.s,o=this.settings[r];a instanceof HTMLInputElement&&a.type==="checkbox"?a.checked=!!o:a.value=String(o),a.addEventListener("input",()=>{const l=this.settings;a instanceof HTMLInputElement&&a.type==="checkbox"?l[r]=a.checked:a instanceof HTMLInputElement&&a.type==="range"?l[r]=parseFloat(a.value):l[r]=a.value,this.h.settingsChanged(this.settings)})})}h;title;pause;settingsEl;over;victory;controls;practice;settingsBack=()=>{};settings;hideAll(){for(const t of[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory])t.classList.remove("on")}openSettings(t){this.hideAll(),this.settingsEl.classList.add("on"),this.settingsBack=()=>{this.hideAll(),t.classList.add("on")}}openControls(t){this.hideAll(),this.controls.classList.add("on"),this.settingsBack=()=>{this.hideAll(),t.classList.add("on")}}get anyOpen(){return[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory].some(t=>t.classList.contains("on"))}showTitle(){this.hideAll(),this.title.classList.add("on"),this.practice.classList.remove("on")}showPause(){this.hideAll(),this.pause.classList.add("on")}hide(){this.hideAll()}showPractice(t){this.practice.classList.toggle("on",t)}showResult(t,e){this.hideAll();const n=t?this.victory:this.over,s=[["시간",`${Math.floor(e.time/60)}:${String(Math.floor(e.time%60)).padStart(2,"0")}`],["처치",e.kills],["튕기기",e.deflects],["흘리기",e.flows],["일섬 (최대 연쇄)",`${e.issens} (${e.maxIssenChain})`],["피니쉬",e.finishers],["대치 참",e.standoffKills],["헤드샷",e.headshots],["완벽 회피",e.perfectDodges],["유효타 / 상성 실수",`${e.effectiveHits} / ${e.badHits}`],["받은 피해",Math.round(e.damageTaken)]];n.querySelector(".stats").innerHTML=s.map(([a,r])=>`<span>${a}</span><span>${r}</span>`).join(""),n.classList.add("on")}}const aM=new A,fo=new A,po=new A,rM={active:!1,key:0,color:0,intensity:1,maxSpeed:45},Gl=new A,Hn=(i=0,t=0,e=0)=>new A(i,t,e);class oM{renderer;pixel;scene=new $u;env;cam;devices;sfx=new Qy;hud;menus;world;views=new Map;arrowMeshes=new Map;sparks=new Fy;embers=new yu(700,!0);mist=new yu(900,!1);rings=new Oy;timing=new Uy;decals=new By;glintTex=Hy();state="title";mode="campaign";settings;last=performance.now();time=0;resultTimer=-1;resultWin=!1;helpTimer=30;cues=[];cineSubjects=null;whooshes=[];eventQueue=[];clockWorld=null;lastClock=0;lessons=new Set;debugHold=!1;debugCam=null;clickHint;touch;constructor(t){this.settings=cM(),this.renderer=new Sx({antialias:!1,powerPreference:"high-performance"}),this.pixel=new Ry(this.renderer),t.appendChild(this.renderer.domElement),this.env=$d(this.scene,this.renderer,{arenaRadius:G.arenaRadius,quality:this.settings.quality}),this.envQuality=this.settings.quality,this.cam=new Ty(1),this.scene.add(this.sparks.mesh,this.embers.points,this.mist.points,this.rings.group,this.decals.mesh,this.timing.group),this.devices=new Vy(this.renderer.domElement),this.touch=new Gy(document.body,()=>{this.devices.lastDevice="touch",this.hud.setHelpVisible(!1)}),this.devices.touch=this.touch,this.hud=new eM(document.body),this.clickHint=document.createElement("div"),this.clickHint.className="click-hint",this.clickHint.textContent="화면을 클릭하면 마우스로 카메라를 돌릴 수 있습니다 · H: 조작 도움말 · Esc: 일시정지",document.body.appendChild(this.clickHint),this.menus=new sM(document.body,{start:e=>this.start(e),resume:()=>this.resume(),restart:()=>this.start(this.mode),title:()=>this.toTitle(),settingsChanged:e=>this.applySettings(e),spawn:e=>this.practiceSpawn(e),clearEnemies:()=>this.practiceClear(),toggleInvincible:()=>(this.world.settings.invincible=!this.world.settings.invincible,this.world.settings.invincible),click:()=>{this.sfx.unlock(),this.sfx.play("uiSelect")}},this.settings),window.addEventListener("keydown",e=>{this.sfx.unlock(),(e.code==="KeyH"||e.code==="F1")&&(e.preventDefault(),this.hud.toggleHelp())}),window.addEventListener("pointerdown",()=>this.sfx.unlock()),window.addEventListener("resize",()=>this.resize()),this.resize(),this.world=this.makeTitleWorld(),this.applySettings(this.settings),this.hud.setHelpVisible(!1),requestAnimationFrame(this.loop),window.__game=this,window.__wog={MOVES:pr,T:G,emptyInput:_h,startEnemyAttack:Ta}}makeTitleWorld(){const t=new Gd(99);t.mode="intermission",t.player.pos={x:-2.6,z:0},t.player.yaw=Math.PI/2,t.player.set("standoff",1/0);const e=t.spawn("ronin",{x:2.6,z:0},-Math.PI/2);return e.brain.aware=!1,this.resetViews(),t}resetViews(){for(const t of this.views.values())this.removeView(t);this.views.clear();for(const t of this.arrowMeshes.values())this.scene.remove(t);this.arrowMeshes.clear(),this.hud.clear(),this.cues.length=0,this.whooshes.length=0,this.eventQueue.length=0,this.cineSubjects=null,this.focusId=null,this.timing.clear()}start(t){this.sfx.unlock(),this.mode=t,this.resetViews(),this.decals.clear();const e=new Gd(Math.floor(Math.random()*1e9));if(e.player.pos={x:0,z:-7},e.player.yaw=0,this.world=e,this.applySettings(this.settings),t==="campaign")e.waves=new S1,e.waves.start(e);else{const n=e.spawn("dummy",{x:0,z:-3.5},Math.PI);n.brain.aware=!1,this.hud.showWave("수련장","왼쪽 버튼으로 적을 불러내 연습하라",3)}this.cam.reset(0),this.state="play",this.resultTimer=-1,this.menus.hide(),this.menus.showPractice(t==="practice"),this.hud.setHelpVisible(!0),this.helpTimer=30,this.sfx.startAmbience(),this.hud.showTip("타이밍 링","적이 공격하면 링이 조여든다. 링이 안쪽 원에 닿을 때 방패를 올리면 튕기기. 파란 링은 튕기기로만, 빨간 링은 흘리기(방패+회피)나 회피로 받아낸다.",10)}resume(){this.state="play",this.menus.hide()}toTitle(){this.state="title",this.cam.endCinematic(),this.world=this.makeTitleWorld(),this.menus.showTitle(),this.menus.showPractice(!1),this.hud.setHelpVisible(!1),this.devices.releasePointer()}pause(){this.state==="play"&&(this.state="pause",this.menus.showPause(),this.devices.releasePointer())}applySettings(t){this.settings={...t},hM(t);const e=this.world,n=t.difficulty==="easy"?1.6:t.difficulty==="hard"?.75:1;e.settings.windowScale=n,e.settings.enemyDamage=t.difficulty==="easy"?.6:t.difficulty==="hard"?1.35:1,document.body.classList.toggle("kurosawa",t.kurosawa),this.cam.sensitivity=.0024*t.sensitivity,this.sfx.setMasterVolume(t.volume),this.decals.mesh.visible=t.blood,this.envQuality!==t.quality&&(this.env.dispose(),this.env=$d(this.scene,this.renderer,{arenaRadius:G.arenaRadius,quality:t.quality}),this.envQuality=t.quality,this.resize()),this.envQuality=t.quality}envQuality=Yc.quality;practiceSpawn(t){if(this.mode!=="practice")return;const e=this.world.player,n=e.yaw+(Math.random()-.5)*1.2,s={x:e.pos.x+Math.sin(n)*7,z:e.pos.z+Math.cos(n)*7},a=Math.hypot(s.x,s.z);a>G.arenaRadius-2&&(s.x*=(G.arenaRadius-2)/a,s.z*=(G.arenaRadius-2)/a);const r=this.world.spawn(t,s);t==="dummy"&&(r.brain.aware=!1),this.world.emit({type:"text",text:r.arch.name,sub:r.arch.tip,style:"info",id:r.id})}practiceClear(){for(const t of this.world.enemies())t.hp=0;this.world.removeCorpses()}resize(){const t=window.innerWidth,e=window.innerHeight;this.pixel.resize(t,e,this.envQuality==="high"?270:216),this.cam.camera.aspect=this.pixel.width/this.pixel.height,this.cam.camera.updateProjectionMatrix(),this.embers.setViewportHeight(this.pixel.height),this.mist.setViewportHeight(this.pixel.height)}loop=t=>{requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e,this.frame(e)};frame(t){const e=this.world;this.devices.pausePressed.v&&(this.devices.pausePressed.v=!1,this.state==="play"?this.pause():this.state==="pause"&&this.resume());const{frame:n,lookDX:s,lookDY:a}=this.devices.sample(this.cam.yaw);this.hud.device!==this.devices.lastDevice&&(this.hud.device=this.devices.lastDevice,this.hud.renderHelp());const r=Hn(),o=Hn();this.cam.aimRay(r,o),n.aimOrigin={x:r.x,y:r.y,z:r.z},n.aimDir={x:o.x,y:o.y,z:o.z},this.state==="play"&&!this.debugHold?(this.cam.look2(s,a),e.update(t,n),this.helpTimer>0&&(this.helpTimer-=t)<=0&&this.hud.setHelpVisible(!1)):this.state==="title"&&e.update(t,{...n,pressed:{},released:{},held:{}});for(const x of e.drainTimedEvents())this.eventQueue.push(x);const l=e.displayTick+1e-6;for(;this.eventQueue.length&&this.eventQueue[0].tick<=l;){const x=this.eventQueue.shift();this.onEvent(x.ev,x.tick)}this.resultTimer>0&&(this.resultTimer-=t)<=0&&(this.state="result",this.menus.showResult(this.resultWin,e.stats),this.devices.releasePointer());const c=e.simClock,h=this.debugHold?t:this.clockWorld===e?Math.max(0,Math.min(.1,c-this.lastClock)):0;this.clockWorld=e,this.lastClock=c,this.syncViews(h,t),this.runCues(),this.syncProjectiles(),this.sparks.update(h),this.embers.update(h),this.mist.update(h),this.rings.update(h,this.cam.camera),this.decals.update(h);const d=this.views.get(e.player.id),u=d?d.char.root.position.clone():Hn(),p=[...this.views.values()].slice(0,8).map(x=>x.char.root.position);if(this.env.update(this.time,t*Math.max(.25,e.timeScale),u,p),this.state==="title")this.titleCamera(t);else{const x=e.get(e.ps.lockTarget),m=x&&x.targetable?this.views.get(x.id)?.char.root.position??null:null,f=e.liveEnemies().filter(y=>y.distTo(e.player)<9).length,b=n.move.x||n.move.z?Hn(n.move.x,0,n.move.z):null,R=this.duelFocus();if(e.mode==="standoff"){const y=e.get(e.standoff.leaderId);y&&d&&this.cam.cinematic(u,this.views.get(y.id)?.char.root.position??u,"standoff",.2)}this.trackCinematic(),this.cam.update(this.state==="pause"?0:t,u,{aiming:e.player.is("aim"),lockTarget:m,crowd:f,moveDir:b,slowmo:e.timeScale<.9,threat:R})}if(this.debugCam){const x=this.cam.camera;x.position.copy(this.debugCam.pos),x.lookAt(this.debugCam.look),x.fov=this.debugCam.fov??45,x.updateProjectionMatrix()}document.body.classList.toggle("cine",this.cam.inCinematic||e.mode==="standoff"),document.body.classList.toggle("title",this.state==="title"),this.touch.setVisible(this.state==="play"),this.clickHint.style.display=this.state==="play"&&!this.devices.locked&&this.devices.lastDevice==="kbm"&&!this.touch.active?"":"none",this.sfx.setTimeScale(e.timeScale);const g=e.ps;this.sfx.setDrawTension(e.player.is("aim")&&g.draw>0?mr(g.draw,g.arrowType).amount:null),this.cam.camera.updateMatrixWorld(),this.timing.update(e,this.cam.camera,this.pixel.height,x=>this.views.get(x)?.char.root.position??null),this.state!=="title"&&this.hud.update(e,this.cam.camera,window.innerWidth,window.innerHeight,t),this.pixel.render(this.scene,this.cam.camera)}duelFocus(){const t=this.world,e=t.player;let n=null,s=9;for(const l of t.liveEnemies()){if(!l.targetable||l.arch?.id==="dummy")continue;const c=l.distTo(e);c<s&&(s=c,n=l)}const a=this.focusId!==null?t.get(this.focusId):null,o=!!a&&a.alive&&a.targetable&&a.distTo(e)<10&&(!n||a.distTo(e)<s+2.5)?a:n;return this.focusId=o?o.id:null,o?this.views.get(o.id)?.char.root.position??null:null}focusId=null;titleCamera(t){const e=this.time*.05,n=this.cam.camera;n.position.set(Math.sin(e)*1.5+.5,1.25,-7.5+Math.cos(e)*.5),n.lookAt(0,1.2,0),n.fov=40,n.updateProjectionMatrix()}viewFor(t){let e=this.views.get(t.id);if(e)return e;const n=t.isPlayer?"player":t.arch.id,s=new V1(n,this.glintTex),a=new xu(t.isPlayer?16773328:14211288),r=n==="duelist"?new xu(14211288):null;return this.scene.add(s.root,a.mesh),r&&this.scene.add(r.mesh),e={f:t,char:s,anim:new dy(n),trail:a,trailL:r,flash:0,flashColor:16777215},this.views.set(t.id,e),e}removeView(t){this.scene.remove(t.char.root,t.trail.mesh),t.char.dispose(),t.trail.dispose(),t.trailL&&(this.scene.remove(t.trailL.mesh),t.trailL.dispose())}syncViews(t,e){const n=this.world,s=n.alpha,a=new Set;for(const r of n.fighters){a.add(r.id);const o=this.viewFor(r),l=r.prevPos.x+(r.pos.x-r.prevPos.x)*s,c=r.prevPos.z+(r.pos.z-r.prevPos.z)*s;let h=r.yaw-r.prevYaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const d=r.prevYaw+h*s,u=o.anim.update(r,n,s,t,aM.set(l,0,c),d);o.char.root.position.set(l,0,c),o.char.root.rotation.y=d+u.bodyYaw,o.char.root.scale.setScalar(r.size),o.char.applyPose(u,r.speed,t),r.phase===2&&o.char.shatterArmor(),r.hitFlash>0&&o.flash<.3&&(o.flash=1),o.flash=Math.max(0,o.flash-e*6);const p=r.is("broken"),g=!r.isPlayer&&r.is("guard")&&r.act.value===1;p?o.char.setFlash(.25+Math.sin(this.time*14)*.15,16720384):g&&o.flash<.2?o.char.setFlash(.14+Math.sin(this.time*9)*.08,8373503):o.char.setFlash(o.flash*.7,o.flashColor),o.char.setGlint(r.glint?.color??null,r.glint?r.glint.t+s:0),r.burning>0&&t>0&&Math.random()<.7&&this.embers.emit(Hn(l,.4+Math.random()*1.2,c),2,{color:Math.random()<.5?16742938:16760906,speed:.6,size:.09,life:.6,gravity:-2,up:1,jitter:.5}),this.updateTrail(o,r,t);for(const x of o.anim.landings)this.onLanding(r,x)}for(const[r,o]of this.views)a.has(r)||(this.removeView(o),this.views.delete(r))}updateTrail(t,e,n){const s=py(e,this.world,t.anim,rM);t.trail.setColor(s.color,s.intensity),t.char.bladeWorld(fo,po),t.trail.update(fo,po,s.active,n,s.key,s.maxSpeed),t.trailL&&(t.char.bladeWorld(fo,po,!0),t.trailL.setColor(s.color,s.intensity),t.trailL.update(fo,po,s.active,n,s.key,s.maxSpeed))}onLanding(t,e){t.isPlayer?this.play("footstep",void 0,.25+.5*e.strength,.9+Math.random()*.2):e.strength>.6&&this.play("footstep",e.pos,.3*e.strength,.8+Math.random()*.2),e.strength>.7&&this.embers.emit(Gl.copy(e.pos).setY(.04),3,{color:13219988,speed:.5,size:.18,life:.4,grow:.5,alpha:.22})}runCues(){for(let t=this.whooshes.length-1;t>=0;t--){const e=this.whooshes[t],n=this.world.get(e.id);(!n||n.serial!==e.serial&&this.world.tick-n.act.t<e.contactTick)&&e.h.stop(),(!n||n.serial!==e.serial||this.world.tick>=e.contactTick)&&this.whooshes.splice(t,1)}for(let t=this.cues.length-1;t>=0;t--){const e=this.cues[t],n=this.world.get(e.id);if(!n||n.serial!==e.serial){this.cues.splice(t,1);continue}bo(n,this.world)>=e.t&&(this.cues.splice(t,1),e.fire())}}trackCinematic(){const t=this.cineSubjects;if(!t)return;const e=this.world,n=e.get(t.a),s=e.get(t.b),a=n?this.views.get(n.id):void 0,r=s?this.views.get(s.id):void 0;if(!(this.cam.style===(t.kind==="issen"?"issen":t.fk==="flow"?"flow":"finisher"))){this.cineSubjects=null;return}if(!n||!s||!a||!r||!this.cam.inCinematic){this.cam.inCinematic&&this.cam.releaseCinematic(),this.cineSubjects=null;return}let l=0,c=!1,h=null;if(t.kind==="finisher"){c=n.serial!==t.serial;const d=t.fk==="slash"||t.fk==="thrust"||t.fk==="flow"?zi[t.fk]:null;if(d&&!c){const u=bo(n,e);l=Wl((u-(d.release-8))/8)*(1-Wl((u-d.holdEnd)/10)),h=u/d.dur}}else{const d=s.act.kind==="finished"?bo(s,e):1/0,u=ui.victimFreeze+12;c=n.serial!==t.serial&&d>=u,l=Number.isFinite(d)?Wl((d-ui.victimFreeze+6)/6)*.7:0,h=Number.isFinite(d)?Math.min(1,d/u):1}if(c){this.cam.releaseCinematic(),this.cineSubjects=null;return}Gl.copy(r.char.root.position).setY(1.15*s.size),this.cam.track(a.char.root.position,r.char.root.position,Gl,l,h)}syncProjectiles(){const t=this.world,e=new Set;for(const n of t.projectiles){e.add(n.id);let s=this.arrowMeshes.get(n.id);if(s||(s=lM(n),this.scene.add(s),this.arrowMeshes.set(n.id,s)),n.stuck&&n.stuckTo!==void 0&&n.stuckOffset){const a=t.get(n.stuckTo),r=a?this.views.get(a.id):void 0;if(!a||!r){s.visible=!1;continue}const o=n.stuckOffset,l=r.char.root,c=l.rotation.y,h=Math.cos(c),d=Math.sin(c),u=a.alive?o.y:Math.min(o.y,.35);s.position.set(l.position.x+o.x*h+o.z*d,u,l.position.z-o.x*d+o.z*h),s.rotation.set(0,c+o.yaw,0),s.rotateX(.25)}else if(n.stuck)s.position.set(n.pos.x,n.pos.y,n.pos.z);else{const a=t.alpha;s.position.set(n.prevPos.x+(n.pos.x-n.prevPos.x)*a,n.prevPos.y+(n.pos.y-n.prevPos.y)*a,n.prevPos.z+(n.pos.z-n.prevPos.z)*a);const r=Hn(n.vel.x,n.vel.y,n.vel.z).normalize();s.quaternion.setFromUnitVectors(Hn(0,0,1),r),n.arrowType==="fire"&&Math.random()<.8&&this.embers.emit(s.position,1,{color:16747050,speed:.3,size:.08,life:.35,gravity:-1})}s.visible=!0}for(const[n,s]of this.arrowMeshes)e.has(n)||(this.scene.remove(s),this.arrowMeshes.delete(n))}at(t,e=1.2){const n=t!==void 0?this.views.get(t):void 0;return n?n.char.root.position.clone().setY(e):Hn(0,e,0)}play(t,e,n=1,s=1){if(!e)return this.sfx.play(t,{volume:n,pitch:s});const a=this.cam.camera,r=e.clone().sub(a.position),o=r.length(),l=Hn(1,0,0).applyQuaternion(a.quaternion),c=Math.max(-1,Math.min(1,r.dot(l)/Math.max(1,o)))*.8;return this.sfx.play(t,{volume:n/(1+Math.max(0,o-4)/9),pan:c,pitch:s})}reactHit(t,e,n,s){const a=this.world,r=a.get(e),o=a.get(t),l=r?this.views.get(r.id):void 0;if(!r||!o||!l)return;const c=r.pos.x-o.pos.x,h=r.pos.z-o.pos.z,d=Math.hypot(c,h)||1,u=Math.cos(r.yaw),p=Math.sin(r.yaw);let g=0;const x=o.act.kind==="gale"?pr.r_gale:o.act.kind==="attack"?o.act.move:void 0,m=this.views.get(o.id);if(x&&m){const f=m.anim.sweepSign(x),b=Math.cos(o.yaw)*f,R=-Math.sin(o.yaw)*f;g=b*u-R*p}l.anim.onHit(r,(c*u-h*p)/d,(c*p+h*u)/d,g,n,s)}blood(t,e,n,s=!1){if(!this.settings.blood){this.embers.emit(t,Math.ceil(e/2),{color:16773328,speed:2.5,size:.05,life:.4});return}this.mist.emit(t,e,{color:7997960,speed:s?5.5:3.2,size:s?.09:.06,life:.7,gravity:9,drag:.8,up:.4,dir:n,spread:n?.35:1,alpha:.95}),this.mist.emit(t,Math.ceil(e/3),{color:4851206,speed:.8,size:s?.45:.28,life:.5,grow:.8,drag:3,alpha:.45,dir:n,spread:.5}),(s||Math.random()<.35)&&this.decals.add(t.x+(n?.x??0)*.8,t.z+(n?.z??0)*.8,s?1.5:.7+Math.random()*.5)}lesson(t,e,n){this.lessons.has(t)||this.state!=="play"||(this.lessons.add(t),this.hud.showTip(e,n,8))}teach(t){const e=this.world.player.id;switch(t.type){case"glint":t.color==="blue"?this.lesson("blue","파란 링","막을 수 없는 공격. 링이 안쪽 원에 닿을 때 방패를 눌러 튕겨내라."):this.lesson("red","빨간 링","막을 수도 튕길 수도 없다. 링이 닿을 때 방패를 든 채 회피 = 흘리기, 또는 옆으로 회피.");break;case"deflect":t.defender===e&&!t.arrow?this.lesson("hajiki","튕기기 일섬","튕겨낸 직후 곧바로 공격하면 반동에 빠진 적을 일격에 벤다."):t.defender!==e&&this.lesson("parry","적의 튕기기","튕기기 자세의 적에게 가벼운 공격은 튕겨난다. 길게 눌러 강공격하거나 방패 치기로 깨라.");break;case"postureBreak":this.lesson("finisher","피니쉬","무너진 적 앞에서 베기 = 일도양단, 찌르기 = 심장 관통. 약점 버튼으로 마무리하면 결의를 더 얻는다.");break;case"flow":this.lesson("flow","흘려베기","흘려낸 적은 등을 드러낸다. 바로 공격하라.");break;case"bounce":case"haft":case"evade":this.lesson("matchup","상성","적 머리 위의 약점 표시를 보라. 방패·갑주엔 찌르기, 창·쌍검엔 베기.");break;case"resolve":t.total>=2&&this.lesson("gale","결의","결의 2칸: 베기+찌르기 동시(질풍참)로 여럿을 한 번에 무너뜨린다. 1칸: 회복.");break}}onEvent(t,e=this.world.tick){this.teach(t);const n=this.world,s=n.player.id,a=(r,o=1.25)=>Hn(r.x,o,r.z);switch(t.type){case"swing":{const r=n.get(t.id),o=t.id===s,l=t.move,c=o?l.type==="thrust"?"swingThrust":l.heavy||l.finale?"swingHeavy":l.type==="blunt"?"dodge":"swingLight":"swingEnemy",h=r?.act.kind==="gale",d=e+(l.projectile||h?0:wh(l)),u=!!r&&r.act.kind==="attack"&&r.act.move===l;if(r&&!u&&!h&&n.tick-r.act.t<d)break;const p=this.play(c,r?this.at(r.id):void 0,o?.9:.8,.9+Math.random()*.2);p&&r&&u&&n.tick<d&&this.whooshes.push({id:r.id,serial:r.serial,contactTick:d,h:p});break}case"hit":{this.reactHit(t.attacker,t.target,t.atkType,t.heavy);const r=a(t.pos,1.25),o=n.get(t.target),l=o?this.at(o.id).sub(this.at(t.attacker)).setY(.2).normalize():void 0;if(t.target===s)this.play(t.heavy?"hitHeavy":"hitFlesh",r,1),this.hud.pulse("hurt",t.heavy?.9:.6),this.cam.shake(t.heavy?.55:.35),this.blood(r,10,l);else{const c=t.result==="effective";this.play(t.lethal?"kill":c?"hitEffective":t.heavy?"hitHeavy":"hitFlesh",r,1),t.lethal&&this.play("hitHeavy",r,.9),t.result!=="glance"&&this.blood(r,t.lethal?26:c?16:10,l,t.lethal),this.cam.shake(t.lethal?.35:c||t.heavy?.25:.14),c&&this.sparks.burst(r,6,16773824,5,{life:.2}),t.lethal&&(this.cam.fovKick=2)}break}case"bounce":this.sparks.burst(a(t.pos,1.2),26,16760928,7),this.play("bounce",a(t.pos)),this.cam.shake(.35);break;case"glance":this.sparks.burst(a(t.pos,1.2),16,16777215,5),this.play("glance",a(t.pos));break;case"haft":this.mist.emit(a(t.pos,1.2),10,{color:6965802,speed:3,size:.05,life:.5,gravity:8}),this.play("haft",a(t.pos)),this.cam.shake(.2);break;case"evade":this.embers.emit(this.at(t.id,.2),8,{color:13219988,speed:1.2,size:.25,life:.5,grow:.6,alpha:.35}),this.play("dodge",this.at(t.id));break;case"block":this.sparks.burst(a(t.pos,1.3),t.enemy?10:14,16769184,4),this.play("block",a(t.pos)),this.cam.shake(.12);break;case"guardBreak":this.sparks.burst(a(t.pos,1.3),30,16765056,7),this.play("guardBreak",a(t.pos)),this.cam.shake(.45);break;case"deflect":{const r=a(t.pos,1.35);if(t.arrow){this.sparks.burst(r,18,16774352,6),this.play("arrowBlock",r),this.play("deflect",r,.6,1.3);break}this.sparks.burst(r,46,16774352,9,{life:.45}),this.sparks.burst(r,20,16756800,5,{life:.3}),this.rings.spawn(r,16773312,.3,.7,!1),this.play("deflect",r,1),this.cam.shake(.3),this.cam.fovKick=3,this.hud.pulse("flash",.18);break}case"flow":{const r=a(t.pos,1.3);this.embers.emit(r,24,{color:10479871,speed:3,size:.07,life:.5,drag:3}),this.sparks.burst(r,12,12579071,5),this.play("flow",r),this.cam.fovKick=3;break}case"issen":{const r=a(t.pos,1.2);this.hud.pulse("flash",.85),this.rings.spawn(r.clone().setY(.05),16777215,.6,4.5),this.rings.spawn(r,16774880,.35,1.2,!1),this.play("issen",r),this.cam.shake(.35);const o=this.at(t.performer),l=this.at(t.victim);this.cam.cinematic(o,l,"issen",1,3);const c=n.get(t.performer);c&&n.mode!=="standoff"&&(this.cineSubjects={a:t.performer,b:t.victim,kind:"issen",serial:c.serial}),this.env.gust(1);const h=n.get(t.victim);h&&this.cues.push({id:h.id,serial:h.serial,t:ui.victimFreeze,fire:()=>this.blood(this.at(t.victim,1.2),30,void 0,!0)});break}case"perfectDodge":this.embers.emit(this.at(t.id,1),20,{color:12577023,speed:1.2,size:.08,life:.6,jitter:.8}),this.play("perfectDodge",this.at(t.id));break;case"postureBreak":{const r=a(t.pos,1.3);this.rings.spawn(r,16738874,.45,1,!1),this.sparks.burst(r,24,16752720,6),this.play("postureBreak",r),this.cam.shake(.3);break}case"finisherStart":{const r=this.at(t.performer),o=this.at(t.victim),l=zi[t.kind].dur;this.cam.cinematic(r,o,t.kind==="flow"?"flow":"finisher",l/60*1.15,l/60*4);const c=n.get(t.performer);c&&(this.cineSubjects={a:t.performer,b:t.victim,kind:"finisher",serial:c.serial,fk:t.kind}),this.play("finisher",o,.9);break}case"finisherImpact":{const r=a(t.pos,1.25),o=this.at(t.victim).sub(this.at(t.performer)).setY(.3).normalize();this.blood(r,44,t.kind==="thrust"?o:o.clone().applyAxisAngle(Hn(0,1,0),1.2),!0),this.play("finisherImpact",r),this.cam.shake(.4),this.env.gust(.8),this.hud.pulse("flash",.12);break}case"kill":n.liveEnemies().length===0&&n.mode==="combat"&&this.mode==="campaign"&&!this.cam.inCinematic&&this.cam.cinematic(this.at(t.killer),this.at(t.victim),"killcam",1.3);break;case"cue":this.play("cue",this.at(t.id),1,t.grade==="red"?.6:t.grade==="blue"?1.25:1);break;case"glint":this.play(t.color==="blue"?"glintBlue":"glintRed",this.at(t.id),1);break;case"arrowFire":t.owner===s?this.play(t.perfect?"bowPerfect":"bowRelease",void 0,1):this.play("arrowWhiz",this.at(t.owner),.8);break;case"arrowHit":{const r=Hn(t.pos.x,t.pos.y,t.pos.z);this.play(t.blocked?"arrowBlock":t.headshot?"arrowHeadshot":"arrowHit",r),!t.blocked&&t.dmg>0?this.blood(r,t.headshot?18:8):this.mist.emit(r,6,{color:6965802,speed:2,size:.04,life:.4,gravity:8}),t.headshot&&(this.cam.fovKick=2);break}case"arrowMiss":this.mist.emit(Hn(t.pos.x,.05,t.pos.z),5,{color:9075290,speed:1,size:.12,life:.5,grow:.3,alpha:.4});break;case"fear":this.play("fear",this.at(t.id),.7);break;case"resolve":t.amount>=.5&&this.play("resolve",void 0,.6);break;case"heal":this.embers.emit(this.at(t.id,1),30,{color:16769162,speed:.8,size:.07,life:1,gravity:-1.5,jitter:.8}),this.play("heal");break;case"shieldOpen":this.mist.emit(this.at(t.id,1.2),14,{color:6961698,speed:3.5,size:.05,life:.6,gravity:8}),this.play("shieldOpen",this.at(t.id)),this.cam.shake(.25);break;case"armorShatter":{const r=a(t.pos,1.3);this.sparks.burst(r,70,16765040,9,{life:.6}),this.mist.emit(r,30,{color:3805200,speed:5,size:.06,life:1,gravity:9}),this.rings.spawn(r.clone().setY(.05),16752720,.7,4),this.play("armorShatter",r),this.cam.shake(.6),this.hud.showWave("二幕","갑옷이 부서졌다 — 이제 베기가 통한다",2.5);break}case"standoff":t.phase==="begin"?this.play("standoffTension"):t.phase==="feint"?(this.play("swingEnemy",this.at(t.id),.5,.8),this.cam.shake(.12)):t.phase==="strike"?this.play("glintBlue",this.at(t.id)):t.phase==="win"&&this.play("standoffStrike");break;case"text":this.hud.popup(t,n,this.cam.camera,window.innerWidth,window.innerHeight);break;case"wave":this.hud.showWave(t.title,t.subtitle),this.play("waveStart");break;case"waveClear":this.play("waveClear"),this.hud.showWave("승","막을 넘었다 · 화살과 체력을 추슬렀다",2.4);break;case"victory":this.play("victory"),this.resultWin=!0,this.resultTimer=3.2;break;case"defeat":this.play("defeat"),this.resultWin=!1,this.resultTimer=2.6;break;case"gale":this.play("issen",void 0,.6,1.3),this.env.gust(1),this.embers.emit(this.at(t.id,1),40,{color:11071743,speed:4,size:.06,life:.6,jitter:1});break;case"burn":this.play("fireIgnite",this.at(t.id));break}}}function lM(i){const t=new Un,e=(a,r,o,l,c,h=0)=>{const d=me(a,r,o,Wn(l,{emissive:h}));return d.position.z=c,t.add(d),d};if(i.kind==="kunai")return e(.06,.03,.2,13620958,0,4871524),e(.035,.035,.08,2893346,-.13),t;e(.025,.025,.8,15786684,-.4,5589552);const n=i.arrowType==="heavy"?13620958:i.arrowType==="fire"?16742954:11186876,s=i.arrowType==="heavy"?.07:.05;return e(s,s*.6,.1,n,.03,i.arrowType==="fire"?16729088:3159614),e(.09,.02,.14,i.team==="player"?16051932:4867144,-.74),t}function cM(){try{const t=localStorage.getItem("wog.settings");if(t)return{...Yc,...JSON.parse(t)}}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;return{...Yc,quality:i||Math.min(window.innerWidth,window.innerHeight)<600?"low":"high"}}function hM(i){try{localStorage.setItem("wog.settings",JSON.stringify(i))}catch{}}function Wl(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}function dM(i){i.width=256,i.height=256,i.style.width="200vw",i.style.height="200vh",i.style.imageRendering="pixelated";const e=i.getContext("2d");if(!e)return;const n=e.createImageData(256,256),s=()=>{if(document.body.classList.contains("kurosawa")){for(let a=0;a<n.data.length;a+=4){const r=Math.random()*255;n.data[a]=n.data[a+1]=n.data[a+2]=r,n.data[a+3]=255}e.putImageData(n,0,0)}setTimeout(s,70)};s()}function Au(){const i=document.getElementById("app");dM(document.getElementById("grain")),new oM(i)}const Ru=window.claude?.hot;Ru?.ready?Ru.ready(Au):Au();
