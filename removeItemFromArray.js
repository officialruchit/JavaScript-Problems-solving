function removeItem(array, item) {
  return array.filter((items) => items !== item);
}
let cricketer = ["Rohit", "virat", "Boomrah", "pant"];
cricketer = removeItem(cricketer, "pant");
console.log(cricketer);
