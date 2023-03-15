import Worker from "./file.worker.js";
const worker = new Worker();

let canvasWorker;
let preElements;
export const renderSceneInWorker = ({
  elements,
  appState,
  scale,
  canvas,
  renderConfig,
}) => {
  renderConfig.devicePixelRatio = window.devicePixelRatio;
  const params = {
    appState,
    scale,
    renderConfig,
  };
  if (preElements !== elements) {
    console.log('elements变化了...')
    preElements = elements;
    params.elements = elements;
  }
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
};
