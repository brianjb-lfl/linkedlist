'use strict';

const {LinkedList} = require('./linkedlist');

let exList = new LinkedList();
exList.insert(0, 'first');
exList.insert(0, 'second');
exList.insert(0, 'test');
exList.insert(exList.length, 'last');
exList.insert(exList.length-1, 'second-last');
exList.remove(2);
exList.insert(1, 'another item');
exList.remove(exList.length - 1);

function size() {
  let current = exList.head; 
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

function findMiddle() {
  return (exList.get(Math.floor(size()/2)-1));
}

//console.log(findMiddle());


// ***** EXERCISE 4:  3RD ELEMENT FROM END

function thirdLast() {
  const llSize = size();
  if(llSize < 3) {
    return ''
  }

}
