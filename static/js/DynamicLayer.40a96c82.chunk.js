"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[246],{1890:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),i=t(4925),o=t(9439),a=t(2791),l=t(1350),c=t(1926),s=t(4209),u=t(6571),d=(t(3659),t(184)),f=["node","inline","className","children"];var h=function(e){var n=e.src,t=(0,a.useState)(""),h=(0,o.Z)(t,2),v=h[0],g=h[1];return(0,a.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){g(e)}))}),[n]),(0,d.jsx)("div",{className:"markdown-body",children:(0,d.jsx)(l.D,{children:v,rehypePlugins:[u.Z],remarkPlugins:[c.Z],components:{code:function(e){e.node;var n=e.inline,t=e.className,o=e.children,a=(0,i.Z)(e,f),l=/language-(\w+)/.exec(t||"");return!n&&l?(0,d.jsx)(s.Z,(0,r.Z)({children:String(o).replace(/\n$/,""),language:l[1],className:"my-code",PreTag:"div"},a)):(0,d.jsx)("code",(0,r.Z)((0,r.Z)({className:t},a),{},{children:o}))}}})})}},4515:function(e,n,t){t.r(n),t.d(n,{default:function(){return R},elements:function(){return E}});var r=t(1413),i=t(9439),o=t(2791),a=t(84),l=t(1890),c=t(6818),s=t(3433),u=t(7762),d=t(4164),f=function(e){return function(e,n){var t=null,r=null,i=null,o=function n(o){t=window.requestAnimationFrame((function(){t=null,e.apply(void 0,(0,s.Z)(o)),r=null,i&&(r=i,i=null,n(r))}))},a=function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];r=a,null===t?o(r):null!==n&&void 0!==n&&n.trailing&&(i=a)};return a.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(e.apply(void 0,(0,s.Z)(i||r)),r=i=null)},a.cancel=function(){r=i=null,null!==t&&(cancelAnimationFrame(t),t=null)},a}((function(n){(0,d.unstable_batchedUpdates)(e,n)}))},h=function(e){var n=function(e){var n,t=1/0,r=1/0,o=-1/0,a=-1/0,l=(0,u.Z)(e);try{for(l.s();!(n=l.n()).done;){var c=(0,i.Z)(n.value,2),s=c[0],d=c[1];t=Math.min(t,s),r=Math.min(r,d),o=Math.max(o,s),a=Math.max(a,d)}}catch(f){l.e(f)}finally{l.f()}return[t,r,o,a]}(e.points),t=(0,i.Z)(n,4),r=t[0],o=t[1],a=t[2],l=t[3],c=r+e.x,s=o+e.y,d=a+e.x,f=l+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]},v=function(e,n){return Math.abs(e-n)},g=0;window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var n=e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]})),t=function(e){var n=e.map((function(e){return e[0]})),t=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,s.Z)(n))-Math.min.apply(Math,(0,s.Z)(n)),height:Math.max.apply(Math,(0,s.Z)(t))-Math.min.apply(Math,(0,s.Z)(t))}}(n),r=t.width,i=t.height;return{id:"id".concat(g++),type:"freedraw",x:e.x,y:e.y,width:r,height:i,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:n,pressures:[],simulatePressure:!0,lastCommittedPoint:n[n.length-1]}}))};var m=function(e,n,t){var r=e.getContext("2d");e.width=n*window.devicePixelRatio,e.height=t*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio)},p=new WeakMap,w=function(e){p.delete(e)},x=function(e,n,t){e.forEach((function(e){var o=function(e){var n=p.get(e);if(n)return n;var t,o,a=document.createElement("canvas"),l=a.getContext("2d"),c=h((0,r.Z)((0,r.Z)({},e),{},{points:e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]}))})),s=(0,i.Z)(c,4),u=s[0],d=s[1],f=s[2],g=s[3];return a.width=v(u,f)*window.devicePixelRatio+40,a.height=v(d,g)*window.devicePixelRatio+40,t=e.x>u?v(e.x,u)*window.devicePixelRatio:0,o=e.y>d?v(e.y,d)*window.devicePixelRatio:0,l.translate(t,o),l.save(),l.translate(20,20),l.scale(window.devicePixelRatio,window.devicePixelRatio),l.lineWidth=3,l.strokeStyle=e.strokeStyle,e.points.forEach((function(n,t){var r=(0,i.Z)(n,2),o=r[0],a=r[1];o-=e.x,a-=e.y,t?l.lineTo(o,a):l.moveTo(o,a)})),l.stroke(),l.restore(),p.set(e,a),a}(e),a=h((0,r.Z)((0,r.Z)({},e),{},{points:e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]}))})),l=(0,i.Z)(a,4),c=l[0],s=l[1],u=l[2],d=l[3],f=((c+u)/2+t.scrollX)*window.devicePixelRatio,g=((s+d)/2+t.scrollY)*window.devicePixelRatio;n.save(),n.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),n.translate(f,g),n.drawImage(o,-(u-c)/2*window.devicePixelRatio-20,-(d-s)/2*window.devicePixelRatio-20,o.width,o.height),n.restore()}))},y=[];var Z=function(e,n){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),function(e,n){var t=n.draggingElement;e.save(),e.beginPath(),e.lineWidth=3,e.strokeStyle=t.strokeStyle,t.points.forEach((function(n,r){r?e.lineTo.apply(e,(0,s.Z)(n)):e.moveTo.apply(e,(0,s.Z)(t.points[0]))})),e.stroke(),e.restore()}(t,n)},k=function(e,n,t){var r=n.offsetWidth,i=n.offsetHeight;y.forEach((function(n){e.removeChild(n)})),y=[];var o=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}(E,200);o.length||n.getContext("2d").clearRect(0,0,n.width,n.height);o.forEach((function(a,l){if(l<o.length-1){var c=document.createElement("canvas");e.insertBefore(c,n),c.classList.add("canvas"),c.innerText="\u52a8\u6001canvas ".concat(l),m(c,r,i),y.push(c);var s=c.getContext("2d");Promise.resolve().then((function(){x(a,s,t)}))}else{var u=n.getContext("2d");u.clearRect(0,0,n.width,n.height),x(a,u,t)}})),localStorage.setItem("free-draw-elements",JSON.stringify(E))},M=t(184),E=JSON.parse(localStorage.getItem("free-draw-elements"))||[],P={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},R=(0,o.memo)((function(){var e=(0,o.useRef)(null),n=(0,o.useRef)(null),s=(0,o.useRef)(null),u=(0,o.useState)(!1),d=(0,i.Z)(u,2),h=d[0],v=d[1];(0,o.useEffect)((function(){var t=e.current,r=t.offsetWidth,i=t.offsetHeight;m(t,r,i),m(s.current,r,i);var o=t.getBoundingClientRect(),a=o.x,l=o.y;P.offsetLeft=a,P.offsetTop=l,k(n.current,s.current,P);var c=n.current,u=function(e){e.preventDefault()};return c.addEventListener("wheel",u,{passive:!1}),function(){c.removeEventListener("wheel",u)}}),[]),(0,o.useEffect)((function(){t.e(251).then(t.bind(t,9251)).then((function(e){}))}),[]);var g=function(n){return f((function(n){var t=(0,a.d)(n,P);P.draggingElement.points.push([t.x,t.y]),Z(e.current,P)}))},p=function(t){return function(){w(P.draggingElement),E.push(P.draggingElement),console.log("appState...",P),console.log("elements...",E.map((function(e){return e.points.length})));var r=e.current;r.getContext("2d").clearRect(0,0,r.width,r.height),k(n.current,s.current,P),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}};return(0,M.jsxs)("div",{className:"dynamic-layer",children:[(0,M.jsxs)("div",{className:"container wrap",ref:n,children:[(0,M.jsx)("canvas",{ref:s,className:"canvas",children:"\u9759\u6001canvas"}),(0,M.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var n=(0,a.d)(e,P),t={origin:n,lastCoords:(0,r.Z)({},n),eventListeners:{onMove:null,onUp:null}},i={x:t.origin.x,y:t.origin.y,points:[[t.origin.x,t.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,a.B)()};P.draggingElement=i,w(i);var o=g(t),l=p(t);window.addEventListener("pointermove",o),window.addEventListener("pointerup",l),t.eventListeners.onMove=o,t.eventListeners.onUp=l},children:"\u52a8\u6001canvas"}),(0,M.jsx)("button",{className:"btn clear",onClick:function(){localStorage.setItem("free-draw-elements",JSON.stringify([])),E=[],k(n.current,s.current,P)},children:"\u6e05\u7a7alocalstorage"}),(0,M.jsx)("button",{className:"btn",onClick:function(){h||(v(!0),t.e(251).then(t.bind(t,9251)).then((function(e){var t=e.default;localStorage.setItem("free-draw-elements",JSON.stringify(t)),E=t,k(n.current,s.current,P)})).finally((function(){v(!1)})))},children:"\u6781\u9650\u6d4b\u8bd5"})]}),(0,M.jsx)(l.Z,{src:c})]})}))},84:function(e,n,t){t.d(n,{B:function(){return i},d:function(){return r}});var r=function(e,n){var t=e.clientX,r=e.clientY,i=n.offsetLeft,o=n.offsetTop;return{x:t-i-n.scrollX,y:r-o-n.scrollY}},i=function(){var e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(n,",").concat(t,")")}},6818:function(e,n,t){e.exports=t.p+"static/media/\u70b9\u7a00\u91ca.31d6cfe0d16ae931b73c.md"}}]);
//# sourceMappingURL=DynamicLayer.40a96c82.chunk.js.map