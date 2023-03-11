import React, { memo } from "react";
import Tools from "../tools";
import Scale from "../scale";
import styles from "./index.module.less";
const LayerUI = memo(
  ({ activeTool, onActiveToolChange, appState, onZoomChange }) => {
    return (
      <div className={styles.layer}>
        <Scale appState={appState} onZoomChange={onZoomChange} />
        <Tools
          activeTool={activeTool}
          onActiveToolChange={onActiveToolChange}
        />
        <div className={styles.boundceBall}>
          <div className={styles.ball_red}></div>
          <div className={styles.shadowball}></div>
        </div>
      </div>
    );
  }
);

export default LayerUI;
