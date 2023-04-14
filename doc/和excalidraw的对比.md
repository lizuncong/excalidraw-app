## 和 excalidraw 的对比

目前，在以下方面，我们的实现已经超越了 excalidraw

- 更新。excalidraw 在 react 的`componentDidUpdate` 生命周期方法中调用`renderScene`进行更新，这会导致频繁的触发更新。而在我的实现中，我将 canvas 的绘制和 react 的更新分开，绘制 canvas 不会导致 react 更新，react 的更新也不会导致 canvas 更新

- 性能。excalidraw 只运用了点稀释、离屏 canvas 及缓存这两个技术进行性能优化，优化效果较差。而在这个的基础上，我们还使用了双层 canvas、offscreenCanvas 等技术进行优化

- 文本。canvas 绘制文本的难度在于多行文本的绘制。此时需要确定文本在哪里换行，同时需要知道行高等属性。而在 excalidraw 的实现中，是在每次输入时，都调用 canvas 的 measureText 获取文本的宽度，并判断文本宽度和容器宽度的大小，如果超过容器宽度，则手动插入换行符，整体的实现需要上千行代码，同时性能较差。而在我们的实践中，我使用了一个 textarea 和一个具有 contentEditable 属性的隐藏 div 就实现了这个效果，整体实现非常简单同时性能优势明显

- 协同。excalidraw 内部在实现元素广播时，会遍历全部元素并根据版本号判断哪些元素改变了，并将改变的元素增量广播到其他端。在 diff 元素时，元素量大的情况下还是会耗时。理论上，我们可以获取到当前编辑的元素广播即可，而不需要全部遍历并 diff，这点有优化空间
