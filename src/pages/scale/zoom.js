const MIN_ZOOM = 0.1;

export const getNormalizedZoom = (zoom) => {
  return Math.max(MIN_ZOOM, Math.min(zoom, 30));
};

export const getStateForZoom = (
  { viewportX, viewportY, nextZoom },
  appState
) => {
  const appLayerX = viewportX - appState.offsetLeft;
  const appLayerY = viewportY - appState.offsetTop;

  const currentZoom = appState.zoom.value;

  const baseScrollX = appState.scrollX + (appLayerX - appLayerX / currentZoom);
  const baseScrollY = appState.scrollY + (appLayerY - appLayerY / currentZoom);

  const zoomOffsetScrollX = -(appLayerX - appLayerX / nextZoom);
  const zoomOffsetScrollY = -(appLayerY - appLayerY / nextZoom);

  return {
    scrollX: baseScrollX + zoomOffsetScrollX,
    scrollY: baseScrollY + zoomOffsetScrollY,
    zoom: {
      value: nextZoom,
    },
  };
};


// 原理可以看下面这个代码。
// export const getStateForZoom = (
//   { viewportX, viewportY, nextZoom },
//   appState
// ) => {
//   const screenX = viewportX - appState.offsetLeft;
//   const screenY = viewportY - appState.offsetTop;

//   const currentZoom = appState.zoom.value;


//   return {
//     scrollX: appState.scrollX + screenX / nextZoom - screenX / currentZoom,
//     scrollY: appState.scrollY + screenY / nextZoom - screenY / currentZoom,
//     zoom: {
//       value: nextZoom,
//     }, 
//   };
// };
