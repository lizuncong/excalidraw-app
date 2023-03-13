const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const { offsetWidth, offsetHeight } = canvas;

canvas.width = offsetWidth * window.devicePixelRatio;
canvas.height = offsetHeight * window.devicePixelRatio;
context.scale(window.devicePixelRatio, window.devicePixelRatio);


const offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height);
const offContext = offscreenCanvas.getContext('2d')
offContext.fillRect(20, 20, 100, 100)
context.drawImage(offContext, 20, 20, 100, 100)