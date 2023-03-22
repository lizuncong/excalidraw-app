const worker = new Worker("./worker.js");

const canvas = document.getElementById("canvas");
const { offsetWidth, offsetHeight } = canvas;

canvas.width = offsetWidth * window.devicePixelRatio;
canvas.height = offsetHeight * window.devicePixelRatio;
const canvasWorker = canvas.transferControlToOffscreen();

worker.postMessage(
  {
    canvasWorker: canvasWorker,
    scale: window.devicePixelRatio,
  },
  [canvasWorker]
);

const appState = {
  scrollX: 0,
  scrollY: 0,
};
let step = 1;

const btn = document.getElementById("draw");
btn.onclick = () => {
  const tick = () => {
    appState.scrollX = appState.scrollX + step;
    if (appState.scrollX > 300 || appState.scrollX < 0) {
      step = step * -1;
    }
    worker.postMessage({
      appState,
    });
    requestAnimationFrame(tick);
  };
  tick();
};
