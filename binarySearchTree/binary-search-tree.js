const insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
};

const inOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  inOrderTraverseNode(node.left, callback);
  callback(node.key);
  inOrderTraverseNode(node.right, callback);
};

const postOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  postOrderTraverseNode(node.left, callback);
  postOrderTraverseNode(node.right, callback);
  callback(node.key);
};

const preOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  callback(node.key);
  preOrderTraverseNode(node.left, callback);
  preOrderTraverseNode(node.right, callback);
};

const minNode = function (node) {
  if (!node) return null;

  while (node && node.left) {
    node = node.left;
  }
  return node.key;
};

const maxNode = function (node) {
  if (!node) return null;

  while (node && node.right) {
    node = node.right;
  }
  return node.key;
};

const searchNode = function (node, key) {
  if (node === null) return false;

  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
};

const removeNode = function (node, key) {
  if (node === null) return null;

  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      node = null;
      return null;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    const aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  }
};

function BinarySearchTree() {
  const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  // search(key) 해당 키를 가진 노드의 존재 여부
  // preOrderTraverse : 전위 순회 방식으로 트리 전체 노드 방문
  // postOrderTraverse : 후위 순회 방식으로 트리의 전체 노드 방문
  // min : 트리 최소 값 / 키를 반환한다
  // max : 트리의 최대 값 / 키를 반환한다
  // remove(key) : 키를 삭제한다

  // insert(key) 새 키를 삽입한다
  this.insert = function (key) {
    const newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  // inorderTraverse : 중위 순회 방식으로 트리 전체 노드 방문
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  // 자식 노드보다 노드 자신을 먼저 방문
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };

  this.min = function () {
    return minNode(root);
  };

  this.max = function () {
    return maxNode(root);
  };

  this.search = function (key) {
    return searchNode(root, key);
  };

  this.remove = function (key) {
    root = removeNode(root, key);
  };
}
