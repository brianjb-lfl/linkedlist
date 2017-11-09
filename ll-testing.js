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
ourList.insert(0, 'new item');

PrintList(ourList);
console.log(size(ourList));
console.log(findLast(ourList));

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

function isEmpty(listIn) { 
  if(!listIn.head) {
    return true; 
  }
  return false; 
}

function findPrevious(listIn, index) {
  return listIn.get(index - 1);
}

function findLast(listIn) {
  let current = listIn.head; 
  //let counter = 0; 
  if(!current) {
    return 0; 
  }
  while(current.next !== null) {
    current = current.next;
  }
  return (current.value);
  //return PrintList(listIn)[PrintList(listIn).length -1]; 
}


