"use strict";(this.webpackChunkexcalidraw_app=this.webpackChunkexcalidraw_app||[]).push([[826],{5650:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(1413),i=t(4925),o=t(9439),a=t(4519),c=t(9149),u=t(9410),l=t(8106),f=t(1695),s=(t(9011),t(2556)),d=["node","inline","className","children"];var h=function(n){var e=n.src,t=(0,a.useState)(""),h=(0,o.Z)(t,2),v=h[0],m=h[1];return(0,a.useEffect)((function(){fetch(e).then((function(n){return n.text()})).then((function(n){m(n)}))}),[e]),(0,s.jsx)("div",{className:"markdown-body",children:(0,s.jsx)(c.D,{children:v,rehypePlugins:[f.Z],remarkPlugins:[u.Z],components:{code:function(n){n.node;var e=n.inline,t=n.className,o=n.children,a=(0,i.Z)(n,d),c=/language-(\w+)/.exec(t||"");return!e&&c?(0,s.jsx)(l.Z,(0,r.Z)({children:String(o).replace(/\n$/,""),language:c[1],className:"my-code",PreTag:"div"},a)):(0,s.jsx)("code",(0,r.Z)((0,r.Z)({className:t},a),{},{children:o}))}}})})}},199:function(n,e,t){t.r(e),t.d(e,{default:function(){return h},elements:function(){return s}});var r=t(1413),i=t(4519),o=t(5204),a=t(5650),c=t.p+"static/media/\u81ea\u7531\u7ed8\u5236.31d6cfe0d16ae931b73c.md",u=t(3433),l=function(n,e){var t,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),t=r,s.forEach((function(n){t.save(),t.beginPath(),t.lineWidth=3,t.strokeStyle=n.strokeStyle,n.points.forEach((function(e,r){r?t.lineTo.apply(t,(0,u.Z)(e)):t.moveTo.apply(t,(0,u.Z)(n.points[0]))})),t.stroke(),t.restore()})),localStorage.setItem("free-draw-elements",JSON.stringify(s))},f=t(2556),s=JSON.parse(localStorage.getItem("free-draw-elements"))||[],d={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},h=(0,i.memo)((function(){var n=(0,i.useRef)(null),e=(0,i.useRef)(null);(0,i.useEffect)((function(){var t=n.current,r=t.getContext("2d"),i=t.offsetWidth,o=t.offsetHeight,a=t.offsetLeft,c=t.offsetTop;t.width=i*window.devicePixelRatio,t.height=o*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio),d.offsetLeft=a,d.offsetTop=c,l(t,d);var u=e.current,f=function(n){n.preventDefault()};return u.addEventListener("wheel",f,{passive:!1}),function(){u.removeEventListener("wheel",f)}}),[]);var t=function(e){return function(e){var t=(0,o.dE)(e,d);d.draggingElement.points.push([t.x,t.y]),l(n.current,d)}},u=function(n){return function(){window.removeEventListener("pointermove",n.eventListeners.onMove),window.removeEventListener("pointerup",n.eventListeners.onUp)}};return(0,f.jsxs)("div",{className:"free-draw",children:[(0,f.jsx)("div",{className:"container",ref:e,children:(0,f.jsx)("canvas",{ref:n,className:"canvas",onPointerDown:function(n){var e=(0,o.dE)(n,d),i={origin:e,lastCoords:(0,r.Z)({},e),eventListeners:{onMove:null,onUp:null}},a={x:i.origin.x,y:i.origin.y,points:[[i.origin.x,i.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,o.B8)()};d.draggingElement=a,s.push(a);var c=t(i),l=u(i);window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),i.eventListeners.onMove=c,i.eventListeners.onUp=l},children:"\u7ed8\u5236canvas"})}),(0,f.jsx)(a.Z,{src:c})]})}))},5204:function(n,e,t){t.d(e,{$9:function(){return l},B8:function(){return u},KP:function(){return h},Pi:function(){return d},TE:function(){return m},dE:function(){return c},kb:function(){return g},mO:function(){return w},qf:function(){return v}});var r=t(9439),i=t(7762),o=t(3433),a=t(4453),c=function(n,e){var t=n.clientX,r=n.clientY,i=e.zoom,o=e.offsetLeft,a=e.offsetTop,c=e.scrollX,u=e.scrollY,l=i?i.value:1;return{x:(t-o)/l-c,y:(r-a)/l-u}},u=function(){var n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(n,",").concat(e,",").concat(t,")")},l=function(n){return function(n,e){var t=null,r=null,i=null,a=function e(a){t=window.requestAnimationFrame((function(){t=null,n.apply(void 0,(0,o.Z)(a)),r=null,i&&(r=i,i=null,e(r))}))},c=function(){for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];r=o,null===t?a(r):null!==e&&void 0!==e&&e.trailing&&(i=o)};return c.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(n.apply(void 0,(0,o.Z)(i||r)),r=i=null)},c.cancel=function(){r=i=null,null!==t&&(cancelAnimationFrame(t),t=null)},c}((function(e){(0,a.unstable_batchedUpdates)(n,e)}))},f=function(n){var e=1/0,t=1/0,o=-1/0,a=-1/0,c=n.points;"freedraw"===n.type&&(c=n.points.map((function(e){return[e[0]-n.x,e[1]-n.y]})));var u,l=(0,i.Z)(c);try{for(l.s();!(u=l.n()).done;){var f=(0,r.Z)(u.value,2),s=f[0],d=f[1];e=Math.min(e,s),t=Math.min(t,d),o=Math.max(o,s),a=Math.max(a,d)}}catch(h){l.e(h)}finally{l.f()}return[e,t,o,a]},s=function(n,e,t,r,i){return[(n-t)*Math.cos(i)-(e-r)*Math.sin(i)+t,(n-t)*Math.sin(i)+(e-r)*Math.cos(i)+r]},d=function(n){var e=v(n),t=(0,r.Z)(e,6),i=t[0],o=t[1],a=t[2],c=t[3],u=t[4],l=t[5];if("freedraw"===n.type){var d=f(n),h=(0,r.Z)(d,4),m=h[0],p=h[1],g=h[2],w=h[3];return[m+n.x,p+n.y,g+n.x,w+n.y]}var x=s(i,o,u,l,n.angle),y=(0,r.Z)(x,2),M=y[0],Z=y[1],E=s(i,c,u,l,n.angle),L=(0,r.Z)(E,2),k=L[0],S=L[1],b=s(a,c,u,l,n.angle),P=(0,r.Z)(b,2),N=P[0],j=P[1],T=s(a,o,u,l,n.angle),C=(0,r.Z)(T,2),R=C[0],U=C[1];return[Math.min(M,k,N,R),Math.min(Z,S,j,U),Math.max(M,k,N,R),Math.max(Z,S,j,U)]},h=function(n){if(!n.length)return[0,0,0,0];var e=1/0,t=-1/0,i=1/0,o=-1/0;return n.forEach((function(n){var a=d(n),c=(0,r.Z)(a,4),u=c[0],l=c[1],f=c[2],s=c[3];e=Math.min(e,u),i=Math.min(i,l),t=Math.max(t,f),o=Math.max(o,s)})),[e,i,t,o]},v=function(n){if("freedraw"===n.type){var e=f(n),t=(0,r.Z)(e,4),i=t[0],o=t[1],a=t[2],c=t[3],u=i+n.x,l=o+n.y,s=a+n.x,d=c+n.y;return[u,l,s,d,(u+s)/2,(l+d)/2]}return[n.x,n.y,n.x+n.width,n.y+n.height,n.x+n.width/2,n.y+n.height/2]},m=function(n,e){return Math.abs(n-e)},p=0,g=function(){return"id".concat(p++)},w=function(n){var e=n.fontSize,t=n.fontFamily;return"".concat(e,"px ").concat(t,", Segoe UI Emoji")}}}]);
//# sourceMappingURL=FreeDraw.b0e20617.chunk.js.map