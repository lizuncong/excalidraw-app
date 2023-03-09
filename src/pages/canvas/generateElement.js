import { createElement } from "./element/newElement";

const getRandomValue = (n, m) => {
  return Number((Math.random() * (m - n) + n).toFixed(5));
};
const generateElements = (count, type, appState) => {
  const elements = [];
  console.log("generate elements...", count, type);
  let element;
  for (let i = 0; i < count; i++) {
    const x = getRandomValue(
      -appState.scrollX,
      appState.canvasWidth - appState.scrollX
    );
    const y = getRandomValue(
      -appState.scrollY,
      appState.canvasHeight - appState.scrollY
    );
    const width =
      Math.abs(
        getRandomValue(
          -appState.scrollX - x,
          appState.canvasWidth - appState.scrollX - x
        )
      ) + 2;
    const height =
      Math.abs(
        getRandomValue(
          -appState.scrollY - y,
          appState.canvasHeight - appState.scrollY - y
        )
      ) + 2;
    element = createElement({
      elementType: type,
      pointerDownState: {
        origin: {
          x,
          y,
        },
      },
      appState,
    });
    element.width = width;
    element.height = height;
    elements.push(element);
  }

  return elements;
};

export default generateElements;
