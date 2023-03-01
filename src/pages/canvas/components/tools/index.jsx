import React, { memo } from "react";
import styles from "./index.module.less";
import { RectangleIcon, FreedrawIcon } from "../icons";
const SHAPES = [
  {
    type: "rectangle",
    icon: RectangleIcon,
  },
  {
    type: "freedraw",
    icon: FreedrawIcon,
  },
];
const Index = memo(({ activeTool, onActiveToolChange }) => {
  return (
    <div className={styles.tools}>
      {SHAPES.map((shape) => (
        <span
          key={shape.type}
          className={[
            styles.item,
            activeTool.type === shape.type && styles.selected,
          ].join(" ")}
          onClick={() => onActiveToolChange({ type: shape.type })}
        >
          {shape.icon}
        </span>
      ))}
    </div>
  );
});

export default Index;
