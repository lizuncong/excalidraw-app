import { randomId } from "@/util";
const _newElementBase = (
  type,
  {
    x,
    y,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    roughness,
    opacity,
    width = 0,
    height = 0,
    angle = 0,
    ...rest
  }
) => {
  const element = {
    id: randomId(),
    type,
    x,
    y,
    width,
    height,
    angle,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    roughness,
    opacity,
  };
  return element;
};
export const normalizeText = (text) => {
  return text.replace(/\t/g, "        ").replace(/\r?\n|\r/g, "\n");
};
// export const measureText = (
//   text,
//   font,
//   maxWidth,
// ) => {
//   text = text
//     .split("\n")
//     // replace empty lines with single space because leading/trailing empty
//     // lines would be stripped from computation
//     .map((x) => x || " ")
//     .join("\n");
//   const container = document.createElement("div");
//   container.style.position = "absolute";
//   container.style.whiteSpace = "pre";
//   container.style.font = font;
//   container.style.minHeight = "1em";
//   if (maxWidth) {
//     const lineHeight = getApproxLineHeight(font);
//     container.style.maxWidth = `${String(maxWidth)}px`;
//     container.style.overflow = "hidden";
//     container.style.wordBreak = "break-word";
//     container.style.lineHeight = `${String(lineHeight)}px`;
//     container.style.whiteSpace = "pre-wrap";
//   }
//   document.body.appendChild(container);
//   container.innerText = text;

//   const span = document.createElement("span");
//   span.style.display = "inline-block";
//   span.style.overflow = "hidden";
//   span.style.width = "1px";
//   span.style.height = "1px";
//   container.appendChild(span);
//   // Baseline is important for positioning text on canvas
//   const baseline = span.offsetTop + span.offsetHeight;
//   // Since span adds 1px extra width to the container
//   const width = container.offsetWidth + 1;
//   const height = container.offsetHeight;

//   document.body.removeChild(container);
//   return { width, height, baseline };
// };
export const newTextElement = (opts) => {
  const text = normalizeText(opts.text);
    // const metrics = measureText(text, getFontString(opts));
  //   const offsets = getTextElementPositionOffsets(opts, metrics);
  const textElement = {
    ..._newElementBase("text", opts),
    text,
    fontSize: opts.fontSize,
    fontFamily: opts.fontFamily,
    textAlign: opts.textAlign,
    verticalAlign: opts.verticalAlign,
    // x: opts.x - offsets.x,
    // y: opts.y - offsets.y,
    // width: metrics.width,
    // height: metrics.height,
    // baseline: metrics.baseline,
    containerId: opts.containerId || null,
    originalText: text,
  };

  return textElement;
};

export const getFontString = ({ fontSize, fontFamily }) => {
  return `${fontSize}px ${fontFamily}, Segoe UI Emoji`;
};
