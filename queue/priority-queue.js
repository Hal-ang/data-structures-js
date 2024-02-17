function PriorityQueue() {
  const items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
      return;
    }

    let added = false;
    for (let i = 0; i < items.length; i++) {
      // min priority queue
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };

  this.isEmpty = function () {
    return items.length === 0;
  };
}
