self.onmessage = function (msg) {
  const aBuf = msg.data.aBuf;
  console.log(
    "%cfrom worker, PRE send back aBuf.byteLength:",
    "color: green;",
    aBuf.byteLength
  );

  self.postMessage(
    {
      aBuf: aBuf,
    },
    // [aBuf]
  );

  console.log(
    "%cfrom worker, POST send back aBuf.byteLength:",
    "color: green",
    aBuf.byteLength
  );
};
