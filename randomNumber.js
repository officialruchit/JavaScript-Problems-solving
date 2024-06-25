function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let randomnumber = getRandomNumber(1, 100);
console.log(`random number 1-100:${randomnumber}`);
