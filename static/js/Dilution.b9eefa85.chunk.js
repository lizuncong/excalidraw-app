"use strict";(this.webpackChunkexcalidraw_app=this.webpackChunkexcalidraw_app||[]).push([[13],{5650:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(1413),i=t(4925),o=t(9439),a=t(4519),l=t(9149),u=t(9410),c=t(8106),f=t(1695),s=(t(9011),t(2556)),d=["node","inline","className","children"];var h=function(n){var e=n.src,t=(0,a.useState)(""),h=(0,o.Z)(t,2),v=h[0],m=h[1];return(0,a.useEffect)((function(){fetch(e).then((function(n){return n.text()})).then((function(n){m(n)}))}),[e]),(0,s.jsx)("div",{className:"markdown-body",children:(0,s.jsx)(l.D,{children:v,rehypePlugins:[f.Z],remarkPlugins:[u.Z],components:{code:function(n){n.node;var e=n.inline,t=n.className,o=n.children,a=(0,i.Z)(n,d),l=/language-(\w+)/.exec(t||"");return!e&&l?(0,s.jsx)(c.Z,(0,r.Z)({children:String(o).replace(/\n$/,""),language:l[1],className:"my-code",PreTag:"div"},a)):(0,s.jsx)("code",(0,r.Z)((0,r.Z)({className:t},a),{},{children:o}))}}})})}},5220:function(n,e,t){t.r(e),t.d(e,{default:function(){return m},elements:function(){return h}});var r=t(1413),i=t(4519),o=t(5204),a=t(5650),l=t(6818),u=t(3433),c=function(n,e){var t,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),t=r,h.forEach((function(n){t.save(),t.beginPath(),t.lineWidth=3,t.strokeStyle=n.strokeStyle,n.points.forEach((function(e,r){r?t.lineTo.apply(t,(0,u.Z)(e)):t.moveTo.apply(t,(0,u.Z)(n.points[0]))})),t.stroke(),t.restore()})),localStorage.setItem("free-draw-elements",JSON.stringify(h))},f=t(4453),s=function(n){return function(n,e){var t=null,r=null,i=null,o=function e(o){t=window.requestAnimationFrame((function(){t=null,n.apply(void 0,(0,u.Z)(o)),r=null,i&&(r=i,i=null,e(r))}))},a=function(){for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];r=a,null===t?o(r):null!==e&&void 0!==e&&e.trailing&&(i=a)};return a.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(n.apply(void 0,(0,u.Z)(i||r)),r=i=null)},a.cancel=function(){r=i=null,null!==t&&(cancelAnimationFrame(t),t=null)},a}((function(e){(0,f.unstable_batchedUpdates)(n,e)}))},d=t(2556),h=JSON.parse(localStorage.getItem("free-draw-elements"))||[],v={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},m=(0,i.memo)((function(){var n=(0,i.useRef)(null),e=(0,i.useRef)(null);(0,i.useEffect)((function(){var t=n.current,r=t.getContext("2d"),i=t.offsetWidth,o=t.offsetHeight,a=t.offsetLeft,l=t.offsetTop;t.width=i*window.devicePixelRatio,t.height=o*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio),v.offsetLeft=a,v.offsetTop=l,c(t,v);var u=e.current,f=function(n){n.preventDefault()};return u.addEventListener("wheel",f,{passive:!1}),function(){u.removeEventListener("wheel",f)}}),[]);var t=function(e){return s((function(e){var t=(0,o.dE)(e,v);v.draggingElement.points.push([t.x,t.y]),c(n.current,v)}))},u=function(n){return function(){window.removeEventListener("pointermove",n.eventListeners.onMove),window.removeEventListener("pointerup",n.eventListeners.onUp)}};return(0,d.jsxs)("div",{className:"dilution",children:[(0,d.jsx)("div",{className:"container",ref:e,children:(0,d.jsx)("canvas",{ref:n,className:"canvas",onPointerDown:function(n){var e=(0,o.dE)(n,v),i={origin:e,lastCoords:(0,r.Z)({},e),eventListeners:{onMove:null,onUp:null}},a={x:i.origin.x,y:i.origin.y,points:[[i.origin.x,i.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,o.B8)()};v.draggingElement=a,h.push(a);var l=t(i),c=u(i);window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),i.eventListeners.onMove=l,i.eventListeners.onUp=c},children:"\u7ed8\u5236canvas"})}),(0,d.jsx)(a.Z,{src:l})]})}))},5204:function(n,e,t){t.d(e,{$9:function(){return c},B8:function(){return u},KP:function(){return h},Pi:function(){return d},TE:function(){return m},dE:function(){return l},kb:function(){return g},mO:function(){return w},qf:function(){return v}});var r=t(9439),i=t(7762),o=t(3433),a=t(4453),l=function(n,e){var t=n.clientX,r=n.clientY,i=e.zoom,o=e.offsetLeft,a=e.offsetTop,l=e.scrollX,u=e.scrollY,c=i?i.value:1;return{x:(t-o)/c-l,y:(r-a)/c-u}},u=function(){var n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(n,",").concat(e,",").concat(t,")")},c=function(n){return function(n,e){var t=null,r=null,i=null,a=function e(a){t=window.requestAnimationFrame((function(){t=null,n.apply(void 0,(0,o.Z)(a)),r=null,i&&(r=i,i=null,e(r))}))},l=function(){for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];r=o,null===t?a(r):null!==e&&void 0!==e&&e.trailing&&(i=o)};return l.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(n.apply(void 0,(0,o.Z)(i||r)),r=i=null)},l.cancel=function(){r=i=null,null!==t&&(cancelAnimationFrame(t),t=null)},l}((function(e){(0,a.unstable_batchedUpdates)(n,e)}))},f=function(n){var e=1/0,t=1/0,o=-1/0,a=-1/0,l=n.points;"freedraw"===n.type&&(l=n.points.map((function(e){return[e[0]-n.x,e[1]-n.y]})));var u,c=(0,i.Z)(l);try{for(c.s();!(u=c.n()).done;){var f=(0,r.Z)(u.value,2),s=f[0],d=f[1];e=Math.min(e,s),t=Math.min(t,d),o=Math.max(o,s),a=Math.max(a,d)}}catch(h){c.e(h)}finally{c.f()}return[e,t,o,a]},s=function(n,e,t,r,i){return[(n-t)*Math.cos(i)-(e-r)*Math.sin(i)+t,(n-t)*Math.sin(i)+(e-r)*Math.cos(i)+r]},d=function(n){var e=v(n),t=(0,r.Z)(e,6),i=t[0],o=t[1],a=t[2],l=t[3],u=t[4],c=t[5];if("freedraw"===n.type){var d=f(n),h=(0,r.Z)(d,4),m=h[0],p=h[1],g=h[2],w=h[3];return[m+n.x,p+n.y,g+n.x,w+n.y]}var x=s(i,o,u,c,n.angle),y=(0,r.Z)(x,2),Z=y[0],M=y[1],E=s(i,l,u,c,n.angle),L=(0,r.Z)(E,2),k=L[0],b=L[1],S=s(a,l,u,c,n.angle),P=(0,r.Z)(S,2),N=P[0],j=P[1],A=s(a,o,u,c,n.angle),T=(0,r.Z)(A,2),C=T[0],F=T[1];return[Math.min(Z,k,N,C),Math.min(M,b,j,F),Math.max(Z,k,N,C),Math.max(M,b,j,F)]},h=function(n){if(!n.length)return[0,0,0,0];var e=1/0,t=-1/0,i=1/0,o=-1/0;return n.forEach((function(n){var a=d(n),l=(0,r.Z)(a,4),u=l[0],c=l[1],f=l[2],s=l[3];e=Math.min(e,u),i=Math.min(i,c),t=Math.max(t,f),o=Math.max(o,s)})),[e,i,t,o]},v=function(n){if("freedraw"===n.type){var e=f(n),t=(0,r.Z)(e,4),i=t[0],o=t[1],a=t[2],l=t[3],u=i+n.x,c=o+n.y,s=a+n.x,d=l+n.y;return[u,c,s,d,(u+s)/2,(c+d)/2]}return[n.x,n.y,n.x+n.width,n.y+n.height,n.x+n.width/2,n.y+n.height/2]},m=function(n,e){return Math.abs(n-e)},p=0,g=function(){return"id".concat(p++)},w=function(n){var e=n.fontSize,t=n.fontFamily;return"".concat(e,"px ").concat(t,", Segoe UI Emoji")}},6818:function(n,e,t){n.exports=t.p+"static/media/\u70b9\u7a00\u91ca.31d6cfe0d16ae931b73c.md"}}]);
//# sourceMappingURL=Dilution.b9eefa85.chunk.js.map