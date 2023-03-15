!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],f=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;f=!1}else for(;!(f=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);f=!0);}catch(c){s=!0,a=c}finally{try{if(!f&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=function(e){var r=1/0,a=1/0,o=-1/0,l=-1/0,i=e.points;"freedraw"===e.type&&(i=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var f,s=function(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){f=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(f)throw l}}}}(i);try{for(s.s();!(f=s.n()).done;){var c=n(f.value,2),u=c[0],v=c[1];r=Math.min(r,u),a=Math.min(a,v),o=Math.max(o,u),l=Math.max(l,v)}}catch(h){s.e(h)}finally{s.f()}return[r,a,o,l]},a=function(e,t){return Math.abs(e-t)},o=function(e){if("freedraw"===e.type){var t=n(r(e),4),a=t[0],o=t[1],l=t[2],i=t[3],f=a+e.x,s=o+e.y,c=l+e.x,u=i+e.y;return[f,s,c,u,(f+c)/2,(s+u)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},l=function(e,t,n,r,a){return[(e-n)*Math.cos(a)-(t-r)*Math.sin(a)+n,(e-n)*Math.sin(a)+(t-r)*Math.cos(a)+r]},i=function(e,t){var n=e.clientX,r=e.clientY,a=t.zoom,o=t.offsetLeft,l=t.offsetTop,i=t.scrollX,f=t.scrollY,s=a?a.value:1;return{x:(n-o)/s-i,y:(r-l)/s-f}},f=new WeakMap,s=function(e,t){var n=f.get(e);if(n&&!t.notUseCache)return n;var r=u(e,t.zoom,t);return t.notUseCache||f.set(e,r),r},c="object"===typeof document,u=function(e,t,r){var l,i,f=c?window.devicePixelRatio:r.devicePixelRatio,s=h(e);if("freedraw"===e.type){var u,y,d=n(o(e),4),m=d[0],p=d[1],g=d[2],x=d[3];i=(l=new OffscreenCanvas(a(m,g)*f*t.value+s*t.value*2,a(p,x)*f*t.value+s*t.value*2)).getContext("2d"),u=e.x>m?a(e.x,m)*f*t.value:0,y=e.y>p?a(e.y,p)*t.value*f:0,i.translate(u,y)}else i=(l=new OffscreenCanvas(e.width*f*t.value+s*t.value*2,e.height*f*t.value+s*t.value*2)).getContext("2d");return i.save(),i.translate(s*t.value,s*t.value),i.scale(f*t.value,f*t.value),v(e,i,r),i.restore(),{element:e,canvas:l,theme:r.theme,canvasZoom:t,canvasOffsetX:0,canvasOffsetY:0}},v=function(e,t,r){switch(t.globalAlpha=e.opacity/100,e.type){case"rectangle":t.lineJoin="round",t.lineCap="round",t.lineWidth=e.strokeWidth,t.strokeStyle=r.strokeStyle||e.strokeStyle,t.strokeRect(0,0,e.width,e.height);break;case"text":t.font=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}(e),t.fillStyle=r.fillStyle||e.strokeColor,t.textAlign=e.textAlign;var a=e.text.split("\n"),o=a.length?e.height/a.length:18;t.textBaseline="bottom";for(var l=0;l<a.length;l++)t.fillText(a[l],0,(l+1)*o);break;case"freedraw":t.save(),t.lineWidth=e.strokeWidth,t.strokeStyle=r.strokeStyle||e.strokeStyle,e.points.forEach((function(r,a){var o=n(r,2),l=o[0],i=o[1];l-=e.x,i-=e.y,a?t.lineTo(l,i):t.moveTo(l,i)})),t.stroke(),t.restore()}t.globalAlpha=1},h=function(e){return"freedraw"===e.type?12*e.strokeWidth:20},y=function(e,t,r){var a=c?window.devicePixelRatio:r.devicePixelRatio,l=e.element,i=h(l),f=n(o(l),4),s=f[0],u=f[1],v=f[2],y=f[3];if("freedraw"===l.type){var d=n(o(l),4);s=d[0],u=d[1],v=d[2],y=d[3]}var m=((s+v)/2+r.scrollX)*a,p=((u+y)/2+r.scrollY)*a;t.save(),t.scale(1/a,1/a),t.translate(m,p),t.drawImage(e.canvas,-(v-s)/2*a-i*e.canvasZoom.value/e.canvasZoom.value,-(y-u)/2*a-i*e.canvasZoom.value/e.canvasZoom.value,e.canvas.width/e.canvasZoom.value,e.canvas.height/e.canvasZoom.value),t.restore()},d=function(e,t,a,f){var s=function(e){var t=n(o(e),6),a=t[0],i=t[1],f=t[2],s=t[3],c=t[4],u=t[5];if("freedraw"===e.type){var v=n(r(e),4),h=v[0],y=v[1],d=v[2],m=v[3];return[h+e.x,y+e.y,d+e.x,m+e.y]}var p=n(l(a,i,c,u,e.angle),2),g=p[0],x=p[1],w=n(l(a,s,c,u,e.angle),2),b=w[0],S=w[1],T=n(l(f,s,c,u,e.angle),2),k=T[0],A=T[1],M=n(l(f,i,c,u,e.angle),2),C=M[0],X=M[1];return[Math.min(g,b,k,C),Math.min(x,S,A,X),Math.max(g,b,k,C),Math.max(x,S,A,X)]}(e),c=n(s,4),u=c[0],v=c[1],h=c[2],y=c[3],d=i({clientX:f.offsetLeft,clientY:f.offsetTop},f),m=i({clientX:f.offsetLeft+t,clientY:f.offsetTop+a},f);return d.x<=h&&d.y<=y&&m.x>=u&&m.y>=v},m=function(e){var t=e.elements,n=e.appState,r=e.scale,a=e.canvas,o=e.renderConfig,l=a.getContext("2d");l.save(),l.scale(r,r);var i=a.width/r,f=a.height/r;if(l.clearRect(0,0,i,f),l.save(),l.scale(o.zoom.value,o.zoom.value),o.isExport&&t||function(e,t){var n=t.scrollX,r=t.scrollY,a=t.zoom;e.save();var o=100,l=100,i=e.canvas;e.strokeStyle="red",e.fillStyle="red",e.beginPath(),e.lineWidth=2,e.textBaseline="middle",e.save(),e.translate(0,r);for(var f=0;f<r/o;f++)e.moveTo(0,-f*o),e.lineTo(8,-f*o),e.font="10px Arial",e.fillText(-f,0,-f*o+10);for(var s=1;s<(i.height-r*a.value)/(o*a.value);s++)e.moveTo(0,s*o),e.lineTo(8,s*o),e.font="10px Arial",e.fillText(s,0,s*o+10);e.restore(),e.save(),e.translate(n,0);for(var c=0;c<n/l;c++)e.moveTo(-c*l,0),e.lineTo(-c*l,8),e.font="10px Arial",e.fillText(-c,-c*l+5,5);for(var u=1;u<(i.width-n*a.value)/(l*a.value);u++)e.moveTo(u*l,0),e.lineTo(u*l,8),e.font="10px Arial",e.fillText(u,u*l+5,5);e.restore(),e.stroke(),e.restore()}(l,o),t){var c=t.filter((function(e){return d(e,i,f,{zoom:o.zoom,offsetLeft:n.offsetLeft,offsetTop:n.offsetTop,scrollX:o.scrollX,scrollY:o.scrollY})}));console.log("worker\u7ed8\u5236\u5143\u7d20\u603b\u6570\uff1a".concat(t.length,"\uff0c\u5b9e\u9645\u7ed8\u5236\u5143\u7d20\u603b\u6570\uff1a").concat(c.length)),c.forEach((function(e){!function(e,t,n,r){var a=s(e,n);y(a,t,n)}(e,l,o)}))}l.restore(),l.restore()};let p=null,g=[];self.onmessage=e=>{const{elements:t,canvasWorker:n,appState:r,scale:a,renderConfig:o,type:l}=e.data;n&&(p=n),t&&(g=t),console.log("worker\u63a5\u6536\u5230\u6d88\u606f\u5e76\u7ed8\u5236....",g.length),m({elements:g,appState:r,scale:a,canvas:p,renderConfig:o})}}();
//# sourceMappingURL=file.worker.3a511470.worker.js.map