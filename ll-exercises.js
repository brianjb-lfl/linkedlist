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
    current = current.next;
  }
  console.log(current.value); 
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
    return 'No item found'
  }
  return listIn.get(llSize - 3)
}

// console.log(thirdLast(exList))

// ***** EXERCISE 5:  REVERSE LINKED LIST

function reverseList(listIn) {
  const newList = new LinkedList(); 
  let curr = listIn.head;
  while(curr) { 
    newList.insert(0, curr.value); 
    curr = curr.next;
  }
  return newList;  
}

console.log("--------BEFORE-----------"); 
PrintList(exList); 
console.log("--------AFTER-----------"); 
PrintList(reverseList(exList)); 

