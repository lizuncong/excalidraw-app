"use strict";(this.webpackChunkexcalidraw_app=this.webpackChunkexcalidraw_app||[]).push([[530],{9550:function(e,t,n){n.r(t),n.d(t,{appState:function(){return ie},default:function(){return ce}});var o=n(3433),r=n(1413),a=n(9439),i=n(4519),l=n(5204),c=n(4975),s=n(4925),u=["type","x","y","strokeColor","backgroundColor","fillStyle","strokeWidth","strokeStyle","width","height","angle","points"],d=function(e){var t=e.type,n=e.x,o=e.y,a=e.strokeColor,i=e.backgroundColor,c=e.fillStyle,d=e.strokeWidth,f=void 0===d?3:d,v=e.strokeStyle,h=e.width,g=void 0===h?0:h,m=e.height,p=void 0===m?0:m,x=e.angle,w=void 0===x?0:x,y=e.points,k=void 0===y?[]:y,S=(0,s.Z)(e,u);return(0,r.Z)({id:(0,l.kb)(),type:t,x:n,y:o,width:g,height:p,strokeColor:a,backgroundColor:i,fillStyle:c,strokeWidth:f,strokeStyle:v,angle:w,isDeleted:!1,points:k},S)},f=function(e){var t=e.elementType,n=e.pointerDownState,o=e.appState;return d("freedraw"===t?{type:t,x:n.origin.x,y:n.origin.y,points:[[n.origin.x,n.origin.y]],strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,l.B8)()}:{type:t,x:n.origin.x,y:n.origin.y,strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,l.B8)()})},v=function(e){return d((0,r.Z)({type:"text",text:e.text,fontSize:e.fontSize,fontFamily:e.fontFamily,textAlign:e.textAlign,verticalAlign:e.verticalAlign,originalText:e.text},e))},h=function(e,t){return Number((Math.random()*(t-e)+e).toFixed(5))},g=function(e,t,n){for(var o,r=[],a=0;a<e;a++){var i=h(-n.scrollX,n.canvasWidth-n.scrollX),c=h(-n.scrollY,n.canvasHeight-n.scrollY);if(o=f({elementType:t,pointerDownState:{origin:{x:i,y:c}},appState:n}),"rectangle"===t){var s=Math.abs(h(-n.scrollX-i,n.canvasWidth-n.scrollX-i))+2,u=Math.abs(h(-n.scrollY-c,n.canvasHeight-n.scrollY-c))+2;o.width=s,o.height=u}else if("freedraw"===t)for(var d=h(20,100),g=0;g<d;g++)i=h(i,i+10),c=h(c,c+10),o.points.push([i,c]);else if("text"===t){var m="".concat(i,", ").concat(c);o=v({x:i,y:c,strokeColor:(0,l.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:m,width:20*m.length,height:25,fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"})}r.push(o)}return r},m=new WeakMap,p=function(e){m.delete(e)},x=function(e,t){var n=m.get(e);if(n&&!t.notUseCache)return n;var o=y(e,t.zoom,t);return t.notUseCache||m.set(e,o),o},w=document.getElementById("placeholder"),y=function(e,t,n){var o=document.createElement("canvas"),r=o.getContext("2d"),i=S(e);w||(w=document.getElementById("placeholder")),o;if("freedraw"===e.type){var c,s,u=(0,l.qf)(e),d=(0,a.Z)(u,4),f=d[0],v=d[1],h=d[2],g=d[3];o.width=(0,l.TE)(f,h)*window.devicePixelRatio*t.value+i*t.value*2,o.height=(0,l.TE)(v,g)*window.devicePixelRatio*t.value+i*t.value*2,c=e.x>f?(0,l.TE)(e.x,f)*window.devicePixelRatio*t.value:0,s=e.y>v?(0,l.TE)(e.y,v)*t.value*window.devicePixelRatio:0,r.translate(c,s)}else o.width=e.width*window.devicePixelRatio*t.value+i*t.value*2,o.height=e.height*window.devicePixelRatio*t.value+i*t.value*2;return r.save(),r.translate(i*t.value,i*t.value),r.scale(window.devicePixelRatio*t.value,window.devicePixelRatio*t.value),k(e,r,n),r.restore(),{element:e,canvas:o,theme:n.theme,canvasZoom:t,canvasOffsetX:0,canvasOffsetY:0}},k=function(e,t,n){switch(t.globalAlpha=e.opacity/100,e.type){case"rectangle":t.lineJoin="round",t.lineCap="round",t.lineWidth=e.strokeWidth,t.strokeStyle=n.strokeStyle||e.strokeStyle,t.strokeRect(0,0,e.width,e.height);break;case"text":t.font=(0,l.mO)(e),t.fillStyle=n.fillStyle||e.strokeColor,t.textAlign=e.textAlign;var o=e.text.split("\n"),r=o.length?e.height/o.length:18;t.textBaseline="bottom";for(var i=0;i<o.length;i++)t.fillText(o[i],0,(i+1)*r);break;case"freedraw":t.save(),t.lineWidth=e.strokeWidth,t.strokeStyle=n.strokeStyle||e.strokeStyle,e.points.forEach((function(n,o){var r=(0,a.Z)(n,2),i=r[0],l=r[1];i-=e.x,l-=e.y,o?t.lineTo(i,l):t.moveTo(i,l)})),t.stroke(),t.restore()}t.globalAlpha=1},S=function(e){return"freedraw"===e.type?12*e.strokeWidth:20},C=function(e,t,n){var o=e.element,r=S(o),i=(0,l.qf)(o),c=(0,a.Z)(i,4),s=c[0],u=c[1],d=c[2],f=c[3];if("freedraw"===o.type){var v=(0,l.qf)(o),h=(0,a.Z)(v,4);s=h[0],u=h[1],d=h[2],f=h[3]}var g=((s+d)/2+n.scrollX)*window.devicePixelRatio,m=((u+f)/2+n.scrollY)*window.devicePixelRatio;t.save(),t.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),t.translate(g,m),t.drawImage(e.canvas,-(d-s)/2*window.devicePixelRatio-r*e.canvasZoom.value/e.canvasZoom.value,-(f-u)/2*window.devicePixelRatio-r*e.canvasZoom.value/e.canvasZoom.value,e.canvas.width/e.canvasZoom.value,e.canvas.height/e.canvasZoom.value),t.restore()},E=function(e){var t=e.elements,n=e.appState,o=e.scale,r=e.canvas,i=e.renderConfig,c=r.getContext("2d");c.save(),c.scale(o,o);var s=r.width/o,u=r.height/o;if(c.clearRect(0,0,s,u),c.save(),c.scale(i.zoom.value,i.zoom.value),i.isExport&&t||function(e,t){var n=t.scrollX,o=t.scrollY,r=t.zoom;e.save();var a=100,i=100,l=e.canvas;e.strokeStyle="red",e.fillStyle="red",e.beginPath(),e.lineWidth=2,e.textBaseline="middle",e.save(),e.translate(0,o);for(var c=0;c<o/a;c++)e.moveTo(0,-c*a),e.lineTo(8,-c*a),e.font="10px Arial",e.fillText(-c,0,-c*a+10);for(var s=1;s<(l.height-o*r.value)/(a*r.value);s++)e.moveTo(0,s*a),e.lineTo(8,s*a),e.font="10px Arial",e.fillText(s,0,s*a+10);e.restore(),e.save(),e.translate(n,0);for(var u=0;u<n/i;u++)e.moveTo(-u*i,0),e.lineTo(-u*i,8),e.font="10px Arial",e.fillText(-u,-u*i+5,5);for(var d=1;d<(l.width-n*r.value)/(i*r.value);d++)e.moveTo(d*i,0),e.lineTo(d*i,8),e.font="10px Arial",e.fillText(d,d*i+5,5);e.restore(),e.stroke(),e.restore()}(c,i),t){var d=t.filter((function(e){return function(e,t,n,o){var r=(0,l.Pi)(e),i=(0,a.Z)(r,4),c=i[0],s=i[1],u=i[2],d=i[3],f=(0,l.dE)({clientX:o.offsetLeft,clientY:o.offsetTop},o),v=(0,l.dE)({clientX:o.offsetLeft+t,clientY:o.offsetTop+n},o);return f.x<=u&&f.y<=d&&v.x>=c&&v.y>=s}(e,s,u,{zoom:i.zoom,offsetLeft:n.offsetLeft,offsetTop:n.offsetTop,scrollX:i.scrollX,scrollY:i.scrollY})}));document.getElementById("canvas-total").innerText="\u603b\u5143\u7d20\u6570\uff1a".concat(t.length,"   \u5b9e\u9645\u7ed8\u5236\u5143\u7d20\u603b\u6570\uff1a").concat(d.length),d.forEach((function(e){!function(e,t,n,o){var r=x(e,n);C(r,t,n)}(e,c,i)}))}c.restore(),c.restore(),t&&localStorage.setItem("elements",JSON.stringify(t)),localStorage.setItem("appState",JSON.stringify(n))},j=n(2121);var Z,T,M,R=new function(){return new Worker(n.p+"static/js/file.worker.34d42beb.worker.js")};R.onmessage=function(e){"img-finish"===e.data.type&&Z()};var b,z=function(e){var t=e.elements,n=e.appState,o=e.scale,a=e.canvas,i=e.canvasImg,l=e.renderConfig;l.devicePixelRatio=window.devicePixelRatio;var c={appState:n,scale:o,renderConfig:l,elements:t};a&&(T?(console.log("\u91cd\u56de...",t.length),R.postMessage((0,r.Z)({type:"redraw"},c))):(console.log("\u521d\u59cb\u5316...",t.length),T=a.transferControlToOffscreen(),R.postMessage((0,r.Z)({canvasWorker:T,type:"init"},c),[T]))),i&&(console.log("\u751f\u6210\u56fe\u7247"),M?R.postMessage((0,r.Z)({type:"redraw-img"},c)):(M=i.transferControlToOffscreen(),R.postMessage((0,r.Z)({canvasImgWorker:M,type:"init-img"},c),[M])),Z=function(e){console.log("worker \u7ed8\u5236\u5b8c\u6210...",e),console.log("worker\u7ed8\u5236\u5b8c\u6210222...",i.toDataURL())})},_={tools:"index_tools__F11CL",item:"index_item__qZvQR",selected:"index_selected__e5hcZ"},X=n(2556),Y=["width","height","mirror","style"],L=function(e,t){var n="number"===typeof t?{width:t}:t,o=n.width,a=void 0===o?512:o,i=n.height,l=void 0===i?a:i,c=(n.mirror,n.style),u=(0,s.Z)(n,Y);return(0,X.jsx)("svg",(0,r.Z)((0,r.Z)({"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 ".concat(a," ").concat(l),style:c},u),{},{children:"string"===typeof e?(0,X.jsx)("path",{fill:"currentColor",d:e}):e}))},W=L((0,X.jsxs)("g",{strokeWidth:"1.5",children:[(0,X.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,X.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),I=L((0,X.jsxs)("g",{strokeWidth:"1.25",children:[(0,X.jsx)("path",{clipRule:"evenodd",d:"m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"}),(0,X.jsx)("path",{d:"m11.25 5.417 3.333 3.333"})]}),{width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),P=L((0,X.jsxs)("g",{strokeWidth:"1.25",children:[(0,X.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,X.jsx)("path",{d:"M15 8h.01"}),(0,X.jsx)("path",{d:"M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"}),(0,X.jsx)("path",{d:"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}),(0,X.jsx)("path",{d:"M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"}),(0,X.jsx)("path",{d:"M19 16v6"}),(0,X.jsx)("path",{d:"M22 19l-3 3l-3 -3"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),A={width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},B=L((0,X.jsx)("path",{strokeWidth:"1.25",d:"M10 4.167v11.666M4.167 10h11.666"}),A),N=L((0,X.jsx)("path",{d:"M5 10h10",strokeWidth:"1.25"}),A),D=n(5671),F=n(3144),O=function(){function e(){(0,D.Z)(this,e);var t=JSON.parse(localStorage.getItem("elements"));this.elements=t||[]}return(0,F.Z)(e,[{key:"getElementsIncludingDeleted",value:function(){return this.elements}},{key:"replaceAllElements",value:function(e){this.elements=e}}]),e}(),U=new O,H=[{type:"rectangle",icon:W},{type:"freedraw",icon:I}],q=(0,i.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange;return(0,X.jsxs)("div",{className:_.tools,children:[(0,X.jsx)("span",{className:[_.item].join(" "),onClick:function(){(0,j.aF)({renderScene:E,elements:U.getElementsIncludingDeleted(),appState:ie})},children:P}),H.map((function(e){var o=t.type===e.type;return(0,X.jsx)("span",{className:[_.item,o&&_.selected].join(" "),onClick:function(){return n({type:o?"":e.type})},children:e.icon},e.type)}))]})})),K={scale:"index_scale__Xgs3R",item:"index_item__jlc7V",value:"index_value__9glOL"},J=(0,i.memo)((function(e){var t=e.appState,n=e.onZoomChange,o="".concat((100*t.zoom.value).toFixed(0),"%");return(0,X.jsxs)("div",{className:K.scale,children:[(0,X.jsx)("span",{className:[K.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value-.1))},children:N}),(0,X.jsx)("span",{className:K.value,onClick:function(){return n((0,c.j)(1))},children:o}),(0,X.jsx)("span",{className:[K.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value+.1))},children:B})]})})),V=J,$="index_layer__n2wKC",Q="index_ball_red__487Jk",G="index_boundceBall__ulji4",ee="index_shadowball__HLlgs",te=(0,i.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange,o=e.appState,r=e.onZoomChange;return(0,X.jsxs)("div",{className:$,children:[(0,X.jsx)(V,{appState:o,onZoomChange:r}),(0,X.jsx)(q,{activeTool:t,onActiveToolChange:n}),(0,X.jsxs)("div",{className:G,children:[(0,X.jsx)("div",{className:Q}),(0,X.jsx)("div",{className:ee})]})]})})),ne=te,oe={textarea:"index_textarea__Z5y--",textarea_copy:"index_textarea_copy__PICl+"},re=(0,i.forwardRef)((function(e,t){var n=e.renderStaticCanvas,r=(0,i.useRef)(null),c=(0,i.useState)(""),s=(0,a.Z)(c,2),u=s[0],d=s[1];return(0,i.useImperativeHandle)(t,(function(){return{startEditText:function(e){e.preventDefault(),e.stopPropagation();var t=(0,l.dE)(e,ie),n=t.x,o=t.y,a=v({x:n,y:o,strokeColor:(0,l.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:"",fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"});ie.draggingElement=a;var i=r.current;i.focus();var c=e.clientX-ie.offsetLeft,s=e.clientY-ie.offsetTop,u={font:(0,l.mO)(a),left:"".concat(c,"px"),top:"".concat(s,"px"),opacity:1,color:a.strokeColor,fontSize:a.fontSize};Object.assign(i.style,u);var d=document.getElementById("copyText");Object.assign(d.style,u);var f=ie.canvasWidth-c;Object.assign(i.style,{zIndex:1,maxWidth:"".concat(f,"px"),width:"".concat(a.fontSize,"px"),height:"".concat(1.2*a.fontSize,"px")})}}})),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("textarea",{onChange:function(e){var t=e.target.value,n=r.current,o=parseFloat(n.style.maxWidth),a=document.getElementById("copyText");a.innerText=t;var i=a.getBoundingClientRect().width;if(i>o)if(i-o<30)console.log("\u6b63\u5e38\u7684\u8f93\u5165"),t=a.innerText=t.slice(0,t.length-1)+"\n"+t.slice(t.length-1);else{console.log("\u7c98\u8d34\u8fdb\u6765\u7684\u6587\u672c");var l=t.split("\n"),c=[];l.forEach((function(e){if(a.innerText=e,a.getBoundingClientRect().width<=o)c.push(e);else for(var t=0,n=1;n<e.length;n++){var r=e.slice(t,n);a.innerText=r,a.getBoundingClientRect().width>o?(c.push(e.slice(t,n-1)),t=n-1):n===e.length-1&&c.push(e.slice(t,n))}})),console.log("splitResult..",c),t=c.join("\n"),a.innerText=t}d(t);var s=a.getBoundingClientRect(),u=s.width,f=s.height;n.style.width="".concat(u+30,"px"),n.style.height="".concat(f,"px"),ie.draggingElement.text=t},onBlur:function(){var e=ie.draggingElement,t=r.current,a=document.getElementById("copyText");e.text&&(e.width=a.offsetWidth,e.height=a.offsetHeight,p(ie.draggingElement),U.replaceAllElements([].concat((0,o.Z)(U.getElementsIncludingDeleted()),[ie.draggingElement])),n(),setTimeout((function(){a.innerText="",d("")}),200)),Object.assign(t.style,{left:"0px",top:"0px",zIndex:-1,opacity:0})},value:u,className:oe.textarea,ref:r}),(0,X.jsx)("div",{style:{background:"grey"},id:"copyText",contentEditable:!0,className:[oe.textarea,oe.textarea_copy].join(" ")})]})})),ae=(0,i.memo)(re),ie=JSON.parse(localStorage.getItem("appState"))||{zoom:{value:1},scrollX:0,scrollY:0,offsetLeft:0,offsetTop:0,draggingElement:null,canvasWidth:0,canvasHeight:0},le=(0,i.memo)((function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),s=(0,i.useRef)({}),u=(0,i.useRef)(null),d=(0,i.useRef)(null),v=(0,i.useRef)({}),x=(0,i.useState)(!1),w=(0,a.Z)(x,2),y=w[0],k=w[1],S=(0,i.useState)({type:""}),C=(0,a.Z)(S,2),Z=C[0],T=C[1],M=(0,i.useState)({count:"",type:"rectangle"}),R=(0,a.Z)(M,2),_=R[0],Y=R[1],L=(0,i.useState)(!1),W=(0,a.Z)(L,2),I=W[0],P=W[1],A=(0,i.useRef)(),B=(0,i.useRef)(),N=(0,i.useRef)(),D=(0,i.useRef)({}),F=function(){k(!y)};(0,i.useEffect)((function(){var t=function(e){e.width=r*window.devicePixelRatio,e.height=a*window.devicePixelRatio},o=e.current,r=o.offsetWidth,a=o.offsetHeight;t(o),t(n.current);var i=o.getBoundingClientRect(),l=i.x,c=i.y;ie.offsetLeft=l,ie.offsetTop=c,ie.canvasWidth=r,ie.canvasHeight=a,H()}),[]),(0,i.useEffect)((function(){var n=t.current,o=function(e){e.preventDefault()};n.addEventListener("wheel",o,{passive:!1});var r=function(e){s.current={cursorX:e.clientX,cursorY:e.clientY}},a=function(e){e.preventDefault()},i=e.current;return i.addEventListener("touchstart",a),document.addEventListener("mousemove",r),function(){i.removeEventListener("touchstart",a),n.removeEventListener("wheel",o),document.removeEventListener("mousemove",r)}}),[]),(0,i.useEffect)((function(){var e=0,t=Date.now();!function n(){var o=Date.now();if(e++,o>1e3+t){var r=Math.round(1e3*e/(o-t));d.current.innerText="FPS\uff1a".concat(r),e=0,t=o}requestAnimationFrame(n)}()}),[]);var O=function(){E({appState:ie,scale:window.devicePixelRatio,canvas:e.current,renderConfig:{selectionColor:"#6965db",scrollX:ie.scrollX,scrollY:ie.scrollY,viewBackgroundColor:"#ffffff",zoom:ie.zoom}});var t=D.current,n=t.minX,o=t.minY,r=t.width,a=t.height;Object.assign(N.current.style,{transform:"translate(".concat((n+ie.scrollX)*ie.zoom.value,"px, ").concat((o+ie.scrollY)*ie.zoom.value,"px)"),width:"".concat(r*ie.zoom.value,"px"),height:"".concat(a*ie.zoom.value,"px")})},H=function(){O(),function(e){var t=e.isExport,n=e.notUseCache,o=e.elements,i=e.appState,l=(0,j.Sp)(o,0),c=(0,a.Z)(l,4),s=c[0],u=c[1],d=c[2],f=c[3];console.log("\u6e32\u67d3\u9759\u6001\u56fe\u7247...",s,u,d,f),b||((b=document.createElement("canvas")).style.width="".concat(d,"px"),b.style.height="".concat(f,"px"),b.width=d*window.devicePixelRatio,b.height=f*window.devicePixelRatio),z({elements:o,appState:(0,r.Z)((0,r.Z)({},i),{},{scrollX:0-s,scrollY:0-u}),scale:window.devicePixelRatio,canvas:b,renderConfig:{selectionColor:"#6965db",scrollX:0-s,scrollY:0-u,viewBackgroundColor:"#ffffff",zoom:{value:1},fillStyle:i.fillStyle,strokeStyle:i.strokeStyle,isExport:t,notUseCache:n}})}({isExport:!0,notUseCache:!0,elements:U.getElementsIncludingDeleted(),appState:ie}),z({elements:U.getElementsIncludingDeleted(),appState:ie,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:ie.scrollX,scrollY:ie.scrollY,viewBackgroundColor:"#ffffff",zoom:ie.zoom}})},q=function(){O(),v.current.zoomTimerId&&clearTimeout(v.current.zoomTimerId),v.current.zoomTimerId=setTimeout((function(){m=new WeakMap,H()}),3e3)},K=function(t){return(0,l.$9)((function(n){var o=(0,l.dE)(n,ie);if(t.lastCoords.x=o.x,t.lastCoords.y=o.y,"freedraw"===Z.type)ie.draggingElement.points.push([o.x,o.y]);else{var r=t.lastCoords,a=t.origin.x,i=t.origin.y,c=r.x,s=r.y,u=(0,l.TE)(t.origin.x,r.x),d=(0,l.TE)(t.origin.y,r.y),f=c<a?a-u:a,v=s<i?i-d:i;ie.draggingElement.x=f,ie.draggingElement.y=v,ie.draggingElement.width=u,ie.draggingElement.height=d}p(ie.draggingElement),E({elements:[ie.draggingElement],appState:ie,scale:window.devicePixelRatio,canvas:e.current,renderConfig:{selectionColor:"#6965db",scrollX:ie.scrollX,scrollY:ie.scrollY,viewBackgroundColor:"#ffffff",zoom:ie.zoom}})}))},J=function(t){return function(n){U.replaceAllElements([].concat((0,o.Z)(U.getElementsIncludingDeleted()),[ie.draggingElement])),console.log("pointer up appState...",ie);var r=e.current;r.getContext("2d").clearRect(0,0,r.width,r.height),H(),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}},V=function(e){var t=(0,l.dE)(e,ie);return{origin:t,lastCoords:(0,r.Z)({},t),eventListeners:{onMove:null,onUp:null,onKeyUp:null,onKeyDown:null}}};return(0,X.jsxs)("div",{className:"performance-transform",ref:t,children:[(0,X.jsxs)("div",{ref:B,className:"container wrap",children:[(0,X.jsx)("img",{ref:N,className:"img",src:"",alt:""}),(0,X.jsx)("canvas",{ref:n,className:"canvas",children:"\u9759\u6001canvas"}),(0,X.jsx)("canvas",{ref:e,className:"canvas draw",onWheel:function(e){var t=e.deltaX,n=e.deltaY;if(e.metaKey||e.ctrlKey){var o=Math.sign(n),a=Math.abs(n),i=n;a>10&&(i=10*o);var l=ie.zoom.value-i/100;l+=Math.log10(Math.max(1,ie.zoom.value))*-o*Math.min(1,a/20);var u=(0,c.j)(l);return Object.assign(ie,(0,r.Z)({},(0,c.E)({viewportX:s.current.cursorX,viewportY:s.current.cursorY,nextZoom:u},ie))),F(),void q()}ie.scrollX=ie.scrollX-t,ie.scrollY=ie.scrollY-n,H()},onPointerDown:function(e){if(Z.type){var t=V(e),n=f({elementType:Z.type,pointerDownState:t,appState:ie});ie.draggingElement=n,p(n);var o=K(t),r=J(t);window.addEventListener("pointermove",o),window.addEventListener("pointerup",r),t.eventListeners.onMove=o,t.eventListeners.onUp=r}},onDoubleClick:function(e){Z.type||u.current.startEditText(e)},children:"\u52a8\u6001canvas"}),(0,X.jsx)(ne,{activeTool:Z,onZoomChange:function(e){ie.zoom.value!==e&&(Object.assign(ie,(0,r.Z)({},(0,c.E)({viewportX:ie.canvasWidth/2+ie.offsetLeft,viewportY:ie.canvasHeight/2+ie.offsetTop,nextZoom:e},ie))),F(),q())},appState:(0,r.Z)({},ie),onActiveToolChange:function(e){T(e)}}),(0,X.jsx)(ae,{ref:u,renderStaticCanvas:H})]}),(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{ref:d,children:"FPS\uff1a--"}),(0,X.jsx)("span",{className:"total",id:"canvas-total"})]}),(0,X.jsxs)("div",{className:"row",children:[(0,X.jsx)("input",{type:"number",value:_.count,onChange:function(e){return Y((0,r.Z)((0,r.Z)({},_),{},{count:e.target.value}))}}),(0,X.jsxs)("select",{value:_.type,onChange:function(e){return Y((0,r.Z)((0,r.Z)({},_),{},{type:e.target.value}))},children:[(0,X.jsx)("option",{value:"freedraw",children:"freedraw"}),(0,X.jsx)("option",{value:"rectangle",children:"rectangle"}),(0,X.jsx)("option",{value:"text",children:"text"})]}),(0,X.jsx)("button",{onClick:function(){var e=g(Number(_.count),_.type,ie);U.replaceAllElements([].concat((0,o.Z)(U.getElementsIncludingDeleted()),(0,o.Z)(e))),H()},children:"\u751f\u6210"}),(0,X.jsx)("button",{onClick:function(){if(P(!I),A.current&&cancelAnimationFrame(A.current),!I){var e=Date.now();A.current=requestAnimationFrame((function t(){var n=Date.now();if(n-e>=100){e=n;(function(e,t){e.forEach((function(e){var n=h(-t.scrollX,t.canvasWidth-t.scrollX),o=h(-t.scrollY,t.canvasHeight-t.scrollY);e.x=n,e.y=o}))})(U.getElementsIncludingDeleted(),ie)}A.current=requestAnimationFrame(t)}))}},children:I?"\u505c\u6b62\u52a8\u753b":"\u52a8\u753b"})]}),(0,X.jsx)("div",{id:"placeholder"})]})})),ce=le},2121:function(e,t,n){n.d(t,{Sp:function(){return i},aF:function(){return l}});var o=n(1413),r=n(9439),a=n(5204),i=function(e,t){var n=(0,a.KP)(e),o=(0,r.Z)(n,4),i=o[0],l=o[1],c=o[2],s=o[3];return[i,l,(0,a.TE)(i,c)+2*t,(0,a.TE)(l,s)+t+t]},l=function(e){var t=e.renderScene,n=e.isExport,a=void 0===n||n,l=e.notUseCache,c=function(e){var t=e.renderScene,n=e.isExport,a=e.notUseCache,l=e.elements,c=e.appState,s=i(l,10),u=(0,r.Z)(s,4),d=u[0],f=u[1],v=u[2],h=u[3];console.log("export...",d,f,v,h);var g=document.createElement("canvas");return g.width=v*window.devicePixelRatio,g.height=h*window.devicePixelRatio,t({elements:l,appState:(0,o.Z)((0,o.Z)({},c),{},{scrollX:10-d,scrollY:10-f}),scale:window.devicePixelRatio,canvas:g,renderConfig:{selectionColor:"#6965db",scrollX:10-d,scrollY:10-f,viewBackgroundColor:"#ffffff",zoom:{value:1},isExport:n,notUseCache:a}}),g.toDataURL()}({renderScene:t,isExport:a,notUseCache:void 0===l||l,elements:e.elements,appState:e.appState}),s=document.createElement("a");s.href=c,s.download="canvas.png",s.click()}},5204:function(e,t,n){n.d(t,{$9:function(){return s},B8:function(){return c},KP:function(){return v},Pi:function(){return f},TE:function(){return g},dE:function(){return l},kb:function(){return p},mO:function(){return x},qf:function(){return h}});var o=n(9439),r=n(7762),a=n(3433),i=n(4453),l=function(e,t){var n=e.clientX,o=e.clientY,r=t.zoom,a=t.offsetLeft,i=t.offsetTop,l=t.scrollX,c=t.scrollY,s=r?r.value:1;return{x:(n-a)/s-l,y:(o-i)/s-c}},c=function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(n,")")},s=function(e){return function(e,t){var n=null,o=null,r=null,i=function t(i){n=window.requestAnimationFrame((function(){n=null,e.apply(void 0,(0,a.Z)(i)),o=null,r&&(o=r,r=null,t(o))}))},l=function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];o=a,null===n?i(o):null!==t&&void 0!==t&&t.trailing&&(r=a)};return l.flush=function(){null!==n&&(cancelAnimationFrame(n),n=null),o&&(e.apply(void 0,(0,a.Z)(r||o)),o=r=null)},l.cancel=function(){o=r=null,null!==n&&(cancelAnimationFrame(n),n=null)},l}((function(t){(0,i.unstable_batchedUpdates)(e,t)}))},u=function(e){var t=1/0,n=1/0,a=-1/0,i=-1/0,l=e.points;"freedraw"===e.type&&(l=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var c,s=(0,r.Z)(l);try{for(s.s();!(c=s.n()).done;){var u=(0,o.Z)(c.value,2),d=u[0],f=u[1];t=Math.min(t,d),n=Math.min(n,f),a=Math.max(a,d),i=Math.max(i,f)}}catch(v){s.e(v)}finally{s.f()}return[t,n,a,i]},d=function(e,t,n,o,r){return[(e-n)*Math.cos(r)-(t-o)*Math.sin(r)+n,(e-n)*Math.sin(r)+(t-o)*Math.cos(r)+o]},f=function(e){var t=h(e),n=(0,o.Z)(t,6),r=n[0],a=n[1],i=n[2],l=n[3],c=n[4],s=n[5];if("freedraw"===e.type){var f=u(e),v=(0,o.Z)(f,4),g=v[0],m=v[1],p=v[2],x=v[3];return[g+e.x,m+e.y,p+e.x,x+e.y]}var w=d(r,a,c,s,e.angle),y=(0,o.Z)(w,2),k=y[0],S=y[1],C=d(r,l,c,s,e.angle),E=(0,o.Z)(C,2),j=E[0],Z=E[1],T=d(i,l,c,s,e.angle),M=(0,o.Z)(T,2),R=M[0],b=M[1],z=d(i,a,c,s,e.angle),_=(0,o.Z)(z,2),X=_[0],Y=_[1];return[Math.min(k,j,R,X),Math.min(S,Z,b,Y),Math.max(k,j,R,X),Math.max(S,Z,b,Y)]},v=function(e){if(!e.length)return[0,0,0,0];var t=1/0,n=-1/0,r=1/0,a=-1/0;return e.forEach((function(e){var i=f(e),l=(0,o.Z)(i,4),c=l[0],s=l[1],u=l[2],d=l[3];t=Math.min(t,c),r=Math.min(r,s),n=Math.max(n,u),a=Math.max(a,d)})),[t,r,n,a]},h=function(e){if("freedraw"===e.type){var t=u(e),n=(0,o.Z)(t,4),r=n[0],a=n[1],i=n[2],l=n[3],c=r+e.x,s=a+e.y,d=i+e.x,f=l+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},g=function(e,t){return Math.abs(e-t)},m=0,p=function(){return"id".concat(m++)},x=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}},4975:function(e,t,n){n.d(t,{E:function(){return r},j:function(){return o}});var o=function(e){return Math.max(.1,Math.min(e,30))},r=function(e,t){var n=e.viewportX,o=e.viewportY,r=e.nextZoom,a=n-t.offsetLeft,i=o-t.offsetTop,l=t.zoom.value;return{scrollX:t.scrollX+a/r-a/l,scrollY:t.scrollY+i/r-i/l,zoom:{value:r}}}}}]);
//# sourceMappingURL=OffscreenCanvas.9bf5483b.chunk.js.map