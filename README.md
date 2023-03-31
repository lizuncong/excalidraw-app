## 预研项

- 如何和安卓书写笔迹圆滑算法保持一致
- 如何和安卓笔锋算法保持一致
- 图形拖拽时如何保证能跟得上手速

## 影响 Canvas 性能的因素

- 绘制文本的开销是比较昂贵的
- 离屏渲染时，离屏 canvas 的尺寸要尽可能和正在绘制的图形尺寸一致。否则调用 drawImage 将离屏 canvas 绘制到目标 canvas 时，离屏 canvas 尺寸太大也会导致性能变差
- 尽可能少的改变 canvas 的状态，比如颜色。由于 canvas 元素是用[状态机实现](https://web.dev/canvas-performance/#avoid-unnecessary-canvas-state-changes)的，改变 canvas 状态开销昂贵
- 尽可能少的使用 shadowBlur

## 常见的 Canvas 性能优化手段

- 离屏 canvas + 缓存 + drawImage。每个元素都保存一份离屏的 canvas 缓存，下次绘制时将离屏 canvas 使用 drawImage 绘制到可见的 canvas 上
- offscreenCanvas
- 只绘制可视区域内的元素。
- 尝试使用 css 实现平移、缩放
- 缩放时可以使用当前缓存的 canvas 绘制，缩放动作完成后，再重新绘制元素
- 其他的可以看参考资料收集的手段
- 在使用 img 进行平移缩放时，需要提前绘制全量的元素并生成图片。在绘制元素时，以 1 倍图为基准绘制。因为如果绘制的图片太大，那么在平移缩放时还是会卡顿的

## 待完善

- 自由书写-平移。目前还没完善，有 bug，同时需要考虑结合无限画布实现
- 平移缩放性能
- 如果采用 offscreencanvas 在 worker 线程绘制，会比较卡顿，目前大概的原因是：
  - 由于主线程 static canvas 和 worker 线程的 OffscreenCanvas 保持频繁的传输导致每一帧都耗时较长

```js
canvasWorker = staticCanvas.transferControlToOffscreen();
worker.postMessage(
  {
    canvasWorker: canvasWorker,
    type: "init",
    ...params,
  },
  [canvasWorker]
);
```

- 主线程频繁给 worker 发送消息重绘也会导致卡顿，因此不能在平移拖拽时给 worker 线程发送消息

## 工具

- [chrome://gpu/](chrome://gpu/)。硬件加速报告，可以查看所有有硬件加速的元素。比如 canvas

## 白板 SVG 渲染方案

- [https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg/](https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg/)
- [https://github.com/ecomfe/zrender/pull/836](https://github.com/ecomfe/zrender/pull/836)
- [SVG 优化方案](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)
- [SVG 渲染性能优化方案](https://codepen.io/tigt/post/improving-svg-rendering-performance)
- [SVG 性能相关的](http://web.archive.org/web/20160310083016/https://www.mapbox.com/osmdev/2012/11/20/getting-serious-about-svg/)
- [SVG 中浏览器性能的一些考虑因素的比较分析](http://web.archive.org/web/20191220121231/https://www.svgopen.org/2007/papers/BrowserPerformanceMeasures/index.html)。
- [https://www.crmarsh.com/svg-performance/](https://www.crmarsh.com/svg-performance/)
- [高性能 svg](https://css-tricks.com/high-performance-svgs/)

## SVG 性能相关

- 加载慢是 SVG 的一个缺点

## 参考资料

- [canvas 基础](http://diveintohtml5.info/canvas.html)

- [https://web.dev/canvas-performance/](https://web.dev/canvas-performance/)。canvas 性能圣经

- [OffscreenCanvas — Speed up Your Canvas Operations with a Web Worker](https://developer.chrome.com/blog/offscreen-canvas/)

- [Offscreen Canvas Example](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker)

- [Offscreen Canvas Online Demo](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)

- [Optimizing your JavaScript game for Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

- [MDN: Optimizing canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)

- [https://github.com/excalidraw/excalidraw/issues/5192](https://github.com/excalidraw/excalidraw/issues/5192)

- [OffscreenCanvas 与 requestAnimationFrame](https://wiki.whatwg.org/wiki/OffscreenCanvas.requestAnimationFrame)

- [Excalidraw 官方博客](https://blog.excalidraw.com/)
