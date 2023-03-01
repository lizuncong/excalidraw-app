"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[13],{1890:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(1413),o=t(4925),a=t(9439),i=t(2791),l=t(1350),u=t(1926),c=t(4209),s=t(6571),f=(t(3659),t(184)),d=["node","inline","className","children"];var h=function(n){var e=n.src,t=(0,i.useState)(""),h=(0,a.Z)(t,2),p=h[0],m=h[1];return(0,i.useEffect)((function(){fetch(e).then((function(n){return n.text()})).then((function(n){m(n)}))}),[e]),(0,f.jsx)("div",{className:"markdown-body",children:(0,f.jsx)(l.D,{children:p,rehypePlugins:[s.Z],remarkPlugins:[u.Z],components:{code:function(n){n.node;var e=n.inline,t=n.className,a=n.children,i=(0,o.Z)(n,d),l=/language-(\w+)/.exec(t||"");return!e&&l?(0,f.jsx)(c.Z,(0,r.Z)({children:String(a).replace(/\n$/,""),language:l[1],className:"my-code",PreTag:"div"},i)):(0,f.jsx)("code",(0,r.Z)((0,r.Z)({className:t},i),{},{children:a}))}}})})}},4616:function(n,e,t){t.r(e),t.d(e,{default:function(){return m},elements:function(){return h}});var r=t(1413),o=t(2791),a=t(84),i=t(1890),l=t(6818),u=t(3433),c=function(n,e){var t,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),t=r,h.forEach((function(n){t.save(),t.beginPath(),t.lineWidth=3,t.strokeStyle=n.strokeStyle,n.points.forEach((function(e,r){r?t.lineTo.apply(t,(0,u.Z)(e)):t.moveTo.apply(t,(0,u.Z)(n.points[0]))})),t.stroke(),t.restore()})),localStorage.setItem("free-draw-elements",JSON.stringify(h))},s=t(4164),f=function(n){return function(n,e){var t=null,r=null,o=null,a=function e(a){t=window.requestAnimationFrame((function(){t=null,n.apply(void 0,(0,u.Z)(a)),r=null,o&&(r=o,o=null,e(r))}))},i=function(){for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];r=i,null===t?a(r):null!==e&&void 0!==e&&e.trailing&&(o=i)};return i.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(n.apply(void 0,(0,u.Z)(o||r)),r=o=null)},i.cancel=function(){r=o=null,null!==t&&(cancelAnimationFrame(t),t=null)},i}((function(e){(0,s.unstable_batchedUpdates)(n,e)}))},d=t(184),h=JSON.parse(localStorage.getItem("free-draw-elements"))||[],p={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},m=(0,o.memo)((function(){var n=(0,o.useRef)(null),e=(0,o.useRef)(null);(0,o.useEffect)((function(){var t=n.current,r=t.getContext("2d"),o=t.offsetWidth,a=t.offsetHeight,i=t.offsetLeft,l=t.offsetTop;t.width=o*window.devicePixelRatio,t.height=a*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio),p.offsetLeft=i,p.offsetTop=l,c(t,p);var u=e.current,s=function(n){n.preventDefault()};return u.addEventListener("wheel",s,{passive:!1}),function(){u.removeEventListener("wheel",s)}}),[]);var t=function(e){return f((function(e){var t=(0,a.dE)(e,p);p.draggingElement.points.push([t.x,t.y]),c(n.current,p)}))},u=function(n){return function(){console.log("appState...",p),console.log("elements...",h.map((function(n){return n.points.length}))),window.removeEventListener("pointermove",n.eventListeners.onMove),window.removeEventListener("pointerup",n.eventListeners.onUp)}};return(0,d.jsxs)("div",{className:"dilution",children:[(0,d.jsx)("div",{className:"container",ref:e,children:(0,d.jsx)("canvas",{ref:n,className:"canvas",onPointerDown:function(n){var e=(0,a.dE)(n,p),o={origin:e,lastCoords:(0,r.Z)({},e),eventListeners:{onMove:null,onUp:null}},i={x:o.origin.x,y:o.origin.y,points:[[o.origin.x,o.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,a.B8)()};p.draggingElement=i,h.push(i);var l=t(o),c=u(o);window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),o.eventListeners.onMove=l,o.eventListeners.onUp=c},children:"\u7ed8\u5236canvas"})}),(0,d.jsx)(i.Z,{src:l})]})}))},84:function(n,e,t){t.d(e,{$9:function(){return c},B8:function(){return u},KP:function(){return d},TE:function(){return p},dE:function(){return l},qf:function(){return h}});var r=t(9439),o=t(7762),a=t(3433),i=t(4164),l=function(n,e){var t=n.clientX,r=n.clientY,o=e.offsetLeft,a=e.offsetTop;return{x:t-o-e.scrollX,y:r-a-e.scrollY}},u=function(){var n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(n,",").concat(e,",").concat(t,")")},c=function(n){return function(n,e){var t=null,r=null,o=null,i=function e(i){t=window.requestAnimationFrame((function(){t=null,n.apply(void 0,(0,a.Z)(i)),r=null,o&&(r=o,o=null,e(r))}))},l=function(){for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];r=a,null===t?i(r):null!==e&&void 0!==e&&e.trailing&&(o=a)};return l.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(n.apply(void 0,(0,a.Z)(o||r)),r=o=null)},l.cancel=function(){r=o=null,null!==t&&(cancelAnimationFrame(t),t=null)},l}((function(e){(0,i.unstable_batchedUpdates)(n,e)}))},s=function(n){var e=1/0,t=1/0,a=-1/0,i=-1/0,l=n.points;"freedraw"===n.type&&(l=n.points.map((function(e){return[e[0]-n.x,e[1]-n.y]})));var u,c=(0,o.Z)(l);try{for(c.s();!(u=c.n()).done;){var s=(0,r.Z)(u.value,2),f=s[0],d=s[1];e=Math.min(e,f),t=Math.min(t,d),a=Math.max(a,f),i=Math.max(i,d)}}catch(h){c.e(h)}finally{c.f()}return[e,t,a,i]},f=function(n,e,t,r,o){return[(n-t)*Math.cos(o)-(e-r)*Math.sin(o)+t,(n-t)*Math.sin(o)+(e-r)*Math.cos(o)+r]},d=function(n){if(!n.length)return[0,0,0,0];var e=1/0,t=-1/0,o=1/0,a=-1/0;return n.forEach((function(n){var i=function(n){var e=h(n),t=(0,r.Z)(e,6),o=t[0],a=t[1],i=t[2],l=t[3],u=t[4],c=t[5];if("freedraw"===n.type){var d=s(n),p=(0,r.Z)(d,4),m=p[0],v=p[1],g=p[2],w=p[3];return[m+n.x,v+n.y,g+n.x,w+n.y]}var y=f(o,a,u,c,n.angle),x=(0,r.Z)(y,2),M=x[0],Z=x[1],E=f(o,l,u,c,n.angle),k=(0,r.Z)(E,2),S=k[0],L=k[1],b=f(i,l,u,c,n.angle),N=(0,r.Z)(b,2),P=N[0],C=N[1],j=f(i,a,u,c,n.angle),A=(0,r.Z)(j,2),T=A[0],R=A[1];return[Math.min(M,S,P,T),Math.min(Z,L,C,R),Math.max(M,S,P,T),Math.max(Z,L,C,R)]}(n),l=(0,r.Z)(i,4),u=l[0],c=l[1],d=l[2],p=l[3];e=Math.min(e,u),o=Math.min(o,c),t=Math.max(t,d),a=Math.max(a,p)})),[e,o,t,a]},h=function(n){if("freedraw"===n.type){var e=s(n),t=(0,r.Z)(e,4),o=t[0],a=t[1],i=t[2],l=t[3],u=o+n.x,c=a+n.y,f=i+n.x,d=l+n.y;return[u,c,f,d,(u+f)/2,(c+d)/2]}return[n.x,n.y,n.x+n.width,n.y+n.height,n.x+n.width/2,n.y+n.height/2]},p=function(n,e){return Math.abs(n-e)},m=0;window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(n){var e=n.points.map((function(e){return[e[0]-n.x,e[1]-n.y]})),t=function(n){var e=n.map((function(n){return n[0]})),t=n.map((function(n){return n[1]}));return{width:Math.max.apply(Math,(0,a.Z)(e))-Math.min.apply(Math,(0,a.Z)(e)),height:Math.max.apply(Math,(0,a.Z)(t))-Math.min.apply(Math,(0,a.Z)(t))}}(e),r=t.width,o=t.height;return{id:"id".concat(m++),type:"freedraw",x:n.x,y:n.y,width:r,height:o,angle:0,strokeColor:n.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:e,pressures:[],simulatePressure:!0,lastCommittedPoint:e[e.length-1]}}))}},6818:function(n,e,t){n.exports=t.p+"static/media/\u70b9\u7a00\u91ca.31d6cfe0d16ae931b73c.md"}}]);
//# sourceMappingURL=Dilution.f407687d.chunk.js.map