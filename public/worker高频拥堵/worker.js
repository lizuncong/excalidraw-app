let canvas = null;
let ctxWorker = null;
let appState = {
  scrollX: 0,
  scrollY: 0,
};
let elements = []
self.onmessage = (event) => {
  const { canvasWorker, appState: state, scale } = event.data;
  if (canvas) {
    appState = state;
    drawOffscreenCanvas();
  } else {
    canvas = canvasWorker;
    ctxWorker = canvas.getContext("2d");
    ctxWorker.scale(scale, scale);
    elements = generateElements(10000)
    drawOffscreenCanvas()
  }
};

let startTime = Date.now();
function drawOffscreenCanvas() {
  const current = Date.now();
  console.log('绘制元素====', current - startTime);
  startTime = current;
  ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
  ctxWorker.save();
  ctxWorker.translate(appState.scrollX, appState.scrollY);
  
  elements.forEach((ele) => {
    ctxWorker.save();

    ctxWorker.lineWidth = 3;
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
    let x = getRandomValue(0, canvas.width);
    let y = getRandomValue(0, canvas.height);
    element = {
      x,
      y,
      strokeStyle: rgb(),
    };
    const width = Math.abs(getRandomValue(-x, canvas.width - x)) + 2;
    const height = Math.abs(getRandomValue(-y, canvas.height - y)) + 2;
    element.width = width;
    element.height = height;

    elements.push(element);
  }

  return elements;
};