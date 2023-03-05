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

export const newTextElement = (opts) => {
  const textElement = {
    type: "text",
    text: opts.text,
    fontSize: opts.fontSize,
    fontFamily: opts.fontFamily,
    textAlign: opts.textAlign,
    verticalAlign: opts.verticalAlign,
    // x: opts.x - offsets.x,
    // y: opts.y - offsets.y,
    // width: metrics.width,
    // height: metrics.height,
    // baseline: metrics.baseline,
    containerId: opts.containerId || null,
    originalText: opts.text,
    ...opts,
  };

  return textElement;
};
