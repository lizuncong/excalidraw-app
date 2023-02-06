import drawAxis from "./drawAxis.js";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const { offsetWidth, offsetHeight } = canvas;

canvas.width = offsetWidth * window.devicePixelRatio;
canvas.height = offsetHeight * window.devicePixelRatio;
context.scale(window.devicePixelRatio, window.devicePixelRatio);

drawAxis(context);
