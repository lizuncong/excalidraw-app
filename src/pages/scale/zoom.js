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

  // get original scroll position without zoom
    const baseScrollX = appState.scrollX + (appLayerX - appLayerX / currentZoom);
//   const baseScrollX =
//     appState.scrollX  - appLayerX / currentZoom  + appLayerX / nextZoom;

  const baseScrollY = appState.scrollY + (appLayerY - appLayerY / currentZoom);

  // get scroll offsets for target zoom level
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
