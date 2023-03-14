const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");
// const { offsetWidth, offsetHeight } = canvas;

// canvas.width = offsetWidth * window.devicePixelRatio;
// canvas.height = offsetHeight * window.devicePixelRatio;
// context.scale(window.devicePixelRatio, window.devicePixelRatio);

const worker = new Worker("./lib/worker.js");
// Use the OffscreenCanvas API and send to the worker thread
const canvasWorker = canvas.transferControlToOffscreen();
worker.postMessage(
  { 
    canvasWorker: canvasWorker, 
    devicePixelRatio: window.devicePixelRatio,
    offsetWidth: canvas.offsetWidth, 
    offsetHeight: canvas.offsetHeight
  },
  [canvasWorker]
);
