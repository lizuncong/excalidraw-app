import { useEffect } from "react";
import { getCenter, getDistance } from "@/util/gesture";
import { getNormalizedZoom, getStateForZoom } from "@/util/zoom";

const gesture = {
  pointers: new Map(),
  lastCenter: null,
  initialDistance: null,
  initialScale: null,
};

export const useGesture = (canvasRef, appState) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const onTouchEnd = (event) => {
      if (!event.touches.length) {
        gesture.pointers.clear();
      }
    };
    canvas.addEventListener("touchend", onTouchEnd);
    return () => {
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [canvasRef]);
  const removePointer = (event) => {
    gesture.pointers.delete(event.pointerId);
  };
  const updateGestureOnPointerDown = (event) => {
    gesture.pointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });

    if (gesture.pointers.size === 2) {
      gesture.lastCenter = getCenter(gesture.pointers);
      gesture.initialScale = appState.zoom.value;
      gesture.initialDistance = getDistance(
        Array.from(gesture.pointers.values())
      );
    }
  };
  const handleCanvasPointerMove = (event, callback) => {
    if (gesture.pointers.has(event.pointerId)) {
      gesture.pointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
    }
    const initialScale = gesture.initialScale;

    if (
      gesture.pointers.size === 2 &&
      gesture.lastCenter &&
      initialScale &&
      gesture.initialDistance
    ) {
      const center = getCenter(gesture.pointers);
      const deltaX = center.x - gesture.lastCenter.x;
      const deltaY = center.y - gesture.lastCenter.y;
      gesture.lastCenter = center;

      const distance = getDistance(Array.from(gesture.pointers.values()));
      const scaleFactor = distance / gesture.initialDistance;

      const nextZoom = scaleFactor
        ? getNormalizedZoom(initialScale * scaleFactor)
        : appState.zoom.value;
      const zoomState = getStateForZoom(
        {
          viewportX: center.x,
          viewportY: center.y,
          nextZoom,
        },
        appState
      );
      Object.assign(appState, {
        zoom: zoomState.zoom,
        scrollX: zoomState.scrollX + deltaX / nextZoom,
        scrollY: zoomState.scrollY + deltaY / nextZoom,
      });
      callback();
    } else {
      gesture.lastCenter =
        gesture.initialDistance =
        gesture.initialScale =
          null;
    }
  };
  return {
    gesture,
    removePointer,
    updateGestureOnPointerDown,
    handleCanvasPointerMove,
  };
};
