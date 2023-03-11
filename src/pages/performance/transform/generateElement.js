import { createElement, newTextElement } from "./element/newElement";
import { rgb } from "@/util";

const getRandomValue = (n, m) => {
  return Number((Math.random() * (m - n) + n).toFixed(5));
};
const generateElements = (count, type, appState) => {
  const elements = [];
  console.log("generate elements...", count, type);
  let element;
  for (let i = 0; i < count; i++) {
    let x = getRandomValue(
      -appState.scrollX,
      appState.canvasWidth - appState.scrollX
    );
    let y = getRandomValue(
      -appState.scrollY,
      appState.canvasHeight - appState.scrollY
    );
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
    if (type === "rectangle") {
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
      element.width = width;
      element.height = height;
    } else if (type === "freedraw") {
      const pointsNum = getRandomValue(20, 100);
      for (let i = 0; i < pointsNum; i++) {
        x = getRandomValue(x, x + 10);
        y = getRandomValue(y, y + 10);
        element.points.push([x, y]);
      }
    } else if (type === "text") {
      const text = `${x}, ${y}`;
      element = newTextElement({
        x,
        y,
        strokeColor: rgb(),
        backgroundColor: "transparent",
        fillStyle: "hachure",
        strokeWidth: 1,
        strokeStyle: "solid",
        text,
        width: text.length * 20,
        height: 25,
        fontSize: 20,
        fontFamily: "Virgil", // Helvetica Cascadia
        textAlign: "left",
        verticalAlign: "top",
      });
    }

    elements.push(element);
  }

  return elements;
};

export const animateElements = (elements, appState) => {
  elements.forEach((el) => {
    const x = getRandomValue(
      -appState.scrollX,
      appState.canvasWidth - appState.scrollX
    );
    const y = getRandomValue(
      -appState.scrollY,
      appState.canvasHeight - appState.scrollY
    );
    el.x = x;
    el.y = y;
  });
  return elements;
};
export default generateElements;
