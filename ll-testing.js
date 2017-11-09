'use strict';

const {LinkedList} = require('./linkedlist');

let ourList = new LinkedList();
ourList.insert(0, 'first');
ourList.insert(0, 'second');
ourList.insert(ourList.length, 'last');
ourList.insert(ourList.length-1, 'second-last');
ourList.remove(2);
ourList.insert(1, 'another item');
ourList.remove(ourList.length - 1);

for(let i = 0; i < ourList.length; i++) {
  console.log(`item ${i}:  ${ourList.get(i)}`);
}

// console.log(ourList.get(0));
// console.log(`head: ${ourList.head.value},  length: ${ourList.length}`);
//console.log(ourList.head);