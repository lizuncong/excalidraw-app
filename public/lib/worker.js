let canvas = null;
let ctxWorker = null;
let canvasWidth;
let canvasHeight;
let elements = [];
let count = 15000;
let appState = {
  scrollX: 0,
  scrollY: 0,
};
let isDrawing = false;
self.onmessage = (event) => {
  const { canvasWorker, appState: state, type, scale } = event.data;
  elements = generateElements(count);
  if (type === "redraw") {
    appState = state;
    // if (!isDrawing) {
    //   isDrawing = true;
    //   startCounting();
    //   isDrawing = false;
    // }
  } else {
    canvas = canvasWorker;
    ctxWorker = canvas.getContext("2d");
    ctxWorker.scale(scale, scale);
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    startCounting();
  }
};

let start = Date.now();
// function startCounting() {
//   setInterval(() => {
//     const current = Date.now();
//     elements = generateElements(count);
//     console.log("worker redraw interval...", current - start, elements.length);
//     start = current;
//     // redrawCanvasB();
//   }, 16.6);
//   // requestAnimationFrame(startCounting);
// }

function startCounting() {
  const current = Date.now();
  elements = generateElements(count);
  // console.log("worker redraw raf...", current - start, elements.length);
  start = current;
  const drawStart = Date.now();
  redrawCanvasB();
  // console.log("绘制时间...", Date.now() - drawStart);
  requestAnimationFrame(startCounting);
}
function redrawCanvasB() {
  ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
  ctxWorker.save();
  ctxWorker.translate(appState.scrollX, appState.scrollY);
  elements.forEach((ele) => {
    ctxWorker.save();

    ctxWorker.lineJoin = "round";
    ctxWorker.lineCap = "round";
    ctxWorker.lineWidth = ele.strokeWidth;
    ctxWorker.strokeStyle = ele.strokeStyle;
    ctxWorker.strokeRect(0, 0, ele.width, ele.height);

    ctxWorker.restore();
  });

  ctxWorker.restore();
}

const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
const getRandomValue = (n, m) => {
  return Number((Math.random() * (m - n) + n).toFixed(5));
};

const generateElements = (count) => {
  const elements = [];
  let element;
  for (let i = 0; i < count; i++) {
    let x = getRandomValue(0, canvasWidth);
    let y = getRandomValue(0, canvasHeight);
    element = {
      x,
      y,
      strokeStyle: rgb(),
    };
    const width = Math.abs(getRandomValue(-x, canvasWidth - x)) + 2;
    const height = Math.abs(getRandomValue(-y, canvasHeight - y)) + 2;
    element.width = width;
    element.height = height;

    elements.push(element);
  }

  return elements;
};
