'use strict';

const {LinkedList} = require('./linkedlist');

let ourList = new LinkedList();
ourList.insert(0, 'first');
ourList.insert(0, 'second');
ourList.insert(0, 'test');
ourList.insert(ourList.length, 'last');
ourList.insert(ourList.length-1, 'second-last');
ourList.remove(2);
ourList.insert(1, 'another item');
ourList.remove(ourList.length - 1);

// for(let i = 0; i < ourList.length; i++) {
//   console.log(`item ${i}:  ${ourList.get(i)}`);
// }

// console.log(ourList.get(0));
// console.log(`head: ${ourList.head.value},  length: ${ourList.length}`);
//console.log(ourList.head);


function PrintList(){
  const result = []; 
  for(let i = 0; i < ourList.length; i++) {
    result.push(ourList.get(i));
  }
  return result; 
}

function size() {
  let current = ourList.head; 
  let counter = 1; 
  if(!current) {
    return 0; 
  }
  while(current.next !== null) {
    counter++; 
    current = current.next
  }
  return counter; 
}

function isEmpty() { 
  if(!ourList.head) {
    return true; 
  }
  return false; 
}

function findPrevious(index) {
  return ourList.get(index - 1)
}

function findLast() {
  return PrintList()[PrintList().length -1]; 
}


console.log(findLast()); 
console.log(findPrevious(2)); 
console.log(isEmpty()); 
console.log(PrintList()); 
console.log(size()); 