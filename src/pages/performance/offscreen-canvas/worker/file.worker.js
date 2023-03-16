import { renderScene } from "./renderScene";

let canvas = null;
let canvasImg = null;
/*eslint-disable*/
self.onmessage = (event) => {
  const {
    elements,
    canvasWorker,
    canvasImgWorker,
    appState,
    scale,
    renderConfig,
    type,
  } = event.data;
  // 渲染静态的canvas
  if (type === "init" || type === "redraw") {
    if (canvasWorker) {
      canvas = canvasWorker;
    }

    renderScene({
      type: 'canvas',
      elements,
      appState,
      scale,
      canvas,
      renderConfig,
    });
  }

  // 全量生成图片
  if (type === "init-img" || type === "redraw-img") {
    console.log('全量生成图片个数：', elements)
    if (canvasImgWorker) {
      canvasImg = canvasImgWorker;
    }
    renderScene({
      type: 'img',
      elements,
      appState,
      scale,
      canvas: canvasImg,
      renderConfig,
    });
    setTimeout(() => {
      postMessage({ type: "img-finish" });
    }, 2000);
  }
};
