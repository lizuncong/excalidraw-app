"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[804],{9418:function(e,o,t){t.r(o),t.d(o,{default:function(){return v},elements:function(){return s}});var n=t(1413),r=t(2791),i=function(e,o){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),function(e,o){var t=o.scrollX,n=o.scrollY;e.save();var r=100,i=100,l=e.canvas;e.translate(t,n),e.strokeStyle="red",e.fillStyle="red",e.save(),e.beginPath(),e.setLineDash([10,10]),e.moveTo(0,-n),e.lineTo(0,l.height-n),e.moveTo(-t,0),e.lineTo(l.width-t,0),e.stroke(),e.restore(),e.beginPath(),e.lineWidth=2,e.textBaseline="middle";for(var a=0;a<n/r;a++)e.moveTo(0,-a*r),e.lineTo(8,-a*r),e.font="20px Arial",e.fillText(-a,-25,-a*r);for(var s=0;s<(l.height-n)/r;s++)e.moveTo(0,s*r),e.lineTo(8,s*r),e.font="20px Arial",e.fillText(s,-25,s*r);for(var c=1;c<t/i;c++)e.moveTo(-c*i,0),e.lineTo(-c*i,8),e.font="20px Arial",e.fillText(-c,-c*i-10,-15);for(var v=1;v<(l.width-t)/i;v++)e.moveTo(v*i,0),e.lineTo(v*i,8),e.font="20px Arial",e.fillText(v,v*i-5,-15);e.stroke(),e.restore()}(t,o),function(e,o){s.forEach((function(t){e.save(),e.translate((t.x+o.scrollX)*o.zoom.value,(t.y+o.scrollY)*o.zoom.value),console.log("zoom..",t.x,t.y,o.scrollX,o.scrollY,o.zoom.value),e.scale(o.zoom.value,o.zoom.value),e.strokeStyle=t.strokeStyle,e.strokeColor=t.strokeColor,e.strokeRect(0,0,t.width,t.height),e.restore()}))}(t,o)},l=t(184),a={zoom:{value:1},offsetLeft:0,offsetTop:0,scrollX:0,scrollY:0,draggingElement:null},s=[],c=function(e,o){var t=e.clientX,n=e.clientY,r=o.zoom,i=o.offsetLeft,l=o.offsetTop,a=o.scrollX,s=o.scrollY;return{x:(t-i)/r.value-a,y:(n-l)/r.value-s}},v=(0,r.memo)((function(){var e=(0,r.useRef)(null),o=(0,r.useRef)(null),t=(0,r.useRef)({});(0,r.useEffect)((function(){var o=function(){var o=e.current,t=o.getContext("2d"),n=o.offsetWidth,r=o.offsetHeight,l=o.offsetLeft,s=o.offsetTop;o.width=n*window.devicePixelRatio,o.height=r*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio),a.offsetLeft=l,a.offsetTop=s,i(o,a)};o();var t=function(){o()};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),(0,r.useEffect)((function(){var e=o.current,n=function(e){e.preventDefault()};e.addEventListener("wheel",n,{passive:!1});var r=function(e){t.current={cursorX:e.clientX,cursorY:e.clientY}};return document.addEventListener("mousemove",r),function(){e.removeEventListener("wheel",n),document.removeEventListener("mousemove",r)}}),[]);var v=function(e){return function(o){window.removeEventListener("pointermove",e.eventListeners.onMove),window.removeEventListener("pointerup",e.eventListeners.onUp)}},u=function(o){return function(t){var n=c(t,a);o.lastCoords.x=n.x,o.lastCoords.y=n.y,a.draggingElement.width=n.x-o.origin.x,a.draggingElement.height=n.y-o.origin.y,i(e.current,a)}};return(0,l.jsxs)("div",{className:"infinite-canvas",children:[(0,l.jsx)("div",{ref:o,children:(0,l.jsx)("canvas",{ref:e,className:"canvas",onPointerDown:function(e){var o=c(e,a);console.log("origin...",a,o);var t={origin:o,lastCoords:(0,n.Z)({},o),eventListeners:{onMove:null,onUp:null}},r={x:t.origin.x,y:t.origin.y,width:0,height:0,strokeColor:"#000000",backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid"};a.draggingElement=r,s.push(r);var i=u(t),l=v(t);window.addEventListener("pointermove",i),window.addEventListener("pointerup",l),t.eventListeners.onMove=i,t.eventListeners.onUp=l},onWheel:function(o){var r,l=o.deltaX,s=o.deltaY;if(o.metaKey||o.ctrlKey){var c=Math.sign(s),v=Math.abs(s),u=s;v>10&&(u=10*c);var f=a.zoom.value-u/100;return f+=Math.log10(Math.max(1,a.zoom.value))*-c*Math.min(1,v/20),Object.assign(a,(0,n.Z)({},function(e,o){var t=e.viewportX,n=e.viewportY,r=e.nextZoom,i=t-o.offsetLeft,l=n-o.offsetTop,a=o.zoom.value;return{scrollX:o.scrollX+(i-i/a)+-(i-i/r),scrollY:o.scrollY+(l-l/a)+-(l-l/r),zoom:{value:r}}}({viewportX:t.current.cursorX,viewportY:t.current.cursorY,nextZoom:(r=f,Math.max(.1,Math.min(r,30)))},a))),void i(e.current,a)}console.log("hello..."),a.scrollX=a.scrollX-l/a.zoom.value,a.scrollY=a.scrollY-s/a.zoom.value,i(e.current,a)},children:"\u7ed8\u5236canvas"})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:function(){var e=1/0,o=-1/0,t=1/0,r=-1/0;s.forEach((function(n){var i=[n.x,n.y,n.x+n.width,n.y+n.height],l=i[0],a=i[1],s=i[2],c=i[3];e=Math.min(e,l),t=Math.min(t,a),o=Math.max(o,s),r=Math.max(r,c)}));var l=document.createElement("canvas");l.width=(o-e+20)*window.devicePixelRatio,l.height=(r-t+20)*window.devicePixelRatio,l.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio),i(l,(0,n.Z)((0,n.Z)({},a),{},{scrollX:10-e,scrollY:10-t})),console.log("\u5bfc\u51fa",s);var c=document.createElement("a");c.href=l.toDataURL(),c.download="canvas.png",c.click()},children:"\u5bfc\u51faPNG"})})]})}))}}]);
//# sourceMappingURL=Scale.b8e238cd.chunk.js.map