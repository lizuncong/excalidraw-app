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
  cb,
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
      worker.postMessage({
        type: "redraw",
        ...params,
      });
    }
  }

  if (canvasImg) {
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
      if (cb) {
        cb({
          base64: canvasImg.toDataURL(),
        });
      }
    };
  }
};
