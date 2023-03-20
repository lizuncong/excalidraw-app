import { getCanvasSize } from "@/util/export";
// import { renderScene } from "./renderer/renderScene";
// eslint-disable
import Worker from "./worker/file.worker.js";
// const canvas = document.getElementById("canvas");
// // const context = canvas.getContext("2d");
// const { offsetWidth, offsetHeight } = canvas;

// canvas.width = offsetWidth * window.devicePixelRatio;
// canvas.height = offsetHeight * window.devicePixelRatio;
// // context.scale(window.devicePixelRatio, window.devicePixelRatio);

// const worker = new Worker("./lib/worker.js");
// // Use the OffscreenCanvas API and send to the worker thread
// const canvasWorker = canvas.transferControlToOffscreen();
// worker.postMessage(
//   {
//     canvasWorker: canvasWorker,
//     scale: window.devicePixelRatio,
//   },
//   [canvasWorker]
// );
const worker = new Worker();
let callbacks = [];
worker.onmessage = (event) => {
  callbacks.forEach((cb) => cb(event.data));
};
export const canvasToDataURL = ({
  isExport,
  notUseCache,
  elements,
  appState,
  cb,
}) => {
  const exportPadding = 0;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);
  const canvas = document.createElement("canvas");
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;

  const canvasWorker = canvas.transferControlToOffscreen();
  worker.postMessage(
    {
      elements,
      canvasWorker,
      isExport,
      notUseCache,
      exportPadding,
      type: "render",
      minX,
      minY,
      width,
      height,
      devicePixelRatio: window.devicePixelRatio,
      appState,
    },
    [canvasWorker]
  );
  callbacks = []
  const callback = (data) => {
    callbacks = callbacks.filter((cb) => cb !== callback);
    const canvas = document.createElement("canvas");
    const { canvasWidth, canvasHeight } = appState;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    const context = canvas.getContext("2d");
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
    context.drawImage(data.imageBitmap, 0, 0);
    cb(canvas, minX, minY, width, height);
  };

  callbacks.push(callback);

  return {
    canvas,
    minX,
    minY,
    width,
    height,
  };
};
