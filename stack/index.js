import StackFunction from './stack.js';

const stack = new StackFunction();

stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.clear();
console.log(stack.size());
