const canvas = document.getElementById("canvas");
const { offsetWidth, offsetHeight } = canvas;

canvas.width = offsetWidth * window.devicePixelRatio;
canvas.height = offsetHeight * window.devicePixelRatio;

const worker = new Worker("./lib/worker.js");

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
const btn = document.getElementById("draw");

let animate = false;
let rafId;
btn.onclick = () => {
  let count = 0;
  const tick = () => {
    count++;
    appState.scrollX = count % 100;
    appState.scrollY = count % 100;

    worker.postMessage({
      type: "redraw",
      scale: window.devicePixelRatio,
      appState,
    });
    rafId = requestAnimationFrame(tick);
  };
  if (!animate) {
    console.log("点击按钮触发重绘");
    animate = true
    tick();
  } else {
    console.log("点击按钮停止重绘");
    animate = false
    cancelAnimationFrame(rafId);
  }
};
