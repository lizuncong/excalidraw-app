var myWorker = new Worker("myWorker.js");

function handleMessageFromWorker(msg) {
  console.log(`%c接收线程的消息`, "color: red;", msg.data.aBuf);
}

myWorker.addEventListener("message", handleMessageFromWorker);

var arrBuf = new ArrayBuffer(8);
console.info("%c传输前，arrBuf.byteLength:", "color: red;", arrBuf, arrBuf.byteLength);

myWorker.postMessage(
  {
    aBuf: arrBuf,
  },
  [arrBuf]
);
arrBuf[7] = 2;
console.info("%c传输后，arrBuf.byteLength:", "color: red;", arrBuf, arrBuf.byteLength);
