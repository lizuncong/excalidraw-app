"use strict";(this.webpackChunkexcalidraw_app=this.webpackChunkexcalidraw_app||[]).push([[823],{801:function(e,t,n){n.r(t),n.d(t,{appState:function(){return J},default:function(){return $}});var o=n(3433),r=n(1413),i=n(9439),l=n(4519),a=n(5204),c=n(4975),s=n(4925),u=["type","x","y","strokeColor","backgroundColor","fillStyle","strokeWidth","strokeStyle","width","height","angle","points"],d=function(e){var t=e.type,n=e.x,o=e.y,i=e.strokeColor,l=e.backgroundColor,c=e.fillStyle,d=e.strokeWidth,f=void 0===d?3:d,v=e.strokeStyle,h=e.width,g=void 0===h?0:h,p=e.height,m=void 0===p?0:p,x=e.angle,y=void 0===x?0:x,w=e.points,k=void 0===w?[]:w,C=(0,s.Z)(e,u);return(0,r.Z)({id:(0,a.kb)(),type:t,x:n,y:o,width:g,height:m,strokeColor:i,backgroundColor:l,fillStyle:c,strokeWidth:f,strokeStyle:v,angle:y,isDeleted:!1,points:k},C)},f=function(e){var t=e.elementType,n=e.pointerDownState,o=e.appState;return d("freedraw"===t?{type:t,x:n.origin.x,y:n.origin.y,points:[[n.origin.x,n.origin.y]],strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,a.B8)()}:{type:t,x:n.origin.x,y:n.origin.y,strokeColor:o.currentItemStrokeColor,backgroundColor:o.currentItemBackgroundColor,fillStyle:o.currentItemFillStyle,strokeWidth:o.currentItemStrokeWidth,strokeStyle:(0,a.B8)()})},v=function(e){return d((0,r.Z)({type:"text",text:e.text,fontSize:e.fontSize,fontFamily:e.fontFamily,textAlign:e.textAlign,verticalAlign:e.verticalAlign,originalText:e.text},e))},h=function(e,t){return Number((Math.random()*(t-e)+e).toFixed(5))},g=function(e,t,n){for(var o,r=[],i=0;i<e;i++){var l=h(-n.scrollX,n.canvasWidth-n.scrollX),c=h(-n.scrollY,n.canvasHeight-n.scrollY);if(o=f({elementType:t,pointerDownState:{origin:{x:l,y:c}},appState:n}),"rectangle"===t){var s=Math.abs(h(-n.scrollX-l,n.canvasWidth-n.scrollX-l))+2,u=Math.abs(h(-n.scrollY-c,n.canvasHeight-n.scrollY-c))+2;o.width=s,o.height=u}else if("freedraw"===t)for(var d=h(20,100),g=0;g<d;g++)l=h(l,l+10),c=h(c,c+10),o.points.push([l,c]);else if("text"===t){var p="".concat(l,", ").concat(c);o=v({x:l,y:c,strokeColor:(0,a.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:p,width:20*p.length,height:25,fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"})}r.push(o)}return r},p=function(e){return e.replace(/\s+/g," ")},m=function(e){var t=e.elements,n=e.appState,o=(e.scale,e.svg),r=(e.renderConfig,e.isTransform),l="\n    transform: translateX(".concat(n.scrollX*n.zoom.value,"px) translateY(").concat(n.scrollY*n.zoom.value,"px) scale(").concat(n.zoom.value,");\n    width: ").concat(30,"px;\n    height: ").concat(30,"px;\n    transform-origin: left top;\n  ");if(o.setAttribute("style",p(l)),!r){var c=t.map((function(e,t){return function(e,t,n){var o;switch(e.type){case"rectangle":o="<svg id=".concat(e.id,"\n          key=").concat(e.id,"\n          width=").concat(e.width+2*e.strokeWidth,"\n          height=").concat(e.height+2*e.strokeWidth,'\n          style="\n            position: absolute;\n            left: ').concat(e.x,"px;\n            top: ").concat(e.y,'px;\n            // background: grey;\n          "\n          xmlns="http://www.w3.org/2000/svg"\n          version="1.1"\n        >\n          <rect\n            x=').concat(Math.ceil(e.strokeWidth/2),"\n            y=").concat(Math.ceil(e.strokeWidth/2),"\n            width=").concat(e.width,"\n            height=").concat(e.height,'\n            style="\n              fill: none;\n              stroke-width: ').concat(e.strokeWidth,";\n              stroke: ").concat(e.strokeStyle,';\n            "\n          />\n        </svg>');break;case"freedraw":var r=(0,a.qf)(e),l=(0,i.Z)(r,4),c=l[0],s=l[1],u=l[2],d=l[3],f=(0,a.TE)(c,u),v=(0,a.TE)(s,d),h=e.points.map((function(t){return[t[0]-c+Math.ceil(e.strokeWidth/2),t[1]-s+Math.ceil(e.strokeWidth/2)]}));o="<svg\n          id=".concat(e.id,"\n          key=").concat(e.id,"\n          width=").concat(f+2*e.strokeWidth,"\n          height=").concat(v+2*e.strokeWidth,'\n          style="\n            position: absolute;\n            left: ').concat(c,"px;\n            top: ").concat(s,'px;\n            // background: grey;\n          "\n          xmlns="http://www.w3.org/2000/svg"\n          version="1.1"\n        >\n          <polyline\n            points="').concat(h.join(" "),'"\n            style="\n              fill: none;\n              stroke-width: ').concat(e.strokeWidth,";\n              stroke: ").concat(e.strokeStyle,';\n            "\n          />\n        </svg>')}return o}(e)}));o.innerHTML=p(c.join(""))}},x=n(5909),y={pointers:new Map,lastCenter:null,initialDistance:null,initialScale:null},w=function(e,t){(0,l.useEffect)((function(){var t=e.current,n=function(e){e.touches.length||y.pointers.clear()};return t.addEventListener("touchend",n),function(){t.removeEventListener("touchend",n)}}),[e]);return{gesture:y,removePointer:function(e){y.pointers.delete(e.pointerId)},updateGestureOnPointerDown:function(e){y.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),2===y.pointers.size&&(y.lastCenter=(0,x.q)(y.pointers),y.initialScale=t.zoom.value,y.initialDistance=(0,x.S)(Array.from(y.pointers.values())))},handleCanvasPointerMove:function(e,n){y.pointers.has(e.pointerId)&&y.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});var o=y.initialScale;if(2===y.pointers.size&&y.lastCenter&&o&&y.initialDistance){var r=(0,x.q)(y.pointers),i=r.x-y.lastCenter.x,l=r.y-y.lastCenter.y;y.lastCenter=r;var a=(0,x.S)(Array.from(y.pointers.values()))/y.initialDistance,s=a?(0,c.j)(o*a):t.zoom.value,u=(0,c.E)({viewportX:r.x,viewportY:r.y,nextZoom:s},t);Object.assign(t,{zoom:u.zoom,scrollX:u.scrollX+i/s,scrollY:u.scrollY+l/s}),n()}else y.lastCenter=y.initialDistance=y.initialScale=null}}},k={tools:"index_tools__Gxr2V",item:"index_item__X59E2",selected:"index_selected__pbMK6"},C=n(2556),S=["width","height","mirror","style"],E=function(e,t){var n="number"===typeof t?{width:t}:t,o=n.width,i=void 0===o?512:o,l=n.height,a=void 0===l?i:l,c=(n.mirror,n.style),u=(0,s.Z)(n,S);return(0,C.jsx)("svg",(0,r.Z)((0,r.Z)({"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 ".concat(i," ").concat(a),style:c},u),{},{children:"string"===typeof e?(0,C.jsx)("path",{fill:"currentColor",d:e}):e}))},j=E((0,C.jsxs)("g",{strokeWidth:"1.5",children:[(0,C.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,C.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),M=E((0,C.jsxs)("g",{strokeWidth:"1.25",children:[(0,C.jsx)("path",{clipRule:"evenodd",d:"m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"}),(0,C.jsx)("path",{d:"m11.25 5.417 3.333 3.333"})]}),{width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),b=E((0,C.jsxs)("g",{strokeWidth:"1.25",children:[(0,C.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,C.jsx)("path",{d:"M15 8h.01"}),(0,C.jsx)("path",{d:"M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"}),(0,C.jsx)("path",{d:"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}),(0,C.jsx)("path",{d:"M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"}),(0,C.jsx)("path",{d:"M19 16v6"}),(0,C.jsx)("path",{d:"M22 19l-3 3l-3 -3"})]}),{width:24,height:24,fill:"none",strokeWidth:2,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),z={width:20,height:20,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Z=E((0,C.jsx)("path",{strokeWidth:"1.25",d:"M10 4.167v11.666M4.167 10h11.666"}),z),T=E((0,C.jsx)("path",{d:"M5 10h10",strokeWidth:"1.25"}),z),X=n(2121),Y=n(5671),_=n(3144),W=function(){function e(){(0,Y.Z)(this,e);var t=JSON.parse(localStorage.getItem("elements"));this.elements=t||[]}return(0,_.Z)(e,[{key:"getElementsIncludingDeleted",value:function(){return this.elements}},{key:"replaceAllElements",value:function(e){this.elements=e}}]),e}(),I=new W,R=[{type:"rectangle",icon:j},{type:"freedraw",icon:M}],D=(0,l.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange;return(0,C.jsxs)("div",{className:k.tools,children:[(0,C.jsx)("span",{className:[k.item].join(" "),onClick:function(){(0,X.aF)({renderScene:m,elements:I.getElementsIncludingDeleted(),appState:J})},children:b}),R.map((function(e){var o=t.type===e.type;return(0,C.jsx)("span",{className:[k.item,o&&k.selected].join(" "),onClick:function(){return n({type:o?"":e.type})},children:e.icon},e.type)}))]})})),L={scale:"index_scale__vYEzv",item:"index_item__RCKuP",value:"index_value__Rk4N6"},P=(0,l.memo)((function(e){var t=e.appState,n=e.onZoomChange,o="".concat((100*t.zoom.value).toFixed(0),"%");return(0,C.jsxs)("div",{className:L.scale,children:[(0,C.jsx)("span",{className:[L.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value-.1))},children:T}),(0,C.jsx)("span",{className:L.value,onClick:function(){return n((0,c.j)(1))},children:o}),(0,C.jsx)("span",{className:[L.item].join(" "),onClick:function(){return n((0,c.j)(t.zoom.value+.1))},children:Z})]})})),B=P,A="index_layer__0itl5",N="index_ball_red__HNM9C",F="index_boundceBall__l5WLp",H="index_shadowball__HTGB-",O=(0,l.memo)((function(e){var t=e.activeTool,n=e.onActiveToolChange,o=e.appState,r=e.onZoomChange;return(0,C.jsxs)("div",{className:A,children:[(0,C.jsx)(B,{appState:o,onZoomChange:r}),(0,C.jsx)(D,{activeTool:t,onActiveToolChange:n}),(0,C.jsxs)("div",{className:F,children:[(0,C.jsx)("div",{className:N}),(0,C.jsx)("div",{className:H})]})]})})),U=O,q={textarea:"index_textarea__WeZZt",textarea_copy:"index_textarea_copy__+GJ+h"},K=(0,l.forwardRef)((function(e,t){var n=e.staticCanvasRef,r=(0,l.useRef)(null),c=(0,l.useState)(""),s=(0,i.Z)(c,2),u=s[0],d=s[1];return(0,l.useImperativeHandle)(t,(function(){return{startEditText:function(e){e.preventDefault(),e.stopPropagation();var t=(0,a.dE)(e,J),n=t.x,o=t.y,i=v({x:n,y:o,strokeColor:(0,a.B8)(),backgroundColor:"transparent",fillStyle:"hachure",strokeWidth:1,strokeStyle:"solid",text:"",fontSize:20,fontFamily:"Virgil",textAlign:"left",verticalAlign:"top"});J.draggingElement=i;var l=r.current;l.focus();var c=e.clientX-J.offsetLeft,s=e.clientY-J.offsetTop,u={font:(0,a.mO)(i),left:"".concat(c,"px"),top:"".concat(s,"px"),opacity:1,color:i.strokeColor,fontSize:i.fontSize};Object.assign(l.style,u);var d=document.getElementById("copyText");Object.assign(d.style,u);var f=J.canvasWidth-c;Object.assign(l.style,{zIndex:1,maxWidth:"".concat(f,"px"),width:"".concat(i.fontSize,"px"),height:"".concat(1.2*i.fontSize,"px")})}}})),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("textarea",{onChange:function(e){var t=e.target.value,n=r.current,o=parseFloat(n.style.maxWidth),i=document.getElementById("copyText");i.innerText=t;var l=i.getBoundingClientRect().width;if(l>o)if(l-o<30)t=i.innerText=t.slice(0,t.length-1)+"\n"+t.slice(t.length-1);else{var a=t.split("\n"),c=[];a.forEach((function(e){if(i.innerText=e,i.getBoundingClientRect().width<=o)c.push(e);else for(var t=0,n=1;n<e.length;n++){var r=e.slice(t,n);i.innerText=r,i.getBoundingClientRect().width>o?(c.push(e.slice(t,n-1)),t=n-1):n===e.length-1&&c.push(e.slice(t,n))}})),t=c.join("\n"),i.innerText=t}d(t);var s=i.getBoundingClientRect(),u=s.width,f=s.height;n.style.width="".concat(u+30,"px"),n.style.height="".concat(f,"px"),J.draggingElement.text=t},onBlur:function(){var e=J.draggingElement,t=r.current,i=document.getElementById("copyText");e.text&&(e.width=i.offsetWidth,e.height=i.offsetHeight,J.draggingElement,I.replaceAllElements([].concat((0,o.Z)(I.getElementsIncludingDeleted()),[J.draggingElement])),m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}}),setTimeout((function(){i.innerText="",d("")}),200)),Object.assign(t.style,{left:"0px",top:"0px",zIndex:-1,opacity:0})},value:u,className:q.textarea,ref:r}),(0,C.jsx)("div",{style:{background:"grey"},id:"copyText",contentEditable:!0,className:[q.textarea,q.textarea_copy].join(" ")})]})})),G=(0,l.memo)(K),J=JSON.parse(localStorage.getItem("appState"))||{zoom:{value:1},scrollX:0,scrollY:0,offsetLeft:0,offsetTop:0,draggingElement:null,canvasWidth:0,canvasHeight:0},V=(0,l.memo)((function(){var e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),s=(0,l.useRef)(null),u=(0,l.useRef)({}),d=(0,l.useRef)(null),v=(0,l.useRef)(null),p=(0,l.useRef)({}),x=(0,l.useState)(!1),y=(0,i.Z)(x,2),k=y[0],S=y[1],E=(0,l.useState)({type:""}),j=(0,i.Z)(E,2),M=j[0],b=j[1],z=(0,l.useState)({count:"",type:"rectangle"}),Z=(0,i.Z)(z,2),T=Z[0],X=Z[1],Y=(0,l.useState)(!1),_=(0,i.Z)(Y,2),W=_[0],R=_[1],D=(0,l.useRef)(),L=function(){S(!k)};(0,l.useEffect)((function(){var t=function(e){e.width=r*window.devicePixelRatio,e.height=i*window.devicePixelRatio},o=e.current,r=o.offsetWidth,i=o.offsetHeight;t(o),t(n.current);var l=o.getBoundingClientRect(),a=l.x,c=l.y;J.offsetLeft=a,J.offsetTop=c,J.canvasWidth=r,J.canvasHeight=i,m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})}),[]),(0,l.useEffect)((function(){var n=t.current,o=function(e){e.preventDefault()};n.addEventListener("wheel",o,{passive:!1});var r=function(e){u.current={cursorX:e.clientX,cursorY:e.clientY}},i=function(e){e.preventDefault()},l=e.current;return l.addEventListener("touchstart",i),document.addEventListener("mousemove",r),function(){l.removeEventListener("touchstart",i),n.removeEventListener("wheel",o),document.removeEventListener("mousemove",r)}}),[]),(0,l.useEffect)((function(){var e=0,t=Date.now();!function n(){var o=Date.now();if(e++,o>1e3+t){var r=Math.round(1e3*e/(o-t));v.current.innerText="FPS\uff1a".concat(r),e=0,t=o}requestAnimationFrame(n)}()}),[]);var P=w(e,J),B=P.updateGestureOnPointerDown,A=P.handleCanvasPointerMove,N=P.removePointer,F=P.gesture,H=function(){m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,isTransform:!0,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}}),p.current.zoomTimerId&&clearTimeout(p.current.zoomTimerId),p.current.zoomTimerId=setTimeout((function(){m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,isTransform:!0,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})}),300)},O=function(e){return(0,a.$9)((function(t){var o=(0,a.dE)(t,J);if(e.lastCoords.x=o.x,e.lastCoords.y=o.y,"freedraw"===M.type)J.draggingElement.points.push([o.x,o.y]);else{var r=e.lastCoords,i=e.origin.x,l=e.origin.y,c=r.x,u=r.y,d=(0,a.TE)(e.origin.x,r.x),f=(0,a.TE)(e.origin.y,r.y),v=c<i?i-d:i,h=u<l?l-f:l;J.draggingElement.x=v,J.draggingElement.y=h,J.draggingElement.width=d,J.draggingElement.height=f}J.draggingElement,m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})}))},q=function(t){return function(o){N(o);var r=e.current;r.getContext("2d").clearRect(0,0,r.width,r.height),m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}}),window.removeEventListener("pointermove",t.eventListeners.onMove),window.removeEventListener("pointerup",t.eventListeners.onUp)}},K=function(e){var t=(0,a.dE)(e,J);return{origin:t,lastCoords:(0,r.Z)({},t),eventListeners:{onMove:null,onUp:null,onKeyUp:null,onKeyDown:null}}};return(0,C.jsxs)("div",{className:"svg-base",ref:t,children:[(0,C.jsxs)("div",{className:"container wrap",children:[(0,C.jsx)("div",{className:"svg-container",ref:s}),(0,C.jsx)("canvas",{ref:n,className:"canvas",children:"\u9759\u6001canvas"}),(0,C.jsx)("canvas",{ref:e,className:"canvas draw",onWheel:function(e){var t=e.deltaX,o=e.deltaY;if(e.metaKey||e.ctrlKey){var i=Math.sign(o),l=Math.abs(o),a=o;l>10&&(a=10*i);var d=J.zoom.value-a/100;d+=Math.log10(Math.max(1,J.zoom.value))*-i*Math.min(1,l/20);var f=(0,c.j)(d);return Object.assign(J,(0,r.Z)({},(0,c.E)({viewportX:u.current.cursorX,viewportY:u.current.cursorY,nextZoom:f},J))),L(),void H()}J.scrollX=J.scrollX-t,J.scrollY=J.scrollY-o,m({elements:I.getElementsIncludingDeleted(),isTransform:!0,appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})},onPointerDown:function(e){if(!(F.pointers.size>1))if(M.type){var t=K(e),n=f({elementType:M.type,pointerDownState:t,appState:J});J.draggingElement=n,I.replaceAllElements([].concat((0,o.Z)(I.getElementsIncludingDeleted()),[J.draggingElement]));var r=O(t),i=q(t);window.addEventListener("pointermove",r),window.addEventListener("pointerup",i),t.eventListeners.onMove=r,t.eventListeners.onUp=i}else B(e)},onDoubleClick:function(e){M.type||d.current.startEditText(e)},onPointerCancel:N,onPointerMove:function(e){A(e,(function(){L(),H()}))},children:"\u52a8\u6001canvas"}),(0,C.jsx)(U,{activeTool:M,onZoomChange:function(e){J.zoom.value!==e&&(Object.assign(J,(0,r.Z)({},(0,c.E)({viewportX:J.canvasWidth/2+J.offsetLeft,viewportY:J.canvasHeight/2+J.offsetTop,nextZoom:e},J))),L(),H())},appState:(0,r.Z)({},J),onActiveToolChange:function(e){b(e)}}),(0,C.jsx)(G,{ref:d,staticCanvasRef:n})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("span",{ref:v,children:"FPS\uff1a--"}),(0,C.jsx)("span",{className:"total",id:"canvas-total"})]}),(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("input",{type:"number",value:T.count,onChange:function(e){return X((0,r.Z)((0,r.Z)({},T),{},{count:e.target.value}))}}),(0,C.jsxs)("select",{value:T.type,onChange:function(e){return X((0,r.Z)((0,r.Z)({},T),{},{type:e.target.value}))},children:[(0,C.jsx)("option",{value:"freedraw",children:"freedraw"}),(0,C.jsx)("option",{value:"rectangle",children:"rectangle"}),(0,C.jsx)("option",{value:"text",children:"text"})]}),(0,C.jsx)("button",{onClick:function(){var e=g(Number(T.count),T.type,J);I.replaceAllElements([].concat((0,o.Z)(I.getElementsIncludingDeleted()),(0,o.Z)(e))),m({elements:I.getElementsIncludingDeleted(),appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})},children:"\u751f\u6210"}),(0,C.jsx)("button",{onClick:function(){if(R(!W),D.current&&cancelAnimationFrame(D.current),!W){var e=Date.now();D.current=requestAnimationFrame((function t(){var o=Date.now();if(o-e>=100){e=o;var r=function(e,t){return e.forEach((function(e){var n=h(-t.scrollX,t.canvasWidth-t.scrollX),o=h(-t.scrollY,t.canvasHeight-t.scrollY);e.x=n,e.y=o})),e}(I.getElementsIncludingDeleted(),J);m({elements:r,appState:J,scale:window.devicePixelRatio,canvas:n.current,svg:s.current,renderConfig:{selectionColor:"#6965db",scrollX:J.scrollX,scrollY:J.scrollY,viewBackgroundColor:"#ffffff",zoom:J.zoom}})}D.current=requestAnimationFrame(t)}))}},children:W?"\u505c\u6b62\u52a8\u753b":"\u52a8\u753b"})]}),(0,C.jsx)("div",{id:"placeholder"})]})})),$=V},2121:function(e,t,n){n.d(t,{Sp:function(){return l},aF:function(){return a}});var o=n(1413),r=n(9439),i=n(5204),l=function(e,t){var n=(0,i.KP)(e),o=(0,r.Z)(n,4),l=o[0],a=o[1],c=o[2],s=o[3];return[l,a,(0,i.TE)(l,c)+2*t,(0,i.TE)(a,s)+t+t]},a=function(e){var t=e.renderScene,n=e.isExport,i=void 0===n||n,a=e.notUseCache,c=function(e){var t=e.renderScene,n=e.isExport,i=e.notUseCache,a=e.elements,c=e.appState,s=l(a,10),u=(0,r.Z)(s,4),d=u[0],f=u[1],v=u[2],h=u[3],g=document.createElement("canvas");return g.width=v*window.devicePixelRatio,g.height=h*window.devicePixelRatio,t({elements:a,appState:(0,o.Z)((0,o.Z)({},c),{},{scrollX:10-d,scrollY:10-f}),scale:window.devicePixelRatio,canvas:g,renderConfig:{selectionColor:"#6965db",scrollX:10-d,scrollY:10-f,viewBackgroundColor:"#ffffff",zoom:{value:1},isExport:n,notUseCache:i}}),g.toDataURL()}({renderScene:t,isExport:i,notUseCache:void 0===a||a,elements:e.elements,appState:e.appState}),s=document.createElement("a");s.href=c,s.download="canvas.png",s.click()}},5909:function(e,t,n){n.d(t,{S:function(){return i},q:function(){return r}});var o=n(9439),r=function(e){var t=Array.from(e.values());return{x:l(t,(function(e){return e.x}))/t.length,y:l(t,(function(e){return e.y}))/t.length}},i=function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1];return Math.hypot(n.x-r.x,n.y-r.y)},l=function(e,t){return e.reduce((function(e,n){return e+t(n)}),0)}},5204:function(e,t,n){n.d(t,{$9:function(){return s},B8:function(){return c},KP:function(){return v},Pi:function(){return f},TE:function(){return g},dE:function(){return a},kb:function(){return m},mO:function(){return x},qf:function(){return h}});var o=n(9439),r=n(7762),i=n(3433),l=n(4453),a=function(e,t){var n=e.clientX,o=e.clientY,r=t.zoom,i=t.offsetLeft,l=t.offsetTop,a=t.scrollX,c=t.scrollY,s=r?r.value:1;return{x:(n-i)/s-a,y:(o-l)/s-c}},c=function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(n,")")},s=function(e){return function(e,t){var n=null,o=null,r=null,l=function t(l){n=window.requestAnimationFrame((function(){n=null,e.apply(void 0,(0,i.Z)(l)),o=null,r&&(o=r,r=null,t(o))}))},a=function(){for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];o=i,null===n?l(o):null!==t&&void 0!==t&&t.trailing&&(r=i)};return a.flush=function(){null!==n&&(cancelAnimationFrame(n),n=null),o&&(e.apply(void 0,(0,i.Z)(r||o)),o=r=null)},a.cancel=function(){o=r=null,null!==n&&(cancelAnimationFrame(n),n=null)},a}((function(t){(0,l.unstable_batchedUpdates)(e,t)}))},u=function(e){var t=1/0,n=1/0,i=-1/0,l=-1/0,a=e.points;"freedraw"===e.type&&(a=e.points.map((function(t){return[t[0]-e.x,t[1]-e.y]})));var c,s=(0,r.Z)(a);try{for(s.s();!(c=s.n()).done;){var u=(0,o.Z)(c.value,2),d=u[0],f=u[1];t=Math.min(t,d),n=Math.min(n,f),i=Math.max(i,d),l=Math.max(l,f)}}catch(v){s.e(v)}finally{s.f()}return[t,n,i,l]},d=function(e,t,n,o,r){return[(e-n)*Math.cos(r)-(t-o)*Math.sin(r)+n,(e-n)*Math.sin(r)+(t-o)*Math.cos(r)+o]},f=function(e){var t=h(e),n=(0,o.Z)(t,6),r=n[0],i=n[1],l=n[2],a=n[3],c=n[4],s=n[5];if("freedraw"===e.type){var f=u(e),v=(0,o.Z)(f,4),g=v[0],p=v[1],m=v[2],x=v[3];return[g+e.x,p+e.y,m+e.x,x+e.y]}var y=d(r,i,c,s,e.angle),w=(0,o.Z)(y,2),k=w[0],C=w[1],S=d(r,a,c,s,e.angle),E=(0,o.Z)(S,2),j=E[0],M=E[1],b=d(l,a,c,s,e.angle),z=(0,o.Z)(b,2),Z=z[0],T=z[1],X=d(l,i,c,s,e.angle),Y=(0,o.Z)(X,2),_=Y[0],W=Y[1];return[Math.min(k,j,Z,_),Math.min(C,M,T,W),Math.max(k,j,Z,_),Math.max(C,M,T,W)]},v=function(e){if(!e.length)return[0,0,0,0];var t=1/0,n=-1/0,r=1/0,i=-1/0;return e.forEach((function(e){var l=f(e),a=(0,o.Z)(l,4),c=a[0],s=a[1],u=a[2],d=a[3];t=Math.min(t,c),r=Math.min(r,s),n=Math.max(n,u),i=Math.max(i,d)})),[t,r,n,i]},h=function(e){if("freedraw"===e.type){var t=u(e),n=(0,o.Z)(t,4),r=n[0],i=n[1],l=n[2],a=n[3],c=r+e.x,s=i+e.y,d=l+e.x,f=a+e.y;return[c,s,d,f,(c+d)/2,(s+f)/2]}return[e.x,e.y,e.x+e.width,e.y+e.height,e.x+e.width/2,e.y+e.height/2]},g=function(e,t){return Math.abs(e-t)},p=0,m=function(){return"id".concat(p++)},x=function(e){var t=e.fontSize,n=e.fontFamily;return"".concat(t,"px ").concat(n,", Segoe UI Emoji")}},4975:function(e,t,n){n.d(t,{E:function(){return r},j:function(){return o}});var o=function(e){return Math.max(.1,Math.min(e,30))},r=function(e,t){var n=e.viewportX,o=e.viewportY,r=e.nextZoom,i=n-t.offsetLeft,l=o-t.offsetTop,a=t.zoom.value;return{scrollX:t.scrollX+i/r-i/a,scrollY:t.scrollY+l/r-l/a,zoom:{value:r}}}}}]);
//# sourceMappingURL=SingleSVG.c96106d1.chunk.js.map