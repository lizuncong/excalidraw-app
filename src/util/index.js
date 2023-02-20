export const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = clientX - offsetLeft - scrollX;
  const y = clientY - offsetTop - scrollY;
  return { x, y };
};
