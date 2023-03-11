"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[343],{6211:function(e,t,n){n.r(t),n.d(t,{appState:function(){return q},default:function(){return U}});var o=n(3433),r=n(1413),l=n(9439),a=n(2791),i=n(84),c=n(493),s=n(4925),u=["type","x","y","strokeColor","backgroundColor","fillStyle","strokeWidth","strokeStyle","width","height","angle","points"],d=function(e){var t=e.type,n=e.x,o=e.y,l=e.strokeColor,a=e.backgroundColor,c=e.fillStyle,d=e.strokeWidth,f=void 0===d?3:d,v=e.strokeStyle,h=e.width,m=void 0===h?0:h,g=e.height,p=void 0===g?0:g,x=e.angle,w=void 0===x?0:x,y=e.points,k=void 0===y?[]:y,E=(0,s.Z)(e,u);return(0,r.Z)({id:(0,i.kb)(),type:t,x:n,y:o,width:m,height:p,strokeColor:l,backgroundColor:a,fillStyle:c,strokeWidth:f,strokeStyle:v,angle:w,isDeleted:!1,points:k},E)},f=function(e){var t=e.elementType,n=e.pointerDownState,o=e.appState;return d("freedraw"===t?{type:t,x:n.origin.x,y:n.origin.y,points:[[n.origin.x,n.origin.y]],strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,i.B8)()}:{type:t,x:n.origin.x,y:n.origin.y,strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,i.B8)()})},v=function(e,t){return Number((Math.random()*(t-e)+e).toFixed(5))},h=function(e,t,n){var o,r=[];console.log("generate elements...",e,t);for(var l=0;l<e;l++){var a=v(-n.scrollX,n.canvasWidth-n.scrollX),i=v(-n.scrollY,n.canvasHeight-n.scrollY),c=Math.abs(v(-n.scrollX-a,n.canvasWidth-n.scrollX-a))+2,s=Math.abs(v(-n.scrollY-i,n.canvasHeight-n.scrollY-i))+2;(o=f({elementType:t,pointerDownState:{origin:{x:a,y:i}},appState:n})).width=c,o.height=s,r.push(o)}return r},m=n(5856),g=n(2670),p={tools:"index_tools__ZQUTr",item:"index_item__JCc41",selected:"index_selected__uL6n6"},x=n(184),w=["width","height","mirror","style"],y=function(e,t){var n="number"===typeof t?{width:t}:t,o=n.width,l=void 0===o?512:o,a=n.height,i=void 0===a?l:a,c=(n.mirror,n.style),u=(0,s.Z)(n,w);return(0,x.jsx)("svg",(0,r.Z)((0,r.Z)({"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 ".concat(l," ").concat(i),style:c},u),{},{children:"string"===typeof e?(0,x.jsx)("path",{fill:"currentColor",d:e}):e}))},k=y((0,x.jsxs)("g",{strokeWidth:"1.5",children:[(0,x.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,x.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),E=y((0,x.jsxs)("g",{strokeWidth:"1.25",children:[(0,x.jsx)("path",{clipRule:"evenodd",d:"m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"}),(0,x.jsx)("path",{d:"m11.25 5.417 3.333 3.333"})]}),{width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),C=y((0,x.jsxs)("g",{strokeWidth:"1.25",children:[(0,x.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,x.jsx)("path",{d:"M15 8h.01"}),(0,x.jsx)("path",{d:"M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"}),(0,x.jsx)("path",{d:"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}),(0,x.jsx)("path",{d:"M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"}),(0,x.jsx)("path",{d:"M19 16v6"}),(0,x.jsx)("path",{d:"M22 19l-3 3l-3 -3"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),S={width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},j=y((0,x.jsx)("path",{strokeWidth:"1.25",d:"M10 4.167v11.666M4.167 10h11.666"}),S),T=y((0,x.jsx)("path",{d:"M5 10h10",strokeWidth:"1.25"}),S),Z=n(1790),M=n(5671),b=n(3144),R=function(){function e(){(0,M.Z)(this,e);var t=JSON.parse(localStorage.getItem("elements"));this.elements=t||[]}return(0,b.Z)(e,[{key:"getElementsIncludingDeleted",value:function(){return this.elements}},{key:"replaceAllElements",value:function(e){this.elements=e}}]),e}(),z=new R,X=[{type:"rectangle",icon:k},{type:"freedraw",icon:E}],Y=(0,a.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange;return(0,x.jsxs)("div",{className:p.tools,children:[(0,x.jsx)("span",{className:[p.item].join(" "),onClick:function(){(0,Z.a)({elements:z.getElementsIncludingDeleted(),appState:q})},children:C}),X.map((function(e){var o=t.type===e.type;return(0,x.jsx)("span",{className:[p.item,o&&p.selected].join(" "),onClick:function(){return n({type:o?"":e.type})},children:e.icon},e.type)}))]})})),_={scale:"index_scale__7GBXS",item:"index_item__EjyQO",value:"index_value__oZ-q0"},P=(0,a.memo)((function(e){var t=e.appState,n=e.onZoomChange,o="".concat((100*t.zoom.value).toFixed(0),"%");return(0,x.jsxs)("div",{className:_.scale,children:[(0,x.jsx)("span",{className:[_.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value-.1))},children:T}),(0,x.jsx)("span",{className:_.value,onClick:function(){return n((0,c.j)(1))},children:o}),(0,x.jsx)("span",{className:[_.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value+.1))},children:j})]})})),I=P,L="index_layer__JlGve",W="index_ball_red__Sy41Y",B="index_boundceBall__4iw92",A="index_shadowball__QeKta",D=(0,a.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange,o=e.appState,r=e.onZoomChange;return(0,x.jsxs)("div",{className:L,children:[(0,x.jsx)(I,{appState:o,onZoomChange:r}),(0,x.jsx)(Y,{activeTool:t,onActiveToolChange:n}),(0,x.jsxs)("div",{className:B,children:[(0,x.jsx)("div",{className:W}),(0,x.jsx)("div",{className:A})]})]})})),N=D,F={textarea:"index_textarea__b45r1",textarea_copy:"index_textarea_copy__REiTG"},O=(0,a.forwardRef)((function(e,t){var n=e.staticCanvasRef,c=(0,a.useRef)(null),s=(0,a.useState)(""),u=(0,l.Z)(s,2),f=u[0],v=u[1];return(0,a.useImperativeHandle)(t,(function(){return{startEditText:function(e){e.preventDefault(),e.stopPropagation();var t,n=(0,i.dE)(e,q),o=n.x,l=n.y,a=(t={x:o,y:l,strokeColor:(0,i.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:"",fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"},d((0,r.Z)({type:"text",text:t.text,fontSize:t.fontSize,fontFamily:t.fontFamily,textAlign:t.textAlign,verticalAlign:t.verticalAlign,originalText:t.text},t)));q.draggingElement=a;var s=c.current;s.focus();var u=e.clientX-q.offsetLeft,f=e.clientY-q.offsetTop,v={font:(0,i.mO)(a),left:"".concat(u,"px"),top:"".concat(f,"px"),opacity:1,color:a.strokeColor,fontSize:a.fontSize};Object.assign(s.style,v);var h=document.getElementById("copyText");Object.assign(h.style,v);var m=q.canvasWidth-u;Object.assign(s.style,{zIndex:1,maxWidth:"".concat(m,"px"),width:"".concat(a.fontSize,"px"),height:"".concat(1.2*a.fontSize,"px")})}}})),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("textarea",{onChange:function(e){var t=e.target.value,n=c.current,o=parseFloat(n.style.maxWidth),r=document.getElementById("copyText");r.innerText=t;var l=r.getBoundingClientRect().width;if(l>o)if(l-o<30)console.log("\u6b63\u5e38\u7684\u8f93\u5165"),t=r.innerText=t.slice(0,t.length-1)+"\n"+t.slice(t.length-1);else{console.log("\u7c98\u8d34\u8fdb\u6765\u7684\u6587\u672c");var a=t.split("\n"),i=[];a.forEach((function(e){if(r.innerText=e,r.getBoundingClientRect().width<=o)i.push(e);else for(var t=0,n=1;n<e.length;n++){var l=e.slice(t,n);r.innerText=l,r.getBoundingClientRect().width>o?(i.push(e.slice(t,n-1)),t=n-1):n===e.length-1&&i.push(e.slice(t,n))}})),console.log("splitResult..",i),t=i.join("\n"),r.innerText=t}v(t);var s=r.getBoundingClientRect(),u=s.width,d=s.height;n.style.width="".concat(u+30,"px"),n.style.height="".concat(d,"px"),q.draggingElement.text=t},onBlur:function(){var e=q.draggingElement,t=c.current,r=document.getElementById("copyText");e.text&&(e.width=r.offsetWidth,e.height=r.offsetHeight,(0,g.Pm)(q.draggingElement),z.replaceAllElements([].concat((0,o.Z)(z.getElementsIncludingDeleted()),[q.draggingElement])),(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}}),setTimeout((function(){r.innerText="",v("")}),200)),Object.assign(t.style,{left:"0px",top:"0px",zIndex:-1,opacity:0})},value:f,className:F.textarea,ref:c}),(0,x.jsx)("div",{style:{background:"grey"},id:"copyText",contentEditable:!0,className:[F.textarea,F.textarea_copy].join(" ")})]})})),H=(0,a.memo)(O),q=JSON.parse(localStorage.getItem("appState"))||{zoom:{value:1},scrollX:0,scrollY:0,offsetLeft:0,offsetTop:0,draggingElement:null,canvasWidth:0,canvasHeight:0},J=(0,a.memo)((function(){var e=(0,a.useRef)(null),t=(0,a.useRef)(null),n=(0,a.useRef)(null),s=(0,a.useRef)({}),u=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useRef)({}),w=(0,a.useState)(!1),y=(0,l.Z)(w,2),k=y[0],E=y[1],C=(0,a.useState)({type:""}),S=(0,l.Z)(C,2),j=S[0],T=S[1],Z=(0,a.useState)({count:"",type:"rectangle"}),M=(0,l.Z)(Z,2),b=M[0],R=M[1],X=(0,a.useState)(!1),Y=(0,l.Z)(X,2),_=Y[0],P=Y[1],I=(0,a.useRef)(),L=function(){E(!k)};(0,a.useEffect)((function(){var t=function(e){e.width=r*window.devicePixelRatio,e.height=l*window.devicePixelRatio},o=e.current,r=o.offsetWidth,l=o.offsetHeight;t(o),t(n.current);var a=o.getBoundingClientRect(),i=a.x,c=a.y;q.offsetLeft=i,q.offsetTop=c,q.canvasWidth=r,q.canvasHeight=l,(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})}),[]),(0,a.useEffect)((function(){var n=t.current,o=function(e){e.preventDefault()};n.addEventListener("wheel",o,{passive:!1});var r=function(e){s.current={cursorX:e.clientX,cursorY:e.clientY}},l=function(e){e.preventDefault()},a=e.current;return a.addEventListener("touchstart",l),document.addEventListener("mousemove",r),function(){a.removeEventListener("touchstart",l),n.removeEventListener("wheel",o),document.removeEventListener("mousemove",r)}}),[]),(0,a.useEffect)((function(){var e=0,t=Date.now();!function n(){var o=Date.now();if(e++,o>1e3+t){var r=Math.round(1e3*e/(o-t));d.current.innerText="FPS\uff1a".concat(r),e=0,t=o}requestAnimationFrame(n)}()}),[]);var W=function(){(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}}),p.current.zoomTimerId&&clearTimeout(p.current.zoomTimerId),p.current.zoomTimerId=setTimeout((function(){(0,g.l9)(),(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})}),300)},B=function(t){return(0,i.$9)((function(n){var o=(0,i.dE)(n,q);if(t.lastCoords.x=o.x,t.lastCoords.y=o.y,"freedraw"===j.type)q.draggingElement.points.push([o.x,o.y]);else{var r=t.lastCoords,l=t.origin.x,a=t.origin.y,c=r.x,s=r.y,u=(0,i.TE)(t.origin.x,r.x),d=(0,i.TE)(t.origin.y,r.y),f=c<l?l-u:l,v=s<a?a-d:a;q.draggingElement.x=f,q.draggingElement.y=v,q.draggingElement.width=u,q.draggingElement.height=d}(0,g.Pm)(q.draggingElement),(0,m.E)({elements:[q.draggingElement],appState:q,scale:window.devicePixelRatio,canvas:e.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})}))},A=function(t){return function(r){z.replaceAllElements([].concat((0,o.Z)(z.getElementsIncludingDeleted()),[q.draggingElement])),console.log("pointer up appState...",q);var l=e.current;l.getContext("2d").clearRect(0,0,l.width,l.height),(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}}),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}},D=function(e){var t=(0,i.dE)(e,q);return{origin:t,lastCoords:(0,r.Z)({},t),eventListeners:{onMove:null,onUp:null,onKeyUp:null,onKeyDown:null}}};return(0,x.jsxs)("div",{ref:t,children:[(0,x.jsxs)("div",{className:"container wrap",children:[(0,x.jsx)("canvas",{ref:n,className:"canvas",children:"\u9759\u6001canvas"}),(0,x.jsx)("canvas",{ref:e,className:"canvas draw",onWheel:function(e){var t=e.deltaX,o=e.deltaY;if(e.metaKey||e.ctrlKey){var l=Math.sign(o),a=Math.abs(o),i=o;a>10&&(i=10*l);var u=q.zoom.value-i/100;u+=Math.log10(Math.max(1,q.zoom.value))*-l*Math.min(1,a/20);var d=(0,c.j)(u);return Object.assign(q,(0,r.Z)({},(0,c.E)({viewportX:s.current.cursorX,viewportY:s.current.cursorY,nextZoom:d},q))),L(),void W()}q.scrollX=q.scrollX-t,q.scrollY=q.scrollY-o,(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})},onPointerDown:function(e){if(j.type){var t=D(e),n=f({elementType:j.type,pointerDownState:t,appState:q});q.draggingElement=n,(0,g.Pm)(n);var o=B(t),r=A(t);window.addEventListener("pointermove",o),window.addEventListener("pointerup",r),t.eventListeners.onMove=o,t.eventListeners.onUp=r}},onDoubleClick:function(e){j.type||u.current.startEditText(e)},children:"\u52a8\u6001canvas"}),(0,x.jsx)(N,{activeTool:j,onZoomChange:function(e){q.zoom.value!==e&&(Object.assign(q,(0,r.Z)({},(0,c.E)({viewportX:q.canvasWidth/2+q.offsetLeft,viewportY:q.canvasHeight/2+q.offsetTop,nextZoom:e},q))),L(),W())},appState:(0,r.Z)({},q),onActiveToolChange:function(e){T(e)}}),(0,x.jsx)(H,{ref:u,staticCanvasRef:n})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{ref:d,children:"FPS\uff1a--"}),(0,x.jsx)("span",{className:"total",id:"canvas-total"})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("input",{type:"number",value:b.count,onChange:function(e){return R((0,r.Z)((0,r.Z)({},b),{},{count:e.target.value}))}}),(0,x.jsxs)("select",{value:b.type,onChange:function(e){return R((0,r.Z)((0,r.Z)({},b),{},{type:e.target.value}))},children:[(0,x.jsx)("option",{value:"freedraw",children:"freedraw"}),(0,x.jsx)("option",{value:"rectangle",children:"rectangle"}),(0,x.jsx)("option",{value:"text",children:"text"})]}),(0,x.jsx)("button",{onClick:function(){var e=h(Number(b.count),b.type,q);z.replaceAllElements([].concat((0,o.Z)(z.getElementsIncludingDeleted()),(0,o.Z)(e))),(0,m.E)({elements:z.getElementsIncludingDeleted(),appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})},children:"\u751f\u6210"}),(0,x.jsx)("button",{onClick:function(){if(P(!_),I.current&&cancelAnimationFrame(I.current),!_){var e=Date.now();I.current=requestAnimationFrame((function t(){var o=Date.now();if(o-e>=100){e=o;var r=function(e,t){return e.forEach((function(e){var n=v(-t.scrollX,t.canvasWidth-t.scrollX),o=v(-t.scrollY,t.canvasHeight-t.scrollY);e.x=n,e.y=o})),e}(z.getElementsIncludingDeleted(),q);(0,m.E)({elements:r,appState:q,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:q.scrollX,scrollY:q.scrollY,viewBackgroundColor:"#ffffff",zoom:q.zoom}})}I.current=requestAnimationFrame(t)}))}},children:_?"\u505c\u6b62\u52a8\u753b":"\u52a8\u753b"})]}),(0,x.jsx)("div",{id:"placeholder"})]})})),U=J},2670:function(e,t,n){n.d(t,{Pm:function(){return i},l9:function(){return c},lw:function(){return l}});var o=n(9439),r=n(84),l=function(e,t,n,o){var r=s(e,n);h(r,t,n)},a=new WeakMap,i=function(e){a.delete(e)},c=function(){a=new WeakMap},s=function(e,t){var n=a.get(e);if(n)return n;var o=d(e,t.zoom,t);return a.set(e,o),o},u=document.getElementById("placeholder"),d=function(e,t,n){var l=document.createElement("canvas"),a=l.getContext("2d"),i=v(e);u||(u=document.getElementById("placeholder")),l;if("freedraw"===e.type){var c,s,d=(0,r.qf)(e),h=(0,o.Z)(d,4),m=h[0],g=h[1],p=h[2],x=h[3];l.width=(0,r.TE)(m,p)*window.devicePixelRatio*t.value+i*t.value*2,l.height=(0,r.TE)(g,x)*window.devicePixelRatio*t.value+i*t.value*2,c=e.x>m?(0,r.TE)(e.x,m)*window.devicePixelRatio*t.value:0,s=e.y>g?(0,r.TE)(e.y,g)*t.value*window.devicePixelRatio:0,a.translate(c,s)}else l.width=e.width*window.devicePixelRatio*t.value+i*t.value*2,l.height=e.height*window.devicePixelRatio*t.value+i*t.value*2;return a.save(),a.translate(i*t.value,i*t.value),a.scale(window.devicePixelRatio*t.value,window.devicePixelRatio*t.value),f(e,a,n),a.restore(),{element:e,canvas:l,theme:n.theme,canvasZoom:t,canvasOffsetX:0,canvasOffsetY:0}},f=function(e,t,n){switch(t.globalAlpha=e.opacity/100,e.type){case"rectangle":t.lineJoin="round",t.lineCap="round",t.lineWidth=e.strokeWidth,t.strokeStyle=e.strokeStyle,t.strokeRect(0,0,e.width,e.height);break;case"text":t.font=(0,r.mO)(e),t.fillStyle=e.strokeColor,t.textAlign=e.textAlign;var l=e.text.split("\n"),a=l.length?e.height/l.length:18;t.textBaseline="bottom";for(var i=0;i<l.length;i++)t.fillText(l[i],0,(i+1)*a);break;case"freedraw":t.save(),t.lineWidth=e.strokeWidth,t.strokeStyle=e.strokeStyle,e.points.forEach((function(n,r){var l=(0,o.Z)(n,2),a=l[0],i=l[1];a-=e.x,i-=e.y,r?t.lineTo(a,i):t.moveTo(a,i)})),t.stroke(),t.restore()}t.globalAlpha=1},v=function(e){return"freedraw"===e.type?12*e.strokeWidth:20},h=function(e,t,n){var l=e.element,a=v(l),i=(0,r.qf)(l),c=(0,o.Z)(i,4),s=c[0],u=c[1],d=c[2],f=c[3];if("freedraw"===l.type){var h=(0,r.qf)(l),m=(0,o.Z)(h,4);s=m[0],u=m[1],d=m[2],f=m[3]}var g=((s+d)/2+n.scrollX)*window.devicePixelRatio,p=((u+f)/2+n.scrollY)*window.devicePixelRatio;t.save(),t.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),t.translate(g,p),t.drawImage(e.canvas,-(d-s)/2*window.devicePixelRatio-a*e.canvasZoom.value/e.canvasZoom.value,-(f-u)/2*window.devicePixelRatio-a*e.canvasZoom.value/e.canvasZoom.value,e.canvas.width/e.canvasZoom.value,e.canvas.height/e.canvasZoom.value),t.restore()}},5856:function(e,t,n){n.d(t,{E:function(){return a}});var o=n(9439),r=n(2670),l=n(84),a=function(e){var t=e.elements,n=e.appState,a=e.scale,i=e.canvas,c=e.renderConfig,s=i.getContext("2d");s.save(),s.scale(a,a);var u=i.width/a,d=i.height/a;s.clearRect(0,0,u,d),s.save(),s.scale(c.zoom.value,c.zoom.value),function(e,t){var n=t.scrollX,o=t.scrollY,r=t.zoom;e.save();var l=100,a=100,i=e.canvas;e.strokeStyle="red",e.fillStyle="red",e.beginPath(),e.lineWidth=2,e.textBaseline="middle",e.save(),e.translate(0,o);for(var c=0;c<o/l;c++)e.moveTo(0,-c*l),e.lineTo(8,-c*l),e.font="10px Arial",e.fillText(-c,0,-c*l+10);for(var s=1;s<(i.height-o*r.value)/(l*r.value);s++)e.moveTo(0,s*l),e.lineTo(8,s*l),e.font="10px Arial",e.fillText(s,0,s*l+10);e.restore(),e.save(),e.translate(n,0);for(var u=0;u<n/a;u++)e.moveTo(-u*a,0),e.lineTo(-u*a,8),e.font="10px Arial",e.fillText(-u,-u*a+5,5);for(var d=1;d<(i.width-n*r.value)/(a*r.value);d++)e.moveTo(d*a,0),e.lineTo(d*a,8),e.font="10px Arial",e.fillText(d,d*a+5,5);e.restore(),e.stroke(),e.restore()}(s,c);var f=t.filter((function(e){return function(e,t,n,r){var a=(0,l.Pi)(e),i=(0,o.Z)(a,4),c=i[0],s=i[1],u=i[2],d=i[3],f=(0,l.dE)({clientX:r.offsetLeft,clientY:r.offsetTop},r),v=(0,l.dE)({clientX:r.offsetLeft+t,clientY:r.offsetTop+n},r);return f.x<=u&&f.y<=d&&v.x>=c&&v.y>=s}(e,u,d,{zoom:c.zoom,offsetLeft:n.offsetLeft,offsetTop:n.offsetTop,scrollX:c.scrollX,scrollY:c.scrollY})}));document.getElementById("canvas-total").innerText="\u603b\u5143\u7d20\u6570\uff1a".concat(t.length,"   \u53ef\u89c1\u533a\u57df\u5185\u5143\u7d20\uff1a").concat(f.length),f.forEach((function(e){(0,r.lw)(e,s,c,n)})),s.restore(),s.restore(),localStorage.setItem("elements",JSON.stringify(t)),localStorage.setItem("appState",JSON.stringify(n))}},1790:function(e,t,n){n.d(t,{a:function(){return i}});var o=n(1413),r=n(9439),l=n(84),a=n(5856),i=function(e){var t=e.elements,n=e.appState,i=function(e,t){var n=(0,l.KP)(e),o=(0,r.Z)(n,4),a=o[0],i=o[1],c=o[2],s=o[3];return[a,i,(0,l.TE)(a,c)+2*t,(0,l.TE)(i,s)+t+t]}(t,10),c=(0,r.Z)(i,4),s=c[0],u=c[1],d=c[2],f=c[3];console.log("export...",s,u,d,f);var v=document.createElement("canvas");v.width=d*window.devicePixelRatio,v.height=f*window.devicePixelRatio,(0,a.E)({elements:t,appState:(0,o.Z)((0,o.Z)({},n),{},{scrollX:10-s,scrollY:10-u}),scale:window.devicePixelRatio,canvas:v,renderConfig:{selectionColor:"#6965db",scrollX:10-s,scrollY:10-u,viewBackgroundColor:"#ffffff",zoom:1}}),console.log("\u5bfc\u51fa",t);var h=document.createElement("a");h.href=v.toDataURL(),h.download="canvas.png",h.click()}},84:function(e,t,n){n.d(t,{$9:function(){return s},B8:function(){return c},KP:function(){return v},Pi:function(){return f},TE:function(){return m},dE:function(){return i},kb:function(){return p},mO:function(){return x},qf:function(){return h}});var o=n(9439),r=n(7762),l=n(3433),a=n(4164),i=function(e,t){var n=e.clientX,o=e.clientY,r=t.zoom,l=t.offsetLeft,a=t.offsetTop,i=t.scrollX,c=t.scrollY,s=r?r.value:1;return{x:(n-l)/s-i,y:(o-a)/s-c}},c=function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(n,")")},s=function(e){return function(e,t){var n=null,o=null,r=null,a=function t(a){n=window.requestAnimationFrame((function(){n=null,e.apply(void 0,(0,l.Z)(a)),o=null,r&&(o=r,r=null,t(o))}))},i=function(){for(var e=arguments.length,l=new Array(e),i=0;i<e;i++)l[i]=arguments[i];o=l,null===n?a(o):null!==t&&void 0!==t&&t.trailing&&(r=l)};return i.flush=function(){null!==n&&(cancelAnimationFrame(n),n=null),o&&(e.apply(void 0,(0,l.Z)(r||o)),o=r=null)},i.cancel=function(){o=r=null,null!==n&&(cancelAnimationFrame(n),n=null)},i}((function(t){(0,a.unstable_batchedUpdates)(e,t)}))},u=function(e){var t=1/0,n=1/0,l=-1/0,a=-1/0,i=e.points;"freedraw"===e.type&&(i=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var c,s=(0,r.Z)(i);try{for(s.s();!(c=s.n()).done;){var u=(0,o.Z)(c.value,2),d=u[0],f=u[1];t=Math.min(t,d),n=Math.min(n,f),l=Math.max(l,d),a=Math.max(a,f)}}catch(v){s.e(v)}finally{s.f()}return[t,n,l,a]},d=function(e,t,n,o,r){return[(e-n)*Math.cos(r)-(t-o)*Math.sin(r)+n,(e-n)*Math.sin(r)+(t-o)*Math.cos(r)+o]},f=function(e){var t=h(e),n=(0,o.Z)(t,6),r=n[0],l=n[1],a=n[2],i=n[3],c=n[4],s=n[5];if("freedraw"===e.type){var f=u(e),v=(0,o.Z)(f,4),m=v[0],g=v[1],p=v[2],x=v[3];return[m+e.x,g+e.y,p+e.x,x+e.y]}var w=d(r,l,c,s,e.angle),y=(0,o.Z)(w,2),k=y[0],E=y[1],C=d(r,i,c,s,e.angle),S=(0,o.Z)(C,2),j=S[0],T=S[1],Z=d(a,i,c,s,e.angle),M=(0,o.Z)(Z,2),b=M[0],R=M[1],z=d(a,l,c,s,e.angle),X=(0,o.Z)(z,2),Y=X[0],_=X[1];return[Math.min(k,j,b,Y),Math.min(E,T,R,_),Math.max(k,j,b,Y),Math.max(E,T,R,_)]},v=function(e){if(!e.length)return[0,0,0,0];var t=1/0,n=-1/0,r=1/0,l=-1/0;return e.forEach((function(e){var a=f(e),i=(0,o.Z)(a,4),c=i[0],s=i[1],u=i[2],d=i[3];t=Math.min(t,c),r=Math.min(r,s),n=Math.max(n,u),l=Math.max(l,d)})),[t,r,n,l]},h=function(e){if("freedraw"===e.type){var t=u(e),n=(0,o.Z)(t,4),r=n[0],l=n[1],a=n[2],i=n[3],c=r+e.x,s=l+e.y,d=a+e.x,f=i+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},m=function(e,t){return Math.abs(e-t)},g=0,p=function(){return"id".concat(g++)};window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var t=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})),n=function(e){var t=e.map((function(e){return e[0]})),n=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,l.Z)(t))-Math.min.apply(Math,(0,l.Z)(t)),height:Math.max.apply(Math,(0,l.Z)(n))-Math.min.apply(Math,(0,l.Z)(n))}}(t),o=n.width,r=n.height;return{id:p(),type:"freedraw",x:e.x,y:e.y,width:o,height:r,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:t,pressures:[],simulatePressure:!0,lastCommittedPoint:t[t.length-1]}}))};var x=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}},493:function(e,t,n){n.d(t,{E:function(){return r},j:function(){return o}});var o=function(e){return Math.max(.1,Math.min(e,30))},r=function(e,t){var n=e.viewportX,o=e.viewportY,r=e.nextZoom,l=n-t.offsetLeft,a=o-t.offsetTop,i=t.zoom.value;return{scrollX:t.scrollX+l/r-l/i,scrollY:t.scrollY+a/r-a/i,zoom:{value:r}}}}}]);
//# sourceMappingURL=Canvas.9154ee98.chunk.js.map