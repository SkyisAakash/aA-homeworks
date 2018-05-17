"use strict";

function madLib(verb, adj, noun) {
  console.log(`We shall ${verb} the ${adj} ${noun}.`);
}


madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

console.log(isSubstring("time to program", "time"));

console.log(isSubstring("jump for joy", "joys"));
