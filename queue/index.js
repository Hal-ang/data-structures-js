import Queue from './queue.js';

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // 1

queue.dequeue();
console.log(queue.front()); // 2
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

console.log(queue);
