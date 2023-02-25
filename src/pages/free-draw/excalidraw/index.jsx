import React, { memo, useRef, useEffect } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "./index.less";
import initialData from './initialData'
import { generateExcalidrawElements } from '../draw-image/util'
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

const Index = memo(() => {
  const initialStatePromiseRef = useRef({ promise: null });
  if (!initialStatePromiseRef.current.promise) {
    initialStatePromiseRef.current.promise = resolvablePromise();
  }
  useEffect(() => {
    initialData.elements = generateExcalidrawElements()
    initialStatePromiseRef.current.promise.resolve(initialData);
  }, []);
  return (
    <div className="free-draw">
      <div className="container">
        <Excalidraw
          initialData={initialStatePromiseRef.current.promise}
        ></Excalidraw>
      </div>
    </div>
  );
});

export default Index;
