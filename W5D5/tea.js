const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function snacks () {
  let first, second;
  reader.question(`Would you like tea?`, (res) => {
    first = res;
    console.log(`You replied ${res}.`);
  });
}

snacks();
