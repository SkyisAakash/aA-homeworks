"use strict";

function madLib(verb, adj, noun) {
  console.log(`We shall ${verb} the ${adj} ${noun}.`);
}


madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"));

// console.log(isSubstring("jump for joy", "joys"));

function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      continue;
    }
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      result.push(array[i])
    }
    if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      result.push(array[i])
    }
  }
  // console.log(result);
  return result;
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,15]));
