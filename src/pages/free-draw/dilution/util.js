import { unstable_batchedUpdates } from "react-dom";
export const throttleRAF = (
  fn,
  opts,
) => {
  let timerId = null;
  let lastArgs= null;
  let lastArgsTrailing = null;

  const scheduleFunc = (args) => {
    timerId = window.requestAnimationFrame(() => {
      timerId = null;
      fn(...args);
      lastArgs = null;
      if (lastArgsTrailing) {
        lastArgs = lastArgsTrailing;
        lastArgsTrailing = null;
        scheduleFunc(lastArgs);
      }
    });
  };

  const ret = (...args) => {
    if (process.env.NODE_ENV === "test") {
      fn(...args);
      return;
    }
    lastArgs = args;
    if (timerId === null) {
      scheduleFunc(lastArgs);
    } else if (opts?.trailing) {
      lastArgsTrailing = args;
    }
  };
  ret.flush = () => {
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
    if (lastArgs) {
      fn(...(lastArgsTrailing || lastArgs));
      lastArgs = lastArgsTrailing = null;
    }
  };
  ret.cancel = () => {
    lastArgs = lastArgsTrailing = null;
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
  };
  return ret;
};
export const withBatchedUpdatesThrottled = (func) => {
  return throttleRAF(((event) => {
    unstable_batchedUpdates(func, event);
  }));
}