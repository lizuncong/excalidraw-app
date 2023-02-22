import { elements } from "./index";
import { getBoundsFromPoints } from "./util";
let previewCanvas = null;
const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const [minX, minY, maxX, maxY] = getBoundsFromPoints(ele.points);

    const offscreenContainer = document.getElementById("offscreen");

    if (previewCanvas) {
      offscreenContainer.removeChild(previewCanvas);
    }
    previewCanvas = canvas;
    offscreenContainer.appendChild(previewCanvas);


    console.log(maxX - minX, maxY - minY);
    canvas.width = (maxX - minX) * window.devicePixelRatio;
    canvas.height = (maxY - minY) * window.devicePixelRatio;

    context.save();
    context.beginPath();
    context.scale(window.devicePixelRatio, window.devicePixelRatio);

    ele.points.forEach((point, index) => {
      const [x, y] = point;
      if (!index) {
        context.moveTo(x - minX, y - minY);
      } else {
        context.lineTo(x - minX, y - minY);
      }
    });
    context.stroke();
    context.restore();

    ctx.save();

    context.drawImage(
      canvas,
      (-(maxX - minX) / 2) * window.devicePixelRatio,
      (-(maxY - minY) / 2) * window.devicePixelRatio,
      canvas.width,
      canvas.height
    );
    // ctx.beginPath();
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = "blue";

    // ele.points.forEach((point, index) => {
    //   if (!index) {
    //     ctx.moveTo(...ele.points[0]);
    //   } else {
    //     ctx.lineTo(...point);
    //   }
    // });

    // ctx.stroke();

    ctx.restore();
  });
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderElements(context, appState);
  localStorage.setItem("free-draw-elements", JSON.stringify(elements));
};

export default renderScene;
