"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[826],{1890:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),o=t(4925),i=t(9439),s=t(2791),a=t(1350),c=t(1926),l=t(4209),f=t(6571),u=(t(3659),t(184)),d=["node","inline","className","children"];var v=function(e){var n=e.src,t=(0,s.useState)(""),v=(0,i.Z)(t,2),p=v[0],h=v[1];return(0,s.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){h(e)}))}),[n]),(0,u.jsx)("div",{className:"markdown-body",children:(0,u.jsx)(a.D,{children:p,rehypePlugins:[f.Z],remarkPlugins:[c.Z],components:{code:function(e){e.node;var n=e.inline,t=e.className,i=e.children,s=(0,o.Z)(e,d),a=/language-(\w+)/.exec(t||"");return!n&&a?(0,u.jsx)(l.Z,(0,r.Z)({children:String(i).replace(/\n$/,""),language:a[1],className:"my-code",PreTag:"div"},s)):(0,u.jsx)("code",(0,r.Z)((0,r.Z)({className:t},s),{},{children:i}))}}})})}},7043:function(e,n,t){t.r(n),t.d(n,{default:function(){return v},elements:function(){return u}});var r=t(1413),o=t(2791),i=t(84),s=t(1890),a=t.p+"static/media/\u81ea\u7531\u7ed8\u5236.31d6cfe0d16ae931b73c.md",c=t(3433),l=function(e,n){var t,r=e.getContext("2d");r.clearRect(0,0,e.width,e.height),t=r,u.forEach((function(e){t.save(),t.beginPath(),t.lineWidth=3,t.strokeStyle="blue",e.points.forEach((function(n,r){r?t.lineTo.apply(t,(0,c.Z)(n)):t.moveTo.apply(t,(0,c.Z)(e.points[0]))})),t.stroke(),t.restore()})),localStorage.setItem("free-draw-elements",JSON.stringify(u))},f=t(184),u=JSON.parse(localStorage.getItem("free-draw-elements"))||[],d={offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},v=(0,o.memo)((function(){var e=(0,o.useRef)(null),n=(0,o.useRef)(null);(0,o.useEffect)((function(){var t=e.current,r=t.getContext("2d"),o=t.offsetWidth,i=t.offsetHeight,s=t.offsetLeft,a=t.offsetTop;t.width=o*window.devicePixelRatio,t.height=i*window.devicePixelRatio,r.scale(window.devicePixelRatio,window.devicePixelRatio),d.offsetLeft=s,d.offsetTop=a,l(t,d);var c=n.current,f=function(e){e.preventDefault()};return c.addEventListener("wheel",f,{passive:!1}),function(){c.removeEventListener("wheel",f)}}),[]);var t=function(n){return function(n){var t=(0,i.d)(n,d);d.draggingElement.points.push([t.x,t.y]),l(e.current,d)}},c=function(e){return function(){console.log("appState...",d),console.log("elements...",u.map((function(e){return e.points.length}))),window.removeEventListener("pointermove",e.eventListeners.onMove),window.removeEventListener("pointerup",e.eventListeners.onUp)}};return(0,f.jsxs)("div",{className:"free-draw",children:[(0,f.jsx)("div",{className:"container",ref:n,children:(0,f.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var n=(0,i.d)(e,d),o={origin:n,lastCoords:(0,r.Z)({},n),eventListeners:{onMove:null,onUp:null}},s={x:o.origin.x,y:o.origin.y,points:[],strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid"};d.draggingElement=s,u.push(s);var a=t(o),l=c(o);window.addEventListener("pointermove",a),window.addEventListener("pointerup",l),o.eventListeners.onMove=a,o.eventListeners.onUp=l},children:"\u7ed8\u5236canvas"})}),(0,f.jsx)(s.Z,{src:a})]})}))},84:function(e,n,t){t.d(n,{d:function(){return r}});var r=function(e,n){var t=e.clientX,r=e.clientY,o=n.offsetLeft,i=n.offsetTop;return{x:t-o-n.scrollX,y:r-i-n.scrollY}}}}]);
//# sourceMappingURL=FreeDraw.e3d509de.chunk.js.map