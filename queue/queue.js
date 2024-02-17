function Queue() {
  // enqueue : 큐의 뒤에 데이터를 추가한다
  // dequeue : 큐의 앞에서 데이터를 제거한다
  // front : 큐의 첫번째 원소를 반환하되 큐 자체는 그대로 놔둔다

  // isEmpty : 큐가 비어있으면 true
  // size : 큐의 원소 개수를 반환한다

  const items = [];

  this.enqueue = function (node) {
    return items.push(node);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };
}

export default Queue;
