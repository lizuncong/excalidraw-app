const createUndoableCounter = () => {
  let history = [0];
  let position = 0;

  return {
    value() {
      return history[position];
    },

    _setValue(value) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }
      history.push(value);
      position += 1;
    },

    increment() {
      this._setValue(this.value() + 1);
    },

    decrement() {
      this._setValue(this.value() - 1);
    },

    undo() {
      if (position > 0) {
        position -= 1;
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
      }
    },

    // toString function to aid in illustrating
    toString() {
      return `Value: ${this.value()}, History: [${history}], Position: ${position}`;
    },
  };
};

const undoableCounter = createUndoableCounter();
console.log(undoableCounter.toString()); // => Value: 0, History: [0], Position: 0

undoableCounter.increment();
console.log(undoableCounter.toString()); // => Value: 1, History: [0,1], Position: 1

undoableCounter.decrement();
console.log(undoableCounter.toString()); // => Value: 0, History: [0,1,0], Position: 2

undoableCounter.undo();
console.log(undoableCounter.toString()); // => Value: 1, History: [0,1,0], Position: 1

undoableCounter.increment();
console.log(undoableCounter.toString()); // => Value: 2, History: [0,1,2], Position: 2
