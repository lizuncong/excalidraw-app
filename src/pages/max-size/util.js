import { isCanvasExceedsMaximumSize } from "./index";
const resolvablePromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
};
const areaPromise = resolvablePromise();
let areaCount = 0;
var channel = new MessageChannel();
var port = channel.port2;
channel.port1.onmessage = workLoop;

const yieldInterval = 5; // 单位毫秒
let maxWidth = 0;
let max = maxWidth * 1000;
let min = maxWidth;
let maxHeight = 0;
function workLoop() {
  const currentEventStartTime = new Date().getTime();

  while (min < max) {
    areaCount++;
    if (areaCount > 1000) {
      // 加个阀值，防止死循环，返回0表示算法错误导致获取失败
      return 0;
    }
    const height = Math.floor(max / maxWidth);
    // console.log("finding...", height, max, min);

    if (isCanvasExceedsMaximumSize(maxWidth, height)) {
      maxHeight = Math.min(height, maxHeight);
      max = parseInt((min + max) / 2);
    } else {
      min = max;
      max = Math.min(max * 2, maxWidth * maxHeight);
    }
    // 执行完当前工作，则判断时间是否超过5ms，如果超过，则退出while循环
    if (new Date().getTime() - currentEventStartTime > yieldInterval) {
      // console.log("break...", new Date().getTime() - currentEventStartTime);
      // 执行耗时超过了5ms，结束本轮事件，主动让出控制权给浏览器绘制页面或者执行其他操作
      break;
    }
  }
  // 如果还有剩余的工作，则放到下一个事件中处理
  if (min < max) {
    port.postMessage(null);
  } else {
    areaPromise.resolve({ max, areaCount });
  }
}

export const getMaxArea = (maxW) => {
  max = maxW * 10;
  min = maxW;
  maxWidth = maxW;
  maxHeight = maxW;
  port.postMessage(null);
  return areaPromise.then((res) => {
    console.log(`最大面积：${res.max}，尝试了${areaCount}次`);
    return Promise.resolve(res)
  });
};
