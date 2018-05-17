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

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,15]));


function isPrime(n) {
  var flag = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) { flag = false }
  }
  return(flag);
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));
