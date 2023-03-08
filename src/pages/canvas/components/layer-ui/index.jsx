import React, { memo } from "react";
import Tools from "../tools";
import Scale from "../scale";
import styles from "./index.module.less";
const LayerUI = memo(({ activeTool, onActiveToolChange }) => {
  return (
    <div className={styles.layer}>
      <Scale />
      <Tools activeTool={activeTool} onActiveToolChange={onActiveToolChange} />
    </div>
  );
});

export default LayerUI;
