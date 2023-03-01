class Scene {
  constructor() {
    const elements = JSON.parse(localStorage.getItem('elements'))
    this.elements = elements || [];
  }
  getElementsIncludingDeleted() {
    return this.elements;
  }
  replaceAllElements(nextElements) {
    this.elements = nextElements;
  }
}

export default Scene;
