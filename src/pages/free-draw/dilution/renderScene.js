import { elements } from "./index";

const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";

    ele.points.forEach((point, index) => {
      if (!index) {
        ctx.moveTo(...ele.points[0]);
      } else {
        ctx.lineTo(...point);
      }
    });

    ctx.stroke();

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
