"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[343],{1480:function(e,t,n){n.r(t),n.d(t,{appState:function(){return D},default:function(){return F}});var o=n(1413),r=n(3433),i=n(9439),l=n(2791),a=function(e,t){var n=e.clientX,o=e.clientY,r=t.offsetLeft,i=t.offsetTop;return{x:n-r-t.scrollX,y:o-i-t.scrollY}},c=function(e,t){return Math.abs(e-t)},s=0,d=n(84),u=n(4925),f=["type","x","y","strokeColor","backgroundColor","fillStyle","strokeWidth","strokeStyle","width","height","angle","points"],h=function(e){var t=e.type,n=e.x,r=e.y,i=e.strokeColor,l=e.backgroundColor,a=e.fillStyle,c=e.strokeWidth,d=void 0===c?3:c,h=e.strokeStyle,g=e.width,v=void 0===g?0:g,p=e.height,m=void 0===p?0:p,x=e.angle,y=void 0===x?0:x,w=e.points,k=void 0===w?[]:w,C=(0,u.Z)(e,f);return(0,o.Z)({id:"id".concat(s++),type:t,x:n,y:r,width:v,height:m,strokeColor:i,backgroundColor:l,fillStyle:a,strokeWidth:d,strokeStyle:h,angle:y,isDeleted:!1,points:k},C)},g=new WeakMap,v=function(e){g.delete(e)},p=function(e,t){var n=t.zoom||1,o=g.get(e);if(o)return o;var r=x(e,n,t);return g.set(e,r),r},m=document.getElementById("placeholder"),x=function(e,t,n){var o=document.createElement("canvas"),r=o.getContext("2d"),l=w(e);m||(m=document.getElementById("placeholder")),o;if("freedraw"===e.type){var a,c,s=(0,d.qf)(e),u=(0,i.Z)(s,4),f=u[0],h=u[1],g=u[2],v=u[3];o.width=(0,d.TE)(f,g)*window.devicePixelRatio+2*l,o.height=(0,d.TE)(h,v)*window.devicePixelRatio+2*l,a=e.x>f?(0,d.TE)(e.x,f)*window.devicePixelRatio:0,c=e.y>h?(0,d.TE)(e.y,h)*window.devicePixelRatio:0,r.translate(a,c)}else o.width=e.width*window.devicePixelRatio*t+l*t*2,o.height=e.height*window.devicePixelRatio*t+l*t*2;return r.save(),r.translate(l*t,l*t),r.scale(window.devicePixelRatio*t,window.devicePixelRatio*t),y(e,r,n),r.restore(),{element:e,canvas:o,theme:n.theme,canvasZoom:t,canvasOffsetX:0,canvasOffsetY:0}},y=function(e,t,n){switch(t.globalAlpha=e.opacity/100,e.type){case"rectangle":t.lineJoin="round",t.lineCap="round",t.lineWidth=e.strokeWidth,t.strokeStyle=e.strokeStyle,t.strokeRect(0,0,e.width,e.height);break;case"text":t.font=(0,d.mO)(e),t.fillStyle=e.strokeColor,t.textAlign=e.textAlign;var o=e.text.split("\n"),r=o.length?e.height/o.length:18;t.textBaseline="bottom";for(var l=0;l<o.length;l++)t.fillText(o[l],0,(l+1)*r);break;case"freedraw":t.save(),t.lineWidth=e.strokeWidth,t.strokeStyle=e.strokeStyle,e.points.forEach((function(n,o){var r=(0,i.Z)(n,2),l=r[0],a=r[1];l-=e.x,a-=e.y,o?t.lineTo(l,a):t.moveTo(l,a)})),t.stroke(),t.restore()}t.globalAlpha=1},w=function(e){return"freedraw"===e.type?12*e.strokeWidth:20},k=function(e,t,n){var o=e.element,r=w(o),l=(0,d.qf)(o),a=(0,i.Z)(l,4),c=a[0],s=a[1],u=a[2],f=a[3];if("freedraw"===o.type){var h=(0,d.qf)(o),g=(0,i.Z)(h,4);c=g[0],s=g[1],u=g[2],f=g[3]}var v=((c+u)/2+n.scrollX)*window.devicePixelRatio,p=((s+f)/2+n.scrollY)*window.devicePixelRatio;t.save(),t.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),t.translate(v,p),t.drawImage(e.canvas,-(u-c)/2*window.devicePixelRatio-r*e.canvasZoom/e.canvasZoom,-(f-s)/2*window.devicePixelRatio-r*e.canvasZoom/e.canvasZoom,e.canvas.width/e.canvasZoom,e.canvas.height/e.canvasZoom),t.restore()},C=function(e){var t=e.elements,n=e.appState,o=e.scale,r=e.canvas,i=e.renderConfig,l=r.getContext("2d");l.save(),l.scale(o,o);var a=r.width/o,c=r.height/o;l.clearRect(0,0,a,c),l.save(),l.scale(i.zoom,i.zoom),function(e,t){var n=t.scrollX,o=t.scrollY;e.save();var r=100,i=100,l=e.canvas;e.strokeStyle="red",e.fillStyle="red",e.beginPath(),e.lineWidth=2,e.textBaseline="middle",e.save(),e.translate(0,o);for(var a=0;a<o/r;a++)e.moveTo(0,-a*r),e.lineTo(8,-a*r),e.font="10px Arial",e.fillText(-a,0,-a*r+10);for(var c=1;c<(l.height-o)/r;c++)e.moveTo(0,c*r),e.lineTo(8,c*r),e.font="10px Arial",e.fillText(c,0,c*r+10);e.restore(),e.save(),e.translate(n,0);for(var s=0;s<n/i;s++)e.moveTo(-s*i,0),e.lineTo(-s*i,8),e.font="10px Arial",e.fillText(-s,-s*i+5,5);for(var d=1;d<(l.width-n)/i;d++)e.moveTo(d*i,0),e.lineTo(d*i,8),e.font="10px Arial",e.fillText(d,d*i+5,5);e.restore(),e.stroke(),e.restore()}(l,i),t.forEach((function(e){!function(e,t,n,o){var r=p(e,n);k(r,t,n)}(e,l,i)})),l.restore(),l.restore(),localStorage.setItem("elements",JSON.stringify(t)),localStorage.setItem("appState",JSON.stringify(n))},S={tools:"index_tools__ZQUTr",item:"index_item__JCc41",selected:"index_selected__uL6n6"},E=n(184),T=["width","height","mirror","style"],M=function(e,t){var n="number"===typeof t?{width:t}:t,r=n.width,i=void 0===r?512:r,l=n.height,a=void 0===l?i:l,c=(n.mirror,n.style),s=(0,u.Z)(n,T);return(0,E.jsx)("svg",(0,o.Z)((0,o.Z)({"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 ".concat(i," ").concat(a),style:c},s),{},{children:"string"===typeof e?(0,E.jsx)("path",{fill:"currentColor",d:e}):e}))},Z=M((0,E.jsxs)("g",{strokeWidth:"1.5",children:[(0,E.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,E.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),R=M((0,E.jsxs)("g",{strokeWidth:"1.25",children:[(0,E.jsx)("path",{clipRule:"evenodd",d:"m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"}),(0,E.jsx)("path",{d:"m11.25 5.417 3.333 3.333"})]}),{width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),j=M((0,E.jsxs)("g",{strokeWidth:"1.25",children:[(0,E.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,E.jsx)("path",{d:"M15 8h.01"}),(0,E.jsx)("path",{d:"M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"}),(0,E.jsx)("path",{d:"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}),(0,E.jsx)("path",{d:"M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"}),(0,E.jsx)("path",{d:"M19 16v6"}),(0,E.jsx)("path",{d:"M22 19l-3 3l-3 -3"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),b=function(e){var t=e.elements,n=e.appState,r=function(e,t){var n=(0,d.KP)(e),o=(0,i.Z)(n,4),r=o[0],l=o[1],a=o[2],c=o[3];return[r,l,(0,d.TE)(r,a)+2*t,(0,d.TE)(l,c)+t+t]}(t,10),l=(0,i.Z)(r,4),a=l[0],c=l[1],s=l[2],u=l[3];console.log("export...",a,c,s,u);var f=document.createElement("canvas");f.width=s*window.devicePixelRatio,f.height=u*window.devicePixelRatio,C({elements:t,appState:(0,o.Z)((0,o.Z)({},n),{},{scrollX:10-a,scrollY:10-c}),scale:window.devicePixelRatio,canvas:f,renderConfig:{selectionColor:"#6965db",scrollX:10-a,scrollY:10-c,viewBackgroundColor:"#ffffff",zoom:1}}),console.log("\u5bfc\u51fa",t);var h=document.createElement("a");h.href=f.toDataURL(),h.download="canvas.png",h.click()},P=n(5671),I=n(3144),W=function(){function e(){(0,P.Z)(this,e);var t=JSON.parse(localStorage.getItem("elements"));this.elements=t||[]}return(0,I.Z)(e,[{key:"getElementsIncludingDeleted",value:function(){return this.elements}},{key:"replaceAllElements",value:function(e){this.elements=e}}]),e}(),B=new W,L=[{type:"rectangle",icon:Z},{type:"freedraw",icon:R}],A=(0,l.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:S.scale,children:"\u7f29\u653e"}),(0,E.jsxs)("div",{className:S.tools,children:[(0,E.jsx)("span",{className:[S.item].join(" "),onClick:function(){b({elements:B.getElementsIncludingDeleted(),appState:D})},children:j}),L.map((function(e){return(0,E.jsx)("span",{className:[S.item,t.type===e.type&&S.selected].join(" "),onClick:function(){return n({type:e.type})},children:e.icon},e.type)}))]})]})})),X={textarea:"index_textarea__b45r1",textarea_copy:"index_textarea_copy__REiTG"},Y=(0,l.forwardRef)((function(e,t){var n=e.staticCanvasRef,a=(0,l.useRef)(null),c=(0,l.useState)(""),s=(0,i.Z)(c,2),u=s[0],f=s[1];return(0,l.useImperativeHandle)(t,(function(){return{startEditText:function(e){e.preventDefault(),e.stopPropagation();var t,n=(0,d.dE)(e,D),r=n.x,i=n.y,l=(t={x:r,y:i,strokeColor:(0,d.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:"",fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"},h((0,o.Z)({type:"text",text:t.text,fontSize:t.fontSize,fontFamily:t.fontFamily,textAlign:t.textAlign,verticalAlign:t.verticalAlign,originalText:t.text},t)));D.draggingElement=l;var c=a.current;c.focus();var s=e.clientX-D.offsetLeft,u=e.clientY-D.offsetTop,f={font:(0,d.mO)(l),left:"".concat(s,"px"),top:"".concat(u,"px"),opacity:1,color:l.strokeColor,fontSize:l.fontSize};Object.assign(c.style,f);var g=document.getElementById("copyText");Object.assign(g.style,f);var v=D.canvasWidth-s;c.style.maxWidth="".concat(v,"px"),c.style.width="".concat(l.fontSize,"px"),c.style.height="".concat(1.2*l.fontSize,"px")}}})),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("textarea",{onChange:function(e){var t=e.target.value,n=a.current,o=parseFloat(n.style.maxWidth),r=document.getElementById("copyText");r.innerText=t;var i=r.getBoundingClientRect().width;if(i>o)if(i-o<30)console.log("\u6b63\u5e38\u7684\u8f93\u5165"),t=r.innerText=t.slice(0,t.length-1)+"\n"+t.slice(t.length-1);else{console.log("\u7c98\u8d34\u8fdb\u6765\u7684\u6587\u672c");var l=t.split("\n"),c=[];l.forEach((function(e){if(r.innerText=e,r.getBoundingClientRect().width<=o)c.push(e);else for(var t=0,n=1;n<e.length;n++){var i=e.slice(t,n);r.innerText=i,r.getBoundingClientRect().width>o?(c.push(e.slice(t,n-1)),t=n-1):n===e.length-1&&c.push(e.slice(t,n))}})),console.log("splitResult..",c),t=c.join("\n"),r.innerText=t}f(t);var s=r.getBoundingClientRect(),d=s.width,u=s.height;n.style.width="".concat(d+30,"px"),n.style.height="".concat(u,"px"),D.draggingElement.text=t},onBlur:function(){var e=D.draggingElement,t=a.current,o=document.getElementById("copyText");e.text&&(e.width=o.offsetWidth,e.height=o.offsetHeight,v(D.draggingElement),B.replaceAllElements([].concat((0,r.Z)(B.getElementsIncludingDeleted()),[D.draggingElement])),C({elements:B.getElementsIncludingDeleted(),appState:D,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:D.scrollX,scrollY:D.scrollY,viewBackgroundColor:"#ffffff",zoom:1}}),setTimeout((function(){o.innerText="",f("")}),200)),Object.assign(t.style,{left:"0px",top:"0px",width:"20px",height:"30px",opacity:0})},value:u,className:X.textarea,ref:a}),(0,E.jsx)("div",{style:{background:"grey"},id:"copyText",contentEditable:!0,className:[X.textarea,X.textarea_copy].join(" ")})]})})),_=(0,l.memo)(Y),D=JSON.parse(localStorage.getItem("appState"))||{scrollX:0,scrollY:0,offsetLeft:0,offsetTop:0,draggingElement:null,canvasWidth:0,canvasHeight:0},z=(0,l.memo)((function(){var e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),s=(0,l.useRef)(null),u=(0,l.useRef)(null),f=(0,l.useState)({type:""}),g=(0,i.Z)(f,2),p=g[0],m=g[1];(0,l.useEffect)((function(){var t=function(e){e.width=r*window.devicePixelRatio,e.height=i*window.devicePixelRatio},o=e.current,r=o.offsetWidth,i=o.offsetHeight;t(o),t(n.current);var l=o.getBoundingClientRect(),a=l.x,c=l.y;D.offsetLeft=a,D.offsetTop=c,D.canvasWidth=r,D.canvasHeight=i,C({elements:B.getElementsIncludingDeleted(),appState:D,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:D.scrollX,scrollY:D.scrollY,viewBackgroundColor:"#ffffff",zoom:1}})}),[]),(0,l.useEffect)((function(){var e=t.current,n=function(e){e.preventDefault()};return e.addEventListener("wheel",n,{passive:!1}),function(){e.removeEventListener("wheel",n)}}),[]),(0,l.useEffect)((function(){var e=0,t=Date.now();!function n(){var o=Date.now();if(e++,o>1e3+t){var r=Math.round(1e3*e/(o-t));u.current.innerText="FPS\uff1a".concat(r),e=0,t=o}requestAnimationFrame(n)}()}),[]);var x=function(t){return(0,d.$9)((function(n){var o=a(n,D);if(t.lastCoords.x=o.x,t.lastCoords.y=o.y,"freedraw"===p.type)D.draggingElement.points.push([o.x,o.y]);else{var r=t.lastCoords,i=t.origin.x,l=t.origin.y,s=r.x,d=r.y,u=c(t.origin.x,r.x),f=c(t.origin.y,r.y),h=s<i?i-u:i,g=d<l?l-f:l;D.draggingElement.x=h,D.draggingElement.y=g,D.draggingElement.width=u,D.draggingElement.height=f}v(D.draggingElement),C({elements:[D.draggingElement],appState:D,scale:window.devicePixelRatio,canvas:e.current,renderConfig:{selectionColor:"#6965db",scrollX:D.scrollX,scrollY:D.scrollY,viewBackgroundColor:"#ffffff",zoom:1}})}))},y=function(t){return function(o){B.replaceAllElements([].concat((0,r.Z)(B.getElementsIncludingDeleted()),[D.draggingElement])),console.log("pointer up appState...",D);var i=e.current;i.getContext("2d").clearRect(0,0,i.width,i.height),C({elements:B.getElementsIncludingDeleted(),appState:D,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:D.scrollX,scrollY:D.scrollY,viewBackgroundColor:"#ffffff",zoom:1}}),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}},w=function(e){var t=a(e,D);return{origin:t,lastCoords:(0,o.Z)({},t),eventListeners:{onMove:null,onUp:null,onKeyUp:null,onKeyDown:null}}};return(0,E.jsxs)("div",{ref:t,children:[(0,E.jsxs)("div",{className:"container wrap",children:[(0,E.jsx)("canvas",{ref:n,className:"canvas",children:"\u9759\u6001canvas"}),(0,E.jsx)("canvas",{ref:e,className:"canvas draw",onWheel:function(e){var t=e.deltaX,o=e.deltaY;D.scrollX=D.scrollX-t,D.scrollY=D.scrollY-o,C({elements:B.getElementsIncludingDeleted(),appState:D,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:D.scrollX,scrollY:D.scrollY,viewBackgroundColor:"#ffffff",zoom:1}})},onPointerDown:function(e){if(p.type){var t=w(e),n=function(e){var t=e.elementType,n=e.pointerDownState,o=e.appState;return h("freedraw"===t?{type:t,x:n.origin.x,y:n.origin.y,points:[[n.origin.x,n.origin.y]],strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,d.B8)()}:{type:t,x:n.origin.x,y:n.origin.y,strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,d.B8)()})}({elementType:p.type,pointerDownState:t,appState:D});D.draggingElement=n,v(n);var o=x(t),r=y(t);window.addEventListener("pointermove",o),window.addEventListener("pointerup",r),t.eventListeners.onMove=o,t.eventListeners.onUp=r}},onDoubleClick:function(e){s.current.startEditText(e)},children:"\u52a8\u6001canvas"}),(0,E.jsx)(A,{activeTool:p,onActiveToolChange:function(e){m(e)}}),(0,E.jsx)(_,{ref:s,staticCanvasRef:n})]}),(0,E.jsx)("div",{ref:u,children:"FPS\uff1a--"}),(0,E.jsx)("div",{id:"placeholder"})]})})),F=z},84:function(e,t,n){n.d(t,{$9:function(){return s},B8:function(){return c},KP:function(){return f},TE:function(){return g},dE:function(){return a},kb:function(){return p},mO:function(){return m},qf:function(){return h}});var o=n(9439),r=n(7762),i=n(3433),l=n(4164),a=function(e,t){var n=e.clientX,o=e.clientY,r=t.offsetLeft,i=t.offsetTop;return{x:n-r-t.scrollX,y:o-i-t.scrollY}},c=function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(n,")")},s=function(e){return function(e,t){var n=null,o=null,r=null,l=function t(l){n=window.requestAnimationFrame((function(){n=null,e.apply(void 0,(0,i.Z)(l)),o=null,r&&(o=r,r=null,t(o))}))},a=function(){for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];o=i,null===n?l(o):null!==t&&void 0!==t&&t.trailing&&(r=i)};return a.flush=function(){null!==n&&(cancelAnimationFrame(n),n=null),o&&(e.apply(void 0,(0,i.Z)(r||o)),o=r=null)},a.cancel=function(){o=r=null,null!==n&&(cancelAnimationFrame(n),n=null)},a}((function(t){(0,l.unstable_batchedUpdates)(e,t)}))},d=function(e){var t=1/0,n=1/0,i=-1/0,l=-1/0,a=e.points;"freedraw"===e.type&&(a=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var c,s=(0,r.Z)(a);try{for(s.s();!(c=s.n()).done;){var d=(0,o.Z)(c.value,2),u=d[0],f=d[1];t=Math.min(t,u),n=Math.min(n,f),i=Math.max(i,u),l=Math.max(l,f)}}catch(h){s.e(h)}finally{s.f()}return[t,n,i,l]},u=function(e,t,n,o,r){return[(e-n)*Math.cos(r)-(t-o)*Math.sin(r)+n,(e-n)*Math.sin(r)+(t-o)*Math.cos(r)+o]},f=function(e){if(!e.length)return[0,0,0,0];var t=1/0,n=-1/0,r=1/0,i=-1/0;return e.forEach((function(e){var l=function(e){var t=h(e),n=(0,o.Z)(t,6),r=n[0],i=n[1],l=n[2],a=n[3],c=n[4],s=n[5];if("freedraw"===e.type){var f=d(e),g=(0,o.Z)(f,4),v=g[0],p=g[1],m=g[2],x=g[3];return[v+e.x,p+e.y,m+e.x,x+e.y]}var y=u(r,i,c,s,e.angle),w=(0,o.Z)(y,2),k=w[0],C=w[1],S=u(r,a,c,s,e.angle),E=(0,o.Z)(S,2),T=E[0],M=E[1],Z=u(l,a,c,s,e.angle),R=(0,o.Z)(Z,2),j=R[0],b=R[1],P=u(l,i,c,s,e.angle),I=(0,o.Z)(P,2),W=I[0],B=I[1];return[Math.min(k,T,j,W),Math.min(C,M,b,B),Math.max(k,T,j,W),Math.max(C,M,b,B)]}(e),a=(0,o.Z)(l,4),c=a[0],s=a[1],f=a[2],g=a[3];t=Math.min(t,c),r=Math.min(r,s),n=Math.max(n,f),i=Math.max(i,g)})),[t,r,n,i]},h=function(e){if("freedraw"===e.type){var t=d(e),n=(0,o.Z)(t,4),r=n[0],i=n[1],l=n[2],a=n[3],c=r+e.x,s=i+e.y,u=l+e.x,f=a+e.y;return[c,s,u,f,(c+u)/2,(s+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},g=function(e,t){return Math.abs(e-t)},v=0,p=function(){return"id".concat(v++)};window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var t=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})),n=function(e){var t=e.map((function(e){return e[0]})),n=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,i.Z)(t))-Math.min.apply(Math,(0,i.Z)(t)),height:Math.max.apply(Math,(0,i.Z)(n))-Math.min.apply(Math,(0,i.Z)(n))}}(t),o=n.width,r=n.height;return{id:p(),type:"freedraw",x:e.x,y:e.y,width:o,height:r,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:t,pressures:[],simulatePressure:!0,lastCommittedPoint:t[t.length-1]}}))};var m=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}}}]);
//# sourceMappingURL=Canvas.aa6a8a65.chunk.js.map