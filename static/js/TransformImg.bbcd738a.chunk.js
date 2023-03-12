"use strict";(self.webpackChunkexcalidraw_app=self.webpackChunkexcalidraw_app||[]).push([[477],{7727:function(e,t,n){n.r(t),n.d(t,{appState:function(){return ee},default:function(){return te}});var o=n(3433),r=n(1413),a=n(9439),i=n(2791),l=n(84),c=n(493),s=n(4925),u=["type","x","y","strokeColor","backgroundColor","fillStyle","strokeWidth","strokeStyle","width","height","angle","points"],d=function(e){var t=e.type,n=e.x,o=e.y,a=e.strokeColor,i=e.backgroundColor,c=e.fillStyle,d=e.strokeWidth,f=void 0===d?3:d,v=e.strokeStyle,h=e.width,m=void 0===h?0:h,p=e.height,g=void 0===p?0:p,x=e.angle,y=void 0===x?0:x,w=e.points,k=void 0===w?[]:w,S=(0,s.Z)(e,u);return(0,r.Z)({id:(0,l.kb)(),type:t,x:n,y:o,width:m,height:g,strokeColor:a,backgroundColor:i,fillStyle:c,strokeWidth:f,strokeStyle:v,angle:y,isDeleted:!1,points:k},S)},f=function(e){var t=e.elementType,n=e.pointerDownState,o=e.appState;return d("freedraw"===t?{type:t,x:n.origin.x,y:n.origin.y,points:[[n.origin.x,n.origin.y]],strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,l.B8)()}:{type:t,x:n.origin.x,y:n.origin.y,strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,l.B8)()})},v=function(e){return d((0,r.Z)({type:"text",text:e.text,fontSize:e.fontSize,fontFamily:e.fontFamily,textAlign:e.textAlign,verticalAlign:e.verticalAlign,originalText:e.text},e))},h=function(e,t){return Number((Math.random()*(t-e)+e).toFixed(5))},m=function(e,t,n){for(var o,r=[],a=0;a<e;a++){var i=h(-n.scrollX,n.canvasWidth-n.scrollX),c=h(-n.scrollY,n.canvasHeight-n.scrollY);if(o=f({elementType:t,pointerDownState:{origin:{x:i,y:c}},appState:n}),"rectangle"===t){var s=Math.abs(h(-n.scrollX-i,n.canvasWidth-n.scrollX-i))+2,u=Math.abs(h(-n.scrollY-c,n.canvasHeight-n.scrollY-c))+2;o.width=s,o.height=u}else if("freedraw"===t)for(var d=h(20,100),m=0;m<d;m++)i=h(i,i+10),c=h(c,c+10),o.points.push([i,c]);else if("text"===t){var p="".concat(i,", ").concat(c);o=v({x:i,y:c,strokeColor:(0,l.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:p,width:20*p.length,height:25,fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"})}r.push(o)}return r},p=new WeakMap,g=function(e){p.delete(e)},x=function(e,t){var n=p.get(e);if(n&&!t.notUseCache)return n;var o=w(e,t.zoom,t);return t.notUseCache||p.set(e,o),o},y=document.getElementById("placeholder"),w=function(e,t,n){var o=document.createElement("canvas"),r=o.getContext("2d"),i=S(e);y||(y=document.getElementById("placeholder")),o;if("freedraw"===e.type){var c,s,u=(0,l.qf)(e),d=(0,a.Z)(u,4),f=d[0],v=d[1],h=d[2],m=d[3];o.width=(0,l.TE)(f,h)*window.devicePixelRatio*t.value+i*t.value*2,o.height=(0,l.TE)(v,m)*window.devicePixelRatio*t.value+i*t.value*2,c=e.x>f?(0,l.TE)(e.x,f)*window.devicePixelRatio*t.value:0,s=e.y>v?(0,l.TE)(e.y,v)*t.value*window.devicePixelRatio:0,r.translate(c,s)}else o.width=e.width*window.devicePixelRatio*t.value+i*t.value*2,o.height=e.height*window.devicePixelRatio*t.value+i*t.value*2;return r.save(),r.translate(i*t.value,i*t.value),r.scale(window.devicePixelRatio*t.value,window.devicePixelRatio*t.value),k(e,r,n),r.restore(),{element:e,canvas:o,theme:n.theme,canvasZoom:t,canvasOffsetX:0,canvasOffsetY:0}},k=function(e,t,n){switch(t.globalAlpha=e.opacity/100,e.type){case"rectangle":t.lineJoin="round",t.lineCap="round",t.lineWidth=e.strokeWidth,t.strokeStyle=n.strokeStyle||e.strokeStyle,t.strokeRect(0,0,e.width,e.height);break;case"text":t.font=(0,l.mO)(e),t.fillStyle=n.fillStyle||e.strokeColor,t.textAlign=e.textAlign;var o=e.text.split("\n"),r=o.length?e.height/o.length:18;t.textBaseline="bottom";for(var i=0;i<o.length;i++)t.fillText(o[i],0,(i+1)*r);break;case"freedraw":t.save(),t.lineWidth=e.strokeWidth,t.strokeStyle=n.strokeStyle||e.strokeStyle,e.points.forEach((function(n,o){var r=(0,a.Z)(n,2),i=r[0],l=r[1];i-=e.x,l-=e.y,o?t.lineTo(i,l):t.moveTo(i,l)})),t.stroke(),t.restore()}t.globalAlpha=1},S=function(e){return"freedraw"===e.type?12*e.strokeWidth:20},C=function(e,t,n){var o=e.element,r=S(o),i=(0,l.qf)(o),c=(0,a.Z)(i,4),s=c[0],u=c[1],d=c[2],f=c[3];if("freedraw"===o.type){var v=(0,l.qf)(o),h=(0,a.Z)(v,4);s=h[0],u=h[1],d=h[2],f=h[3]}var m=((s+d)/2+n.scrollX)*window.devicePixelRatio,p=((u+f)/2+n.scrollY)*window.devicePixelRatio;t.save(),t.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),t.translate(m,p),t.drawImage(e.canvas,-(d-s)/2*window.devicePixelRatio-r*e.canvasZoom.value/e.canvasZoom.value,-(f-u)/2*window.devicePixelRatio-r*e.canvasZoom.value/e.canvasZoom.value,e.canvas.width/e.canvasZoom.value,e.canvas.height/e.canvasZoom.value),t.restore()},E=function(e){var t=e.elements,n=e.appState,o=e.scale,r=e.canvas,i=e.renderConfig,c=r.getContext("2d");c.save(),c.scale(o,o);var s=r.width/o,u=r.height/o;if(c.clearRect(0,0,s,u),c.save(),c.scale(i.zoom.value,i.zoom.value),i.isExport&&t||function(e,t){var n=t.scrollX,o=t.scrollY,r=t.zoom;e.save();var a=100,i=100,l=e.canvas;e.strokeStyle="red",e.fillStyle="red",e.beginPath(),e.lineWidth=2,e.textBaseline="middle",e.save(),e.translate(0,o);for(var c=0;c<o/a;c++)e.moveTo(0,-c*a),e.lineTo(8,-c*a),e.font="10px Arial",e.fillText(-c,0,-c*a+10);for(var s=1;s<(l.height-o*r.value)/(a*r.value);s++)e.moveTo(0,s*a),e.lineTo(8,s*a),e.font="10px Arial",e.fillText(s,0,s*a+10);e.restore(),e.save(),e.translate(n,0);for(var u=0;u<n/i;u++)e.moveTo(-u*i,0),e.lineTo(-u*i,8),e.font="10px Arial",e.fillText(-u,-u*i+5,5);for(var d=1;d<(l.width-n*r.value)/(i*r.value);d++)e.moveTo(d*i,0),e.lineTo(d*i,8),e.font="10px Arial",e.fillText(d,d*i+5,5);e.restore(),e.stroke(),e.restore()}(c,i),t){var d=t.filter((function(e){return function(e,t,n,o){var r=(0,l.Pi)(e),i=(0,a.Z)(r,4),c=i[0],s=i[1],u=i[2],d=i[3],f=(0,l.dE)({clientX:o.offsetLeft,clientY:o.offsetTop},o),v=(0,l.dE)({clientX:o.offsetLeft+t,clientY:o.offsetTop+n},o);return f.x<=u&&f.y<=d&&v.x>=c&&v.y>=s}(e,s,u,{zoom:i.zoom,offsetLeft:n.offsetLeft,offsetTop:n.offsetTop,scrollX:i.scrollX,scrollY:i.scrollY})}));document.getElementById("canvas-total").innerText="\u603b\u5143\u7d20\u6570\uff1a".concat(t.length,"   \u5b9e\u9645\u7ed8\u5236\u5143\u7d20\u603b\u6570\uff1a").concat(d.length),d.forEach((function(e){!function(e,t,n,o){var r=x(e,n);C(r,t,n)}(e,c,i)}))}c.restore(),c.restore(),t&&localStorage.setItem("elements",JSON.stringify(t)),localStorage.setItem("appState",JSON.stringify(n))},j=n(1790),Z={tools:"index_tools__qKYDq",item:"index_item__SAALZ",selected:"index_selected__IBw-L"},T=n(184),M=["width","height","mirror","style"],b=function(e,t){var n="number"===typeof t?{width:t}:t,o=n.width,a=void 0===o?512:o,i=n.height,l=void 0===i?a:i,c=(n.mirror,n.style),u=(0,s.Z)(n,M);return(0,T.jsx)("svg",(0,r.Z)((0,r.Z)({"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 ".concat(a," ").concat(l),style:c},u),{},{children:"string"===typeof e?(0,T.jsx)("path",{fill:"currentColor",d:e}):e}))},R=b((0,T.jsxs)("g",{strokeWidth:"1.5",children:[(0,T.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,T.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),z=b((0,T.jsxs)("g",{strokeWidth:"1.25",children:[(0,T.jsx)("path",{clipRule:"evenodd",d:"m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"}),(0,T.jsx)("path",{d:"m11.25 5.417 3.333 3.333"})]}),{width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),_=b((0,T.jsxs)("g",{strokeWidth:"1.25",children:[(0,T.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,T.jsx)("path",{d:"M15 8h.01"}),(0,T.jsx)("path",{d:"M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"}),(0,T.jsx)("path",{d:"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}),(0,T.jsx)("path",{d:"M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"}),(0,T.jsx)("path",{d:"M19 16v6"}),(0,T.jsx)("path",{d:"M22 19l-3 3l-3 -3"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),X={width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Y=b((0,T.jsx)("path",{strokeWidth:"1.25",d:"M10 4.167v11.666M4.167 10h11.666"}),X),L=b((0,T.jsx)("path",{d:"M5 10h10",strokeWidth:"1.25"}),X),W=n(5671),I=n(3144),P=function(){function e(){(0,W.Z)(this,e);var t=JSON.parse(localStorage.getItem("elements"));this.elements=t||[]}return(0,I.Z)(e,[{key:"getElementsIncludingDeleted",value:function(){return this.elements}},{key:"replaceAllElements",value:function(e){this.elements=e}}]),e}(),A=new P,B=[{type:"rectangle",icon:R},{type:"freedraw",icon:z}],N=(0,i.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange;return(0,T.jsxs)("div",{className:Z.tools,children:[(0,T.jsx)("span",{className:[Z.item].join(" "),onClick:function(){(0,j.aF)({renderScene:E,elements:A.getElementsIncludingDeleted(),appState:ee})},children:_}),B.map((function(e){var o=t.type===e.type;return(0,T.jsx)("span",{className:[Z.item,o&&Z.selected].join(" "),onClick:function(){return n({type:o?"":e.type})},children:e.icon},e.type)}))]})})),D={scale:"index_scale__FTnCR",item:"index_item__oTwI4",value:"index_value__X8rNy"},F=(0,i.memo)((function(e){var t=e.appState,n=e.onZoomChange,o="".concat((100*t.zoom.value).toFixed(0),"%");return(0,T.jsxs)("div",{className:D.scale,children:[(0,T.jsx)("span",{className:[D.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value-.1))},children:L}),(0,T.jsx)("span",{className:D.value,onClick:function(){return n((0,c.j)(1))},children:o}),(0,T.jsx)("span",{className:[D.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value+.1))},children:Y})]})})),O=F,U="index_layer__sZW3m",H="index_ball_red__8G7Jt",q="index_boundceBall__COjis",J="index_shadowball__9LA4E",K=(0,i.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange,o=e.appState,r=e.onZoomChange;return(0,T.jsxs)("div",{className:U,children:[(0,T.jsx)(O,{appState:o,onZoomChange:r}),(0,T.jsx)(N,{activeTool:t,onActiveToolChange:n}),(0,T.jsxs)("div",{className:q,children:[(0,T.jsx)("div",{className:H}),(0,T.jsx)("div",{className:J})]})]})})),V=K,$={textarea:"index_textarea__uxMSb",textarea_copy:"index_textarea_copy__n8zm3"},G=(0,i.forwardRef)((function(e,t){var n=e.renderStaticCanvas,r=(0,i.useRef)(null),c=(0,i.useState)(""),s=(0,a.Z)(c,2),u=s[0],d=s[1];return(0,i.useImperativeHandle)(t,(function(){return{startEditText:function(e){e.preventDefault(),e.stopPropagation();var t=(0,l.dE)(e,ee),n=t.x,o=t.y,a=v({x:n,y:o,strokeColor:(0,l.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:"",fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"});ee.draggingElement=a;var i=r.current;i.focus();var c=e.clientX-ee.offsetLeft,s=e.clientY-ee.offsetTop,u={font:(0,l.mO)(a),left:"".concat(c,"px"),top:"".concat(s,"px"),opacity:1,color:a.strokeColor,fontSize:a.fontSize};Object.assign(i.style,u);var d=document.getElementById("copyText");Object.assign(d.style,u);var f=ee.canvasWidth-c;Object.assign(i.style,{zIndex:1,maxWidth:"".concat(f,"px"),width:"".concat(a.fontSize,"px"),height:"".concat(1.2*a.fontSize,"px")})}}})),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("textarea",{onChange:function(e){var t=e.target.value,n=r.current,o=parseFloat(n.style.maxWidth),a=document.getElementById("copyText");a.innerText=t;var i=a.getBoundingClientRect().width;if(i>o)if(i-o<30)console.log("\u6b63\u5e38\u7684\u8f93\u5165"),t=a.innerText=t.slice(0,t.length-1)+"\n"+t.slice(t.length-1);else{console.log("\u7c98\u8d34\u8fdb\u6765\u7684\u6587\u672c");var l=t.split("\n"),c=[];l.forEach((function(e){if(a.innerText=e,a.getBoundingClientRect().width<=o)c.push(e);else for(var t=0,n=1;n<e.length;n++){var r=e.slice(t,n);a.innerText=r,a.getBoundingClientRect().width>o?(c.push(e.slice(t,n-1)),t=n-1):n===e.length-1&&c.push(e.slice(t,n))}})),console.log("splitResult..",c),t=c.join("\n"),a.innerText=t}d(t);var s=a.getBoundingClientRect(),u=s.width,f=s.height;n.style.width="".concat(u+30,"px"),n.style.height="".concat(f,"px"),ee.draggingElement.text=t},onBlur:function(){var e=ee.draggingElement,t=r.current,a=document.getElementById("copyText");e.text&&(e.width=a.offsetWidth,e.height=a.offsetHeight,g(ee.draggingElement),A.replaceAllElements([].concat((0,o.Z)(A.getElementsIncludingDeleted()),[ee.draggingElement])),n(),setTimeout((function(){a.innerText="",d("")}),200)),Object.assign(t.style,{left:"0px",top:"0px",zIndex:-1,opacity:0})},value:u,className:$.textarea,ref:r}),(0,T.jsx)("div",{style:{background:"grey"},id:"copyText",contentEditable:!0,className:[$.textarea,$.textarea_copy].join(" ")})]})})),Q=(0,i.memo)(G),ee=JSON.parse(localStorage.getItem("appState"))||{zoom:{value:1},scrollX:0,scrollY:0,offsetLeft:0,offsetTop:0,draggingElement:null,canvasWidth:0,canvasHeight:0},te=(0,i.memo)((function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),s=(0,i.useRef)({}),u=(0,i.useRef)(null),d=(0,i.useRef)(null),v=(0,i.useRef)({}),x=(0,i.useState)(!1),y=(0,a.Z)(x,2),w=y[0],k=y[1],S=(0,i.useState)({type:""}),C=(0,a.Z)(S,2),Z=C[0],M=C[1],b=(0,i.useState)({count:"",type:"rectangle"}),R=(0,a.Z)(b,2),z=R[0],_=R[1],X=(0,i.useState)(!1),Y=(0,a.Z)(X,2),L=Y[0],W=Y[1],I=(0,i.useRef)(),P=(0,i.useRef)(),B=(0,i.useRef)(),N=(0,i.useRef)({}),D=function(){k(!w)};(0,i.useEffect)((function(){var t=function(e){e.width=r*window.devicePixelRatio,e.height=a*window.devicePixelRatio},o=e.current,r=o.offsetWidth,a=o.offsetHeight;t(o),t(n.current);var i=o.getBoundingClientRect(),l=i.x,c=i.y;ee.offsetLeft=l,ee.offsetTop=c,ee.canvasWidth=r,ee.canvasHeight=a,O()}),[]),(0,i.useEffect)((function(){var n=t.current,o=function(e){e.preventDefault()};n.addEventListener("wheel",o,{passive:!1});var r=function(e){s.current={cursorX:e.clientX,cursorY:e.clientY}},a=function(e){e.preventDefault()},i=e.current;return i.addEventListener("touchstart",a),document.addEventListener("mousemove",r),function(){i.removeEventListener("touchstart",a),n.removeEventListener("wheel",o),document.removeEventListener("mousemove",r)}}),[]),(0,i.useEffect)((function(){var e=0,t=Date.now();!function n(){var o=Date.now();if(e++,o>1e3+t){var r=Math.round(1e3*e/(o-t));d.current.innerText="FPS\uff1a".concat(r),e=0,t=o}requestAnimationFrame(n)}()}),[]);var F=function(){E({appState:ee,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:ee.scrollX,scrollY:ee.scrollY,viewBackgroundColor:"#ffffff",zoom:ee.zoom}});var e=N.current,t=e.minX,o=e.minY,r=e.width,a=e.height;e.base64;Object.assign(B.current.style,{transform:"translate(".concat((t+ee.scrollX)*ee.zoom.value,"px, ").concat((o+ee.scrollY)*ee.zoom.value,"px)"),width:"".concat(r*ee.zoom.value,"px"),height:"".concat(a*ee.zoom.value,"px")})},O=function(){var e=function(e){var t=e.renderScene,n=e.isExport,o=e.notUseCache,i=e.elements,l=e.appState,c=(0,j.Sp)(i,0),s=(0,a.Z)(c,4),u=s[0],d=s[1],f=s[2],v=s[3];console.log("export...",u,d,f,v);var h=document.createElement("canvas");return h.style.width="".concat(f,"px"),h.style.height="".concat(v,"px"),h.width=f*window.devicePixelRatio,h.height=v*window.devicePixelRatio,t({elements:i,appState:(0,r.Z)((0,r.Z)({},l),{},{scrollX:0-u,scrollY:0-d}),scale:window.devicePixelRatio,canvas:h,renderConfig:{selectionColor:"#6965db",scrollX:0-u,scrollY:0-d,viewBackgroundColor:"#ffffff",zoom:{value:1},fillStyle:l.fillStyle,strokeStyle:l.strokeStyle,isExport:n,notUseCache:o}}),{canvas:h,minX:u,minY:d,width:f,height:v}}({renderScene:E,isExport:!0,notUseCache:!0,exportPadding:0,elements:A.getElementsIncludingDeleted(),appState:(0,r.Z)({},ee)}),t=e.canvas,n=e.minX,o=e.minY,i=e.width,l=e.height;N.current.minX=n,N.current.minY=o,N.current.width=i,N.current.height=l,N.current.base64=t.toDataURL(),B.current.src=t.toDataURL(),F()},U=function(){F(),v.current.zoomTimerId&&clearTimeout(v.current.zoomTimerId),v.current.zoomTimerId=setTimeout((function(){p=new WeakMap,O()}),300)},H=function(t){return(0,l.$9)((function(n){var o=(0,l.dE)(n,ee);if(t.lastCoords.x=o.x,t.lastCoords.y=o.y,"freedraw"===Z.type)ee.draggingElement.points.push([o.x,o.y]);else{var r=t.lastCoords,a=t.origin.x,i=t.origin.y,c=r.x,s=r.y,u=(0,l.TE)(t.origin.x,r.x),d=(0,l.TE)(t.origin.y,r.y),f=c<a?a-u:a,v=s<i?i-d:i;ee.draggingElement.x=f,ee.draggingElement.y=v,ee.draggingElement.width=u,ee.draggingElement.height=d}g(ee.draggingElement),E({elements:[ee.draggingElement],appState:ee,scale:window.devicePixelRatio,canvas:e.current,renderConfig:{selectionColor:"#6965db",scrollX:ee.scrollX,scrollY:ee.scrollY,viewBackgroundColor:"#ffffff",zoom:ee.zoom}})}))},q=function(t){return function(n){A.replaceAllElements([].concat((0,o.Z)(A.getElementsIncludingDeleted()),[ee.draggingElement])),console.log("pointer up appState...",ee);var r=e.current;r.getContext("2d").clearRect(0,0,r.width,r.height),O(),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}},J=function(e){var t=(0,l.dE)(e,ee);return{origin:t,lastCoords:(0,r.Z)({},t),eventListeners:{onMove:null,onUp:null,onKeyUp:null,onKeyDown:null}}};return(0,T.jsxs)("div",{className:"performance-transform",ref:t,children:[(0,T.jsxs)("div",{ref:P,className:"container wrap",children:[(0,T.jsx)("img",{ref:B,className:"img",src:"",alt:""}),(0,T.jsx)("canvas",{ref:n,className:"canvas",children:"\u9759\u6001canvas"}),(0,T.jsx)("canvas",{ref:e,className:"canvas draw",onWheel:function(e){var t=e.deltaX,n=e.deltaY;if(e.metaKey||e.ctrlKey){var o=Math.sign(n),a=Math.abs(n),i=n;a>10&&(i=10*o);var l=ee.zoom.value-i/100;l+=Math.log10(Math.max(1,ee.zoom.value))*-o*Math.min(1,a/20);var u=(0,c.j)(l);return Object.assign(ee,(0,r.Z)({},(0,c.E)({viewportX:s.current.cursorX,viewportY:s.current.cursorY,nextZoom:u},ee))),D(),void U()}ee.scrollX=ee.scrollX-t,ee.scrollY=ee.scrollY-n,F()},onPointerDown:function(e){if(Z.type){var t=J(e),n=f({elementType:Z.type,pointerDownState:t,appState:ee});ee.draggingElement=n,g(n);var o=H(t),r=q(t);window.addEventListener("pointermove",o),window.addEventListener("pointerup",r),t.eventListeners.onMove=o,t.eventListeners.onUp=r}},onDoubleClick:function(e){Z.type||u.current.startEditText(e)},children:"\u52a8\u6001canvas"}),(0,T.jsx)(V,{activeTool:Z,onZoomChange:function(e){ee.zoom.value!==e&&(Object.assign(ee,(0,r.Z)({},(0,c.E)({viewportX:ee.canvasWidth/2+ee.offsetLeft,viewportY:ee.canvasHeight/2+ee.offsetTop,nextZoom:e},ee))),D(),U())},appState:(0,r.Z)({},ee),onActiveToolChange:function(e){M(e)}}),(0,T.jsx)(Q,{ref:u,renderStaticCanvas:O})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("span",{ref:d,children:"FPS\uff1a--"}),(0,T.jsx)("span",{className:"total",id:"canvas-total"})]}),(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("input",{type:"number",value:z.count,onChange:function(e){return _((0,r.Z)((0,r.Z)({},z),{},{count:e.target.value}))}}),(0,T.jsxs)("select",{value:z.type,onChange:function(e){return _((0,r.Z)((0,r.Z)({},z),{},{type:e.target.value}))},children:[(0,T.jsx)("option",{value:"freedraw",children:"freedraw"}),(0,T.jsx)("option",{value:"rectangle",children:"rectangle"}),(0,T.jsx)("option",{value:"text",children:"text"})]}),(0,T.jsx)("button",{onClick:function(){var e=m(Number(z.count),z.type,ee);A.replaceAllElements([].concat((0,o.Z)(A.getElementsIncludingDeleted()),(0,o.Z)(e))),O()},children:"\u751f\u6210"}),(0,T.jsx)("button",{onClick:function(){if(W(!L),I.current&&cancelAnimationFrame(I.current),!L){var e=Date.now();I.current=requestAnimationFrame((function t(){var o=Date.now();if(o-e>=100){e=o;var r=function(e,t){return e.forEach((function(e){var n=h(-t.scrollX,t.canvasWidth-t.scrollX),o=h(-t.scrollY,t.canvasHeight-t.scrollY);e.x=n,e.y=o})),e}(A.getElementsIncludingDeleted(),ee);E({elements:r,appState:ee,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:ee.scrollX,scrollY:ee.scrollY,viewBackgroundColor:"#ffffff",zoom:ee.zoom}})}I.current=requestAnimationFrame(t)}))}},children:L?"\u505c\u6b62\u52a8\u753b":"\u52a8\u753b"})]}),(0,T.jsx)("div",{id:"placeholder"})]})}))},1790:function(e,t,n){n.d(t,{Sp:function(){return i},aF:function(){return l}});var o=n(1413),r=n(9439),a=n(84),i=function(e,t){var n=(0,a.KP)(e),o=(0,r.Z)(n,4),i=o[0],l=o[1],c=o[2],s=o[3];return[i,l,(0,a.TE)(i,c)+2*t,(0,a.TE)(l,s)+t+t]},l=function(e){var t=e.renderScene,n=e.isExport,a=void 0===n||n,l=e.notUseCache,c=function(e){var t=e.renderScene,n=e.isExport,a=e.notUseCache,l=e.elements,c=e.appState,s=i(l,10),u=(0,r.Z)(s,4),d=u[0],f=u[1],v=u[2],h=u[3];console.log("export...",d,f,v,h);var m=document.createElement("canvas");return m.width=v*window.devicePixelRatio,m.height=h*window.devicePixelRatio,t({elements:l,appState:(0,o.Z)((0,o.Z)({},c),{},{scrollX:10-d,scrollY:10-f}),scale:window.devicePixelRatio,canvas:m,renderConfig:{selectionColor:"#6965db",scrollX:10-d,scrollY:10-f,viewBackgroundColor:"#ffffff",zoom:{value:1},isExport:n,notUseCache:a}}),m.toDataURL()}({renderScene:t,isExport:a,notUseCache:void 0===l||l,elements:e.elements,appState:e.appState}),s=document.createElement("a");s.href=c,s.download="canvas.png",s.click()}},84:function(e,t,n){n.d(t,{$9:function(){return s},B8:function(){return c},KP:function(){return v},Pi:function(){return f},TE:function(){return m},dE:function(){return l},kb:function(){return g},mO:function(){return x},qf:function(){return h}});var o=n(9439),r=n(7762),a=n(3433),i=n(4164),l=function(e,t){var n=e.clientX,o=e.clientY,r=t.zoom,a=t.offsetLeft,i=t.offsetTop,l=t.scrollX,c=t.scrollY,s=r?r.value:1;return{x:(n-a)/s-l,y:(o-i)/s-c}},c=function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(n,")")},s=function(e){return function(e,t){var n=null,o=null,r=null,i=function t(i){n=window.requestAnimationFrame((function(){n=null,e.apply(void 0,(0,a.Z)(i)),o=null,r&&(o=r,r=null,t(o))}))},l=function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];o=a,null===n?i(o):null!==t&&void 0!==t&&t.trailing&&(r=a)};return l.flush=function(){null!==n&&(cancelAnimationFrame(n),n=null),o&&(e.apply(void 0,(0,a.Z)(r||o)),o=r=null)},l.cancel=function(){o=r=null,null!==n&&(cancelAnimationFrame(n),n=null)},l}((function(t){(0,i.unstable_batchedUpdates)(e,t)}))},u=function(e){var t=1/0,n=1/0,a=-1/0,i=-1/0,l=e.points;"freedraw"===e.type&&(l=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var c,s=(0,r.Z)(l);try{for(s.s();!(c=s.n()).done;){var u=(0,o.Z)(c.value,2),d=u[0],f=u[1];t=Math.min(t,d),n=Math.min(n,f),a=Math.max(a,d),i=Math.max(i,f)}}catch(v){s.e(v)}finally{s.f()}return[t,n,a,i]},d=function(e,t,n,o,r){return[(e-n)*Math.cos(r)-(t-o)*Math.sin(r)+n,(e-n)*Math.sin(r)+(t-o)*Math.cos(r)+o]},f=function(e){var t=h(e),n=(0,o.Z)(t,6),r=n[0],a=n[1],i=n[2],l=n[3],c=n[4],s=n[5];if("freedraw"===e.type){var f=u(e),v=(0,o.Z)(f,4),m=v[0],p=v[1],g=v[2],x=v[3];return[m+e.x,p+e.y,g+e.x,x+e.y]}var y=d(r,a,c,s,e.angle),w=(0,o.Z)(y,2),k=w[0],S=w[1],C=d(r,l,c,s,e.angle),E=(0,o.Z)(C,2),j=E[0],Z=E[1],T=d(i,l,c,s,e.angle),M=(0,o.Z)(T,2),b=M[0],R=M[1],z=d(i,a,c,s,e.angle),_=(0,o.Z)(z,2),X=_[0],Y=_[1];return[Math.min(k,j,b,X),Math.min(S,Z,R,Y),Math.max(k,j,b,X),Math.max(S,Z,R,Y)]},v=function(e){if(!e.length)return[0,0,0,0];var t=1/0,n=-1/0,r=1/0,a=-1/0;return e.forEach((function(e){var i=f(e),l=(0,o.Z)(i,4),c=l[0],s=l[1],u=l[2],d=l[3];t=Math.min(t,c),r=Math.min(r,s),n=Math.max(n,u),a=Math.max(a,d)})),[t,r,n,a]},h=function(e){if("freedraw"===e.type){var t=u(e),n=(0,o.Z)(t,4),r=n[0],a=n[1],i=n[2],l=n[3],c=r+e.x,s=a+e.y,d=i+e.x,f=l+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},m=function(e,t){return Math.abs(e-t)},p=0,g=function(){return"id".concat(p++)};window.__generateExcalidrawElements=function(){return(JSON.parse(localStorage.getItem("free-draw-elements"))||[]).map((function(e){var t=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})),n=function(e){var t=e.map((function(e){return e[0]})),n=e.map((function(e){return e[1]}));return{width:Math.max.apply(Math,(0,a.Z)(t))-Math.min.apply(Math,(0,a.Z)(t)),height:Math.max.apply(Math,(0,a.Z)(n))-Math.min.apply(Math,(0,a.Z)(n))}}(t),o=n.width,r=n.height;return{id:g(),type:"freedraw",x:e.x,y:e.y,width:o,height:r,angle:0,strokeColor:e.strokeStyle,backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",roughness:1,opacity:100,groupIds:[],roundness:null,seed:Math.floor(Math.random()*Math.pow(2,31)),version:1,versionNonce:0,isDeleted:!1,boundElements:null,updated:Date.now(),link:null,locked:!1,points:t,pressures:[],simulatePressure:!0,lastCommittedPoint:t[t.length-1]}}))};var x=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}},493:function(e,t,n){n.d(t,{E:function(){return r},j:function(){return o}});var o=function(e){return Math.max(.1,Math.min(e,30))},r=function(e,t){var n=e.viewportX,o=e.viewportY,r=e.nextZoom,a=n-t.offsetLeft,i=o-t.offsetTop,l=t.zoom.value;return{scrollX:t.scrollX+a/r-a/l,scrollY:t.scrollY+i/r-i/l,zoom:{value:r}}}}}]);
//# sourceMappingURL=TransformImg.bbcd738a.chunk.js.map