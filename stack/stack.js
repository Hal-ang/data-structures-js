function StackFunction() {
  // push : 스택 꼭대기에 새 원소를 추가한다.
  // pop : 스택 꼭대기의 원소를 제거한다.
  // peek : 스택 꼭대기의 원소를 반환한다.
  // isEmpty : 스택이 비어있을 때에 true를 반환한다.
  // clear : 스택의 모든 원소를 제거한다.
  // size : 스택의 원소 개수를 반환한다.
  this.items = [];

  this.push = function (node) {
    return this.items.push(node);
  };

  this.pop = function () {
    return this.items.pop();
  };

  this.peek = function () {
    return this.items[this.items.length - 1];
  };

  this.isEmpty = function () {
    return this.items.length === 0;
  };

  this.clear = function () {
    this.items = [];
  };

  this.size = function () {
    return this.items.length;
  };
}

export default StackFunction;
