"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[87],{1890:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),o=t(4925),i=t(9439),a=t(2791),l=t(1350),c=t(1926),s=t(4209),u=t(6571),d=(t(3659),t(184)),f=["node","inline","className","children"];var h=function(e){var n=e.src,t=(0,a.useState)(""),h=(0,i.Z)(t,2),v=h[0],p=h[1];return(0,a.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){p(e)}))}),[n]),(0,d.jsx)("div",{className:"markdown-body",children:(0,d.jsx)(l.D,{children:v,rehypePlugins:[u.Z],remarkPlugins:[c.Z],components:{code:function(e){e.node;var n=e.inline,t=e.className,i=e.children,a=(0,o.Z)(e,f),l=/language-(\w+)/.exec(t||"");return!n&&l?(0,d.jsx)(s.Z,(0,r.Z)({children:String(i).replace(/\n$/,""),language:l[1],className:"my-code",PreTag:"div"},a)):(0,d.jsx)("code",(0,r.Z)((0,r.Z)({className:t},a),{},{children:i}))}}})})}},3427:function(e,n,t){t.r(n),t.d(n,{default:function(){return R},elements:function(){return k}});var r=t(1413),o=t(9439),i=t(2791),a=t(84),l=t(1890),c=t(6818),s=t(3433),u=t(7762),d=t(4164),f=function(e){return function(e,n){var t=null,r=null,o=null,i=function n(i){t=window.requestAnimationFrame((function(){t=null,e.apply(void 0,(0,s.Z)(i)),r=null,o&&(r=o,o=null,n(r))}))},a=function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];r=a,null===t?i(r):null!==n&&void 0!==n&&n.trailing&&(o=a)};return a.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(e.apply(void 0,(0,s.Z)(o||r)),r=o=null)},a.cancel=function(){r=o=null,null!==t&&(cancelAnimationFrame(t),t=null)},a}((function(n){(0,d.unstable_batchedUpdates)(e,n)}))},h=function(e){var n=function(e){var n,t=1/0,r=1/0,i=-1/0,a=-1/0,l=(0,u.Z)(e);try{for(l.s();!(n=l.n()).done;){var c=(0,o.Z)(n.value,2),s=c[0],d=c[1];t=Math.min(t,s),r=Math.min(r,d),i=Math.max(i,s),a=Math.max(a,d)}}catch(f){l.e(f)}finally{l.f()}return[t,r,i,a]}(e.points),t=(0,o.Z)(n,4),r=t[0],i=t[1],a=t[2],l=t[3],c=r+e.x,s=i+e.y,d=a+e.x,f=l+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]},v=function(e,n){return Math.abs(e-n)},p=0;window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var n=e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]})),t=function(e){var n=e.map((function(e){return e[0]})),t=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,s.Z)(n))-Math.min.apply(Math,(0,s.Z)(n)),height:Math.max.apply(Math,(0,s.Z)(t))-Math.min.apply(Math,(0,s.Z)(t))}}(n),r=t.width,o=t.height;return{id:"id".concat(p++),type:"freedraw",x:e.x,y:e.y,width:r,height:o,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:n,pressures:[],simulatePressure:!0,lastCommittedPoint:n[n.length-1]}}))};var m=new WeakMap,g=function(e){m.delete(e)},w=function(e,n){k.forEach((function(t,i){var a=function(e){var n=m.get(e);if(n)return n;var t,i,a=document.createElement("canvas"),l=a.getContext("2d"),c=h((0,r.Z)((0,r.Z)({},e),{},{points:e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]}))})),s=(0,o.Z)(c,4),u=s[0],d=s[1],f=s[2],p=s[3];return a.width=v(u,f)*window.devicePixelRatio+40,a.height=v(d,p)*window.devicePixelRatio+40,t=e.x>u?v(e.x,u)*window.devicePixelRatio:0,i=e.y>d?v(e.y,d)*window.devicePixelRatio:0,l.translate(t,i),l.save(),l.translate(20,20),l.scale(window.devicePixelRatio,window.devicePixelRatio),l.lineWidth=3,l.strokeStyle=e.strokeStyle,e.points.forEach((function(n,t){var r=(0,o.Z)(n,2),i=r[0],a=r[1];i-=e.x,a-=e.y,t?l.lineTo(i,a):l.moveTo(i,a)})),l.stroke(),l.restore(),m.set(e,a),a}(t),l=h((0,r.Z)((0,r.Z)({},t),{},{points:t.points.map((function(e){return[e[0]-t.x,e[1]-t.y]}))})),c=(0,o.Z)(l,4),s=c[0],u=c[1],d=c[2],f=c[3],p=((s+d)/2+n.scrollX)*window.devicePixelRatio,g=((u+f)/2+n.scrollY)*window.devicePixelRatio;e.save(),e.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),e.translate(p,g),e.drawImage(a,-(d-s)/2*window.devicePixelRatio-20,-(f-u)/2*window.devicePixelRatio-20,a.width,a.height),e.restore()}))},x=function(e,n){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),function(e,n){var t=n.draggingElement;e.save(),e.translate(n.scrollX,n.scrollY),e.beginPath(),e.lineWidth=3,e.strokeStyle=t.strokeStyle,t.points.forEach((function(n,r){r?e.lineTo.apply(e,(0,s.Z)(n)):e.moveTo.apply(e,(0,s.Z)(t.points[0]))})),e.stroke(),e.restore()}(t,n)},y=function(e,n){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),w(t,n),localStorage.setItem("free-draw-elements",JSON.stringify(k))},Z=t(184),k=JSON.parse(localStorage.getItem("free-draw-elements"))||[],M={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},R=(0,i.memo)((function(){var e=(0,i.useRef)(null),n=(0,i.useRef)(null),s=(0,i.useRef)(null),u=(0,i.useState)(!1),d=(0,o.Z)(u,2),h=d[0],v=d[1],p=(0,i.useRef)(null);(0,i.useEffect)((function(){var t=function(e){var n=e.getContext("2d");e.width=o*window.devicePixelRatio,e.height=i*window.devicePixelRatio,n.scale(window.devicePixelRatio,window.devicePixelRatio)},r=e.current,o=r.offsetWidth,i=r.offsetHeight;t(r),t(s.current);var a=r.getBoundingClientRect(),l=a.x,c=a.y;M.offsetLeft=l,M.offsetTop=c,y(s.current,M);var u=n.current,d=function(e){e.preventDefault()};return u.addEventListener("wheel",d,{passive:!1}),function(){u.removeEventListener("wheel",d)}}),[]),(0,i.useEffect)((function(){t.e(251).then(t.bind(t,9251)).then((function(e){}))}),[]);var m=function(n){return f((function(n){var t=(0,a.d)(n,M);M.draggingElement.points.push([t.x,t.y]),x(e.current,M)}))},w=function(n){return function(){g(M.draggingElement),k.push(M.draggingElement),console.log("appState...",M),console.log("elements...",k.map((function(e){return e.points.length})));var t=e.current;t.getContext("2d").clearRect(0,0,t.width,t.height),y(s.current,M),window.removeEventListener("pointermove",n.eventListeners.onMove),window.removeEventListener("pointerup",n.eventListeners.onUp)}},R=f((function(n){var t=n.deltaX,r=n.deltaY;M.scrollX=M.scrollX-t,M.scrollY=M.scrollY-r,s.current.style.transform="translate(".concat(M.scrollX,"px, ").concat(M.scrollY,"px)"),p.current&&clearTimeout(p.current),p.current=setTimeout((function(){var n=e.current,t=n.getContext("2d");console.log("appState.....",M),t.clearRect(0,0,n.width,n.height),y(s.current,M),s.current.style.transform="translate(0px, 0px)"}),300)}));return(0,Z.jsxs)("div",{className:"transform",children:[(0,Z.jsxs)("div",{className:"container wrap",ref:n,children:[(0,Z.jsx)("canvas",{ref:s,className:"canvas",children:"\u9759\u6001canvas"}),(0,Z.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var n=(0,a.d)(e,M),t={origin:n,lastCoords:(0,r.Z)({},n),eventListeners:{onMove:null,onUp:null}},o={x:t.origin.x,y:t.origin.y,points:[[t.origin.x,t.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,a.B)()};M.draggingElement=o,g(o);var i=m(t),l=w(t);window.addEventListener("pointermove",i),window.addEventListener("pointerup",l),t.eventListeners.onMove=i,t.eventListeners.onUp=l},onWheel:R,children:"\u52a8\u6001canvas"}),(0,Z.jsx)("button",{className:"btn clear",onClick:function(){localStorage.setItem("free-draw-elements",JSON.stringify([])),k=[],y(s.current,M)},children:"\u6e05\u7a7alocalstorage"}),(0,Z.jsx)("button",{className:"btn",onClick:function(){h||(v(!0),t.e(251).then(t.bind(t,9251)).then((function(e){var n=e.default;localStorage.setItem("free-draw-elements",JSON.stringify(n)),k=n,y(s.current,M)})).finally((function(){v(!1)})))},children:"\u6781\u9650\u6d4b\u8bd5"})]}),(0,Z.jsx)(l.Z,{src:c})]})}))},84:function(e,n,t){t.d(n,{B:function(){return o},d:function(){return r}});var r=function(e,n){var t=e.clientX,r=e.clientY,o=n.offsetLeft,i=n.offsetTop;return{x:t-o-n.scrollX,y:r-i-n.scrollY}},o=function(){var e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(n,",").concat(t,")")}},6818:function(e,n,t){e.exports=t.p+"static/media/\u70b9\u7a00\u91ca.31d6cfe0d16ae931b73c.md"}}]);
//# sourceMappingURL=Translate.97c59757.chunk.js.map