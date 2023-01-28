export const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = clientX - offsetLeft - scrollX;
  const y = clientY - offsetTop - scrollY;
  return { x, y };
};

export const distance = (x, y) => Math.abs(x - y);
let testIdBase = 0;

export const randomId = () => `id${testIdBase++}`;
