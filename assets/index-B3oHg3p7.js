(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Xc="186",Ff=0,Nh=1,Of=2,er=1,zf=2,Ka=3,Ps=0,xn=1,on=2,Bi=0,ga=1,fs=2,Fh=3,Oh=4,Bf=5,ha=100,Hf=101,Vf=102,Gf=103,Wf=104,Yf=200,Xf=201,qf=202,Kf=203,Lu=204,Du=205,$f=206,Zf=207,Jf=208,Qf=209,jf=210,tp=211,ep=212,np=213,ip=214,Gl=0,Wl=1,Yl=2,hr=3,Xl=4,ql=5,Kl=6,$l=7,qc=0,sp=1,ap=2,Si=0,Iu=1,ku=2,Uu=3,Kc=4,Nu=5,Fu=6,Ou=7,zu=300,Ls=301,Ma=302,Wo=303,Yo=304,No=306,Zl=1e3,zi=1001,Jl=1002,hn=1003,rp=1004,Mr=1005,_n=1006,Xo=1007,Rs=1008,Gn=1009,Bu=1010,Hu=1011,dr=1012,$c=1013,wi=1014,ci=1015,Ei=1016,Zc=1017,Jc=1018,ur=1020,Vu=35902,Gu=35899,Wu=1021,Yu=1022,hi=1023,Wi=1026,Cs=1027,Qc=1028,jc=1029,Ds=1030,th=1031,eh=1033,mo=33776,go=33777,vo=33778,_o=33779,Ql=35840,jl=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,ac=37488,rc=37489,So=37490,oc=37491,lc=37808,cc=37809,hc=37810,dc=37811,uc=37812,fc=37813,pc=37814,mc=37815,gc=37816,vc=37817,_c=37818,xc=37819,yc=37820,Mc=37821,bc=36492,Sc=36494,wc=36495,Ec=36283,Tc=36284,wo=36285,Ac=36286,op=3200,Eo=0,lp=1,cs="",vn="srgb",To="srgb-linear",Ao="linear",Me="srgb",qo=7680,cp=519,hp=512,dp=513,up=514,nh=515,fp=516,pp=517,ih=518,mp=519,Xu=35044,zh="300 es",yi=2e3,fr=2001;function gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){const i=Ro("canvas");return i.style.display="block",i}const Bh={};function Co(...i){const t="THREE."+i.shift();console.log(t,...i)}function qu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=qu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=qu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function va(...i){const t=i.join(" ");t in Bh||(Bh[t]=!0,Nt(...i))}function _p(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const xp={[Gl]:Wl,[Yl]:Kl,[Xl]:$l,[hr]:ql,[Wl]:Gl,[Kl]:Yl,[$l]:Xl,[ql]:hr};class ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hh=1234567;const nr=Math.PI/180,pr=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mp(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function bp(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function Sp(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ap(i,t){return i+Math.random()*(t-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(Hh=i);let t=Hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pp(i){return i*nr}function Lp(i){return i*pr}function Dp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),d=a((t-n)/2),u=r((t-n)/2),f=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ah={DEG2RAD:nr,RAD2DEG:pr,generateUUID:Hi,clamp:ee,euclideanModulo:sh,mapLinear:yp,inverseLerp:Mp,lerp:ir,damp:bp,pingpong:Sp,smoothstep:wp,smootherstep:Ep,randInt:Tp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Lp,isPowerOfTwo:Dp,ceilPowerOfTwo:Ip,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Up,normalize:be,denormalize:li},Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;let yt=Ph;class cn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=a[r+0],f=a[r+1],g=a[r+2],x=a[r+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),A=Math.sin(y);p=Math.sin(p*y)/A,o=Math.sin(o*y)/A,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(a/2),u=l(n/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lh=class Lh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;let R=Lh;const Ko=new R,Vh=new cn,Dh=class Dh{constructor(t,e,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],A=s[4],b=s[7],T=s[2],M=s[5],w=s[8];return a[0]=r*x+o*y+l*T,a[3]=r*m+o*A+l*M,a[6]=r*p+o*b+l*w,a[1]=c*x+h*y+d*T,a[4]=c*m+h*A+d*M,a[7]=c*p+h*b+d*w,a[2]=u*x+f*y+g*T,a[5]=u*m+f*A+g*M,a[8]=u*p+f*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,f=c*a-r*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*r)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*a-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($o.makeScale(t,e)),this}rotate(t){return va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($o.makeRotation(-t)),this}translate(t,e){return va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;let Yt=Dh;const $o=new Yt,Gh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){const i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Me&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Me&&(s.r=_a(s.r),s.g=_a(s.g),s.b=_a(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}const le=Np();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class Fp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Ro("canvas")),Bs.width=t.width,Bs.height=t.height;const s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Vi(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Op=0;class rh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Zo(s[r].image)):a.push(Zo(s[r]))}else a=Zo(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let zp=0;const Jo=new R;class yn extends ks{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=zi,s=zi,a=_n,r=Rs,o=hi,l=Gn,c=yn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Hi(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zl:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zl:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=zu;yn.DEFAULT_ANISOTROPY=1;const Ih=class Ih{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,b=(f+1)/2,T=(p+1)/2,M=(h+u)/4,w=(d+x)/4,v=(g+m)/4;return A>b&&A>T?A<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(A),s=M/n,a=w/n):b>T?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=M/s,a=v/s):T<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),n=w/a,s=v/a),this.set(n,s,a,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;let ke=Ih;class Bp extends ks{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},a=new yn(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new rh(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hp extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Uo=class Uo{constructor(t,e,n,s,a,r,o,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,d,u,f,g,x,m)}set(t,e,n,s,a,r,o,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),a=1/Hs.setFromMatrixColumn(t,1).length(),r=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,f=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=x-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=r*l,f=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Gp)}lookAt(t,e,n){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),ji.crossVectors(n,On),ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ji.crossVectors(n,On)),ji.normalize(),br.crossVectors(On,ji),s[0]=ji.x,s[4]=br.x,s[8]=On.x,s[1]=ji.y,s[5]=br.y,s[9]=On.y,s[2]=ji.z,s[6]=br.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],A=n[7],b=n[11],T=n[15],M=s[0],w=s[4],v=s[8],E=s[12],C=s[1],I=s[5],L=s[9],F=s[13],D=s[2],z=s[6],X=s[10],W=s[14],it=s[3],G=s[7],j=s[11],nt=s[15];return a[0]=r*M+o*C+l*D+c*it,a[4]=r*w+o*I+l*z+c*G,a[8]=r*v+o*L+l*X+c*j,a[12]=r*E+o*F+l*W+c*nt,a[1]=h*M+d*C+u*D+f*it,a[5]=h*w+d*I+u*z+f*G,a[9]=h*v+d*L+u*X+f*j,a[13]=h*E+d*F+u*W+f*nt,a[2]=g*M+x*C+m*D+p*it,a[6]=g*w+x*I+m*z+p*G,a[10]=g*v+x*L+m*X+p*j,a[14]=g*E+x*F+m*W+p*nt,a[3]=y*M+A*C+b*D+T*it,a[7]=y*w+A*I+b*z+T*G,a[11]=y*v+A*L+b*X+T*j,a[15]=y*E+A*F+b*W+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],y=l*f-c*u,A=o*f-c*d,b=o*u-l*d,T=r*f-c*h,M=r*u-l*h,w=r*d-o*h;return e*(x*y-m*A+p*b)-n*(g*y-m*T+p*M)+s*(g*A-x*T+p*w)-a*(g*b-x*M+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=e*o-n*r,A=e*l-s*r,b=e*c-a*r,T=n*l-s*o,M=n*c-a*o,w=s*c-a*l,v=h*x-d*g,E=h*m-u*g,C=h*p-f*g,I=d*m-u*x,L=d*p-f*x,F=u*p-f*m,D=y*F-A*L+b*I+T*C-M*E+w*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return t[0]=(o*F-l*L+c*I)*z,t[1]=(s*L-n*F-a*I)*z,t[2]=(x*w-m*M+p*T)*z,t[3]=(u*M-d*w-f*T)*z,t[4]=(l*C-r*F-c*E)*z,t[5]=(e*F-s*C+a*E)*z,t[6]=(m*b-g*w-p*A)*z,t[7]=(h*w-u*b+f*A)*z,t[8]=(r*L-o*C+c*v)*z,t[9]=(n*C-e*L-a*v)*z,t[10]=(g*M-x*b+p*y)*z,t[11]=(d*b-h*M-f*y)*z,t[12]=(o*E-r*I-l*v)*z,t[13]=(e*I-n*E+s*v)*z,t[14]=(x*A-g*T-m*y)*z,t[15]=(h*T-d*A+u*y)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,f=a*h,g=a*d,x=r*h,m=r*d,p=o*d,y=l*c,A=l*h,b=l*d,T=n.x,M=n.y,w=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+b)*T,s[2]=(g-A)*T,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(u+p))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(g+A)*w,s[9]=(m-y)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();a<0&&(r=-r),ni.copy(this);const c=1/r,h=1/o,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,e.setFromRotationMatrix(ni),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,s,a,r,o=yi,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===yi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===fr)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=yi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===yi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===fr)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Uo.prototype.isMatrix4=!0;let re=Uo;const Hs=new R,ni=new re,Vp=new R(0,0,0),Gp=new R(1,1,1),ji=new R,br=new R,On=new R,Yh=new re,Xh=new cn;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wp=0;const qh=new R,Vs=new cn,Ri=new re,Sr=new R,Ra=new R,Yp=new R,Xp=new cn,Kh=new R(1,0,0),$h=new R(0,1,0),Zh=new R(0,0,1),Jh={type:"added"},qp={type:"removed"},Gs={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Je extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new R,e=new ei,n=new cn,s=new R(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ra,Sr,this.up):Ri.lookAt(Sr,Ra,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,Yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*s,a[13]+=n-a[1]*e-a[5]*n-a[9]*s,a[14]+=s-a[2]*e-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Je.DEFAULT_UP=new R(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jn extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},wr={h:0,s:0,l:0};function tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=sh(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=tl(r,a,t+1/3),this.g=tl(r,a,t),this.b=tl(r,a,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=vn){function n(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return le.workingToColorSpace(fn.copy(this),t),Math.round(ee(fn.r*255,0,255))*65536+Math.round(ee(fn.g*255,0,255))*256+Math.round(ee(fn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,a=fn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=vn){le.workingToColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(wr);const n=ir(ts.h,wr.h,e),s=ir(ts.s,wr.s,e),a=ir(ts.l,wr.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Bt;Bt.NAMES=Zu;class oh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ju extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ii=new R,Ci=new R,el=new R,Pi=new R,Ws=new R,Ys=new R,Qh=new R,nl=new R,il=new R,sl=new R,al=new ke,rl=new ke,ol=new ke;class Qn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ii.subVectors(t,e),s.cross(ii);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){ii.subVectors(s,e),Ci.subVectors(n,e),el.subVectors(t,e);const r=ii.dot(ii),o=ii.dot(Ci),l=ii.dot(el),c=Ci.dot(Ci),h=Ci.dot(el),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return al.setScalar(0),rl.setScalar(0),ol.setScalar(0),al.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(al,a.x),r.addScaledVector(rl,a.y),r.addScaledVector(ol,a.z),r}static isFrontFacing(t,e,n,s){return ii.subVectors(n,e),Ci.subVectors(t,e),ii.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ii.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;Ws.subVectors(s,n),Ys.subVectors(a,n),nl.subVectors(t,n);const l=Ws.dot(nl),c=Ys.dot(nl);if(l<=0&&c<=0)return e.copy(n);il.subVectors(t,s);const h=Ws.dot(il),d=Ys.dot(il);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Ws,r);sl.subVectors(t,a);const f=Ws.dot(sl),g=Ys.dot(sl);if(g>=0&&f<=g)return e.copy(a);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ys,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qh.subVectors(a,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Qh,o);const p=1/(m+x+u);return r=x*p,o=u*p,e.copy(n).addScaledVector(Ws,r).addScaledVector(Ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Us{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,si):si.fromBufferAttribute(a,r),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),Tr.subVectors(this.max,Ca),Xs.subVectors(t.a,Ca),qs.subVectors(t.b,Ca),Ks.subVectors(t.c,Ca),es.subVectors(qs,Xs),ns.subVectors(Ks,qs),gs.subVectors(Xs,Ks);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-gs.z,gs.y,es.z,0,-es.x,ns.z,0,-ns.x,gs.z,0,-gs.x,-es.y,es.x,0,-ns.y,ns.x,0,-gs.y,gs.x,0];return!ll(e,Xs,qs,Ks,Tr)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Xs,qs,Ks,Tr))?!1:(Ar.crossVectors(es,ns),e=[Ar.x,Ar.y,Ar.z],ll(e,Xs,qs,Ks,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new R,new R,new R,new R,new R,new R,new R,new R],si=new R,Er=new Us,Xs=new R,qs=new R,Ks=new R,es=new R,ns=new R,gs=new R,Ca=new R,Tr=new R,Ar=new R,vs=new R;function ll(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){vs.fromArray(i,a);const o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=t.dot(vs),c=e.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ze=new R,Rr=new yt;let $p=0;class Ke extends ks{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Qu extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ju extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Zp=new Us,Pa=new R,cl=new R;class Ns{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pa.subVectors(t,this.center);const e=Pa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pa.copy(t.center).add(cl)),this.expandByPoint(Pa.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Jp=0;const qn=new re,hl=new Je,$s=new R,zn=new Us,La=new Us,rn=new R;class Ue extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gp(t)?ju:Qu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Yt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];zn.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];La.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(zn.min,La.min),zn.expandByPoint(rn),rn.addVectors(zn.max,La.max),zn.expandByPoint(rn)):(zn.expandByPoint(La.min),zn.expandByPoint(La.max))}zn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)rn.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(t,c),rn.add($s)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new R,l[v]=new R;const c=new R,h=new R,d=new R,u=new yt,f=new yt,g=new yt,x=new R,m=new R;function p(v,E,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),u.fromBufferAttribute(a,v),f.fromBufferAttribute(a,E),g.fromBufferAttribute(a,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(x),o[E].add(x),o[C].add(x),l[v].add(m),l[E].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){const C=y[v],I=C.start,L=C.count;for(let F=I,D=I+L;F<D;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const A=new R,b=new R,T=new R,M=new R;function w(v){T.fromBufferAttribute(s,v),M.copy(T);const E=o[v];A.copy(E),A.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(M,E);const I=b.dot(l[v])<0?-1:1;r.setXYZW(v,A.x,A.y,A.z,I)}for(let v=0,E=y.length;v<E;++v){const C=y[v],I=C.start,L=C.count;for(let F=I,D=I+L;F<D;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ke(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xu,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Sn=new R;class Po{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),a=be(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Po(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dl=new R,jp=new R,t0=new Yt;class ls{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=dl.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(dl),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||t0.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let e0=0;class Yi extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=ga,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ls().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tf extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zs;const Da=new R,Js=new R,Qs=new R,js=new yt,Ia=new yt,ef=new re,Cr=new R,ka=new R,Pr=new R,jh=new yt,ul=new yt,td=new yt;class n0 extends Je{constructor(t=new tf){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qp(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Po(n,3,0,!1)),Zs.setAttribute("uv",new Po(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Qs.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Lr(Cr.set(-.5,-.5,0),Qs,r,Js,s,a),Lr(ka.set(.5,-.5,0),Qs,r,Js,s,a),Lr(Pr.set(.5,.5,0),Qs,r,Js,s,a),jh.set(0,0),ul.set(1,0),td.set(1,1);let o=t.ray.intersectTriangle(Cr,ka,Pr,!1,Da);if(o===null&&(Lr(ka.set(-.5,.5,0),Qs,r,Js,s,a),ul.set(0,1),o=t.ray.intersectTriangle(Cr,Pr,ka,!1,Da),o===null))return;const l=t.ray.origin.distanceTo(Da);l<t.near||l>t.far||e.push({distance:l,point:Da.clone(),uv:Qn.getInterpolation(Da,Cr,ka,Pr,jh,ul,td,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(i,t,e,n,s,a){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ia.x=a*js.x-s*js.y,Ia.y=s*js.x+a*js.y):Ia.copy(js),i.copy(t),i.x+=Ia.x,i.y+=Ia.y,i.applyMatrix4(ef)}const Di=new R,fl=new R,Dr=new R,Ir=new R;class lh{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Ir.copy(this.origin).sub(fl);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Dr),o=Ir.dot(this.direction),l=-Ir.dot(Dr),c=Ir.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fl).addScaledVector(Dr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),s=Di.dot(Di)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,f=t.z-r.z,g=e.x-r.x,x=e.y-r.y,m=e.z-r.z,p=n.x-r.x,y=n.y-r.y,A=n.z-r.z,b=Math.abs(l),T=Math.abs(c),M=Math.abs(h);let w,v,E,C,I,L,F,D,z,X,W,it;if(b>=T&&b>=M?(E=l,L=d,z=g,it=p,l>=0?(w=c,v=h,C=u,I=f,F=x,D=m,X=y,W=A):(w=h,v=c,C=f,I=u,F=m,D=x,X=A,W=y)):T>=M?(E=c,L=u,z=x,it=y,c>=0?(w=h,v=l,C=f,I=d,F=m,D=g,X=A,W=p):(w=l,v=h,C=d,I=f,F=g,D=m,X=p,W=A)):(E=h,L=f,z=m,it=A,h>=0?(w=l,v=c,C=d,I=u,F=g,D=x,X=p,W=y):(w=c,v=l,C=u,I=d,F=x,D=g,X=y,W=p)),E===0)return null;const G=w/E,j=v/E,nt=1/E,Dt=C-G*L,Pt=I-j*L,ge=F-G*z,qt=D-j*z,ie=X-G*it,$=W-j*it,et=ie*qt-$*ge,vt=Dt*$-Pt*ie,kt=ge*Pt-qt*Dt;if(s){if(et<0||vt<0||kt<0)return null}else if((et<0||vt<0||kt<0)&&(et>0||vt>0||kt>0))return null;const _t=et+vt+kt;if(_t===0)return null;const Kt=nt*(et*L+vt*z+kt*it);return(_t>0?Kt<0:Kt>0)?null:this.at(Kt/_t,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ba extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ed=new re,_s=new lh,kr=new Ns,nd=new R,Ur=new R,Nr=new R,Fr=new R,pl=new R,Or=new R,id=new R,zr=new R;class $t extends Je{constructor(t=new Ue,e=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Or.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(pl.fromBufferAttribute(d,t),r?Or.addScaledVector(pl,h):Or.addScaledVector(pl.sub(e),h))}e.add(Or)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(a),_s.copy(t.ray).recast(t.near),!(kr.containsPoint(_s.origin)===!1&&(_s.intersectSphere(kr,nd)===null||_s.origin.distanceToSquared(nd)>(t.far-t.near)**2))&&(ed.copy(a).invert(),_s.copy(t.ray).applyMatrix4(ed),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,T=A;b<T;b+=3){const M=o.getX(b),w=o.getX(b+1),v=o.getX(b+2);s=Br(this,p,t,n,c,h,d,M,w,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=Br(this,r,t,n,c,h,d,y,A,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,T=A;b<T;b+=3){const M=b,w=b+1,v=b+2;s=Br(this,p,t,n,c,h,d,M,w,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=m,A=m+1,b=m+2;s=Br(this,r,t,n,c,h,d,y,A,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function i0(i,t,e,n,s,a,r,o){let l;if(t.side===xn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===Ps,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function Br(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Fr);const h=i0(i,t,e,n,Ur,Nr,Fr,id);if(h){const d=new R;Qn.getBarycoord(id,Ur,Nr,Fr,d),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,l,c,d,new yt)),a&&(h.uv1=Qn.getInterpolatedAttribute(a,o,l,c,d,new yt)),r&&(h.normal=Qn.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};Qn.getNormal(Ur,Nr,Fr,u.normal),h.face=u,h.barycoord=d}return h}class nf extends yn{constructor(t=null,e=1,n=1,s,a,r,o,l,c=hn,h=hn,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sd extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ta=new re,ad=new re,Hr=[],rd=new Us,s0=new re,Ua=new $t,Na=new Ns;class xo extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ta),rd.copy(t.boundingBox).applyMatrix4(ta),this.boundingBox.union(rd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ta),Na.copy(t.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),t.ray.intersectsSphere(Na)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ta),ad.multiplyMatrices(n,ta),Ua.matrixWorld=ad,Ua.raycast(t,Hr);for(let r=0,o=Hr.length;r<o;r++){const l=Hr[r];l.instanceId=a,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nf(new Float32Array(s*this.count),s,this.count,Qc,ci));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xs=new Ns,a0=new yt(.5,.5),Vr=new R;class ch{constructor(t=new ls,e=new ls,n=new ls,s=new ls,a=new ls,r=new ls){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi,n=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],f=a[7],g=a[8],x=a[9],m=a[10],p=a[11],y=a[12],A=a[13],b=a[14],T=a[15];if(s[0].setComponents(c-r,f-h,p-g,T-y).normalize(),s[1].setComponents(c+r,f+h,p+g,T+y).normalize(),s[2].setComponents(c+o,f+d,p+x,T+A).normalize(),s[3].setComponents(c-o,f-d,p-x,T-A).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,f-u,p-m,T-b).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-b).normalize(),e===yi)s[5].setComponents(c+l,f+u,p+m,T+b).normalize();else if(e===fr)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);const e=a0.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hh extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new R,Do=new R,od=new re,Fa=new lh,Gr=new Ns,ml=new R,ld=new R;class sf extends Je{constructor(t=new Ue,e=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)Lo.fromBufferAttribute(e,s-1),Do.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new jt(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=a,t.ray.intersectsSphere(Gr)===!1)return;od.copy(s).invert(),Fa.copy(t.ray).applyMatrix4(od);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),y=h.getX(x+1),A=Wr(this,t,Fa,l,p,y,x);A&&e.push(A)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Wr(this,t,Fa,l,x,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=Wr(this,t,Fa,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Wr(this,t,Fa,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Wr(i,t,e,n,s,a,r){const o=i.geometry.attributes.position;if(Lo.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,a),e.distanceSqToSegment(Lo,Do,ml,ld)>n)return;ml.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ml);if(!(c<t.near||c>t.far))return{distance:c,point:ld.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const cd=new R,hd=new R;class r0 extends sf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)cd.fromBufferAttribute(e,s),hd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cd.distanceTo(hd);t.setAttribute("lineDistance",new jt(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o0 extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dd=new re,Rc=new lh,Yr=new Ns,Xr=new R;class af extends Je{constructor(t=new Ue,e=new o0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=a,t.ray.intersectsSphere(Yr)===!1)return;dd.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(dd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);Xr.fromBufferAttribute(d,m),ud(Xr,m,l,s,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,x=f;g<x;g++)Xr.fromBufferAttribute(d,g),ud(Xr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ud(i,t,e,n,s,a,r){const o=Rc.distanceSqToPoint(i);if(o<e){const l=new R;Rc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class rf extends yn{constructor(t=[],e=Ls,n,s,a,r,o,l,c,h){super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends yn{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mr extends yn{constructor(t,e,n=wi,s,a,r,o=hn,l=hn,c,h=Wi,d=1){if(h!==Wi&&h!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class l0 extends mr{constructor(t,e=wi,n=Ls,s,a,r=hn,o=hn,l,c=Wi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class of extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fe extends Ue{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(x,m,p,y,A,b,T,M,w,v,E){const C=b/w,I=T/v,L=b/2,F=T/2,D=M/2,z=w+1,X=v+1;let W=0,it=0;const G=new R;for(let j=0;j<X;j++){const nt=j*I-F;for(let Dt=0;Dt<z;Dt++){const Pt=Dt*C-L;G[x]=Pt*y,G[m]=nt*A,G[p]=D,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),d.push(Dt/w),d.push(1-j/v),W+=1}}for(let j=0;j<v;j++)for(let nt=0;nt<w;nt++){const Dt=u+nt+z*j,Pt=u+nt+z*(j+1),ge=u+(nt+1)+z*(j+1),qt=u+(nt+1)+z*j;l.push(Dt,Pt,qt),l.push(Pt,ge,qt),it+=6}o.addGroup(f,it,E),f+=it,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ce extends Ue{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;y(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function y(){const b=new R,T=new R;let M=0;const w=(e-t)/n;for(let v=0;v<=a;v++){const E=[],C=v/a,I=C*(e-t)+t;for(let L=0;L<=s;L++){const F=L/s,D=F*l+o,z=Math.sin(D),X=Math.cos(D);T.x=I*z,T.y=-C*n+m,T.z=I*X,d.push(T.x,T.y,T.z),b.set(z,w,X).normalize(),u.push(b.x,b.y,b.z),f.push(F,1-C),E.push(g++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<a;E++){const C=x[E][v],I=x[E+1][v],L=x[E+1][v+1],F=x[E][v+1];(t>0||E!==0)&&(h.push(C,I,F),M+=3),(e>0||E!==a-1)&&(h.push(I,L,F),M+=3)}c.addGroup(p,M,0),p+=M}function A(b){const T=g,M=new yt,w=new R;let v=0;const E=b===!0?t:e,C=b===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const I=g;for(let L=0;L<=s;L++){const D=L/s*l+o,z=Math.cos(D),X=Math.sin(D);w.x=E*X,w.y=m*C,w.z=E*z,d.push(w.x,w.y,w.z),u.push(0,C,0),M.x=z*.5+.5,M.y=X*.5*C+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){const F=T+L,D=I+L;b===!0?h.push(D,D+1,F):h.push(D+1,D,F),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi extends Ce{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(a.slice(),3)),this.setAttribute("uv",new jt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const A=new R,b=new R,T=new R;for(let M=0;M<e.length;M+=3)f(e[M+0],A),f(e[M+1],b),f(e[M+2],T),l(A,b,T,y)}function l(y,A,b,T){const M=T+1,w=[];for(let v=0;v<=M;v++){w[v]=[];const E=y.clone().lerp(b,v/M),C=A.clone().lerp(b,v/M),I=M-v;for(let L=0;L<=I;L++)L===0&&v===M?w[v][L]=E:w[v][L]=E.clone().lerp(C,L/I)}for(let v=0;v<M;v++)for(let E=0;E<2*(M-v)-1;E++){const C=Math.floor(E/2);E%2===0?(u(w[v][C+1]),u(w[v+1][C]),u(w[v][C])):(u(w[v][C+1]),u(w[v+1][C+1]),u(w[v+1][C]))}}function c(y){const A=new R;for(let b=0;b<a.length;b+=3)A.x=a[b+0],A.y=a[b+1],A.z=a[b+2],A.normalize().multiplyScalar(y),a[b+0]=A.x,a[b+1]=A.y,a[b+2]=A.z}function h(){const y=new R;for(let A=0;A<a.length;A+=3){y.x=a[A+0],y.y=a[A+1],y.z=a[A+2];const b=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;r.push(b,1-T)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const A=r[y+0],b=r[y+2],T=r[y+4],M=Math.max(A,b,T),w=Math.min(A,b,T);M>.9&&w<.1&&(A<.2&&(r[y+0]+=1),b<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function u(y){a.push(y.x,y.y,y.z)}function f(y,A){const b=y*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function g(){const y=new R,A=new R,b=new R,T=new R,M=new yt,w=new yt,v=new yt;for(let E=0,C=0;E<a.length;E+=9,C+=6){y.set(a[E+0],a[E+1],a[E+2]),A.set(a[E+3],a[E+4],a[E+5]),b.set(a[E+6],a[E+7],a[E+8]),M.set(r[C+0],r[C+1]),w.set(r[C+2],r[C+3]),v.set(r[C+4],r[C+5]),T.copy(y).add(A).add(b).divideScalar(3);const I=m(T);x(M,C+0,y,I),x(w,C+2,A,I),x(v,C+4,b,I)}}function x(y,A,b,T){T<0&&y.x===1&&(r[A]=y.x-1),b.x===0&&b.z===0&&(r[A]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.vertices,t.indices,t.radius,t.detail)}}class uh extends Fo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uh(t.radius,t.detail)}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],u=n[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new yt:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],a=[],r=[],o=new R,l=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}a[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ee(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(ee(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lf extends Xi{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new yt){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class c0 extends lf{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let i=0,t=0,e=0,n=0;function s(a,r,o,l){i=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,f*=h,s(r,o,u,f)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const fd=new R,pd=new R,gl=new fh,vl=new fh,_l=new fh;class ph extends Xi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(pd.subVectors(s[0],s[1]).add(s[0]),c=pd);const d=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(fd.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=fd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),gl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),vl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),_l.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),vl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gl.calc(l),vl.calc(l),_l.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function md(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*i+e}function h0(i,t){const e=1-i;return e*e*t}function d0(i,t){return 2*(1-i)*i*t}function u0(i,t){return i*i*t}function sr(i,t,e,n){return h0(i,t)+d0(i,e)+u0(i,n)}function f0(i,t){const e=1-i;return e*e*e*t}function p0(i,t){const e=1-i;return 3*e*e*i*t}function m0(i,t){return 3*(1-i)*i*i*t}function g0(i,t){return i*i*i*t}function ar(i,t,e,n,s){return f0(i,t)+p0(i,e)+m0(i,n)+g0(i,s)}class v0 extends Xi{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ar(t,s.x,a.x,r.x,o.x),ar(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _0 extends Xi{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ar(t,s.x,a.x,r.x,o.x),ar(t,s.y,a.y,r.y,o.y),ar(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x0 extends Xi{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends Xi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M0 extends Xi{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(sr(t,s.x,a.x,r.x),sr(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends Xi{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(sr(t,s.x,a.x,r.x),sr(t,s.y,a.y,r.y),sr(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b0 extends Xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(md(o,l.x,c.x,h.x,d.x),md(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new yt().fromArray(s))}return this}}var S0=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:ph,CubicBezierCurve:v0,CubicBezierCurve3:_0,EllipseCurve:lf,LineCurve:x0,LineCurve3:y0,QuadraticBezierCurve:M0,QuadraticBezierCurve3:cf,SplineCurve:b0});class mh extends Fo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mh(t.radius,t.detail)}}class ps extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*u-r;for(let A=0;A<c;A++){const b=A*d-a;g.push(b,-y,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const A=y+c*p,b=y+c*(p+1),T=y+1+c*(p+1),M=y+1+c*p;f.push(A,b,M),f.push(b,T,M)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.widthSegments,t.heightSegments)}}class gh extends Ue{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new R,g=new yt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,A=y,b=y+n+1,T=y+n+2,M=y+1;o.push(A,b,M),o.push(b,T,M)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vn extends Ue{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],A=p/n,b=r+A*o,T=t*Math.cos(b),M=Math.sqrt(t*t-T*T);let w=0;p===0&&r===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){const E=v/e,C=s+E*a;d.x=-M*Math.cos(C),d.y=T,d.z=M*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+w,1-A),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const A=h[p][y+1],b=h[p][y],T=h[p+1][y],M=h[p+1][y+1];(p!==0||r>0)&&f.push(A,b,M),(p!==n-1||l<Math.PI)&&f.push(b,T,M)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sa extends Ue{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new R,f=new R,g=new R;for(let x=0;x<=n;x++){const m=r+x/n*o;for(let p=0;p<=s;p++){const y=p/s*a;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,b=(s+1)*x+m;l.push(p,y,b),l.push(y,A,b)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Oo extends Ue{constructor(t=new cf(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new R,l=new R,c=new yt;let h=new R;const d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function x(){for(let A=0;A<e;A++)m(A);m(a===!1?e:0),y(),p()}function m(A){h=t.getPointAt(A/e,h);const b=r.normals[A],T=r.binormals[A];for(let M=0;M<=s;M++){const w=M/s*Math.PI*2,v=Math.sin(w),E=-Math.cos(w);l.x=E*b.x+v*T.x,l.y=E*b.y+v*T.y,l.z=E*b.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let b=1;b<=s;b++){const T=(s+1)*(A-1)+(b-1),M=(s+1)*A+(b-1),w=(s+1)*A+b,v=(s+1)*(A-1)+b;g.push(T,M,v),g.push(M,w,v)}}function y(){for(let A=0;A<=e;A++)for(let b=0;b<=s;b++)c.x=A/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Oo(new S0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function wa(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(gd(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gd(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][n]=a}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=wa(i[e]);for(const s in n)t[s]=n[s]}return t}function gd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function w0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const E0={clone:wa,merge:Tn};var T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wa(t.uniforms),this.uniformsGroups=w0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class R0 extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $a extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class da extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=qc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C0 extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vh extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class L0 extends vh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xl=new re,vd=new R,_d=new R;class D0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),_d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_d),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qr=new R,Kr=new cn,mi=new R;class df extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qr,Kr,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Kr,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qr,Kr,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Kr,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new R,xd=new yt,yd=new yt;class Jn extends df{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,xd,yd),e.subVectors(yd,xd)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class _h extends df{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class I0 extends D0{constructor(){super(new _h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k0 extends vh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new I0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class U0 extends vh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ea=-90,na=1;class N0 extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jn(ea,na,t,e);s.layers=this.layers,this.add(s);const a=new Jn(ea,na,t,e);a.layers=this.layers,this.add(a);const r=new Jn(ea,na,t,e);r.layers=this.layers,this.add(r);const o=new Jn(ea,na,t,e);o.layers=this.layers,this.add(o);const l=new Jn(ea,na,t,e);l.layers=this.layers,this.add(l);const c=new Jn(ea,na,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class F0 extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kh=class kh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const a=this.elements;return a[0]=t,a[2]=e,a[1]=n,a[3]=s,this}};kh.prototype.isMatrix2=!0;let Md=kh;function bd(i,t,e,n){const s=O0(n);switch(e){case Wu:return i*t;case Qc:return i*t/s.components*s.byteLength;case jc:return i*t/s.components*s.byteLength;case Ds:return i*t*2/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case Yu:return i*t*3/s.components*s.byteLength;case hi:return i*t*4/s.components*s.byteLength;case eh:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:case ec:return Math.max(i,16)*Math.max(t,8)/4;case Ql:case tc:return Math.max(i,8)*Math.max(t,8)/2;case nc:case ic:case ac:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sc:case So:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bc:case Sc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O0(i){switch(i){case Gn:case Bu:return{byteLength:1,components:1};case dr:case Hu:case Ei:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case wi:case $c:case ci:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);function uf(){let i=null,t=!1,e=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function z0(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Om=`uniform sampler2D dfgLUT;
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
}`,zm=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define MATCAP
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
}`,av=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,ov=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
}`,hv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,fv=`#define TOON
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,vv=`uniform vec3 color;
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
}`,_v=`uniform float rotation;
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
}`,xv=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:B0,alphahash_pars_fragment:H0,alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:Y0,aomap_fragment:X0,aomap_pars_fragment:q0,batching_pars_vertex:K0,batching_vertex:$0,begin_vertex:Z0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:j0,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:am,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:dm,displacementmap_pars_vertex:um,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:wm,fog_fragment:Em,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Im,lights_toon_pars_fragment:km,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:zm,lights_fragment_maps:Bm,lights_fragment_end:Hm,lightprobes_pars_fragment:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:tg,morphnormal_vertex:eg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:ag,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:vg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Sg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ig,transmission_fragment:kg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:zg,background_vert:Bg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Yg,depth_vert:Xg,depth_frag:qg,distance_vert:Kg,distance_frag:$g,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:jg,meshbasic_vert:tv,meshbasic_frag:ev,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:av,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:uv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:vv,sprite_vert:_v,sprite_frag:xv},ft={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Tn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Tn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Tn([ft.points,ft.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Tn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Tn([ft.common,ft.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Tn([ft.sprite,ft.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Tn([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Tn([ft.lights,ft.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const $r={r:0,b:0,g:0},yv=new re,ff=new Yt;ff.set(-1,0,0,0,1,0,0,0,1);function Mv(i,t,e,n,s,a){const r=new Bt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const b=y.backgroundBlurriness>0;A=t.get(A,b)}return A}function g(y){let A=!1;const b=f(y);b===null?m(r,o):b&&b.isColor&&(m(b,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,A){const b=f(A);b&&(b.isCubeTexture||b.mapping===No)?(c===void 0&&(c=new $t(new Fe(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:wa(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ff),c.material.toneMapped=le.getTransfer(b.colorSpace)!==Me,(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new $t(new ps(2,2),new Pn({name:"BackgroundMaterial",uniforms:wa(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=le.getTransfer(b.colorSpace)!==Me,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,A){y.getRGB($r,hf(i)),e.buffers.color.setClear($r.r,$r.g,$r.b,A,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,A=1){r.set(y),o=A,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(r,o)},render:g,addToRenderList:x,dispose:p}}function bv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(I,L,F,D,z){let X=!1;const W=d(I,D,F,L);a!==W&&(a=W,c(a.object)),X=f(I,D,F,z),X&&g(I,D,F,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,b(I,L,F,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,L,F,D){const z=D.wireframe===!0;let X=n[L.id];X===void 0&&(X={},n[L.id]=X);const W=I.isInstancedMesh===!0?I.id:0;let it=X[W];it===void 0&&(it={},X[W]=it);let G=it[F.id];G===void 0&&(G={},it[F.id]=G);let j=G[z];return j===void 0&&(j=u(l()),G[z]=j),j}function u(I){const L=[],F=[],D=[];for(let z=0;z<e;z++)L[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,L,F,D){const z=a.attributes,X=L.attributes;let W=0;const it=F.getAttributes();for(const G in it)if(it[G].location>=0){const nt=z[G];let Dt=X[G];if(Dt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Dt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Dt=I.instanceColor)),nt===void 0||nt.attribute!==Dt||Dt&&nt.data!==Dt.data)return!0;W++}return a.attributesNum!==W||a.index!==D}function g(I,L,F,D){const z={},X=L.attributes;let W=0;const it=F.getAttributes();for(const G in it)if(it[G].location>=0){let nt=X[G];nt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));const Dt={};Dt.attribute=nt,nt&&nt.data&&(Dt.data=nt.data),z[G]=Dt,W++}a.attributes=z,a.attributesNum=W,a.index=D}function x(){const I=a.newAttributes;for(let L=0,F=I.length;L<F;L++)I[L]=0}function m(I){p(I,0)}function p(I,L){const F=a.newAttributes,D=a.enabledAttributes,z=a.attributeDivisors;F[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),z[I]!==L&&(i.vertexAttribDivisor(I,L),z[I]=L)}function y(){const I=a.newAttributes,L=a.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==I[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function A(I,L,F,D,z,X,W){W===!0?i.vertexAttribIPointer(I,L,F,z,X):i.vertexAttribPointer(I,L,F,D,z,X)}function b(I,L,F,D){x();const z=D.attributes,X=F.getAttributes(),W=L.defaultAttributeValues;for(const it in X){const G=X[it];if(G.location>=0){let j=z[it];if(j===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const nt=j.normalized,Dt=j.itemSize,Pt=t.get(j);if(Pt===void 0)continue;const ge=Pt.buffer,qt=Pt.type,ie=Pt.bytesPerElement,$=qt===i.INT||qt===i.UNSIGNED_INT||j.gpuType===$c;if(j.isInterleavedBufferAttribute){const et=j.data,vt=et.stride,kt=j.offset;if(et.isInstancedInterleavedBuffer){for(let _t=0;_t<G.locationSize;_t++)p(G.location+_t,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<G.locationSize;_t++)m(G.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let _t=0;_t<G.locationSize;_t++)A(G.location+_t,Dt/G.locationSize,qt,nt,vt*ie,(kt+Dt/G.locationSize*_t)*ie,$)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)p(G.location+et,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let et=0;et<G.locationSize;et++)A(G.location+et,Dt/G.locationSize,qt,nt,Dt*ie,Dt/G.locationSize*et*ie,$)}}else if(W!==void 0){const nt=W[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(G.location,nt);break;case 3:i.vertexAttrib3fv(G.location,nt);break;case 4:i.vertexAttrib4fv(G.location,nt);break;default:i.vertexAttrib1fv(G.location,nt)}}}}y()}function T(){E();for(const I in n){const L=n[I];for(const F in L){const D=L[F];for(const z in D){const X=D[z];for(const W in X)h(X[W].object),delete X[W];delete D[z]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;const L=n[I.id];for(const F in L){const D=L[F];for(const z in D){const X=D[z];for(const W in X)h(X[W].object),delete X[W];delete D[z]}}delete n[I.id]}function w(I){for(const L in n){const F=n[L];for(const D in F){const z=F[D];if(z[I.id]===void 0)continue;const X=z[I.id];for(const W in X)h(X[W].object),delete X[W];delete z[I.id]}}}function v(I){for(const L in n){const F=n[L],D=I.isInstancedMesh===!0?I.id:0,z=F[D];if(z!==void 0){for(const X in z){const W=z[X];for(const it in W)h(W[it].object),delete W[it];delete z[X]}delete F[D],Object.keys(F).length===0&&delete n[L]}}}function E(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Sv(i,t,e){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function wv(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==hi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&w!==ci&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:b,maxSamples:T,samples:M}}function Ev(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new ls,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const y=a?0:n,A=y*4;let b=p.clippingState||null;l.value=b,b=h(g,u,A,f);for(let T=0;T!==A;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=f;A!==x;++A,b+=4)r.copy(d[A]).applyMatrix4(y,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const ma=4,Tv=6,Av=20,Rv=256,Oa=new _h,Sd=new Bt;let yl=null,Ml=0,bl=0,Sl=!1;const Cv=new R,ys=new R;class Cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=Cv}=a;yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Ml,bl),this._renderer.xr.enabled=Sl,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ma?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ei,format:hi,colorSpace:To,depthBuffer:!1},s=wd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pv(a)),this._blurMaterial=Dv(a,t,e),this._ggxMaterial=Lv(a,t,e)}return s}_compileMaterial(t){const e=new $t(new Ue,t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s,a){const l=new Jn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Sd),d.toneMapping=Si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new Fe,new ba({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Sd),p=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[A],a.y,a.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[A]));const T=this._cubeSize;ia(s,b*T,A>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ma?n-g+ma:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ia(a,m,p,3*x,2*x),s.setRenderTarget(a),s.render(o,Oa),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,ia(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,Oa)}_blur(t,e,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,n,r),this._blurPass(a,t,n,n,r)}_blurPass(t,e,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-ma?s-this._lodMax+ma:0),u=4*(this._cubeSize-h);ia(e,d,u,3*h,2*h),r.setRenderTarget(e),r.render(l,Oa)}}function Pv(i){const t=[],e=[];let n=i;const s=i-ma+1+Tv;for(let a=0;a<s;a++){const r=Math.pow(2,n);t.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,A=p>2?0:-1,b=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];g.set(b,f*u*p);for(let T=0;T<u;T++){const M=h[T*2]*2-1,w=h[T*2+1]*2-1;p===0?ys.set(1,w,M):p===1?ys.set(-M,1,-w):p===2?ys.set(-M,w,1):p===3?ys.set(-1,w,-M):p===4?ys.set(-M,-1,w):ys.set(M,w,-1),ys.toArray(x,(p*u+T)*f)}}const m=new Ue;m.setAttribute("position",new Ke(g,f)),m.setAttribute("outputDirection",new Ke(x,f)),e.push(new $t(m,null)),n>ma&&n--}return{lodMeshes:e,sizeLods:t}}function wd(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lv(i,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Dv(i,t,e){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ed(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Td(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pf extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),a=new Pn({name:"CubemapFromEquirect",uniforms:wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Bi});a.uniforms.tEquirect.value=e;const r=new $t(s,a),o=e.minFilter;return e.minFilter===Rs&&(e.minFilter=_n),new N0(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}function Iv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Wo||f===Yo)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new pf(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,g=f===Wo||f===Yo,x=f===Ls||f===Ma;if(g||x){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Cc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Cc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Wo?u.mapping=Ls:f===Yo&&(u.mapping=Ma),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function kv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&va("WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,t,e,n){const s={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const f=a.get(u);f&&(t.remove(f),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let A=0,b=y.length;A<b;A+=3){const T=y[A+0],M=y[A+1],w=y[A+2];u.push(T,M,M,w,w,T)}}else{const y=g.array;x=g.version;for(let A=0,b=y.length/3-1;A<b;A+=3){const T=A+0,M=A+1,w=A+2;u.push(T,M,M,w,w,T)}}const m=new(g.count>=65535?ju:Qu)(u,1);m.version=x;const p=a.get(d);p&&t.remove(p),a.set(d,m)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Nv(i,t,e){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){i.drawElements(n,u,a,d*r),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,a,d*r,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:fe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ov(i,t,e){const n=new WeakMap,s=new ke;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let C=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let T=o.attributes.position.count*b,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*M*4*d),v=new Ku(w,T,M,d);v.type=ci,v.needsUpdate=!0;const E=b*4;for(let I=0;I<d;I++){const L=p[I],F=y[I],D=A[I],z=T*M*4*I;for(let X=0;X<L.count;X++){const W=X*E;g===!0&&(s.fromBufferAttribute(L,X),w[z+W+0]=s.x,w[z+W+1]=s.y,w[z+W+2]=s.z,w[z+W+3]=0),x===!0&&(s.fromBufferAttribute(F,X),w[z+W+4]=s.x,w[z+W+5]=s.y,w[z+W+6]=s.z,w[z+W+7]=0),m===!0&&(s.fromBufferAttribute(D,X),w[z+W+8]=s.x,w[z+W+9]=s.y,w[z+W+10]=s.z,w[z+W+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new yt(T,M)},n.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function zv(i,t,e,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Bv={[Iu]:"LINEAR_TONE_MAPPING",[ku]:"REINHARD_TONE_MAPPING",[Uu]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Fu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Nu]:"CUSTOM_TONE_MAPPING"};function Hv(i,t,e,n,s,a){const r=new ui(t,e,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ue;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));const h=new R0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $t(c,h),u=new _h(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,p=null,y=[],A=!1;this.setSize=function(b,T){r.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let M=0;M<y.length;M++){const w=y[M];w.setSize&&w.setSize(b,T)}},this.setEffects=function(b){y=b,A=y.length>0&&y[0].isRenderPass===!0;const T=r.width,M=r.height;y.length>0&&o===null&&(o=new ui(T,M,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ui(T,M,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<y.length;w++){const v=y[w];v.setSize&&v.setSize(T,M)}},this.begin=function(b,T){if(x||b.toneMapping===Si&&y.length===0)return!1;if(p=T,T!==null){const M=T.width,w=T.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return A===!1&&b.setRenderTarget(r),m=b.toneMapping,b.toneMapping=Si,!0},this.hasRenderPass=function(){return A},this.end=function(b,T){b.toneMapping=m,x=!0;let M=r,w=o;for(let v=0;v<y.length;v++){const E=y[v];E.enabled!==!1&&(E.render(b,w,M,T),E.needsSwap!==!1&&(M=w,w=w===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},le.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");const v=Bv[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(p),b.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const mf=new yn,Pc=new mr(1,1),gf=new Ku,vf=new Hp,_f=new rf,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function Aa(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Ad[s];if(a===void 0&&(a=new Float32Array(s),Ad[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bo(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function Xv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),nn(e,n)}}function qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),nn(e,n)}}function Kv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),nn(e,n)}}function $v(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function Jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function i_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=e.isReversedDepthBuffer()?ih:nh,a=Pc):a=mf,e.setTexture2D(t||a,s)}function s_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vf,s)}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gf,s)}function o_(i){switch(i){case 5126:return Vv;case 35664:return Gv;case 35665:return Wv;case 35666:return Yv;case 35674:return Xv;case 35675:return qv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return jv;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return r_}}function l_(i,t){i.uniform1fv(this.addr,t)}function c_(i,t){const e=Aa(t,this.size,2);i.uniform2fv(this.addr,e)}function h_(i,t){const e=Aa(t,this.size,3);i.uniform3fv(this.addr,e)}function d_(i,t){const e=Aa(t,this.size,4);i.uniform4fv(this.addr,e)}function u_(i,t){const e=Aa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f_(i,t){const e=Aa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p_(i,t){const e=Aa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m_(i,t){i.uniform1iv(this.addr,t)}function g_(i,t){i.uniform2iv(this.addr,t)}function v_(i,t){i.uniform3iv(this.addr,t)}function __(i,t){i.uniform4iv(this.addr,t)}function x_(i,t){i.uniform1uiv(this.addr,t)}function y_(i,t){i.uniform2uiv(this.addr,t)}function M_(i,t){i.uniform3uiv(this.addr,t)}function b_(i,t){i.uniform4uiv(this.addr,t)}function S_(i,t,e){const n=this.cache,s=t.length,a=Bo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Pc:r=mf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function w_(i,t,e){const n=this.cache,s=t.length,a=Bo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||vf,a[r])}function E_(i,t,e){const n=this.cache,s=t.length,a=Bo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||_f,a[r])}function T_(i,t,e){const n=this.cache,s=t.length,a=Bo(e,s);en(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||gf,a[r])}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return d_;case 35674:return u_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return v_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return y_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}}class C_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}}class P_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function L_(i,t,e){const n=i.name,s=n.length;for(wl.lastIndex=0;;){const a=wl.exec(n),r=wl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Dd(e,c===void 0?new R_(o,i,t):new C_(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new P_(o),Dd(e,d)),e=d}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);L_(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Id(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D_=37297;let I_=0;function k_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const kd=new Yt;function U_(i){le._getMatrix(kd,le.workingColorSpace,i);const t=`mat3( ${kd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ud(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+k_(i.getShaderSource(t),o)}else return a}function N_(i,t){const e=U_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F_={[Iu]:"Linear",[ku]:"Reinhard",[Uu]:"Cineon",[Kc]:"ACESFilmic",[Fu]:"AgX",[Ou]:"Neutral",[Nu]:"Custom"};function O_(i,t){const e=F_[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new R;function z_(){le.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function H_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Za(i){return i!==""}function Nd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(G_,Y_)}const W_=new Map;function Y_(i,t){let e=Qt[t];if(e===void 0){const n=W_.get(t);if(n!==void 0)e=Qt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lc(e)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(X_,q_)}function q_(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function zd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const K_={[er]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function $_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z_={[Ls]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function J_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Z_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q_={[Ma]:"ENVMAP_MODE_REFRACTION"};function j_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tx={[qc]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[ap]:"ENVMAP_BLENDING_ADD"};function ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tx[i.combine]||"ENVMAP_BLENDING_NONE"}function nx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ix(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=$_(e),c=J_(e),h=j_(e),d=ex(e),u=nx(e),f=B_(e),g=H_(a),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Za).join(`
`),p.length>0&&(p+=`
`)):(m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),p=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Si?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,N_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Za).join(`
`)),r=Lc(r),r=Nd(r,e),r=Fd(r,e),o=Lc(o),o=Nd(o,e),o=Fd(o,e),r=Od(r),o=Od(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=y+m+r,b=y+p+o,T=Id(s,s.VERTEX_SHADER,A),M=Id(s,s.FRAGMENT_SHADER,b);s.attachShader(x,T),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(M)||"",z=L.trim(),X=F.trim(),W=D.trim();let it=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,M);else{const j=Ud(s,T,"vertex"),nt=Ud(s,M,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+j+`
`+nt)}else z!==""?Nt("WebGLProgram: Program Info Log:",z):(X===""||W==="")&&(G=!1);G&&(I.diagnostics={runnable:it,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(T),s.deleteShader(M),v=new yo(s,x),E=V_(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,D_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}let sx=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rx(t),e.set(t,n)),n}}class rx{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}}function ox(i){return i===Ds||i===So||i===wo}function lx(i,t,e,n,s,a){const r=new $u,o=new ax,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,C,I,L,F){const D=I.fog,z=L.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,it=t.get(v.envMap||X,W),G=it&&it.mapping===No?it.image.height:null,j=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=nt!==void 0?nt.length:0;let Pt=0;z.morphAttributes.position!==void 0&&(Pt=1),z.morphAttributes.normal!==void 0&&(Pt=2),z.morphAttributes.color!==void 0&&(Pt=3);let ge,qt,ie,$;if(j){const Se=_i[j];ge=Se.vertexShader,qt=Se.fragmentShader}else{ge=v.vertexShader,qt=v.fragmentShader;const Se=o.getVertexShaderStage(v),me=o.getFragmentShaderStage(v);o.update(v,Se,me),ie=Se.id,$=me.id}const et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,_t=L.isBatchedMesh===!0,Kt=!!v.map,We=!!v.matcap,Zt=!!it,se=!!v.aoMap,pe=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,xe=!!v.normalMap,Oe=!!v.displacementMap,sn=!!v.emissiveMap,Pe=!!v.metalnessMap,Ve=!!v.roughnessMap,N=v.anisotropy>0,ze=v.clearcoat>0,de=v.dispersion>0,P=v.retroreflectivity>0,_=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,K=N&&!!v.anisotropyMap,at=ze&&!!v.clearcoatMap,lt=ze&&!!v.clearcoatNormalMap,Z=ze&&!!v.clearcoatRoughnessMap,tt=_&&!!v.iridescenceMap,ct=_&&!!v.iridescenceThicknessMap,At=O&&!!v.sheenColorMap,ut=O&&!!v.sheenRoughnessMap,rt=!!v.specularMap,St=!!v.specularColorMap,It=!!v.specularIntensityMap,Gt=V&&!!v.transmissionMap,U=V&&!!v.thicknessMap,ot=!!v.gradientMap,Q=!!v.alphaMap,ht=v.alphaTest>0,pt=!!v.alphaHash,st=!!v.extensions;let Lt=Si;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const wt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:qt,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_t,batchingColor:_t&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:We,envMap:Zt,envMapMode:Zt&&it.mapping,envMapCubeUVHeight:G,aoMap:se,lightMap:pe,bumpMap:Ft,normalMap:xe,displacementMap:Oe,emissiveMap:sn,normalMapObjectSpace:xe&&v.normalMapType===lp,normalMapTangentSpace:xe&&v.normalMapType===Eo,packedNormalMap:xe&&v.normalMapType===Eo&&ox(v.normalMap.format),metalnessMap:Pe,roughnessMap:Ve,anisotropy:N,anisotropyMap:K,clearcoat:ze,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:Z,dispersion:de,retroreflection:P,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:O,sheenColorMap:At,sheenRoughnessMap:ut,specularMap:rt,specularColorMap:St,specularIntensityMap:It,transmission:V,transmissionMap:Gt,thicknessMap:U,gradientMap:ot,opaque:v.transparent===!1&&v.blending===ga&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:pt,combine:v.combine,mapUv:Kt&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:pe&&g(v.lightMap.channel),bumpMapUv:Ft&&g(v.bumpMap.channel),normalMapUv:xe&&g(v.normalMap.channel),displacementMapUv:Oe&&g(v.displacementMap.channel),emissiveMapUv:sn&&g(v.emissiveMap.channel),metalnessMapUv:Pe&&g(v.metalnessMap.channel),roughnessMapUv:Ve&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:at&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(v.sheenRoughnessMap.channel),specularMapUv:rt&&g(v.specularMap.channel),specularColorMapUv:St&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:Gt&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||N),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Kt||Q),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&xe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Pt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===Me,decodeVideoTextureEmissive:sn&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function A(v){const E=f[v.type];let C;if(E){const I=_i[E];C=E0.clone(I.uniforms)}else C=v.uniforms;return C}function b(v,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new ix(i,E,v,s),c.push(C),h.set(E,C)),C}function T(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:w}}function cx(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hd(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=r(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,f,g,x,m,p,y){y.reversedDepth===!0&&(m=-m);const A=o(u,f,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,f,g,x,m,p){const y=o(u,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||hx),n.length>1&&n.sort(f||Bd),s.length>1&&s.sort(f||Bd)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function dx(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new Hd,i.set(n,[r])):s>=a.length?(r=new Hd,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function ux(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Bt};break;case"SpotLight":e={position:new R,direction:new R,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let px=0;function mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gx(i){const t=new ux,e=fx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,a=new re,r=new re;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,A=0,b=0,T=0,M=0,w=0,v=0,E=0,C=0;c.sort(mx);for(let L=0,F=c.length;L<F;L++){const D=c[L],z=D.color,X=D.intensity,W=D.distance;let it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ds?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*X,d+=z.g*X,u+=z.b*X;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],X);C++}else if(D.isSunLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=it;const Dt=j.getViewportCount();for(let Pt=0;Pt<Dt;Pt++)n.sunShadowMatrix[x+Pt]=j.getMatrix(Pt),n.sunShadowCascade[x+Pt]=j._cascadeData[Pt];x+=Dt,g++}n.sun[f]=G,f++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(X),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[y]=G;const j=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,j.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=j.matrix,D.castShadow){const nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[y]=nt,n.spotShadowMap[y]=it,w++}y++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(z).multiplyScalar(X),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=G,A++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=D.shadow.matrix,M++}n.point[p]=G,p++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(X),G.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[b]=G,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==A||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==w||I.numSpotMaps!==v||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=A,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=y,I.rectAreaLength=A,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=w,I.numSpotMaps=v,I.numLightProbes=C,n.version=px++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let y=0,A=c.length;y<A;y++){const b=c[y];if(b.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(b.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),r.identity(),a.copy(b.matrixWorld),a.premultiply(p),r.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),x++}else if(b.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Vd(i){const t=new gx(i),e=[],n=[],s=[];function a(u){d.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function vx(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Vd(i),t.set(s,[o])):a>=r.length?(o=new Vd(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,yx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Mx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Gd=new re,za=new R,El=new R;function bx(i,t,e){let n=new ch;const s=new yt,a=new yt,r=new ke,o=new C0,l=new P0,c={},h=e.maxTextureSize,d={[Ps]:xn,[xn]:Ps,[on]:on},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let p=this.type;this.render=function(M,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===zf&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Bi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==this.type;F&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=M.length;D<z;D++){const X=M[D],W=X.shadow;if(W===void 0){Nt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();s.multiply(it),a.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/it.x),s.x=a.x*it.x,W.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/it.y),s.y=a.y*it.y,W.mapSize.y=a.y));const G=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ka){if(X.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ui(s.x,s.y,{format:Ds,type:Ei,minFilter:_n,magFilter:_n,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new mr(s.x,s.y,ci),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Wi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn}else X.isPointLight?(W.map=new pf(s.x),W.map.depthTexture=new l0(s.x,wi)):(W.map=new ui(s.x,s.y),W.map.depthTexture=new mr(s.x,s.y,wi)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Wi,this.type===er?(W.map.depthTexture.compareFunction=G?ih:nh,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,v);for(let nt=0;nt<j;nt++){const Dt=W.getCamera(nt);if(X.isPointLight){const Pt=W.camera,ge=W.matrix,qt=X.distance||Pt.far;qt!==Pt.far&&(Pt.far=qt,Pt.updateProjectionMatrix()),za.setFromMatrixPosition(X.matrixWorld),Pt.position.copy(za),El.copy(Pt.position),El.add(yx[nt]),Pt.up.copy(Mx[nt]),Pt.lookAt(El),Pt.updateMatrixWorld(),ge.makeTranslation(-za.x,-za.y,-za.z),Gd.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Gd,Pt.coordinateSystem,Pt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(W.map),i.clear());const Pt=W.getViewport(nt);r.set(a.x*Pt.x,a.y*Pt.y,a.x*Pt.z,a.y*Pt.w),L.viewport(r)}n=W.getFrustum(nt),b(w,v,Dt,X,this.type)}W.isPointLightShadow!==!0&&this.type===Ka&&y(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,I)};function y(M,w){const v=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new ui(s.x,s.y,{format:Ds,type:Ei}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,f,x,null)}function A(M,w,v,E){let C=null;const I=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)C=I;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=C.uuid,F=w.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let z=D[F];z===void 0&&(z=C.clone(),D[F]=z,w.addEventListener("dispose",T)),C=z}if(C.visible=w.visible,C.wireframe=w.wireframe,E===Ka?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=v}return C}function b(M,w,v,E,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Ka)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const F=t.update(M),D=M.material;if(Array.isArray(D)){const z=F.groups;for(let X=0,W=z.length;X<W;X++){const it=z[X],G=D[it.materialIndex];if(G&&G.visible){const j=A(M,G,E,C);M.onBeforeShadow(i,M,w,v,F,j,it),i.renderBufferDirect(v,null,F,j,M,it),M.onAfterShadow(i,M,w,v,F,j,it)}}}else if(D.visible){const z=A(M,D,E,C);M.onBeforeShadow(i,M,w,v,F,z,null),i.renderBufferDirect(v,null,F,z,M,null),M.onAfterShadow(i,M,w,v,F,z,null)}}const L=M.children;for(let F=0,D=L.length;F<D;F++)b(L[F],w,v,E,C)}function T(M){M.target.removeEventListener("dispose",T);for(const v in c){const E=c[v],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Sx(i,t){function e(){let U=!1;const ot=new ke;let Q=null;const ht=new ke(0,0,0,0);return{setMask:function(pt){Q!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),Q=pt)},setLocked:function(pt){U=pt},setClear:function(pt,st,Lt,wt,Se){Se===!0&&(pt*=wt,st*=wt,Lt*=wt),ot.set(pt,st,Lt,wt),ht.equals(ot)===!1&&(i.clearColor(pt,st,Lt,wt),ht.copy(ot))},reset:function(){U=!1,Q=null,ht.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,Q=null,ht=null,pt=null;return{setReversed:function(st){if(ot!==st){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ot=st;const wt=pt;pt=null,this.setClear(wt)}},getReversed:function(){return ot},setTest:function(st){st?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){Q!==st&&!U&&(i.depthMask(st),Q=st)},setFunc:function(st){if(ot&&(st=xp[st]),ht!==st){switch(st){case Gl:i.depthFunc(i.NEVER);break;case Wl:i.depthFunc(i.ALWAYS);break;case Yl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Xl:i.depthFunc(i.EQUAL);break;case ql:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=st}},setLocked:function(st){U=st},setClear:function(st){pt!==st&&(pt=st,ot&&(st=1-st),i.clearDepth(st))},reset:function(){U=!1,Q=null,ht=null,pt=null,ot=!1}}}function s(){let U=!1,ot=null,Q=null,ht=null,pt=null,st=null,Lt=null,wt=null,Se=null;return{setTest:function(me){U||(me?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(me){ot!==me&&!U&&(i.stencilMask(me),ot=me)},setFunc:function(me,J,dt){(Q!==me||ht!==J||pt!==dt)&&(i.stencilFunc(me,J,dt),Q=me,ht=J,pt=dt)},setOp:function(me,J,dt){(st!==me||Lt!==J||wt!==dt)&&(i.stencilOp(me,J,dt),st=me,Lt=J,wt=dt)},setLocked:function(me){U=me},setClear:function(me){Se!==me&&(i.clearStencil(me),Se=me)},reset:function(){U=!1,ot=null,Q=null,ht=null,pt=null,st=null,Lt=null,wt=null,Se=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,A=null,b=null,T=null,M=null,w=null,v=new Bt(0,0,0),E=0,C=!1,I=null,L=null,F=null,D=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,it=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=it>=2);let j=null,nt={};const Dt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),ge=new ke().fromArray(Dt),qt=new ke().fromArray(Pt);function ie(U,ot,Q,ht){const pt=new Uint8Array(4),st=i.createTexture();i.bindTexture(U,st),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Q;Lt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ot+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return st}const $={};$[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(i.DEPTH_TEST),r.setFunc(hr),Ft(!1),xe(Nh),et(i.CULL_FACE),se(Bi);function et(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function kt(U,ot){return u[U]!==ot?(i.bindFramebuffer(U,ot),u[U]=ot,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(U,ot){let Q=g,ht=!1;if(U){Q=f.get(ot),Q===void 0&&(Q=[],f.set(ot,Q));const pt=U.textures;if(Q.length!==pt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Lt=pt.length;st<Lt;st++)Q[st]=i.COLOR_ATTACHMENT0+st;Q.length=pt.length,ht=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Q)}function Kt(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const We={[ha]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};We[Gf]=i.MIN,We[Wf]=i.MAX;const Zt={[Yf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[Qf]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function se(U,ot,Q,ht,pt,st,Lt,wt,Se,me){if(U===Bi){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),U!==Bf){if(U!==p||me!==C){if((y!==ha||T!==ha)&&(i.blendEquation(i.FUNC_ADD),y=ha,T=ha),me)switch(U){case ga:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",U);break}else switch(U){case ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fh:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",U);break}A=null,b=null,M=null,w=null,v.set(0,0,0),E=0,p=U,C=me}return}pt=pt||ot,st=st||Q,Lt=Lt||ht,(ot!==y||pt!==T)&&(i.blendEquationSeparate(We[ot],We[pt]),y=ot,T=pt),(Q!==A||ht!==b||st!==M||Lt!==w)&&(i.blendFuncSeparate(Zt[Q],Zt[ht],Zt[st],Zt[Lt]),A=Q,b=ht,M=st,w=Lt),(wt.equals(v)===!1||Se!==E)&&(i.blendColor(wt.r,wt.g,wt.b,Se),v.copy(wt),E=Se),p=U,C=!1}function pe(U,ot){U.side===on?vt(i.CULL_FACE):et(i.CULL_FACE);let Q=U.side===xn;ot&&(Q=!Q),Ft(Q),U.blending===ga&&U.transparent===!1?se(Bi):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),sn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function xe(U){U!==Ff?(et(i.CULL_FACE),U!==L&&(U===Nh?i.cullFace(i.BACK):U===Of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),L=U}function Oe(U){U!==F&&(W&&i.lineWidth(U),F=U)}function sn(U,ot,Q){U?(et(i.POLYGON_OFFSET_FILL),(D!==ot||z!==Q)&&(D=ot,z=Q,r.getReversed()&&(ot=-ot),i.polygonOffset(ot,Q))):vt(i.POLYGON_OFFSET_FILL)}function Pe(U){U?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Ve(U){U===void 0&&(U=i.TEXTURE0+X-1),j!==U&&(i.activeTexture(U),j=U)}function N(U,ot,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+X-1:Q=j);let ht=nt[Q];ht===void 0&&(ht={type:void 0,texture:void 0},nt[Q]=ht),(ht.type!==U||ht.texture!==ot)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(U,ot||$[U]),ht.type=U,ht.texture=ot)}function ze(){const U=nt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function at(){try{i.texStorage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function lt(){try{i.texStorage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function tt(){try{i.texImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function ct(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function At(U,ot){d[U]!==ot&&(i.pixelStorei(U,ot),d[U]=ot)}function ut(U){ge.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function rt(U){qt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qt.copy(U))}function St(U,ot){let Q=c.get(ot);Q===void 0&&(Q=new WeakMap,c.set(ot,Q));let ht=Q.get(U);ht===void 0&&(ht=i.getUniformBlockIndex(ot,U.name),Q.set(U,ht))}function It(U,ot){const ht=c.get(ot).get(U);l.get(ot)!==ht&&(i.uniformBlockBinding(ot,ht,U.__bindingPointIndex),l.set(ot,ht))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,nt={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,A=null,b=null,T=null,M=null,w=null,v=new Bt(0,0,0),E=0,C=!1,I=null,L=null,F=null,D=null,z=null,ge.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:vt,bindFramebuffer:kt,drawBuffers:_t,useProgram:Kt,setBlending:se,setMaterial:pe,setFlipSided:Ft,setCullFace:xe,setLineWidth:Oe,setPolygonOffset:sn,setScissorTest:Pe,activeTexture:Ve,bindTexture:N,unbindTexture:ze,compressedTexImage2D:de,compressedTexImage3D:P,texImage2D:Z,texImage3D:tt,pixelStorei:At,getParameter:ct,updateUBOMapping:St,uniformBlockBinding:It,texStorage2D:at,texStorage3D:lt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ut,viewport:rt,reset:Gt}}function wx(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,_){return g?new OffscreenCanvas(P,_):Ro("canvas")}function m(P,_,O){let V=1;const K=de(P);if((K.width>O||K.height>O)&&(V=O/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const at=Math.floor(V*K.width),lt=Math.floor(V*K.height);u===void 0&&(u=x(at,lt));const Z=_?x(at,lt):u;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(P,0,0,at,lt),Nt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+lt+")."),Z}else return"data"in P&&Nt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function p(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,_,O,V,K,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt;V&&(lt=t.get("EXT_texture_norm16"),lt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),O===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),O===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),O===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){const tt=at?Ao:le.getTransfer(K);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=tt===Me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),O===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(P,_){let O;return P?_===null||_===wi||_===ur?O=i.DEPTH24_STENCIL8:_===ci?O=i.DEPTH32F_STENCIL8:_===dr&&(O=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===ur?O=i.DEPTH_COMPONENT24:_===ci?O=i.DEPTH_COMPONENT32F:_===dr&&(O=i.DEPTH_COMPONENT16),O}function M(P,_){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==_n?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function w(P){const _=P.target;_.removeEventListener("dispose",w),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(P){const _=P.target;_.removeEventListener("dispose",v),I(_)}function E(P){const _=n.get(P);if(_.__webglInit===void 0)return;const O=P.source,V=f.get(O);if(V){const K=V[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(P),Object.keys(V).length===0&&f.delete(O)}n.remove(P)}function C(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const O=P.source,V=f.get(O);delete V[_.__cacheKey],r.memory.textures--}function I(P){const _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[V][K]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=P.textures;for(let V=0,K=O.length;V<K;V++){const at=n.get(O[V]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),r.memory.textures--),n.remove(O[V])}n.remove(P)}let L=0;function F(){L=0}function D(){return L}function z(P){L=P}function X(){const P=L;return P>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function W(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function it(P,_){const O=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const V=P.image;if(V===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,P,_);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function G(P,_){const O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){vt(O,P,_);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function j(P,_){const O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){vt(O,P,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function nt(P,_){const O=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){kt(O,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const Dt={[Zl]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Jl]:i.MIRRORED_REPEAT},Pt={[hn]:i.NEAREST,[rp]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},ge={[hp]:i.NEVER,[mp]:i.ALWAYS,[dp]:i.LESS,[nh]:i.LEQUAL,[up]:i.EQUAL,[ih]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function qt(P,_){if(_.type===ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===_n||_.magFilter===Xo||_.magFilter===Mr||_.magFilter===Rs||_.minFilter===_n||_.minFilter===Xo||_.minFilter===Mr||_.minFilter===Rs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Dt[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Dt[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Dt[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Pt[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Pt[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Mr&&_.minFilter!==Rs||_.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(P,_){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",w));const V=_.source;let K=f.get(V);K===void 0&&(K={},f.set(V,K));const at=W(_);if(at!==P.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),K[at].usedTimes++;const lt=K[P.__cacheKey];lt!==void 0&&(K[P.__cacheKey].usedTimes--,lt.usedTimes===0&&C(_)),P.__cacheKey=at,P.__webglTexture=K[at].texture}return O}function $(P,_,O){return Math.floor(Math.floor(P/O)/_)}function et(P,_,O,V){const at=P.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{at.sort((At,ut)=>At.start-ut.start);let lt=0;for(let At=1;At<at.length;At++){const ut=at[lt],rt=at[At],St=ut.start+ut.count,It=$(rt.start,_.width,4),Gt=$(ut.start,_.width,4);rt.start<=St+1&&It===Gt&&$(rt.start+rt.count-1,_.width,4)===It?ut.count=Math.max(ut.count,rt.start+rt.count-ut.start):(++lt,at[lt]=rt)}at.length=lt+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let At=0,ut=at.length;At<ut;At++){const rt=at[At],St=Math.floor(rt.start/4),It=Math.ceil(rt.count/4),Gt=St%_.width,U=Math.floor(St/_.width),ot=It,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Gt,U,ot,Q,O,V,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function vt(P,_,O){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const K=ie(P,_),at=_.source;e.bindTexture(V,P.__webglTexture,i.TEXTURE0+O);const lt=n.get(at);if(at.version!==lt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=le.getPrimaries(le.workingColorSpace),ht=_.colorSpace===cs?null:le.getPrimaries(_.colorSpace),pt=_.colorSpace===cs||Q===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=ze(_,tt);const ct=a.convert(_.format,_.colorSpace),At=a.convert(_.type);let ut=b(_.internalFormat,ct,At,_.normalized,_.colorSpace,_.isVideoTexture);qt(V,_);let rt;const St=_.mipmaps,It=_.isVideoTexture!==!0,Gt=lt.__version===void 0||K===!0,U=at.dataReady,ot=M(_,tt);if(_.isDepthTexture)ut=T(_.format===Cs,_.type),Gt&&(It?e.texStorage2D(i.TEXTURE_2D,1,ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ct,At,null));else if(_.isDataTexture)if(St.length>0){It&&Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,St[0].width,St[0].height);for(let Q=0,ht=St.length;Q<ht;Q++)rt=St[Q],It?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,At,rt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,ct,At,rt.data);_.generateMipmaps=!1}else It?(Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,tt.width,tt.height),U&&et(_,tt,ct,At)):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ct,At,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ut,St[0].width,St[0].height,tt.depth);for(let Q=0,ht=St.length;Q<ht;Q++)if(rt=St[Q],_.format!==hi)if(ct!==null)if(It){if(U)if(_.layerUpdates.size>0){const pt=bd(rt.width,rt.height,_.format,_.type);for(const st of _.layerUpdates){const Lt=rt.data.subarray(st*pt/rt.data.BYTES_PER_ELEMENT,(st+1)*pt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,st,rt.width,rt.height,1,ct,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ct,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ut,rt.width,rt.height,tt.depth,0,rt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,tt.depth,ct,At,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ut,rt.width,rt.height,tt.depth,0,ct,At,rt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Gt&&e.texStorage2D(i.TEXTURE_2D,ot,ut,St[0].width,St[0].height);for(let Q=0,ht=St.length;Q<ht;Q++)rt=St[Q],_.format!==hi?ct!==null?It?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,rt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,rt.width,rt.height,ct,At,rt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,rt.width,rt.height,0,ct,At,rt.data)}else if(_.isDataArrayTexture)if(It){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ut,tt.width,tt.height,tt.depth),U)if(_.layerUpdates.size>0){const Q=bd(tt.width,tt.height,_.format,_.type);for(const ht of _.layerUpdates){const pt=tt.data.subarray(ht*Q/tt.data.BYTES_PER_ELEMENT,(ht+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,tt.width,tt.height,1,ct,At,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,At,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,tt.width,tt.height,tt.depth,0,ct,At,tt.data);else if(_.isData3DTexture)It?(Gt&&e.texStorage3D(i.TEXTURE_3D,ot,ut,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,At,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ut,tt.width,tt.height,tt.depth,0,ct,At,tt.data);else if(_.isFramebufferTexture){if(Gt)if(It)e.texStorage2D(i.TEXTURE_2D,ot,ut,tt.width,tt.height);else{let Q=tt.width,ht=tt.height;for(let pt=0;pt<ot;pt++)e.texImage2D(i.TEXTURE_2D,pt,ut,Q,ht,0,ct,At,null),Q>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(_),Q.onpaint=ht=>{const pt=ht.changedElements;for(const st of d)pt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const pt=i.RGBA,st=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,st,Lt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(St.length>0){if(It&&Gt){const Q=de(St[0]);e.texStorage2D(i.TEXTURE_2D,ot,ut,Q.width,Q.height)}for(let Q=0,ht=St.length;Q<ht;Q++)rt=St[Q],It?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct,At,rt):e.texImage2D(i.TEXTURE_2D,Q,ut,ct,At,rt);_.generateMipmaps=!1}else if(It){if(Gt){const Q=de(tt);e.texStorage2D(i.TEXTURE_2D,ot,ut,Q.width,Q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,At,tt)}else e.texImage2D(i.TEXTURE_2D,0,ut,ct,At,tt);p(_)&&y(V),lt.__version=at.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function kt(P,_,O){if(_.image.length!==6)return;const V=ie(P,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+O);const at=n.get(K);if(K.version!==at.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const lt=le.getPrimaries(le.workingColorSpace),Z=_.colorSpace===cs?null:le.getPrimaries(_.colorSpace),tt=_.colorSpace===cs||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ct=_.isCompressedTexture||_.image[0].isCompressedTexture,At=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let st=0;st<6;st++)!ct&&!At?ut[st]=m(_.image[st],!0,s.maxCubemapSize):ut[st]=At?_.image[st].image:_.image[st],ut[st]=ze(_,ut[st]);const rt=ut[0],St=a.convert(_.format,_.colorSpace),It=a.convert(_.type),Gt=b(_.internalFormat,St,It,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ot=at.__version===void 0||V===!0,Q=K.dataReady;let ht=M(_,rt);qt(i.TEXTURE_CUBE_MAP,_);let pt;if(ct){U&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,rt.width,rt.height);for(let st=0;st<6;st++){pt=ut[st].mipmaps;for(let Lt=0;Lt<pt.length;Lt++){const wt=pt[Lt];_.format!==hi?St!==null?U?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Gt,wt.width,wt.height,0,wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,wt.width,wt.height,St,It,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Gt,wt.width,wt.height,0,St,It,wt.data)}}}else{if(pt=_.mipmaps,U&&ot){pt.length>0&&ht++;const st=de(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,st.width,st.height)}for(let st=0;st<6;st++)if(At){U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ut[st].width,ut[st].height,St,It,ut[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,ut[st].width,ut[st].height,0,St,It,ut[st].data);for(let Lt=0;Lt<pt.length;Lt++){const Se=pt[Lt].image[st].image;U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Se.width,Se.height,St,It,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Gt,Se.width,Se.height,0,St,It,Se.data)}}else{U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St,It,ut[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,St,It,ut[st]);for(let Lt=0;Lt<pt.length;Lt++){const wt=pt[Lt];U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,St,It,wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Gt,St,It,wt.image[st])}}}p(_)&&y(i.TEXTURE_CUBE_MAP),at.__version=K.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function _t(P,_,O,V,K,at){const lt=a.convert(O.format,O.colorSpace),Z=a.convert(O.type),tt=b(O.internalFormat,lt,Z,O.normalized,O.colorSpace),ct=n.get(_),At=n.get(O);if(At.__renderTarget=_,!ct.__hasExternalTextures){const ut=Math.max(1,_.width>>at),rt=Math.max(1,_.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,tt,ut,rt,_.depth,0,lt,Z,null):e.texImage2D(K,at,tt,ut,rt,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,At.__webglTexture,0,Pe(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,At.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(P,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,at=T(_.stencilBuffer,K),lt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(_),at,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,P)}else{const V=_.textures;for(let K=0;K<V.length;K++){const at=V[K],lt=a.convert(at.format,at.colorSpace),Z=a.convert(at.type),tt=b(at.internalFormat,lt,Z,at.normalized,at.colorSpace);Ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(_),tt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(P,_,O){const V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_.depthTexture);const ct=a.convert(_.depthTexture.format),At=a.convert(_.depthTexture.type);let ut;_.depthTexture.format===Wi?ut=i.DEPTH_COMPONENT24:_.depthTexture.format===Cs&&(ut=i.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ut,_.width,_.height,0,ct,At,null)}}else it(_.depthTexture,0);const at=K.__webglTexture,lt=Pe(_),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,tt=_.depthTexture.format===Cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,at,0);else if(_.depthTexture.format===Cs)Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(P){const _=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const V=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=V}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)We(_.__webglFramebuffer[V],P,V);else{const V=P.texture.mipmaps;V&&V.length>0?We(_.__webglFramebuffer[0],P,0):We(_.__webglFramebuffer,P,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Kt(_.__webglDepthbuffer[V],P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else{const V=P.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Kt(_.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,_,O){const V=n.get(P);_!==void 0&&_t(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Zt(P)}function pe(P){const _=P.texture,O=n.get(P),V=n.get(_);P.addEventListener("dispose",v);const K=P.textures,at=P.isWebGLCubeRenderTarget===!0,lt=K.length>1;if(lt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,r.memory.textures++),at){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let tt=0;tt<_.mipmaps.length;tt++)O.__webglFramebuffer[Z][tt]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,tt=K.length;Z<tt;Z++){const ct=n.get(K[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&Ve(P)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const tt=K[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ct=a.convert(tt.format,tt.colorSpace),At=a.convert(tt.type),ut=b(tt.internalFormat,ct,At,tt.normalized,tt.colorSpace,P.isXRRenderTarget===!0),rt=Pe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ut,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(O.__webglFramebuffer[Z][tt],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else _t(O.__webglFramebuffer[Z],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(_)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,tt=K.length;Z<tt;Z++){const ct=K[Z],At=n.get(ct);let ut=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,At.__webglTexture),qt(ut,ct),_t(O.__webglFramebuffer,P,ct,i.COLOR_ATTACHMENT0+Z,ut,0),p(ct)&&y(ut)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),qt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(O.__webglFramebuffer[tt],P,_,i.COLOR_ATTACHMENT0,Z,tt);else _t(O.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,Z,0);p(_)&&y(Z),e.unbindTexture()}P.depthBuffer&&Zt(P)}function Ft(P){const _=P.textures;for(let O=0,V=_.length;O<V;O++){const K=_[O];if(p(K)){const at=A(P),lt=n.get(K).__webglTexture;e.bindTexture(at,lt),y(at),e.unbindTexture()}}}const xe=[],Oe=[];function sn(P){if(P.samples>0){if(Ve(P)===!1){const _=P.textures,O=P.width,V=P.height;let K=i.COLOR_BUFFER_BIT;const at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(P),Z=_.length>1;if(Z)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const tt=P.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const At=n.get(_[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,K,i.NEAREST),l===!0&&(xe.length=0,Oe.length=0,xe.push(i.COLOR_ATTACHMENT0+ct),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xe.push(at),Oe.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const At=n.get(_[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Pe(P){return Math.min(s.maxSamples,P.samples)}function Ve(P){const _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(P){const _=r.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function ze(P,_){const O=P.colorSpace,V=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==To&&O!==cs&&(le.getTransfer(O)===Me?(V!==hi||K!==Gn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",O)),_}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=it,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=se,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ex(i,t){function e(n,s=cs){let a;const r=le.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Wu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===hi)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===Ds)return i.RG;if(n===th)return i.RG_INTEGER;if(n===eh)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(r===Me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===jl||n===tc||n===ec)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc||n===ac||n===rc||n===So||n===oc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===nc||n===ic)return r===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===sc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return a.COMPRESSED_R11_EAC;if(n===rc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===So)return a.COMPRESSED_RG11_EAC;if(n===oc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===cc||n===hc||n===dc||n===uc||n===fc||n===pc||n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===Mc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===lc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Sc||n===wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===bc)return r===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Tc||n===wo||n===Ac)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ec)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
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

}`;class Rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new of(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:Tx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends ks{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Rx,p={},y=e.getContextAttributes();let A=null,b=null;const T=[],M=[],w=new yt;let v=null,E=null;const C=new Jn;C.viewport=new ke;const I=new Jn;I.viewport=new ke;const L=[C,I],F=new F0;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=T[$];return et===void 0&&(et=new jo,T[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=T[$];return et===void 0&&(et=new jo,T[$]=et),et.getGripSpace()},this.getHand=function($){let et=T[$];return et===void 0&&(et=new jo,T[$]=et),et.getHandSpace()};function X($){const et=M.indexOf($.inputSource);if(et===-1)return;const vt=T[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||r),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let $=0;$<T.length;$++){const et=M[$];et!==null&&(M[$]=null,T[$].disconnect(et))}D=null,z=null,m.reset();for(const $ in p)delete p[$];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),E!==null){const $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,kt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?Cs:Wi,kt=y.stencil?ur:wi);const Kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ui(u.textureWidth,u.textureHeight,{format:hi,type:Gn,depthTexture:new mr(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ui(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let et=0;et<$.removed.length;et++){const vt=$.removed[et],kt=M.indexOf(vt);kt>=0&&(M[kt]=null,T[kt].disconnect(vt))}for(let et=0;et<$.added.length;et++){const vt=$.added[et];let kt=M.indexOf(vt);if(kt===-1){for(let Kt=0;Kt<T.length;Kt++)if(Kt>=M.length){M.push(vt),kt=Kt;break}else if(M[Kt]===null){M[Kt]=vt,kt=Kt;break}if(kt===-1)break}const _t=T[kt];_t&&_t.connect(vt)}}const G=new R,j=new R;function nt($,et,vt){G.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const kt=G.distanceTo(j),_t=et.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,We=_t[14]/(_t[10]-1),Zt=_t[14]/(_t[10]+1),se=(_t[9]+1)/_t[5],pe=(_t[9]-1)/_t[5],Ft=(_t[8]-1)/_t[0],xe=(Kt[8]+1)/Kt[0],Oe=We*Ft,sn=We*xe,Pe=kt/(-Ft+xe),Ve=Pe*-Ft;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ve),$.translateZ(Pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const N=We+Pe,ze=Zt+Pe,de=Oe-Ve,P=sn+(kt-Ve),_=se*Zt/ze*N,O=pe*Zt/ze*N;$.projectionMatrix.makePerspective(de,P,_,O,N,ze),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Dt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),F.near=I.near=C.near=et,F.far=I.far=C.far=vt,(D!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,z=F.far),F.layers.mask=$.layers.mask|6,C.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const kt=$.parent,_t=F.cameras;Dt(F,kt);for(let Kt=0;Kt<_t.length;Kt++)Dt(_t[Kt],kt);_t.length===2?nt(F,C,I):F.projectionMatrix.copy(C.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),Pt($,F,kt)};function Pt($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let ge=null;function qt($,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let kt=!1;vt.length!==F.cameras.length&&(F.cameras.length=0,kt=!0);for(let Zt=0;Zt<vt.length;Zt++){const se=vt[Zt];let pe=null;if(f!==null)pe=f.getViewport(se);else{const xe=d.getViewSubImage(u,se);pe=xe.viewport,Zt===0&&(t.setRenderTargetTextures(b,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(b))}let Ft=L[Zt];Ft===void 0&&(Ft=new Jn,Ft.layers.enable(Zt),Ft.viewport=new ke,L[Zt]=Ft),Ft.matrix.fromArray(se.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(se.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(pe.x,pe.y,pe.width,pe.height),Zt===0&&(F.matrix.copy(Ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),kt===!0&&F.cameras.push(Ft)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Zt=d.getDepthInformation(vt[0]);Zt&&Zt.isValid&&Zt.texture&&m.init(Zt,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Zt=0;Zt<vt.length;Zt++){const se=vt[Zt].camera;if(se){let pe=p[se];pe||(pe=new of,p[se]=pe);const Ft=d.getCameraImage(se);pe.sourceTexture=Ft}}}}for(let vt=0;vt<T.length;vt++){const kt=M[vt],_t=T[vt];kt!==null&&_t!==void 0&&_t.update(kt,et,c||r)}ge&&ge($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ie=new uf;ie.setAnimationLoop(qt),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Px=new re,xf=new Yt;xf.set(-1,0,0,0,1,0,0,0,1);function Lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),x(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),A=y.envMap,b=y.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dx(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;n.uniformBlockBinding(b,M)}function c(b,T){let M=s[b.id];M===void 0&&(m(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",y));const w=T.program;n.updateUBOMapping(b,w);const v=t.render.frame;a[b.id]!==v&&(u(b),a[b.id]=v)}function h(b){const T=d();b.__bindingPointIndex=T;const M=i.createBuffer(),w=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function d(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const T=s[b.id],M=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,E=M.length;v<E;v++){const C=M[v];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)f(C[I],v,I,w);else f(C,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,T,M,w){if(x(b,T,M,w)===!0){const v=b.__offset,E=b.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){const L=E[I],F=p(L);g(L,b.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,T,M){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,M)}function x(b,T,M,w){const v=b.value,E=T+"_"+M;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{const C=w[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(b){const T=b.uniforms;let M=0;const w=16;for(let E=0,C=T.length;E<C;E++){const I=Array.isArray(T[E])?T[E]:[T[E]];for(let L=0,F=I.length;L<F;L++){const D=I[L],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,W=z.length;X<W;X++){const it=z[X],G=p(it),j=M%w,nt=j%G.boundary,Dt=j+nt;M+=nt,Dt!==0&&w-Dt<G.storage&&(M+=w-Dt),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=G.storage}}}const v=M%w;return v>0&&(M+=w-v),b.__size=M,b.__cache={},this}function p(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",b),T}function y(b){const T=b.target;T.removeEventListener("dispose",y);const M=r.indexOf(T.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function A(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},a={}}return{bind:l,update:c,dispose:A}}const Ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function kx(){return gi===null&&(gi=new nf(Ix,16,16,Ds,Ei),gi.name="DFG_LUT",gi.minFilter=_n,gi.magFilter=_n,gi.wrapS=zi,gi.wrapT=zi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class Ux{constructor(t={}){const{canvas:e=vp(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Gn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const x=f,m=new Set([eh,th,jc]),p=new Set([Gn,wi,dr,ur,Zc,Jc]),y=new Uint32Array(4),A=new Int32Array(4),b=new R;let T=null,M=null;const w=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,L=null,F=null,D=null,z=null;this._outputColorSpace=vn;let X=0,W=0,it=null,G=-1,j=null;const nt=new ke,Dt=new ke;let Pt=null;const ge=new Bt(0);let qt=0,ie=e.width,$=e.height,et=1,vt=null,kt=null;const _t=new ke(0,0,ie,$),Kt=new ke(0,0,ie,$);let We=!1;const Zt=new ch;let se=!1,pe=!1;const Ft=new re,xe=new R,Oe=new ke,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ve(){return it===null?et:1}let N=n;function ze(S,k){return e.getContext(S,k)}let de,P,_,O,V,K,at,lt,Z,tt,ct,At,ut,rt,St,It,Gt,U,ot,Q,ht,pt,st;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",J,!1),N===null){const k="webgl2";if(N=ze(k,S),N===null)throw ze(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(S){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",J,!1),fe("WebGLRenderer: "+S.message),S}function Lt(){de=new kv(N),de.init(),ht=new Ex(N,de),P=new wv(N,de,t,ht),_=new Sx(N,de),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=N.createFramebuffer(),D=N.createFramebuffer(),z=N.createFramebuffer(),O=new Fv(N),V=new cx,K=new wx(N,de,_,V,P,ht,O),at=new Iv(C),lt=new z0(N),pt=new bv(N,lt),Z=new Uv(N,lt,O,pt),tt=new zv(N,Z,lt,pt,O),U=new Ov(N,P,K),St=new Ev(V),ct=new lx(C,at,de,P,pt,St),At=new Lx(C,V),ut=new dx,rt=new vx(de),Gt=new Mv(C,at,_,tt,g,l),It=new bx(C,tt,P),st=new Dx(N,O,P,_),ot=new Sv(N,de,O),Q=new Nv(N,de,O),O.programs=ct.programs,C.capabilities=P,C.extensions=de,C.properties=V,C.renderLists=ut,C.shadowMap=It,C.state=_,C.info=O}x!==Gn&&(E=new Hv(x,e.width,e.height,o,s,a));const wt=new Cx(C,N);this.xr=wt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=de.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=de.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(ie,$,!1))},this.getSize=function(S){return S.set(ie,$)},this.setSize=function(S,k,Y=!0){if(wt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=S,$=k,e.width=Math.floor(S*et),e.height=Math.floor(k*et),Y===!0&&(e.style.width=S+"px",e.style.height=k+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(ie*et,$*et).floor()},this.setDrawingBufferSize=function(S,k,Y){ie=S,$=k,et=Y,e.width=Math.floor(S*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(x===Gn){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(nt)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,k,Y,B){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,k,Y,B),_.viewport(nt.copy(_t).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Kt)},this.setScissor=function(S,k,Y,B){S.isVector4?Kt.set(S.x,S.y,S.z,S.w):Kt.set(S,k,Y,B),_.scissor(Dt.copy(Kt).multiplyScalar(et).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){_.setScissorTest(We=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){kt=S},this.getClearColor=function(S){return S.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,Y=!0){let B=0;if(S){let H=!1;if(it!==null){const gt=it.texture.format;H=m.has(gt)}if(H){const gt=it.texture.type,bt=p.has(gt),mt=Gt.getClearColor(),Et=Gt.getClearAlpha(),Ct=mt.r,Jt=mt.g,ne=mt.b;bt?(y[0]=Ct,y[1]=Jt,y[2]=ne,y[3]=Et,N.clearBufferuiv(N.COLOR,0,y)):(A[0]=Ct,A[1]=Jt,A[2]=ne,A[3]=Et,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}k&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Gt.dispose(),ut.dispose(),rt.dispose(),V.dispose(),at.dispose(),tt.dispose(),pt.dispose(),st.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ye),wt.removeEventListener("sessionend",ln),Ye.stop()};function Se(S){S.preventDefault(),Co("WebGLRenderer: Context Lost."),I=!0}function me(){Co("WebGLRenderer: Context Restored."),I=!1;const S=O.autoReset,k=It.enabled,Y=It.autoUpdate,B=It.needsUpdate,H=It.type;Lt(),O.autoReset=S,It.enabled=k,It.autoUpdate=Y,It.needsUpdate=B,It.type=H}function J(S){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function dt(S){const k=S.target;k.removeEventListener("dispose",dt),Rt(k)}function Rt(S){Vt(S),V.remove(S)}function Vt(S){const k=V.get(S).programs;k!==void 0&&(k.forEach(function(Y){ct.releaseProgram(Y)}),S.isShaderMaterial&&ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,Y,B,H,gt){k===null&&(k=sn);const bt=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Fs(S,k,Y,B,H);_.setMaterial(B,bt);let Et=Y.index,Ct=1;if(B.wireframe===!0){if(Et=Z.getWireframeAttribute(Y),Et===void 0)return;Ct=2}const Jt=Y.drawRange,ne=Y.attributes.position;let Tt=Jt.start*Ct,_e=(Jt.start+Jt.count)*Ct;gt!==null&&(Tt=Math.max(Tt,gt.start*Ct),_e=Math.min(_e,(gt.start+gt.count)*Ct)),Et!==null?(Tt=Math.max(Tt,0),_e=Math.min(_e,Et.count)):ne!=null&&(Tt=Math.max(Tt,0),_e=Math.min(_e,ne.count));const $e=_e-Tt;if($e<0||$e===1/0)return;pt.setup(H,B,mt,Y,Et);let Ne,Ae=ot;if(Et!==null&&(Ne=lt.get(Et),Ae=Q,Ae.setIndex(Ne)),H.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Ve()),Ae.setMode(N.LINES)):Ae.setMode(N.TRIANGLES);else if(H.isLine){let dn=B.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Ve()),H.isLineSegments?Ae.setMode(N.LINES):H.isLineLoop?Ae.setMode(N.LINE_LOOP):Ae.setMode(N.LINE_STRIP)}else H.isPoints?Ae.setMode(N.POINTS):H.isSprite&&Ae.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dn=H._multiDrawStarts,Mt=H._multiDrawCounts,bn=H._multiDrawCount,ue=Et?lt.get(Et).bytesPerElement:1,Xn=V.get(B).currentProgram.getUniforms();for(let pi=0;pi<bn;pi++)Xn.setValue(N,"_gl_DrawID",pi),Ae.render(dn[pi]/ue,Mt[pi])}else if(H.isInstancedMesh)Ae.renderInstances(Tt,$e,H.count);else if(Y.isInstancedBufferGeometry){const dn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mt=Math.min(Y.instanceCount,dn);Ae.renderInstances(Tt,$e,Mt)}else Ae.render(Tt,$e)};function Ot(S,k,Y,B){L!==null&&S.isNodeMaterial&&L.setObject(B,S),se===!0&&St.setState(S,Y,!1),S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=xn,S.needsUpdate=!0,Ge(S,k,B),S.side=Ps,S.needsUpdate=!0,Ge(S,k,B),S.side=on):Ge(S,k,B)}this.compile=function(S,k,Y=null){Y===null&&(Y=S),L!==null&&L.renderStart(S,k,Y),M=rt.get(Y),M.init(k),v.push(M),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),S!==Y&&S.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),pe=this.localClippingEnabled,se=St.init(this.clippingPlanes,pe),se===!0&&St.setGlobalState(this.clippingPlanes,k),L!==null&&It.render(M.state.shadowsArray,Y,k);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const mt=gt[bt];Ot(mt,Y,k,H),B.add(mt)}else Ot(gt,Y,k,H),B.add(gt)}),M=v.pop(),L!==null&&L.renderEnd(),B},this.compileAsync=function(S,k,Y=null){const B=this.compile(S,k,Y);return new Promise(H=>{function gt(){if(B.forEach(function(bt){const Et=V.get(bt).currentProgram;(Et===void 0||Et.isReady())&&B.delete(bt)}),B.size===0){H(S);return}setTimeout(gt,10)}de.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ht=null;function Ut(S){Ht&&Ht(S)}function ye(){Ye.stop()}function ln(){Ye.start()}const Ye=new uf;Ye.setAnimationLoop(Ut),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(S){Ht=S,wt.setAnimationLoop(S),S===null?Ye.stop():Ye.start()},wt.addEventListener("sessionstart",ye),wt.addEventListener("sessionend",ln),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(S,k);const Y=wt.enabled===!0&&wt.isPresenting===!0,B=E!==null&&(it===null||Y)&&E.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(k),k=wt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,k,it),M=rt.get(S,v.length),M.init(k),M.state.textureUnits=K.getTextureUnits(),v.push(M),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Zt.setFromProjectionMatrix(Ft,yi,k.reversedDepth),pe=this.localClippingEnabled,se=St.init(this.clippingPlanes,pe),T=ut.get(S,w.length),T.init(),w.push(T),wt.enabled===!0&&wt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Le(bt,k,-1/0,C.sortObjects)}Le(S,k,0,C.sortObjects),T.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&T.sort(vt,kt),Pe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Pe&&Gt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&St.beginShadows();const H=M.state.shadowsArray;if(It.render(H,S,k),se===!0&&St.endShadows(),(B&&E.hasRenderPass())===!1){const bt=T.opaque,mt=T.transmissive;if(M.setupLights(),k.isArrayCamera){const Et=k.cameras;if(mt.length>0)for(let Ct=0,Jt=Et.length;Ct<Jt;Ct++){const ne=Et[Ct];Fn(bt,mt,S,ne)}Pe&&Gt.render(S);for(let Ct=0,Jt=Et.length;Ct<Jt;Ct++){const ne=Et[Ct];an(T,S,ne,ne.viewport)}}else mt.length>0&&Fn(bt,mt,S,k),Pe&&Gt.render(S),an(T,S,k)}it!==null&&W===0&&(K.updateMultisampleRenderTarget(it),K.updateRenderTargetMipmap(it)),B&&E.end(C),S.isScene===!0&&S.onAfterRender(C,S,k),pt.resetDefaultState(),G=-1,j=null,v.pop(),v.length>0?(M=v[v.length-1],K.setTextureUnits(M.state.textureUnits),se===!0&&St.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,L!==null&&L.renderEnd()};function Le(S,k,Y,B){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Zt)){B&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ft);const bt=tt.update(S),mt=S.material;mt.visible&&T.push(S,bt,mt,Y,Oe.z,null,k)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Zt))){const bt=tt.update(S),mt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Oe.copy(bt.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(Ft)),Array.isArray(mt)){const Et=bt.groups;for(let Ct=0,Jt=Et.length;Ct<Jt;Ct++){const ne=Et[Ct],Tt=mt[ne.materialIndex];Tt&&Tt.visible&&T.push(S,bt,Tt,Y,Oe.z,ne,k)}}else mt.visible&&T.push(S,bt,mt,Y,Oe.z,null,k)}}const gt=S.children;for(let bt=0,mt=gt.length;bt<mt;bt++)Le(gt[bt],k,Y,B)}function an(S,k,Y,B){const{opaque:H,transmissive:gt,transparent:bt}=S;M.setupLightsView(Y),se===!0&&St.setGlobalState(C.clippingPlanes,Y),B&&_.viewport(nt.copy(B)),H.length>0&&ve(H,k,Y),gt.length>0&&ve(gt,k,Y),bt.length>0&&ve(bt,k,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Fn(S,k,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){const Tt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new ui(1,1,{generateMipmaps:!0,type:Tt?Ei:Gn,minFilter:Rs,samples:Math.max(4,P.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const gt=M.state.transmissionRenderTarget[B.id],bt=B.viewport||nt;gt.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);const mt=C.getRenderTarget(),Et=C.getActiveCubeFace(),Ct=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(ge),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),Pe&&Gt.render(Y);const Jt=C.toneMapping;C.toneMapping=Si;const ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),se===!0&&St.setGlobalState(C.clippingPlanes,B),ve(S,Y,B),K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let _e=0,$e=k.length;_e<$e;_e++){const Ne=k[_e],{object:Ae,geometry:dn,material:Mt,group:bn}=Ne;if(Mt.side===on&&Ae.layers.test(B.layers)){const ue=Mt.side;Mt.side=xn,Mt.needsUpdate=!0,ae(Ae,Y,B,dn,Mt,bn),Mt.side=ue,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt))}C.setRenderTarget(mt,Et,Ct),C.setClearColor(ge,qt),ne!==void 0&&(B.viewport=ne),C.toneMapping=Jt}function ve(S,k,Y){const B=k.isScene===!0?k.overrideMaterial:null;for(let H=0,gt=S.length;H<gt;H++){const bt=S[H],{object:mt,geometry:Et,group:Ct}=bt;let Jt=bt.material;Jt.allowOverride===!0&&B!==null&&(Jt=B),mt.layers.test(Y.layers)&&ae(mt,k,Y,Et,Jt,Ct)}}function ae(S,k,Y,B,H,gt){L!==null&&H.isNodeMaterial&&L.setObject(S,H),S.onBeforeRender(C,k,Y,B,H,gt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,k,Y,B,S,gt),H.transparent===!0&&H.side===on&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,C.renderBufferDirect(Y,k,B,H,S,gt),H.side=Ps,H.needsUpdate=!0,C.renderBufferDirect(Y,k,B,H,S,gt),H.side=on):C.renderBufferDirect(Y,k,B,H,S,gt),S.onAfterRender(C,k,Y,B,H,gt)}function Ge(S,k,Y){k.isScene!==!0&&(k=sn);const B=V.get(S),H=M.state.lights,gt=M.state.shadowsArray,bt=H.state.version,mt=ct.getParameters(S,H.state,gt,k,Y,M.state.lightProbeGridArray),Et=ct.getProgramCacheKey(mt);let Ct=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,B.fog=k.fog;const Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=at.get(S.envMap||B.environment,Jt),B.envMapRotation=B.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",dt),Ct=new Map,B.programs=Ct);let ne=Ct.get(Et);if(ne!==void 0){if(B.currentProgram===ne&&B.lightsStateVersion===bt)return Yn(S,mt),ne}else mt.uniforms=ct.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,Y,mt),S.onBeforeCompile(mt,C),ne=ct.acquireProgram(mt,Et),Ct.set(Et,ne),B.uniforms=mt.uniforms;const Tt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=St.uniform),Yn(S,mt),B.needsLights=$i(S),B.lightsStateVersion=bt,B.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=ne,B.uniformsList=null,ne}function Mn(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=yo.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Yn(S,k){const Y=V.get(S);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function qi(S,k){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let Y=0,B=S.length;Y<B;Y++){const H=S[Y];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function Fs(S,k,Y,B,H){k.isScene!==!0&&(k=sn),K.resetTextureUnits();const gt=k.fog,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?k.environment:null,mt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:le.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=at.get(B.envMap||bt,Et),Jt=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ne=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!Y.morphAttributes.position,_e=!!Y.morphAttributes.normal,$e=!!Y.morphAttributes.color;let Ne=Si;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ne=C.toneMapping);const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dn=Ae!==void 0?Ae.length:0,Mt=V.get(B),bn=M.state.lights;if(se===!0&&(pe===!0||S!==j)){const De=S===j&&B.id===G;St.setState(B,S,De)}let ue=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==bn.state.version||Mt.outputColorSpace!==mt||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Ct||B.fog===!0&&Mt.fog!==gt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==St.numPlanes||Mt.numIntersection!==St.numIntersection)||Mt.vertexAlphas!==Jt||Mt.vertexTangents!==ne||Mt.morphTargets!==Tt||Mt.morphNormals!==_e||Mt.morphColors!==$e||Mt.toneMapping!==Ne||Mt.morphTargetsCount!==dn||!!Mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Mt.__version=B.version);let Xn=Mt.currentProgram;ue===!0&&(Xn=Ge(B,k,H),L&&B.isNodeMaterial&&L.onUpdateProgram(B,Xn,Mt));let pi=!1,Zi=!1,Os=!1;const we=Xn.getUniforms(),Xe=Mt.uniforms;if(_.useProgram(Xn.program)&&(pi=!0,Zi=!0,Os=!0),B.id!==G&&(G=B.id,Zi=!0),Mt.needsLights){const De=qi(M.state.lightProbeGridArray,H);Mt.lightProbeGrid!==De&&(Mt.lightProbeGrid=De,Zi=!0)}if(pi||j!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),we.setValue(N,"projectionMatrix",S.projectionMatrix),we.setValue(N,"viewMatrix",S.matrixWorldInverse);const Qi=we.map.cameraPosition;Qi!==void 0&&Qi.setValue(N,xe.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&we.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&we.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Zi=!0,Os=!0)}if(Mt.needsLights&&(bn.state.sunShadowMap.length>0&&we.setValue(N,"sunShadowMap",bn.state.sunShadowMap,K),bn.state.directionalShadowMap.length>0&&we.setValue(N,"directionalShadowMap",bn.state.directionalShadowMap,K),bn.state.spotShadowMap.length>0&&we.setValue(N,"spotShadowMap",bn.state.spotShadowMap,K),bn.state.pointShadowMap.length>0&&we.setValue(N,"pointShadowMap",bn.state.pointShadowMap,K)),H.isSkinnedMesh){we.setOptional(N,H,"bindMatrix"),we.setOptional(N,H,"bindMatrixInverse");const De=H.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),we.setValue(N,"boneTexture",De.boneTexture,K))}H.isBatchedMesh&&(we.setOptional(N,H,"batchingTexture"),we.setValue(N,"batchingTexture",H._matricesTexture,K),we.setOptional(N,H,"batchingIdTexture"),we.setValue(N,"batchingIdTexture",H._indirectTexture,K),we.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(N,"batchingColorTexture",H._colorsTexture,K));const Ji=Y.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&U.update(H,Y,Xn),(Zi||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,we.setValue(N,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&k.environment!==null&&(Xe.envMapIntensity.value=k.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=kx()),Zi){if(we.setValue(N,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&Ki(Xe,Os),gt&&B.fog===!0&&At.refreshFogUniforms(Xe,gt),At.refreshMaterialUniforms(Xe,B,et,$,M.state.transmissionRenderTarget[S.id]),Mt.needsLights&&Mt.lightProbeGrid){const De=Mt.lightProbeGrid;Xe.probesSH.value=De.texture,Xe.probesMin.value.copy(De.boundingBox.min),Xe.probesMax.value.copy(De.boundingBox.max),Xe.probesResolution.value.copy(De.resolution)}yo.upload(N,Mn(Mt),Xe,K)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(yo.upload(N,Mn(Mt),Xe,K),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&we.setValue(N,"center",H.center),we.setValue(N,"modelViewMatrix",H.modelViewMatrix),we.setValue(N,"normalMatrix",H.normalMatrix),we.setValue(N,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const De=B.uniformsGroups;for(let Qi=0,zs=De.length;Qi<zs;Qi++){const Uh=De[Qi];st.update(Uh,Xn),st.bind(Uh,Xn)}}return Xn}function Ki(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function $i(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,k,Y){const B=V.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=k,V.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const Y=V.get(S);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,Y=0){it=S,X=k,W=Y;let B=null,H=!1,gt=!1;if(S){const mt=V.get(S);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(S.viewport),Dt.copy(S.scissor),Pt=S.scissorTest,_.viewport(nt),_.scissor(Dt),_.setScissorTest(Pt),G=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(mt.__hasExternalTextures)K.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Jt=S.depthTexture;if(mt.__boundDepthTexture!==Jt){if(Jt!==null&&V.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(gt=!0);const Ct=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[k])?B=Ct[k][Y]:B=Ct[k],H=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?B=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?B=Ct[Y]:B=Ct,nt.copy(S.viewport),Dt.copy(S.scissor),Pt=S.scissorTest}else nt.copy(_t).multiplyScalar(et).floor(),Dt.copy(Kt).multiplyScalar(et).floor(),Pt=We;if(Y!==0&&(B=F),_.bindFramebuffer(N.FRAMEBUFFER,B)&&_.drawBuffers(S,B),_.viewport(nt),_.scissor(Dt),_.setScissorTest(Pt),H){const mt=V.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,mt.__webglTexture,Y)}else if(gt){const mt=k;for(let Et=0;Et<S.textures.length;Et++){const Ct=V.get(S.textures[Et]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,Y,mt)}}else if(S!==null&&Y!==0){const mt=V.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,Y)}G=-1};function Ai(S){const k=V.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=P.textureFormatReadable(S.format),k.__typeReadable=P.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,Y,B,H,gt,bt,mt=0){if(!(S&&S.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et){_.bindFramebuffer(N.FRAMEBUFFER,Et);try{const Ct=S.textures[mt],Jt=Ct.format,ne=Ct.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);const Tt=Ai(Ct);if(Tt.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-B&&Y>=0&&Y<=S.height-H&&N.readPixels(k,Y,B,H,ht.convert(Jt),ht.convert(ne),gt)}finally{const Ct=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,k,Y,B,H,gt,bt,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et)if(k>=0&&k<=S.width-B&&Y>=0&&Y<=S.height-H){_.bindFramebuffer(N.FRAMEBUFFER,Et);const Ct=S.textures[mt],Jt=Ct.format,ne=Ct.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);const Tt=Ai(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,gt.byteLength,N.STREAM_READ),N.readPixels(k,Y,B,H,ht.convert(Jt),ht.convert(ne),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const $e=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,$e);const Ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await _p(N,Ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,gt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(_e),N.deleteSync(Ne),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,Y=0){const B=Math.pow(2,-Y),H=Math.floor(S.image.width*B),gt=Math.floor(S.image.height*B),bt=k!==null?k.x:0,mt=k!==null?k.y:0;K.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,bt,mt,H,gt),_.unbindTexture()},this.copyTextureToTexture=function(S,k,Y=null,B=null,H=0,gt=0){let bt,mt,Et,Ct,Jt,ne,Tt,_e,$e;const Ne=S.isCompressedTexture?S.mipmaps[gt]:S.image;if(Y!==null)bt=Y.max.x-Y.min.x,mt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,Jt=Y.min.y,ne=Y.isBox3?Y.min.z:0;else{const Xe=Math.pow(2,-H);bt=Math.floor(Ne.width*Xe),mt=Math.floor(Ne.height*Xe),S.isDataArrayTexture?Et=Ne.depth:S.isData3DTexture?Et=Math.floor(Ne.depth*Xe):Et=1,Ct=0,Jt=0,ne=0}B!==null?(Tt=B.x,_e=B.y,$e=B.z):(Tt=0,_e=0,$e=0);const Ae=ht.convert(k.format),dn=ht.convert(k.type);let Mt;k.isData3DTexture?(K.setTexture3D(k,0),Mt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),Mt=N.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),Mt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const bn=_.getParameter(N.UNPACK_ROW_LENGTH),ue=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=_.getParameter(N.UNPACK_SKIP_PIXELS),pi=_.getParameter(N.UNPACK_SKIP_ROWS),Zi=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),_.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);const Os=S.isDataArrayTexture||S.isData3DTexture,we=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Xe=V.get(S),Ji=V.get(k),De=V.get(Xe.__renderTarget),Qi=V.get(Ji.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let zs=0;zs<Et;zs++)Os&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(S).__webglTexture,H,ne+zs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(k).__webglTexture,gt,$e+zs)),N.blitFramebuffer(Ct,Jt,bt,mt,Tt,_e,bt,mt,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||V.has(S)){const Xe=V.get(S),Ji=V.get(k);_.bindFramebuffer(N.READ_FRAMEBUFFER,D),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let De=0;De<Et;De++)Os?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xe.__webglTexture,H,ne+De):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xe.__webglTexture,H),we?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ji.__webglTexture,gt,$e+De):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ji.__webglTexture,gt),H!==0?N.blitFramebuffer(Ct,Jt,bt,mt,Tt,_e,bt,mt,N.COLOR_BUFFER_BIT,N.NEAREST):we?N.copyTexSubImage3D(Mt,gt,Tt,_e,$e+De,Ct,Jt,bt,mt):N.copyTexSubImage2D(Mt,gt,Tt,_e,Ct,Jt,bt,mt);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else we?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Mt,gt,Tt,_e,$e,bt,mt,Et,Ae,dn,Ne.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,gt,Tt,_e,$e,bt,mt,Et,Ae,Ne.data):N.texSubImage3D(Mt,gt,Tt,_e,$e,bt,mt,Et,Ae,dn,Ne):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,gt,Tt,_e,bt,mt,Ae,dn,Ne.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,gt,Tt,_e,Ne.width,Ne.height,Ae,Ne.data):N.texSubImage2D(N.TEXTURE_2D,gt,Tt,_e,bt,mt,Ae,dn,Ne);_.pixelStorei(N.UNPACK_ROW_LENGTH,bn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),_.pixelStorei(N.UNPACK_SKIP_ROWS,pi),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Zi),gt===0&&k.generateMipmaps&&N.generateMipmap(Mt),_.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){X=0,W=0,it=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const $n={result:"normal",dmgMul:1,postureMul:1},ua=(i,t)=>({result:"effective",dmgMul:i,postureMul:t}),Dc={ronin:{id:"ronin",name:"낭인 검사",kanji:"浪人",hp:60,posture:60,radius:.42,speed:3.6,turnRate:.14,defense:{slash:$n,thrust:$n,blunt:$n},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[{move:"ro_cut1",weight:5,minRange:0,maxRange:2.8},{move:"ro_lunge",weight:2,minRange:2.2,maxRange:4.6},{move:"ro_feint",weight:1,minRange:0,maxRange:3.2}],ai:{preferredRange:2.4,aggression:.5,guardChance:.35,courage:.5,cooldown:[75,150],comboChance:.55,feintChance:.15,poise:3,breakout:"parry"},tip:"베기·찌르기 모두 통한다. 파란 섬광 공격은 막을 수 없으니 튕기기로 받아내라."},shield:{id:"shield",name:"방패 무사",kanji:"盾持",hp:70,posture:80,radius:.5,speed:3,turnRate:.1,defense:{slash:{result:"bounce",dmgMul:0,postureMul:.25,frontalOnly:!0},thrust:ua(1.25,2),blunt:{result:"effective",dmgMul:1,postureMul:1.4}},arrow:{bodyMul:1,headMul:1,shieldFront:!0},weakness:"thrust",moves:[{move:"sh_stab",weight:5,minRange:0,maxRange:2.8},{move:"sh_charge",weight:2,minRange:1.5,maxRange:4.8}],ai:{preferredRange:2.3,aggression:.45,guardChance:0,courage:.7,cooldown:[70,140],comboChance:0,feintChance:0,poise:2,breakout:"bash"},tip:"정면 베기는 방패에 튕겨난다. 찌르기로 방패 틈을 꿰뚫거나, 방패 치기·관통 화살로 방패를 걷어내라."},spear:{id:"spear",name:"창병",kanji:"槍足軽",hp:60,posture:60,radius:.42,speed:3.3,turnRate:.11,defense:{slash:ua(1.2,2),thrust:{result:"haft",dmgMul:.25,postureMul:.3,frontalOnly:!0},blunt:$n},arrow:{bodyMul:1,headMul:1},weakness:"slash",moves:[{move:"sp_thrust",weight:5,minRange:1.8,maxRange:4.5},{move:"sp_sweep",weight:2,minRange:0,maxRange:4}],ai:{preferredRange:3.6,aggression:.5,guardChance:0,courage:.4,cooldown:[60,120],comboChance:.45,feintChance:0,poise:2,breakout:"backstep"},tip:"찌르기는 긴 창대에 막힌다. 베기로 창대를 쳐내며 파고들어라. 빨간 섬광 휩쓸기는 회피나 흘리기로."},armored:{id:"armored",name:"갑주 무사",kanji:"鎧武者",hp:130,posture:110,radius:.55,speed:2.6,turnRate:.08,defense:{slash:{result:"glance",dmgMul:.25,postureMul:.45},thrust:ua(1.6,1.6),blunt:{result:"glance",dmgMul:.3,postureMul:.6}},arrow:{bodyMul:.3,headMul:1.2,glanceBody:!0},weakness:"thrust",moves:[{move:"ar_cleave",weight:4,minRange:0,maxRange:3.2},{move:"ar_sweep",weight:2,minRange:0,maxRange:3.3},{move:"ar_crush",weight:2,minRange:1,maxRange:4.2}],ai:{preferredRange:2.6,aggression:.6,guardChance:0,courage:.9,cooldown:[80,150],comboChance:0,feintChance:0,poise:99,breakout:"none"},heavyBody:!0,tip:"베기는 갑옷에 미끄러진다. 찌르기로 갑옷 틈을 노려라. 관통 화살은 갑옷을 뚫는다."},duelist:{id:"duelist",name:"쌍검 시노비",kanji:"双刃",hp:45,posture:45,radius:.38,speed:4.6,turnRate:.2,defense:{slash:ua(1.4,1.5),thrust:{result:"evade",dmgMul:0,postureMul:0},blunt:$n},arrow:{bodyMul:1,headMul:1},weakness:"slash",moves:[{move:"du_f1",weight:5,minRange:0,maxRange:2.6},{move:"du_leap",weight:2,minRange:2.6,maxRange:5.5},{move:"du_kunai",weight:1,minRange:4,maxRange:12}],ai:{preferredRange:3.2,aggression:.7,guardChance:0,courage:.35,cooldown:[40,100],comboChance:.8,feintChance:0,poise:2,breakout:"backstep"},tip:"찌르기는 몸을 틀어 피한다. 넓게 휘두르는 베기로 잡아라. 연속 공격은 튕기기로 끊어낼 수 있다."},archer:{id:"archer",name:"궁수",kanji:"弓兵",hp:35,posture:30,radius:.4,speed:3.4,turnRate:.12,defense:{slash:$n,thrust:$n,blunt:$n},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[{move:"ac_shot",weight:5,minRange:5,maxRange:30},{move:"ac_knife",weight:3,minRange:0,maxRange:2.2}],ai:{preferredRange:13,aggression:.5,guardChance:0,courage:.2,cooldown:[90,160],comboChance:0,feintChance:0,ranged:!0,poise:3,breakout:"backstep"},tip:"날아오는 화살도 튕기기로 쳐낼 수 있다. 활 헤드샷(만작)이면 한 발에 쓰러진다."},boss:{id:"boss",name:"철갑 대장 카게토라",kanji:"影虎",hp:540,posture:150,radius:.55,speed:3.8,turnRate:.16,defense:{slash:{result:"glance",dmgMul:.35,postureMul:.5},thrust:ua(1.4,1.5),blunt:{result:"glance",dmgMul:.3,postureMul:.6}},arrow:{bodyMul:.4,headMul:1.2,glanceBody:!0},weakness:"thrust",moves:[{move:"bo_c1",weight:5,minRange:0,maxRange:2.9},{move:"bo_lunge",weight:2,minRange:2.4,maxRange:5},{move:"bo_red",weight:2,minRange:0,maxRange:3.6},{move:"bo_feint",weight:1,minRange:0,maxRange:3.4}],ai:{preferredRange:2.6,aggression:.8,guardChance:.5,courage:1,cooldown:[30,80],comboChance:.75,feintChance:.2,poise:2,breakout:"parry"},isBoss:!0,heavyBody:!0,tip:"갑옷을 두른 1막에는 찌르기, 갑옷이 부서진 2막에는 베기가 통한다."},dummy:{id:"dummy",name:"수련용 허수아비",kanji:"藁人形",hp:9999,posture:80,radius:.4,speed:0,turnRate:0,defense:{slash:$n,thrust:$n,blunt:$n},arrow:{bodyMul:1,headMul:1},weakness:null,moves:[],ai:{preferredRange:2,aggression:0,guardChance:0,courage:1,cooldown:[9999,9999],comboChance:0,feintChance:0,poise:99,breakout:"none"},tip:"마음껏 연격을 연습하라."}},Nx={slash:ua(1.4,1.5),thrust:{result:"normal",dmgMul:.7,postureMul:.7},blunt:$n},Qe=(i,t)=>({x:i.x+t.x,z:i.z+t.z}),he=(i,t)=>({x:i.x-t.x,z:i.z-t.z}),zt=(i,t)=>({x:i.x*t,z:i.z*t}),Ic=(i,t)=>i.x*t.x+i.z*t.z,Un=i=>Math.hypot(i.x,i.z),ms=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),je=i=>{const t=Un(i);return t>1e-6?{x:i.x/t,z:i.z/t}:{x:0,z:0}},Fx=(i,t,e)=>i+(t-i)*e,xh=(i,t,e)=>i<t?t:i>e?e:i,Ox=i=>xh(i,0,1),yh=i=>({x:Math.sin(i),z:Math.cos(i)}),fi=i=>Math.atan2(i.x,i.z),yf=i=>(i=(i+Math.PI)%(Math.PI*2),i<0&&(i+=Math.PI*2),i-Math.PI),Mf=(i,t)=>yf(t-i),bi=(i,t,e)=>{const n=Mf(i,t);return Math.abs(n)<=e?t:yf(i+Math.sign(n)*e)},zx=(i,t,e)=>{const n=he(e,t),s=Ic(n,n);if(s<1e-9)return ms(i,t);const a=Ox(Ic(he(i,t),n)/s);return ms(i,{x:t.x+n.x*a,z:t.z+n.z*a})};class Bx{s;constructor(t=1234567){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){const e=t.reduce((s,a)=>s+a,0);let n=this.next()*e;for(let s=0;s<t.length;s++)if(n-=t[s],n<=0)return s;return t.length-1}}const Hx=60,An=1/Hx,q={inputBuffer:10,deflectWindow:8,deflectSpamGap:22,deflectSpamWindow:3,guardArc:70*Math.PI/180,deflectRecoil:42,deflectPostureDmg:26,hajikiIssenWindow:14,riposteWindow:40,playerMaxPosture:100,blockPostureMul:1.1,guardBreakStun:55,flowWindow:11,flowStepDur:22,flowAnimDur:26,flowSideStep:1.3,overextendDur:70,issenWindow:5,issenChainTime:110,issenChainWindow:8,issenMashLockout:18,issenDur:34,bossIssenFrac:.18,dodgeDur:18,dodgeIFrames:[2,11],dodgeDist:2.6,dodgeCancelFrom:12,perfectDodgeFrames:6,rollDur:30,rollDist:4.4,rollIFrames:[2,18],dodgeCounterWindow:45,chargeCheck:4,chargeMin:16,chargeMax:40,hitstun:18,stagger:34,brokenDur:170,postureRegenDelay:100,postureRegen:.35,playerPostureRegen:.6,finishHpFrac:.2,finisherRange:3.4,finisherSlashDur:64,finisherThrustDur:70,finisherFlowDur:44,finisherImpact:{slash:30,thrust:34,flow:12},finisherChainFrom:40,finisherChainRange:7,bossFinisherFrac:.22,terrifyRadius:9,terrifyChance:.35,terrifyWeaknessBonus:.25,fearDur:110,resolveMax:3,resolveGain:{deflect:.3,flow:.45,issen:.6,finisher:1,kill:.2,headshot:.3,perfectDodge:.15},healCost:1,healDur:48,healFrac:.45,galeCost:2,focusDrainPerSec:.5,drawTicks:{standard:34,heavy:52,fire:40},perfectDrawWindow:18,fatigueTicks:120,arrowSpeed:[20,62],arrowGravity:9.8,arrowDamage:{standard:22,heavy:34,fire:14},headshotMul:2.6,perfectMul:1.3,maxArrows:{standard:24,heavy:6,fire:4},quickshotDur:20,quickshotDamage:11,aimMoveSpeed:2.4,focusScale:.3,dodgeAimSlowmoSec:1.1,burnTicks:150,burnDps:5,runSpeed:5.4,guardMoveSpeed:2.3,playerTurnRate:.35,arenaRadius:24,softTargetRange:6.5,maxAttackers:2,maxShooters:1,glintLead:20,standoffStrikeWindow:14,standoffChainMax:3,standoffFailDamage:30},tn={light:3,heavy:6,effective:5,block:3,deflect:7,bounce:6,flow:5,issen:10,finisher:8};class Wd{id;team;arch;pos;prevPos;yaw;prevYaw;radius;vel={x:0,z:0};kb={x:0,z:0};hp;maxHp;posture=0;maxPosture;postureIdle=0;act={kind:"free",t:0,dur:1/0};serial=0;replaced=null;shieldOpen=0;burning=0;phase=1;hitFlash=0;glint=null;age=0;deadTicks=0;speed=0;deathKind=null;brain=null;size=1;poiseHits=0;poiseTimer=0;constructor(t,e,n,s,a,r,o,l){this.id=t,this.team=e,this.arch=n,this.pos={...s},this.prevPos={...s},this.yaw=a,this.prevYaw=a,this.hp=r,this.maxHp=r,this.maxPosture=o,this.radius=l}get alive(){return this.hp>0&&this.act.kind!=="dead"}get targetable(){return this.alive&&this.act.kind!=="finished"}get isPlayer(){return this.team==="player"}set(t,e,n={}){const s=this.act;return s.kind==="attack"&&s.move&&(this.replaced={move:s.move,t:s.t,serial:this.serial}),this.act={kind:t,t:0,dur:e,...n},this.serial++,this.act}is(...t){return t.includes(this.act.kind)}get free(){return this.act.kind==="free"}get attacking(){const t=this.act;return t.kind==="attack"&&!!t.move&&t.t<t.move.startup+t.move.active}get attackPhase(){const t=this.act;return t.kind!=="attack"||!t.move?null:t.t<t.move.startup?"startup":t.t<t.move.startup+t.move.active?"active":"recovery"}get defenseless(){return this.is("broken","recoil","overextended","guardbreak","fear","stagger")}forward(){return yh(this.yaw)}angleTo(t){return Math.abs(Mf(this.yaw,fi(he(t,this.pos))))}yawTo(t){return fi(he(t,this.pos))}distTo(t){return ms(this.pos,t.pos)}gapTo(t){return Math.max(0,ms(this.pos,t.pos)-this.radius-t.radius)}addPosture(t){return this.posture=Math.min(this.maxPosture,this.posture+t),this.postureIdle=0,this.posture>=this.maxPosture}regenPosture(){this.poiseTimer>0&&--this.poiseTimer===0&&(this.poiseHits=0),this.postureIdle++;const t=this.act.kind==="guard";this.isPlayer?this.postureIdle>40&&(this.posture=Math.max(0,this.posture-q.playerPostureRegen*(t?.5:1))):this.postureIdle>q.postureRegenDelay&&!this.is("broken")&&(this.posture=Math.max(0,this.posture-q.postureRegen*(t?1.6:1)))}}const sa=["slash","thrust","guard","dodge","aim","fire","quickshot","focus","heal","gale","standoff","lock","arrowNext","arrow1","arrow2","arrow3"],Mh=()=>({move:{x:0,z:0},camYaw:0,aimOrigin:{x:0,y:1.6,z:0},aimDir:{x:0,y:0,z:1},held:{},pressed:{},released:{}});class Vx{last=new Map;consumed=new Map;pressTick=new Map;prevPressTick=new Map;record(t,e){for(const n of Object.keys(t.pressed))t.pressed[n]&&(this.last.set(n,e),this.prevPressTick.set(n,this.pressTick.get(n)??-9999),this.pressTick.set(n,e))}peek(t,e,n){const s=this.last.get(t);return s===void 0||(this.consumed.get(t)??-1)>=s?!1:e-s<=n}consume(t,e,n){return this.peek(t,e,n)?(this.consumed.set(t,this.last.get(t)),!0):!1}clear(t){if(t)this.consumed.set(t,this.last.get(t)??-1);else for(const[e,n]of this.last)this.consumed.set(e,n)}}const Gx=Math.PI/180;function te(i){const t=i.startup+i.active;return{chainFrom:t,cancelFrom:t+2,...i}}const He=(i,t)=>({kind:"arc",range:i,halfAngle:t*Gx}),Dn=(i,t)=>({kind:"line",range:i,width:t}),Wx=[te({id:"r_s1",name:"역베기",kanji:"逆袈裟",type:"slash",startup:7,active:4,recovery:16,damage:12,posture:14,shape:He(2.3,70),lunge:1.8,next:{slash:"r_s2",thrust:"r_st"},trackUntil:5}),te({id:"r_s2",name:"가사베기",kanji:"袈裟斬",type:"slash",startup:8,active:4,recovery:17,damage:13,posture:15,shape:He(2.3,75),lunge:1.4,next:{slash:"r_s3",thrust:"r_t3"},trackUntil:5}),te({id:"r_s3",name:"횡베기",kanji:"横一文字",type:"slash",startup:9,active:5,recovery:18,damage:14,posture:16,shape:He(2.5,105),lunge:1.2,next:{slash:"r_s4",thrust:"r_t3"},trackUntil:6}),te({id:"r_s4",name:"회전베기",kanji:"旋風",type:"slash",startup:12,active:8,recovery:26,damage:20,posture:28,shape:He(2.7,180),lunge:1,knockback:1.2,hitstop:6,finale:!0,trackUntil:6}),te({id:"r_t1",name:"찌르기",kanji:"突",type:"thrust",startup:6,active:3,recovery:15,damage:11,posture:12,shape:Dn(2.8,.6),lunge:2,next:{thrust:"r_t2",slash:"r_ts"},trackUntil:4}),te({id:"r_t2",name:"연속 찌르기",kanji:"二段突",type:"thrust",startup:6,active:3,recovery:16,damage:12,posture:13,shape:Dn(2.8,.6),lunge:1.4,next:{thrust:"r_t3",slash:"r_s3"},trackUntil:4}),te({id:"r_t3",name:"관통 찌르기",kanji:"諸手突",type:"thrust",startup:11,active:4,recovery:24,damage:22,posture:30,shape:Dn(3.4,.7),lunge:2.6,knockback:1.5,hitstop:6,finale:!0,trackUntil:7}),te({id:"r_st",name:"되돌려 찌르기",kanji:"返突",type:"thrust",startup:6,active:3,recovery:17,damage:12,posture:15,shape:Dn(2.9,.6),lunge:1.6,next:{slash:"r_s3",thrust:"r_t2"},trackUntil:4}),te({id:"r_ts",name:"뽑아베기",kanji:"抜払",type:"slash",startup:7,active:4,recovery:18,damage:13,posture:15,shape:He(2.4,95),lunge:1,next:{slash:"r_s2",thrust:"r_t2"},trackUntil:5}),te({id:"r_hs",name:"강베기",kanji:"唐竹割",type:"slash",startup:8,active:5,recovery:24,damage:26,posture:42,shape:He(2.6,80),lunge:2.4,heavy:!0,knockback:1,hitstop:7,finale:!0}),te({id:"r_ht",name:"강찌르기",kanji:"破突",type:"thrust",startup:7,active:4,recovery:24,damage:28,posture:46,shape:Dn(3.6,.7),lunge:3,heavy:!0,knockback:1.6,hitstop:7,finale:!0}),te({id:"r_bash",name:"방패 치기",kanji:"盾打",type:"blunt",startup:5,active:3,recovery:16,damage:3,posture:22,shape:He(1.8,60),lunge:1.4,interrupt:!0,shieldBreak:!0,next:{slash:"r_s2",thrust:"r_t2"},hitstop:5}),te({id:"r_gale",name:"질풍참",kanji:"疾風斬",type:"slash",startup:8,active:2,recovery:8,damage:18,posture:70,shape:He(2.4,60),lunge:5,trueStrike:!0,heavy:!0,hitstop:5})],Yx=[te({id:"ro_cut1",name:"내려베기",type:"slash",startup:26,active:4,recovery:24,damage:12,posture:18,shape:He(2.5,60),lunge:1.4,trackUntil:16,next:{slash:"ro_cut2"}}),te({id:"ro_cut2",name:"되베기",type:"slash",startup:18,active:4,recovery:26,damage:12,posture:18,shape:He(2.5,70),lunge:1,trackUntil:8}),te({id:"ro_lunge",name:"돌진 찌르기",type:"thrust",startup:38,active:5,recovery:32,damage:20,posture:25,shape:Dn(3.8,.7),lunge:3.4,unblockable:"blue",trackUntil:28}),te({id:"ro_feint",name:"허초",type:"slash",startup:20,active:0,recovery:10,damage:0,posture:0,shape:He(0,0),lunge:.4,feint:!0}),te({id:"sh_stab",name:"방패 뒤 찌르기",type:"thrust",startup:24,active:4,recovery:22,damage:11,posture:16,shape:Dn(2.7,.6),lunge:1,trackUntil:14}),te({id:"sh_charge",name:"방패 돌격",type:"blunt",startup:36,active:7,recovery:30,damage:16,posture:38,shape:Dn(2.3,1.3),lunge:3.6,unblockable:"blue",trackUntil:26,hyperArmor:!0}),te({id:"sp_thrust",name:"창 찌르기",type:"thrust",startup:26,active:4,recovery:22,damage:14,posture:18,shape:Dn(4.3,.55),lunge:.8,trackUntil:16,next:{slash:"sp_thrust2"}}),te({id:"sp_thrust2",name:"창 연속 찌르기",type:"thrust",startup:18,active:4,recovery:26,damage:12,posture:16,shape:Dn(4.3,.55),lunge:.6,trackUntil:8}),te({id:"sp_sweep",name:"창 휩쓸기",type:"slash",startup:42,active:6,recovery:34,damage:22,posture:30,shape:He(4.1,110),lunge:.4,unblockable:"red",trackUntil:32}),te({id:"ar_cleave",name:"대도 내려치기",type:"slash",startup:32,active:5,recovery:34,damage:24,posture:40,shape:He(3,50),lunge:1.4,hyperArmor:!0,trackUntil:22}),te({id:"ar_sweep",name:"대도 휘두르기",type:"slash",startup:38,active:7,recovery:36,damage:26,posture:40,shape:He(3.1,120),lunge:.8,unblockable:"blue",hyperArmor:!0,trackUntil:28}),te({id:"ar_crush",name:"투구 깨기",type:"slash",startup:48,active:6,recovery:42,damage:34,posture:60,shape:He(2.9,45),lunge:2.4,unblockable:"red",hyperArmor:!0,trackUntil:38}),te({id:"du_f1",name:"쌍검 연참",type:"slash",startup:18,active:3,recovery:12,damage:8,posture:10,shape:He(2.1,70),lunge:1.4,trackUntil:8,next:{slash:"du_f2"}}),te({id:"du_f2",name:"쌍검 연참",type:"slash",startup:13,active:3,recovery:12,damage:8,posture:10,shape:He(2.1,70),lunge:.8,trackUntil:4,next:{slash:"du_f3"}}),te({id:"du_f3",name:"쌍검 연참",type:"slash",startup:14,active:4,recovery:24,damage:10,posture:12,shape:He(2.2,90),lunge:.8,trackUntil:4}),te({id:"du_leap",name:"도약 베기",type:"slash",startup:32,active:5,recovery:28,damage:18,posture:26,shape:He(2.3,70),lunge:4.2,unblockable:"blue",trackUntil:22}),te({id:"du_kunai",name:"쿠나이 투척",type:"thrust",startup:22,active:1,recovery:22,damage:7,posture:8,shape:Dn(0,0),lunge:0,projectile:"kunai",trackUntil:12}),te({id:"ac_shot",name:"활 사격",type:"thrust",startup:50,active:1,recovery:26,damage:14,posture:14,shape:Dn(0,0),lunge:0,projectile:"arrow",trackUntil:40}),te({id:"ac_knife",name:"단도 베기",type:"slash",startup:20,active:3,recovery:20,damage:7,posture:10,shape:He(1.9,70),lunge:1,trackUntil:10}),te({id:"bo_c1",name:"연참",type:"slash",startup:20,active:4,recovery:16,damage:14,posture:20,shape:He(2.7,70),lunge:1.6,trackUntil:10,next:{slash:"bo_c2"}}),te({id:"bo_c2",name:"연참",type:"slash",startup:15,active:4,recovery:16,damage:14,posture:20,shape:He(2.7,80),lunge:1.2,trackUntil:5,next:{slash:"bo_c3"}}),te({id:"bo_c3",name:"연참 마무리",type:"thrust",startup:22,active:4,recovery:28,damage:18,posture:26,shape:Dn(3.4,.7),lunge:2,trackUntil:12,unblockable:"blue"}),te({id:"bo_lunge",name:"섬광 찌르기",type:"thrust",startup:32,active:5,recovery:30,damage:22,posture:30,shape:Dn(4.2,.7),lunge:3.8,unblockable:"blue",trackUntil:22}),te({id:"bo_red",name:"귀신베기",type:"slash",startup:44,active:6,recovery:38,damage:34,posture:50,shape:He(3.1,85),lunge:2.8,unblockable:"red",hyperArmor:!0,trackUntil:34}),te({id:"bo_feint",name:"허초",type:"slash",startup:20,active:0,recovery:8,damage:0,posture:0,shape:He(0,0),lunge:.6,feint:!0})],gr=Object.fromEntries([...Wx,...Yx].map(i=>[i.id,i])),bh={slash:"r_s1",thrust:"r_t1"},Xx={slash:"r_hs",thrust:"r_ht"};function Nn(i){const t=gr[i];if(!t)throw new Error(`Unknown move ${i}`);return t}const Cn=(i,t,e)=>({x:i,y:t,z:e}),Io=(i,t)=>Cn(i.x+t.x,i.y+t.y,i.z+t.z),Sh=(i,t)=>Cn(i.x-t.x,i.y-t.y,i.z-t.z),Ea=(i,t)=>Cn(i.x*t,i.y*t,i.z*t),Ho=i=>Math.hypot(i.x,i.y,i.z),ko=i=>{const t=Ho(i);return t>1e-9?Ea(i,1/t):Cn(0,0,1)},bf=i=>Cn(i.pos.x,1.62*i.size,i.pos.z),Sf=.17;function qx(i,t){const e=bf(i),n=Sf*i.size;if((t.x-e.x)**2+(t.y-e.y)**2+(t.z-e.z)**2<=n*n)return"head";if(t.y<.1||t.y>1.45*i.size)return null;const s=i.radius*.85;return(t.x-i.pos.x)**2+(t.z-i.pos.z)**2<=s*s?"body":null}function vr(i,t,e=1){const n=q.drawTicks[t],s=Math.min(1,i/n),a=n+q.perfectDrawWindow*e,r=i>=n&&i<=a,o=Math.max(0,(i-a)/q.fatigueTicks),l=r?0:(1-s)*.07+Math.min(1,o)*.06;return{amount:s,perfect:r,fatigue:o,spread:l,full:n}}function Kx(i,t,e,n){const s=Sh(i,e),a=s.x*t.x+s.y*t.y+s.z*t.z,r=s.x*s.x+s.y*s.y+s.z*s.z-n*n,o=a*a-r;if(o<0)return-1;const l=-a-Math.sqrt(o);return l>0?l:-1}function $x(i,t,e){let n=90;for(const s of i.fighters){if(s.team!=="enemy"||!s.targetable)continue;const a=s.size,r=[[bf(s),Sf*a],[Cn(s.pos.x,1.2*a,s.pos.z),s.radius*.8],[Cn(s.pos.x,.8*a,s.pos.z),s.radius*.85],[Cn(s.pos.x,.4*a,s.pos.z),s.radius*.8]];for(const[o,l]of r){const c=Kx(t,e,o,l);c>0&&c<n&&(n=c)}}if(e.y<-.001){const s=-t.y/e.y;s>0&&s<n&&(n=s)}return Io(t,Ea(e,n))}function wh(i,t,e,n){const s=Sh(t,i),r=Ho(s)/e,o=Ea(ko(s),e);return o.y+=.5*n*r,o}function Eh(i,t,e){if(e<=0)return t;const n=Ho(t),s=ko(t),a=ko(Cn(s.x+i.rng.range(-e,e),s.y+i.rng.range(-e,e)*.8,s.z+i.rng.range(-e,e)));return Ea(a,n)}function wf(i){const t=i.forward();return Cn(i.pos.x+t.x*.35-t.z*.12,1.48,i.pos.z+t.z*.35+t.x*.12)}function Th(i,t,e,n,s,a,r,o,l){const c={id:i.newProjectileId(),kind:e,arrowType:n,ownerId:t.id,team:t.team,pos:{...s},prevPos:{...s},vel:a,damage:r,gravity:o,alive:!0,stuck:!1,age:0,perfect:l};if(i.projectiles.push(c),i.projectiles.length>90){const h=i.projectiles.findIndex(d=>d.stuck);h>=0&&i.projectiles.splice(h,1)}return c}function Zx(i,t,e,n){const s=i.ps,a=s.arrowType;if(s.arrows[a]<=0)return;const r=vr(n,a,i.settings.windowScale),o=Fx(q.arrowSpeed[0],q.arrowSpeed[1],Math.pow(r.amount,.8))*(a==="heavy"?.8:1),l=q.arrowGravity*(a==="heavy"?.6:.4),c=wf(t),h=$x(i,e.aimOrigin,ko(e.aimDir)),d=Eh(i,wh(c,h,o,l),r.spread),u=q.arrowDamage[a]*(.35+.65*r.amount)*(r.perfect?q.perfectMul:1);Th(i,t,"arrow",a,c,d,u,l,r.perfect),s.arrows[a]--,i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:a,perfect:r.perfect}),r.perfect&&i.emit({type:"text",text:"정사",sub:"만작",style:"info",id:t.id})}function Jx(i,t){const e=i.ps;if(e.arrows.standard<=0)return;const n=i.get(t.act.targetId),s=wf(t),a=q.arrowGravity*.4,r=n&&n.targetable?Cn(n.pos.x,1.15*n.size,n.pos.z):Io(s,Cn(t.forward().x*30,0,t.forward().z*30)),o=Eh(i,wh(s,r,55,a),.01);Th(i,t,"arrow","standard",s,o,q.quickshotDamage,a,!1),e.arrows.standard--,i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:"standard",perfect:!1})}function Qx(i,t,e){const n=i.player,s=e.projectile==="kunai",a=s?24:34,r=q.arrowGravity*(s?.5:.4),o=t.forward(),l=Cn(t.pos.x+o.x*.4,1.45,t.pos.z+o.z*.4),h=Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)/a*.5,d=Cn(n.pos.x+n.vel.x*h,1.15,n.pos.z+n.vel.z*h),u=Eh(i,wh(l,d,a,r),.012);Th(i,t,s?"kunai":"arrow","standard",l,u,e.damage,r,!1),i.emit({type:"arrowFire",id:t.id,owner:t.id,arrowType:"standard",perfect:!1})}function jx(i){for(const t of i.projectiles){if(t.age++,!t.alive)continue;if(t.stuck){t.age>900&&(t.alive=!1);continue}t.prevPos={...t.pos},t.vel.y-=t.gravity*An;const e=Io(t.pos,Ea(t.vel,An)),n=Sh(e,t.pos),s=Math.max(1,Math.ceil(Ho(n)/.08));let a=!1;for(let r=1;r<=s&&!a;r++){const o=Io(t.pos,Ea(n,r/s));if(o.y<=0){t.pos=Cn(o.x,.02,o.z),t.stuck=!0,a=!0,t.team==="player"&&i.emit({type:"arrowMiss",pos:t.pos});break}for(const l of i.fighters){if(l.team===t.team||!l.targetable)continue;const c=qx(l,o);if(c){if(t.team==="enemy"){if(Tf(i,l))continue;a=t1(i,t,l,o)}else a=e1(i,t,l,c==="head",o);if(a){t.pos=o;break}}}}a||(t.pos=e),(t.age>240||Math.hypot(t.pos.x,t.pos.z)>140)&&(t.alive=!1)}for(let t=i.projectiles.length-1;t>=0;t--)i.projectiles[t].alive||i.projectiles.splice(t,1)}function kc(i,t,e){i.stuck=!0,i.stuckTo=t.id;const n=e.x-t.pos.x,s=e.z-t.pos.z,a=Math.cos(-t.yaw),r=Math.sin(-t.yaw),o=Math.atan2(i.vel.x,i.vel.z)-t.yaw;i.stuckOffset={x:n*a+s*r,y:e.y,z:-n*r+s*a,yaw:o},i.age=0}function t1(i,t,e,n){const s={x:e.pos.x-t.vel.x,z:e.pos.z-t.vel.z},a=e.angleTo(s)<=q.guardArc,r=i.get(t.ownerId)??e;return e.is("guard","deflect","blockstun")&&a?(t.alive=!1,Af(i,e)?(i.stats.deflects++,i.gainResolve(q.resolveGain.deflect*.5),i.freeze(tn.block),i.emit({type:"deflect",defender:e.id,attacker:r.id,pos:{x:n.x,z:n.z},arrow:!0}),i.emit({type:"text",text:"화살 튕기기",sub:"矢弾き",style:"deflect",id:e.id})):(e.addPosture(8),i.emit({type:"block",defender:e.id,attacker:r.id,pos:{x:n.x,z:n.z},enemy:!1})),!0):(kc(t,e,n),t.alive=!1,Rh(i,r,e,t.damage,!1),!0)}function e1(i,t,e,n,s){const a=i.player,r=e.arch,o=fi({x:-t.vel.x,z:-t.vel.z}),l=Math.abs((o-e.yaw+Math.PI*3)%(Math.PI*2)-Math.PI)<=70*Math.PI/180,c=t.arrowType==="heavy";if(r.arrow.shieldFront&&l&&e.shieldOpen<=0&&!e.defenseless&&!(n&&t.perfect))return kc(t,e,s),c?(e.shieldOpen=160,e.set("stagger",30),e.brain&&(e.brain.token=!1),i.emit({type:"shieldOpen",id:e.id}),i.emit({type:"text",text:"방패 걷어냄",sub:"관통 화살",style:"effective",id:e.id})):i.emit({type:"text",text:"방패에 막힘",sub:"관통 화살(2)을 써라",style:"bad",id:e.id}),i.emit({type:"arrowHit",target:e.id,pos:s,headshot:!1,dmg:0,lethal:!1,blocked:!c}),!0;let h=n?q.headshotMul*r.arrow.headMul:r.arrow.bodyMul;const d=!n&&r.arrow.glanceBody&&!c;!n&&r.arrow.glanceBody&&c&&(h=1.1);const u=t.damage*h;kc(t,e,s),d&&i.emit({type:"text",text:"갑옷에 튕김",sub:"관통 화살 / 머리를 노려라",style:"bad",id:e.id});const f=e.hp;Pf(i,a,e,u,u*.6,{heavy:c||n,interrupt:!0,result:d?"glance":n?"effective":"normal",atkType:"thrust",knockback:c?.6:0,arrow:!0});const g=f>0&&e.hp<=0;return n&&(i.stats.headshots++,i.gainResolve(q.resolveGain.headshot),i.emit({type:"text",text:"헤드샷",sub:t.perfect?"정사 · 頭":"頭",style:"effective",id:e.id})),t.arrowType==="fire"&&e.alive&&(e.burning=q.burnTicks,!r.heavyBody&&!r.isBoss&&!e.is("broken","finished")&&(e.set("fear",90),e.brain&&(e.brain.token=!1)),i.emit({type:"burn",id:e.id})),i.emit({type:"arrowHit",target:e.id,pos:s,headshot:n,dmg:u,lethal:g,blocked:!1}),g&&e.deathKind!=="arrow"&&(e.deathKind="arrow"),g&&!e.alive&&e.brain&&(e.brain.token=!1),!0}function Ah(i){return i.feint||i.projectile?0:Math.max(2,Math.min(6,Math.round(i.startup*.34)))}function n1(i){const t=Ah(i),e=i.startup,n=e-t,s=i.startup+i.active,a=Math.min(s+i.recovery,s+Math.max(3,Math.round(i.recovery*.38)));return{windupEnd:Math.max(1,Math.round(n*.78)),release:n,contact:e,activeEnd:s,followEnd:a,end:s+i.recovery,trail:[n,Math.min(a,s+3)]}}function Tl(i){const t=q.finisherImpact[i];if(i==="slash"){const n=q.finisherSlashDur;return{dur:n,dash:7,windupEnd:t-10,release:t-4,contact:t,followEnd:t+4,holdEnd:t+20,pull:t+24,trail:[t-4,t+6],victimFall:t+8,victimDown:t+38,victimDur:n+6,stand:.85}}if(i==="thrust"){const n=q.finisherThrustDur;return{dur:n,dash:7,windupEnd:t-12,release:t-4,contact:t,followEnd:t+2,holdEnd:t+14,pull:t+19,trail:[t-4,t+2],victimFall:t+19,victimDown:t+54,victimDur:n+6,stand:1}}const e=q.finisherFlowDur;return{dur:e,dash:5,windupEnd:t-5,release:t-3,contact:t,followEnd:t+4,holdEnd:t+18,pull:t+22,trail:[t-3,t+5],victimFall:t+3,victimDown:t+34,victimDur:e+6,stand:.85}}const Gi={slash:Tl("slash"),thrust:Tl("thrust"),flow:Tl("flow")},di={dur:q.issenDur,travel:5,contact:1,trail:[0,7],victimFreeze:22,victimDown:52,victimDur:56},Wn={seg:15,contact:3,trail:[1,8]};function Uc(i){return((i-1)%Wn.seg+Wn.seg)%Wn.seg}const fa={result:"normal",dmgMul:1,postureMul:1},i1=75*Math.PI/180,ds=i=>(i=Math.max(0,Math.min(1,i)),1-(1-i)*(1-i)),Yd=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Ta=i=>({x:-Math.cos(i),z:Math.sin(i)});function Ef(i,t){return i.arch?i.arch.isBoss&&i.phase===2?Nx[t]:i.arch.defense[t]:fa}function s1(i,t,e){const n=e.shape,s=ms(i.pos,t.pos);if(n.kind==="arc"){if(n.range<=0||s>n.range+t.radius)return!1;if(n.halfAngle>=Math.PI-.001)return!0;const r=s>.001?Math.asin(Math.min(1,t.radius/s)):Math.PI;return i.angleTo(t.pos)<=n.halfAngle+r}if(n.range<=0)return!1;const a=i.forward();return Ic(he(t.pos,i.pos),a)<-t.radius?!1:zx(t.pos,i.pos,Qe(i.pos,zt(a,n.range)))<=n.width/2+t.radius}function Al(i){const t=i.act;if(!t.from||!t.to||!t.travel)return{x:0,z:0};if(t.t>t.travel)return{x:0,z:0};const e=ds((t.t-1)/t.travel),n=ds(t.t/t.travel);return zt(he(t.to,t.from),n-e)}function a1(i,t){const e=t.act;switch(e.kind){case"attack":return r1(i,t);case"charge":{const n=i.get(e.targetId);return n&&n.targetable&&(t.yaw=bi(t.yaw,t.yawTo(n.pos),.08)),{x:0,z:0}}case"dodge":{const n=e.value===1?q.rollDist:q.dodgeDist,s=ds((e.t-1)/(e.dur*.8)),a=ds(e.t/(e.dur*.8));return zt(e.dir??{x:0,z:0},n*(a-s))}case"flowStep":{const n=ds((e.t-1)/10),s=ds(e.t/10);return zt(e.dir??{x:0,z:0},.8*(s-n))}case"flow":case"issen":{const n=i.get(e.targetId);return n&&e.kind==="flow"&&(t.yaw=bi(t.yaw,t.yawTo(n.pos),.3)),Al(t)}case"finisher":{const n=i.get(e.targetId);if(n){e.t<=8&&(t.yaw=bi(t.yaw,t.yawTo(n.pos),.5)),e.finisher!=="flow"&&(n.yaw=bi(n.yaw,n.yawTo(t.pos),.4));const s=Gi[e.finisher].contact;e.t===s&&!e.done&&(e.done=!0,v1(i,t,n,e.finisher??"slash"))}return Al(t)}case"overextended":case"evade":case"standoff":return Al(t);case"gale":return x1(i,t);case"quickshot":return e.t===6&&Jx(i,t),{x:0,z:0};default:return{x:0,z:0}}}function r1(i,t){const e=t.act,n=e.move,s=i.get(e.targetId);if(s&&s.targetable&&e.t<=(n.trackUntil??0)){const c=t.isPlayer?.5:(t.arch?.turnRate??.12)*1.4;t.yaw=bi(t.yaw,t.yawTo(s.pos),c)}const a=n.startup+n.active;if(!e.lunge||e.t>a)return{x:0,z:0};const r=Yd((e.t-1)/a),o=Yd(e.t/a);let l=e.lunge*(o-r);return s&&s.targetable&&t.gapTo(s)<.25&&(l=0),zt(t.forward(),l)}function o1(i,t){const e=t.act,n=e.move;if(!t.isPlayer&&n.unblockable&&n.unblockable!=="none"&&e.t===Math.max(1,n.startup-q.glintLead)&&(t.glint={color:n.unblockable,t:0},i.emit({type:"glint",id:t.id,color:n.unblockable,move:n})),n.feint)return;if(!n.projectile&&e.t===Math.max(1,n.startup-Ah(n))&&i.emit({type:"swing",id:t.id,move:n}),e.t===n.startup){n.projectile&&(i.emit({type:"swing",id:t.id,move:n}),Qx(i,t,n));const a=i.player;!t.isPlayer&&!n.projectile&&a.is("dodge")&&a.distTo(t)<=n.shape.range+q.dodgeDist+a.radius&&Rf(i,t,a)}if(n.projectile||e.t<n.startup||e.t>=n.startup+n.active)return;e.hit??=new Set;const s=t.isPlayer?i.fighters.filter(a=>a.team==="enemy"&&a.targetable):i.player.targetable?[i.player]:[];for(const a of s)if(!(e.hit.has(a.id)||!s1(t,a,n))&&(e.hit.add(a.id),t.isPlayer?Cf(i,t,a,n):c1(i,t,a,n),t.act!==e))break}function Tf(i,t){const e=t.act;if(e.kind==="dodge"){const[n,s]=e.value===1?q.rollIFrames:q.dodgeIFrames;return e.t>=n&&e.t<=s}return e.kind==="flowStep"&&e.t<=i.win(q.flowWindow)?!1:t.is("finisher","issen","flow","gale","dead")}function Af(i,t){if(!t.is("guard","deflect","blockstun"))return!1;const e=i.ps,n=e.guardStartTick-e.prevGuardStartTick<q.deflectSpamGap&&e.lastDeflectTick<e.prevGuardStartTick,s=i.win(n?q.deflectSpamWindow:q.deflectWindow);return i.tick-e.guardStartTick<=s}function Rf(i,t,e){const n=e.act,s=i.ps;if(n.kind!=="dodge")return;const a=n.value===1?q.rollIFrames[0]:q.dodgeIFrames[0],r=i.tick-n.t;n.t<a||n.t-a>q.perfectDodgeFrames||s.perfectDodgeTick===r||i.tick-s.lastPerfectDodgeTick<30||(s.perfectDodgeTick=r,s.lastPerfectDodgeTick=i.tick,s.dodgeCounterUntil=i.tick+q.dodgeCounterWindow,i.stats.perfectDodges++,i.gainResolve(q.resolveGain.perfectDodge),i.slowmo(.35,.4),i.emit({type:"perfectDodge",id:e.id,attacker:t.id}),i.emit({type:"text",text:"완벽 회피",sub:"見切り",style:"info",id:e.id}))}function l1(i,t,e){const n=t.act;if(n.kind!=="attack"||!n.move)return!1;const s=i.ps,a=i.tick<=s.issenChainUntil,r=i.win(a?q.issenChainWindow:q.issenWindow);return n.t>r||n.t>=n.move.startup+n.move.active||!a&&s.attackPressTick-s.prevAttackPressTick<q.issenMashLockout?!1:t.angleTo(e.pos)<=Math.PI*.6}function c1(i,t,e,n){const s=e.act;if(Tf(i,e)){Rf(i,t,e);return}if(l1(i,e,t)){Vo(i,e,t,!1);return}if(s.kind==="flowStep"&&s.t<=i.win(q.flowWindow)){u1(i,e,t,s.side??1);return}const a=n.unblockable??"none",r=e.angleTo(t.pos)<=q.guardArc;if(e.is("guard","deflect","blockstun")&&r){if(a!=="red"&&Af(i,e)){d1(i,e,t);return}if(a==="none"){h1(i,e,t,n);return}i.emit({type:"text",text:a==="red"?"막을 수 없다":"튕기기로만 막힌다",style:"bad",id:e.id})}Rh(i,t,e,n.damage,a!=="none"||n.damage>=20)}function Rh(i,t,e,n,s){const a=n*i.settings.enemyDamage;i.settings.invincible||(e.hp-=a),i.stats.damageTaken+=a,e.hitFlash=8,i.ps.combo=0,i.ps.draw=0,i.ps.focusing=!1;const r=je(he(e.pos,t.pos));if(i.emit({type:"hit",attacker:t.id,target:e.id,pos:e.pos,dmg:a,result:"normal",atkType:"slash",lethal:e.hp<=0,heavy:s}),e.hp<=0){e.hp=0,e.set("dead",1/0),i.pushBack(e,r,1.2),i.mode="defeat",i.slowmo(.3,1.6),i.emit({type:"defeat"});return}e.set(s?"stagger":"hitstun",s?q.stagger:q.hitstun),i.pushBack(e,r,s?1.2:.45),i.freeze(s?tn.heavy:tn.light)}function h1(i,t,e,n){const s=t.addPosture(n.posture*q.blockPostureMul);if(i.emit({type:"block",defender:t.id,attacker:e.id,pos:Ti(t,e),enemy:!1}),s){t.set("guardbreak",q.guardBreakStun),t.posture=t.maxPosture*.6,i.pushBack(t,he(t.pos,e.pos),.8),i.emit({type:"guardBreak",id:t.id,pos:t.pos}),i.emit({type:"text",text:"방패가 밀렸다",sub:"체간 붕괴",style:"bad",id:t.id}),i.freeze(tn.heavy);return}t.set("blockstun",10),i.pushBack(t,he(t.pos,e.pos),.3),i.freeze(tn.block)}function d1(i,t,e){const n=i.ps;e.addPosture(q.deflectPostureDmg*(e.arch?.isBoss?.8:1))?yr(i,e):e.set("recoil",q.deflectRecoil),i.pushBack(e,he(e.pos,t.pos),.5),e.brain&&(e.brain.token=!1),t.set("deflect",14,{targetId:e.id}),t.yaw=t.yawTo(e.pos),n.hajikiTarget=e.id,n.hajikiUntil=i.tick+i.win(q.hajikiIssenWindow),n.riposteTarget=e.id,n.riposteUntil=i.tick+q.riposteWindow,n.lastDeflectTick=i.tick,i.stats.deflects++,i.gainResolve(q.resolveGain.deflect),i.freeze(tn.deflect),i.slowmo(.55,.15),i.emit({type:"deflect",defender:t.id,attacker:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕기기",sub:"弾き",style:"deflect",id:t.id})}function u1(i,t,e,n){const s=i.ps,a=Ta(t.yaw),r=Qe(t.pos,Qe(zt(a,n*q.flowSideStep),zt(t.forward(),.2)));t.set("flow",q.flowAnimDur,{targetId:e.id,from:{...t.pos},to:r,travel:8,side:n});const o=e.forward();e.set("overextended",q.overextendDur,{from:{...e.pos},to:Qe(e.pos,zt(o,1.7)),travel:18}),e.addPosture(20),e.brain&&(e.brain.token=!1),s.flowTarget=e.id,s.flowUntil=i.tick+q.overextendDur,i.stats.flows++,i.gainResolve(q.resolveGain.flow),i.freeze(tn.flow),i.slowmo(.35,.35),i.emit({type:"flow",defender:t.id,attacker:e.id,pos:Ti(t,e),side:n}),i.emit({type:"text",text:"흘리기",sub:"流し",style:"flow",id:t.id})}function Vo(i,t,e,n,s=!1){const a=i.ps,r=!n&&!s&&i.tick<=a.issenChainUntil?a.issenChain+1:1;!n&&!s&&(a.issenChain=r,a.issenChainUntil=i.tick+q.issenChainTime,i.stats.maxIssenChain=Math.max(i.stats.maxIssenChain,r));const o=je(he(e.pos,t.pos)),l=Qe(e.pos,zt(o,e.radius+1.1)),c=s?"standoff":n?"hajiki":"issen";t.set("issen",di.dur,{targetId:e.id,from:{...t.pos},to:l,travel:di.travel,finisher:c}),(n||s)&&(t.act.t=-1),t.yaw=fi(o),a.hajikiTarget=-1,e.brain&&(e.brain.token=!1),e.arch?.isBoss?(e.hp=Math.max(0,e.hp-e.maxHp*q.bossIssenFrac),e.addPosture(40),e.set("finished",40,{finisher:c,targetId:t.id}),e.hp<=0?Is(i,e,c):Ch(i,e)):(e.hp=0,e.set("finished",di.victimDur,{finisher:c,targetId:t.id}),e.deathKind=c,Is(i,e,c)),s?i.stats.standoffKills++:i.stats.issens++,i.gainResolve(q.resolveGain.issen),i.freeze(tn.issen),i.slowmo(.18,r>1?.45:.7),i.emit({type:"issen",performer:t.id,victim:e.id,pos:Ti(t,e),chain:r,hajiki:n});const h=s?"대치 참":n?"튕기기 일섬":r>1?`연쇄 일섬 ×${r}`:"일섬",d=s?"対峙斬り":n?"弾き一閃":r>1?"連鎖一閃":"一閃";i.emit({type:"text",text:h,sub:d,style:"issen",id:t.id})}function Cf(i,t,e,n){if(!e.targetable||e.is("evade"))return;const s=t.act,a=e.angleTo(t.pos)<=i1;let r=n.trueStrike?fa:Ef(e,n.type);if(r.frontalOnly&&!a&&(r=fa),e.arch?.id==="shield"&&e.shieldOpen>0&&r.result==="bounce"&&(r=fa),(r.result==="bounce"||r.result==="evade"||r.result==="haft")&&e.defenseless&&(r=fa),r.result==="evade")if(e.is("attack","hitstun","stagger","blockstun","finished"))r=fa;else return p1(i,e,t);if(r.result==="bounce")return m1(i,t,e,n,r);if(r.result==="haft")return g1(i,t,e,n,r);if(e.act.kind==="guard"&&a&&!n.trueStrike){if(e.act.value===1&&!n.heavy&&!n.interrupt)return f1(i,t,e);if(n.heavy||n.interrupt){e.set("guardbreak",50),e.addPosture(n.posture*.5),i.pushBack(e,he(e.pos,t.pos),.6),i.emit({type:"guardBreak",id:e.id,pos:e.pos}),i.emit({type:"text",text:"가드 붕괴",sub:"崩し",style:"effective",id:e.id}),i.freeze(tn.heavy);return}const d=e.addPosture(n.posture*.6*r.postureMul);i.emit({type:"block",defender:e.id,attacker:t.id,pos:Ti(t,e),enemy:!0}),i.freeze(tn.block),d?yr(i,e):e.brain&&i.rng.chance(.35)&&(e.brain.counter=!0);return}n.shieldBreak&&e.arch?.id==="shield"&&e.shieldOpen<=0&&(e.shieldOpen=150,i.emit({type:"shieldOpen",id:e.id}),i.emit({type:"text",text:"방패 걷어냄",sub:"盾崩し",style:"effective",id:e.id}));const l=s.kind==="attack"&&n.heavy?1+.3*(s.value??0):1;let c=n.damage*r.dmgMul*(s.dmgBonus??1)*l,h=n.posture*r.postureMul*(s.postureBonus??1)*l;e.is("fear")&&(h*=1.5),e.is("overextended")&&(c*=1.5),Pf(i,t,e,c,h,{heavy:!!(n.heavy||n.finale),interrupt:!!n.interrupt,result:r.result,atkType:n.type,knockback:n.knockback??0})}function Pf(i,t,e,n,s,a){e.hp-=n,e.hitFlash=6,a.result==="effective"&&i.stats.effectiveHits++,a.result==="glance"&&(i.stats.badHits++,i.emit({type:"glance",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"미끄러짐",sub:e.arch?.weakness==="thrust"?"갑옷 틈을 찔러라":"",style:"bad",id:e.id})),i.ps.combo++,i.ps.comboTimer=120;const r=e.hp<=0,o=je(he(e.pos,t.pos));if(i.emit({type:"hit",attacker:t.id,target:e.id,pos:Ti(t,e),dmg:n,result:a.result,atkType:a.atkType,lethal:r,heavy:a.heavy}),r){e.hp=0,e.set("dead",1/0),e.deathKind=a.arrow?"arrow":a.atkType,i.pushBack(e,o,a.heavy?1.4:.7),Is(i,e,a.arrow?"arrow":a.atkType),i.freeze(tn.heavy);return}const l=e.addPosture(s);if(Ch(i,e),!e.is("finished")){if(l&&!e.is("broken")){yr(i,e),i.freeze(tn.heavy);return}if(!e.is("broken","overextended")){const c=!!e.arch?.heavyBody||e.attacking&&!!e.act.move?.hyperArmor;a.interrupt&&e.attackPhase==="startup"&&!(a.arrow&&c)?(e.set("hitstun",q.hitstun),i.pushBack(e,o,.5)):a.result==="glance"||c?a.heavy&&!e.attacking&&!e.arch?.isBoss&&(e.set("stagger",26),i.pushBack(e,o,.4+a.knockback*.5)):a.heavy?(e.set("stagger",q.stagger),i.pushBack(e,o,.6+a.knockback)):(e.set("hitstun",q.hitstun),i.pushBack(e,o,.35)),e.brain&&(e.brain.token=e.brain.token&&!e.is("hitstun","stagger"),e.arch&&i.rng.chance(e.arch.ai.guardChance)&&(e.brain.pendingGuard=!0),e.arch&&!a.arrow&&e.arch.ai.breakout!=="none"&&(e.poiseHits++,e.poiseTimer=90,e.poiseHits>=e.arch.ai.poise&&(e.poiseHits=0,e.brain.breakout=!0,e.brain.pendingGuard=!1,e.is("hitstun")&&(e.act.dur=Math.min(e.act.dur,8)))))}i.freeze(a.result==="effective"?tn.effective:a.heavy?tn.heavy:tn.light)}}function f1(i,t,e){t.set("recoil",30),i.pushBack(t,he(t.pos,e.pos),.5),e.set("guard",16,{value:0}),e.brain&&(e.brain.counter=!0,e.brain.guardTimer=16),i.stats.badHits++,i.freeze(tn.deflect),i.emit({type:"deflect",defender:e.id,attacker:t.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕겨냈다",sub:"적의 튕기기 — 강공격·방패 치기로 깨라",style:"bad",id:e.id})}function p1(i,t,e){const n=i.rng.chance(.5)?1:-1,s=Ta(t.yawTo(e.pos)),a=je(he(t.pos,e.pos));t.set("evade",20,{from:{...t.pos},to:Qe(t.pos,Qe(zt(s,1.7*n),zt(a,.4))),travel:10,side:n}),t.brain&&(t.brain.counter=!0),i.stats.badHits++,i.emit({type:"evade",id:t.id,attacker:e.id}),i.emit({type:"text",text:"회피당함",sub:"넓게 베어라",style:"bad",id:t.id})}function m1(i,t,e,n,s){t.set("recoil",n.heavy?30:24),i.pushBack(t,he(t.pos,e.pos),.5),e.addPosture(n.posture*s.postureMul)?yr(i,e):e.brain&&(e.brain.counter=!0),i.stats.badHits++,i.freeze(tn.bounce),i.emit({type:"bounce",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"튕겨남",sub:"방패엔 찌르기",style:"bad",id:e.id})}function g1(i,t,e,n,s){if(t.set("recoil",14),i.pushBack(t,he(t.pos,e.pos),.8),e.hp-=n.damage*s.dmgMul,e.hp<=0){e.hp=0,e.set("dead",1/0),e.deathKind=n.type,Is(i,e,n.type);return}e.addPosture(n.posture*s.postureMul)&&yr(i,e),i.stats.badHits++,i.freeze(tn.block),i.emit({type:"haft",attacker:t.id,target:e.id,pos:Ti(t,e)}),i.emit({type:"text",text:"창대에 막힘",sub:"창병엔 베기",style:"bad",id:e.id})}function yr(i,t){t.set("broken",q.brokenDur),t.posture=t.maxPosture,t.glint=null,t.brain&&(t.brain.token=!1),i.emit({type:"postureBreak",id:t.id,pos:t.pos}),i.emit({type:"text",text:"체간 붕괴",sub:"피니쉬!",style:"finisher",id:t.id})}function Is(i,t,e){i.stats.kills++,i.ps.arrows.standard=Math.min(q.maxArrows.standard,i.ps.arrows.standard+1),i.gainResolve(q.resolveGain.kill),t.brain&&(t.brain.token=!1),t.glint=null,i.emit({type:"kill",victim:t.id,killer:i.player.id,cause:e}),i.liveEnemies().length===0&&i.mode==="combat"&&i.slowmo(.22,1.2)}function Ch(i,t){!t.arch?.isBoss||t.phase!==1||t.hp>t.maxHp*.55||(t.phase=2,t.posture=0,t.is("finished")||t.set("stagger",60),i.emit({type:"armorShatter",id:t.id,pos:t.pos}),i.emit({type:"text",text:"갑옷 파쇄",sub:"이제 베기가 통한다",style:"warn",id:t.id}),i.slowmo(.3,.8))}function Nc(i,t,e=-1){const n=i.ps,s=i.get(n.flowTarget);if(s&&s.id!==e&&s.targetable&&s.is("overextended")&&i.tick<=n.flowUntil&&t.distTo(s)<=4)return{target:s,kind:"flow"};const a=i.get(n.hajikiTarget);if(a&&a.id!==e&&a.targetable&&a.is("recoil")&&i.tick<=n.hajikiUntil&&t.distTo(a)<=4.2)return{target:a,kind:"hajiki"};let r=null,o=1/0;for(const l of i.fighters){if(l.team!=="enemy"||l.id===e||!l.targetable)continue;const c=!l.arch?.isBoss&&l.hp<=l.maxHp*q.finishHpFrac&&l.is("stagger","guardbreak","fear","hitstun");if(!l.is("broken")&&!c)continue;const h=t.distTo(l)-l.radius,d=e>=0?q.finisherChainRange:q.finisherRange;if(h>d)continue;const u=h+t.angleTo(l.pos)*.8;u<o&&(o=u,r=l)}return r?{target:r,kind:"finisher"}:null}function Fc(i,t,e,n){const s=Gi[n],a=s.dur,r=je(he(e.pos,t.pos)),o=s.stand+e.radius*.6,l=he(e.pos,zt(r,o));t.set("finisher",a,{finisher:n,targetId:e.id,from:{...t.pos},to:l,travel:s.dash}),e.kb={x:0,z:0},e.vel={x:0,z:0},t.yaw=fi(r),e.set("finished",s.victimDur,{finisher:n,targetId:t.id}),e.glint=null,n!=="flow"&&(e.yaw=fi(zt(r,-1))),e.brain&&(e.brain.token=!1);const c=n!=="flow"&&e.arch?.weakness===n;i.ps.flowTarget=-1,i.emit({type:"finisherStart",performer:t.id,victim:e.id,kind:n,weakness:c})}function v1(i,t,e,n){const s=e.arch?.weakness===n;e.hp<=0||(e.arch?.isBoss?(e.hp=Math.max(0,e.hp-e.maxHp*q.bossFinisherFrac*(s?1.2:1)),e.posture=0,e.hp<=0?(e.deathKind=n,Is(i,e,n)):Ch(i,e)):(e.hp=0,e.deathKind=n,Is(i,e,n))),i.stats.finishers++,i.gainResolve(q.resolveGain.finisher+(s?.25:0)),i.freeze(tn.finisher),i.slowmo(.3,.5),i.emit({type:"finisherImpact",performer:t.id,victim:e.id,kind:n,pos:e.pos});const a=n==="slash"?["일도양단","一刀両断"]:n==="thrust"?["심장 관통","心突"]:["흘려베기","流し斬り"];i.emit({type:"text",text:a[0],sub:s?`${a[1]} · 약점 마무리`:a[1],style:"finisher",id:t.id}),_1(i,e.pos,s)}function _1(i,t,e){for(const n of i.fighters){if(n.team!=="enemy"||!n.targetable||n.arch?.isBoss||n.is("broken","fear")||ms(n.pos,t)>q.terrifyRadius)continue;const s=q.terrifyChance*(1-(n.arch?.ai.courage??.5)*.6)+(e?q.terrifyWeaknessBonus:0);i.rng.chance(s)&&(n.set("fear",q.fearDur),n.brain&&(n.brain.token=!1),i.emit({type:"fear",id:n.id}),i.emit({type:"text",text:"겁먹음",sub:"怯え",style:"info",id:n.id}))}}const _r=Wn.seg;function x1(i,t){const e=t.act,n=Math.floor((e.t-1)/_r),s=(e.t-1)%_r,a=i.get(i.ps.galeTargets[n]);if(!a)return{x:0,z:0};if(s===0){const l=je(he(a.pos,t.pos));e.from={...t.pos},e.to=Qe(a.pos,zt(l,a.radius+.9)),t.yaw=fi(l)}if(!e.from||!e.to||s>5)return{x:0,z:0};const r=ds(s/5),o=ds((s+1)/5);return zt(he(e.to,e.from),o-r)}function y1(i,t){const e=t.act,n=Math.floor((e.t-1)/_r),s=(e.t-1)%_r,a=i.get(i.ps.galeTargets[n]);s===Wn.contact-2&&a&&a.targetable&&i.emit({type:"swing",id:t.id,move:gr.r_gale}),s===Wn.contact&&a&&a.targetable&&Cf(i,t,a,gr.r_gale)}function Ti(i,t){return zt(Qe(i.pos,t.pos),.5)}function M1(i,t){const e=i.player,n=i.ps,s=i.buffer,a=i.tick;{const c=u=>s.pressTick.get(u)??-9999,h=u=>s.prevPressTick.get(u)??-9999,d=[c("slash"),c("thrust"),h("slash"),h("thrust")].sort((u,f)=>f-u);n.attackPressTick=d[0],n.prevAttackPressTick=d[1]}if(t.pressed.arrow1&&(n.arrowType="standard"),t.pressed.arrow2&&(n.arrowType="heavy"),t.pressed.arrow3&&(n.arrowType="fire"),t.pressed.arrowNext){const c=["standard","heavy","fire"];n.arrowType=c[(c.indexOf(n.arrowType)+1)%c.length]}if(t.pressed.lock){const c=i.get(n.lockTarget);c&&c.targetable?n.lockTarget=null:n.lockTarget=rr(i,e,t,14)?.id??null}if(n.lockTarget!==null&&!i.get(n.lockTarget)?.targetable&&(n.lockTarget=null),!e.alive||i.mode==="victory"){e.vel={x:0,z:0};return}const r=Nc(i,e);n.finisherTarget=r?.target.id??null,n.finisherKindHint=r?.kind??null,n.softTarget=rr(i,e,t,q.softTargetRange)?.id??null;const o=q.inputBuffer,l=e.act;switch(e.vel={x:0,z:0},l.kind){case"free":if(t.pressed.standoff&&i.waves?.standoffAvailable&&i.standoff.begin(i)||Ss(i,e)||Oc(i,e,t))return;if(t.held.heal&&n.resolve>=q.healCost&&e.hp<e.maxHp){e.set("heal",q.healDur);return}if(t.held.aim)return Mo(i,e);if(s.consume("quickshot",a,o)&&Lf(i,e))return;if(s.consume("dodge",a,o))return ri(i,e,t);if(t.held.guard)return os(i,e,Oi(i));if(s.peek("slash",a,o)||s.peek("thrust",a,o))return Ba(i,e,t);Rl(i,e,t,q.runSpeed);return;case"guard":{{const c=Oi(i);c!==null&&(n.prevGuardStartTick=n.guardStartTick,n.guardStartTick=c)}if(Ss(i,e))return;if(!t.held.guard&&a-n.guardStartTick>i.win(q.deflectWindow)){e.set("free",1/0),Rl(i,e,t,q.runSpeed);return}if(s.consume("dodge",a,o))return S1(e,t);if(s.consume("slash",a,o))return xa(i,e,t,Nn("r_bash"),"slash",!1);if(s.peek("thrust",a,o))return s.consume("thrust",a,o),xa(i,e,t,Nn(bh.thrust),"thrust",!0);if(t.held.aim)return Mo(i,e);Rl(i,e,t,q.guardMoveSpeed,!0);return}case"deflect":if(Ss(i,e))return;{const c=Oi(i);if(c!==null)return os(i,e,c)}return l.t>=6&&s.consume("dodge",a,o)?ri(i,e,t):l.t>=8&&(s.peek("slash",a,o)||s.peek("thrust",a,o))?Ba(i,e,t):void 0;case"blockstun":{const c=Oi(i);if(c!==null)return os(i,e,c)}return;case"flow":return l.t>=6&&Ss(i,e)?void 0:l.t>=14&&s.consume("dodge",a,o)?ri(i,e,t):void 0;case"flowStep":if(l.t>i.win(q.flowWindow)+4){if(s.peek("slash",a,o)||s.peek("thrust",a,o))return Ba(i,e,t);{const c=Oi(i);if(c!==null)return os(i,e,c)}}return;case"attack":return b1(i,e,t);case"charge":{const c=l.button??"slash",h=rr(i,e,t,q.softTargetRange);if(h?l.targetId=h.id:Un(t.move)>.2&&(e.yaw=bi(e.yaw,fi(t.move),.1)),s.consume("dodge",a,o))return ri(i,e,t);if(!t.held[c]&&l.t>=q.chargeMin||l.t>=q.chargeMax){const d=Math.min(1,l.t/q.chargeMax),u=Nn(Xx[c]);xa(i,e,t,u,c,!1,d)}return}case"dodge":if(l.value!==1&&l.t>=3&&l.t<=14&&s.consume("dodge",a,o)){e.set("dodge",q.rollDur,{dir:l.dir,value:1});return}if(l.t>=(l.value===1?22:q.dodgeCancelFrom)){if(Ss(i,e))return;if(t.held.aim)return Mo(i,e);if(s.peek("slash",a,o)||s.peek("thrust",a,o))return Ba(i,e,t);if(t.held.guard&&s.peek("guard",a,o))return os(i,e,Oi(i))}return;case"aim":return w1(i,e,t);case"quickshot":if(l.t>=12){if(s.peek("slash",a,o)||s.peek("thrust",a,o))return Ba(i,e,t);if(s.consume("dodge",a,o))return ri(i,e,t)}return;case"finisher":if(l.t>=q.finisherChainFrom){const c=Nc(i,e,l.targetId??-1);if(c&&(s.peek("slash",a,o)||s.peek("thrust",a,o))){const h=Go(i);c.kind==="hajiki"?Vo(i,e,c.target,!0):Fc(i,e,c.target,c.kind==="flow"?"flow":h),i.emit({type:"text",text:"연쇄 피니쉬",sub:"連殺",style:"finisher",id:e.id});return}if(l.t>=l.dur-12&&s.consume("dodge",a,o))return ri(i,e,t)}return;case"issen":if(l.t>=l.dur-12){if(Ss(i,e))return;if(s.consume("dodge",a,o))return ri(i,e,t);if(s.peek("guard",a,o))return os(i,e,Oi(i))}return;case"recoil":if(l.t>=12){if(s.peek("guard",a,o))return os(i,e,Oi(i));if(s.consume("dodge",a,o))return ri(i,e,t)}return;case"hitstun":return l.t>=10&&s.consume("dodge",a,o)?ri(i,e,t):void 0;case"heal":(t.pressed.dodge||t.pressed.guard)&&e.set("free",1/0);return;default:return}}function Rl(i,t,e,n,s=!1){const a=e.move,r=Math.min(1,Un(a));t.vel=zt(a,n*r);const o=i.get(i.ps.lockTarget);if(o&&o.targetable)i.faceToward(t,o.pos,q.playerTurnRate);else if(s){const l=i.get(i.ps.softTarget);l?i.faceToward(t,l.pos,.2):r>.1&&(t.yaw=bi(t.yaw,fi(a),.15))}else r>.1&&(t.yaw=bi(t.yaw,fi(a),q.playerTurnRate))}function rr(i,t,e,n){const s=i.get(i.ps.lockTarget);if(s&&s.targetable&&t.distTo(s)<n+4)return s;const a=Un(e.move)>.25?je(e.move):t.forward();let r=null,o=1/0;for(const l of i.fighters){if(l.team!=="enemy"||!l.targetable)continue;const c=he(l.pos,t.pos),h=Un(c)-l.radius;if(h>n)continue;const d=Math.abs(Math.atan2(a.x*c.z-a.z*c.x,a.x*c.x+a.z*c.z));if(d>Math.PI*.6&&h>1.8)continue;const u=h*(1+d*1.3);u<o&&(o=u,r=l)}return r}function Go(i){const t=q.inputBuffer,e=i.buffer.pressTick.get("slash")??-1,n=i.buffer.pressTick.get("thrust")??-1,s=i.buffer.peek("slash",i.tick,t),a=i.buffer.peek("thrust",i.tick,t),r=s&&a?n>e?"thrust":"slash":a?"thrust":"slash";return i.buffer.consume("slash",i.tick,t),i.buffer.consume("thrust",i.tick,t),r}function Ss(i,t){const e=q.inputBuffer;if(!i.buffer.peek("slash",i.tick,e)&&!i.buffer.peek("thrust",i.tick,e))return!1;const n=Nc(i,t);if(!n)return!1;const s=Go(i);return n.kind==="hajiki"?Vo(i,t,n.target,!0):n.kind==="flow"?Fc(i,t,n.target,"flow"):Fc(i,t,n.target,s),!0}function Oc(i,t,e){const n=i.ps,s=i.buffer.pressTick.get("slash")??-99,a=i.buffer.pressTick.get("thrust")??-999,r=Math.abs(s-a)<=3&&i.tick-Math.max(s,a)<=4;if(!(e.pressed.gale||r))return!1;if(n.resolve<q.galeCost)return e.pressed.gale&&i.emit({type:"text",text:"결의 부족",style:"bad",id:t.id}),!1;const o=i.fighters.filter(l=>l.team==="enemy"&&l.targetable&&t.distTo(l)<10).sort((l,c)=>t.distTo(l)-t.distTo(c)).slice(0,3);return o.length===0?!1:(i.buffer.clear("slash"),i.buffer.clear("thrust"),n.resolve-=q.galeCost,n.galeTargets=o.map(l=>l.id),t.set("gale",_r*o.length+12),i.slowmo(.5,.6),i.emit({type:"gale",id:t.id}),i.emit({type:"text",text:"질풍참",sub:"疾風斬",style:"issen",id:t.id}),!0)}function Ba(i,t,e){const n=Go(i);xa(i,t,e,Nn(bh[n]),n,!0)}function xa(i,t,e,n,s,a,r=0){const o=i.ps,l=rr(i,t,e,q.softTargetRange);let c=n.lunge*.3;if(l){t.yaw=t.yawTo(l.pos);const u=n.shape.range,f=ms(t.pos,l.pos)-t.radius-l.radius;c=Math.max(0,Math.min(n.lunge,f-u*.45+.2))}else Un(e.move)>.2&&(t.yaw=fi(e.move));let h=1,d=1;i.tick<=o.dodgeCounterUntil&&(h*=1.6,d*=1.25,o.dodgeCounterUntil=-1,i.emit({type:"text",text:"회피 반격",style:"info",id:t.id})),l&&l.id===o.riposteTarget&&i.tick<=o.riposteUntil&&(h*=2,o.riposteUntil=-1),t.set("attack",n.startup+n.active+n.recovery,{move:n,hit:new Set,targetId:l?.id,lunge:c,opener:a,button:s,value:r,postureBonus:h,dmgBonus:d})}function b1(i,t,e){const n=t.act,s=n.move,a=i.buffer,r=i.tick,o=q.inputBuffer;if(!(n.opener&&n.t<=4&&Oc(i,t,e))){if(n.button&&!s.heavy&&s.id!=="r_bash"&&n.t===s.startup+s.active+q.chargeCheck&&e.held[n.button]&&!a.peek(n.button,r,o)){t.set("charge",1/0,{button:n.button,targetId:n.targetId});return}if(n.t>=s.chainFrom){if(Ss(i,t)||Oc(i,t,e))return;const l=a.peek("slash",r,o),c=a.peek("thrust",r,o);if(l||c){const h=l&&c?Go(i):l?"slash":"thrust",d=s.next?.[h];if(d){a.consume(h,r,o),xa(i,t,e,Nn(d),h,!1);return}if(n.t>=s.cancelFrom+4){a.consume(h,r,o),xa(i,t,e,Nn(bh[h]),h,!0);return}}}if(n.t>=s.cancelFrom){if(a.consume("dodge",r,o))return ri(i,t,e);if(a.peek("guard",r,o)&&e.held.guard)return os(i,t,Oi(i));if(e.held.aim)return Mo(i,t);if(a.consume("quickshot",r,o)&&Lf(i,t))return}}}function Oi(i){const t=i.buffer.pressTick.get("guard");return t===void 0||!i.buffer.consume("guard",i.tick,q.inputBuffer)?null:t}function os(i,t,e){const n=i.ps;n.prevGuardStartTick=n.guardStartTick,n.guardStartTick=e??-9999,t.set("guard",1/0)}function ri(i,t,e){const n=Un(e.move)>.2?je(e.move):zt(t.forward(),-1);i.ps.dodgePressTick=i.tick,t.set("dodge",q.dodgeDur,{dir:n}),i.ps.draw=0}function S1(i,t){const e=Ta(i.yaw),s=t.move.x*e.x+t.move.z*e.z<-.2?-1:1;i.set("flowStep",q.flowStepDur,{side:s,dir:zt(e,s)})}function Mo(i,t){const e=i.ps;(i.tick-e.lastDodgeEnd<20||t.is("dodge"))&&(e.dodgeAimSlowmo=q.dodgeAimSlowmoSec),e.draw=0,t.set("aim",1/0)}function w1(i,t,e){const n=i.ps;if(!e.held.aim){n.draw=0,n.focusing=!1,n.dodgeAimSlowmo=0,t.set("free",1/0);return}if(i.buffer.consume("dodge",i.tick,q.inputBuffer))return n.focusing=!1,ri(i,t,e);t.yaw=e.camYaw,t.vel=zt(e.move,q.aimMoveSpeed*Math.min(1,Un(e.move))),n.focusing=!!(e.held.focus||e.held.guard)&&n.resolve>.02,!!(e.held.slash||e.held.fire)?n.arrows[n.arrowType]>0?n.draw++:(e.pressed.slash||e.pressed.fire)&&i.emit({type:"text",text:"화살이 없다",style:"bad",id:t.id}):n.draw>0&&(n.draw>=8&&Zx(i,t,e,n.draw),n.draw=0)}function Lf(i,t){if(i.ps.arrows.standard<=0)return i.emit({type:"text",text:"화살이 없다",style:"bad",id:t.id}),!1;const e=rr(i,t,i.input,28);return e&&(t.yaw=t.yawTo(e.pos)),t.set("quickshot",q.quickshotDur,{targetId:e?.id}),!0}function E1(i,t){const e=t.arch?.ai.cooldown??[60,120];return{token:!1,cooldown:Math.round(i.rng.range(e[0]*.5,e[1])),strafeDir:i.rng.chance(.5)?1:-1,strafeTimer:Math.round(i.rng.range(60,180)),plan:null,guardTimer:0,pendingGuard:!1,counter:!1,aware:!0,slot:0,rangedCooldown:Math.round(i.rng.range(60,140)),breakout:!1}}function ya(i){return i.player.is("finisher","issen","gale")}function zc(i,t){if(ya(i))return!1;if(t.arch?.ai.ranged||t.brain?.token)return!0;const e=i.fighters.filter(a=>a!==t&&a.team==="enemy"&&a.targetable&&a.brain&&!a.arch.ai.ranged),n=e.some(a=>a.arch.isBoss)||t.arch?.isBoss?1:q.maxAttackers;return e.filter(a=>a.brain.token||a.is("attack")&&!a.act.move?.feint).length>=n?!1:(t.brain.token=!0,!0)}function T1(i){const t=i.player,e=i.fighters.filter(n=>n.team==="enemy"&&n.targetable&&n.brain);if(e.length!==0&&i.mode!=="standoff"){if(i.mode!=="combat"){for(const n of e)n.vel={x:0,z:0},n.is("free")&&i.faceToward(n,t.pos,n.arch.turnRate);return}A1(i,e),e.forEach((n,s)=>{n.brain.slot=s,R1(i,n)})}}function A1(i,t){const e=i.player,n=t.filter(l=>!l.arch.ai.ranged&&l.brain.aware),s=n.filter(l=>l.brain.token||l.is("attack")&&!l.act.move?.feint),a=n.find(l=>l.arch.isBoss),r=a?1:q.maxAttackers;if(a){!a.brain.token&&a.is("free")&&a.brain.cooldown<=0&&(a.brain.token=!0);return}if(s.length>=r||!e.alive)return;const o=n.filter(l=>!l.brain.token&&l.brain.cooldown<=0&&l.is("free","guard")).sort((l,c)=>l.distTo(e)-c.distTo(e));for(const l of o.slice(0,r-s.length))l.brain.token=!0}function R1(i,t){const e=t.brain,n=t.arch,s=i.player;if(e.cooldown>0&&e.cooldown--,e.rangedCooldown>0&&e.rangedCooldown--,t.vel={x:0,z:0},n.id==="dummy"){t.hp<t.maxHp*.5&&(t.hp=t.maxHp);return}const a=t.act,r=t.distTo(s),o=t.gapTo(s),l=n.speed*(n.isBoss&&t.phase===2?1.2:1);switch(a.kind){case"attack":{const x=a.move,m=x.startup+x.active+Math.floor(x.recovery*.35);if(a.t!==m)return;if(x.next?.slash)s.targetable&&o<Nn(x.next.slash).shape.range+.8&&i.rng.chance(n.ai.comboChance)&&!ya(i)?xi(i,t,Nn(x.next.slash)):(e.token=!1,e.cooldown=Math.round(i.rng.range(n.ai.cooldown[0],n.ai.cooldown[1])*(1.4-n.ai.aggression)));else if(x.feint&&e.token&&o<3&&!ya(i)){const p=Jr(i,t,o,!0);p&&xi(i,t,p)}return}case"guard":if(i.faceToward(t,s.pos,n.turnRate),t.vel=zt(Ta(t.yaw),e.strafeDir*l*.25),--e.guardTimer<=0)t.set("free",1/0);else if(e.counter&&(s.is("recoil")||s.attackPhase==="recovery")&&o<2.8&&zc(i,t)){e.counter=!1;const x=Jr(i,t,o,!1);x&&xi(i,t,x)}return;case"fear":{const x=je(he(t.pos,s.pos));t.vel=zt(x,l*.55),i.faceToward(t,s.pos,n.turnRate);return}case"free":break;default:return}if(!s.targetable){i.faceToward(t,s.pos,n.turnRate*.5);return}if(i.faceToward(t,s.pos,n.turnRate),!e.aware){r>7.5&&(t.vel=zt(je(he(s.pos,t.pos)),l*.35));return}if(e.breakout)return e.breakout=!1,C1(i,t,o);if(e.pendingGuard){e.pendingGuard=!1,t.set("guard",1/0),e.guardTimer=Math.round(i.rng.range(50,100));return}if(n.ai.guardChance>0&&(!e.token||n.isBoss)&&s.attackPhase==="startup"&&o<2.6&&i.rng.chance(n.ai.guardChance*.25)){t.set("guard",1/0,{value:n.isBoss&&i.rng.chance(.5)?1:0}),e.guardTimer=Math.round(i.rng.range(40,80));return}if(n.ai.ranged)return P1(i,t,o,l);const c=ya(i);if(e.token&&!c){if(e.counter){e.counter=!1;const m=Jr(i,t,o,!1);if(m&&o<=m.shape.range+.2)return xi(i,t,m)}if(!e.plan){const m=Jr(i,t,o,!1,!0);e.plan=m?.id??null}const x=e.plan?Nn(e.plan):null;if(x?.projectile){const m=n.moves.find(p=>p.move===x.id);if(e.plan=null,o>=m.minRange-.5&&o<=m.maxRange)return xi(i,t,x)}else if(x){const m=(x.shape.kind==="line",x.shape.range),p=Math.max(.3,m*.8+(x.lunge>2?x.lunge*.6:0));if(o<=p)return e.plan=null,xi(i,t,x);t.vel=zt(je(he(s.pos,t.pos)),l);return}}const h=n.ai.preferredRange+1.6+e.slot%3*.7,d=je(he(s.pos,t.pos)),u=zt(Ta(t.yaw),e.strafeDir);let f=0;r<h-.5?f=-1:r>h+.5&&(f=1);const g=Qe(zt(d,f),zt(u,.6));t.vel=zt(je(g),l*(f===1&&r>h+3?.9:.45));for(const x of i.fighters){if(x===t||x.team!=="enemy"||!x.targetable)continue;const m=he(t.pos,x.pos),p=Un(m);p<1.8&&p>.001&&(t.vel=Qe(t.vel,zt(m,(1.8-p)/p*1.2)))}--e.strafeTimer<=0&&(e.strafeTimer=Math.round(i.rng.range(80,200)),e.strafeDir=e.strafeDir===1?-1:1)}function C1(i,t,e){const n=t.brain,s=i.player;switch(t.arch.ai.breakout){case"parry":t.set("guard",1/0,{value:1}),n.guardTimer=50,n.counter=!0,i.emit({type:"text",text:"튕기기 자세",sub:"강공격·방패 치기로 깨라",style:"warn",id:t.id});return;case"backstep":{const a=je(he(t.pos,s.pos));t.set("evade",20,{from:{...t.pos},to:Qe(t.pos,zt(a,2.2)),travel:12,side:1}),n.counter=zc(i,t);return}case"bash":e<4.5&&zc(i,t)&&xi(i,t,Nn("sh_charge"));return;default:return}}function P1(i,t,e,n){const s=t.brain,a=i.player,r=t.arch,o=je(he(a.pos,t.pos));if(e<2&&s.cooldown<=0&&!ya(i))return s.cooldown=Math.round(i.rng.range(r.ai.cooldown[0],r.ai.cooldown[1])),xi(i,t,Nn("ac_knife"));if(e<6){t.vel=zt(o,-n*.8);return}const l=i.fighters.filter(c=>c.team==="enemy"&&c.targetable&&c.is("attack")&&c.act.move?.projectile==="arrow").length;if(s.rangedCooldown<=0&&l<q.maxShooters&&!ya(i))return s.rangedCooldown=Math.round(i.rng.range(r.ai.cooldown[0],r.ai.cooldown[1])),xi(i,t,Nn("ac_shot"));e>r.ai.preferredRange+4?t.vel=zt(o,n*.6):t.vel=zt(Ta(t.yaw),s.strafeDir*n*.3),--s.strafeTimer<=0&&(s.strafeTimer=Math.round(i.rng.range(90,200)),s.strafeDir=s.strafeDir===1?-1:1)}function Jr(i,t,e,n,s=!1){const a=t.arch,r=a.moves.filter(l=>{const c=Nn(l.move);return c.projectile&&l.move==="ac_shot"||n&&c.feint||c.feint&&!i.rng.chance(a.ai.feintChance*4)?!1:s?e>=l.minRange-.5:e>=l.minRange-.5&&e<=l.maxRange+.5});if(r.length===0)return null;const o=r.map(l=>l.weight*(e>=l.minRange&&e<=l.maxRange?2:1));return Nn(r[i.rng.weighted(o)].move)}function xi(i,t,e){const n=i.player,s=t.brain,a=t.arch;t.yaw=bi(t.yaw,t.yawTo(n.pos),.6);const r=t.gapTo(n),o=Math.max(0,Math.min(e.lunge,r-e.shape.range*.55+.3));t.set("attack",e.startup+e.active+e.recovery,{move:e,hit:new Set,targetId:n.id,lunge:o}),!e.next?.slash&&!e.feint&&(s.token=!1,s.cooldown=Math.round(i.rng.range(a.ai.cooldown[0],a.ai.cooldown[1])*(1.4-a.ai.aggression)))}const Cl=18;class L1{phase="done";leaderId=-1;t=0;strikeAt=0;feints=[];held=!1;everHeld=!1;kills=0;struck=new Set;impact=Cl;get active(){return this.phase!=="done"}begin(t){const e=t.player,n=t.liveEnemies().filter(a=>!a.arch?.ai.ranged);if(n.length===0||!e.free)return!1;n.sort((a,r)=>a.distTo(e)-r.distTo(e));const s=n[0];this.leaderId=s.id,this.phase="approach",this.t=0,this.kills=0,this.struck.clear(),this.held=!1,this.everHeld=!1,t.mode="standoff",t.waves&&(t.waves.standoffAvailable=!1),e.set("standoff",1/0),e.yaw=e.yawTo(s.pos);for(const a of t.liveEnemies())a.set("free",1/0),a.vel={x:0,z:0};return t.emit({type:"standoff",phase:"begin",id:s.id}),t.emit({type:"text",text:"대치",sub:"베기를 누른 채 기다려라 — 달려드는 순간 떼라",style:"info",id:e.id}),!0}update(t,e){const n=t.player,s=t.get(this.leaderId);if(this.t++,n.vel={x:0,z:0},(!s||!s.alive)&&this.phase!=="between")return this.end(t);switch(e.held.slash&&(this.held=!0,this.everHeld=!0),this.phase){case"approach":{const a=s,r=he(n.pos,a.pos),o=Math.hypot(r.x,r.z);if(n.yaw=n.yawTo(a.pos),a.yaw=a.yawTo(n.pos),o>6.5?a.vel=zt(je(r),4.2):a.vel={x:0,z:0},a.act={kind:"free",t:0,dur:1/0},o<=6.6||this.t>90){a.vel={x:0,z:0},this.phase="tension",this.t=0,this.strikeAt=Math.round(t.rng.range(110,260)),this.feints=[];const l=t.rng.chance(.4)?2:t.rng.chance(.7)?1:0;for(let c=0;c<l;c++)this.feints.push(Math.round(t.rng.range(45,this.strikeAt-30)))}return}case"tension":{const a=s;if(a.vel={x:0,z:0},this.feints.includes(this.t)&&(a.set("standoff",22,{value:2}),t.emit({type:"standoff",phase:"feint",id:a.id})),e.released.slash&&this.everHeld)return this.fail(t,a,"성급했다");if(this.t>=this.strikeAt){if(!this.held||!e.held.slash)return this.fail(t,a,"베기를 누르고 있어야 한다");this.charge(t,a)}return}case"strike":{const a=s;return(this.kills===0?e.released.slash:e.pressed.slash)?this.t>=this.impact-t.win(q.standoffStrikeWindow)&&this.t<=this.impact+2?this.win(t,a):this.fail(t,a,"너무 일렀다"):this.t>this.impact+2?this.fail(t,a,"늦었다"):void 0}case"punish":{this.t>=this.impact&&s&&(this.end(t),Rh(t,s,n,q.standoffFailDamage,!0));return}case"between":{if(this.t<46)return;if(this.kills>=q.standoffChainMax)return this.end(t);const a=t.liveEnemies().filter(r=>!r.arch?.ai.ranged&&!r.arch?.isBoss&&!this.struck.has(r.id)&&r.distTo(n)<14).sort((r,o)=>r.distTo(n)-o.distTo(n))[0];if(!a)return this.end(t);this.leaderId=a.id,n.yaw=n.yawTo(a.pos),this.charge(t,a);return}default:return}}charge(t,e,n="strike"){const s=t.player,a=je(he(s.pos,e.pos)),r=he(s.pos,zt(a,1.5));e.yaw=e.yawTo(s.pos),e.set("standoff",Cl+30,{value:1,from:{...e.pos},to:r,travel:Cl}),e.glint={color:"blue",t:0},this.phase=n,this.t=0,n==="strike"&&t.emit({type:"standoff",phase:"strike",id:e.id})}win(t,e){const n=t.player;Vo(t,n,e,!1,!0),this.kills++,this.struck.add(e.id),e.arch?.isBoss&&(this.kills=q.standoffChainMax),this.phase="between",this.t=0,t.emit({type:"standoff",phase:"win",id:e.id})}fail(t,e,n){if(t.emit({type:"standoff",phase:"fail",id:e.id}),t.emit({type:"text",text:"대치 실패",sub:n,style:"bad",id:t.player.id}),this.phase==="strike"){this.phase="punish";return}this.charge(t,e,"punish")}end(t){this.phase="done",t.mode==="standoff"&&(t.mode="combat");const e=t.player;e.is("standoff")&&e.set("free",1/0);for(const n of t.liveEnemies())n.is("standoff")&&n.set("free",1/0),n.brain&&(n.brain.aware=!0,n.brain.cooldown=Math.min(n.brain.cooldown,40));t.waves?.engage(t)}}class Xd{tick=0;fighters=[];projectiles=[];player;ps;buffer=new Vx;rng;settings={windowScale:1,invincible:!1,enemyDamage:1};stats={deflects:0,flows:0,issens:0,maxIssenChain:0,finishers:0,headshots:0,kills:0,perfectDodges:0,effectiveHits:0,badHits:0,standoffKills:0,damageTaken:0,time:0};mode="combat";waves=null;standoff;hitstop=0;alpha=0;timeScale=1;input=Mh();events=[];eventTicks=[];freezeA0=0;freezeT=0;slowmos=[];acc=0;pending={pressed:{},released:{}};nextId=1;nextProjectileId=1;seen=new Set;constructor(t=20260929){this.rng=new Bx(t),this.player=new Wd(this.nextId++,"player",null,{x:0,z:0},0,100,q.playerMaxPosture,.4),this.fighters.push(this.player),this.ps={resolve:1,arrows:{...q.maxArrows},arrowType:"standard",guardStartTick:-9999,prevGuardStartTick:-9999,attackPressTick:-9999,prevAttackPressTick:-9999,dodgePressTick:-9999,lastDodgeEnd:-9999,dodgeCounterUntil:-1,riposteTarget:-1,riposteUntil:-1,hajikiTarget:-1,hajikiUntil:-1,flowTarget:-1,flowUntil:-1,issenChain:0,issenChainUntil:-1,draw:0,focusing:!1,dodgeAimSlowmo:0,lockTarget:null,softTarget:null,finisherTarget:null,finisherKindHint:null,galeTargets:[],combo:0,comboTimer:0,perfectDodgeTick:-1,lastPerfectDodgeTick:-9999,lastDeflectTick:-9999},this.standoff=new L1}spawn(t,e,n){const s=Dc[t],a=new Wd(this.nextId++,"enemy",s,e,n??this.player.yawTo(e)+Math.PI,s.hp,s.posture,s.radius);return a.yaw=n??Math.atan2(this.player.pos.x-e.x,this.player.pos.z-e.z),a.prevYaw=a.yaw,a.size=t==="armored"?1.1:t==="boss"?1.12:t==="duelist"?.96:1,a.brain=E1(this,a),this.fighters.push(a),a}get(t){if(!(t==null||t<0))return this.fighters.find(e=>e.id===t)}enemies(){return this.fighters.filter(t=>t.team==="enemy")}liveEnemies(){return this.fighters.filter(t=>t.team==="enemy"&&t.alive)}removeCorpses(){for(let t=this.fighters.length-1;t>=0;t--){const e=this.fighters[t];e.team==="enemy"&&!e.alive&&this.fighters.splice(t,1)}for(let t=this.projectiles.length-1;t>=0;t--)this.projectiles[t].stuckTo!==void 0&&this.projectiles.splice(t,1)}newProjectileId(){return this.nextProjectileId++}emit(t){this.events.push(t),this.eventTicks.push(this.tick)}drainEvents(){const t=this.events;return this.events=[],this.eventTicks=[],t}drainTimedEvents(){const t=this.events.map((e,n)=>({ev:e,tick:this.eventTicks[n]}));return this.events=[],this.eventTicks=[],t}get displayTick(){return this.tick-1+this.alpha}slowmo(t,e){this.slowmos.push({scale:t,left:e})}freeze(t){this.hitstop=Math.max(this.hitstop,t)}win(t){return Math.round(t*this.settings.windowScale)}update(t,e){t=Math.min(t,.1);for(const a in e.pressed)e.pressed[a]&&(this.pending.pressed[a]=!0);for(const a in e.released)e.released[a]&&(this.pending.released[a]=!0);let n=1;for(const a of this.slowmos)a.left-=t,n=Math.min(n,a.scale);this.slowmos=this.slowmos.filter(a=>a.left>0),this.ps.focusing&&(n=Math.min(n,q.focusScale),this.ps.resolve=Math.max(0,this.ps.resolve-q.focusDrainPerSec*t),this.ps.resolve<=0&&(this.ps.focusing=!1)),this.ps.dodgeAimSlowmo>0&&this.player.act.kind==="aim"&&(n=Math.min(n,.4),this.ps.dodgeAimSlowmo-=t),this.timeScale=n,this.stats.time+=t,this.acc+=t*n,this.hitstop>0&&(this.freezeT+=t*n);let s=0;for(;this.acc>=An&&s<8;){this.acc-=An;const a=this.hitstop>0,r={...e,pressed:s===0?this.pending.pressed:{},released:s===0?this.pending.released:{}};this.step(r),s===0&&(this.pending={pressed:{},released:{}}),s++,!a&&this.hitstop>0?(this.freezeA0=Math.min(1,this.acc/An),this.freezeT=0,this.acc-=An):a&&this.hitstop===0&&(this.acc+=An)}return s===8&&(this.acc=0),this.alpha=this.hitstop>0?Math.min(1,this.freezeA0+this.freezeT/An):Math.min(1,Math.max(0,this.acc/An)),s}get simClock(){return(this.tick+this.alpha)*An}step(t){if(this.input=t,this.buffer.record(t,this.tick),this.hitstop>0){this.hitstop--;return}this.tick++;for(const e of this.fighters)e.prevPos={...e.pos},e.prevYaw=e.yaw;this.mode==="standoff"?this.standoff.update(this,t):M1(this,t),T1(this);for(const e of this.fighters)this.stepFighter(e);for(const e of this.fighters)e.alive&&(e.act.kind==="attack"?o1(this,e):e.act.kind==="gale"&&y1(this,e));jx(this),this.separate(),this.waves?.update(this),this.ps.comboTimer>0&&--this.ps.comboTimer===0&&(this.ps.combo=0)}stepFighter(t){if(t.age++,t.hitFlash>0&&t.hitFlash--,t.glint&&++t.glint.t>36&&(t.glint=null),t.shieldOpen>0&&t.shieldOpen--,!t.alive){t.deadTicks++,t.act.kind==="finished"&&(t.act.t++,t.act.t>=t.act.dur&&t.set("dead",1/0)),t.kb=zt(t.kb,.85),t.pos=Qe(t.pos,zt(t.kb,An));return}if(t.burning>0&&!t.is("finished")&&(t.burning--,t.burning%20===0&&(t.hp-=q.burnDps/3,t.hitFlash=4,t.hp<=0))){t.hp=0,t.set("dead",1/0),t.deathKind="burn",Is(this,t,"burn");return}t.regenPosture();const e=t.act;e.t++;let n={x:0,z:0};switch(e.kind){case"free":case"guard":case"aim":case"heal":n=zt(t.vel,An);break;case"fear":n=zt(t.vel,An);break;default:n=a1(this,t)}const s=zt(t.kb,An);t.kb=zt(t.kb,.84),Un(t.kb)<.05&&(t.kb={x:0,z:0});const a=Qe(n,s);t.pos=Qe(t.pos,a),t.speed=Un(a)/An,e.t>=e.dur&&this.endAction(t)}endAction(t){const e=t.act.kind;if(e==="broken"&&(t.posture=t.maxPosture*.4),e==="dodge"&&(this.ps.lastDodgeEnd=this.tick),e==="finished"){if(t.hp<=0){t.set("dead",1/0);return}t.set("stagger",30);return}if(e==="heal"&&t.isPlayer){const n=t.maxHp*q.healFrac;t.hp=Math.min(t.maxHp,t.hp+n),this.ps.resolve=Math.max(0,this.ps.resolve-q.healCost),this.emit({type:"heal",id:t.id,amount:n})}if(t.set("free",1/0),t.isPlayer){if(this.input.held.aim)t.set("aim",1/0);else if(this.input.held.guard){const n=this.buffer.pressTick.get("guard")??-9999,s=this.buffer.consume("guard",this.tick,q.inputBuffer);t.set("guard",1/0),this.ps.prevGuardStartTick=this.ps.guardStartTick,this.ps.guardStartTick=s?n:-9999}}}separate(){const t=this.fighters.filter(e=>e.alive&&!e.is("finished","finisher","issen","flow","gale"));for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],a=t[n],r=ms(s.pos,a.pos),o=s.radius+a.radius;if(r<o&&r>1e-4){const l=zt(je(he(a.pos,s.pos)),(o-r)*.5),c=s.isPlayer&&s.is("dodge")?.2:1,h=a.isPlayer&&a.is("dodge")?.2:1;s.pos=he(s.pos,zt(l,c)),a.pos=Qe(a.pos,zt(l,h))}}for(const e of this.fighters){const n=Un(e.pos);n>q.arenaRadius&&(e.pos=zt(e.pos,q.arenaRadius/n))}}faceToward(t,e,n){t.yaw=bi(t.yaw,t.yawTo(e),n)}pushBack(t,e,n){const s=je(e);t.kb=Qe(t.kb,zt(s,n*9))}ahead(t,e){return Qe(t.pos,zt(yh(t.yaw),e))}gainResolve(t){const e=this.ps.resolve;this.ps.resolve=xh(this.ps.resolve+t,0,q.resolveMax),this.ps.resolve!==e&&this.emit({type:"resolve",amount:t,total:this.ps.resolve})}}const D1=[{title:"一 · 첫 대면",subtitle:"낭인 검사 — 베기와 찌르기, 튕기기를 익혀라",spawns:[["ronin",2]],standoff:!0},{title:"二 · 방패의 벽",subtitle:"방패 무사 — 베기는 튕겨난다. 찔러라",spawns:[["shield",2],["ronin",1]],standoff:!0},{title:"三 · 창과 그림자",subtitle:"창병은 베고, 시노비는 넓게 베어라",spawns:[["spear",2],["duelist",1]],standoff:!0},{title:"四 · 철갑과 활",subtitle:"갑주는 찌르고, 궁수는 활로",spawns:[["armored",1],["archer",2],["ronin",1]],standoff:!0},{title:"五 · 결투",subtitle:"철갑 대장 카게토라",spawns:[["boss",1]],standoff:!0}];class I1{constructor(t=D1){this.waves=t}waves;index=-1;state="intro";timer=0;standoffAvailable=!1;get current(){return this.waves[this.index]??null}start(t){this.next(t)}update(t){if(!(t.mode==="standoff"||t.mode==="defeat"||t.mode==="victory"))switch(this.timer++,this.state){case"intro":this.timer>=100&&this.spawnWave(t);break;case"approach":{const e=t.liveEnemies(),n=e.some(a=>a.distTo(t.player)<5.5),s=e.some(a=>a.hp<a.maxHp||!a.is("free"));(this.timer>=330||n||s||t.player.is("aim","attack","quickshot"))&&this.engage(t);break}case"fight":if(t.liveEnemies().length===0){this.state="clear",this.timer=0;const e=t.ps.arrows;e.standard=Math.min(q.maxArrows.standard,e.standard+8),e.heavy=Math.min(q.maxArrows.heavy,e.heavy+2),e.fire=Math.min(q.maxArrows.fire,e.fire+1),t.player.hp=Math.min(t.player.maxHp,t.player.hp+t.player.maxHp*.25),t.emit({type:"waveClear",index:this.index})}break;case"clear":this.timer>=210&&this.next(t);break}}engage(t){this.standoffAvailable=!1,this.state="fight",this.timer=0;for(const e of t.liveEnemies())e.brain&&(e.brain.aware=!0)}next(t){if(this.index++,t.removeCorpses(),this.index>=this.waves.length){this.state="done",t.mode="victory",t.emit({type:"victory"});return}this.state="intro",this.timer=0;const e=this.waves[this.index];t.emit({type:"wave",index:this.index,title:e.title,subtitle:e.subtitle})}spawnWave(t){const e=this.waves[this.index],n=t.player,s=Un(n.pos)>3?Math.atan2(-n.pos.x,-n.pos.z):n.yaw,a=[];for(const[r,o]of e.spawns)for(let l=0;l<o;l++)a.push(r);a.forEach((r,o)=>{const l=(o-(a.length-1)/2)*.42,c=r==="archer"?17:12.5;let h=Qe(n.pos,zt(yh(s+l),c));const d=Un(h);d>q.arenaRadius-2&&(h=zt(h,(q.arenaRadius-2)/d));const u=t.spawn(r,h);u.brain&&(u.brain.aware=!1,u.brain.cooldown=Math.round(xh(u.brain.cooldown,20,90))),t.seen.has(r)||(t.seen.add(r),t.emit({type:"text",text:Dc[r].name,sub:Dc[r].tip,style:"info",id:u.id}))}),this.state=e.standoff?"approach":"fight",this.standoffAvailable=e.standoff,this.timer=0,e.standoff||this.engage(t)}}const Wt={zenith:2038600,skyUpper:6178181,horizon:15639164,sunGlow:16760426,sunDisk:16774098,cloudDark:7228536,cloudLit:16757374,sunLight:16757356,hemiSky:14858670,hemiGround:3815964,ambient:7301296,groundA:8027188,groundB:11048774,groundDark:5660970,dirt:11047014,field:12098642,litter:9053206,grassRoot:3424794,grassMid:7502383,grassTip:13807966,pampasRoot:5000220,pampasMid:10521150,pampasTip:14202476,plume:13940872,trunk:3877668,stone:9275260,toriiRed:11875358,toriiBlack:1840660,lanternGlow:16757854,mote:16754768,maple:[10886683,12726815,14242858,9050144,14711342,12068892]},Pl=ah.degToRad(15),Ll=ah.degToRad(-38),qd=3.1,Ii=-.42,Dl=Math.PI+.33,Ha=18,qe=Math.PI*2;function Kd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Kn=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Ja(i,t){let e=Math.imul(i|0,374761393)^Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function $d(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,a=t-n,r=s*s*(3-2*s),o=a*a*(3-2*a),l=Ja(e,n),c=Ja(e+1,n),h=Ja(e,n+1),d=Ja(e+1,n+1);return l+(c-l)*r+(h-l)*o+(l-c-h+d)*r*o}const Bc=`
float wog_hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float wog_noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wog_hash(i), wog_hash(i + vec2(1.0, 0.0)), u.x), mix(wog_hash(i + vec2(0.0, 1.0)), wog_hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float wog_fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * wog_noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; } return s; }
`;class Qr{constructor(t){this.rng=t}rng;pos=[];nrm=[];col=[];p=new R;c=new Bt;add(t,e,n,s=.1,a){const r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(e);const o=r.getAttribute("position"),l=r.getAttribute("normal"),c=new Bt(n);for(let h=0;h<o.count;h++){h%3===0&&this.c.copy(c).multiplyScalar(1+(this.rng()-.5)*s),this.p.fromBufferAttribute(o,h);const d=a?a(this.p):1;this.pos.push(this.p.x,this.p.y,this.p.z),this.nrm.push(l.getX(h),l.getY(h),l.getZ(h)),this.col.push(this.c.r*d,this.c.g*d,this.c.b*d)}r.dispose(),t.dispose()}build(){const t=new Ue;return t.setAttribute("position",new jt(this.pos,3)),t.setAttribute("normal",new jt(this.nrm,3)),t.setAttribute("color",new jt(this.col,3)),t.computeBoundingSphere(),t}}const xr=new cn,or=new R,Hc=new R,lr=new R(0,1,0);function Ms(i,t,e,n=0,s=1,a=1,r=1){return xr.setFromAxisAngle(lr,n),new re().compose(new R(i,t,e),xr,or.set(s,a,r))}function Il(i,t,e,n,s,a,r=7){const o=Hc.subVectors(e,t),l=o.length(),c=new Ce(s,n,l,r,1,!0);xr.setFromUnitVectors(lr,o.normalize()),i.add(c,new re().compose(t.clone().lerp(e,.5),xr,or.set(1,1,1)),a,.12)}function Zd(i,t,e){const n=i.getAttribute("position");for(let s=0;s<n.count;s++){const a=n.getX(s),r=n.getY(s),o=n.getZ(s),c=1+(Ja(Math.round(a*97+r*13)+e,Math.round(o*97-r*31))-.5)*t;n.setXYZ(s,a*c,r*c,o*c)}return i.computeVertexNormals(),i}function Qa(i,t,e,n,s,a){const r=i.pos.length/3;for(let o=0;o<=t;o++){const l=o/t,c=e(l),h=e(Math.min(1,l+.01)).sub(e(Math.max(0,l-.01))).normalize(),d=s(h).normalize(),u=new R().crossVectors(d,h).normalize(),f=n(l)*.5;if(i.pos.push(c.x-d.x*f,c.y-d.y*f,c.z-d.z*f,c.x+d.x*f,c.y+d.y*f,c.z+d.z*f),i.nrm.push(u.x,u.y,u.z,u.x,u.y,u.z),i.uv.push(0,l,1,l),i.part.push(a(l),a(l)),o<t){const g=r+o*2;i.idx.push(g,g+1,g+3,g,g+3,g+2)}}}function Df(i){const t=new Ue;return t.setAttribute("position",new jt(i.pos,3)),t.setAttribute("normal",new jt(i.nrm,3)),t.setAttribute("uv",new jt(i.uv,2)),t.setAttribute("aPart",new jt(i.part,1)),t.setIndex(i.idx),t}const If=()=>({pos:[],nrm:[],uv:[],part:[],idx:[]}),gn=(i,t,e)=>new R(i,t,e);function k1(i){const t=If();return[1,.78,.62].forEach((n,s)=>{const a=s*(qe/3)+.4*s,r=Math.cos(a),o=Math.sin(a),l=(c,h,d)=>gn(c*r+(d+.05)*o,h,-c*o+(d+.05)*r);Qa(t,i,c=>l(0,c*n,(.12+.1*s)*c*c*n),c=>.13*(.8+.2*n)*Math.pow(1-c,.75),()=>gn(r,0,-o),()=>0)}),Df(t)}function U1(i){const t=If(),e=3;Qa(t,e,o=>gn(.015*o*o,.8*o,0),o=>.02*(1-.4*o),()=>gn(1,0,0),()=>0);const n=o=>gn(.015+.14*o*o,.73+.27*o-.06*o*o*o,0),s=o=>.085*Math.pow(Math.sin(Math.PI*Math.min(1,.1+o*.9)),.7)+.004,a=o=>.7+.3*Math.min(1,o*3);Qa(t,e+1,n,s,()=>gn(0,0,1),a),i&&Qa(t,e+1,n,o=>s(o)*.8,o=>new R().crossVectors(o,gn(0,0,1)),a);const r=i?3:1;for(let o=0;o<r;o++){const l=.9+o*2.1,c=gn(Math.cos(l),0,Math.sin(l));Qa(t,e,h=>c.clone().multiplyScalar(.34*Math.pow(h,1.5)).add(gn(0,.6*h-.2*h*h*h,0)),h=>.045*Math.pow(1-h,.7),()=>gn(c.z,0,-c.x),()=>0)}return Df(t)}const N1=`
uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;
uniform vec3 uBenders[8]; uniform int uBenderCount;
uniform vec4 uWave; uniform float uWaveAmp;
uniform vec3 uSunDir; uniform vec3 uFocus; uniform float uStiff;
attribute float aPart;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
${Bc}
`,F1=`
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
`,O1=`
uniform vec3 uRoot; uniform vec3 uMid; uniform vec3 uTip; uniform vec3 uPlume;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uSss;
varying float vH; varying float vPart; varying vec3 vGWorld; varying vec2 vGUv;
`;function Jd(i,t,e){const n=new da({side:on});return i==="tall"&&(n.defines={TALL:""}),n.onBeforeCompile=s=>{Object.assign(s.uniforms,t,e),s.vertexShader=N1+s.vertexShader.replace("#include <beginnormal_vertex>",F1).replace("#include <defaultnormal_vertex>","vec3 transformedNormal = normalMatrix * objectNormal;").replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
gl_Position = projectionMatrix * mvPosition;`).replace("#include <worldpos_vertex>","vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);"),s.fragmentShader=O1+s.fragmentShader.replace("#include <color_fragment>",`
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
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * back * (0.55 * vH + 1.1 * vPart) * uSss;`)},n.customProgramCacheKey=()=>"wog-grass-"+i,n}function Qd(i,t,e){const n=e.arenaRadius,s=e.quality==="high",a=Kd(8016323),r=new jn;r.name="Environment",i.add(r);const o=[],l=J=>(o.push(J),J),c=J=>new Bt(J);t.shadowMap.enabled=!0,t.shadowMap.type=er,t.toneMapping=Kc,t.toneMappingExposure=.95,t.outputColorSpace=vn;const h=new oh(Wt.horizon,45,340);i.fog=h;const d=c(Wt.horizon);i.background=d;const u=new R(Math.sin(Ll)*Math.cos(Pl),Math.sin(Pl),Math.cos(Ll)*Math.cos(Pl)),f=new yt(Math.cos(Dl),Math.sin(Dl)),g={uTime:{value:0},uWind:{value:f.clone()},uWindAmp:{value:.6},uGust:{value:0},uBenders:{value:Array.from({length:8},()=>new R(1e4,0,1e4))},uBenderCount:{value:0},uWave:{value:new ke(0,0,0,100)},uWaveAmp:{value:0},uSunDir:{value:u.clone()},uSunCol:{value:c(Wt.sunLight).multiplyScalar(qd)},uFocus:{value:new R}},x=new yt(Math.sin(Ii),Math.cos(Ii)),m=n+.8,p=J=>Math.sin(J*Math.PI/m)*1.2,y=(J,dt)=>({u:J*x.x+dt*x.y,v:-J*x.y+dt*x.x}),A=(J,dt)=>new R(J*x.x-dt*x.y,0,J*x.y+dt*x.x);function b(J,dt){const{u:Rt,v:Vt}=y(J,dt),Ot=Rt>m,Ht=Ot?1.05:.75,Ut=Kn(-2,2,Rt)*(1-Kn(m+40,m+60,Rt)),ye=(1-Kn(Ht*.6,Ht*1.4,Math.abs(Vt-p(Rt))))*Ut;return Math.max(ye*(Ot?1:.45),(1-Kn(2,3.6,Math.hypot(J,dt)))*.4)}const T=[],M=(J,dt,Rt=0)=>T.some(Vt=>(J-Vt.x)**2+(dt-Vt.z)**2<(Vt.r+Rt)**2),w=(J,dt)=>{const Rt=Kn(n+12,n+60,Math.hypot(J,dt));return Rt<=0?0:Rt*(1.4+Math.sin(J*.045+1.3)*Math.cos(dt*.038-.7)*1.6+Math.sin(J*.021-dt*.027+2.1)*2)},v=l(new Pn({side:xn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:c(Wt.zenith)},uUpper:{value:c(Wt.skyUpper)},uHorizon:{value:c(Wt.horizon)},uGlow:{value:c(Wt.sunGlow)},uSunCol:{value:c(Wt.sunDisk)},uSunDir:{value:u},uCloudDark:{value:c(Wt.cloudDark)},uCloudLit:{value:c(Wt.cloudLit)},uTime:g.uTime},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;                      // pinned to the far plane, follows camera rotation only
      }`,fragmentShader:`
      uniform vec3 uZenith, uUpper, uHorizon, uGlow, uSunCol, uSunDir, uCloudDark, uCloudLit;
      uniform float uTime;
      varying vec3 vDir;
      ${Bc}
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
      }`})),E=new $t(l(new Vn(100,48,24)),v);E.frustumCulled=!1,E.renderOrder=1e6,r.add(E);const C=new k0(Wt.sunLight,qd);C.castShadow=!0;const I=s?2048:1024;C.shadow.mapSize.set(I,I);const L=C.shadow.camera;L.left=-Ha,L.right=Ha,L.top=Ha,L.bottom=-Ha,L.near=1,L.far=160,L.updateProjectionMatrix(),C.shadow.bias=-4e-4,C.shadow.normalBias=.035,C.shadow.radius=s?3:2,r.add(C,C.target);const F=new L0(Wt.hemiSky,Wt.hemiGround,1.05),D=new U0(Wt.ambient,.35);r.add(F,D);const z=new Qr(a),X=new Qr(a),W=new Qr(a),it=new Qr(a);{const J=A(m,0),dt=Ms(J.x,0,J.z,Ii),Rt=Ut=>.75+.25*Kn(0,1.6,Ut.y)-.1*$d(Ut.x*3+Ut.y*4,Ut.z*3),Vt=(Ut,ye,ln,Ye,Le,an=Rt)=>z.add(Ut,dt.clone().multiply(Ms(ye,ln,Ye)),Le,.05,an);for(const Ut of[-1.9,1.9])Vt(new Ce(.21,.25,4.7,14),Ut,2.35,0,Wt.toriiRed),Vt(new Ce(.29,.29,.42,14),Ut,.21,0,Wt.toriiBlack,()=>1),T.push({x:J.x+Math.cos(Ii)*Ut,z:J.z-Math.sin(Ii)*Ut,r:.55});Vt(new Fe(5,.26,.2),0,3.65,0,Wt.toriiRed),Vt(new Fe(.24,.62,.18),0,4.08,0,Wt.toriiRed),Vt(new Fe(5.5,.3,.36),0,4.52,0,Wt.toriiRed);const Ot=new Fe(6.6,.3,.5,24,1,1),Ht=Ot.getAttribute("position");for(let Ut=0;Ut<Ht.count;Ut++){const ye=Ht.getX(Ut)/3.3;Ht.setY(Ut,Ht.getY(Ut)+.32*ye*ye*ye*ye+(Ht.getY(Ut)>0?.04*ye*ye:0))}Ot.computeVertexNormals(),Vt(Ot,0,4.82,0,Wt.toriiBlack,()=>1)}const G=(J,dt,Rt)=>{const Vt=Ms(J,0,dt,Rt),Ot=(Ht,Ut,ye=Wt.stone)=>z.add(Ht,Vt.clone().multiply(Ms(0,Ut,0)),ye,.12,ln=>.8+.2*Kn(0,1.8,ln.y));Ot(new Ce(.42,.5,.2,6),.1),Ot(new Ce(.13,.16,.8,8),.6),Ot(new Ce(.36,.26,.16,6),1.08);for(let Ht=0;Ht<6;Ht++){const Ut=Ht/6*qe;z.add(new Fe(.06,.34,.06),Vt.clone().multiply(Ms(Math.cos(Ut)*.22,1.33,Math.sin(Ut)*.22)),Wt.stone,.1)}Ot(new Ce(.05,.52,.28,6),1.64),Ot(new Vn(.1,8,6),1.84),it.add(new Ce(.19,.19,.3,6),Vt.clone().multiply(Ms(0,1.33,0)),Wt.lanternGlow,0),T.push({x:J,z:dt,r:.9})};for(const J of[-2.5,2.5]){const dt=A(m+1.8,J);G(dt.x,dt.z,Ii)}for(const J of[Ii+2.1,Ii-2.3])G(Math.sin(J)*(n+1.8),Math.cos(J)*(n+1.8),J);const j=[],nt=[[-.5,6,1.25],[.95,7,1.15],[2,5.5,1.3],[3.1,7.5,1.2],[-2.1,6.5,1.1]];for(const[J,dt,Rt]of nt){const Vt=Ii+J,Ot=n+dt,Ht=Math.sin(Vt)*Ot,Ut=Math.cos(Vt)*Ot,ye=new R(a()-.5,0,a()-.5).multiplyScalar(.9*Rt),ln=gn(Ht,-.2,Ut),Ye=ln.clone().add(gn(ye.x*.4,1.6*Rt,ye.z*.4)),Le=Ye.clone().add(gn(ye.x*.7+(a()-.5)*.4,1.4*Rt,ye.z*.7+(a()-.5)*.4));Il(z,ln,Ye,.36*Rt,.26*Rt,Wt.trunk),Il(z,Ye,Le,.26*Rt,.17*Rt,Wt.trunk);const an=Le.clone().add(gn(0,.9*Rt,0)),Fn=s?22:14;for(let ve=0;ve<Fn;ve++){const ae=a()*qe,Ge=Math.sqrt(a())*3.1*Rt,Mn=an.clone().add(gn(Math.cos(ae)*Ge,(a()-.3)*1.3*Rt-Ge*Ge*.09,Math.sin(ae)*Ge));ve<5&&Il(z,Le,Mn.clone().lerp(Le,.25),.11*Rt,.05*Rt,Wt.trunk,5);const Yn=(.75+a()*.6)*Rt,qi=Zd(new mh(1,1),.28,ve*7+Math.round(Ht));X.add(qi,new re().compose(Mn,xr.setFromAxisAngle(lr,a()*qe),or.set(Yn,Yn*.72,Yn)),Wt.maple[Math.floor(a()*Wt.maple.length)],.18)}j.push(new ke(Ht,Ut,4.2*Rt,0)),T.push({x:Ht,z:Ut,r:1.1})}for(let J=0;J<9;J++){const dt=a()*qe,Rt=n+2+a()*10,Vt=.35+a()*.9,Ot=Math.sin(dt)*Rt,Ht=Math.cos(dt)*Rt;if(M(Ot,Ht,Vt+1)||b(Ot,Ht)>.1)continue;const Ut=Zd(new uh(1,1),.35,J*13);W.add(Ut,Ms(Ot,w(Ot,Ht)+Vt*.15,Ht,a()*qe,Vt*(1+a()*.6),Vt*.65,Vt),8222830,.15),T.push({x:Ot,z:Ht,r:Vt*1.2})}const Dt=l(new da({vertexColors:!0})),Pt=l(new da({vertexColors:!0,flatShading:!0})),ge=l(new da({vertexColors:!0,flatShading:!0,emissive:1704962}));ge.onBeforeCompile=J=>{Object.assign(J.uniforms,g),J.vertexShader=`uniform float uTime; uniform vec2 uWind; uniform float uWindAmp; uniform float uGust;
varying vec3 vFW;
`+J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float fk = clamp((transformed.y - 2.5) / 4.0, 0.0, 1.0);
        float fs = sin(uTime * 1.3 + transformed.x * 0.35 + transformed.z * 0.27) + 0.5 * sin(uTime * 2.7 + transformed.y * 1.3);
        transformed.xz += uWind * (fs * 0.07 + 0.06) * fk * (uWindAmp + uGust * 2.0);
        vFW = transformed;`),J.fragmentShader=`uniform vec3 uSunDir; uniform vec3 uSunCol;
varying vec3 vFW;
`+J.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        reflectedLight.directDiffuse += uSunCol * diffuseColor.rgb * pow(clamp(dot(normalize(vFW - cameraPosition), uSunDir), 0.0, 1.0), 4.0) * 0.45;`)},ge.customProgramCacheKey=()=>"wog-foliage";const qt=(J,dt,Rt,Vt=!0)=>{const Ot=new $t(l(J),dt);return Ot.castShadow=Rt,Ot.receiveShadow=Vt,r.add(Ot),Ot};qt(z.build(),Dt,!0),qt(W.build(),Pt,!0),qt(X.build(),ge,!0),qt(it.build(),l(new ba({vertexColors:!0})),!1,!1);const ie=new ps(640,640,160,160);ie.rotateX(-Math.PI/2);{const J=ie.getAttribute("position");for(let dt=0;dt<J.count;dt++)J.setY(dt,w(J.getX(dt),J.getZ(dt)));ie.computeVertexNormals()}for(;j.length<5;)j.push(new ke(1e4,1e4,0,0));const $=l(new da);$.onBeforeCompile=J=>{Object.assign(J.uniforms,{uGA:{value:c(Wt.groundA)},uGB:{value:c(Wt.groundB)},uGDark:{value:c(Wt.groundDark)},uDirt:{value:c(Wt.dirt)},uField:{value:c(Wt.field)},uLitter:{value:c(Wt.litter)},uPathAxis:{value:x},uPathLen:{value:m},uArenaR:{value:n},uTrees:{value:j}}),J.vertexShader=`varying vec3 vGWorld;
`+J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vGWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),J.fragmentShader=`
      uniform vec3 uGA, uGB, uGDark, uDirt, uField, uLitter;
      uniform vec2 uPathAxis; uniform float uPathLen; uniform float uArenaR; uniform vec4 uTrees[5];
      varying vec3 vGWorld;
      ${Bc}
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
        diffuseColor.rgb = gc;`)},$.customProgramCacheKey=()=>"wog-ground";const et=qt(ie,$,!1);et.name="Ground";const vt=new re,kt=new cn,_t=new ei,Kt=new Bt,We=[[1,1,1],[.92,1.06,.84],[1.1,.96,.8],[1.05,1.02,.95],[.85,.95,.8]],Zt=J=>{const dt=We[Math.floor(a()*We.length)],Rt=1+(a()-.5)*.18;return Kt.setRGB(1+(dt[0]-1)*J,1+(dt[1]-1)*J,1+(dt[2]-1)*J).multiplyScalar(Rt)},se=s?14e3:3e3,pe=new xo(l(k1(3)),l(Jd("short",g,{uRoot:{value:c(Wt.grassRoot)},uMid:{value:c(Wt.grassMid)},uTip:{value:c(Wt.grassTip)},uPlume:{value:c(Wt.plume)},uStiff:{value:.5},uSss:{value:.55}})),se);let Ft=0;for(let J=0;Ft<se&&J<se*6;J++){const dt=Math.sqrt(a())*(n+4),Rt=a()*qe,Vt=Math.sin(Rt)*dt,Ot=Math.cos(Rt)*dt;if(a()<Kn(n+.5,n+4,dt)*.85)continue;const Ht=b(Vt,Ot);if(a()<Ht*.6||M(Vt,Ot))continue;let Ut=.25+.3*(.35*a()+.65*$d(Vt*.18,Ot*.18));Ut=Math.max(.2,Ut*(1-Ht*.35))*(1+Kn(n,n+4,dt)*.6),_t.set((a()-.5)*.45,a()*qe,(a()-.5)*.45,"YXZ"),vt.compose(Hc.set(Vt,0,Ot),kt.setFromEuler(_t),or.set(Ut*(.8+a()*.5),Ut,Ut)),pe.setMatrixAt(Ft,vt),pe.setColorAt(Ft,Zt(1)),Ft++}pe.count=Ft;const xe=s?12e3:3e3,Oe=new xo(l(U1(s)),l(Jd("tall",g,{uRoot:{value:c(Wt.pampasRoot)},uMid:{value:c(Wt.pampasMid)},uTip:{value:c(Wt.pampasTip)},uPlume:{value:c(Wt.plume)},uStiff:{value:.38},uSss:{value:.45}})),xe);Ft=0;const sn=new R,Pe=new R,Ve=new cn;for(let J=0;Ft<xe&&J<xe*4;J++){const dt=a()<.22,Rt=dt?n+12+a()*38:n+2.2+-Math.log(1-a()*.96)*7,Vt=a()*qe;if(Rt>n+50)continue;const Ot=Math.sin(Vt)*Rt,Ht=Math.cos(Vt)*Rt,{u:Ut,v:ye}=y(Ot,Ht);if(Ut>m-1&&Math.abs(ye-p(Ut))<2||M(Ot,Ht,.4))continue;const ln=dt?3+Math.floor(a()*5):6+Math.floor(a()*9),Ye=1.15+a()*.5+Kn(n+3,n+14,Rt)*.2;for(let Le=0;Le<ln&&Ft<xe;Le++){const an=a()*qe,Fn=Math.sqrt(a())*.75,ve=Ot+Math.cos(an)*Fn,ae=Ht+Math.sin(an)*Fn,Ge=Math.min(1.9,Ye*(.85+a()*.22))*(.72+.28*Kn(n+2,n+5,Rt));sn.set(Math.cos(an),0,Math.sin(an)),Pe.set(sn.z,0,-sn.x),Ve.setFromAxisAngle(lr,a()*qe),kt.setFromAxisAngle(Pe,.05+Fn*.3+a()*.08).multiply(Ve),vt.compose(Hc.set(ve,w(ve,ae)-.12,ae),kt,or.set(Ge,Ge,Ge)),Oe.setMatrixAt(Ft,vt),Oe.setColorAt(Ft,Zt(.8)),Ft++}}Oe.count=Ft;for(const J of[pe,Oe])J.frustumCulled=!1,J.receiveShadow=!0,r.add(J);{const J=[],dt=[],Rt=c(Wt.horizon),Vt=c(14256762),Ot=new Bt,Ht=new Bt,Ut=Kd(3805657),ye=[{r:128,depth:16,base:4,amp:15,color:4866674},{r:166,depth:22,base:9,amp:26,color:6643090},{r:212,depth:28,base:14,amp:38,color:8748203}],ln=200;for(const Le of ye){const an=[Ut()*qe,Ut()*qe,Ut()*qe,Ut()*qe],Fn=ve=>{const ae=(Ge,Mn)=>Math.pow(1-Math.abs(Math.sin(ve*Ge+Mn)),2.2);return Le.base+Le.amp*(.5*ae(3,an[0])+.3*ae(7,an[1])+.14*ae(17,an[2])+.06*ae(41,an[3]))};for(let ve=0;ve<ln;ve++){const ae=ve/ln*qe,Ge=(ve+1)/ln*qe,Mn=(Ai,S,k)=>[Math.sin(Ai)*S,k,Math.cos(Ai)*S],Yn=Mn(ae,Le.r,-14),qi=Mn(Ge,Le.r,-14),Fs=Mn(ae,Le.r+Le.depth,Fn(ae)),Ki=Mn(Ge,Le.r+Le.depth,Fn(Ge));J.push(...Yn,...qi,...Ki,...Yn,...Ki,...Fs);const $i=.5-.5*Math.cos(ae-Ll);Ot.set(Le.color).lerp(Rt,.55),Ht.set(Le.color).lerp(Vt,$i*.3);for(const Ai of[Ot,Ot,Ht,Ot,Ht,Ht])dt.push(Ai.r,Ai.g,Ai.b)}}const Ye=new Ue;Ye.setAttribute("position",new jt(J,3)),Ye.setAttribute("color",new jt(dt,3)),qt(Ye,l(new ba({vertexColors:!0,side:on})),!1,!1)}const N=l(z1()),ze=s?400:120,de=l(new da({map:N,alphaTest:.5,side:on}));de.onBeforeCompile=J=>{Object.assign(J.uniforms,g),J.vertexShader=`varying vec3 vLW;
`+J.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),J.fragmentShader=`uniform vec3 uSunDir; uniform vec3 uSunCol;
varying vec3 vLW;
`+J.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      float lb = pow(clamp(dot(normalize(vLW - cameraPosition), uSunDir), 0.0, 1.0), 3.0);
      totalEmissiveRadiance += diffuseColor.rgb * (0.3 + uSunCol * lb * 0.35);`)},de.customProgramCacheKey=()=>"wog-leaves";const P=new xo(l(new ps(1,1)),de,ze);P.frustumCulled=!1;const _=22,O=new Float32Array(ze*3),V=new Float32Array(ze*3),K=new Float32Array(ze*3),at=new Float32Array(ze*3),lt=[12593180,14172959,15234090,15770929,10361627,13851170],Z=(J,dt,Rt)=>{const Vt=a()*qe,Ot=Math.sqrt(a())*_;O[J*3]=dt.x+Math.cos(Vt)*Ot-f.x*8,O[J*3+1]=Rt?a()*11:5+a()*7,O[J*3+2]=dt.z+Math.sin(Vt)*Ot-f.y*8;for(let Ht=0;Ht<3;Ht++)V[J*3+Ht]=a()*qe,K[J*3+Ht]=(a()-.5)*6;at[J*3]=.14+a()*.08,at[J*3+1]=.45+a()*.45,at[J*3+2]=a()*qe};for(let J=0;J<ze;J++)Z(J,gn(0,0,0),!0),P.setColorAt(J,Kt.set(lt[J%lt.length]));r.add(P);const tt=s?240:70,ct=l(new Ue);{const J=new Float32Array(tt*4);for(let dt=0;dt<J.length;dt++)J[dt]=a();ct.setAttribute("position",new jt(new Float32Array(tt*3),3)),ct.setAttribute("aSeed",new jt(J,4))}const At=l(new Pn({transparent:!0,depthWrite:!1,blending:fs,fog:!1,uniforms:{uTime:g.uTime,uWind:g.uWind,uGust:g.uGust,uFocus:g.uFocus,uPx:{value:800},uColor:{value:c(Wt.mote)}},vertexShader:`
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
      }`})),ut=new af(ct,At);ut.frustumCulled=!1,ut.renderOrder=10,r.add(ut);let rt=0,St=0,It=100,Gt=0;const U=new R,ot=new R,Q=new R,ht=new R;ot.crossVectors(lr,u).normalize(),Q.crossVectors(u,ot).normalize();const pt=new yt,st=new R,Lt=new R;function wt(J,dt,Rt,Vt){dt=Math.min(Math.max(dt,0),.1),U.copy(Rt);const Ot=Dl+Math.sin(J*.05)*.22+Math.sin(J*.17+1.3)*.07;f.set(Math.cos(Ot),Math.sin(Ot)),rt*=Math.exp(-dt/.5),St+=(rt-St)*Math.min(1,dt*12),It+=dt,g.uTime.value=J,g.uWind.value.copy(f),g.uWindAmp.value=.62+.18*Math.sin(J*.23),g.uGust.value=St,g.uWave.value.w=It,g.uWaveAmp.value=Gt*Math.exp(-It*1.4)*Kn(0,.06,It),g.uFocus.value.copy(Rt);const Ht=g.uBenders.value,Ut=Math.min(8,Vt.length);for(let ve=0;ve<Ut;ve++)Ht[ve].copy(Vt[ve]);g.uBenderCount.value=Ut;const ye=2*Ha/C.shadow.mapSize.x,ln=Math.round(Rt.dot(ot)/ye)*ye,Ye=Math.round(Rt.dot(Q)/ye)*ye;ht.copy(ot).multiplyScalar(ln).addScaledVector(Q,Ye).addScaledVector(u,Rt.dot(u)),C.target.position.copy(ht),C.position.copy(ht).addScaledVector(u,80),C.target.updateMatrixWorld();const Le=1+St*3.5,an=-f.y,Fn=f.x;for(let ve=0;ve<ze;ve++){const ae=ve*3,Ge=at[ae+2],Mn=Math.sin(J*1.7+Ge)*.6,Yn=(1+Ge%1*.8)*Le;O[ae]+=(f.x*Yn+an*Mn)*dt,O[ae+2]+=(f.y*Yn+Fn*Mn)*dt,O[ae+1]-=at[ae+1]*(1+.6*Math.sin(J*2.3+Ge*3))*dt;for(let $i=0;$i<3;$i++)V[ae+$i]+=K[ae+$i]*dt*(1+St*1.5);const qi=O[ae]-Rt.x,Fs=O[ae+2]-Rt.z;(O[ae+1]<.02||qi*qi+Fs*Fs>(_+10)**2)&&Z(ve,Rt,!1),kt.setFromEuler(_t.set(V[ae],V[ae+1],V[ae+2]));const Ki=at[ae];vt.compose(st.set(O[ae],O[ae+1],O[ae+2]),kt,Lt.set(Ki,Ki,Ki)),P.setMatrixAt(ve,vt)}P.instanceMatrix.needsUpdate=!0,t.getDrawingBufferSize(pt),At.uniforms.uPx.value=pt.y}function Se(J){const dt=ah.clamp(J,0,1);rt=Math.max(rt,dt),Gt=dt,It=0,g.uWave.value.set(U.x,U.y,U.z,0)}function me(){i.remove(r),i.fog===h&&(i.fog=null),i.background===d&&(i.background=null),C.shadow.dispose();for(const J of o)J.dispose();pe.dispose(),Oe.dispose(),P.dispose(),o.length=0}return wt(0,0,new R,[]),{update:wt,sun:C,wind:f,gust:Se,dispose:me}}function z1(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");if(e){e.translate(64/2,64*.54);const s=[[0,1],[1.05,.9],[-1.05,.9],[2.1,.55],[-2.1,.55]];e.beginPath();for(let a=0;a<=160;a++){const r=a/160*qe-Math.PI;let o=.22;for(const[h,d]of s)o+=d*Math.exp(-(((r-h)/.3)**2));o*=(1+.08*Math.sin(r*26))*64*.36;const l=Math.sin(r)*o,c=-Math.cos(r)*o;a===0?e.moveTo(l,c):e.lineTo(l,c)}e.closePath(),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="rgba(120,60,40,0.55)",e.lineWidth=1.2;for(const[a]of s)e.beginPath(),e.moveTo(0,0),e.lineTo(Math.sin(a)*64*.3,-Math.cos(a)*64*.3),e.stroke();e.beginPath(),e.moveTo(0,0),e.lineTo(0,64*.4),e.lineWidth=2,e.stroke()}const n=new dh(t);return n.colorSpace=vn,n}const B1={player:{skin:13212276,cloth:3033659,cloth2:4863270,trim:9187107,metal:14015458,hat:"hood",skirt:"tunic",cape:2768947,armor:!1,weapon:"shortsword",offhand:"buckler",bulk:1},ronin:{skin:12882032,cloth:3820134,cloth2:6052440,trim:14208952,metal:13620958,hat:"jingasa",skirt:"hakama",cape:null,armor:!1,weapon:"katana",offhand:"none",bulk:1},shield:{skin:12882032,cloth:6965810,cloth2:4012598,trim:8006178,metal:12568012,hat:"jingasaDark",skirt:"armor",cape:null,armor:!0,weapon:"shortyari",offhand:"tate",bulk:1.08},spear:{skin:12882032,cloth:3428458,cloth2:4012598,trim:13220239,metal:13620958,hat:"jingasaDark",skirt:"hakama",cape:null,armor:!1,weapon:"yari",offhand:"none",bulk:1},armored:{skin:11961702,cloth:2500142,cloth2:1776416,trim:12095802,metal:14278373,hat:"kabuto",skirt:"armor",cape:null,armor:!0,weapon:"nodachi",offhand:"none",bulk:1.18},duelist:{skin:12882032,cloth:1842210,cloth2:2762032,trim:9051946,metal:13620958,hat:"mask",skirt:"none",cape:null,armor:!1,weapon:"wakizashi",offhand:"wakizashi",bulk:.92},archer:{skin:12882032,cloth:5988416,cloth2:4867126,trim:14735039,metal:13620958,hat:"band",skirt:"hakama",cape:null,armor:!1,weapon:"knife",offhand:"yumi",bulk:.98},boss:{skin:11961702,cloth:8133917,cloth2:2233366,trim:13936711,metal:14870252,hat:"kabutoBoss",skirt:"armor",cape:3804432,armor:!0,weapon:"katana",offhand:"none",bulk:1.15},dummy:{skin:13150314,cloth:11899738,cloth2:9071162,trim:7031338,metal:7829367,hat:"straw",skirt:"none",cape:null,armor:!1,weapon:"none",offhand:"none",bulk:1.05}},ja=new R(0,1,0),Hn=new R,ws=new R,jd=new R,tu=new re;let Vc=null;function H1(i){Vc=i}function kn(i,t=.8,e=0){const n=new $a({color:i,roughness:t,metalness:e});return e>.3&&Vc&&(n.envMap=Vc,n.envMapIntensity=e>.6?1.4:.45),n}function ki(i,t,e=8){const n=new Ce(t,i,1,e,1);return n.translate(0,.5,0),n}class Ui{mesh;constructor(t,e){this.mesh=new $t(t,e),this.mesh.castShadow=!0}place(t,e){Hn.subVectors(e,t);const n=Hn.length();this.mesh.position.copy(t),n>1e-5&&this.mesh.quaternion.setFromUnitVectors(ja,Hn.multiplyScalar(1/n)),this.mesh.scale.set(1,Math.max(n,.001),1)}}const V1=new R(0,0,1),Va=.58,G1=40,eu=.875,jr=.07,Ee=()=>new R,xt={hipQ:new cn,chestQ:new cn,bodyQ:new cn,headQ:new cn,q:new cn,e:new ei,m:new re,pivot:Ee(),chestTop:Ee(),shR:Ee(),shL:Ee(),headPos:Ee(),hipR:Ee(),hipL:Ee(),handR:Ee(),handL:Ee(),elbowR:Ee(),elbowL:Ee(),poleR:Ee(),poleL:Ee(),ankR:Ee(),ankL:Ee(),footR:Ee(),footL:Ee(),kneeR:Ee(),kneeL:Ee(),poleKR:Ee(),poleKL:Ee(),pel:Ee(),bladeR:Ee(),edgeR:Ee(),bladeL:Ee(),edgeL:Ee(),tmp:Ee(),tmp2:Ee()};function nu(i){return i.sub(xt.pivot).applyQuaternion(xt.bodyQ).add(xt.pivot)}const W1=[xt.chestTop,xt.shR,xt.shL,xt.headPos,xt.hipR,xt.hipL,xt.elbowR,xt.elbowL,xt.handR,xt.handL,xt.kneeR,xt.kneeL,xt.ankR,xt.ankL,xt.footR,xt.footL];class us{dir=new R;init=!1;static t=new R;static u=new R;static w=new R;solve(t,e,n,s,a,r,o){const l=us.t.subVectors(e,t);let c=l.length();c<1e-5?l.set(0,-1,0):l.multiplyScalar(1/c),c=Math.min(n+s-1e-4,Math.max(Math.abs(n-s)+1e-4,c));const h=us.u.copy(a).addScaledVector(l,-a.dot(l)),d=h.length(),u=a.length()||1;if(!this.init)d<1e-4&&h.set(0,0,1).addScaledVector(l,-l.z),this.dir.copy(h).normalize(),this.init=!0;else if(d>.15*u&&r>0){h.multiplyScalar(1/d);const x=Math.acos(Math.max(-1,Math.min(1,this.dir.dot(h))));if(x>1e-5){const m=Math.min(x*(1-Math.exp(-r*30)),G1*r),p=us.w.crossVectors(this.dir,h);p.lengthSq()<1e-10&&p.copy(l),this.dir.applyAxisAngle(p.normalize(),m)}}this.dir.addScaledVector(l,-this.dir.dot(l)),this.dir.lengthSq()<1e-8&&this.dir.copy(h.lengthSq()>1e-8?h:ws.set(0,0,1).addScaledVector(l,-l.z)),this.dir.normalize();const f=(n*n+c*c-s*s)/(2*n*c),g=Math.sqrt(Math.max(0,1-f*f));return o.copy(t).addScaledVector(l,n*f).addScaledVector(this.dir,n*g)}}function aa(i,t,e){Hn.copy(t).normalize(),ws.copy(e).addScaledVector(Hn,-e.dot(Hn)),ws.lengthSq()<1e-6&&ws.set(0,0,1).addScaledVector(Hn,-Hn.z),ws.normalize(),jd.crossVectors(Hn,ws).normalize(),tu.makeBasis(jd,Hn,ws),i.quaternion.setFromRotationMatrix(tu)}function kf(i,t){const e=new jn,n=kn(t.metal,.22,.9),s=kn(1840916,.9),a=kn(11569726,.4,.7),r=kn(5913378,.8),o=(l,c,h,d=0,u=0)=>{const f=new $t(l,c);return f.position.set(d,h,u),f.castShadow=!0,e.add(f),f};switch(i){case"shortsword":return o(new Fe(.058,.54,.012),n,.35),o(new Mi(.029,.09,4),n,.665).scale.set(1,1,.25),o(new Fe(.17,.022,.035),a,.07),o(new Ce(.017,.017,.13,6),s,-.01),o(new Vn(.026,8,6),a,-.09),{group:e,tip:.7,base:.1};case"katana":case"nodachi":case"wakizashi":{const l=i==="nodachi"?1.1:i==="katana"?.78:.5,c=i==="wakizashi"?.14:.27,h=3;for(let d=0;d<h;d++){const u=.05+l/h*d,f=o(new Fe(.032,l/h+.01,.01),n,u+l/h/2);f.position.z=-Math.pow((d+.5)/h,2)*.035*l,f.rotation.x=.03*(d+1)*l}return o(new Ce(.045,.045,.012,12),a,.035),o(new Ce(.017,.017,c,6),s,.02-c/2),{group:e,tip:.05+l,base:.1}}case"yari":case"shortyari":{const l=i==="yari"?1:.45,c=i==="yari"?1.6:.9;return o(new Ce(.018,.018,l+c,6),r,(c-l)/2),o(new Mi(.03,.26,4),n,c+.13).scale.set(1,1,.3),o(new Ce(.026,.026,.05,6),a,c-.01),{group:e,tip:c+.26,base:c-.1}}case"knife":return o(new Fe(.03,.22,.008),n,.14),o(new Ce(.015,.015,.1,6),s,-.02),{group:e,tip:.26,base:.05};default:return{group:e,tip:.1,base:0}}}function Y1(i,t){const e=new jn,n=(s,a,r,o,l)=>{const c=new $t(s,a);return c.position.set(r,o,l),c.castShadow=!0,e.add(c),c};switch(i){case"buckler":{const s=kn(5979944,.7),a=kn(11449789,.3,.85);n(new Ce(.165,.165,.025,20),s,0,0,0);const r=n(new Sa(.165,.012,6,24),a,0,.012,0);return r.rotation.x=Math.PI/2,n(new Vn(.055,12,8,0,Math.PI*2,0,Math.PI/2),a,0,.012,0),{group:e,tip:0,base:0}}case"tate":{const s=kn(8006178,.75),a=kn(2826520,.8);n(new Fe(.62,1.12,.05),s,0,.1,.02);for(const o of[-.3,.5])n(new Fe(.64,.05,.06),a,0,o,.02);const r=n(new Sa(.1,.018,6,20),kn(t.trim===8006178?15260864:t.trim,.6),0,.2,.05);return r.rotation.x=0,{group:e,tip:.6,base:-.4}}case"wakizashi":{const s=kf("wakizashi",t);return{group:s.group,tip:s.tip,base:s.base}}case"yumi":{const s=kn(2759186,.6),a=[],r=1.25,o=-.72;for(let h=0;h<=16;h++){const d=o+(r-o)*h/16,u=(d-o)/(r-o),f=Math.sin(u*Math.PI)*.14-Math.sin(u*Math.PI*2)*.02;a.push(new R(0,d,f))}const l=new $t(new Oo(new ph(a),24,.013,5),s);l.castShadow=!0,e.add(l),n(new Ce(.02,.02,.1,6),kn(14735039,.9),0,0,.14);const c=Uf();return e.add(c),{group:e,tip:r,base:o,bowString:c,bowTips:[new R(0,r,0),new R(0,o,0)]}}default:return null}}function Uf(){const i=new Ue;i.setAttribute("position",new Ke(new Float32Array(9),3));const t=new sf(i,new hh({color:15262416}));return t.frustumCulled=!1,t}function X1(){const i=new jn,t=kn(3876374,.55),e=[];for(let a=0;a<=14;a++){const r=a/14,o=-.6+1.2*r,l=Math.sin(r*Math.PI)*.12-Math.pow(Math.abs(r-.5)*2,6)*.07;e.push(new R(0,o,l))}const n=new $t(new Oo(new ph(e),20,.014,5),t);n.castShadow=!0,i.add(n);const s=Uf();return i.add(s),{group:i,string:s,tips:[new R(0,.6,-.07),new R(0,-.6,-.07)]}}class q1{root=new jn;kind;look;mats=[];torso;pelvisMesh;head;neck;uArmR;lArmR;uArmL;lArmL;thighR;shinR;thighL;shinL;joints=[];handRMesh;handLMesh;footRMesh;footLMesh;skirt=null;cape=null;shoulderPads=[];chestPlate=null;weapon;weaponTip;weaponBase;offhand;offTip;offBase;offKind;bowString=null;bowTips=null;rangerBow=null;quiver=null;nocked=null;glintSprite;shieldOpen=0;armorBroken=!1;capeLift=0;grip;bendR=new us;bendL=new us;bendKR=new us;bendKL=new us;jHandR=new R;jHandL=new R;jHead=new R;jChest=new R;constructor(t,e){this.kind=t;const n=this.look=B1[t],s=(T,M=.85,w=0)=>{const v=kn(T,M,w);return this.mats.push(v),v},a=s(n.skin,.7),r=s(n.cloth),o=s(n.cloth2),l=s(n.trim,.6,n.armor?.5:0),c=n.armor?s(n.cloth,.45,.35):r,h=n.bulk;this.grip=n.weapon==="katana"?-.2:n.weapon==="nodachi"?-.25:n.weapon==="yari"?.55:null,this.torso=new $t(new Ce(.2*h,.15*h,.52,10),c),this.torso.scale.z=.68,this.torso.castShadow=!0,this.root.add(this.torso),this.pelvisMesh=new $t(new Vn(.16*h,10,8),o),this.pelvisMesh.scale.set(1,.7,.75),this.pelvisMesh.castShadow=!0,this.root.add(this.pelvisMesh),this.neck=new Ui(ki(.045,.05,6),a),this.root.add(this.neck.mesh),this.head=this.buildHead(n,a,r,l,s),this.root.add(this.head);const d=n.armor?c:r;this.uArmR=new Ui(ki(.058*h,.05*h),d),this.lArmR=new Ui(ki(.05*h,.042*h),t==="player"?o:r),this.uArmL=new Ui(ki(.058*h,.05*h),d),this.lArmL=new Ui(ki(.05*h,.042*h),t==="player"?o:r);const u=t==="player"?s(5917242,.9):o,f=t==="player"||n.armor?s(2366744,.85):u;this.thighR=new Ui(ki(.085*h,.066*h),u),this.shinR=new Ui(ki(.066*h,.052*h),f),this.thighL=new Ui(ki(.085*h,.066*h),u),this.shinL=new Ui(ki(.066*h,.052*h),f);for(const T of[this.uArmR,this.lArmR,this.uArmL,this.lArmL,this.thighR,this.shinR,this.thighL,this.shinL])this.root.add(T.mesh);const g=new Vn(.05*h,8,6);for(let T=0;T<4;T++){const M=new $t(g,T<2?d:u);M.castShadow=!0,this.joints.push(M),this.root.add(M)}const x=new Vn(.042,8,6);this.handRMesh=new $t(x,t==="player"?o:a),this.handLMesh=new $t(x,t==="player"?o:a);const m=new Fe(.09,.07,.22);m.translate(0,.035,.04);const p=s(2761760,.9);this.footRMesh=new $t(m,p),this.footLMesh=new $t(m,p);for(const T of[this.handRMesh,this.handLMesh,this.footRMesh,this.footLMesh])T.castShadow=!0,this.root.add(T);if(n.skirt!=="none"){const T=n.skirt==="hakama",M=n.skirt==="armor",w=new Ce(.19*h,(T?.34:M?.3:.25)*h,T?.6:M?.38:.34,14,1,!0);w.translate(0,-(T?.3:M?.19:.17),0);const v=n.skirt==="hakama"?o:M?c:r,E=new $t(w,v);E.material.side=on,E.castShadow=!0,this.skirt=E,this.root.add(E)}if(n.cape!==null){const T=new ps(.46*h,.92,1,6);T.translate(0,-.46,0);const M=s(n.cape,.9);M.side=on,this.cape=new $t(T,M),this.cape.castShadow=!0,this.root.add(this.cape)}if(n.armor){const T=new Fe(.16*h,.05,.2*h);for(let M=0;M<2;M++){const w=new $t(T,c),v=new $t(new Fe(.165*h,.015,.205*h),l);v.position.y=-.03,w.add(v),w.castShadow=!0,this.shoulderPads.push(w),this.root.add(w)}this.chestPlate=new $t(new Fe(.36*h,.3,.06),c),this.chestPlate.castShadow=!0,this.root.add(this.chestPlate)}const y=kf(n.weapon,n);this.weapon=y.group,this.weaponTip=y.tip,this.weaponBase=y.base,this.root.add(this.weapon),this.offKind=n.offhand;const A=Y1(n.offhand,n);if(this.offhand=A?.group??null,this.offTip=A?.tip??0,this.offBase=A?.base??0,A?.bowString&&(this.bowString=A.bowString,this.bowTips=A.bowTips),this.offhand&&this.root.add(this.offhand),t==="player"){this.rangerBow=X1(),this.root.add(this.rangerBow.group);const T=new $t(new Ce(.05,.045,.5,8),s(4863270,.9));T.castShadow=!0,this.quiver=T,this.root.add(T);const M=new $t(new Mi(.06,.1,6),s(15130831,.9));M.position.y=.3,T.add(M)}if(t==="player"||t==="archer"){const T=new $t(new Ce(.006,.006,.8,4),kn(14207395,.8));T.geometry.translate(0,.4,0),this.nocked=T,this.root.add(T)}const b=new tf({map:e,color:6728447,transparent:!0,depthWrite:!1,blending:fs,opacity:0});this.glintSprite=new n0(b),this.glintSprite.scale.setScalar(.01),this.root.add(this.glintSprite),this.root.traverse(T=>{T.isMesh&&(T.receiveShadow=!1)})}buildHead(t,e,n,s,a){const r=new jn,o=(c,h,d=0,u=0,f=0)=>{const g=new $t(c,h);return g.position.set(d,u,f),g.castShadow=!0,r.add(g),g},l=t.hat==="mask"?n:e;switch(o(new Vn(.112,14,10),l).scale.set(.92,1.05,1),t.hat){case"hood":{const c=o(new Vn(.15,16,10,Math.PI/2+.75,Math.PI*2-1.5,0,Math.PI*.66),n,0,.01,-.02);c.scale.set(1,1.1,1.08),c.material.side=on,o(new Fe(.1,.018,.02),a(1708560,.9),0,.02,.1);const h=o(new Mi(.08,.2,8),n,0,.02,-.14);h.rotation.x=-1.9,o(new Ce(.1,.115,.08,12),a(9187107,.9),0,-.07,.01);break}case"jingasa":case"jingasaDark":{const c=o(new Mi(.36,.13,18),a(t.hat==="jingasa"?12098138:2762274,.8,t.hat==="jingasa"?0:.2),0,.1,0);c.castShadow=!0;break}case"kabuto":case"kabutoBoss":{const c=t.hat==="kabutoBoss";o(new Vn(.135,14,10,0,Math.PI*2,0,Math.PI/2),s,0,.02,0);const h=o(new Ce(.14,.22,.12,14,1,!0),s,0,-.03,-.02);h.material.side=on;const d=a(13936711,.35,.8);if(c){const u=o(new Sa(.2,.014,6,24,Math.PI),d,0,.14,.1);u.rotation.z=Math.PI,u.position.y=.3,u.name="armor"}else for(const u of[-1,1]){const f=o(new Fe(.02,.22,.012),d,u*.07,.2,.1);f.rotation.z=-u*.45}o(new Fe(.16,.08,.05),a(2759706,.5,.3),0,-.05,.09);break}case"mask":o(new Fe(.2,.035,.03),a(9051946,.8),0,.01,.1);break;case"band":o(new Sa(.11,.015,6,16),a(14735039,.9),0,.05,0).rotation.x=Math.PI/2;break;case"straw":o(new Mi(.16,.2,10),a(13940088,1),0,.12,0);break}return r}applyPose(t,e,n){const s=this.look.bulk,a=t.pelvis,r=xt.hipQ.setFromAxisAngle(ja,t.pelvisYaw),o=xt.chestQ.setFromEuler(xt.e.set(t.lean,t.pelvisYaw+t.torsoYaw,t.roll,"YXZ")),l=xt.bodyQ.setFromEuler(xt.e.set(t.bodyPitch,0,t.bodyRoll,"XYZ"));xt.pivot.copy(a);const c=xt.chestTop.set(0,.5,0).applyQuaternion(o).add(a),h=xt.shR.set(-.19*s,.45,0).applyQuaternion(o).add(a),d=xt.shL.set(.19*s,.45,0).applyQuaternion(o).add(a),u=xt.headQ.copy(o).multiply(xt.q.setFromEuler(xt.e.set(t.headPitch-t.lean*.6,t.headYaw,0,"YXZ"))),f=xt.headPos.set(0,.17,.01).applyQuaternion(u).add(c),g=xt.hipR.set(-.1*s,-.02,0).applyQuaternion(r).add(a),x=xt.hipL.set(.1*s,-.02,0).applyQuaternion(r).add(a),m=xt.handR.copy(t.handR),p=xt.handL.copy(t.handL);ra(h,m,Va),this.grip!==null?(p.copy(m).addScaledVector(t.bladeR,this.grip),p.distanceTo(d)>Va&&(ra(d,p,Va),m.copy(p).addScaledVector(t.bladeR,-this.grip),ra(h,m,Va),p.copy(m).addScaledVector(t.bladeR,this.grip))):ra(d,p,Va);const y=xt.poleR.set(-.7,-.5,-.5).applyQuaternion(o),A=xt.poleL.set(.7,-.5,-.5).applyQuaternion(o),b=this.bendR.solve(h,m,.29,.29,y,n,xt.elbowR),T=this.bendL.solve(d,p,.29,.29,A,n,xt.elbowL),M=xt.ankR.copy(t.footR).setY(t.footR.y+jr),w=xt.ankL.copy(t.footL).setY(t.footL.y+jr);ra(g,M,eu),ra(x,w,eu);const v=xt.footR.copy(M).setY(M.y-jr),E=xt.footL.copy(w).setY(w.y-jr),C=xt.poleKR.set(Math.sin(t.pelvisYaw)+Math.sin(t.footYawR),.4,Math.cos(t.pelvisYaw)+Math.cos(t.footYawR)),I=xt.poleKL.set(Math.sin(t.pelvisYaw)+Math.sin(t.footYawL),.4,Math.cos(t.pelvisYaw)+Math.cos(t.footYawL)),L=this.bendKR.solve(g,M,.44,.44,C,n,xt.kneeR),F=this.bendKL.solve(x,w,.44,.44,I,n,xt.kneeL);for(const G of W1)nu(G);const D=nu(xt.pel.copy(a));if(o.premultiply(l),r.premultiply(l),u.premultiply(l),this.torso.position.set(0,.27,0).applyQuaternion(o).add(D),this.torso.quaternion.copy(o),this.pelvisMesh.position.copy(D),this.pelvisMesh.quaternion.copy(r),this.neck.place(xt.tmp.copy(c).setY(c.y-.03),f),this.head.position.copy(f),this.head.quaternion.copy(u),this.jHead.copy(f),this.jChest.copy(this.torso.position),this.uArmR.place(h,b),this.lArmR.place(b,m),this.uArmL.place(d,T),this.lArmL.place(T,p),this.thighR.place(g,L),this.shinR.place(L,M),this.thighL.place(x,F),this.shinL.place(F,w),this.joints[0].position.copy(b),this.joints[1].position.copy(T),this.joints[2].position.copy(L),this.joints[3].position.copy(F),this.handRMesh.position.copy(m),this.handLMesh.position.copy(p),this.footRMesh.position.copy(v),this.footLMesh.position.copy(E),this.footRMesh.quaternion.setFromAxisAngle(ja,t.footYawR).premultiply(l),this.footLMesh.quaternion.setFromAxisAngle(ja,t.footYawL).premultiply(l),this.jHandR.copy(m),this.jHandL.copy(p),this.skirt){this.skirt.position.copy(D),this.skirt.position.y+=.1;const G=(E.z-v.z)*.25;this.skirt.quaternion.copy(r).multiply(xt.q.setFromEuler(xt.e.set(G*.4,0,0)))}this.cape&&(this.capeLift+=(Math.min(1,e/6)-this.capeLift)*(1-Math.exp(-n*5)),this.cape.position.set(0,.47,-.13*s).applyQuaternion(o).add(D),this.cape.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(.12+this.capeLift*.9-t.lean*.5,0,0)))),this.chestPlate&&(this.chestPlate.position.set(0,.3,.1*s).applyQuaternion(o).add(D),this.chestPlate.quaternion.copy(o));for(let G=0;G<this.shoulderPads.length;G++){const j=this.shoulderPads[G];j.position.copy(G===0?h:d),j.position.y+=.03,j.quaternion.copy(o).multiply(xt.q.setFromAxisAngle(V1,(G===0?1:-1)*.5))}const z=xt.bladeR.copy(t.bladeR).applyQuaternion(l),X=xt.edgeR.copy(t.edgeR).applyQuaternion(l);this.kind==="player"&&t.bowInHand>.5?(this.weapon.position.set(.2,-.02,.06).applyQuaternion(r).add(D),aa(this.weapon,xt.tmp.set(.15,-.55,-1).applyQuaternion(r),xt.tmp2.set(1,0,0).applyQuaternion(r))):(this.weapon.position.copy(m),aa(this.weapon,z,X));const W=xt.bladeL.copy(t.bladeL).applyQuaternion(l),it=xt.edgeL.copy(t.edgeL).applyQuaternion(l);if(this.offhand)if(this.offKind==="buckler"){const G=xt.tmp.subVectors(p,T).normalize();this.offhand.position.copy(p).addScaledVector(G,-.07).addScaledVector(W,.03),aa(this.offhand,W,G)}else this.offKind==="tate"?(this.offhand.position.copy(p).addScaledVector(it,.06),aa(this.offhand,W,it)):(this.offhand.position.copy(p),aa(this.offhand,W,it));if(this.bowString&&this.bowTips&&this.offhand&&this.updateString(this.bowString,this.offhand,this.bowTips,m,t.bowDraw),this.rangerBow){const G=this.rangerBow.group;t.bowInHand>.5?(G.position.copy(p),aa(G,W,it)):(G.position.set(.02,.28,-.17*s).applyQuaternion(o).add(D),G.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(0,Math.PI,.55)))),this.updateString(this.rangerBow.string,G,this.rangerBow.tips,m,t.bowInHand>.5?t.bowDraw:0)}if(this.quiver&&(this.quiver.position.set(-.12,.3,-.16*s).applyQuaternion(o).add(D),this.quiver.quaternion.copy(o).multiply(xt.q.setFromEuler(xt.e.set(.15,0,-.35)))),this.nocked){const G=(this.kind==="archer"?1:t.bowInHand)>.5&&t.bowDraw>.05;if(this.nocked.visible=G,G){const j=this.rangerBow?this.rangerBow.group:this.offhand,nt=xt.tmp.subVectors(j.position,m),Dt=nt.length();this.nocked.position.copy(m),this.nocked.quaternion.setFromUnitVectors(ja,nt.normalize()),this.nocked.scale.set(1,Math.max(1,(Dt+.12)/.8),1)}}}updateString(t,e,n,s,a){const r=t.geometry.getAttribute("position");e.updateMatrix();const o=xt.m.copy(e.matrix).invert(),l=xt.tmp.set(0,(n[0].y+n[1].y)/2,n[0].z),c=xt.tmp2.copy(s).applyMatrix4(o);l.lerp(c,Math.min(1,a*1.15)),r.setXYZ(0,n[0].x,n[0].y,n[0].z),r.setXYZ(1,l.x,l.y,l.z),r.setXYZ(2,n[1].x,n[1].y,n[1].z),r.needsUpdate=!0}bladeWorld(t,e,n=!1){const s=n&&this.offhand?this.offhand:this.weapon;s.updateWorldMatrix(!0,!1),t.set(0,n?this.offBase:this.weaponBase,0).applyMatrix4(s.matrixWorld),e.set(0,n?this.offTip:this.weaponTip,0).applyMatrix4(s.matrixWorld)}shatterArmor(){if(!this.armorBroken){this.armorBroken=!0,this.chestPlate&&(this.chestPlate.visible=!1);for(const t of this.shoulderPads)t.visible=!1;this.head.traverse(t=>{t.name==="armor"&&(t.visible=!1)}),this.torso.material.color.setHex(this.look.cloth2),this.skirt&&this.skirt.material.color.setHex(2757654)}}setFlash(t,e=16777215){for(const n of this.mats)n.emissive.setHex(e),n.emissiveIntensity=t}setGlint(t,e){const n=this.glintSprite;if(!t){n.material.opacity=0;return}const s=n.material;s.color.setHex(t==="blue"?8373503:16726826);const a=Math.min(1,e/6),r=e>20?Math.max(0,1-(e-20)/16):1;s.opacity=a*r,n.scale.setScalar((.25+.55*a)*(1+.15*Math.sin(e*.9))),n.material.rotation=e*.05,n.position.set(0,this.weaponTip*.8,0).applyQuaternion(this.weapon.quaternion).add(this.weapon.position)}dispose(){this.root.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()});for(const t of this.mats)t.dispose()}}function ra(i,t,e){Hn.subVectors(t,i);const n=Hn.length();n>e&&t.copy(i).addScaledVector(Hn,e/n)}const Ni=(i,t,e)=>new R(i,t,e);function Rn(){return{pelvis:Ni(0,.92,0),pelvisYaw:0,torsoYaw:0,lean:.05,roll:0,headYaw:0,headPitch:0,handR:Ni(-.28,1,.3),bladeR:Ni(0,.5,1).normalize(),edgeR:Ni(0,1,0),handL:Ni(.26,1.05,.22),bladeL:Ni(.2,0,1).normalize(),edgeL:Ni(0,1,0),footR:Ni(-.13,0,-.12),footL:Ni(.13,0,.14),bodyPitch:0,bodyRoll:0,bodyYaw:0,bowDraw:0,bowInHand:0,footYawL:0,footYawR:0}}function Te(i,t=Rn()){return t.pelvis.copy(i.pelvis),t.pelvisYaw=i.pelvisYaw,t.torsoYaw=i.torsoYaw,t.lean=i.lean,t.roll=i.roll,t.headYaw=i.headYaw,t.headPitch=i.headPitch,t.handR.copy(i.handR),t.bladeR.copy(i.bladeR),t.edgeR.copy(i.edgeR),t.handL.copy(i.handL),t.bladeL.copy(i.bladeL),t.edgeL.copy(i.edgeL),t.footR.copy(i.footR),t.footL.copy(i.footL),t.bodyPitch=i.bodyPitch,t.bodyRoll=i.bodyRoll,t.bodyYaw=i.bodyYaw,t.bowDraw=i.bowDraw,t.bowInHand=i.bowInHand,t.footYawL=i.footYawL,t.footYawR=i.footYawR,t}const Ie=(i,t,e)=>i+(t-i)*e;function Re(i,t,e,n){return n.pelvis.lerpVectors(i.pelvis,t.pelvis,e),n.pelvisYaw=Ie(i.pelvisYaw,t.pelvisYaw,e),n.torsoYaw=Ie(i.torsoYaw,t.torsoYaw,e),n.lean=Ie(i.lean,t.lean,e),n.roll=Ie(i.roll,t.roll,e),n.headYaw=Ie(i.headYaw,t.headYaw,e),n.headPitch=Ie(i.headPitch,t.headPitch,e),n.handR.lerpVectors(i.handR,t.handR,e),ti(i.bladeR,t.bladeR,e,n.bladeR),ti(i.edgeR,t.edgeR,e,n.edgeR),n.handL.lerpVectors(i.handL,t.handL,e),ti(i.bladeL,t.bladeL,e,n.bladeL),ti(i.edgeL,t.edgeL,e,n.edgeL),n.footR.lerpVectors(i.footR,t.footR,e),n.footL.lerpVectors(i.footL,t.footL,e),n.bodyPitch=Ie(i.bodyPitch,t.bodyPitch,e),n.bodyRoll=Ie(i.bodyRoll,t.bodyRoll,e),n.bodyYaw=Ie(i.bodyYaw,t.bodyYaw,e),n.bowDraw=Ie(i.bowDraw,t.bowDraw,e),n.bowInHand=Ie(i.bowInHand,t.bowInHand,e),n.footYawL=Ie(i.footYawL,t.footYawL,e),n.footYawR=Ie(i.footYawR,t.footYawR,e),n}function ss(i,t,e,n,s,a,r){return a.pelvis.lerpVectors(i.pelvis,t.pelvis,e),a.pelvisYaw=Ie(i.pelvisYaw,t.pelvisYaw,e),a.footR.lerpVectors(i.footR,t.footR,e),a.footL.lerpVectors(i.footL,t.footL,e),a.footYawL=Ie(i.footYawL,t.footYawL,e),a.footYawR=Ie(i.footYawR,t.footYawR,e),a.bodyPitch=Ie(i.bodyPitch,t.bodyPitch,e),a.bodyRoll=Ie(i.bodyRoll,t.bodyRoll,e),a.bodyYaw=Ie(i.bodyYaw,t.bodyYaw,e),a.torsoYaw=Ie(i.torsoYaw,t.torsoYaw,n),a.lean=Ie(i.lean,t.lean,n),a.roll=Ie(i.roll,t.roll,n),a.headYaw=Ie(i.headYaw,t.headYaw,n),a.headPitch=Ie(i.headPitch,t.headPitch,n),r?(iu(i.handR,t.handR,r,s,a.handR),iu(i.handL,t.handL,r,s,a.handL)):(a.handR.lerpVectors(i.handR,t.handR,s),a.handL.lerpVectors(i.handL,t.handL,s)),ti(i.bladeR,t.bladeR,s,a.bladeR),ti(i.edgeR,t.edgeR,s,a.edgeR),ti(i.bladeL,t.bladeL,s,a.bladeL),ti(i.edgeL,t.edgeL,s,a.edgeL),a.bowDraw=Ie(i.bowDraw,t.bowDraw,s),a.bowInHand=Ie(i.bowInHand,t.bowInHand,s),a}const oa=new R,to=new R;function iu(i,t,e,n,s){oa.subVectors(i,e),to.subVectors(t,e);const a=oa.length(),r=to.length();return a<1e-4||r<1e-4?s.lerpVectors(i,t,n):(oa.multiplyScalar(1/a),to.multiplyScalar(1/r),ti(oa,to,n,oa),s.copy(e).addScaledVector(oa,a+(r-a)*n))}const Ga=new R,eo=new R;function ti(i,t,e,n){const s=Math.max(-1,Math.min(1,i.dot(t)));if(s>.9999)return n.lerpVectors(i,t,e).normalize();s<-.9999?(eo.set(0,1,0).addScaledVector(i,-i.y),eo.lengthSq()<1e-6&&eo.set(1,0,0).addScaledVector(i,-i.x),Ga.crossVectors(i,eo).normalize()):Ga.crossVectors(i,t).normalize();const a=Math.acos(s)*e,r=Math.cos(a),o=Math.sin(a),l=i.x,c=i.y,h=i.z,d=Ga.x,u=Ga.y,f=Ga.z,g=d*l+u*c+f*h;return n.set(l*r+(u*h-f*c)*o+d*g*(1-r),c*r+(f*l-d*h)*o+u*g*(1-r),h*r+(d*c-u*l)*o+f*g*(1-r)),n.normalize()}function su(i,t,e){return Te(i,e),t.hand&&e.handR.set(...t.hand),t.blade&&e.bladeR.set(...t.blade).normalize(),t.edge&&e.edgeR.set(...t.edge).normalize(),t.lhand&&e.handL.set(...t.lhand),t.lblade&&e.bladeL.set(...t.lblade).normalize(),t.ledge&&e.edgeL.set(...t.ledge).normalize(),t.torso!==void 0&&(e.torsoYaw=t.torso),t.pelvisYaw!==void 0&&(e.pelvisYaw=t.pelvisYaw),t.lean!==void 0&&(e.lean=t.lean),t.roll!==void 0&&(e.roll=t.roll),t.pelvisY!==void 0&&(e.pelvis.y=t.pelvisY),t.step!==void 0&&(e.footL.z=.14+t.step,e.footR.z=-.12-t.step*.6),t.head!==void 0&&(e.headYaw=t.head),t.headPitch!==void 0&&(e.headPitch=t.headPitch),t.bodyPitch!==void 0&&(e.bodyPitch=t.bodyPitch),t.bodyRoll!==void 0&&(e.bodyRoll=t.bodyRoll),t.draw!==void 0&&(e.bowDraw=t.draw),t.bow!==void 0&&(e.bowInHand=t.bow),e}const K1=.875,$1=.07;function au(){return{fresh:!1,ahead:-1,airOff:new R,planted:new R,plantedYaw:0,swinging:!1,from:new R,fromYaw:0,yawE0:0,to:new R,toYaw:0,u:0,dur:.15,lift:.05,stance:1,cur:new R,curYaw:0}}const oi=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},la=i=>i*i*(3-2*i);function Z1(i,t,e,n,s,a){return t.set(e.x+(i.x*n+i.z*s)*a,i.y*a,e.z+(-i.x*s+i.z*n)*a)}function kl(i,t,e,n,s,a){const r=(i.x-e.x)/a,o=(i.z-e.z)/a;return t.set(r*n-o*s,i.y/a,r*s+o*n)}const Be=[new R,new R],J1=[0,0],Q1=[0,0],ai=[0,1],j1=[0,1],ty=[1,0],Wa=new R,Ul=new R,Nl=new cn,Fl=new cn,ey=new ei,as=new R,no=new R,ru=new R,ou=new R;class ny{feet=[au(),au()];init=!1;planned=null;pivotFree=-1;drop=0;inAir=!1;airLift=0;lastRoot=new R;handK=1;phase=0;walking=!1;landings=[];gait=0;reset(){this.init=!1,this.planned=null,this.pivotFree=-1}planStep(t,e,n){this.planned={foot:t,dur:Math.max(.05,e),lift:n}}isPlanted(t){return!this.inAir&&!this.feet[t].swinging&&this.pivotFree!==t}worldFoot(t){return this.feet[t].cur}update(t,e,n,s,a,r,o,l,c=1){this.landings.length=0,ou.subVectors(e,this.lastRoot).setY(0),this.lastRoot.copy(e);const h=t.bowInHand>.5?0:1;this.handK=this.init?this.handK+(h-this.handK)*(1-Math.exp(-r*15)):h;const d=Math.cos(n),u=Math.sin(n),f=Math.abs(oi(t.bodyPitch))>1e-4||Math.abs(oi(t.bodyRoll))>1e-4;f&&(Nl.setFromEuler(ey.set(t.bodyPitch,0,t.bodyRoll,"XYZ")),Fl.copy(Nl).invert(),as.copy(t.pelvis));for(const M of ai)no.copy(M===0?t.footL:t.footR),f&&no.sub(as).applyQuaternion(Nl).add(as),Z1(no,Be[M],e,d,u,s);const g=J1;g[0]=n+t.footYawL,g[1]=n+t.footYawR;const x=this.init&&(Be[0].distanceTo(this.feet[0].cur)>2.2||Be[1].distanceTo(this.feet[1].cur)>2.2);if(!this.init||x){for(const M of ai){const w=this.feet[M];w.swinging=!1,w.planted.copy(Be[M]).setY(0),w.plantedYaw=g[M],w.cur.copy(Be[M]),w.curYaw=g[M],w.stance=1}this.init=!0,this.inAir=!1,this.airLift=0,this.pivotFree=-1,this.planned=null,this.drop=0;return}const m=Math.hypot(a.x,a.z);if(o==="air"){if(!this.inAir){this.inAir=!0,this.airLift=0;for(const v of ai)this.feet[v].airOff.subVectors(this.feet[v].cur,Be[v]).add(ou)}const M=Math.exp(-r*25),w=m>8?Math.min(.08,(m-8)*.004+.03)*s:0;this.airLift+=(w-this.airLift)*(1-Math.exp(-r*Math.max(40,m*3)));for(const v of ai){const E=this.feet[v];E.swinging=!1,E.airOff.multiplyScalar(M),E.cur.copy(Be[v]).add(E.airOff),E.cur.y=Math.max(E.cur.y,this.airLift,0),E.curYaw+=oi(g[v]-E.curYaw)*(1-M),E.planted.copy(E.cur).setY(0),E.plantedYaw=E.curYaw,E.stance=1}this.pivotFree=-1,this.planned=null,this.gait*=Math.exp(-r*10),this.drop*=Math.exp(-r*10),this.writeBack(t,e,n,d,u,s,f),this.applyDrop(t);return}if(this.inAir){this.inAir=!1;for(const M of ai){const w=this.feet[M];w.cur.y>.005*s&&(w.swinging=!0,w.fresh=!1,w.ahead=-1,w.to.copy(Be[M]).setY(0),w.toYaw=g[M],w.from.copy(w.cur).multiplyScalar(2).sub(w.to).setY(0),w.fromYaw=w.curYaw,w.lift=w.cur.y/s,w.u=.5,w.yawE0=.5,w.dur=.14)}}for(const M of ai)this.feet[M].stance+=r;if(o==="pivot"){const M=this.feet[l.lead];M.swinging=!1,M.plantedYaw=g[l.lead],M.cur.copy(M.planted),M.curYaw=M.plantedYaw;const w=l.lead===0?1:0,v=this.feet[w];v.swinging=!1,v.planted.copy(Be[w]).setY(0),v.plantedYaw=g[w],v.cur.copy(v.planted).setY(Math.max(Be[w].y,.04*s)),v.curYaw=v.plantedYaw,this.pivotFree=w}else{if(this.pivotFree>=0){const E=this.pivotFree,C=this.feet[E];this.pivotFree=-1,C.swinging=!0,C.from.copy(C.cur).setY(0),C.fromYaw=C.curYaw,this.predict(Be[E],a,.08,l,m,s,C.to),C.toYaw=g[E],C.lift=Math.max(.01,C.cur.y/s),C.u=.5,C.yawE0=.5,C.dur=.16}if(this.planned){const E=this.planned;this.planned=null;const C=this.feet[E.foot];if(C.swinging&&(1-C.u)*C.dur>E.dur*.5)C.ahead=-1,C.dur=Math.min(.5,E.dur/Math.max(.05,1-C.u));else{const I=C.swinging?Math.max(0,C.cur.y):0;Wa.copy(C.cur).setY(0),C.swinging&&(C.swinging=!1,C.planted.copy(Wa),C.plantedYaw=C.curYaw),this.beginStep(E.foot,Be[E.foot],g[E.foot],a,m,l,s),C.lift=Math.max(E.lift,I/s);const L=Math.asin(Math.min(1,I/(C.lift*s)))/Math.PI,F=la(L);F>1e-6&&C.from.copy(Wa).addScaledVector(C.to,-F).multiplyScalar(1/(1-F)).setY(0),C.u=L,C.yawE0=F,C.dur=E.dur/(1-L)}C.fresh=!0}const M=l.stride>0&&m>.4?m/(l.stride*s):0;if(M>0){const E=Math.min(l.swingDur,.42/M),C=m*Math.max(0,1/M-E)/2;if(!this.walking){const L=this.feet[0].swinging?0:this.feet[1].swinging?1:-1;if(L!==-1){const F=this.feet[L],D=L===l.lead?0:.5,z=(1-F.u)*F.dur*M;this.phase=((D+Math.min(F.u*E*M,.5-z))%1+1)%1,F.ahead=C;const X=la(F.u);X<.9&&(this.predict(Be[L],a,F.dur*(1-F.u),l,m,s,F.to,C),F.from.copy(F.cur).setY(0).addScaledVector(F.to,-X).multiplyScalar(1/(1-X)).setY(0))}else{const F=Math.hypot(this.feet[0].planted.x-Be[0].x,this.feet[0].planted.z-Be[0].z),D=Math.hypot(this.feet[1].planted.x-Be[1].x,this.feet[1].planted.z-Be[1].z),z=Math.abs(F-D)<.001*s?l.lead:F>D?0:1;this.phase=z===l.lead?.999:.499}}this.walking=!0;for(const L of ai){const F=this.feet[L],D=this.feet[L===0?1:0];if(F.swinging||D.swinging&&D.u<.5)continue;if(((F.planted.x-Be[L].x)*a.x+(F.planted.z-Be[L].z)*a.z)/m<-(C+.1*s)){this.phase=((L===l.lead?0:.5)+.999)%1;break}}const I=this.phase;this.phase=(this.phase+r*M)%1;for(const L of ai){const F=L===l.lead?0:.5,D=(this.phase-F+1)%1,z=D<(this.phase-I+1)%1||I===this.phase&&D===0,X=this.feet[L];!z||X.swinging||(this.beginStep(L,Be[L],g[L],a,m,l,s,C),X.dur=E,X.u=Math.max(0,Math.min(.5,D/M/E)),X.yawE0=la(X.u),X.fresh=!0)}}else this.walking=!1;const w=Q1;w[0]=0,w[1]=0;for(const E of ai){const C=this.feet[E];if(C.swinging)continue;const I=Math.hypot(C.planted.x-Be[E].x,C.planted.z-Be[E].z),L=Math.abs(oi(C.plantedYaw-g[E])),F=e.x+(E===0?.1:-.1)*c*d*s,D=e.z+-(E===0?.1:-.1)*c*u*s,X=Math.hypot(C.planted.x-F,C.planted.z-D)/s>.6||L>1.6;M>0&&!X&&I<.6*s&&L<.95||(I>l.threshold*s||L>.95||X)&&(w[E]=I/s+(X?10:0)+(E===l.lead?.001:0))}const v=w[0]>=w[1]?j1:ty;for(const E of v){if(w[E]<=0)continue;const C=E===0?1:0,I=w[E]>=10;if(!(this.feet[C].swinging&&!l.allowBoth&&!I)&&!(this.feet[E].stance<Math.min(.06,l.swingDur*.4)&&!I)&&(this.beginStep(E,Be[E],g[E],a,m,l,s),!l.allowBoth&&!I))break}}let p=0;for(const M of ai){const w=this.feet[M];if(!w.swinging){if(M===this.pivotFree)continue;w.cur.copy(w.planted),w.curYaw=w.plantedYaw;continue}w.fresh?w.fresh=!1:w.u=Math.min(1,w.u+r/w.dur),this.predict(Be[M],a,w.dur*(1-w.u),l,m,s,Wa,w.ahead);const v=1-la(Math.min(1,Math.max(0,(w.u-.55)/.35))),E=Math.min(1,1-Math.exp(-r*18))*v;w.to.lerp(Wa,E),w.toYaw=w.toYaw+oi(g[M]-w.toYaw)*E;const C=la(w.u);w.cur.lerpVectors(w.from,w.to,C),w.cur.y=Math.sin(Math.PI*w.u)*w.lift*s,w.curYaw=w.fromYaw+oi(w.toYaw-w.fromYaw)*(w.yawE0>0?Math.max(0,(C-w.yawE0)/(1-w.yawE0)):C),p+=(M===0?1:-1)*Math.sin(Math.PI*w.u),w.u>=1-1e-6&&(w.swinging=!1,w.planted.copy(w.to).setY(0),w.plantedYaw=w.toYaw,w.cur.copy(w.planted),w.curYaw=w.plantedYaw,w.stance=0,this.landings.push({foot:M,pos:w.planted,strength:Math.min(1,l.weight*(.6+Math.min(1,m/6)*.6))}))}this.gait=p,this.writeBack(t,e,n,d,u,s,f);let y=1/0;for(const M of ai){const w=this.feet[M];if(!w.swinging)continue;const v=la(Math.min(1,w.u));ru.copy(w.cur).lerp(no.copy(w.to).setY(0),v),kl(ru,M===0?t.footL:t.footR,e,d,u,s),y=Math.min(y,(1-w.u)*w.dur)}const A=t.pelvis.y-lu(t,c,!0,!0);this.writeBack(t,e,n,d,u,s,f);const b=t.pelvis.y-lu(t,c,!this.feet[0].swinging,!this.feet[1].swinging),T=A>this.drop?Math.max(1-Math.exp(-r*25),Math.min(1,r/(y+r))):1-Math.exp(-r*10);this.drop+=(A-this.drop)*T,this.drop=Math.max(this.drop,b),this.applyDrop(t),f&&this.drop>0&&(as.y=t.pelvis.y,this.writeBack(t,e,n,d,u,s,f))}applyDrop(t){t.pelvis.y-=this.drop,t.handR.y-=this.drop*this.handK,t.handL.y-=this.drop*this.handK}writeBack(t,e,n,s,a,r,o){kl(this.feet[0].cur,t.footL,e,s,a,r),kl(this.feet[1].cur,t.footR,e,s,a,r),o&&(t.footL.sub(as).applyQuaternion(Fl).add(as),t.footR.sub(as).applyQuaternion(Fl).add(as)),t.footYawL=oi(this.feet[0].curYaw-n),t.footYawR=oi(this.feet[1].curYaw-n)}predict(t,e,n,s,a,r,o,l=-1){if(o.copy(t).setY(0),o.x+=e.x*n,o.z+=e.z*n,a>.3){const c=l>=0?Math.min(l,.4*r):Math.min(s.threshold*r*.6,.3*r);o.x+=e.x/a*c,o.z+=e.z/a*c}return o}beginStep(t,e,n,s,a,r,o,l=-1){const c=this.feet[t];c.swinging=!0,c.fresh=!1,c.u=0,c.yawE0=0,c.ahead=l,c.from.copy(c.planted),c.fromYaw=c.plantedYaw,this.predict(e,s,r.swingDur,r,a,o,c.to,l),c.toYaw=n;const h=c.from.distanceTo(c.to)/o;c.dur=Math.max(.06,r.swingDur*Math.min(1,.45+h*1.4),Math.abs(oi(n-c.fromYaw))*.06),c.lift=Math.max(.03,r.lift*Math.min(1,.5+h*1.6))}}function lu(i,t=1,e=!0,n=!0){if(Math.abs(oi(i.bodyPitch))>.25||Math.abs(oi(i.bodyRoll))>.25)return i.pelvis.y;const s=Math.cos(i.pelvisYaw),a=Math.sin(i.pelvisYaw);let r=i.pelvis.y;for(let o=0;o<2;o++){if(!(o===0?e:n))continue;const l=o===0?i.footL:i.footR,c=(o===0?1:-1)*.1*t;Ul.set(i.pelvis.x+c*s,0,i.pelvis.z-c*a);const h=Math.hypot(l.x-Ul.x,l.z-Ul.z),d=K1*.975;if(h>=d)continue;const u=l.y+$1+Math.sqrt(d*d-h*h)+.02;r=Math.min(r,u)}return Math.max(i.pelvis.y-.22,r)}const iy={player:"ranger",ronin:"katana",boss:"katana",armored:"nodachi",spear:"yari",shield:"shield",duelist:"dual",archer:"archer",dummy:"dummy"},sy={ranger:{hand:[-.26,1.02,.32],blade:[.05,.55,1],edge:[1,0,0],lhand:[.24,1.1,.26],lblade:[.35,.1,1],ledge:[0,1,0],torso:-.12,lean:.08,pelvisY:.9,step:.02},katana:{hand:[-.05,1.08,.36],blade:[0,.62,.78],edge:[1,0,0],torso:-.05,lean:.06,pelvisY:.9,step:.05},nodachi:{hand:[-.2,1.45,.1],blade:[-.1,.9,-.3],edge:[1,0,0],torso:-.2,lean:.02,pelvisY:.88,step:.08},yari:{hand:[-.2,1,-.12],blade:[.04,.1,1],edge:[0,1,0],torso:-.35,lean:.06,pelvisY:.88,step:.12},shield:{hand:[-.26,1.32,.05],blade:[.02,-.03,1],edge:[0,1,0],lhand:[.12,1.02,.38],lblade:[0,1,0],ledge:[.1,0,1],torso:.05,lean:.1,pelvisY:.86,step:.1},dual:{hand:[-.26,1,.3],blade:[.1,.35,1],edge:[1,0,0],lhand:[.26,1,.26],lblade:[-.1,.35,1],ledge:[1,0,0],torso:0,lean:.15,pelvisY:.84,step:.1},archer:{hand:[-.25,.95,.12],blade:[0,-.3,1],edge:[1,0,0],lhand:[.26,1,.22],lblade:[.05,1,.2],ledge:[0,0,1],torso:0,lean:.03,pelvisY:.92,step:.05},dummy:{hand:[-.45,1.3,.05],blade:[0,-1,0],lhand:[.45,1.3,.05],torso:0,lean:0,pelvisY:.95,step:0}},Gc={r_s1:{windup:{hand:[-.38,.86,.02],blade:[-.35,-.55,-.75],edge:[0,1,0],torso:-.55,lhand:[.28,1.2,.3],pelvisY:.86,step:.1},strike:{hand:[-.08,1.2,.5],blade:[.55,.25,1],edge:[0,1,.3],torso:0,lean:.18,step:.3,pelvisY:.85},follow:{hand:[.2,1.55,.32],blade:[.55,.85,-.1],edge:[0,0,1],torso:.5,lean:.05,lhand:[.3,1.05,-.05],step:.3}},r_s2:{windup:{hand:[.12,1.62,.2],blade:[.45,.85,-.3],edge:[0,0,1],torso:.5,lean:-.05,lhand:[.32,1.05,0],step:.15},strike:{hand:[-.1,1.15,.52],blade:[-.5,-.1,1],edge:[0,1,.2],torso:0,lean:.2,step:.35,pelvisY:.84},follow:{hand:[-.38,.92,.18],blade:[-.7,-.65,.1],edge:[0,1,0],torso:-.55,lean:.25,pelvisY:.84,lhand:[.22,1.2,.35],step:.35}},r_s3:{windup:{hand:[-.5,1.18,-.05],blade:[-.85,.05,-.45],edge:[0,1,0],torso:-.8,lhand:[.25,1.2,.35],step:.2,pelvisY:.86},strike:{hand:[-.05,1.18,.55],blade:[.2,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.84},follow:{hand:[.4,1.2,.25],blade:[.95,.05,-.2],edge:[0,1,0],torso:.85,lhand:[.35,1,-.15],step:.35,pelvisY:.84}},r_s4:{windup:{hand:[-.5,1.2,-.1],blade:[-.9,.05,-.4],edge:[0,1,0],torso:-.3,lhand:[.3,1.2,.2],pelvisY:.82,step:.2},strike:{hand:[-.56,1.15,.12],blade:[-1,0,.15],edge:[0,1,0],torso:0,lean:.1,pelvisY:.8,lhand:[.4,1.25,0]},follow:{hand:[.1,1.15,.5],blade:[.6,0,1],edge:[0,1,0],torso:.2,lean:.15,pelvisY:.8,step:.3}},r_t1:{windup:{hand:[-.24,1.08,-.08],blade:[.02,.06,1],edge:[0,1,0],torso:-.35,lhand:[.22,1.2,.35],pelvisY:.87,step:.1},strike:{hand:[-.06,1.24,.56],blade:[.02,.02,1],edge:[0,1,0],torso:.15,lean:.25,step:.42,pelvisY:.84,lhand:[.28,1.08,.05]},follow:{hand:[-.06,1.24,.56],blade:[.02,.02,1],edge:[0,1,0],torso:.15,lean:.25,step:.42,pelvisY:.84,lhand:[.28,1.08,.05]}},r_t2:{windup:{hand:[-.2,1.2,0],blade:[.04,.02,1],edge:[0,1,0],torso:-.25,lhand:[.24,1.2,.35],pelvisY:.86,step:.3},strike:{hand:[-.02,1.3,.56],blade:[.05,-.02,1],edge:[0,1,0],torso:.2,lean:.25,step:.45,pelvisY:.84,lhand:[.3,1.1,0]},follow:{hand:[-.02,1.3,.56],blade:[.05,-.02,1],edge:[0,1,0],torso:.2,lean:.25,step:.45,pelvisY:.84,lhand:[.3,1.1,0]}},r_t3:{windup:{hand:[-.3,1.1,-.2],blade:[0,.05,1],edge:[0,1,0],torso:-.55,lean:-.05,lhand:[.22,1.25,.38],pelvisY:.84,step:.2},strike:{hand:[-.02,1.2,.58],blade:[0,0,1],edge:[0,1,0],torso:.25,lean:.35,step:.62,pelvisY:.76,lhand:[.3,1.05,-.1]},follow:{hand:[-.02,1.2,.58],blade:[0,0,1],edge:[0,1,0],torso:.25,lean:.35,step:.62,pelvisY:.76,lhand:[.3,1.05,-.1]}},r_st:{windup:{hand:[.05,1.45,.2],blade:[-.1,-.35,1],edge:[0,1,0],torso:.3,lhand:[.3,1.05,.05],step:.25},strike:{hand:[-.05,1.22,.56],blade:[-.05,-.1,1],edge:[0,1,0],torso:.1,lean:.25,step:.45,pelvisY:.84},follow:{hand:[-.05,1.22,.56],blade:[-.05,-.1,1],edge:[0,1,0],torso:.1,lean:.25,step:.45,pelvisY:.84}},r_ts:{windup:{hand:[.18,1.2,.45],blade:[.9,.05,.35],edge:[0,1,0],torso:.5,lhand:[.3,1.1,0],step:.35},strike:{hand:[-.1,1.18,.5],blade:[-.3,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.85},follow:{hand:[-.48,1.15,.1],blade:[-.95,0,-.2],edge:[0,1,0],torso:-.7,lean:.1,lhand:[.22,1.2,.35],step:.3}},r_hs:{windup:{hand:[-.1,1.85,-.05],blade:[0,.35,-1],edge:[1,0,0],torso:-.2,lean:-.12,lhand:[.25,1.35,.2],pelvisY:.86,step:.15},strike:{hand:[-.05,1.12,.56],blade:[0,-.3,1],edge:[1,0,0],torso:0,lean:.3,step:.5,pelvisY:.8,lhand:[.3,1,0]},follow:{hand:[-.05,.8,.45],blade:[0,-.9,.35],edge:[1,0,0],torso:0,lean:.45,step:.55,pelvisY:.76,lhand:[.32,.95,-.05]}},r_ht:{windup:{hand:[-.32,1.1,-.3],blade:[0,.08,1],edge:[0,1,0],torso:-.7,lean:-.05,lhand:[.2,1.25,.4],pelvisY:.82,step:.25},strike:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],torso:.3,lean:.4,step:.7,pelvisY:.74,lhand:[.32,1.02,-.12]},follow:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],torso:.3,lean:.4,step:.7,pelvisY:.74,lhand:[.32,1.02,-.12]}},r_bash:{windup:{lhand:[.28,1.15,.05],lblade:[.3,0,1],torso:.45,hand:[-.3,1.05,.05],pelvisY:.87,step:.1},strike:{lhand:[.12,1.3,.62],lblade:[0,.15,1],torso:-.3,lean:.2,step:.4,pelvisY:.84,hand:[-.34,1.02,-.05]},follow:{lhand:[.12,1.3,.6],lblade:[0,.15,1],torso:-.3,lean:.2,step:.4,pelvisY:.84,hand:[-.34,1.02,-.05]}},r_gale:{windup:{hand:[-.45,1,-.2],blade:[-.6,-.2,-.8],edge:[0,1,0],torso:-.7,lean:.35,pelvisY:.78,step:.4},strike:{hand:[0,1.15,.55],blade:[.2,0,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.5},follow:{hand:[.42,1.15,.2],blade:[.95,0,-.25],edge:[0,1,0],torso:.85,lean:.25,pelvisY:.8,step:.5}}},Es={overhead:{windup:{hand:[-.05,1.75,0],blade:[0,.6,-.8],edge:[1,0,0],torso:-.05,lean:-.1,step:.05,pelvisY:.9},strike:{hand:[0,1.25,.5],blade:[0,.1,1],edge:[1,0,0],lean:.25,step:.35,pelvisY:.84},follow:{hand:[.05,.85,.42],blade:[.05,-.75,.6],edge:[1,0,0],lean:.4,step:.4,pelvisY:.8}},rising:{windup:{hand:[-.35,.9,.1],blade:[-.3,-.6,-.6],edge:[0,1,0],torso:-.5,pelvisY:.86,step:.1},strike:{hand:[-.05,1.2,.5],blade:[.4,.3,1],edge:[0,1,.3],torso:0,lean:.2,step:.3,pelvisY:.85},follow:{hand:[.2,1.55,.25],blade:[.4,.9,-.2],edge:[0,0,1],torso:.5,lean:.05,step:.3}},thrust:{windup:{hand:[-.2,1.1,-.15],blade:[0,.05,1],edge:[0,1,0],torso:-.3,pelvisY:.86,step:.1},strike:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],lean:.3,step:.5,pelvisY:.8,torso:.1},follow:{hand:[0,1.2,.6],blade:[0,0,1],edge:[0,1,0],lean:.3,step:.5,pelvisY:.8,torso:.1}},horizontal:{windup:{hand:[-.5,1.2,-.1],blade:[-.9,.1,-.3],edge:[0,1,0],torso:-.9,pelvisY:.86,step:.15},strike:{hand:[0,1.15,.55],blade:[.1,0,1],edge:[0,1,0],torso:0,lean:.15,step:.35,pelvisY:.82},follow:{hand:[.45,1.15,.15],blade:[.9,0,-.3],edge:[0,1,0],torso:.9,lean:.1,step:.35,pelvisY:.82}},crush:{windup:{hand:[0,1.95,-.1],blade:[0,.3,-1],edge:[1,0,0],torso:0,lean:-.2,pelvisY:.95,step:.1},strike:{hand:[0,1.05,.58],blade:[0,-.3,1],edge:[1,0,0],lean:.35,step:.55,pelvisY:.76},follow:{hand:[0,.7,.5],blade:[0,-.9,.3],edge:[1,0,0],lean:.5,step:.55,pelvisY:.7}},feint:{windup:{hand:[-.05,1.55,.1],blade:[0,.8,-.4],edge:[1,0,0],lean:.12,step:.2,pelvisY:.86},strike:{hand:[-.05,1.5,.15],blade:[0,.8,-.3],edge:[1,0,0],lean:.1,step:.15,pelvisY:.87},follow:{hand:[-.05,1.2,.3],blade:[0,.7,.6],edge:[1,0,0],step:.05}}},cu={thrust:{windup:{hand:[-.2,1.05,-.35],blade:[.03,.08,1],edge:[0,1,0],torso:-.45,pelvisY:.86,step:.15},strike:{hand:[-.05,1.15,.45],blade:[0,0,1],edge:[0,1,0],torso:-.05,lean:.25,step:.45,pelvisY:.82},follow:{hand:[-.05,1.15,.45],blade:[0,0,1],edge:[0,1,0],torso:-.05,lean:.25,step:.45,pelvisY:.82}},sweep:{windup:{hand:[-.3,1,.1],blade:[-1,-.1,.45],edge:[0,1,0],torso:-1,pelvisY:.82,step:.2},strike:{hand:[-.1,.95,.35],blade:[0,-.15,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.76,step:.35},follow:{hand:[.15,.95,.2],blade:[1,-.1,.25],edge:[0,1,0],torso:.95,lean:.2,pelvisY:.76,step:.35}}},hu={stab:{windup:{hand:[-.28,1.35,-.15],blade:[.02,-.04,1],torso:-.1,lean:.05,step:.1},strike:{hand:[-.16,1.3,.55],blade:[.03,-.05,1],torso:.1,lean:.2,step:.35,pelvisY:.83},follow:{hand:[-.16,1.3,.55],blade:[.03,-.05,1],torso:.1,lean:.2,step:.35,pelvisY:.83}},charge:{windup:{lhand:[.12,1.05,.3],hand:[-.3,1.3,-.05],lean:-.05,pelvisY:.84,step:.05},strike:{lhand:[.05,1.1,.55],hand:[-.3,1.25,.1],lean:.4,pelvisY:.78,step:.5},follow:{lhand:[.05,1.1,.55],hand:[-.3,1.25,.1],lean:.4,pelvisY:.78,step:.5}}},Ya={right:{windup:{hand:[-.45,1.3,0],blade:[-.7,.5,-.4],edge:[0,1,0],torso:-.6,lhand:[.25,1.05,.3],pelvisY:.82,step:.15},strike:{hand:[0,1.1,.5],blade:[.3,-.1,1],edge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.35},follow:{hand:[.3,.95,.25],blade:[.8,-.4,.1],edge:[0,1,0],torso:.5,lean:.25,pelvisY:.8,step:.35}},left:{windup:{lhand:[.45,1.3,0],lblade:[.7,.5,-.4],ledge:[0,1,0],torso:.6,hand:[-.28,1.05,.3],pelvisY:.82,step:.2},strike:{lhand:[0,1.1,.5],lblade:[-.3,-.1,1],ledge:[0,1,0],torso:0,lean:.25,pelvisY:.8,step:.35},follow:{lhand:[-.3,.95,.25],lblade:[-.8,-.4,.1],ledge:[0,1,0],torso:-.5,lean:.25,pelvisY:.8,step:.35}},cross:{windup:{hand:[-.3,1.55,.05],blade:[-.4,.8,-.3],lhand:[.3,1.55,.05],lblade:[.4,.8,-.3],lean:-.1,pelvisY:.86,step:.1},strike:{hand:[.1,1.1,.5],blade:[.6,-.4,.7],lhand:[-.1,1.1,.5],lblade:[-.6,-.4,.7],lean:.3,pelvisY:.8,step:.4},follow:{hand:[.25,.9,.35],blade:[.7,-.7,.2],lhand:[-.25,.9,.35],lblade:[-.7,-.7,.2],lean:.35,pelvisY:.78,step:.4}},leap:{windup:{hand:[-.25,1.75,-.05],blade:[-.2,.7,-.6],lhand:[.25,1.75,-.05],lblade:[.2,.7,-.6],lean:-.15,pelvisY:1.35,step:.3},strike:{hand:[-.1,1.05,.5],blade:[.1,-.5,.9],lhand:[.1,1.05,.5],lblade:[-.1,-.5,.9],lean:.4,pelvisY:.78,step:.45},follow:{hand:[-.1,.85,.45],blade:[.1,-.85,.4],lhand:[.1,.85,.45],lblade:[-.1,-.85,.4],lean:.45,pelvisY:.72,step:.45}},throw:{windup:{hand:[-.32,1.55,-.2],blade:[0,1,-.2],torso:-.6,lean:-.05,step:.15},strike:{hand:[-.08,1.4,.52],blade:[0,.3,1],torso:.25,lean:.2,step:.3},follow:{hand:[.05,1.2,.45],blade:[0,-.2,1],torso:.3,lean:.2,step:.3}}},ay={windup:{hand:[-.4,1.25,0],blade:[-.6,.6,-.3],torso:-.5,step:.1},strike:{hand:[0,1.1,.5],blade:[.4,-.1,1],torso:.1,lean:.2,step:.3},follow:{hand:[.25,1,.3],blade:[.8,-.3,.2],torso:.4,lean:.2,step:.3}};function io(i,t){if(i==="ranger")return Gc[t.id]??null;const e=t.id;return i==="katana"||i==="nodachi"?t.feint?Es.feint:e==="ro_cut1"||e==="ar_cleave"||e==="bo_c1"?Es.overhead:e==="ro_cut2"||e==="bo_c2"?Es.rising:e==="ar_sweep"?Es.horizontal:e==="ar_crush"||e==="bo_red"?Es.crush:Es.thrust:i==="yari"?e==="sp_sweep"?cu.sweep:cu.thrust:i==="shield"?e==="sh_charge"?hu.charge:hu.stab:i==="dual"?e==="du_f1"?Ya.right:e==="du_f2"?Ya.left:e==="du_f3"?Ya.cross:e==="du_leap"?Ya.leap:Ya.throw:i==="archer"?ay:null}const Ln=i=>i<0?0:i>1?1:i,Xt=i=>(i=Ln(i),i*i*(3-2*i)),wn=i=>(i=Ln(i),1-(1-i)*(1-i)*(1-i)),ry=i=>(i=Ln(i),i*i),so=(i,t)=>Math.pow(Ln(i),t),ca=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},ao=new R(-.02,1.3,.04);function oy(i){return i.type==="thrust"?{arc:!1,pow:i.heavy?2.6:2.2}:i.type==="blunt"?{arc:!1,pow:1.8}:{arc:!0,pow:i.heavy||i.finale?2.1:1.7}}const ce={guardRanger:{hand:[-.3,1.02,.08],blade:[.1,.7,.7],lhand:[.1,1.32,.42],lblade:[.05,.08,1],torso:.1,lean:.1,pelvisY:.86,step:.12},parryKatana:{hand:[-.16,1.5,.3],blade:[.3,.12,1],edge:[0,1,0],torso:-.25,lean:.08,pelvisY:.84,step:.25,head:.2},guardKatana:{hand:[-.12,1.32,.38],blade:[.95,.35,.15],edge:[0,1,0],lean:-.05,pelvisY:.86,step:.1},deflectUp:{hand:[-.3,1.05,.1],blade:[.1,.6,.7],lhand:[.22,1.42,.52],lblade:[.55,.35,1],torso:-.15,lean:-.02,pelvisY:.86,step:.15},flowR:{hand:[-.36,1.08,-.1],blade:[-.2,-.2,-1],lhand:[.3,1.32,.38],lblade:[.8,.25,.7],torso:.5,lean:.2,pelvisY:.8,step:.2,roll:-.12},flowL:{hand:[-.36,1.08,-.1],blade:[-.2,-.2,-1],lhand:[.3,1.32,.38],lblade:[-.4,.25,.7],torso:-.5,lean:.2,pelvisY:.8,step:.2,roll:.12},recoil:{hand:[-.32,1.72,-.12],blade:[-.2,.8,-.6],lhand:[.35,1.2,.05],lean:-.32,pelvisY:.84,headPitch:-.2,torso:-.3,step:-.05},guardbreak:{hand:[-.5,1.25,-.05],blade:[-.8,.3,-.3],lhand:[.5,1.3,-.05],lblade:[.8,.5,.3],lean:-.35,pelvisY:.8,headPitch:-.3,step:-.05},broken:{hand:[-.3,.55,.32],blade:[-.15,-.95,.3],lhand:[.3,.7,.25],lblade:[.2,-.5,1],lean:.55,pelvisY:.62,headPitch:.45,step:.25,torso:.1},overextended:{hand:[-.1,.85,.55],blade:[.2,-.7,.7],lhand:[.25,.9,.45],lean:.62,pelvisY:.74,step:.5,headPitch:.25},fear:{hand:[-.2,1.42,.28],blade:[.2,.9,.3],lhand:[.22,1.35,.3],lean:-.22,pelvisY:.82,headPitch:-.1,step:-.1},heal:{hand:[-.25,.9,.1],blade:[-.1,-.9,.3],lhand:[.05,1.3,.2],pelvisY:.66,lean:.25,headPitch:.4,step:.2},standoffPlayer:{hand:[-.32,.95,-.12],blade:[-.3,-.35,-.9],lhand:[.2,1.15,.36],lblade:[.2,.1,1],torso:-.35,head:.3,pelvisY:.82,lean:.12,step:.35},standoffFeint:{hand:[-.05,1.5,.2],blade:[0,.8,-.3],lean:.2,step:.25,pelvisY:.84},standoffCharge:{hand:[-.1,1.7,0],blade:[0,.6,-.8],lean:.35,pelvisY:.84,step:.35},issenStrike:{hand:[-.1,1.1,.5],blade:[.2,-.1,1],edge:[0,1,0],torso:.1,lean:.35,pelvisY:.8,step:.45},issenZanshin:{hand:[-.5,1.12,-.02],blade:[-.82,-.15,-.55],edge:[0,1,0],torso:-.7,lean:.22,pelvisY:.76,step:.6,lhand:[.3,1.1,.3],head:.4},runRanger:{hand:[-.3,.98,-.05],blade:[-.15,-.25,-1],lhand:[.26,1.05,.2]},archerDraw:{lhand:[.08,1.48,.55],lblade:[.1,1,.1],ledge:[0,0,1],torso:.5,pelvisY:.9,head:-.4,step:.12},stunned:{hand:[-.3,.7,.3],blade:[-.1,-.9,.3],lhand:[.3,.8,.25],lean:.35,pelvisY:.74,headPitch:.3,step:.2},slashHit:{hand:[-.42,.95,.12],blade:[-.3,-.9,.2],lhand:[.4,1.25,.02],torso:.55,roll:.3,lean:.12,pelvisY:.72,head:.4,headPitch:-.25,step:.1},slashKneel:{hand:[-.45,.5,.15],blade:[-.2,-1,.1],lhand:[.2,.75,.3],torso:.45,roll:.35,lean:.35,pelvisY:.46,headPitch:.4,head:.3,step:.12},impaled:{hand:[-.12,1.02,.3],blade:[.1,-.8,.5],lhand:[.1,1.05,.32],lblade:[0,-.5,1],lean:.5,pelvisY:.8,headPitch:.5,step:.05,torso:.05},pulledOff:{hand:[-.2,.95,.2],blade:[0,-1,.2],lhand:[.12,1,.22],lean:-.18,pelvisY:.78,headPitch:-.3,step:-.15},thrustKneel:{hand:[-.3,.6,.2],blade:[0,-1,.2],lhand:[.15,.85,.25],lean:.15,pelvisY:.5,headPitch:.3,step:0},arched:{hand:[-.5,1.2,.1],blade:[-.6,.4,.4],lhand:[.5,1.25,.1],lean:-.35,pelvisY:.8,headPitch:-.45,step:.35},kneel:{hand:[-.3,.6,.35],blade:[0,-1,.2],lhand:[.3,.6,.35],lean:.45,pelvisY:.5,headPitch:.3,step:.2},issenKneel:{hand:[-.2,.5,.3],blade:[0,-1,.2],lhand:[.2,.55,.3],pelvisY:.45,lean:.7,headPitch:.5,step:.2},down:{hand:[-.45,.4,.2],blade:[-.5,-.2,.8],lhand:[.45,.45,.1],lean:.1,pelvisY:.2,headPitch:.1,step:.1}};function ly(i){const t=Gi[i],e={hand:[-.42,1.05,.28],blade:[-.9,-.35,.3],edge:[0,1,0],torso:-.4,lean:.1,pelvisY:.84,step:.3};if(i==="slash"){const s={hand:[-.3,.95,-.1],blade:[-.2,-.3,-1],lean:.35,pelvisY:.82,step:.4},a={hand:[.25,.78,.4],blade:[.5,-.85,.2],edge:[1,0,0],torso:.35,lean:.45,pelvisY:.72,step:.6,lhand:[.35,1,-.1]};return[{t:t.dash,key:s},{t:t.windupEnd,key:{hand:[-.1,1.9,-.05],blade:[0,.3,-1],edge:[1,0,0],torso:-.25,lean:-.15,lhand:[.3,1.4,.2],pelvisY:.9,step:.25}},{t:t.release,key:{hand:[-.1,1.92,-.04],blade:[0,.4,-1],edge:[1,0,0],torso:-.32,lean:-.2,lhand:[.3,1.42,.2],pelvisY:.9,step:.25}},{t:t.contact,ease:"in",key:{hand:[-.05,1.15,.55],blade:[.2,-.3,1],edge:[1,0,0],torso:0,lean:.3,pelvisY:.8,step:.5}},{t:t.followEnd,ease:"out",key:a},{t:t.holdEnd,key:{...a,lean:.42,pelvisY:.73}},{t:t.pull,key:e},{t:t.dur,key:{}}]}if(i==="thrust"){const s={hand:[-.3,.95,-.1],blade:[-.2,-.3,-1],lean:.35,pelvisY:.82,step:.4};return[{t:t.dash,key:s},{t:t.windupEnd,key:{hand:[-.3,1.12,-.3],blade:[0,.05,1],edge:[0,1,0],torso:-.6,lhand:[.25,1.28,.45],lblade:[.1,.2,1],pelvisY:.84,step:.3}},{t:t.release,key:{hand:[-.3,1.12,-.35],blade:[0,.05,1],edge:[0,1,0],torso:-.66,lhand:[.25,1.28,.46],lblade:[.1,.2,1],pelvisY:.83,step:.3}},{t:t.contact,ease:"in",key:{hand:[0,1.25,.55],blade:[0,.02,1],edge:[0,1,0],torso:.2,lean:.3,pelvisY:.8,step:.6,lhand:[.3,1.1,0]}},{t:t.followEnd,ease:"out",key:{hand:[.01,1.25,.6],blade:[.02,.02,1],edge:[0,1,0],torso:.24,lean:.34,pelvisY:.79,step:.62,lhand:[.3,1.1,0]}},{t:t.holdEnd,key:{hand:[.02,1.27,.57],blade:[.05,.1,1],edge:[.3,1,0],torso:.25,lean:.3,pelvisY:.8,step:.6,lhand:[.3,1.1,0]}},{t:t.pull,ease:"out",key:{hand:[-.25,1.15,.12],blade:[0,.1,1],edge:[0,1,0],torso:-.2,lean:.05,pelvisY:.84,step:.35,lhand:[.15,1.3,.62],lblade:[0,.2,1]}},{t:t.pull+7,key:e},{t:t.dur,key:{}}]}const n={hand:[.15,.95,.45],blade:[.6,-.6,.4],edge:[1,0,0],torso:.4,lean:.4,pelvisY:.76,step:.55};return[{t:t.dash,key:{hand:[-.3,1.2,0],blade:[-.3,.5,-.8],lean:.2,pelvisY:.84,step:.3}},{t:t.windupEnd,key:{hand:[-.3,1.62,.05],blade:[-.3,.8,-.5],edge:[1,0,0],torso:-.45,lean:-.05,pelvisY:.86,step:.3}},{t:t.release,key:{hand:[-.3,1.66,.03],blade:[-.3,.85,-.5],edge:[1,0,0],torso:-.5,lean:-.07,pelvisY:.86,step:.3}},{t:t.contact,ease:"in",key:{hand:[-.02,1.22,.52],blade:[.35,-.25,1],edge:[1,0,0],torso:.05,lean:.28,pelvisY:.8,step:.45}},{t:t.followEnd,ease:"out",key:n},{t:t.holdEnd,key:{...n,lean:.38,pelvisY:.77}},{t:t.pull,key:{...e,lean:.12,step:.35}},{t:t.dur,key:{}}]}const En=Rn(),cy=Rn(),hy=Rn(),Xa=new R,ro=new R,du=new R,uu=new R,dy=new R(.05,1.48,.46),uy=new R(-.08,1.55,.02),fu=new R(-.45,1.3,0),pu=new R(.45,1.25,0),fy=new R(-.1,1.02,.26),py=new R(.1,1.05,.26),my={px:0,pz:-1,lat:0,type:"slash",heavy:!1,amp:1},mu={id:"r_gale_seg",name:"",type:"slash",startup:Wn.contact,active:2,recovery:Wn.seg-Wn.contact-2,damage:0,posture:0,shape:{kind:"arc",range:0,halfAngle:0},lunge:0,chainFrom:0,cancelFrom:0},gu=new Map;function pa(i){let t=gu.get(i.id);return t||(t=n1(i),(i.projectile||i.feint)&&(t={...t,release:Math.max(1,t.contact-3),windupEnd:Math.max(1,Math.min(t.windupEnd,t.contact-5))}),gu.set(i.id,t)),t}function bo(i,t){return Math.max(0,i.act.t-1+t.alpha)}const Ol=i=>i.startup-3,vu=i=>i.active+12;class gy{constructor(t){this.kind0=t,this.family=iy[t],su(Rn(),sy[this.family],this.stance),this.fixHands(this.stance),Te(this.stance,this.pose),Te(this.stance,this.animPose),this.prevHand.copy(this.stance.handR)}kind0;pose=Rn();animPose=Rn();target=Rn();from=Rn();entry=Rn();stance=Rn();frozen=Rn();corpse=Rn();blend=1;blendDur=.1;serial=-1;kind="";prevKind="";galeSeg=-1;stepPlanned=!1;victimKind="slash";victimPerf=-1;victimT=0;deadClock=0;dtSim=0;atkMove=null;atkT=0;atkTick=0;atkSerial=-1;replMove=null;replT=0;replEndTick=0;replSerial=-1;replEntry=Rn();replEntryVel=new R;appr={move:null,t:0,serial:-1};approachOn=!1;aimSink=0;bobK=1;perfX=0;perfZ=1;perfLatched=!1;fallX=0;fallZ=1;prevHand=new R;handVel=new R;entryVel=new R;hit=null;hitAge=99;hitSerial=-1;cache=new Map;finKeys=new Map;planter=new ny;family;fixHands(t){const e=this.family;e==="katana"?t.handL.copy(t.handR).addScaledVector(t.bladeR,-.2):e==="nodachi"?t.handL.copy(t.handR).addScaledVector(t.bladeR,-.25):e==="yari"&&(t.handL.copy(t.handR).addScaledVector(t.bladeR,.55),t.bladeL.copy(t.bladeR))}kp(t){let e=this.cache.get(t);return e||(e=su(this.stance,t,Rn()),this.fixHands(e),this.cache.set(t,e)),e}sweepSign(t){if(t.type!=="slash")return 0;const e=io(this.family,t);if(!e||!e.follow.hand||!e.strike.hand)return 0;const n=e.follow.hand[0]-e.strike.hand[0];return Math.abs(n)<.05?0:Math.sign(n)}onHit(t,e,n,s,a,r){const o=Math.hypot(e,n)||1,l=Math.sin(t.serial*12.9898+t.id*78.233)*43758.5453,c=.85+(l-Math.floor(l))*.3;this.hit={px:e/o,pz:n/o,lat:s,type:a,heavy:r,amp:c},this.hitAge=0,this.hitSerial=t.serial}get rawPose(){return this.animPose}get landings(){return this.planter.landings}update(t,e,n,s,a,r){const o=t.act,l=Math.max(0,o.t-1+n);(t.serial!==this.serial||o.kind!==this.kind)&&this.onActionStart(t,e),o.kind==="attack"&&(this.atkMove=o.move??null,this.atkT=o.t,this.atkTick=e.tick,this.atkSerial=t.serial);const c=e.displayTick;if(this.approachOn=this.replMove!==null&&o.kind!=="attack"&&c<=this.replEndTick+1e-9,this.approachOn&&(this.appr.move=this.replMove,this.appr.t=this.replT+(c-this.replEndTick),this.appr.serial=this.replSerial),o.kind==="gale"){const A=Math.floor(Math.max(0,l-1)/Wn.seg);A!==this.galeSeg&&(this.galeSeg=A,this.snapshot(this.entry),this.entryVel.copy(this.handVel))}if(this.hitAge+=s,this.dtSim=s,this.approachOn){const A=this.replMove;this.attackPose(io(this.family,A),A,pa(A),this.appr.t,this.replEntry,this.target,this.replEntryVel)}else this.actionPose(t,e,l,this.target);const h=(t.pos.x-t.prevPos.x)*60,d=(t.pos.z-t.prevPos.z)*60,u=Math.hypot(h,d),f=Math.cos(t.yaw),g=Math.sin(t.yaw),x=u>.001?(h*f-d*g)/u:0,m=u>.001?(h*g+d*f)/u:0;this.locomotion(t,this.target,u,x,m),this.flinch(t,this.target),this.approachOn||(this.blend+=s);const p=this.blendDur<=0||this.approachOn?1:Xt(this.blend/this.blendDur);p>=1?Te(this.target,this.animPose):Re(this.from,this.target,p,this.animPose),this.fixHands(this.animPose),s>0&&(Xa.subVectors(this.animPose.handR,this.prevHand).multiplyScalar(1/s),this.handVel.lerp(Xa,1-Math.exp(-s*40)),this.prevHand.copy(this.animPose.handR)),Te(this.animPose,this.pose),this.pose.footYawL+=this.pose.pelvisYaw*.8,this.pose.footYawR+=this.pose.pelvisYaw*.8,du.set(h,0,d);const y=this.feetMode(t,this.pose,l);return this.planter.update(this.pose,a,r+this.pose.bodyYaw,t.size,du,s,y,this.stepParams(t,l,u,x,m),1),this.pose}prevKindIs(t){return this.prevKind===t}settle(t,e,n,s){return Re(this.entry,t,Xt(e/Math.max(1,n)),s)}snapshot(t){return Te(this.animPose,t),t.bodyYaw=ca(t.bodyYaw),t.bodyPitch=ca(t.bodyPitch),t.bodyRoll=ca(t.bodyRoll),t}onActionStart(t,e){const n=t.act;this.prevKind=this.kind,this.kind=n.kind,this.serial=t.serial,this.galeSeg=-1,this.stepPlanned=!1,this.snapshot(this.from);const s=this.prevKindIs("attack")?this.atkMove:null,a=s&&!s.projectile?io(this.family,s):null;if(this.replMove=null,s&&a){const o=pa(s),l=t.replaced&&t.replaced.serial===this.atkSerial?t.replaced:null,c=Math.min(o.end,l?l.t:this.atkT+Math.max(0,e.tick-this.atkTick));Te(this.entry,this.replEntry),this.replEntryVel.copy(this.entryVel),this.attackPose(a,s,o,c,this.replEntry,this.from,this.replEntryVel),this.fixHands(this.from),this.from.bodyYaw=s.id==="r_s4"?ca(this.from.bodyYaw):0,l&&(this.replMove=s,this.replT=c,this.replEndTick=this.atkTick+(l.t-this.atkT),this.replSerial=this.atkSerial)}Te(this.from,this.entry),this.entryVel.copy(this.handVel);const r=3.5;if(this.entryVel.length()>r&&this.entryVel.setLength(r),n.kind==="finished"&&(n.finisher==="issen"||n.finisher==="hajiki"||n.finisher==="standoff")&&Te(this.from,this.frozen),n.kind==="finished"&&(this.victimKind=n.finisher??"slash",this.victimPerf=n.targetId??-1,this.victimT=0,this.perfLatched=!1),n.kind==="dead"){Te(this.from,this.corpse),this.deadClock=0;const o=this.hit&&this.hitAge<.5?this.hit:null;this.fallX=o?o.px:0,this.fallZ=o?o.pz:1}this.animPose.bodyYaw=this.from.bodyYaw,this.blend=0,this.blendDur=_y(n.kind)}swingPose(t,e,n,s,a,r,o=!1,l=this.entryVel){const c=this.kp(t.windup),h=this.kp(t.strike),d=this.kp(t.follow),u=oy(e),f=u.arc?ao:void 0;if(o)return Te(c,r);const g=hy;if(n.release-n.windupEnd>=1?(Re(h,c,1.06,g),g.torsoYaw=c.torsoYaw+(c.torsoYaw-h.torsoYaw)*.08):Te(c,g),s<n.windupEnd){const p=s/n.windupEnd;ss(a,c,Xt(p*1.35),Xt(p*1.12),Xt(p),r,f);const y=p*(1-p)*(1-p)*(n.windupEnd/60);return r.handR.addScaledVector(l,y),r}if(s<n.release){const p=(s-n.windupEnd)/Math.max(.001,n.release-n.windupEnd);return Re(c,g,Xt(p),r)}if(s<n.contact){const p=(s-n.release)/Math.max(.001,n.contact-n.release);return ss(g,h,Xt(p*1.5),so(p,u.pow*.6),so(p,u.pow),r,f)}if(s<n.followEnd){const p=(s-n.contact)/Math.max(.001,n.followEnd-n.contact);return ss(h,d,Xt(p*1.2),wn(p),wn(p),r,f)}const x=(s-n.followEnd)/Math.max(.001,n.end-n.followEnd),m=Ln((x-.2)/.8);return ss(d,this.stance,Xt(m*1.15),Xt(m),Xt(m),r,f)}attackPose(t,e,n,s,a,r,o=this.entryVel){if(this.swingPose(t,e,n,s,a,r,!1,o),e.id==="r_s4"&&(r.bodyYaw=Xt((s-Ol(e))/vu(e))*Math.PI*2),e.id==="du_leap"){const l=Ln(s/(e.startup+e.active));r.pelvis.y+=Math.sin(l*Math.PI)*.55}return r}get approach(){return this.approachOn?this.appr:null}actionPose(t,e,n,s){const a=t.act,r=this.family;Te(this.stance,s);const o=(l,c)=>Math.sin((t.age+n)*c+t.id)*l;switch(a.kind){case"attack":{const l=a.move,c=io(r,l);if(!c)return s;if(r==="archer"&&l.projectile)return this.archerShot(n,l,s);const h=pa(l);if(this.attackPose(c,l,h,n,this.entry,s),!this.stepPlanned&&!l.projectile&&!l.feint&&l.id!=="du_leap"&&l.id!=="r_s4"&&(a.lunge??0)>.3){const d=Math.min(h.contact-1,l.heavy||l.finale?12:9);n>=h.contact-d&&(this.stepPlanned=!0,this.planter.planStep(0,(h.contact-n)/60,.07))}return s}case"charge":{const l=Gc[t.act.button==="thrust"?"r_ht":"r_hs"];Te(this.kp(l.windup),s);const c=Math.min(1,n/q.chargeMax);return s.pelvis.y-=c*.05,s.handR.x+=o(.008*c,2.1),s.handR.y+=o(.008*c,2.7),s}case"guard":case"blockstun":{if(r==="ranger"?Te(this.kp(ce.guardRanger),s):(r==="katana"||r==="nodachi")&&a.value===1?Te(this.kp(ce.parryKatana),s):(r==="katana"||r==="nodachi")&&Te(this.kp(ce.guardKatana),s),a.kind==="blockstun"){const l=1-Ln(n/10);s.lean-=.12*l,s.pelvis.z-=.05*l}return s}case"deflect":{const l=wn(n/4),c=Xt((n-6)/8);return this.settle(this.kp(ce.guardRanger),n,6,En),Re(En,this.kp(ce.deflectUp),l*(1-c),s)}case"flow":case"flowStep":{const l=a.kind==="flow"?wn(n/6):Xt(n/6);return this.settle(this.stance,n,6,En),Re(En,this.kp((a.side??1)>0?ce.flowR:ce.flowL),l,s)}case"dodge":{const l=a.value===1,c=a.dir??{x:0,z:-1},h=Math.cos(t.yaw),d=Math.sin(t.yaw),u=c.x*h-c.z*d,f=c.x*d+c.z*h,g=n/a.dur,x=Math.sin(Math.min(1,g*1.2)*Math.PI);if(s.pelvis.y=l?.9-x*.4:.9-x*.14,s.lean=.08+f*.25*x,s.roll=-u*.3*x,s.footL.z+=f*.2*x,s.footR.z-=f*.2*x,s.footL.x+=u*.12*x,s.footR.x+=u*.12*x,l){const m=Xt(g/.8)*Math.PI*2;Math.abs(f)>=Math.abs(u)?s.bodyPitch=m*Math.sign(f||1):s.bodyRoll=-m*Math.sign(u),s.handR.set(-.2,1.1,.2),s.handL.set(.2,1.1,.2)}return s}case"hitstun":case"stagger":return this.hitPose(t,n,s);case"recoil":case"guardbreak":{const l=Math.sin(Math.min(1,n/7)*Math.PI*.5)*(1-Xt((n-a.dur*.55)/(a.dur*.45)));return this.settle(this.stance,n,a.dur*.6,En),Re(En,this.kp(a.kind==="recoil"?ce.recoil:ce.guardbreak),l,s)}case"broken":{const l=Xt(n/12)*(1-Xt((n-a.dur+14)/14));return this.settle(this.stance,n,12,En),Re(En,this.kp(ce.broken),l,s),s.pelvis.x+=o(.02,.09)*l,s.lean+=o(.04,.07)*l,s}case"overextended":{const l=wn(n/10)*(1-Xt((n-a.dur+16)/16));return this.settle(this.stance,n,10,En),Re(En,this.kp(ce.overextended),l,s)}case"fear":return Te(this.kp(ce.fear),s),s.handR.x+=o(.02,1.3),s.pelvis.x+=o(.01,1.7),s;case"evade":{const l=a.side??1,c=Math.sin(Math.min(1,n/a.dur)*Math.PI);return this.settle(this.stance,n,a.dur*.5,s),s.roll=-l*.35*c,s.pelvis.y-=.12*c,s.lean-=.1*c,s}case"aim":case"quickshot":return this.aimPose(t,e,n,s);case"heal":{const l=Xt(n/10)*(1-Xt((n-a.dur+8)/8));return Re(this.stance,this.kp(ce.heal),l,s)}case"standoff":return this.standoffPose(t,n,s);case"issen":return this.issenPose(n,a.dur,s);case"finisher":return this.finisherPose(t,e,n,s);case"gale":{const l=Uc(n);return this.swingPose(Gc.r_gale,mu,pa(mu),l,this.entry,s)}case"finished":return this.victimT=n,this.victimPose(t,e,n,this.victimKind,this.victimPerf,s);case"dead":return this.deadPose(t,e,s);default:return s}}hitPose(t,e,n){const s=t.act,a=s.kind==="stagger";Re(this.entry,this.stance,Xt(e/(s.dur*.7)),n);const r=this.hit&&this.hitSerial===t.serial?this.hit:my,l=Math.sin(Math.min(1,e/(a?6:4))*Math.PI*.5)*(1-Xt((e-s.dur*.45)/(s.dur*.55))),c=(a?1.35:1)*r.amp*(r.heavy&&!a?1.15:1);return n.lean+=r.pz*.28*c*l,n.roll+=-r.px*.22*c*l,n.pelvis.x+=r.px*.05*c*l,n.pelvis.z+=r.pz*.05*c*l,n.pelvis.y-=(a?.1:.05)*l,r.type==="thrust"?(n.lean+=.42*c*l,n.headPitch+=.35*l,n.handR.lerp(fy,.55*l),n.handL.lerp(py,.5*l)):r.type==="blunt"?(n.headPitch-=.45*l,n.lean+=r.pz*.15*l,n.handR.lerp(fu,.4*l),n.handL.lerp(pu,.4*l)):(n.torsoYaw+=r.lat*.5*c*l,n.headYaw+=r.lat*.35*l,n.headPitch-=.25*l,n.handR.lerp(fu,(r.lat>0?.35:.65)*l),n.handL.lerp(pu,(r.lat>0?.65:.35)*l)),this.fixHands(n),n}flinch(t,e){const n=this.hit;if(!n||this.hitAge>.4)return;const s=t.act.kind;if(s==="hitstun"||s==="stagger"||s==="dead"||s==="finished")return;const a=Math.sin(Math.min(1,this.hitAge/.05)*Math.PI*.5)*Math.exp(-this.hitAge/.1)*(n.heavy?.6:.4)*n.amp;e.lean+=n.pz*.25*a,e.roll-=n.px*.2*a,e.torsoYaw+=n.lat*.4*a,e.headPitch-=.3*a,e.pelvis.x+=n.px*.03*a,e.pelvis.z+=n.pz*.03*a}downPose(t,e,n){const s=Math.hypot(t,e)||1;return Te(this.kp(ce.down),n),n.bodyPitch=1.45*(e/s),n.bodyRoll=-1.45*(t/s),n.handR.z+=e/s*.2,n.handL.z+=e/s*.2,n}collapse(t,e,n,s,a,r,o){if(a<r){const h=a/r;return ss(t,e,wn(h*1.2),wn(h),Xt(h),o)}const l=this.downPose(n,s,cy),c=ry((a-r)/(1-r));return Re(e,l,c,o)}victimPose(t,e,n,s,a,r){const o=t.hp>0,l=s==="issen"||s==="hajiki"||s==="standoff"?di.victimFreeze:Gi[s==="thrust"||s==="flow"?s:"slash"].contact;if(!this.perfLatched){const p=e.get(a);if(p){const y=p.pos.x-t.pos.x,A=p.pos.z-t.pos.z,b=Math.hypot(y,A)||1,T=Math.cos(t.yaw),M=Math.sin(t.yaw);this.perfX=(y*T-A*M)/b,this.perfZ=(y*M+A*T)/b}n>=l&&(this.perfLatched=!0)}const c=this.perfX,h=this.perfZ;if(s==="issen"||s==="hajiki"||s==="standoff"){const p=di;if(n<p.victimFreeze)return Te(this.frozen,r);const y=(n-p.victimFreeze)/(p.victimDown-p.victimFreeze);if(o){const A=Math.sin(Ln(y*1.5)*Math.PI);return Re(this.frozen,this.stance,Xt(y),r),r.lean-=.3*A,r.headPitch-=.3*A,r}return this.collapse(this.frozen,this.kp(ce.issenKneel),0,1,Ln(y),.45,r)}const d=Gi[s==="thrust"||s==="flow"?s:"slash"];if(n<d.contact)return Re(this.entry,this.kp(s==="flow"?ce.overextended:ce.stunned),Xt(n/8),r);const u=this.kp(s==="flow"?ce.overextended:ce.stunned);if(s==="thrust"){const p=this.kp(ce.impaled);if(n<d.pull)return Re(u,p,wn((n-d.contact)/4),r),r.handR.y+=Math.sin(n*1.7)*.01,r.headPitch+=Math.sin(n*1.3)*.03,r;const y=this.kp(ce.pulledOff),A=(n-d.pull)/(d.victimDown-d.pull);return A<.25?(Re(p,y,Xt(A/.25),r),r.pelvis.z-=.2*Xt(A/.25),r):o?Re(y,this.stance,Xt((A-.25)/.75),r):(Te(y,En),En.pelvis.z-=.2,this.collapse(En,this.kp(ce.thrustKneel),-c,-h,Ln((A-.25)/.75),.35,r))}if(s==="flow"){const p=this.kp(ce.arched);if(n<d.victimFall)return Re(u,p,wn((n-d.contact)/Math.max(1,d.victimFall-d.contact)),r);const y=(n-d.victimFall)/(d.victimDown-d.victimFall);return o?Re(p,this.stance,Xt(y),r):this.collapse(p,this.kp(ce.kneel),-c,-h,Ln(y),.4,r)}const f=this.kp(ce.slashHit);if(n<d.victimFall)return Re(u,f,wn((n-d.contact)/5),r);const g=(n-d.victimFall)/(d.victimDown-d.victimFall);if(o)return Re(f,this.stance,Xt(g),r);const x=-.85-c*.5,m=-h*.5;return this.collapse(f,this.kp(ce.slashKneel),x,m,Ln(g),.4,r)}deadPose(t,e,n){if(this.deadClock+=this.dtSim,this.prevKind==="finished")return this.victimPose(t,e,this.victimT+this.deadClock*60,this.victimKind,this.victimPerf,n);const s=Ln(this.deadClock*60/34),a=this.fallX,r=this.fallZ,o=Te(this.kp(ce.kneel),En);return o.lean=.45*r,o.roll=-.3*a,this.collapse(this.corpse,o,a,r,s,.35,n)}archerShot(t,e,n){const s=Xt((t-6)/(e.startup-10)),a=t>=e.startup-1;return Re(this.stance,this.kp(ce.archerDraw),Xt(t/8),n),n.handR.copy(dy).lerp(uy,a?1:s),a&&(n.handR.x-=.08),a&&(n.handR.y+=.02),a&&(n.handR.z-=.08),n.bladeR.set(0,1,0),n.bowDraw=a?0:s,n}aimPose(t,e,n,s){const a=e.ps,r=t.act.kind==="quickshot",o=Math.asin(Math.max(-.8,Math.min(.8,e.input.aimDir.y)));let l;r?l=n<5?wn(n/5):0:l=vr(a.draw,a.arrowType,e.settings.windowScale).amount;const c=r?Xt(n/3)*(1-Xt((n-14)/6)):1,h=1.45+o*.35,d=En;if(Te(this.stance,d),d.handR.set(.05,h,.45),d.bladeR.set(0,1,0),d.handL.set(.1,h,.54-Math.abs(o)*.1),d.bladeL.set(.22,1,-o*.8).normalize(),d.edgeL.set(0,o*.9,1).normalize(),d.torsoYaw=.55,d.pelvisYaw=.35,d.headYaw=-.85,d.headPitch=-o*.8,d.pelvis.y=.9,d.footL.z=.14+.18,d.footR.z=-.12-.18*.6,d.bowInHand=1,uu.set(-.1,1.56+o*.2,.02),d.handR.lerp(uu,l),d.bowDraw=l,!r){const u=vr(a.draw,a.arrowType,e.settings.windowScale),f=Math.min(1,u.fatigue)*.012;d.handL.x+=Math.sin(t.age*1.9)*f,d.handL.y+=Math.sin(t.age*2.3+1)*f}return Re(this.stance,d,c,s),s.bowInHand=c>.3?1:0,s}standoffPose(t,e,n){if(t.isPlayer)return Te(this.kp(ce.standoffPlayer),n);const s=t.act.value??0;if(s===2){const a=Math.sin(Math.min(1,e/22)*Math.PI);return Re(this.stance,this.kp(ce.standoffFeint),a,n)}if(s===1){const a=t.act.travel??18,r=this.kp(ce.standoffCharge);return e<a-4?Te(r,n):Re(r,this.kp(Es.overhead.strike),wn((e-a+4)/5),n)}return n}issenPose(t,e,n){const s=di,a=this.kp(ce.issenStrike),r=this.kp(ce.issenZanshin);return t<=s.contact?Te(a,n):t<s.trail[1]?ss(a,r,Xt((t-s.contact)/3),wn((t-s.contact)/4),wn((t-s.contact)/(s.trail[1]-s.contact)),n,ao):t<e-10?Te(r,n):Re(r,this.stance,Xt((t-e+10)/10),n)}finTrack(t){let e=this.finKeys.get(t);return e||(e=ly(t).map(n=>[n.t,this.kp(n.key),n.ease??"smooth"]),this.finKeys.set(t,e)),e}finisherPose(t,e,n,s){const a=t.act.finisher??"slash",r=Gi[a],o=this.finTrack(a);let l=this.entry,c=0,h=!1;for(let d=0;d<o.length;d++){const[u,f,g]=o[d];if(n<=u){const x=(n-c)/Math.max(.001,u-c),m=g==="in"?so(x,2.2):g==="out"?wn(x):Xt(x);g==="in"?ss(l,f,Xt(x*1.5),so(x,1.3),m,s,a==="thrust"?void 0:ao):g==="out"?ss(l,f,Xt(x*1.2),m,m,s,a==="thrust"?void 0:ao):Re(l,f,m,s),h=!0;break}l=f,c=u}return h||Te(o[o.length-1][1],s),this.finisherContact(t,e,a,r,n,s),!this.stepPlanned&&n>=r.release-2&&(this.stepPlanned=!0,this.planter.planStep(0,Math.max(.05,(r.contact-n)/60),.06)),s}finisherContact(t,e,n,s,a,r){const o=e.get(t.act.targetId);if(!o)return;const l=s.release-3,c=a<l?0:a<s.contact?Xt((a-l)/(s.contact-l)):a<s.holdEnd?1:1-Xt((a-s.holdEnd)/Math.max(1,s.pull-s.holdEnd));if(c<=0)return;const h=Math.cos(t.yaw),d=Math.sin(t.yaw),u=o.pos.x-t.pos.x,f=o.pos.z-t.pos.z,g=(u*d+f*h)/t.size,x=(u*h-f*d)/t.size,m=o.size/t.size,p=this.finTrack(n);let y=p[0][1];for(const[w,v]of p)w===s.contact&&(y=v);const A=Math.max(1,Math.min(1.45,1.2*m));let b,T;n==="thrust"?(b=x*.9-.02,T=g+.05-.68):(b=y.handR.x+x*.5,T=g-.14*m-.33),Xa.set(b-y.handR.x,A-y.handR.y,T-y.handR.z),ro.copy(y.handR).add(Xa);const M=vy(y,ro);r.handR.addScaledVector(Xa,c),r.pelvis.z+=M*c,r.footL.z+=M*1.1*c,r.lean+=M*.3*c,n==="thrust"&&(ro.set(x-r.handR.x,A+.02-r.handR.y,g-r.handR.z).normalize(),ti(r.bladeR,ro,c,r.bladeR))}locomotion(t,e,n,s,a){const r=t.act.kind,l=(r==="free"||r==="guard"||r==="aim"||r==="fear"||r==="standoff"&&!t.isPlayer&&(t.act.value??0)!==2||r==="heal")&&n>=.15,c=1-Math.exp(-this.dtSim*10);if(this.aimSink+=((l&&r==="aim"?.06*Math.min(1,n/2):0)-this.aimSink)*c,this.bobK+=((r==="aim"?0:1)-this.bobK)*c,e.pelvis.y-=this.aimSink,!l)return;const h=Ln((n-2.5)/3),d=this.planter.gait;if(e.pelvis.y-=(1-Math.abs(d))*.035*Math.min(1,n/3)*this.bobK,e.lean+=a*h*.18,e.roll+=-s*h*.08,e.torsoYaw+=d*.06*Math.min(1,n/3),r==="free"){if(e.handR.z+=d*.1*h,e.handL.z-=d*.1*h,this.family==="ranger"&&h>0){const u=this.kp(ce.runRanger);e.handR.lerp(u.handR,h),ti(e.bladeR,u.bladeR,h,e.bladeR)}this.fixHands(e)}}feetMode(t,e,n){if(Math.abs(ca(e.bodyPitch))>.3||Math.abs(ca(e.bodyRoll))>.3||e.pelvis.y>this.stance.pelvis.y+.08)return"air";const s=t.act;return s.kind==="attack"&&s.move?.id==="r_s4"&&n>=Ol(s.move)-1&&n<=Ol(s.move)+vu(s.move)?"pivot":s.kind==="issen"&&n>0&&n<=di.travel+2||s.kind==="gale"&&Uc(n)<Wn.contact+2?"air":"ground"}stepParams(t,e,n,s,a){const r=t.act,o=this.params;switch(o.stride=0,r.kind){case"attack":{const l=r.move?pa(r.move):null,c=l?e<l.release:!1;return o.threshold=c?.24:.15,o.swingDur=.12,o.lift=.05,o.allowBoth=!1,o.lead=0,o.weight=.75,o}case"finisher":case"issen":case"gale":return o.threshold=.18,o.swingDur=.11,o.lift=.06,o.allowBoth=!1,o.lead=0,o.weight=.8,o;case"dodge":case"flowStep":case"flow":case"evade":return o.threshold=.1,o.swingDur=.1,o.lift=.07,o.allowBoth=!0,o.lead=s>.35?0:s<-.35?1:a>=0?0:1,o.weight=.65,o;case"hitstun":case"stagger":case"recoil":case"guardbreak":case"blockstun":case"overextended":{const l=this.hit;return o.threshold=.14,o.swingDur=.13,o.lift=.05,o.allowBoth=!0,o.lead=l&&l.px>.3?0:(l&&l.px<-.3,1),o.weight=.4,o}case"finished":case"dead":return o.threshold=.22,o.swingDur=.16,o.lift=.04,o.allowBoth=!0,o.lead=1,o.weight=.3,o;default:return o.threshold=Math.min(.42,.14+n*.05),o.swingDur=Math.max(.14,Math.min(.3,.3-n*.03)),o.lift=Math.min(.14,.04+n*.018),o.allowBoth=!1,o.lead=s>.5?0:s<-.5||a<-.2?1:0,o.weight=Math.min(1,.3+n*.08),o.stride=Math.min(1.4,.8+n*.12)*(1-.3*Math.min(1,Math.abs(s))),o}}params={threshold:.2,swingDur:.2,lift:.05,allowBoth:!1,lead:0,weight:.4,stride:0}}function vy(i,t){const e=i.pelvisYaw+i.torsoYaw,n=Math.cos(e),s=Math.sin(e),a=-.19,r=.45*Math.sin(i.lean),o=i.pelvis.x+a*n+r*s,l=i.pelvis.z-a*s+r*n,c=i.pelvis.y+.45*Math.cos(i.lean),h=.56,d=t.y-c;if(Math.abs(d)>=h)return 0;const u=Math.sqrt(h*h-d*d),f=t.x-o,g=t.z-l,x=Math.sqrt(Math.max(0,u*u-f*f));return Math.max(0,Math.min(.2,g-x))}function _y(i){switch(i){case"attack":case"finisher":case"issen":case"gale":case"hitstun":case"stagger":case"dead":return 0;case"deflect":case"flow":case"flowStep":case"recoil":case"guardbreak":case"broken":case"overextended":case"evade":return 0;case"blockstun":return .05;case"finished":return 0;case"free":return .14;default:return .1}}function xy(i,t,e,n){const s=i.act;let a=bo(i,t),r=null,o=i.serial,l=i.isPlayer?16773328:13619151,c=i.isPlayer?1:.6;const h=e.approach,d=s.kind==="attack"?s.move:h?h.move:null;if(h&&(a=h.t,o=h.serial),d&&!d.feint&&!d.projectile&&d.type!=="blunt"){const u=d;r=pa(u).trail,i.isPlayer&&(l=u.type==="thrust"?12578559:u.heavy?16765562:16773328),u.unblockable==="red"?(l=16730672,c=1.2):u.unblockable==="blue"&&(l=9227007,c=1.1)}else if(!h){if(s.kind==="finisher"){const u=s.finisher;(u==="slash"||u==="thrust"||u==="flow")&&(r=Gi[u].trail),l=16770752,c=1.4}else if(s.kind==="issen")r=di.trail,l=16777215,c=2;else if(s.kind==="gale")o=i.serial*64+Math.floor((s.t-1)/Wn.seg),a=Uc(a),r=Wn.trail,l=11071743,c=1.6;else if(s.kind==="standoff"&&!i.isPlayer&&s.value===1){const u=s.travel??18;r=[u-3,u+6]}}return n.active=!!r&&a>=r[0]&&a<r[1],n.key=o,n.color=l,n.intensity=c,n.maxSpeed=!h&&(s.kind==="issen"||s.kind==="gale")?1/0:45,n}const yy=(i,t,e=new R)=>e.set(Math.sin(i)*Math.cos(t),-Math.sin(t),Math.cos(i)*Math.cos(t)),My=(i,t=new R)=>t.set(-Math.cos(i),0,Math.sin(i)),_u=new R,xu=new R,by=new R,Sy=new R,wy=new R,Ey=new R,pn=new R,Ty=new R(0,1,0),Ay=new R,Ry=new R,Cy=new R,Fi=(i,t)=>1-Math.exp(-i*t);class Py{camera;yaw=0;pitch=.2;dist=5.2;target=new R(0,1.4,0);pos=new R(0,3,-5);look=new R;aimBlend=0;cine=null;cineBlend=0;cinePos=new R;cineLook=new R;focus=new R;focusW=0;cineFov=44;trauma=0;time=0;sinceManual=99;fovKick=0;sensitivity=.0024;constructor(t){this.camera=new Jn(58,t,.05,900)}get aiming(){return this.aimBlend>.5}get inCinematic(){return this.cine!==null}get style(){return this.cine?this.cine.style:null}look2(t,e){t===0&&e===0||(this.yaw-=t*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.1,this.pitch+e*this.sensitivity)),this.sinceManual=0)}shake(t){this.trauma=Math.min(1,this.trauma+t)}cinematic(t,e,n,s,a=s){if(t=t.clone().setY(0),e=e.clone().setY(0),this.cine&&this.cine.style===n&&n==="standoff"){const d=this.cine;if(d.a.copy(t),d.b.copy(e),d.t=Math.min(d.t,.5),d.dur=Math.max(d.dur,1),d.maxDur=Math.max(d.maxDur,1),pn.subVectors(e,t).setY(0),pn.lengthSq()>1e-4&&(pn.normalize(),Math.abs(pn.dot(d.axis))<Math.cos(.35))){d.axis.copy(pn);const u=_u.copy(t).add(e).multiplyScalar(.5);d.perp.set(-pn.z,0,pn.x),xu.copy(this.cinePos).sub(u).setY(0).dot(d.perp)<0&&d.perp.multiplyScalar(-1)}return}const r=t.clone().add(e).multiplyScalar(.5),o=e.clone().sub(t).setY(0);o.lengthSq()<1e-6&&o.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),o.normalize();const l=new R(-o.z,0,o.x),h=this.camera.position.clone().sub(r).setY(0).dot(l)>=0?1:-1;this.cine={a:t.clone(),b:e.clone(),axis:o,perp:l.multiplyScalar(h),style:n,t:0,dur:s,maxDur:Math.max(s,a),progress:null,side:h},this.focusW=0}track(t,e,n,s,a=null){this.cine&&(this.cine.a.copy(t).setY(0),this.cine.b.copy(e).setY(0),this.cine.progress=a,n&&this.focus.copy(n),this.focusW=n?s:0)}releaseCinematic(){this.cine&&(this.cine=null,pn.subVectors(this.cineLook,this.cinePos),pn.x*pn.x+pn.z*pn.z>1e-6&&(this.yaw=Math.atan2(pn.x,pn.z),this.sinceManual=0))}endCinematic(){this.cine=null,this.cineBlend=0}update(t,e,n){if(this.time+=t,this.sinceManual+=t,n.lockTarget&&!n.aiming){const y=pn.subVectors(n.lockTarget,e),A=Math.atan2(y.x,y.z);this.yaw+=yu(A-this.yaw)*Fi(4,t),this.pitch+=(.22-this.pitch)*Fi(2,t)}else if(n.moveDir&&this.sinceManual>1.5&&!n.aiming){const y=Math.atan2(n.moveDir.x,n.moveDir.z),A=yu(y-this.yaw);Math.abs(A)<1.1&&(this.yaw+=A*Fi(.8,t))}this.aimBlend+=((n.aiming?1:0)-this.aimBlend)*Fi(12,t);const s=4.8+Math.min(2,n.crowd*.45)-(n.slowmo?.6:0);this.dist+=(s-this.dist)*Fi(2.5,t);const a=this.aimBlend,r=yy(this.yaw,this.pitch,Ay),o=My(this.yaw,Ry);this.target.lerp(pn.copy(e).setY(e.y+1.45),Fi(14,t));const l=.35+a*.45,c=this.dist*(1-a)+2.2*a,h=Cy.copy(this.target).addScaledVector(o,l).addScaledVector(r,-c);if(h.y+=a*.1,h.y=Math.max(.35,h.y),this.pos.copy(h),this.look.copy(this.target).addScaledVector(o,l).addScaledVector(r,4),this.cine){const y=this.cine;y.t+=t;const A=_u.copy(y.a).add(y.b).multiplyScalar(.5),b=y.axis,T=y.perp,M=Math.min(1,y.progress??y.t/y.dur),w=by,v=Sy;switch(y.style){case"standoff":w.copy(A).addScaledVector(T,7.5-M*1.5).setY(A.y+1.1),v.copy(A).setY(A.y+1.1);break;case"issen":w.copy(A).addScaledVector(T,3.6+M*.8).addScaledVector(b,-.8-M*.8).setY(A.y+.9),v.copy(A).setY(A.y+1.1);break;case"killcam":w.copy(y.b).addScaledVector(T,3).addScaledVector(b,-1.5).setY(y.b.y+1+M*.4),v.copy(y.b).setY(y.b.y+.9);break;default:{const E=(M-.5)*.7*y.side,C=xu.copy(T).applyAxisAngle(Ty,E);w.copy(A).addScaledVector(C,3.5).addScaledVector(b,-.9).setY(A.y+1.2-M*.2),v.copy(A).setY(A.y+1.1)}}this.focusW>0&&v.lerp(this.focus,Math.min(1,this.focusW)*.6),this.cineBlend===0&&(this.cinePos.copy(w),this.cineLook.copy(v)),this.cinePos.lerp(w,Fi(8,t)),this.cineLook.lerp(v,Fi(8,t)),y.t>=(y.progress===null?y.dur:y.maxDur)&&this.releaseCinematic()}this.cineBlend+=((this.cine?1:0)-this.cineBlend)*Fi(this.cine?14:4,t),this.cineBlend<.001&&(this.cineBlend=0);const d=Ly(this.cineBlend),u=wy.copy(this.pos).lerp(this.cinePos,d),f=Ey.copy(this.look).lerp(this.cineLook,d);this.trauma=Math.max(0,this.trauma-t*1.6);const g=this.trauma*this.trauma,x=y=>Math.sin(this.time*37+y)*.5+Math.sin(this.time*61+y*2.3)*.5;u.x+=x(1)*.22*g,u.y+=x(2)*.18*g,u.z+=x(3)*.22*g,this.camera.position.copy(u),this.camera.lookAt(f),this.camera.rotateZ(x(4)*.03*g),this.cine&&(this.cineFov=this.cine.style==="standoff"?38:44);const m=this.cineFov,p=58*(1-a)+46*a;this.fovKick*=Math.pow(.02,t),this.camera.fov=p*(1-d)+m*d-this.fovKick,this.camera.updateProjectionMatrix()}aimRay(t,e){t.copy(this.camera.position),this.camera.getWorldDirection(e)}}function yu(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Ly(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}const rs=48,oo=.1,lo=32,Dy=1/240,co=new R,ho=new R,qa=new R,zl=new R,uo=new R;class Mu{mesh;sb=new Float32Array(rs*3);st=new Float32Array(rs*3);stime=new Float64Array(rs);sseg=new Int32Array(rs);head=0;count=0;now=0;segId=0;wasActive=!1;dashing=!1;lastKey=Number.NaN;pos;alpha;index;geo;mat;constructor(t){const e=lo*2;this.pos=new Float32Array(e*3),this.alpha=new Float32Array(e),this.index=new Uint16Array((lo-1)*6),this.geo=new Ue,this.geo.setAttribute("position",new Ke(this.pos,3)),this.geo.setAttribute("alpha",new Ke(this.alpha,1)),this.geo.setIndex(new Ke(this.index,1)),this.geo.setDrawRange(0,0),this.mat=new Pn({uniforms:{color:{value:new Bt(t)},intensity:{value:1}},vertexShader:`attribute float alpha; varying float vA; varying float vEdge;
        void main(){ vA = alpha; vEdge = mod(float(gl_VertexID), 2.0); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 color; uniform float intensity; varying float vA; varying float vEdge;
        void main(){ float a = vA * mix(0.25, 1.0, vEdge); gl_FragColor = vec4(color * intensity, a); }`,transparent:!0,depthWrite:!1,side:on,blending:fs}),this.mesh=new $t(this.geo,this.mat),this.mesh.frustumCulled=!1}setColor(t,e=1){this.mat.uniforms.color.value.setHex(t),this.mat.uniforms.intensity.value=e}get sampleCount(){return this.count}get drawnIndices(){return this.geo.drawRange.count}update(t,e,n,s,a=0,r=45){if(this.now+=s,n){(!this.wasActive||a!==this.lastKey)&&(this.segId++,this.dashing=!1);const o=this.count>0?this.head:-1,l=o>=0&&this.sseg[o]===this.segId;if(!l||s>0){let c=!1;if(l){const d=o*3,u=Math.hypot(t.x-this.sb[d],t.y-this.sb[d+1],t.z-this.sb[d+2]),f=this.now-this.stime[o],g=this.count>1?this.idx(1):-1,x=u/Math.max(f,1/240);this.dashing=x>(this.dashing?r*.5:r),this.dashing?this.segId++:g>=0&&this.sseg[g]===this.segId&&this.now-this.stime[g]<Dy&&(c=!0)}c||(this.head=this.count===0?0:(this.head+1)%rs,this.count=Math.min(rs,this.count+1));const h=this.head;this.sb[h*3]=t.x,this.sb[h*3+1]=t.y,this.sb[h*3+2]=t.z,this.st[h*3]=e.x,this.st[h*3+1]=e.y,this.st[h*3+2]=e.z,this.stime[h]=this.now,this.sseg[h]=this.segId}}for(this.wasActive=n,this.lastKey=a;this.count>1&&this.now-this.stime[this.idx(this.count-2)]>=oo;)this.count--;this.count===1&&this.now-this.stime[this.head]>oo&&(this.count=0),this.build()}idx(t){return(this.head-t+rs*2)%rs}sampleAt(t,e,n,s){if(this.count===0)return-1;const a=this.stime[this.head];if(t>a+1e-7)return-1;for(;e.m<this.count&&this.stime[this.idx(e.m)]>t;)e.m++;if(e.m>=this.count)return-1;const r=this.idx(e.m);if(e.m===0)return n.fromArray(this.sb,r*3),s.fromArray(this.st,r*3),this.sseg[r];const o=this.idx(e.m-1);if(this.sseg[r]!==this.sseg[o])return-1;const l=this.stime[r],c=this.stime[o],h=c>l?(t-l)/(c-l):0;n.fromArray(this.sb,r*3),zl.fromArray(this.sb,o*3),qa.fromArray(this.st,r*3).sub(n);const d=qa.length();uo.fromArray(this.st,o*3).sub(zl);const u=uo.length();return n.lerp(zl,h),d>1e-5&&u>1e-5?(ti(qa.multiplyScalar(1/d),uo.multiplyScalar(1/u),h,qa),s.copy(n).addScaledVector(qa,d+(u-d)*h)):s.fromArray(this.st,r*3).lerp(uo.fromArray(this.st,o*3),h),this.sseg[r]}cursor={m:0};build(){let t=0,e=-1;this.cursor.m=0;for(let n=0;n<lo;n++){const s=oo*n/(lo-1),a=this.sampleAt(this.now-s,this.cursor,co,ho),r=n*2;if(a>=0){this.pos[r*3]=co.x,this.pos[r*3+1]=co.y,this.pos[r*3+2]=co.z,this.pos[r*3+3]=ho.x,this.pos[r*3+4]=ho.y,this.pos[r*3+5]=ho.z;const o=1-s/oo,l=o*o*.6;if(this.alpha[r]=l,this.alpha[r+1]=l,n>0&&a===e){const c=r-2;this.index[t++]=c,this.index[t++]=c+1,this.index[t++]=c+2,this.index[t++]=c+1,this.index[t++]=c+3,this.index[t++]=c+2}}else this.alpha[r]=0,this.alpha[r+1]=0;e=a}this.geo.setDrawRange(0,t),this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("alpha").needsUpdate=!0,this.geo.getIndex().needsUpdate=!0}dispose(){this.geo.dispose(),this.mat.dispose()}}class Iy{mesh;list=[];pos;col;cap;constructor(t=600){this.cap=t,this.pos=new Float32Array(t*6),this.col=new Float32Array(t*6);const e=new Ue;e.setAttribute("position",new Ke(this.pos,3)),e.setAttribute("color",new Ke(this.col,3)),this.mesh=new r0(e,new hh({vertexColors:!0,transparent:!0,blending:fs,depthWrite:!1})),this.mesh.frustumCulled=!1}burst(t,e,n,s,a={}){const r=new Bt(n);for(let o=0;o<e;o++){this.list.length>=this.cap&&this.list.shift();const l=new R(Math.random()-.5,Math.random()-.5+(a.up??.3),Math.random()-.5).normalize();a.dir&&l.lerp(a.dir,1-(a.spread??.6)).normalize(),l.multiplyScalar(s*(.4+Math.random()*.8));const c=(a.life??.35)*(.5+Math.random()*.8);this.list.push({p:t.clone(),v:l,life:c,max:c,color:r.clone().offsetHSL(0,0,(Math.random()-.5)*.15),g:a.gravity??9})}}update(t){let e=0;for(let s=this.list.length-1;s>=0;s--){const a=this.list[s];if(a.life-=t,a.life<=0){this.list.splice(s,1);continue}a.v.y-=a.g*t,a.v.multiplyScalar(1-2.5*t),a.p.addScaledVector(a.v,t)}for(const s of this.list){const a=s.life/s.max,r=s.p.clone().addScaledVector(s.v,-.035);this.pos.set([s.p.x,s.p.y,s.p.z,r.x,r.y,r.z],e*6),this.col.set([s.color.r*a,s.color.g*a,s.color.b*a,0,0,0],e*6),e++}this.pos.fill(0,e*6),this.col.fill(0,e*6);const n=this.mesh.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("color").needsUpdate=!0,n.setDrawRange(0,e*2)}}class bu{points;list=[];pos;col;size;alpha;cap;constructor(t,e){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t);const n=new Ue;n.setAttribute("position",new Ke(this.pos,3)),n.setAttribute("color",new Ke(this.col,3)),n.setAttribute("size",new Ke(this.size,1)),n.setAttribute("alpha",new Ke(this.alpha,1));const s=new Pn({uniforms:{scale:{value:600}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vA;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = vA * smoothstep(0.5, 0.15, r); gl_FragColor = vec4(vC, a); }`,transparent:!0,depthWrite:!1,blending:e?fs:ga});this.points=new af(n,s),this.points.frustumCulled=!1}setViewportHeight(t){this.points.material.uniforms.scale.value=t*.9}emit(t,e,n){for(let s=0;s<e;s++){this.list.length>=this.cap&&this.list.shift();const a=new R(Math.random()-.5,Math.random()-.5+(n.up??0),Math.random()-.5).normalize();n.dir&&a.lerp(n.dir,1-(n.spread??.6)).normalize(),a.multiplyScalar(n.speed*(.3+Math.random()));const r=n.life*(.6+Math.random()*.7),o=t.clone();n.jitter&&o.add(new R((Math.random()-.5)*n.jitter,(Math.random()-.5)*n.jitter,(Math.random()-.5)*n.jitter)),this.list.push({p:o,v:a,life:r,max:r,size:n.size*(.6+Math.random()*.8),grow:n.grow??0,color:new Bt(n.color),g:n.gravity??0,drag:n.drag??1.5,alpha:n.alpha??1})}}update(t){let e=0;for(let s=this.list.length-1;s>=0;s--){const a=this.list[s];if(a.life-=t,a.life<=0||a.p.y<-.2){this.list.splice(s,1);continue}a.v.y-=a.g*t,a.v.multiplyScalar(Math.max(0,1-a.drag*t)),a.p.addScaledVector(a.v,t),a.p.y<.02&&a.g>0&&(a.p.y=.02,a.v.set(0,0,0)),a.size+=a.grow*t}for(const s of this.list){const a=s.life/s.max;this.pos.set([s.p.x,s.p.y,s.p.z],e*3),this.col.set([s.color.r,s.color.g,s.color.b],e*3),this.size[e]=s.size,this.alpha[e]=s.alpha*Math.min(1,a*2.5),e++}for(let s=e;s<this.cap;s++)this.alpha[s]=0;const n=this.points.geometry;for(const s of["position","color","size","alpha"])n.getAttribute(s).needsUpdate=!0;n.setDrawRange(0,e)}}class ky{group=new jn;list=[];geo=new gh(.85,1,48);spawn(t,e,n=.5,s=6,a=!0){const r=new ba({color:e,transparent:!0,opacity:.8,blending:fs,depthWrite:!1,side:on}),o=new $t(this.geo,r);o.position.copy(t),a&&(o.rotation.x=-Math.PI/2),o.scale.setScalar(.2),this.group.add(o),this.list.push({mesh:o,life:n,max:n,grow:s})}update(t,e){for(let n=this.list.length-1;n>=0;n--){const s=this.list[n];s.life-=t;const a=1-s.life/s.max;s.mesh.scale.setScalar(.2+s.grow*(1-(1-a)*(1-a))),s.mesh.material.opacity=.8*(1-a),s.mesh.rotation.x===0&&s.mesh.quaternion.copy(e.quaternion),s.life<=0&&(this.group.remove(s.mesh),s.mesh.material.dispose(),this.list.splice(n,1))}}}class Uy{mesh;i=0;born;cap;time=0;constructor(t=64){this.cap=t;const e=Ny(),n=new ba({map:e,transparent:!0,depthWrite:!1,color:5900810,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-2}),s=new ps(1,1);s.rotateX(-Math.PI/2),this.mesh=new xo(s,n,t),this.mesh.count=0,this.born=new Array(t).fill(-1),this.mesh.frustumCulled=!1}add(t,e,n){const s=new re().compose(new R(t,.015+this.i*1e-4,e),new cn().setFromAxisAngle(new R(0,1,0),Math.random()*6.28),new R(n,1,n));this.mesh.setMatrixAt(this.i,s),this.born[this.i]=this.time,this.i=(this.i+1)%this.cap,this.mesh.count=Math.min(this.cap,Math.max(this.mesh.count,this.i===0?this.cap:this.i)),this.mesh.instanceMatrix.needsUpdate=!0}update(t){this.time+=t}clear(){this.mesh.count=0,this.i=0}}function Ny(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#fff";for(let n=0;n<14;n++){const s=10+Math.random()*26,a=Math.random()*Math.PI*2,r=Math.random()*30;t.beginPath(),t.arc(64+Math.cos(a)*r,64+Math.sin(a)*r,s,0,Math.PI*2),t.fill()}const e=new dh(i);return e.colorSpace=vn,e}function Fy(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,255,0.8)"),e.addColorStop(.4,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[s,a]of[[128,6],[6,128]]){const r=t.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-s/2,64-a/2,s,a)}const n=new dh(i);return n.colorSpace=vn,n}const Su={slash:["KeyJ"],thrust:["KeyK"],guard:["ShiftLeft","ShiftRight","KeyL"],dodge:["Space"],aim:["KeyQ"],quickshot:["KeyE"],focus:["KeyV"],heal:["KeyR"],gale:["KeyF"],standoff:["KeyT"],lock:["Tab","KeyC"],arrow1:["Digit1"],arrow2:["Digit2"],arrow3:["Digit3"]},wu={slash:[0],thrust:[2],lock:[1]},Eu={slash:[2],thrust:[3],dodge:[1],standoff:[0],guard:[4],quickshot:[5],aim:[6],fire:[7],focus:[10],lock:[11],heal:[13],gale:[12],arrowNext:[15]};class Oy{constructor(t){this.el=t,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.lastDevice="kbm",(e.code==="Escape"||e.code==="KeyP")&&(this.pausePressed.v=!0),this.noteTap(e.code,null))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.clear()}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{if(!this.locked&&!this.lockAttempted&&document.pointerLockElement!==t){this.lockAttempted=!0;try{const n=t.requestPointerLock?.();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}e.button!==0&&this.addMouse(e.button);return}this.addMouse(e.button)}),window.addEventListener("mouseup",e=>this.mouse.delete(e.button)),window.addEventListener("mousemove",e=>{document.pointerLockElement===t?(this.lookDX+=e.movementX,this.lookDY+=e.movementY):(this.mouse.size>0||e.buttons&4)&&(this.lookDX+=e.movementX*.6,this.lookDY+=e.movementY*.6)}),window.addEventListener("wheel",e=>{this.wheelSteps+=Math.sign(e.deltaY)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{const e=this.locked;this.locked=document.pointerLockElement===t,e&&!this.locked&&(this.lockAttempted=!1)})}el;keys=new Set;mouse=new Set;prevHeld={};wheelSteps=0;lookDX=0;lookDY=0;tapped=new Set;prevPad=new Set;pausePressed={v:!1};locked=!1;lockAttempted=!1;lastDevice="kbm";touch=null;addMouse(t){this.mouse.add(t),this.lastDevice="kbm",this.noteTap(null,t)}noteTap(t,e){for(const n of sa)t&&Su[n]?.includes(t)&&this.tapped.add(n),e!==null&&wu[n]?.includes(e)&&this.tapped.add(n)}releasePointer(){document.pointerLockElement===this.el&&document.exitPointerLock()}sample(t){const e=Mh();e.camYaw=t;const n={};for(const m of sa)n[m]=!!(Su[m]?.some(p=>this.keys.has(p))||wu[m]?.some(p=>this.mouse.has(p)));let s=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),a=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),r=this.lookDX+((this.keys.has("ArrowRight")?1:0)-(this.keys.has("ArrowLeft")?1:0))*14,o=this.lookDY+((this.keys.has("ArrowDown")?1:0)-(this.keys.has("ArrowUp")?1:0))*8;this.lookDX=0,this.lookDY=0;const l=navigator.getGamepads?.()??[],c=Array.from(l).find(m=>m&&m.connected)??null,h=new Set;if(c){c.buttons.forEach((A,b)=>{(A.pressed||A.value>.5)&&h.add(b)});for(const A of sa)Eu[A]?.some(b=>h.has(b))&&(n[A]=!0);const m=A=>Math.abs(A)<.18?0:A,p=m(c.axes[0]??0),y=-m(c.axes[1]??0);(p||y)&&(s=p,a=y,this.lastDevice="pad"),r+=m(c.axes[2]??0)*18,o+=m(c.axes[3]??0)*10,h.has(9)&&!this.prevPad.has(9)&&(this.pausePressed.v=!0),h.size&&(this.lastDevice="pad"),h.has(14)&&!this.prevPad.has(14)&&(this.wheelSteps-=1);for(const A of sa)Eu[A]?.some(b=>h.has(b)&&!this.prevPad.has(b))&&this.tapped.add(A)}if(this.prevPad=h,this.touch?.active){const m=this.touch.sample();for(const p of sa)this.touch.held[p]&&(n[p]=!0);for(const p of m.taps)this.tapped.add(p);(m.mx||m.my)&&(s=m.mx,a=m.my),r+=m.lookDX,o+=m.lookDY,(m.mx||m.my||m.taps.size||m.lookDX)&&(this.lastDevice="touch")}const d=Math.hypot(s,a);d>1&&(s/=d,a/=d);const u=Math.sin(t),f=Math.cos(t),g=-Math.cos(t),x=Math.sin(t);e.move={x:u*a+g*s,z:f*a+x*s},this.wheelSteps!==0&&(this.tapped.add("arrowNext"),this.wheelSteps=0);for(const m of sa){const p=!!n[m],y=!!this.prevHeld[m],A=this.tapped.has(m);(p&&!y||A)&&(e.pressed[m]=!0),(!p&&y||A&&!p)&&(e.released[m]=!0),e.held[m]=p||A&&!y}return this.prevHeld=n,this.tapped.clear(),{frame:e,lookDX:r,lookDY:o}}}class zy{constructor(t,e){this.onActivate=e,this.root=document.createElement("div"),this.root.className="touch",this.root.innerHTML=`
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
      </div>`,t.appendChild(this.root),this.base=this.root.querySelector(".t-stick"),this.knob=this.root.querySelector(".t-knob");const n=this.root.querySelector(".t-zone.left"),s=this.root.querySelector(".t-zone.right");n.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0];this.stick={id:o.identifier,x0:o.clientX,y0:o.clientY,x:o.clientX,y:o.clientY},this.base.style.left=`${o.clientX}px`,this.base.style.top=`${o.clientY}px`,this.base.classList.add("on")},{passive:!1}),s.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0];this.look={id:o.identifier,x0:o.clientX,y0:o.clientY,x:o.clientX,y:o.clientY}},{passive:!1}),window.addEventListener("touchmove",r=>{for(const o of Array.from(r.changedTouches))this.stick&&o.identifier===this.stick.id?(this.stick.x=o.clientX,this.stick.y=o.clientY):this.look&&o.identifier===this.look.id&&(this.lookDX+=(o.clientX-this.look.x)*1.6,this.lookDY+=(o.clientY-this.look.y)*1.2,this.look.x=o.clientX,this.look.y=o.clientY)},{passive:!0});const a=r=>{for(const o of Array.from(r.changedTouches))this.stick&&o.identifier===this.stick.id&&(this.stick=null,this.base.classList.remove("on"),this.knob.style.transform=""),this.look&&o.identifier===this.look.id&&(this.look=null)};window.addEventListener("touchend",a),window.addEventListener("touchcancel",a),this.root.querySelectorAll("[data-b]").forEach(r=>{const o=r.dataset.b;r.addEventListener("touchstart",c=>{if(c.preventDefault(),r.dataset.latch){this.aimLatched=!this.aimLatched,r.classList.toggle("on",this.aimLatched),this.held.aim=this.aimLatched,this.aimLatched&&this.taps.add("aim");return}this.held[o]=!0,this.taps.add(o),r.classList.add("on")},{passive:!1});const l=c=>{c.preventDefault(),!r.dataset.latch&&(this.held[o]=!1,r.classList.remove("on"))};r.addEventListener("touchend",l),r.addEventListener("touchcancel",l)}),window.addEventListener("touchstart",()=>this.activate(),{passive:!0,capture:!0})}onActivate;root;held={};taps=new Set;stick=null;look=null;knob;base;aimLatched=!1;lookDX=0;lookDY=0;active=!1;activate(){this.active||(this.active=!0,document.body.classList.add("touch-ui"),this.onActivate())}setVisible(t){this.root.style.display=t&&this.active?"":"none"}sample(){let t=0,e=0;if(this.stick){const s=this.stick.x-this.stick.x0,a=this.stick.y-this.stick.y0,r=Math.hypot(s,a),o=56,l=Math.min(1,r/o);r>6&&(t=s/r*l,e=-a/r*l);const c=r>o?s/r*o:s,h=r>o?a/r*o:a;this.knob.style.transform=`translate(${c}px, ${h}px)`}const n={mx:t,my:e,lookDX:this.lookDX,lookDY:this.lookDY,taps:new Set(this.taps)};return this.lookDX=0,this.lookDY=0,this.taps.clear(),n}}const Nf=2,By=25,Hy=64,Bl=1e-4,hs=(i,t,e)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):t,In=(i,t)=>i+Math.random()*(t-i),Vy=()=>typeof performance<"u"?performance.now():Date.now();function cr(i){try{i.disconnect()}catch{}}function Zn(...i){for(let t=0;t<i.length-1;t++)i[t].connect(i[t+1])}function mn(i,t){const e=i.createGain();return e.gain.value=t,e}function Ts(i,t,e,n=.7){const s=i.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,s}function As(i,t,e="sine"){const n=i.createOscillator();return n.type=e,n.frequency.value=t,n}function Wc(i,t){const e=i.createBufferSource();return e.buffer=t,e.loop=!0,e}function Tu(i,t){if(typeof i.createStereoPanner!="function")return null;const e=i.createStereoPanner();return e.pan.value=hs(t,-1,1),e}class Gy{constructor(t,e,n,s,a,r,o){this.ctx=t,this.noiseBuf=e,this.out=n,this.busNodes=s,this.t=a,this.p=r,this.onDone=o}ctx;noiseBuf;out;busNodes;t;p;onDone;pending=0;done=!1;hz(t){return hs(t*this.p,20,this.ctx.sampleRate/2-100)}env(t){const e=this.t+(t.at??0),n=Math.max(.001,t.a??.002),s=t.h??0,a=e+n+s+Math.max(.005,t.d),r=Math.max(Bl*2,t.g),o=this.ctx.createGain();return o.gain.setValueAtTime(Bl,e),o.gain.linearRampToValueAtTime(r,e+n),s>0&&o.gain.setValueAtTime(r,e+n+s),o.gain.exponentialRampToValueAtTime(Bl,a),{g:o,t0:e,end:a}}track(t,e,n){t.stop(n+.02),this.pending++,t.onended=()=>{cr(t),e.forEach(cr),--this.pending<=0&&this.settle()}}settle(){this.pending>0||this.done||(this.done=!0,this.busNodes.forEach(cr),this.onDone())}tone(t){const e=this.ctx,{g:n,t0:s,end:a}=this.env(t),r=As(e,this.hz(t.f),t.type);r.frequency.setValueAtTime(this.hz(t.f),s),t.f2!==void 0&&r.frequency.exponentialRampToValueAtTime(this.hz(t.f2),s+(t.st??a-s));const o=t.filt?Ts(e,t.filt[0],this.hz(t.filt[1]),t.filt[2]):null;if(o?Zn(r,o,n,this.out):Zn(r,n,this.out),t.vib){const l=As(e,t.vib[0]),c=mn(e,t.vib[1]);l.connect(c),c.connect(r.detune),l.start(s),this.track(l,[c],a)}r.start(s),this.track(r,o?[o,n]:[n],a)}noise(t){const e=this.ctx,{g:n,t0:s,end:a}=this.env(t),r=t.type??"bandpass",o=t.q??(r==="bandpass"?1:.7),l=Ts(e,r,this.hz(t.f),o);if(l.frequency.setValueAtTime(this.hz(t.f),s),t.f2!==void 0){const g=t.st??(t.f3!==void 0?(a-s)/2:a-s);l.frequency.exponentialRampToValueAtTime(this.hz(t.f2),s+g),t.f3!==void 0&&l.frequency.exponentialRampToValueAtTime(this.hz(t.f3),a)}const c=e.sampleRate/2,h=this.hz(t.f2!==void 0?Math.sqrt(t.f*t.f2):t.f),d=r==="bandpass"?h/o:r==="highpass"?c-h:h,u=mn(e,hs(.5*Math.sqrt(c/Math.max(d,1)),.5,6)),f=Wc(e,this.noiseBuf);Zn(f,l,u,n,this.out),f.start(s,Math.random()*(Nf-.2)),this.track(f,[l,u,n],a)}}function vi(i,t,e,n,s,a=0){e.forEach((r,o)=>{i.tone({f:t*r*In(.998,1.002),at:a,a:.001,d:n/(1+o*.5),g:s/(1+o*.6)})})}const tr={swingLight:i=>i.noise({f:600,f2:2600,f3:1400,st:.06,q:1.4,a:.025,d:.13,g:.6}),swingHeavy:i=>{i.noise({f:280,f2:1500,f3:600,st:.12,q:1.1,a:.07,d:.26,g:.6}),i.noise({type:"lowpass",f:450,a:.08,d:.22,g:.25})},swingThrust:i=>{i.noise({f:1800,f2:3800,q:2.2,a:.008,d:.075,g:.75}),i.noise({type:"highpass",f:5e3,a:.004,d:.03,g:.35})},swingEnemy:i=>i.noise({f:420,f2:1900,f3:900,st:.08,q:1.2,a:.04,d:.18,g:.5}),hitFlesh:i=>{i.tone({f:120,f2:45,st:.12,d:.16,g:.85}),i.noise({type:"lowpass",f:2200,f2:400,d:.08,g:.5}),i.noise({f:1e3,q:1.2,d:.045,g:.3})},hitHeavy:i=>{i.tone({f:95,f2:34,st:.22,d:.3,g:1}),i.tone({type:"triangle",f:62,f2:30,d:.24,g:.35}),i.noise({type:"lowpass",f:1500,f2:220,d:.18,g:.6}),i.noise({f:2600,q:1.5,d:.04,g:.3})},hitEffective:i=>{tr.hitFlesh(i),i.noise({type:"highpass",f:3200,d:.03,g:.55}),i.noise({f:5200,f2:1800,q:3,d:.09,g:.3}),i.tone({type:"square",f:1600,f2:500,d:.045,g:.07})},block:i=>{vi(i,520,[1,2.41,3.93],.13,.3),i.noise({f:1800,q:1.4,d:.05,g:.5}),i.tone({f:190,f2:120,d:.08,g:.35})},deflect:i=>{const t=In(1e3,1300);i.noise({type:"highpass",f:2800,d:.035,g:1}),i.noise({f:6500,q:2,d:.07,g:.35}),vi(i,t,[1,2.76,5.4,8.93],1.1,.42),i.tone({f:t*1.006,d:.9,g:.15})},bounce:i=>{i.tone({f:230,f2:140,d:.1,g:.6}),i.noise({f:750,q:2,d:.06,g:.45}),vi(i,720,[1,2.32,4.1],.28,.13,.004)},glance:i=>{i.noise({f:3e3,f2:4400,q:9,a:.01,d:.15,g:.5}),i.noise({f:5600,f2:4800,q:12,a:.015,d:.13,g:.3}),i.noise({type:"highpass",f:6e3,d:.02,g:.2})},haft:i=>{i.tone({f:400,f2:260,d:.06,g:.5}),i.tone({type:"triangle",f:950,d:.03,g:.18}),i.noise({f:1300,q:3,d:.04,g:.4})},bash:i=>{i.tone({f:140,f2:52,st:.14,d:.2,g:.95}),i.noise({type:"lowpass",f:1e3,f2:200,d:.13,g:.55}),i.noise({f:520,q:1.6,d:.08,g:.4}),vi(i,410,[1,2.7],.16,.08)},flow:i=>{i.noise({f:1100,f2:5200,q:4,a:.06,d:.26,g:.45}),vi(i,1760,[1,2.76,5.4],.55,.12,.08)},issen:i=>{i.noise({type:"highpass",f:5e3,d:.05,g:.5}),i.noise({f:1800,f2:9500,q:12,a:.005,d:.38,g:.7}),vi(i,2350,[1,2.76,5.4],1.4,.13,.01),i.tone({f:72,f2:28,st:.5,a:.004,d:.95,g:1}),i.tone({f:44,a:.02,d:1.3,g:.4}),i.noise({f:3e3,f2:1400,q:.7,at:.05,a:.3,d:1.8,g:.12})},finisher:i=>{i.tone({type:"sawtooth",f:55,filt:["lowpass",320],a:.75,d:.45,g:.22}),i.tone({type:"sawtooth",f:55.6,filt:["lowpass",320],a:.75,d:.45,g:.22}),i.tone({f:110,f2:138,a:.7,d:.4,g:.1}),i.noise({type:"lowpass",f:250,f2:700,a:.75,d:.4,g:.2})},finisherImpact:i=>{i.noise({f:1500,f2:6e3,q:3,d:.12,g:.55}),tr.hitHeavy(i),i.tone({f:60,f2:24,st:.6,d:1,g:.9}),i.noise({type:"lowpass",f:320,d:.55,g:.3})},guardBreak:i=>{vi(i,380,[1,2.2,3.71,5.93],.38,.36),i.noise({f:1500,q:1,d:.1,g:.7}),i.noise({type:"lowpass",f:700,f2:150,d:.22,g:.5}),i.tone({f:110,f2:48,d:.26,g:.9})},postureBreak:i=>{i.tone({f:92,f2:34,st:.4,d:.75,g:1}),i.noise({type:"lowpass",f:260,d:.4,g:.3}),vi(i,660,[1,2.76,5.4],1,.16,.02)},perfectDodge:i=>{i.noise({f:500,f2:3200,f3:1500,st:.12,q:1.5,a:.05,d:.3,g:.4}),i.tone({f:2093,at:.05,d:.6,g:.13}),i.tone({f:3136,at:.1,d:.45,g:.08})},dodge:i=>{i.noise({f:900,f2:2200,f3:1200,st:.07,q:.9,a:.03,d:.15,g:.3}),i.noise({type:"lowpass",f:700,d:.1,g:.12})},bowDraw:i=>{i.tone({type:"sawtooth",f:34,f2:56,filt:["bandpass",900,4],a:.05,d:.3,g:.7}),i.noise({f:600,f2:900,q:6,a:.05,d:.3,g:.12})},bowRelease:i=>{i.tone({type:"triangle",f:165,f2:112,st:.08,d:.35,g:.6}),i.tone({f:330,f2:225,st:.06,d:.2,g:.2}),i.noise({f:2e3,q:1,d:.05,g:.35}),i.noise({type:"highpass",f:1500,at:.01,d:.1,g:.2})},bowPerfect:i=>{tr.bowRelease(i),i.tone({f:2637,at:.02,d:.7,g:.14}),i.tone({f:3951,at:.04,d:.45,g:.07})},arrowWhiz:i=>{i.tone({f:2700,f2:1300,a:.06,d:.34,g:.08}),i.noise({f:3200,f2:1500,q:6,a:.06,d:.34,g:.3})},arrowHit:i=>{i.tone({f:210,f2:90,d:.09,g:.7}),i.noise({f:850,q:2,d:.05,g:.45}),i.tone({type:"triangle",f:430,f2:300,d:.14,g:.08,vib:[38,30]})},arrowHeadshot:i=>{i.noise({type:"highpass",f:2600,d:.025,g:.75}),i.noise({f:1500,q:1,d:.05,g:.35}),tr.arrowHit(i)},arrowBlock:i=>{vi(i,2200,[1,2.76,5.4],.18,.16),i.noise({type:"highpass",f:4e3,d:.02,g:.4})},glintBlue:i=>{i.tone({f:2500,d:.35,g:.42}),i.tone({f:5e3,d:.15,g:.1})},glintRed:i=>{i.tone({type:"sawtooth",f:220,filt:["lowpass",1400],a:.01,h:.12,d:.17,g:.2}),i.tone({type:"sawtooth",f:227,filt:["lowpass",1400],a:.01,h:.12,d:.17,g:.2}),i.tone({type:"square",f:110,filt:["lowpass",600],d:.3,g:.1})},kill:i=>{i.tone({f:90,f2:45,d:.25,g:.5}),i.noise({type:"lowpass",f:300,d:.15,g:.2})},resolve:i=>{[880,1320,1760,2640].forEach((t,e)=>i.tone({f:t,f2:t*1.05,at:e*.06,a:.02,d:.6,g:.08})),i.noise({f:3e3,f2:6500,q:2,a:.2,d:.4,g:.05})},heal:i=>{i.tone({f:330,a:.25,d:.6,g:.15,vib:[4,6]}),i.tone({f:495,a:.3,d:.6,g:.1}),i.tone({type:"triangle",f:660,a:.35,d:.5,g:.05})},fear:i=>{i.noise({type:"lowpass",f:150,a:.3,h:.4,d:.8,g:.14}),i.tone({f:45,a:.3,h:.3,d:.9,g:.16,vib:[6,40]}),i.tone({type:"sawtooth",f:58,f2:50,filt:["lowpass",200],a:.4,d:.8,g:.1})},shieldOpen:i=>{i.noise({f:1800,q:1,d:.03,g:.7}),i.noise({f:700,q:3,d:.1,g:.35}),i.tone({f:260,f2:140,d:.1,g:.4}),i.noise({f:2400,q:1.2,at:.04,d:.025,g:.45})},armorShatter:i=>{for(let t=0;t<6;t++)vi(i,In(700,3500),[1,2.76],In(.2,.6),.1,In(0,.08));i.noise({type:"highpass",f:2e3,d:.4,g:.55}),i.noise({f:800,d:.2,g:.55}),i.tone({f:120,f2:50,d:.2,g:.5})},standoffTension:i=>{i.tone({type:"sawtooth",f:55,filt:["lowpass",260],a:1.4,h:.3,d:.6,g:.18}),i.tone({type:"sawtooth",f:55.4,filt:["lowpass",260],a:1.4,h:.3,d:.6,g:.18}),i.tone({f:110,a:1.4,h:.2,d:.6,g:.08,vib:[.8,10]}),i.noise({f:200,q:2,a:1.5,h:.2,d:.6,g:.12}),i.tone({f:1760,a:1.6,d:.5,g:.02,vib:[5,8]})},standoffStrike:i=>{i.noise({f:2500,f2:8500,q:6,d:.15,g:.7}),i.noise({type:"highpass",f:4e3,d:.04,g:.5}),i.tone({f:66,f2:25,st:.5,d:1,g:1}),i.noise({type:"lowpass",f:400,d:.6,g:.3})},waveStart:i=>{i.tone({f:120,f2:50,st:.25,d:.6,g:1}),i.tone({f:185,f2:75,st:.12,d:.25,g:.3}),i.noise({type:"lowpass",f:1300,f2:300,d:.08,g:.55}),i.noise({f:250,q:1,d:.3,g:.2})},waveClear:i=>{i.tone({f:565,f2:587.33,st:.18,a:.15,h:.45,d:.6,g:.15,vib:[5,12]}),i.tone({f:1130,f2:1174.66,st:.18,a:.15,h:.45,d:.5,g:.025}),i.noise({f:1200,q:3,a:.1,h:.4,d:.5,g:.08})},victory:i=>{[440,523.25,587.33].forEach((t,e)=>{const n=e===2;i.tone({type:"triangle",f:t,at:e*.2,d:n?1.3:.55,g:.3,vib:n?[5.5,10]:void 0}),i.tone({f:t*2,at:e*.2,d:n?.8:.3,g:.08}),i.noise({f:t*4,q:4,at:e*.2,d:.02,g:.12})}),i.tone({type:"triangle",f:146.83,at:.4,d:1.2,g:.15})},defeat:i=>{i.tone({type:"triangle",f:220,f2:110,a:.05,d:1.4,g:.25}),i.tone({f:110,f2:55,a:.05,d:1.5,g:.3}),i.tone({type:"sawtooth",f:222,f2:111,filt:["lowpass",500],a:.05,d:1.3,g:.06})},footstep:i=>{i.noise({f:1400,q:.8,a:.01,d:.06,g:.14}),i.noise({type:"lowpass",f:500,d:.05,g:.08})},uiSelect:i=>{i.tone({f:1800,d:.03,g:.15}),i.noise({type:"highpass",f:5e3,d:.01,g:.1})},fireIgnite:i=>{i.noise({type:"lowpass",f:300,f2:2200,a:.15,d:.5,g:.35});for(let t=0;t<8;t++)i.noise({type:"highpass",f:In(2500,5e3),at:In(0,.6),d:In(.01,.022),g:In(.2,.4)})}},Wy={deflect:.35,issen:.6,finisher:.35,finisherImpact:.45,postureBreak:.35,guardBreak:.2,standoffTension:.45,standoffStrike:.55,waveStart:.45,waveClear:.4,victory:.35,defeat:.4,perfectDodge:.25,flow:.2,glintBlue:.2,glintRed:.15,bowPerfect:.2,resolve:.3,heal:.25,fear:.25,armorShatter:.3,kill:.1},Yy=new Set(["victory","defeat","waveClear","uiSelect","glintBlue","glintRed","heal","resolve"]);function Xy(i){const t=i.createBuffer(1,Math.floor(i.sampleRate*Nf),i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function qy(i,t,e){const n=Math.floor(i.sampleRate*t),s=Math.floor(i.sampleRate*.012),a=i.createBuffer(2,n,i.sampleRate);for(let r=0;r<2;r++){const o=a.getChannelData(r);let l=0;for(let c=s;c<n;c++){const h=c/n;l+=(Math.random()*2-1-l)*(.85-.7*h),o[c]=l*Math.pow(1-h,e)}}return a}function Au(i,t,e,n,s){const a=i.currentTime;t.gain.cancelScheduledValues(a),t.gain.setValueAtTime(t.gain.value,a),t.gain.linearRampToValueAtTime(0,a+s),e[0].onended=()=>[...e,...n,t].forEach(cr),e.forEach(r=>r.stop(a+s+.05))}class Ky{ctx=null;master=null;slowLp=null;hallIn=null;noiseBuf=null;volume=.8;muted=!1;timeScale=1;active=0;disabled=!1;last=new Map;amb=null;ambWanted=!1;draw=null;constructor(){}unlock(){if(!this.disabled)try{if(this.ctx&&this.ctx.state==="closed"&&this.teardown(),!this.ctx){const t=typeof window<"u"?window:void 0,e=t?.AudioContext??t?.webkitAudioContext;if(!e){this.disabled=!0;return}this.ctx=new e,this.build(this.ctx)}this.ctx.state!=="running"&&this.ctx.resume().then(()=>{this.ambWanted&&this.buildAmbience()},()=>{}),this.ambWanted&&this.buildAmbience()}catch{this.teardown(),this.disabled=!0}}get ready(){return!!this.ctx&&!!this.master&&this.ctx.state==="running"}setMasterVolume(t){this.volume=hs(t,0,1),this.applyMaster()}setMuted(t){this.muted=!!t,this.applyMaster()}play(t,e={}){const{ctx:n,master:s,noiseBuf:a}=this;if(!n||!s||!a||n.state!=="running")return null;const r=tr[t];if(!r)return null;let o=null;try{const l=Vy();if(l-(this.last.get(t)??-1/0)<By||this.active>=Hy)return null;const c=hs(e.volume??1,0,4);if(c<=0)return null;this.last.set(t,l);let h=hs(e.pitch??1,.25,4);Yy.has(t)||(h*=In(.97,1.03));const d=mn(n,c),u=e.pan?Tu(n,e.pan):null,f=u?[d,u]:[d],g=f[f.length-1];g.connect(s),u&&d.connect(u);const x=Wy[t];if(x&&this.hallIn){const m=mn(n,x);Zn(g,m,this.hallIn),f.push(m)}return this.active++,o=new Gy(n,a,d,f,n.currentTime+.005,h,()=>{this.active--}),r(o),o.settle(),{stop:()=>{try{d.gain.cancelScheduledValues(n.currentTime),d.gain.setTargetAtTime(0,n.currentTime,.02)}catch{}}}}catch{return o?.settle(),null}}startAmbience(){this.ambWanted=!0,this.buildAmbience()}stopAmbience(){this.ambWanted=!1;const t=this.amb;if(this.amb=null,!(!t||!this.ctx))try{window.clearTimeout(t.timer),Au(this.ctx,t.out,t.srcs,t.nodes,.4)}catch{}}setDrawTension(t){const e=this.ctx;if(e)try{if(t===null||!Number.isFinite(t)){const o=this.draw;this.draw=null,o&&Au(e,o.out,o.srcs,o.nodes,.08);return}if(e.state!=="running")return;const n=this.draw??(this.draw=this.buildDraw(e));if(!n)return;const s=hs(t,0,1),a=e.currentTime,r=(o,l)=>{o.setTargetAtTime(l,a,.05)};r(n.out.gain,.1+.55*s),r(n.noiseF.frequency,380+s*900),r(n.saw.frequency,20+s*38),r(n.sawF.frequency,700+s*1500),r(n.lfo.frequency,4+s*10)}catch{}}setTimeScale(t){this.timeScale=hs(t,.05,1);const e=this.ctx;if(!(!e||!this.slowLp))try{const n=e.currentTime,s=this.timeScale,a=s>=.999?2e4:Math.max(900,18e3*s*s);this.slowLp.frequency.setTargetAtTime(Math.min(a,e.sampleRate/2-100),n,.08),this.amb?.wind.playbackRate.setTargetAtTime(this.ambRate(),n,.15)}catch{}}build(t){this.noiseBuf=Xy(t);const e=mn(t,this.muted?0:this.volume),n=Ts(t,"lowpass",Math.min(2e4,t.sampleRate/2-100),.5),s=t.createDynamicsCompressor();s.threshold.value=-14,s.knee.value=12,s.ratio.value=5,s.attack.value=.003,s.release.value=.2,Zn(e,n,s,t.destination);const a=t.createConvolver();a.buffer=qy(t,2.4,2.8),Zn(a,mn(t,.7),e),this.master=e,this.slowLp=n,this.hallIn=a,this.setTimeScale(this.timeScale)}teardown(){try{window.clearTimeout(this.amb?.timer)}catch{}try{this.ctx?.close().catch(()=>{})}catch{}this.ctx=this.master=this.slowLp=this.hallIn=this.noiseBuf=this.amb=this.draw=null,this.active=0}applyMaster(){if(!(!this.ctx||!this.master))try{this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.02)}catch{}}ambRate(){return .72+.28*this.timeScale}buildAmbience(){const{ctx:t,master:e,noiseBuf:n}=this;if(!(!t||!e||!n||this.amb||t.state==="closed"))try{const s=t.currentTime,a=mn(t,0);a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+2),a.connect(e);const r=Wc(t,n);r.playbackRate.value=this.ambRate();const o=Ts(t,"lowpass",520,.6),l=mn(t,.055),c=Ts(t,"bandpass",850,4),h=mn(t,.025);Zn(r,o,l,a),Zn(r,c,h,a);const d=As(t,.07),u=As(t,.113),g=[[d,.038,l.gain],[d,.018,h.gain],[u,220,o.frequency],[u,300,c.frequency]].map(([x,m,p])=>{const y=mn(t,m);return x.connect(y),y.connect(p),y});r.start(s,Math.random()),d.start(s),u.start(s),this.amb={out:a,wind:r,srcs:[r,d,u],nodes:[o,l,c,h,...g],timer:0},this.scheduleCricket()}catch{}}scheduleCricket(){const t=this.amb;t&&(t.timer=window.setTimeout(()=>{this.amb===t&&(this.chirp(t),this.scheduleCricket())},In(400,2200)))}chirp(t){const e=this.ctx;if(!(!e||e.state!=="running"))try{const n=e.currentTime+.02,s=2+Math.floor(Math.random()*3),a=In(.006,.014),r=As(e,In(4300,5e3)*this.ambRate()),o=mn(e,0);for(let h=0;h<s;h++){const d=n+h*.045;o.gain.setValueAtTime(0,d),o.gain.linearRampToValueAtTime(a,d+.008),o.gain.linearRampToValueAtTime(0,d+.03)}const l=Tu(e,In(-.8,.8)),c=l?[o,l]:[o];Zn(r,...c,t.out),r.onended=()=>[r,...c].forEach(cr),r.start(n),r.stop(n+s*.045+.02)}catch{}}buildDraw(t){if(!this.master||!this.noiseBuf)return null;const e=mn(t,0),n=mn(t,1),s=As(t,20,"sawtooth"),a=Ts(t,"bandpass",700,5),r=mn(t,.4),o=Wc(t,this.noiseBuf),l=Ts(t,"bandpass",380,7),c=mn(t,.3),h=As(t,4),d=mn(t,.6);Zn(s,a,r,n),Zn(o,l,c,n),Zn(n,e,this.master),h.connect(d),d.connect(n.gain);const u=t.currentTime;return s.start(u),o.start(u,Math.random()),h.start(u),{out:e,noiseF:l,saw:s,sawF:a,lfo:h,srcs:[s,o,h],nodes:[n,a,r,l,c,d]}}}const $y={kbm:{slash:"좌클릭/J",thrust:"우클릭/K",guard:"Shift",dodge:"Space",aim:"Q",quick:"E",heal:"R",gale:"F",standoff:"T",lock:"Tab"},pad:{slash:"□",thrust:"△",guard:"L1",dodge:"○",aim:"L2",quick:"R1",heal:"↓",gale:"↑",standoff:"×",lock:"R3"},touch:{slash:"斬",thrust:"突",guard:"盾",dodge:"避",aim:"弓",quick:"속사",heal:"회복",gale:"질풍",standoff:"대치",lock:"락온"}},Ru=[{type:"standard",kan:"矢",name:"일반"},{type:"heavy",kan:"貫",name:"관통"},{type:"fire",kan:"火",name:"화전"}];function oe(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}function Zy(i){return i.arch?i.arch.isBoss?Ef(i,"slash").result==="effective"?"slash":"thrust":i.arch.weakness:null}class Jy{root=oe("div");hpFill;hpLag;poFill;pips=[];arrowSlots=[];reticle;ring;reticleLabel;tags=new Map;layer=oe("div");waveEl;promptEl;tipEl;comboEl;helpEl;flashEl;vignetteEl;fpsEl;flash=0;hurt=0;waveTimer=0;tipTimer=0;recent=new Map;time=0;fpsAcc=0;fpsN=0;device="kbm";constructor(t){this.root.id="hud",t.appendChild(this.root),this.root.appendChild(oe("div","letterbox top")),this.root.appendChild(oe("div","letterbox bottom")),this.flashEl=oe("div"),this.flashEl.id="flash",this.vignetteEl=oe("div"),this.vignetteEl.id="vignette",this.root.append(this.flashEl,this.vignetteEl,this.layer);const e=oe("div","player-panel");e.appendChild(oe("div","name-row","레인저 <small>숏소드 · 버클러 · 활</small>"));const n=oe("div","bar");this.hpLag=oe("b"),this.hpFill=oe("i"),n.append(this.hpLag,this.hpFill);const s=oe("div","bar posture");this.poFill=oe("i"),s.appendChild(this.poFill);const a=oe("div","resolve");for(let o=0;o<q.resolveMax;o++){const l=oe("div","pip");this.pips.push(l),a.appendChild(l)}a.appendChild(oe("small","","결의")),e.append(n,s,a),this.root.appendChild(e);const r=oe("div","arrow-panel");Ru.forEach((o,l)=>{const c=oe("div","arrow-slot",`<b>${o.kan}</b>${l+1} ${o.name} <span class="n">0</span>`);this.arrowSlots.push(c),r.appendChild(c)}),this.root.appendChild(r),this.reticle=oe("div"),this.reticle.id="reticle",this.reticle.innerHTML='<svg viewBox="0 0 70 70"><circle class="ring" cx="35" cy="35" r="30"/><circle class="dot" cx="35" cy="35" r="2"/><path d="M35 8v8M35 54v8M8 35h8M54 35h8" stroke="rgba(239,230,210,.6)" stroke-width="1.5"/></svg><div class="label"></div>',this.ring=this.reticle.querySelector(".ring"),this.reticleLabel=this.reticle.querySelector(".label"),this.root.appendChild(this.reticle),this.waveEl=oe("div","",'<div class="t"></div><div class="s"></div>'),this.waveEl.id="wave",this.promptEl=oe("div"),this.promptEl.id="prompt",this.tipEl=oe("div"),this.tipEl.id="tip",this.comboEl=oe("div"),this.comboEl.id="combo",this.helpEl=oe("div"),this.helpEl.id="help",this.fpsEl=oe("div"),this.fpsEl.id="fps",this.root.append(this.waveEl,this.promptEl,this.tipEl,this.comboEl,this.helpEl,this.fpsEl),this.renderHelp()}k(t){return`<span class="k">${$y[this.device][t]}</span>`}renderHelp(){const t=e=>this.k(e);this.helpEl.innerHTML=`<h4>조작 <small style="font-size:12px;opacity:.6">H: 숨기기</small></h4>
      <table>
      <tr><td>${t("slash")}</td><td>베기 (누르고 있으면 강베기)</td></tr>
      <tr><td>${t("thrust")}</td><td>찌르기 (누르고 있으면 강찌르기)</td></tr>
      <tr><td>${t("guard")}</td><td>방패 막기 · <b>타이밍 = 튕기기</b></td></tr>
      <tr><td>${t("guard")}+${t("dodge")}</td><td><b>흘리기</b> (빨간 공격도)</td></tr>
      <tr><td>${t("guard")}+${t("slash")}</td><td>방패 치기</td></tr>
      <tr><td>적 타격 직전 공격</td><td><b>일섬</b></td></tr>
      <tr><td>${t("dodge")}</td><td>회피 (두 번: 구르기)</td></tr>
      <tr><td>${t("aim")} 누른 채 ${t("slash")}</td><td>활 당기기 → 만작에 놓기</td></tr>
      <tr><td>${t("quick")} · 1/2/3</td><td>속사 · 화살 종류</td></tr>
      <tr><td>${t("gale")} · ${t("heal")}</td><td>질풍참(결의2) · 회복(결의1)</td></tr>
      <tr><td>${t("standoff")} · ${t("lock")}</td><td>대치 · 락온</td></tr>
      </table>`}toggleHelp(){this.helpEl.classList.toggle("off")}setHelpVisible(t){this.helpEl.classList.toggle("off",!t)}pulse(t,e=1){t==="flash"?this.flash=Math.max(this.flash,e):this.hurt=Math.max(this.hurt,e)}showWave(t,e,n=3.2){this.waveEl.querySelector(".t").textContent=t,this.waveEl.querySelector(".s").textContent=e,this.waveEl.classList.add("on"),this.waveTimer=n}showTip(t,e,n=7){this.tipEl.innerHTML=`<b>${t}</b>${e}`,this.tipEl.classList.add("on"),this.tipTimer=n}clear(){this.layer.innerHTML="",this.tags.clear(),this.waveEl.classList.remove("on"),this.tipEl.classList.remove("on")}project(t,e,n,s){const a=t.clone().project(e);return{x:(a.x+1)/2*n,y:(1-a.y)/2*s,ok:a.z<1&&a.z>-1}}popup(t,e,n,s,a){const r=t.text+(t.id??""),o=this.recent.get(r)??-9;if(this.time-o<.5)return;if(this.recent.set(r,this.time),t.style==="info"&&t.sub&&t.sub.length>25){this.showTip(t.text,t.sub,9);return}const l=t.style==="deflect"||t.style==="flow"||t.style==="issen"||t.style==="finisher"||t.style==="warn",c=oe("div",`popup ${t.style}${l?"":" small"}`);c.innerHTML=`<div class="big">${t.text}</div>${t.sub?`<div class="kan">${t.sub}</div>`:""}`;let h=s/2,d=a*.36;if(l)(t.style==="deflect"||t.style==="flow")&&(d=a*.3);else{const u=e.get(t.id);if(u){const f=new R(u.pos.x,2.25*u.size,u.pos.z),g=this.project(f,n,s,a);g.ok&&(h=g.x,d=g.y-30)}else d=a*.3}c.style.left=`${h}px`,c.style.top=`${d}px`,this.layer.appendChild(c),setTimeout(()=>c.remove(),1300)}update(t,e,n,s,a){this.time+=a,this.fpsAcc+=a,this.fpsN++,this.fpsAcc>.5&&(this.fpsEl.textContent=`${Math.round(this.fpsN/this.fpsAcc)} fps`,this.fpsAcc=0,this.fpsN=0);const r=t.player,o=t.ps,l=`${Math.max(0,r.hp)/r.maxHp*100}%`;this.hpFill.style.width=l,this.hpLag.style.width=l,this.poFill.style.width=`${r.posture/r.maxPosture*100}%`,this.pips.forEach((f,g)=>f.style.setProperty("--f",`${Math.max(0,Math.min(1,o.resolve-g))}`)),Ru.forEach((f,g)=>{const x=this.arrowSlots[g];x.classList.toggle("on",o.arrowType===f.type),x.querySelector(".n").textContent=`${o.arrows[f.type]}`});const c=r.is("aim");if(this.reticle.classList.toggle("on",c),c){const f=vr(o.draw,o.arrowType,t.settings.windowScale);this.ring.style.strokeDashoffset=`${188.5*(1-f.amount)}`,this.reticle.classList.toggle("perfect",f.perfect),this.reticle.classList.toggle("tired",f.fatigue>.05);const g=Math.min(1,f.fatigue)*5;this.reticle.style.transform=g>0?`translate(${Math.sin(this.time*40)*g}px, ${Math.cos(this.time*33)*g}px)`:"",this.reticleLabel.textContent=f.perfect?"만작 — 놓아라":f.fatigue>.05?"팔이 떨린다":o.focusing?"집중":""}const h=new Set;for(const f of t.fighters){if(f.team!=="enemy"||!f.alive)continue;const g=new R(f.pos.x,2.05*f.size+(f.arch?.id==="ronin"||f.arch?.id==="spear"||f.arch?.id==="shield"?.12:0),f.pos.z),x=this.project(g,e,n,s),m=Math.hypot(f.pos.x-r.pos.x,f.pos.z-r.pos.z);let p=this.tags.get(f.id);p||(p=this.makeTag(f)),h.add(f.id);const y=x.ok&&m<26&&!f.is("finished");if(p.root.style.opacity=y?"1":"0",!y)continue;p.root.style.left=`${x.x}px`,p.root.style.top=`${x.y}px`,p.hp.style.width=`${f.hp/f.maxHp*100}%`,p.po.style.width=`${f.posture/f.maxPosture*100}%`,p.root.classList.toggle("broken",f.is("broken")),p.root.classList.toggle("target",o.softTarget===f.id||o.lockTarget===f.id),p.glint.className=`glint-mark ${f.glint?f.glint.color:""}`;const A=Zy(f),b=A??"";b!==p.lastWeak&&(p.lastWeak=b,p.weak.style.display=A?"":"none",p.weak.className=`weak ${b}`,p.weak.innerHTML=A==="slash"?"약점 <b>斬</b> 베기":A==="thrust"?"약점 <b>突</b> 찌르기":""),p.root.classList.toggle("parry",f.is("guard")&&f.act.value===1);const T=o.finisherTarget===f.id;if(p.fin.style.display=T?"block":"none",T){const M=o.finisherKindHint;p.fin.innerHTML=M==="hajiki"?`튕기기 일섬 ${this.k("slash")}`:M==="flow"?`흘려베기 ${this.k("slash")}`:`피니쉬 ${this.k("slash")}<span style="font-size:14px">일도양단</span> ${this.k("thrust")}<span style="font-size:14px">관통</span>`}}for(const[f,g]of this.tags)h.has(f)||(g.root.remove(),this.tags.delete(f));let d="";if(t.mode==="standoff"){const f=t.standoff;d=f.phase==="tension"||f.phase==="approach"?`${this.k("slash")}를 누른 채 — 적이 <b>진짜로</b> 달려드는 순간 떼라`:f.phase==="between"||f.phase==="strike"&&f.kills>0?`다음 적이 달려든다 — ${this.k("slash")}`:""}else t.waves?.standoffAvailable?d=`${this.k("standoff")} <span class="hot">대치</span> — 적이 다가온다`:o.finisherKindHint==="hajiki"?d='<span class="hot">튕기기 일섬</span> — 지금 공격':o.finisherKindHint==="flow"?d='<span class="hot">흘려베기</span> — 등이 열렸다':r.hp<r.maxHp*.35&&o.resolve>=q.healCost&&r.alive&&(d=`${this.k("heal")} 결의로 회복`);this.promptEl.innerHTML!==d&&(this.promptEl.innerHTML=d),this.comboEl.classList.toggle("on",o.combo>=3),o.combo>=3&&(this.comboEl.innerHTML=`${o.combo}<small>연격</small>`),this.flash*=Math.pow(.02,a),this.flashEl.style.opacity=`${Math.min(.85,this.flash)}`,this.hurt=Math.max(0,this.hurt-a*1.6);const u=r.alive&&r.hp<r.maxHp*.3?.35+Math.sin(this.time*5)*.1:0;this.vignetteEl.style.opacity=`${Math.max(u,this.hurt)}`,this.waveTimer>0&&(this.waveTimer-=a)<=0&&this.waveEl.classList.remove("on"),this.tipTimer>0&&(this.tipTimer-=a)<=0&&this.tipEl.classList.remove("on")}makeTag(t){const e=oe("div","enemy-tag"),n=oe("div","glint-mark"),s=oe("div","nm",t.arch?`${t.arch.name}`:""),a=oe("div","hp"),r=oe("i");a.appendChild(r);const o=oe("div","po"),l=oe("i");o.appendChild(l);const c=oe("div","weak"),h=oe("div","fin-prompt");e.append(n,s,a,o,c,h),this.layer.appendChild(e);const d={root:e,hp:r,po:l,nm:s,weak:c,glint:n,fin:h,lastWeak:"-"};return this.tags.set(t.id,d),d}}const Yc={difficulty:"normal",kurosawa:!1,blood:!0,sensitivity:1,volume:.8,quality:"high"};function bs(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}const Qy=`
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
</table>`,jy=`
<div class="sub" style="text-align:left;max-width:620px;margin:0 auto 18px">
<b>튕기기(弾き)</b> — 적의 칼이 닿기 직전 방패를 올려라. 적의 칼이 튕겨나고, 곧바로 공격하면 <b>튕기기 일섬</b>.<br>
<b>흘리기(流し)</b> — 방패를 든 채 타이밍 맞춰 회피. 빨간 섬광 공격까지 흘려내고 등을 벤다.<br>
<b>일섬(一閃)</b> — 적의 타격 직전, 단 한 번의 공격. 연타하면 나가지 않는다. 이어가면 <b>연쇄 일섬</b>.<br>
<b>상성</b> — 방패·갑주엔 찌르기, 창·시노비엔 베기. 체간을 무너뜨리면 <b>피니쉬</b>.
</div>`;class tM{constructor(t,e,n){this.h=e,this.settings={...n},this.title=bs(`<div class="menu on"><div class="box">
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
        <label>난이도 (판정 시간)</label><select data-s="difficulty"><option value="easy">쉬움 — 넉넉한 튕기기·일섬</option><option value="normal">보통</option><option value="hard">어려움 — 칼날 위의 타이밍</option></select>
        <label>흑백 영화 모드</label><input type="checkbox" data-s="kurosawa">
        <label>피 효과</label><input type="checkbox" data-s="blood">
        <label>그래픽 품질</label><select data-s="quality"><option value="high">높음</option><option value="low">낮음</option></select>
        <label>카메라 감도</label><input type="range" min="0.3" max="2.5" step="0.1" data-s="sensitivity">
        <label>음량</label><input type="range" min="0" max="1" step="0.05" data-s="volume">
      </div>
      <div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`),this.controls=bs(`<div class="menu"><div class="box"><h2>조작법 · 시스템</h2>${Qy}${jy}<div class="btns"><button class="btn primary" data-a="back">확인</button></div></div></div>`),this.over=bs(`<div class="menu"><div class="box"><h2 style="color:var(--red)">패배</h2><div class="sub">칼끝은 한 치 차이로 갈린다.</div><div class="stats"></div><div class="btns">
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
    </div>`);for(const a of[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory,this.practice])t.appendChild(a);const s=(a,r)=>a.addEventListener("click",o=>{const l=o.target.closest("[data-a],[data-p]");l&&(o.stopPropagation(),this.h.click(),r(l.dataset.a??l.dataset.p??"",l))});s(this.title,a=>{a==="campaign"||a==="practice"?this.h.start(a):a==="settings"?this.openSettings(this.title):a==="controls"&&this.openControls(this.title)}),s(this.pause,a=>{a==="resume"?this.h.resume():a==="restart"?this.h.restart():a==="title"?this.h.title():a==="settings"?this.openSettings(this.pause):a==="controls"&&this.openControls(this.pause)}),s(this.settingsEl,a=>a==="back"&&this.settingsBack()),s(this.controls,a=>a==="back"&&this.settingsBack());for(const a of[this.over,this.victory])s(a,r=>{r==="restart"?this.h.restart():r==="title"&&this.h.title()});s(this.practice,(a,r)=>{if(a==="clear")this.h.clearEnemies();else if(a==="inv"){const o=this.h.toggleInvincible();r.textContent=`무적: ${o?"켬":"끔"}`,r.classList.toggle("on",o)}else this.h.spawn(a)}),this.settingsEl.querySelectorAll("[data-s]").forEach(a=>{const r=a.dataset.s,o=this.settings[r];a instanceof HTMLInputElement&&a.type==="checkbox"?a.checked=!!o:a.value=String(o),a.addEventListener("input",()=>{const l=this.settings;a instanceof HTMLInputElement&&a.type==="checkbox"?l[r]=a.checked:a instanceof HTMLInputElement&&a.type==="range"?l[r]=parseFloat(a.value):l[r]=a.value,this.h.settingsChanged(this.settings)})})}h;title;pause;settingsEl;over;victory;controls;practice;settingsBack=()=>{};settings;hideAll(){for(const t of[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory])t.classList.remove("on")}openSettings(t){this.hideAll(),this.settingsEl.classList.add("on"),this.settingsBack=()=>{this.hideAll(),t.classList.add("on")}}openControls(t){this.hideAll(),this.controls.classList.add("on"),this.settingsBack=()=>{this.hideAll(),t.classList.add("on")}}get anyOpen(){return[this.title,this.pause,this.settingsEl,this.controls,this.over,this.victory].some(t=>t.classList.contains("on"))}showTitle(){this.hideAll(),this.title.classList.add("on"),this.practice.classList.remove("on")}showPause(){this.hideAll(),this.pause.classList.add("on")}hide(){this.hideAll()}showPractice(t){this.practice.classList.toggle("on",t)}showResult(t,e){this.hideAll();const n=t?this.victory:this.over,s=[["시간",`${Math.floor(e.time/60)}:${String(Math.floor(e.time%60)).padStart(2,"0")}`],["처치",e.kills],["튕기기",e.deflects],["흘리기",e.flows],["일섬 (최대 연쇄)",`${e.issens} (${e.maxIssenChain})`],["피니쉬",e.finishers],["대치 참",e.standoffKills],["헤드샷",e.headshots],["완벽 회피",e.perfectDodges],["유효타 / 상성 실수",`${e.effectiveHits} / ${e.badHits}`],["받은 피해",Math.round(e.damageTaken)]];n.querySelector(".stats").innerHTML=s.map(([a,r])=>`<span>${a}</span><span>${r}</span>`).join(""),n.classList.add("on")}}const eM=new R,fo=new R,po=new R,nM={active:!1,key:0,color:0,intensity:1,maxSpeed:45},Hl=new R,Bn=(i=0,t=0,e=0)=>new R(i,t,e);class iM{renderer;scene=new Ju;env;cam;devices;sfx=new Ky;hud;menus;world;views=new Map;arrowMeshes=new Map;sparks=new Iy;embers=new bu(700,!0);mist=new bu(900,!1);rings=new ky;decals=new Uy;glintTex=Fy();state="title";mode="campaign";settings;last=performance.now();time=0;resultTimer=-1;resultWin=!1;helpTimer=30;cues=[];cineSubjects=null;whooshes=[];eventQueue=[];clockWorld=null;lastClock=0;lessons=new Set;debugHold=!1;debugCam=null;clickHint;touch;constructor(t){this.settings=rM(),this.renderer=new Ux({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.settings.quality==="high"?1.75:1)),t.appendChild(this.renderer.domElement),this.env=Qd(this.scene,this.renderer,{arenaRadius:q.arenaRadius,quality:this.settings.quality}),this.envQuality=this.settings.quality,H1(aM(this.renderer)),this.cam=new Py(1),this.scene.add(this.sparks.mesh,this.embers.points,this.mist.points,this.rings.group,this.decals.mesh),this.devices=new Oy(this.renderer.domElement),this.touch=new zy(document.body,()=>{this.devices.lastDevice="touch",this.hud.setHelpVisible(!1)}),this.devices.touch=this.touch,this.hud=new Jy(document.body),this.clickHint=document.createElement("div"),this.clickHint.className="click-hint",this.clickHint.textContent="화면을 클릭하면 마우스로 카메라를 돌릴 수 있습니다 · H: 조작 도움말 · Esc: 일시정지",document.body.appendChild(this.clickHint),this.menus=new tM(document.body,{start:e=>this.start(e),resume:()=>this.resume(),restart:()=>this.start(this.mode),title:()=>this.toTitle(),settingsChanged:e=>this.applySettings(e),spawn:e=>this.practiceSpawn(e),clearEnemies:()=>this.practiceClear(),toggleInvincible:()=>(this.world.settings.invincible=!this.world.settings.invincible,this.world.settings.invincible),click:()=>{this.sfx.unlock(),this.sfx.play("uiSelect")}},this.settings),window.addEventListener("keydown",e=>{this.sfx.unlock(),(e.code==="KeyH"||e.code==="F1")&&(e.preventDefault(),this.hud.toggleHelp())}),window.addEventListener("pointerdown",()=>this.sfx.unlock()),window.addEventListener("resize",()=>this.resize()),this.resize(),this.world=this.makeTitleWorld(),this.applySettings(this.settings),this.hud.setHelpVisible(!1),requestAnimationFrame(this.loop),window.__game=this,window.__wog={MOVES:gr,T:q,emptyInput:Mh,startEnemyAttack:xi}}makeTitleWorld(){const t=new Xd(99);t.mode="intermission",t.player.pos={x:-2.6,z:0},t.player.yaw=Math.PI/2,t.player.set("standoff",1/0);const e=t.spawn("ronin",{x:2.6,z:0},-Math.PI/2);return e.brain.aware=!1,this.resetViews(),t}resetViews(){for(const t of this.views.values())this.removeView(t);this.views.clear();for(const t of this.arrowMeshes.values())this.scene.remove(t);this.arrowMeshes.clear(),this.hud.clear(),this.cues.length=0,this.whooshes.length=0,this.eventQueue.length=0,this.cineSubjects=null}start(t){this.sfx.unlock(),this.mode=t,this.resetViews(),this.decals.clear();const e=new Xd(Math.floor(Math.random()*1e9));if(e.player.pos={x:0,z:-7},e.player.yaw=0,this.world=e,this.applySettings(this.settings),t==="campaign")e.waves=new I1,e.waves.start(e);else{const n=e.spawn("dummy",{x:0,z:-3.5},Math.PI);n.brain.aware=!1,this.hud.showWave("수련장","왼쪽 버튼으로 적을 불러내 연습하라",3)}this.cam.yaw=0,this.cam.pitch=.2,this.cam.endCinematic(),this.state="play",this.resultTimer=-1,this.menus.hide(),this.menus.showPractice(t==="practice"),this.hud.setHelpVisible(!0),this.helpTimer=30,this.sfx.startAmbience(),this.hud.showTip("튕기기","적의 칼이 닿기 직전 방패를 올려라. 파란 섬광은 튕기기로만, 빨간 섬광은 흘리기(방패+회피)나 회피로 받아낸다.",9)}resume(){this.state="play",this.menus.hide()}toTitle(){this.state="title",this.cam.endCinematic(),this.world=this.makeTitleWorld(),this.menus.showTitle(),this.menus.showPractice(!1),this.hud.setHelpVisible(!1),this.devices.releasePointer()}pause(){this.state==="play"&&(this.state="pause",this.menus.showPause(),this.devices.releasePointer())}applySettings(t){this.settings={...t},oM(t);const e=this.world,n=t.difficulty==="easy"?1.6:t.difficulty==="hard"?.75:1;e.settings.windowScale=n,e.settings.enemyDamage=t.difficulty==="easy"?.6:t.difficulty==="hard"?1.35:1,document.body.classList.toggle("kurosawa",t.kurosawa),this.cam.sensitivity=.0024*t.sensitivity,this.sfx.setMasterVolume(t.volume),this.decals.mesh.visible=t.blood,this.envQuality!==t.quality&&(this.env.dispose(),this.env=Qd(this.scene,this.renderer,{arenaRadius:q.arenaRadius,quality:t.quality}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.quality==="high"?1.75:1)),this.resize()),this.envQuality=t.quality}envQuality=Yc.quality;practiceSpawn(t){if(this.mode!=="practice")return;const e=this.world.player,n=e.yaw+(Math.random()-.5)*1.2,s={x:e.pos.x+Math.sin(n)*7,z:e.pos.z+Math.cos(n)*7},a=Math.hypot(s.x,s.z);a>q.arenaRadius-2&&(s.x*=(q.arenaRadius-2)/a,s.z*=(q.arenaRadius-2)/a);const r=this.world.spawn(t,s);t==="dummy"&&(r.brain.aware=!1),this.world.emit({type:"text",text:r.arch.name,sub:r.arch.tip,style:"info",id:r.id})}practiceClear(){for(const t of this.world.enemies())t.hp=0;this.world.removeCorpses()}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.cam.camera.aspect=t/e,this.cam.camera.updateProjectionMatrix();const n=this.renderer.getPixelRatio();this.embers.setViewportHeight(e*n),this.mist.setViewportHeight(e*n)}loop=t=>{requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e,this.frame(e)};frame(t){const e=this.world;this.devices.pausePressed.v&&(this.devices.pausePressed.v=!1,this.state==="play"?this.pause():this.state==="pause"&&this.resume());const{frame:n,lookDX:s,lookDY:a}=this.devices.sample(this.cam.yaw);this.hud.device!==this.devices.lastDevice&&(this.hud.device=this.devices.lastDevice,this.hud.renderHelp());const r=Bn(),o=Bn();this.cam.aimRay(r,o),n.aimOrigin={x:r.x,y:r.y,z:r.z},n.aimDir={x:o.x,y:o.y,z:o.z},this.state==="play"&&!this.debugHold?(this.cam.look2(s,a),e.update(t,n),this.helpTimer>0&&(this.helpTimer-=t)<=0&&this.hud.setHelpVisible(!1)):this.state==="title"&&e.update(t,{...n,pressed:{},released:{},held:{}});for(const x of e.drainTimedEvents())this.eventQueue.push(x);const l=e.displayTick+1e-6;for(;this.eventQueue.length&&this.eventQueue[0].tick<=l;){const x=this.eventQueue.shift();this.onEvent(x.ev,x.tick)}this.resultTimer>0&&(this.resultTimer-=t)<=0&&(this.state="result",this.menus.showResult(this.resultWin,e.stats),this.devices.releasePointer());const c=e.simClock,h=this.debugHold?t:this.clockWorld===e?Math.max(0,Math.min(.1,c-this.lastClock)):0;this.clockWorld=e,this.lastClock=c,this.syncViews(h,t),this.runCues(),this.syncProjectiles(),this.sparks.update(h),this.embers.update(h),this.mist.update(h),this.rings.update(h,this.cam.camera),this.decals.update(h);const d=this.views.get(e.player.id),u=d?d.char.root.position.clone():Bn(),f=[...this.views.values()].slice(0,8).map(x=>x.char.root.position);if(this.env.update(this.time,t*Math.max(.25,e.timeScale),u,f),this.state==="title")this.titleCamera(t);else{const x=e.get(e.ps.lockTarget),m=x&&x.targetable?this.views.get(x.id)?.char.root.position??null:null,p=e.liveEnemies().filter(A=>A.distTo(e.player)<9).length,y=n.move.x||n.move.z?Bn(n.move.x,0,n.move.z):null;if(e.mode==="standoff"){const A=e.get(e.standoff.leaderId);A&&d&&this.cam.cinematic(u,this.views.get(A.id)?.char.root.position??u,"standoff",.2)}this.trackCinematic(),this.cam.update(this.state==="pause"?0:t,u,{aiming:e.player.is("aim"),lockTarget:m,crowd:p,moveDir:y,slowmo:e.timeScale<.9})}if(this.debugCam){const x=this.cam.camera;x.position.copy(this.debugCam.pos),x.lookAt(this.debugCam.look),x.fov=this.debugCam.fov??45,x.updateProjectionMatrix()}document.body.classList.toggle("cine",this.cam.inCinematic||e.mode==="standoff"),document.body.classList.toggle("title",this.state==="title"),this.touch.setVisible(this.state==="play"),this.clickHint.style.display=this.state==="play"&&!this.devices.locked&&this.devices.lastDevice==="kbm"&&!this.touch.active?"":"none",this.sfx.setTimeScale(e.timeScale);const g=e.ps;this.sfx.setDrawTension(e.player.is("aim")&&g.draw>0?vr(g.draw,g.arrowType).amount:null),this.state!=="title"&&this.hud.update(e,this.cam.camera,window.innerWidth,window.innerHeight,t),this.renderer.render(this.scene,this.cam.camera)}titleCamera(t){const e=this.time*.05,n=this.cam.camera;n.position.set(Math.sin(e)*1.5+.5,1.25,-7.5+Math.cos(e)*.5),n.lookAt(0,1.2,0),n.fov=40,n.updateProjectionMatrix()}viewFor(t){let e=this.views.get(t.id);if(e)return e;const n=t.isPlayer?"player":t.arch.id,s=new q1(n,this.glintTex),a=new Mu(t.isPlayer?16773328:14211288),r=n==="duelist"?new Mu(14211288):null;return this.scene.add(s.root,a.mesh),r&&this.scene.add(r.mesh),e={f:t,char:s,anim:new gy(n),trail:a,trailL:r,flash:0,flashColor:16777215},this.views.set(t.id,e),e}removeView(t){this.scene.remove(t.char.root,t.trail.mesh),t.char.dispose(),t.trail.dispose(),t.trailL&&(this.scene.remove(t.trailL.mesh),t.trailL.dispose())}syncViews(t,e){const n=this.world,s=n.alpha,a=new Set;for(const r of n.fighters){a.add(r.id);const o=this.viewFor(r),l=r.prevPos.x+(r.pos.x-r.prevPos.x)*s,c=r.prevPos.z+(r.pos.z-r.prevPos.z)*s;let h=r.yaw-r.prevYaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const d=r.prevYaw+h*s,u=o.anim.update(r,n,s,t,eM.set(l,0,c),d);o.char.root.position.set(l,0,c),o.char.root.rotation.y=d+u.bodyYaw,o.char.root.scale.setScalar(r.size),o.char.applyPose(u,r.speed,t),r.phase===2&&o.char.shatterArmor(),r.hitFlash>0&&o.flash<.3&&(o.flash=1),o.flash=Math.max(0,o.flash-e*6);const f=r.is("broken"),g=!r.isPlayer&&r.is("guard")&&r.act.value===1;f?o.char.setFlash(.25+Math.sin(this.time*14)*.15,16720384):g&&o.flash<.2?o.char.setFlash(.14+Math.sin(this.time*9)*.08,8373503):o.char.setFlash(o.flash*.7,o.flashColor),o.char.setGlint(r.glint?.color??null,r.glint?r.glint.t+s:0),r.burning>0&&t>0&&Math.random()<.7&&this.embers.emit(Bn(l,.4+Math.random()*1.2,c),2,{color:Math.random()<.5?16742938:16760906,speed:.6,size:.09,life:.6,gravity:-2,up:1,jitter:.5}),this.updateTrail(o,r,t);for(const x of o.anim.landings)this.onLanding(r,x)}for(const[r,o]of this.views)a.has(r)||(this.removeView(o),this.views.delete(r))}updateTrail(t,e,n){const s=xy(e,this.world,t.anim,nM);t.trail.setColor(s.color,s.intensity),t.char.bladeWorld(fo,po),t.trail.update(fo,po,s.active,n,s.key,s.maxSpeed),t.trailL&&(t.char.bladeWorld(fo,po,!0),t.trailL.setColor(s.color,s.intensity),t.trailL.update(fo,po,s.active,n,s.key,s.maxSpeed))}onLanding(t,e){t.isPlayer?this.play("footstep",void 0,.25+.5*e.strength,.9+Math.random()*.2):e.strength>.6&&this.play("footstep",e.pos,.3*e.strength,.8+Math.random()*.2),e.strength>.7&&this.embers.emit(Hl.copy(e.pos).setY(.04),3,{color:13219988,speed:.5,size:.18,life:.4,grow:.5,alpha:.22})}runCues(){for(let t=this.whooshes.length-1;t>=0;t--){const e=this.whooshes[t],n=this.world.get(e.id);(!n||n.serial!==e.serial&&this.world.tick-n.act.t<e.contactTick)&&e.h.stop(),(!n||n.serial!==e.serial||this.world.tick>=e.contactTick)&&this.whooshes.splice(t,1)}for(let t=this.cues.length-1;t>=0;t--){const e=this.cues[t],n=this.world.get(e.id);if(!n||n.serial!==e.serial){this.cues.splice(t,1);continue}bo(n,this.world)>=e.t&&(this.cues.splice(t,1),e.fire())}}trackCinematic(){const t=this.cineSubjects;if(!t)return;const e=this.world,n=e.get(t.a),s=e.get(t.b),a=n?this.views.get(n.id):void 0,r=s?this.views.get(s.id):void 0;if(!(this.cam.style===(t.kind==="issen"?"issen":t.fk==="flow"?"flow":"finisher"))){this.cineSubjects=null;return}if(!n||!s||!a||!r||!this.cam.inCinematic){this.cam.inCinematic&&this.cam.releaseCinematic(),this.cineSubjects=null;return}let l=0,c=!1,h=null;if(t.kind==="finisher"){c=n.serial!==t.serial;const d=t.fk==="slash"||t.fk==="thrust"||t.fk==="flow"?Gi[t.fk]:null;if(d&&!c){const u=bo(n,e);l=Vl((u-(d.release-8))/8)*(1-Vl((u-d.holdEnd)/10)),h=u/d.dur}}else{const d=s.act.kind==="finished"?bo(s,e):1/0,u=di.victimFreeze+12;c=n.serial!==t.serial&&d>=u,l=Number.isFinite(d)?Vl((d-di.victimFreeze+6)/6)*.7:0,h=Number.isFinite(d)?Math.min(1,d/u):1}if(c){this.cam.releaseCinematic(),this.cineSubjects=null;return}Hl.copy(r.char.root.position).setY(1.15*s.size),this.cam.track(a.char.root.position,r.char.root.position,Hl,l,h)}syncProjectiles(){const t=this.world,e=new Set;for(const n of t.projectiles){e.add(n.id);let s=this.arrowMeshes.get(n.id);if(s||(s=sM(n),this.scene.add(s),this.arrowMeshes.set(n.id,s)),n.stuck&&n.stuckTo!==void 0&&n.stuckOffset){const a=t.get(n.stuckTo),r=a?this.views.get(a.id):void 0;if(!a||!r){s.visible=!1;continue}const o=n.stuckOffset,l=r.char.root,c=l.rotation.y,h=Math.cos(c),d=Math.sin(c),u=a.alive?o.y:Math.min(o.y,.35);s.position.set(l.position.x+o.x*h+o.z*d,u,l.position.z-o.x*d+o.z*h),s.rotation.set(0,c+o.yaw,0),s.rotateX(.25)}else if(n.stuck)s.position.set(n.pos.x,n.pos.y,n.pos.z);else{const a=t.alpha;s.position.set(n.prevPos.x+(n.pos.x-n.prevPos.x)*a,n.prevPos.y+(n.pos.y-n.prevPos.y)*a,n.prevPos.z+(n.pos.z-n.prevPos.z)*a);const r=Bn(n.vel.x,n.vel.y,n.vel.z).normalize();s.quaternion.setFromUnitVectors(Bn(0,0,1),r),n.arrowType==="fire"&&Math.random()<.8&&this.embers.emit(s.position,1,{color:16747050,speed:.3,size:.08,life:.35,gravity:-1})}s.visible=!0}for(const[n,s]of this.arrowMeshes)e.has(n)||(this.scene.remove(s),this.arrowMeshes.delete(n))}at(t,e=1.2){const n=t!==void 0?this.views.get(t):void 0;return n?n.char.root.position.clone().setY(e):Bn(0,e,0)}play(t,e,n=1,s=1){if(!e)return this.sfx.play(t,{volume:n,pitch:s});const a=this.cam.camera,r=e.clone().sub(a.position),o=r.length(),l=Bn(1,0,0).applyQuaternion(a.quaternion),c=Math.max(-1,Math.min(1,r.dot(l)/Math.max(1,o)))*.8;return this.sfx.play(t,{volume:n/(1+Math.max(0,o-4)/9),pan:c,pitch:s})}reactHit(t,e,n,s){const a=this.world,r=a.get(e),o=a.get(t),l=r?this.views.get(r.id):void 0;if(!r||!o||!l)return;const c=r.pos.x-o.pos.x,h=r.pos.z-o.pos.z,d=Math.hypot(c,h)||1,u=Math.cos(r.yaw),f=Math.sin(r.yaw);let g=0;const x=o.act.kind==="gale"?gr.r_gale:o.act.kind==="attack"?o.act.move:void 0,m=this.views.get(o.id);if(x&&m){const p=m.anim.sweepSign(x),y=Math.cos(o.yaw)*p,A=-Math.sin(o.yaw)*p;g=y*u-A*f}l.anim.onHit(r,(c*u-h*f)/d,(c*f+h*u)/d,g,n,s)}blood(t,e,n,s=!1){if(!this.settings.blood){this.embers.emit(t,Math.ceil(e/2),{color:16773328,speed:2.5,size:.05,life:.4});return}this.mist.emit(t,e,{color:7997960,speed:s?5.5:3.2,size:s?.09:.06,life:.7,gravity:9,drag:.8,up:.4,dir:n,spread:n?.35:1,alpha:.95}),this.mist.emit(t,Math.ceil(e/3),{color:4851206,speed:.8,size:s?.45:.28,life:.5,grow:.8,drag:3,alpha:.45,dir:n,spread:.5}),(s||Math.random()<.35)&&this.decals.add(t.x+(n?.x??0)*.8,t.z+(n?.z??0)*.8,s?1.5:.7+Math.random()*.5)}lesson(t,e,n){this.lessons.has(t)||this.state!=="play"||(this.lessons.add(t),this.hud.showTip(e,n,8))}teach(t){const e=this.world.player.id;switch(t.type){case"glint":t.color==="blue"?this.lesson("blue","파란 섬광","막을 수 없는 공격. 칼이 닿기 직전 방패를 눌러 튕겨내라."):this.lesson("red","빨간 섬광","막을 수도 튕길 수도 없다. 방패를 든 채 회피 = 흘리기, 또는 옆으로 회피.");break;case"deflect":t.defender===e&&!t.arrow?this.lesson("hajiki","튕기기 일섬","튕겨낸 직후 곧바로 공격하면 반동에 빠진 적을 일격에 벤다."):t.defender!==e&&this.lesson("parry","적의 튕기기","튕기기 자세의 적에게 가벼운 공격은 튕겨난다. 길게 눌러 강공격하거나 방패 치기로 깨라.");break;case"postureBreak":this.lesson("finisher","피니쉬","무너진 적 앞에서 베기 = 일도양단, 찌르기 = 심장 관통. 약점 버튼으로 마무리하면 결의를 더 얻는다.");break;case"flow":this.lesson("flow","흘려베기","흘려낸 적은 등을 드러낸다. 바로 공격하라.");break;case"bounce":case"haft":case"evade":this.lesson("matchup","상성","적 머리 위의 약점 표시를 보라. 방패·갑주엔 찌르기, 창·쌍검엔 베기.");break;case"resolve":t.total>=2&&this.lesson("gale","결의","결의 2칸: 베기+찌르기 동시(질풍참)로 여럿을 한 번에 무너뜨린다. 1칸: 회복.");break}}onEvent(t,e=this.world.tick){this.teach(t);const n=this.world,s=n.player.id,a=(r,o=1.25)=>Bn(r.x,o,r.z);switch(t.type){case"swing":{const r=n.get(t.id),o=t.id===s,l=t.move,c=o?l.type==="thrust"?"swingThrust":l.heavy||l.finale?"swingHeavy":l.type==="blunt"?"dodge":"swingLight":"swingEnemy",h=r?.act.kind==="gale",d=e+(l.projectile||h?0:Ah(l)),u=!!r&&r.act.kind==="attack"&&r.act.move===l;if(r&&!u&&!h&&n.tick-r.act.t<d)break;const f=this.play(c,r?this.at(r.id):void 0,o?.9:.8,.9+Math.random()*.2);f&&r&&u&&n.tick<d&&this.whooshes.push({id:r.id,serial:r.serial,contactTick:d,h:f});break}case"hit":{this.reactHit(t.attacker,t.target,t.atkType,t.heavy);const r=a(t.pos,1.25),o=n.get(t.target),l=o?this.at(o.id).sub(this.at(t.attacker)).setY(.2).normalize():void 0;if(t.target===s)this.play(t.heavy?"hitHeavy":"hitFlesh",r,1),this.hud.pulse("hurt",t.heavy?.9:.6),this.cam.shake(t.heavy?.55:.35),this.blood(r,10,l);else{const c=t.result==="effective";this.play(t.lethal?"kill":c?"hitEffective":t.heavy?"hitHeavy":"hitFlesh",r,1),t.lethal&&this.play("hitHeavy",r,.9),t.result!=="glance"&&this.blood(r,t.lethal?26:c?16:10,l,t.lethal),this.cam.shake(t.lethal?.35:c||t.heavy?.25:.14),c&&this.sparks.burst(r,6,16773824,5,{life:.2}),t.lethal&&(this.cam.fovKick=2)}break}case"bounce":this.sparks.burst(a(t.pos,1.2),26,16760928,7),this.play("bounce",a(t.pos)),this.cam.shake(.35);break;case"glance":this.sparks.burst(a(t.pos,1.2),16,16777215,5),this.play("glance",a(t.pos));break;case"haft":this.mist.emit(a(t.pos,1.2),10,{color:6965802,speed:3,size:.05,life:.5,gravity:8}),this.play("haft",a(t.pos)),this.cam.shake(.2);break;case"evade":this.embers.emit(this.at(t.id,.2),8,{color:13219988,speed:1.2,size:.25,life:.5,grow:.6,alpha:.35}),this.play("dodge",this.at(t.id));break;case"block":this.sparks.burst(a(t.pos,1.3),t.enemy?10:14,16769184,4),this.play("block",a(t.pos)),this.cam.shake(.12);break;case"guardBreak":this.sparks.burst(a(t.pos,1.3),30,16765056,7),this.play("guardBreak",a(t.pos)),this.cam.shake(.45);break;case"deflect":{const r=a(t.pos,1.35);if(t.arrow){this.sparks.burst(r,18,16774352,6),this.play("arrowBlock",r),this.play("deflect",r,.6,1.3);break}this.sparks.burst(r,46,16774352,9,{life:.45}),this.sparks.burst(r,20,16756800,5,{life:.3}),this.rings.spawn(r,16773312,.3,.7,!1),this.play("deflect",r,1),this.cam.shake(.3),this.cam.fovKick=3,this.hud.pulse("flash",.18);break}case"flow":{const r=a(t.pos,1.3);this.embers.emit(r,24,{color:10479871,speed:3,size:.07,life:.5,drag:3}),this.sparks.burst(r,12,12579071,5),this.play("flow",r),this.cam.fovKick=3;break}case"issen":{const r=a(t.pos,1.2);this.hud.pulse("flash",.85),this.rings.spawn(r.clone().setY(.05),16777215,.6,4.5),this.rings.spawn(r,16774880,.35,1.2,!1),this.play("issen",r),this.cam.shake(.35);const o=this.at(t.performer),l=this.at(t.victim);this.cam.cinematic(o,l,"issen",1,3);const c=n.get(t.performer);c&&n.mode!=="standoff"&&(this.cineSubjects={a:t.performer,b:t.victim,kind:"issen",serial:c.serial}),this.env.gust(1);const h=n.get(t.victim);h&&this.cues.push({id:h.id,serial:h.serial,t:di.victimFreeze,fire:()=>this.blood(this.at(t.victim,1.2),30,void 0,!0)});break}case"perfectDodge":this.embers.emit(this.at(t.id,1),20,{color:12577023,speed:1.2,size:.08,life:.6,jitter:.8}),this.play("perfectDodge",this.at(t.id));break;case"postureBreak":{const r=a(t.pos,1.3);this.rings.spawn(r,16738874,.45,1,!1),this.sparks.burst(r,24,16752720,6),this.play("postureBreak",r),this.cam.shake(.3);break}case"finisherStart":{const r=this.at(t.performer),o=this.at(t.victim),l=Gi[t.kind].dur;this.cam.cinematic(r,o,t.kind==="flow"?"flow":"finisher",l/60*1.15,l/60*4);const c=n.get(t.performer);c&&(this.cineSubjects={a:t.performer,b:t.victim,kind:"finisher",serial:c.serial,fk:t.kind}),this.play("finisher",o,.9);break}case"finisherImpact":{const r=a(t.pos,1.25),o=this.at(t.victim).sub(this.at(t.performer)).setY(.3).normalize();this.blood(r,44,t.kind==="thrust"?o:o.clone().applyAxisAngle(Bn(0,1,0),1.2),!0),this.play("finisherImpact",r),this.cam.shake(.4),this.env.gust(.8),this.hud.pulse("flash",.12);break}case"kill":n.liveEnemies().length===0&&n.mode==="combat"&&this.mode==="campaign"&&!this.cam.inCinematic&&this.cam.cinematic(this.at(t.killer),this.at(t.victim),"killcam",1.3);break;case"glint":this.play(t.color==="blue"?"glintBlue":"glintRed",this.at(t.id),1);break;case"arrowFire":t.owner===s?this.play(t.perfect?"bowPerfect":"bowRelease",void 0,1):this.play("arrowWhiz",this.at(t.owner),.8);break;case"arrowHit":{const r=Bn(t.pos.x,t.pos.y,t.pos.z);this.play(t.blocked?"arrowBlock":t.headshot?"arrowHeadshot":"arrowHit",r),!t.blocked&&t.dmg>0?this.blood(r,t.headshot?18:8):this.mist.emit(r,6,{color:6965802,speed:2,size:.04,life:.4,gravity:8}),t.headshot&&(this.cam.fovKick=2);break}case"arrowMiss":this.mist.emit(Bn(t.pos.x,.05,t.pos.z),5,{color:9075290,speed:1,size:.12,life:.5,grow:.3,alpha:.4});break;case"fear":this.play("fear",this.at(t.id),.7);break;case"resolve":t.amount>=.5&&this.play("resolve",void 0,.6);break;case"heal":this.embers.emit(this.at(t.id,1),30,{color:16769162,speed:.8,size:.07,life:1,gravity:-1.5,jitter:.8}),this.play("heal");break;case"shieldOpen":this.mist.emit(this.at(t.id,1.2),14,{color:6961698,speed:3.5,size:.05,life:.6,gravity:8}),this.play("shieldOpen",this.at(t.id)),this.cam.shake(.25);break;case"armorShatter":{const r=a(t.pos,1.3);this.sparks.burst(r,70,16765040,9,{life:.6}),this.mist.emit(r,30,{color:3805200,speed:5,size:.06,life:1,gravity:9}),this.rings.spawn(r.clone().setY(.05),16752720,.7,4),this.play("armorShatter",r),this.cam.shake(.6),this.hud.showWave("二幕","갑옷이 부서졌다 — 이제 베기가 통한다",2.5);break}case"standoff":t.phase==="begin"?this.play("standoffTension"):t.phase==="feint"?(this.play("swingEnemy",this.at(t.id),.5,.8),this.cam.shake(.12)):t.phase==="strike"?this.play("glintBlue",this.at(t.id)):t.phase==="win"&&this.play("standoffStrike");break;case"text":this.hud.popup(t,n,this.cam.camera,window.innerWidth,window.innerHeight);break;case"wave":this.hud.showWave(t.title,t.subtitle),this.play("waveStart");break;case"waveClear":this.play("waveClear"),this.hud.showWave("승","막을 넘었다 · 화살과 체력을 추슬렀다",2.4);break;case"victory":this.play("victory"),this.resultWin=!0,this.resultTimer=3.2;break;case"defeat":this.play("defeat"),this.resultWin=!1,this.resultTimer=2.6;break;case"gale":this.play("issen",void 0,.6,1.3),this.env.gust(1),this.embers.emit(this.at(t.id,1),40,{color:11071743,speed:4,size:.06,life:.6,jitter:1});break;case"burn":this.play("fireIgnite",this.at(t.id));break}}}function sM(i){const t=new jn;if(i.kind==="kunai"){const r=new $t(new Mi(.025,.18,4),new $a({color:2763312,metalness:.7,roughness:.3}));return r.rotation.x=Math.PI/2,t.add(r),t}const e=new $t(new Ce(.007,.007,.8,4),new $a({color:13482900,roughness:.8}));e.rotation.x=Math.PI/2,e.position.z=-.4;const n=i.arrowType==="heavy"?10134445:i.arrowType==="fire"?16738842:6975350,s=new $t(new Mi(i.arrowType==="heavy"?.022:.014,.08,4),new $a({color:n,metalness:.6,roughness:.4,emissive:i.arrowType==="fire"?16729088:0,emissiveIntensity:1.5}));s.rotation.x=Math.PI/2,s.position.z=.02;const a=new $t(new Fe(.05,.002,.12),new $a({color:i.team==="player"?15722194:3355443}));return a.position.z=-.74,t.add(e,s,a),t.traverse(r=>r.castShadow=!0),t}function aM(i){const t=new Ju,e=new Vn(10,32,16),n=new Pn({side:xn,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; void main(){
      float h = vP.y;
      vec3 top = vec3(0.35, 0.3, 0.55), hor = vec3(1.6, 1.05, 0.7), gnd = vec3(0.18, 0.13, 0.08);
      vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.6)) : mix(hor * 0.6, gnd, pow(-h, 0.4));
      float sun = pow(max(0.0, dot(vP, normalize(vec3(-0.6, 0.25, 0.75)))), 64.0);
      gl_FragColor = vec4(c + vec3(4.0, 2.8, 1.6) * sun, 1.0); }`});t.add(new $t(e,n));const s=new Cc(i),a=s.fromScene(t,.02).texture;return s.dispose(),e.dispose(),n.dispose(),a}function rM(){try{const t=localStorage.getItem("wog.settings");if(t)return{...Yc,...JSON.parse(t)}}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;return{...Yc,quality:i||Math.min(window.innerWidth,window.innerHeight)<600?"low":"high"}}function oM(i){try{localStorage.setItem("wog.settings",JSON.stringify(i))}catch{}}function Vl(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}function lM(i){i.width=256,i.height=256,i.style.width="200vw",i.style.height="200vh",i.style.imageRendering="pixelated";const e=i.getContext("2d");if(!e)return;const n=e.createImageData(256,256),s=()=>{if(document.body.classList.contains("kurosawa")){for(let a=0;a<n.data.length;a+=4){const r=Math.random()*255;n.data[a]=n.data[a+1]=n.data[a+2]=r,n.data[a+3]=255}e.putImageData(n,0,0)}setTimeout(s,70)};s()}function Cu(){const i=document.getElementById("app");lM(document.getElementById("grain")),new iM(i)}const Pu=window.claude?.hot;Pu?.ready?Pu.ready(Cu):Cu();
