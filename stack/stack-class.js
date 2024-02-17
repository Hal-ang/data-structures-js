class Stack {
  constructor() {
    this.items = [];
  }

  push(node) {
    return this.items.push(node);
  }

  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}
