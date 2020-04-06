class Stack {
  constructor(props) {
    this.data = {};
    this.count = 0;
    this.minValue = [];
    this.maxValue = [];
  }

  push(value) {
    this.data[this.count] = value;
    const currentMin = this.minValue.slice().pop();
    const currentMax = this.maxValue.slice().pop();

    if (value <= currentMin || currentMin === undefined) {
      this.minValue.push(value);
    }
    if (value >= currentMax || currentMax === undefined) {
      this.maxValue.push(value);
    }
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    var result = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;

    return result;
  }

  peek() {
    return this.data[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  min() {
    return this.minValue.slice().pop();
  }

  max() {
    return this.maxValue.slice().pop();
  }
}

var stack = new Stack();

stack.push(1);
stack.push(-1);
stack.push(4);
stack.push(30);
stack.push(3);
stack.push(2);
console.log("pushed ===>", stack.data);
console.log("popped ===>", stack.pop());
console.log("check pop ===>", stack.data);
console.log("peeking ===>", stack.peek());
console.log("size ===>", stack.size());
console.log("is empty ===>", stack.isEmpty());
console.log("Max value ===>", stack.min());
console.log("Min value ===>", stack.max());


