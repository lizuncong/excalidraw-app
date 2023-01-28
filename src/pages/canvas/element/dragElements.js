import { mutateElement } from './mutateElement'
export const dragNewElement = (
  draggingElement,
  elementType,
  originX,
  originY,
  x,
  y,
  width,
  height,
  shouldMaintainAspectRatio,
  shouldResizeFromCenter,
  widthAspectRatio
) => {
  let newX = x < originX ? originX - width : originX;
  let newY = y < originY ? originY - height : originY;
  if (width !== 0 && height !== 0) {
    mutateElement(draggingElement, {
      x: newX,
      y: newY,
      width,
      height,
    });
  }
};
