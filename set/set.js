function Set() {
  // add(원소) 원소를 추가한다
  // remove(원소) 원소를 삭제한다
  // has (원소) 어떤 원소가 집합에 포함되어있는지 boolean 반환
  // clear() 모든 원소 삭제
  // size : 원소 개수 반환
  // values() : 집합의 모든 원소를 배열 형태로 바환

  let items = {};

  this.has = function (value) {
    return items.hasOwnProperty(value);
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.values = function () {
    return Object.keys(items);
  };

  this.union = function (otherSet) {
    const unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function (otherSet) {
    const intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  this.defference = function (otherSet) {
    const differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = thils.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}
