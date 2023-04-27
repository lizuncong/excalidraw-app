
const renderElements = (ctx, appState, elements) => {
  elements.forEach((ele) => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = ele.strokeStyle;

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

// let timerId;

const renderScene = (canvas, appState, elements) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderElements(context, appState, elements);

  // if (timerId) {
  //   clearTimeout(timerId);
  // }

  // timerId = setTimeout(() => {
  //   console.log('开始记录....')
  //   afterRenderSceneHook.forEach((cb) => {
  //     cb(appState, elements);
  //   });
  // }, 300);
};

export default renderScene;

// export const registerAfterRenderSceneHook = (cb) => {
//   afterRenderSceneHook.push(cb);
//   return () => {
//     afterRenderSceneHook = afterRenderSceneHook.filter((h) => h !== cb);
//   };
// };
