import { elements } from "./index";

const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    ctx.save();

    ctx.beginPath();
    ctx.lineWidth = 5;
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
  // ctx.beginPath(); // 重新绘制新的路径
  // console.log("render");
  // ctx.lineWidth = 5;
  // ctx.strokeStyle = "blue";
  // ctx.moveTo(33, 5);
  // ctx.lineTo(33, 140);
  // ctx.stroke();

  // ctx.beginPath(); // 重新绘制新的路径
  // console.log("render");
  // ctx.lineWidth = 1;
  // ctx.strokeStyle = "blue";
  // ctx.moveTo(23, 5);
  // ctx.lineTo(63, 140);
  // ctx.stroke();
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderElements(context, appState);
};

export default renderScene;
