import React, { memo } from "react";
import { ZoomInIcon, ZoomOutIcon } from "../icons";
import styles from "./index.module.less";

const Scale = memo(() => {
  return (
    <div className={styles.scale}>
      <span className={[styles.item].join(" ")} onClick={() => {}}>
        {ZoomOutIcon}
      </span>
      <span className={styles.value}>
        100%
      </span>
      <span className={[styles.item].join(" ")} onClick={() => {}}>
        {ZoomInIcon}
      </span>
    </div>
  );
});

export default Scale;
