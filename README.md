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
- 等等。可以看参考资料收集的手段

## 待完善

- 自由书写-平移。目前还没完善，有 bug，同时需要考虑结合无限画布实现
- 平移缩放性能

## 工具

- [chrome://gpu/](chrome://gpu/)。硬件加速报告，可以查看所有有硬件加速的元素。比如 canvas

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
