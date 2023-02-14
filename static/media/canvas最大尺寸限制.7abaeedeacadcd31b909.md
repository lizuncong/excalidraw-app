## canvas 最大尺寸限制

根据 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas#%E6%9C%80%E5%A4%A7%E7%9A%84%E7%94%BB%E5%B8%83%E5%B0%BA%E5%AF%B8)的说法，canvas 是有尺寸限制的。如下图所示

![image](../excalidraw-app/max-size-01.jpg)

不同浏览器，不同设备(比如 pc 端和移动端)，canvas 的最大限制不同。实际上上面的表格并不准确，但可以参考。至少通过这个表格，我们知道 canvas 还是会有尺寸限制的。下面以 pc 端 chrome 为例

## canvas 最大尺寸

以下面的代码为例：

```jsx
function Index() {
  const canvasRef = useRef(null);
  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      canvas.width = 40000;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 300, 300);
      console.log(canvas.toDataURL());
    } catch (e) {
      console.log("error===", e);
    }
  }, []);
  return (
    <canvas ref={canvasRef} className="canvas">
      绘制canvas
    </canvas>
  );
}
```

当我们设置`canvas.width = 40000`，`canvas.height = 1000`时，此时 canvas 正常绘制，控制台输出正常
![image](../excalidraw-app/max-size-02.jpg)

但是当我们将 `canvas.width` 设置成`400000`，`canvas.height`设置成`1000`时，canvas 就不能正常绘制了。同时`canvas.toDataURL()`输出来的内容为空
![image](../excalidraw-app/max-size-03.jpg)

可以看到，canvas 确实是有最大尺寸限制的，但具体是面积限制(width \* height)，还是宽度或者高度限制呢？

## 最大宽度

其实 canvas 是有最大宽度限制的，以下面的例子为例，我当前 pc 端 chrome 浏览器，canvas 的最大宽度是`65535`，这是我试出来的。

```jsx
useEffect(() => {
  try {
    const canvas = canvasRef.current;
    canvas.width = 65535;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 300);
    console.log(canvas.toDataURL());
  } catch (e) {
    console.log("error===", e);
  }
}, []);
```

绘制结果如下

![image](../excalidraw-app/max-size-04.jpg)

如果我们将 canvas.width 设置成 65536，即加了一个像素，则 canvas 就不能正常绘制

![image](../excalidraw-app/max-size-05.jpg)

## 最大高度

这里将 canvas.width 设置成 1，将 canvas.height 设置成 65535

```jsx
useEffect(() => {
  try {
    const canvas = canvasRef.current;
    canvas.width = 1;
    canvas.height = 65535;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 300);
    console.log(canvas.toDataURL());
  } catch (e) {
    console.log("error===", e);
  }
}, []);
```

可以看出，canvas 还是能正常绘制的

![image](../excalidraw-app/max-size-06.jpg)

如果我们将 canvas.height 加一个像素，即设置成 `65536`，canvas 就不能正常绘制了

![image](../excalidraw-app/max-size-07.jpg)

注意，有些浏览器中，canvas 绘制超出最大尺寸，是不会有任何提示的，canvas 上也不会有任何东西。但是在 chrome，比如我的电脑上，canvas 绘制超出最大尺寸，会显示一个哭脸，如下图所示：

![image](../excalidraw-app/max-size-08.jpg)

## 小结

综上所述，canvas 有最大宽度和最大高度的限制。一般情况下，最大宽度和最大高度的限制是一样的，即 maxWidth 和 maxHeight 一般情况下是相同的。比如上例中，最大宽度和最大高度都是 65535

## 最大绘制面积

上面已经确定 canvas 的最大宽度和最大高度都是 65535，那 canvas 最大绘制面积是不是 `65535 * 65535` 呢？

```jsx
useEffect(() => {
  try {
    const canvas = canvasRef.current;
    canvas.width = 65535;
    canvas.height = 65535;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 300);
    console.log(canvas.toDataURL());
  } catch (e) {
    console.log("error===", e);
  }
}, []);
```

结果如下
![image](../excalidraw-app/max-size-09.jpg)

显然，canvas 的最大绘制面积并不能简单的用`最大宽度 * 最大高度`计算。实际上，在我电脑中，最大绘制面积是 `268496894`

```jsx
useEffect(() => {
  try {
    const canvas = canvasRef.current;
    const sum = 268496894;
    canvas.width = 65535;
    canvas.height = sum / canvas.width;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 300);
    console.log(canvas.toDataURL());
  } catch (e) {
    console.log("error===", e);
  }
}, []);
```

可以看出 canvas 能正常绘制
![image](../excalidraw-app/max-size-10.jpg)

如果 sum 加一个像素，即`268496895`，canvas 就没法正常绘制了
![image](../excalidraw-app/max-size-11.jpg)

## 如何判断 canvas 超出了最大绘制面积？

可以使用下面的方法判断给定的宽高是否超出了 canvas 的最大绘制限制尺寸

```js
const isCanvasExceedsMaximumSize = (width, height) => {
  const testCvs = document.createElement("canvas");
  testCvs.width = width;
  testCvs.height = height;
  const testCtx = testCvs.getContext("2d");
  testCtx.fillRect(width - 1, height - 1, 1, 1);

  const cropCvs = document.createElement("canvas");
  cropCvs.width = 1;
  cropCvs.height = 1;
  const cropCtx = cropCvs.getContext("2d");
  cropCtx.drawImage(testCvs, width - 1, height - 1, 1, 1, 0, 0, 1, 1);

  const isTestPass = cropCtx && cropCtx.getImageData(0, 0, 1, 1).data[3] !== 0;

  if (isTestPass) {
    console.log(`canvas绘制正常，宽度：${width}，高度：${height}`);
  } else {
    console.error(
      `canvas绘制超出最大尺寸限制，宽度：${width}，高度：${height}`
    );
  }
  return isTestPass;
};
const sum = 268496894;
const width = 65535;

isCanvasExceedsMaximumSize(width, sum / width);

isCanvasExceedsMaximumSize(width, (sum + 1) / width);
```

## 如何确定 canvas 的最大高度、最大宽度、最大绘制面积？
