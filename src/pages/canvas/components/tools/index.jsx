import React, { memo } from "react";
import styles from "./index.module.less";
import { RectangleIcon, FreedrawIcon, ExportImageIcon } from "../icons";
import { exportPng } from "@/util/export";
import { scene } from "../../scene/scene";
import { appState } from "../../index";

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
    <>
      <div className={styles.tools}>
        <span
          className={[styles.item].join(" ")}
          onClick={() => {
            exportPng({
              elements: scene.getElementsIncludingDeleted(),
              appState
            });
          }}
        >
          {ExportImageIcon}
        </span>
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
    </>
  );
});

export default Index;
