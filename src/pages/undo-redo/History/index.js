import { deepCopyElement } from "./utils";

class History {
  constructor() {
    this.elementCache = {}; // { key: element}, key=`${element.id}-${element.versionNonce}`
    this.stateHistory = [];
    this.redoStack = [];
    this.lastEntry = null;
  }
  // appState只存储部分属性，并不是全部
  // 从历史记录中取出一个快照
  hydrateHistoryEntry({ appState, elements }) {
    return {
      appState: JSON.parse(appState),
      elements: elements.map((key) => {
        const element = this.elementCache[key];
        if (!element) {
          throw new Error(`Element not found: ${key}`);
        }
        return element;
      }),
    };
  }
  // 生成一个快照
  dehydrateHistoryEntry({ appState, elements }) {
    return {
      appState: JSON.stringify(appState),
      elements: elements.map((element) => {
        const { id, versionNonce } = element;
        this.elementCache[`${id}-${versionNonce}`] = deepCopyElement(element);
        return `${element.id}-${element.versionNonce}`;
      }),
    };
  }

  // 将当前state和elements生成一个快照，格式：{ appState: string, elements: [{id, versionNonce}] }
  generateEntry = (appState, elements) =>
    this.dehydrateHistoryEntry({
      appState,
      elements,
    });

  pushEntry(appState, elements) {
    const newEntryDehydrated = this.generateEntry(appState, elements);
    this.stateHistory.push(newEntryDehydrated);
    this.clearRedoStack();
  }

  clearRedoStack() {
    this.redoStack.splice(0, this.redoStack.length);
  }

  redoOnce() {
    if (this.redoStack.length === 0) {
      return null;
    }

    const entryToRestore = this.redoStack.pop();

    if (entryToRestore !== undefined) {
      this.stateHistory.push(entryToRestore);
      return this.hydrateHistoryEntry(entryToRestore);
    }

    return null;
  }

  undoOnce() {
    if (this.stateHistory.length === 1) {
      return null;
    }

    const currentEntry = this.stateHistory.pop();

    const entryToRestore = this.stateHistory[this.stateHistory.length - 1];

    if (currentEntry !== undefined) {
      this.redoStack.push(currentEntry);
      return this.hydrateHistoryEntry(entryToRestore);
    }

    return null;
  }

  record(state, elements) {
    console.log("开始记录。。。。");
    this.pushEntry(state, elements);
    console.log("记录完成...", this);
  }
  clear() {
    this.stateHistory.length = 0;
    this.redoStack.length = 0;
    this.lastEntry = null;
    this.elementCache.clear();
  }
}

export default History;
