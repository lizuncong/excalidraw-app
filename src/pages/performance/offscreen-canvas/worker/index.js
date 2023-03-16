import Worker from "./file.worker.js";
const worker = new Worker();
let callback;
worker.onmessage = (event) => {
  const { type } = event.data;
  if (type === "img-finish") {
    callback();
  }
};
let canvasWorker;
let canvasImgWorker;
export const renderSceneInWorker = ({
  elements,
  appState,
  scale,
  canvas,
  canvasImg,
  renderConfig,
}) => {
  renderConfig.devicePixelRatio = window.devicePixelRatio;
  const params = {
    appState,
    scale,
    renderConfig,
    elements,
  };
  if (canvas) {
    if (!canvasWorker) {
      console.log("初始化...", elements.length);
      canvasWorker = canvas.transferControlToOffscreen();
      worker.postMessage(
        {
          canvasWorker: canvasWorker,
          type: "init",
          ...params,
        },
        [canvasWorker]
      );
    } else {
      console.log("重回...", elements.length);
      worker.postMessage({
        type: "redraw",
        ...params,
      });
    }
  }

  if (canvasImg) {
    console.log("生成图片");
    if (!canvasImgWorker) {
      canvasImgWorker = canvasImg.transferControlToOffscreen();
      worker.postMessage(
        {
          canvasImgWorker: canvasImgWorker,
          type: "init-img",
          ...params,
        },
        [canvasImgWorker]
      );
    } else {
      worker.postMessage({
        type: "redraw-img",
        ...params,
      });
    }

    callback = (data) => {
      console.log("worker 绘制完成...", data);
      console.log("worker绘制完成222...", canvasImg.toDataURL())
    };
  }
};
