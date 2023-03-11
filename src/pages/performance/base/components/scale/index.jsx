import React, { memo } from "react";
import { ZoomInIcon, ZoomOutIcon } from "../icons";
import { getNormalizedZoom } from "@/util/zoom";
import styles from "./index.module.less";

const ZOOM_STEP = 0.1;
const Scale = memo(({ appState, onZoomChange }) => {
  const zoomValue = `${(appState.zoom.value * 100).toFixed(0)}%`;

  return (
    <div className={styles.scale}>
      <span
        className={[styles.item].join(" ")}
        onClick={() =>
          onZoomChange(getNormalizedZoom(appState.zoom.value - ZOOM_STEP))
        }
      >
        {ZoomOutIcon}
      </span>
      <span
        className={styles.value}
        onClick={() => onZoomChange(getNormalizedZoom(1))}
      >
        {zoomValue}
      </span>
      <span
        className={[styles.item].join(" ")}
        onClick={() =>
          onZoomChange(getNormalizedZoom(appState.zoom.value + ZOOM_STEP))
        }
      >
        {ZoomInIcon}
      </span>
    </div>
  );
});

export default Scale;
