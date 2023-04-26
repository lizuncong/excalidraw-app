## 和 excalidraw 的对比

目前，在以下方面，我们的实现已经超越了 excalidraw

- 更新。excalidraw 在 react 的`componentDidUpdate` 生命周期方法中调用`renderScene`进行更新，这会导致频繁的触发更新。而在我的实现中，我将 canvas 的绘制和 react 的更新分开，绘制 canvas 不会导致 react 更新，react 的更新也不会导致 canvas 更新

- 性能。excalidraw 只运用了点稀释、离屏 canvas 及缓存这两个技术进行性能优化，优化效果较差。而在这个的基础上，我们还使用了双层 canvas、offscreenCanvas 等技术进行优化

- 文本。canvas 绘制文本的难度在于多行文本的绘制。此时需要确定文本在哪里换行，同时需要知道行高等属性。而在 excalidraw 的实现中，是在每次输入时，都调用 canvas 的 measureText 获取文本的宽度，并判断文本宽度和容器宽度的大小，如果超过容器宽度，则手动插入换行符，整体的实现需要上千行代码，同时性能较差。而在我们的实践中，我使用了一个 textarea 和一个具有 contentEditable 属性的隐藏 div 就实现了这个效果，整体实现非常简单同时性能优势明显

- 协同。excalidraw 内部在实现元素广播时，会遍历全部元素并根据版本号判断哪些元素改变了，并将改变的元素增量广播到其他端。在 diff 元素时，元素量大的情况下还是会耗时。理论上，我们可以获取到当前编辑的元素广播即可，而不需要全部遍历并 diff，这点有优化空间

## excalidraw 撤销重做设计缺陷

被调用的 API：

- this.history.resumeRecording()，调用的地方：

  - 1.syncActionResult
  - 2.在 addElementsFromPasteOrLibrary 函数中，调用 this.scene.replaceAllElements(nextElements)方法后紧接着调用 this.history.resumeRecording();
  - 3.addTextFromPaste 中，调用 this.scene.replaceAllElements 方法后调用 this.history.resumeRecording
  - 4.在 updateScene 方法中，调用 this.history.resumeRecording()然后更新 elements，appState

- this.history.setCurrentState()，调用的地方：

  - 1.在 syncActionResult 方法中这样调用：this.setState(() => {}, () => { this.history.setCurrentState()})

- this.history.clear()
- this.history.record() 在 componentdidupdate 中，调用 this.renderScene()方法之后调用 this.history.record

综上，可以得出几点信息：

- 1.改变元素时需要保存操作记录
- 2.改变 appState 时需要保存操作记录
- 3.excalidraw 将保存操作记录放在了 componentDidUpdate 生命周期中，可以说这是 excalidraw 设计上的一大缺陷。因为这会存在一个很大的问题
  即每次组件更新，都会执行这个 componentDidUpdate 方法，但是有些操作并不需要记录在历史记录中，比如切换工具栏会触发组件更新但不需要记录在
  历史记录中。那 excalidraw 如何解决这个问题？实际上，通过上面 API 的调用可以看出，在元素改变或者 appState 改变时，excalidraw 都会同步调用
  this.history.resumeRecording()方法标记当前更新需要保存记录。下面是 resumeRecording 以及 record 方法的源码：

```js
resumeRecording() {
  this.recording = true;
}
```

然后在 componentDidupdate 方法中调用 record 去记录操作。record 方法里面又会判断是否真的需要记录

```js
record(state: AppState, elements: readonly ExcalidrawElement[]) {
  if (this.recording) {
    this.pushEntry(state, elements);
    this.recording = false;
  }
}
```

这种设计给开发带来很大的心智成本，即开发需要时刻关注哪些操作需要记入历史记录。

思考：实际上，我们触发 canvas 更新时，才需要记录操作记录。因此是否可以将 record 方法放在 renderScene 绘制画布完成后的回调中,

同时 renderScene 不要依赖 componentDidUpdate
