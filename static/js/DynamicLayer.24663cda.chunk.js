"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[246],{1890:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),a=t(4925),i=t(9439),o=t(2791),l=t(1350),c=t(1926),u=t(4209),s=t(6571),d=(t(3659),t(184)),f=["node","inline","className","children"];var h=function(e){var n=e.src,t=(0,o.useState)(""),h=(0,i.Z)(t,2),v=h[0],m=h[1];return(0,o.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){m(e)}))}),[n]),(0,d.jsx)("div",{className:"markdown-body",children:(0,d.jsx)(l.D,{children:v,rehypePlugins:[s.Z],remarkPlugins:[c.Z],components:{code:function(e){e.node;var n=e.inline,t=e.className,i=e.children,o=(0,a.Z)(e,f),l=/language-(\w+)/.exec(t||"");return!n&&l?(0,d.jsx)(u.Z,(0,r.Z)({children:String(i).replace(/\n$/,""),language:l[1],className:"my-code",PreTag:"div"},o)):(0,d.jsx)("code",(0,r.Z)((0,r.Z)({className:t},o),{},{children:i}))}}})})}},4515:function(e,n,t){t.r(n),t.d(n,{default:function(){return P},elements:function(){return E}});var r=t(1413),a=t(9439),i=t(2791),o=t(84),l=t(1890),c=t(6818),u=t(3433),s=t(7762),d=t(4164),f=function(e){return function(e,n){var t=null,r=null,a=null,i=function n(i){t=window.requestAnimationFrame((function(){t=null,e.apply(void 0,(0,u.Z)(i)),r=null,a&&(r=a,a=null,n(r))}))},o=function(){for(var e=arguments.length,o=new Array(e),l=0;l<e;l++)o[l]=arguments[l];r=o,null===t?i(r):null!==n&&void 0!==n&&n.trailing&&(a=o)};return o.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(e.apply(void 0,(0,u.Z)(a||r)),r=a=null)},o.cancel=function(){r=a=null,null!==t&&(cancelAnimationFrame(t),t=null)},o}((function(n){(0,d.unstable_batchedUpdates)(e,n)}))},h=function(e){var n=function(e){var n,t=1/0,r=1/0,i=-1/0,o=-1/0,l=(0,s.Z)(e);try{for(l.s();!(n=l.n()).done;){var c=(0,a.Z)(n.value,2),u=c[0],d=c[1];t=Math.min(t,u),r=Math.min(r,d),i=Math.max(i,u),o=Math.max(o,d)}}catch(f){l.e(f)}finally{l.f()}return[t,r,i,o]}(e.points),t=(0,a.Z)(n,4),r=t[0],i=t[1],o=t[2],l=t[3],c=r+e.x,u=i+e.y,d=o+e.x,f=l+e.y;return[c,u,d,f,(c+d)/2,(u+f)/2]},v=function(e,n){return Math.abs(e-n)},m=0;window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var n=e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]})),t=function(e){var n=e.map((function(e){return e[0]})),t=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,u.Z)(n))-Math.min.apply(Math,(0,u.Z)(n)),height:Math.max.apply(Math,(0,u.Z)(t))-Math.min.apply(Math,(0,u.Z)(t))}}(n),r=t.width,a=t.height;return{id:"id".concat(m++),type:"freedraw",x:e.x,y:e.y,width:r,height:a,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:n,pressures:[],simulatePressure:!0,lastCommittedPoint:n[n.length-1]}}))};var p=function(e,n,t){var r=e.getContext("2d");e.width=n*window.devicePixelRatio,e.height=t*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio)},g=new WeakMap,w=function(e){g.delete(e)},x=function(e,n,t){e.forEach((function(e){var i=function(e){var n=g.get(e);if(n)return n;var t,i,o=document.createElement("canvas"),l=o.getContext("2d"),c=h((0,r.Z)((0,r.Z)({},e),{},{points:e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]}))})),u=(0,a.Z)(c,4),s=u[0],d=u[1],f=u[2],m=u[3];return o.width=v(s,f)*window.devicePixelRatio+40,o.height=v(d,m)*window.devicePixelRatio+40,t=e.x>s?v(e.x,s)*window.devicePixelRatio:0,i=e.y>d?v(e.y,d)*window.devicePixelRatio:0,l.translate(t,i),l.save(),l.translate(20,20),l.scale(window.devicePixelRatio,window.devicePixelRatio),l.lineWidth=3,l.strokeStyle=e.strokeStyle,e.points.forEach((function(n,t){var r=(0,a.Z)(n,2),i=r[0],o=r[1];i-=e.x,o-=e.y,t?l.lineTo(i,o):l.moveTo(i,o)})),l.stroke(),l.restore(),g.set(e,o),o}(e),o=h((0,r.Z)((0,r.Z)({},e),{},{points:e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]}))})),l=(0,a.Z)(o,4),c=l[0],u=l[1],s=l[2],d=l[3],f=((c+s)/2+t.scrollX)*window.devicePixelRatio,m=((u+d)/2+t.scrollY)*window.devicePixelRatio;n.save(),n.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),n.translate(f,m),n.drawImage(i,-(s-c)/2*window.devicePixelRatio-20,-(d-u)/2*window.devicePixelRatio-20,i.width,i.height),n.restore()}))},y=[];var M=function(e,n){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),function(e,n){var t=n.draggingElement;e.save(),e.beginPath(),e.lineWidth=3,e.strokeStyle=t.strokeStyle,t.points.forEach((function(n,r){r?e.lineTo.apply(e,(0,u.Z)(n)):e.moveTo.apply(e,(0,u.Z)(t.points[0]))})),e.stroke(),e.restore()}(t,n)},Z=function(e,n,t){var r=n.offsetWidth,a=n.offsetHeight;y.forEach((function(n){e.removeChild(n)})),y=[];var i=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}(E,200);i.length||n.getContext("2d").clearRect(0,0,n.width,n.height);i.forEach((function(o,l){if(l<i.length-1){var c=document.createElement("canvas");e.insertBefore(c,n),c.classList.add("canvas"),c.innerText="\u52a8\u6001canvas ".concat(l),p(c,r,a),y.push(c);var u=c.getContext("2d");Promise.resolve().then((function(){x(o,u,t)}))}else{var s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),x(o,s,t)}})),localStorage.setItem("free-draw-elements",JSON.stringify(E))},k=t(184),E=JSON.parse(localStorage.getItem("free-draw-elements"))||[],S={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},P=(0,i.memo)((function(){var e=(0,i.useRef)(null),n=(0,i.useRef)(null),u=(0,i.useRef)(null),s=(0,i.useState)(!1),d=(0,a.Z)(s,2),h=d[0],v=d[1];(0,i.useEffect)((function(){var t=e.current,r=t.offsetWidth,a=t.offsetHeight;p(t,r,a),p(u.current,r,a);var i=t.getBoundingClientRect(),o=i.x,l=i.y;S.offsetLeft=o,S.offsetTop=l,Z(n.current,u.current,S);var c=n.current,s=function(e){e.preventDefault()};return c.addEventListener("wheel",s,{passive:!1}),function(){c.removeEventListener("wheel",s)}}),[]),(0,i.useEffect)((function(){t.e(251).then(t.bind(t,9251)).then((function(e){}))}),[]);var m=function(n){return f((function(n){var t=(0,o.dE)(n,S);S.draggingElement.points.push([t.x,t.y]),M(e.current,S)}))},g=function(t){return function(){w(S.draggingElement),E.push(S.draggingElement),console.log("appState...",S),console.log("elements...",E.map((function(e){return e.points.length})));var r=e.current;r.getContext("2d").clearRect(0,0,r.width,r.height),Z(n.current,u.current,S),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}};return(0,k.jsxs)("div",{className:"dynamic-layer",children:[(0,k.jsxs)("div",{className:"container wrap",ref:n,children:[(0,k.jsx)("canvas",{ref:u,className:"canvas",children:"\u9759\u6001canvas"}),(0,k.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var n=(0,o.dE)(e,S),t={origin:n,lastCoords:(0,r.Z)({},n),eventListeners:{onMove:null,onUp:null}},a={x:t.origin.x,y:t.origin.y,points:[[t.origin.x,t.origin.y]],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:(0,o.B8)()};S.draggingElement=a,w(a);var i=m(t),l=g(t);window.addEventListener("pointermove",i),window.addEventListener("pointerup",l),t.eventListeners.onMove=i,t.eventListeners.onUp=l},children:"\u52a8\u6001canvas"}),(0,k.jsx)("button",{className:"btn clear",onClick:function(){localStorage.setItem("free-draw-elements",JSON.stringify([])),E=[],Z(n.current,u.current,S)},children:"\u6e05\u7a7alocalstorage"}),(0,k.jsx)("button",{className:"btn",onClick:function(){h||(v(!0),t.e(251).then(t.bind(t,9251)).then((function(e){var t=e.default;localStorage.setItem("free-draw-elements",JSON.stringify(t)),E=t,Z(n.current,u.current,S)})).finally((function(){v(!1)})))},children:"\u6781\u9650\u6d4b\u8bd5"})]}),(0,k.jsx)(l.Z,{src:c})]})}))},84:function(e,n,t){t.d(n,{$9:function(){return u},B8:function(){return c},KP:function(){return f},TE:function(){return v},dE:function(){return l},kb:function(){return p},mO:function(){return g},qf:function(){return h}});var r=t(9439),a=t(7762),i=t(3433),o=t(4164),l=function(e,n){var t=e.clientX,r=e.clientY,a=n.zoom,i=n.offsetLeft,o=n.offsetTop,l=n.scrollX,c=n.scrollY,u=a?a.value:1;return{x:(t-i)/u-l,y:(r-o)/u-c}},c=function(){var e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(n,",").concat(t,")")},u=function(e){return function(e,n){var t=null,r=null,a=null,o=function n(o){t=window.requestAnimationFrame((function(){t=null,e.apply(void 0,(0,i.Z)(o)),r=null,a&&(r=a,a=null,n(r))}))},l=function(){for(var e=arguments.length,i=new Array(e),l=0;l<e;l++)i[l]=arguments[l];r=i,null===t?o(r):null!==n&&void 0!==n&&n.trailing&&(a=i)};return l.flush=function(){null!==t&&(cancelAnimationFrame(t),t=null),r&&(e.apply(void 0,(0,i.Z)(a||r)),r=a=null)},l.cancel=function(){r=a=null,null!==t&&(cancelAnimationFrame(t),t=null)},l}((function(n){(0,o.unstable_batchedUpdates)(e,n)}))},s=function(e){var n=1/0,t=1/0,i=-1/0,o=-1/0,l=e.points;"freedraw"===e.type&&(l=e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]})));var c,u=(0,a.Z)(l);try{for(u.s();!(c=u.n()).done;){var s=(0,r.Z)(c.value,2),d=s[0],f=s[1];n=Math.min(n,d),t=Math.min(t,f),i=Math.max(i,d),o=Math.max(o,f)}}catch(h){u.e(h)}finally{u.f()}return[n,t,i,o]},d=function(e,n,t,r,a){return[(e-t)*Math.cos(a)-(n-r)*Math.sin(a)+t,(e-t)*Math.sin(a)+(n-r)*Math.cos(a)+r]},f=function(e){if(!e.length)return[0,0,0,0];var n=1/0,t=-1/0,a=1/0,i=-1/0;return e.forEach((function(e){var o=function(e){var n=h(e),t=(0,r.Z)(n,6),a=t[0],i=t[1],o=t[2],l=t[3],c=t[4],u=t[5];if("freedraw"===e.type){var f=s(e),v=(0,r.Z)(f,4),m=v[0],p=v[1],g=v[2],w=v[3];return[m+e.x,p+e.y,g+e.x,w+e.y]}var x=d(a,i,c,u,e.angle),y=(0,r.Z)(x,2),M=y[0],Z=y[1],k=d(a,l,c,u,e.angle),E=(0,r.Z)(k,2),S=E[0],P=E[1],b=d(o,l,c,u,e.angle),R=(0,r.Z)(b,2),C=R[0],N=R[1],L=d(o,i,c,u,e.angle),j=(0,r.Z)(L,2),I=j[0],T=j[1];return[Math.min(M,S,C,I),Math.min(Z,P,N,T),Math.max(M,S,C,I),Math.max(Z,P,N,T)]}(e),l=(0,r.Z)(o,4),c=l[0],u=l[1],f=l[2],v=l[3];n=Math.min(n,c),a=Math.min(a,u),t=Math.max(t,f),i=Math.max(i,v)})),[n,a,t,i]},h=function(e){if("freedraw"===e.type){var n=s(e),t=(0,r.Z)(n,4),a=t[0],i=t[1],o=t[2],l=t[3],c=a+e.x,u=i+e.y,d=o+e.x,f=l+e.y;return[c,u,d,f,(c+d)/2,(u+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},v=function(e,n){return Math.abs(e-n)},m=0,p=function(){return"id".concat(m++)};window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var n=e.points.map((function(n){return[n[0]-e.x,n[1]-e.y]})),t=function(e){var n=e.map((function(e){return e[0]})),t=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,i.Z)(n))-Math.min.apply(Math,(0,i.Z)(n)),height:Math.max.apply(Math,(0,i.Z)(t))-Math.min.apply(Math,(0,i.Z)(t))}}(n),r=t.width,a=t.height;return{id:p(),type:"freedraw",x:e.x,y:e.y,width:r,height:a,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:n,pressures:[],simulatePressure:!0,lastCommittedPoint:n[n.length-1]}}))};var g=function(e){var n=e.fontSize,t=e.fontFamily;return"".concat(n,"px ").concat(t,", Segoe UI Emoji")}},6818:function(e,n,t){e.exports=t.p+"static/media/\u70b9\u7a00\u91ca.31d6cfe0d16ae931b73c.md"}}]);
//# sourceMappingURL=DynamicLayer.24663cda.chunk.js.map