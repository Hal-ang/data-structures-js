function LinkedList() {
  const Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  // head; 연결이 시작되는 지점 참조
  let head = null;

  // append(원소) 리스트의 맨 끝에 원소를 추가
  this.append = function (element) {
    const node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    length++;
  };

  // removeAt(위치) 해당 위치의 원소를 삭제
  this.removeAt = function (position) {
    if (position < 0 || position > length) return null;

    let current = head;

    if (position === 0) {
      head = current.next;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.element;
  };

  // remove (원소)  원소를 삭제한다
  this.remove = function (element) {
    if (head === null) return null;

    const node = new Node(element);

    let current = head;
    let previous = null;
    let index = 0;

    while (index++ < length - 1) {
      if (previous.element === node.element) {
        break;
      }
      previous = current;
      current = current.next;
    }

    if (previous.element === node.element) {
      previous.next = current.next;
      length--;
      return current.element;
    }
    return null;
  };

  // insert(위치, 원소) 해당 위치에 원소 삽임
  this.insert = function (position, element) {
    if (position < 0 || position > length) return false;

    const node = new Node(element);

    let current = head;

    if (position === 0) {
      node.next = head;
      head = node;
    } else {
      let previous = null;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }

    length++;
    return true;
  };

  // isEmpty // 원소가 없다면 true
  this.isEmpty = function () {
    return head === null;
  };

  // size // 원소 개수 반환
  this.size = function () {
    return length;
  };

  // indexOf(원소) : 해당 원소의 인덱스를 반환, 없을 경우 -1

  this.indexOf = function (element) {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  // toString // 프로토타입 toString 새로 정의
  this.toString = function () {
    let current = head;
    let string = '';

    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  };
}
