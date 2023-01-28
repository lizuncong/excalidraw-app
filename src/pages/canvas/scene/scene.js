class Scene {
  constructor() {
    this.elements = [];
  }
  getElementsIncludingDeleted() {
    return this.elements;
  }
  replaceAllElements(nextElements) {
    this.elements = nextElements;
  }
}

export default Scene;
