import { elements } from "./index";

const renderElements = (ctx, appState) => {

  elements.forEach((ele) => {
    const points = ele.points;
    if (points.length < 2) {
      return;
    }
    ctx.save();
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = ele.strokeStyle;
    ctx.beginPath();
    const firstPoint = points[0]
    ctx.moveTo(firstPoint[0], firstPoint[1]);

    for (let i = 1; i < points.length; i++) {
      const xc = (points[i][0] + points[i - 1][0]) / 2;
      const yc = (points[i][1] + points[i - 1][1]) / 2;
      ctx.quadraticCurveTo(points[i - 1][0], points[i - 1][1], xc, yc);
    }

    ctx.stroke();

    ctx.restore();
  });
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderElements(context, appState);
  // localStorage.setItem("free-draw-elements", JSON.stringify(elements));
};

export default renderScene;
