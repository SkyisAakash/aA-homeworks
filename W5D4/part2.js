function titleize(array) {
  let ans = array.map(name => `Mx. ${name} Jinglegeimer Schmit`);

  ans.forEach(a => console.log(a));
}

// titleize(["Mary","Brian","Leo"])

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRR!!!'`);
}

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick)
}

Elephant.prototype.play = function() {
  let i = Math.floor(Math.random()*this.tricks.length);
  console.log(`${this.name} is ${this.tricks[i]}!`);
}

let gir = new Elephant(`Gir`,100,['painting a picture','riding a bike','playing with ball'])
gir.trumpet();
console.log(gir.height);
gir.grow();
console.log('Gir should be bigger now')
console.log(gir.height);
console.log(gir.play());
console.log(gir.tricks);
gir.addTrick('being cute');
console.log(gir.tricks);
