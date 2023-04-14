import { renderScene as renderSceneSvg } from "./svg/renderScene";
import {
  deleteElementCache as deleteElementCacheSvg,
  clearElementCache as clearElementCacheSvg,
} from "./svg/renderElement";

import { renderScene as renderSceneCanvas } from "./canvas2D/renderScene";
import {
  deleteElementCache as deleteElementCacheCanvas,
  clearElementCache as clearElementCacheCanvas,
} from "./canvas2D/renderElement";

export const renderScene = (config) => {
  console.log('renderScene...', config.renderEngine)
  if (config.renderEngine === "svg") {
    renderSceneSvg(config);
  } else {
    renderSceneCanvas(config);
  }
};

export const deleteElementCache = (element) => {
  deleteElementCacheSvg(element);
  deleteElementCacheCanvas(element);
};

export const clearElementCache = () => {
  clearElementCacheSvg();
  clearElementCacheCanvas();
};
