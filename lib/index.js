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

const btn = document.getElementById("draw");
btn.onclick = () => {
  console.log("点击按钮触发重绘");
  worker.postMessage(
    {
      type: 'redraw',
      scale: window.devicePixelRatio,
    }
  );
};
