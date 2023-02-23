export const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = clientX - offsetLeft - scrollX;
  const y = clientY - offsetTop - scrollY;
  return { x, y };
};

//rgb颜色随机
export const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
