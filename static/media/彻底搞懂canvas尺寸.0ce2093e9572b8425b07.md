## 前言

- 当没有设置宽度和高度时，canvas 会初始化宽度为 300px 和高度为 150px
- 可以使用 CSS 来定义 canvas 大小，但在绘制时 canvas 会伸缩以适应它的框架尺寸：如果 CSS 的尺寸与初始画布的比例不一致，它会出现扭曲。

在本例中，我使用一个 `100px * 100px` 的红色正方形作为参照物。同时绘制了一条 1px 的线。如下图所示：

![image](../excalidraw-app/size-01.jpg)

代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>Canvas尺寸</title>
    <style>
      .refer {
        width: 100px;
        height: 100px;
        background-color: red;
      }
      .border {
        border-top: 1px solid red;
        margin: 10px 0;
      }
    </style>
  </head>

  <body>
    <div id="root">
      <div class="refer">参照物</div>
      <div class="border"></div>
    </div>
  </body>
</html>
```

## canvas 默认尺寸

我们先来看下，canvas 默认尺寸下，我们绘制的图形的尺寸有什么影响。

当没有设置宽度和高度时，canvas 会初始化宽度为 300px 和高度为 150px。此时，我们在 canvas 上绘制的图形尺寸和预期是一致的。比如绘制一个 `100px * 100px`的正方形，这个正方形的大小看起来就应该和我们的参照物(背景色红色的正方形)一样

这里我们添加一个 canvas，并在上面绘制一个 `100px * 100px` 的正方形

```html
<style>
  .canvas {
    border: 1px solid black;
  }
</style>
<body>
  <div id="root">
    <div class="refer">参照物</div>
    <div class="border"></div>
    <canvas id="canvas" class="canvas"> 绘制canvas </canvas>
  </div>
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, 100, 100);
  </script>
</body>
```

效果如下

![image](../excalidraw-app/size-02.jpg)

可以看到，在默认尺寸的画布中，我们绘制的图形尺寸是符合我们预期的，即大小正常。

注意，`ctx.strokeRect(0.5, 0.5, 100, 100);`是在`(0.5, 0.5)`坐标处开始绘制，而不是`(0,0)`，
如果改成`ctx.strokeRect(0, 0, 100, 100);`，那么边框就会变得模糊

![image](../excalidraw-app/size-03.jpg)

具体原因可以看[canvas 线宽](#/base/style)

## 通过 css 设置 canvas 尺寸

可以使用 CSS 来定义 canvas 大小，但在绘制时 canvas 会伸缩以适应它的框架尺寸：如果 CSS 的尺寸与初始画布的比例不一致，它会出现扭曲。从而导致绘制的图形变形

继续使用上面的 demo 绘制同样的矩形，这次我们使用 css 给 canvas 设置宽高

```html
<style>
  .canvas {
    width: 600px;
    height: 600px;
    border: 1px solid black;
  }
</style>
<body>
  <div id="root">
    <div class="refer">参照物</div>
    <div class="border"></div>
    <canvas id="canvas" class="canvas"> 绘制canvas </canvas>
  </div>
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, 100, 100);
  </script>
</body>
```

效果如下

![image](../excalidraw-app/size-04.jpg)

### 分析

canvas 默认尺寸是宽 300 高 150，这里我们设置的尺寸是宽高都是 600。因此 canvas 在水平方向拉伸 2 倍，垂直方向拉伸 4 倍。反应到绘图中，就是我们原本的`100px * 100px`的矩形，就变成了 `200px * 400px`的矩形

## 如何正确设置 canvas 尺寸

如果需要通过 css 设置 canvas 尺寸，同时还要保证绘制的图形不变形，那么可以将 canvas 的 width 和 height 设置成相应的 css 宽度和高度，这样绘制出来的图形不会变形

```html
<style>
  .canvas {
    width: 600px;
    height: 600px;
    border: 1px solid black;
  }
</style>
<body>
  <div id="root">
    <div class="refer">参照物</div>
    <div class="border"></div>
    <canvas id="canvas" class="canvas"> 绘制canvas </canvas>
  </div>
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;
    // 重点
    canvas.width = offsetWidth;
    canvas.height = offsetHeight;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, 100, 100);
  </script>
</body>
```

效果如下：

![image](../excalidraw-app/size-05.jpg)

## 使用 window.devicePixelRatio 矫正 canvas 分辨率

先看下面的例子：

```html
<style>
  .canvas {
    width: 600px;
    height: 600px;
    border: 1px solid black;
  }
</style>
<body>
  <div id="root">
    <div class="refer">参照物</div>
    <div class="border"></div>
    <canvas id="canvas" class="canvas"> 绘制canvas </canvas>
  </div>
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;

    canvas.width = offsetWidth;
    canvas.height = offsetHeight;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 1;

    ctx.lineTo(300, 150);
    ctx.stroke();
  </script>
</body>
```

![image](../excalidraw-app/size-06.jpg)

可以看出绘制出来的图形和线段非常模糊。这是因为 canvas 在绘制的时候是按照 css 像素来绘制的，比如这里矩形就实际绘制了 100 个像素。而在高分辨率的屏幕中，这需要额外的实际像素绘制，比如在 window.devicePixelRatio = 2 的屏幕中，实际需要 canvas 绘制 200px 的像素。

因此我们需要矫正 canvas 分辨率。

按照[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)的定义，Window 接口的 devicePixelRatio 返回当前显示设备的物理像素分辨率与 CSS 像素分辨率之比。此值也可以解释为像素大小的比率：一个 CSS 像素的大小与一个物理像素的大小。简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个 CSS 像素。

以我的电脑为例，window.devicePixelRatio 的值为 2，即浏览器需要使用 2 个屏幕实际像素来绘制单个 css 像素。看下面的例子：

```html
<style>
  .canvas {
    width: 600px;
    height: 600px;
    border: 1px solid black;
  }
</style>
<body>
  <div id="root">
    <div class="refer">参照物</div>
    <div class="border"></div>
    <canvas id="canvas" class="canvas"> 绘制canvas </canvas>
  </div>
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;

    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 1;

    ctx.lineTo(300, 150);
    ctx.stroke();
  </script>
</body>
```

效果如下：

![image](../excalidraw-app/size-07.jpg)

## 结论

在使用 canvas 绘制图形时，需要使用 window.devicePixelRatio 矫正 canvas 分辨率，这样绘制出来的图形尺寸正确、清晰。
