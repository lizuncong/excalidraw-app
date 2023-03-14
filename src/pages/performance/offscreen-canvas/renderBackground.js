import { getCanvasSize } from "@/util/export";
import { renderScene } from "./renderer/renderScene";
// eslint-disable
import Worker from "worker-loader!./worker.js";
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
export const canvasToDataURL = ({
  isExport,
  notUseCache,
  elements,
  appState,
}) => {
  const exportPadding = 0;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);
  console.log("export...", minX, minY, width, height);
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

  return {
    canvas,
    minX,
    minY,
    width,
    height,
  };
};
