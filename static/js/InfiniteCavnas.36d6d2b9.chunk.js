"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[824],{1890:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(1413),i=t(4925),r=t(9439),l=t(2791),a=t(1350),s=t(1926),c=t(4209),d=t(6571),f=(t(3659),t(184)),v=["node","inline","className","children"];var u=function(e){var n=e.src,t=(0,l.useState)(""),u=(0,r.Z)(t,2),h=u[0],w=u[1];return(0,l.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){w(e)}))}),[n]),(0,f.jsx)("div",{className:"markdown-body",children:(0,f.jsx)(a.D,{children:h,rehypePlugins:[d.Z],remarkPlugins:[s.Z],components:{code:function(e){e.node;var n=e.inline,t=e.className,r=e.children,l=(0,i.Z)(e,v),a=/language-(\w+)/.exec(t||"");return!n&&a?(0,f.jsx)(c.Z,(0,o.Z)({children:String(r).replace(/\n$/,""),language:a[1],className:"my-code",PreTag:"div"},l)):(0,f.jsx)("code",(0,o.Z)((0,o.Z)({className:t},l),{},{children:r}))}}})})}},2241:function(e,n,t){t.r(n),t.d(n,{default:function(){return v},elements:function(){return d}});var o=t(1413),i=t(2791),r=t(1890),l=t.p+"static/media/\u7ed8\u5236\u77e9\u5f62\u53ca\u65e0\u9650\u753b\u5e03.00ed7c1731a6947cf40e.md",a=function(e,n){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),function(e,n){var t=n.scrollX,o=n.scrollY;e.save();var i=100,r=100,l=e.canvas;e.translate(t,o),e.strokeStyle="red",e.fillStyle="red",e.save(),e.beginPath(),e.setLineDash([10,10]),e.moveTo(0,-o),e.lineTo(0,l.height-o),e.moveTo(-t,0),e.lineTo(l.width-t,0),e.stroke(),e.restore(),e.beginPath(),e.lineWidth=2,e.textBaseline="middle";for(var a=0;a<o/i;a++)e.moveTo(0,-a*i),e.lineTo(8,-a*i),e.font="20px Arial",e.fillText(-a,-25,-a*i);for(var s=0;s<(l.height-o)/i;s++)e.moveTo(0,s*i),e.lineTo(8,s*i),e.font="20px Arial",e.fillText(s,-25,s*i);for(var c=1;c<t/r;c++)e.moveTo(-c*r,0),e.lineTo(-c*r,8),e.font="20px Arial",e.fillText(-c,-c*r-10,-15);for(var d=1;d<(l.width-t)/r;d++)e.moveTo(d*r,0),e.lineTo(d*r,8),e.font="20px Arial",e.fillText(d,d*r-5,-15);e.stroke(),e.restore()}(t,n),function(e,n){d.forEach((function(t){e.save(),e.translate(t.x+n.scrollX,t.y+n.scrollY),e.strokeStyle=t.strokeStyle,e.strokeColor=t.strokeColor,e.strokeRect(0,0,t.width,t.height),e.restore()}))}(t,n)},s=t(184),c={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},d=[],f=function(e,n){var t=e.clientX,o=e.clientY,i=n.offsetLeft,r=n.offsetTop;return{x:t-i-n.scrollX,y:o-r-n.scrollY}},v=(0,i.memo)((function(){var e=(0,i.useRef)(null),n=(0,i.useRef)(null);(0,i.useEffect)((function(){var n=function(){var n=e.current,t=n.getContext("2d"),o=n.offsetWidth,i=n.offsetHeight,r=n.offsetLeft,l=n.offsetTop;n.width=o*window.devicePixelRatio,n.height=i*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio),c.offsetLeft=r,c.offsetTop=l,a(n,c)};n();var t=function(){n()};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),(0,i.useEffect)((function(){var e=n.current,t=function(e){e.preventDefault()};return e.addEventListener("wheel",t,{passive:!1}),function(){e.removeEventListener("wheel",t)}}),[]);var t=function(e){return function(n){window.removeEventListener("pointermove",e.eventListeners.onMove),window.removeEventListener("pointerup",e.eventListeners.onUp)}},v=function(n){return function(t){var o=f(t,c);n.lastCoords.x=o.x,n.lastCoords.y=o.y,c.draggingElement.width=o.x-n.origin.x,c.draggingElement.height=o.y-n.origin.y,a(e.current,c)}};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{ref:n,children:(0,s.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var n=f(e,c);console.log("origin...",c,n);var i={origin:n,lastCoords:(0,o.Z)({},n),eventListeners:{onMove:null,onUp:null}},r={x:i.origin.x,y:i.origin.y,width:0,height:0,strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid"};c.draggingElement=r,d.push(r);var l=v(i),a=t(i);window.addEventListener("pointermove",l),window.addEventListener("pointerup",a),i.eventListeners.onMove=l,i.eventListeners.onUp=a},onWheel:function(n){var t=n.deltaX,o=n.deltaY;c.scrollX=c.scrollX-t,c.scrollY=c.scrollY-o,console.log("\u6eda\u52a8\u8ddd\u79bb\uff0cX\uff1a".concat(c.scrollX,", Y\uff1a").concat(c.scrollY)),a(e.current,c)},children:"\u7ed8\u5236canvas"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{onClick:function(){var e=1/0,n=-1/0,t=1/0,i=-1/0;d.forEach((function(o){var r=[o.x,o.y,o.x+o.width,o.y+o.height],l=r[0],a=r[1],s=r[2],c=r[3];e=Math.min(e,l),t=Math.min(t,a),n=Math.max(n,s),i=Math.max(i,c)}));var r=document.createElement("canvas");r.width=(n-e+20)*window.devicePixelRatio,r.height=(i-t+20)*window.devicePixelRatio,r.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio),a(r,(0,o.Z)((0,o.Z)({},c),{},{scrollX:10-e,scrollY:10-t})),console.log("\u5bfc\u51fa",d);var l=document.createElement("a");l.href=r.toDataURL(),l.download="canvas.png",l.click()},children:"\u5bfc\u51faPNG"})}),(0,s.jsx)("div",{className:"tip",children:"\u6e29\u99a8\u63d0\u793a\uff1a\u53ef\u4ee5\u5728\u4e0a\u9762\u7684\u753b\u677f\u4e2d\u7ed8\u5236\u77e9\u5f62\u54e6\uff01\uff01"}),(0,s.jsx)(r.Z,{src:l})]})}))}}]);
//# sourceMappingURL=InfiniteCavnas.36d6d2b9.chunk.js.map