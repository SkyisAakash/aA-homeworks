// window.setTimeout(function () {
//   console.log('HAMMERTIME');
// }, 5000);


// let callback = function () {
//   console.log('${time} is hammertime!');
// };


function hammerTime(time) {
  window.setTimeout(function () {
    console.log(`${time} is hammertime!`);
  }, time);
}

hammerTime(4000);
