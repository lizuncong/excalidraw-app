const MIN_ZOOM = 0.1;

export const getNormalizedZoom = (zoom) => {
  return Math.max(MIN_ZOOM, Math.min(zoom, 30));
};

export const getStateForZoom = (
  { viewportX, viewportY, nextZoom },
  appState
) => {
  const screenX = viewportX - appState.offsetLeft;
  const screenY = viewportY - appState.offsetTop;
  const currentZoom = appState.zoom.value;

  return {
    scrollX: appState.scrollX + screenX / nextZoom - screenX / currentZoom,
    scrollY: appState.scrollY + screenY / nextZoom - screenY / currentZoom,
    zoom: {
      value: nextZoom,
    },
  };
};
