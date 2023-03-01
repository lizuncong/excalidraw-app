import { randomId } from "../util";
import { rgb } from "@/util";

export const newElement = ({
  type,
  x,
  y,
  strokeColor,
  backgroundColor,
  fillStyle,
  strokeWidth = 3,
  strokeStyle,
  width = 0,
  height = 0,
  angle = 0,
  points = [],
}) => {
  return {
    id: randomId(),
    type,
    x,
    y,
    width,
    height,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    angle,
    isDeleted: false,
    points,
  };
};

export const createElement = ({ elementType, pointerDownState, appState }) => {
  let element;
  if (elementType === "freedraw") {
    element = newElement({
      type: elementType,
      x: pointerDownState.origin.x,
      y: pointerDownState.origin.y,
      points: [[pointerDownState.origin.x, pointerDownState.origin.y]],
      strokeColor: appState.currentItemStrokeColor,
      backgroundColor: appState.currentItemBackgroundColor,
      fillStyle: appState.currentItemFillStyle,
      strokeWidth: appState.currentItemStrokeWidth,
      strokeStyle: rgb(),
    });
  } else {
    element = newElement({
      type: elementType,
      x: pointerDownState.origin.x,
      y: pointerDownState.origin.y,
      strokeColor: appState.currentItemStrokeColor,
      backgroundColor: appState.currentItemBackgroundColor,
      fillStyle: appState.currentItemFillStyle,
      strokeWidth: appState.currentItemStrokeWidth,
      strokeStyle: rgb(),
    });
  }

  return element;
};
