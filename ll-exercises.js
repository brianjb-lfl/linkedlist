'use strict';

const {LinkedList} = require('./linkedlist');

let exList = new LinkedList();
exList.insert(0, 'first');
exList.insert(0, 'second');
exList.insert(0, 'test');
exList.insert(0, 'test1');
exList.insert(0, 'test2');
exList.insert(exList.length, 'last');
exList.insert(exList.length-1, 'second-last');
exList.remove(2);
exList.insert(1, 'another item');
exList.remove(exList.length - 1);

function PrintList(listIn){
  let current = listIn.head;
  if(!current) {
    return 0; 
  }
  while(current.next !== null) { 
    console.log(current.value);
    console.log(current) 
    current = current.next;
  }
  console.log(current.value); 
  console.log(current) 
}


function size(listIn) {
  let current = listIn.head; 
  let counter = 1; 
  if(!current) {
    return 0; 
  }
  while(current.next !== null) {
    counter++; 
    current = current.next;
  }
  return counter; 
}

// ***** EXERCISE 3:  FIND MIDDLE

function findMiddle(listIn) {
  let current = listIn.head; 
  let counter = 0; 
  let counterHalf = 0; 
  if(!current) {
    return 0; 
  }
  while(current.next !== null) {
    counter++; 
    counterHalf += 0.5; 
    current = current.next;
  }
  return listIn.get(Math.floor(counterHalf)); 
}

// console.log(findMiddle(exList));


// ***** EXERCISE 4:  3RD ELEMENT FROM END

function thirdLast(listIn) {
  const llSize = size(listIn);
  if(llSize < 3) {
    return 'No item found';
  }
  return listIn.get(llSize - 3);
}

// console.log(thirdLast(exList))

// ***** EXERCISE 5:  REVERSE LINKED LIST

// function reverseList(listIn) {
//   const newList = new LinkedList(); 
//   let curr = listIn.head;
//   while(curr) { 
//     newList.insert(0, curr.value); 
//     curr = curr.next;
//   }
//   return newList;  
// }

// ***** REVERSE v 2

function reverseList(listIn) {
  const newList = new LinkedList(); 
  for(let curr = listIn.head; curr; curr = curr.next) { 
    newList.insert(0, curr.value); 
  }
  return newList;  
}

// console.log("--------BEFORE-----------"); 
// PrintList(exList); 
// console.log("--------AFTER-----------"); 
// PrintList(reverseList(exList)); 


// ***** EXERCISE 6:  CYCLE LIST

let cycleList = new LinkedList();
cycleList.insert(0, 'fifth');
cycleList.insert(0, 'fourth');
cycleList.insert(0, 'third');
cycleList.insert(0, 'second');
cycleList.insert(0, 'first');

function createCycleItem(list) {
  const oldList = list; 
  let curr = oldList.head;
  let firstNextVal; 
  for(let i = 0; i < 4; i++) {
    curr = curr.next; 
    if(i === 1) {
      firstNextVal = curr.next; 
    }
  }
  curr.next = firstNextVal;
  return oldList;  
}

function isCycle(list) {
  let slow = list.head; 
  let fast = list.head;  
  let curr = list.head;
  if(!curr) {
    return false;
  }
  if(curr.next === list.head) return true;
  while(fast.next.next) { 
    slow = slow.next; 
    fast = fast.next.next; 
    if(slow=== fast) return true;
  }  
  return false; 
}

createCycleItem(cycleList);
console.log(createCycleItem(cycleList));
console.log(cycleList);

let node = cycleList.head;
console.log(node);
for (let range = 0; range < 6; range++) {
  node = node.next; 
  console.log(node);
}

//console.log(isCycle(exList)); 


// ***** EXERCISE 7:  CYCLE LIST
