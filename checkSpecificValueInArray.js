function availabilityOfValue(array, item) {
  return array.includes(item);
}
let cricketers = ["Rohit", "virat", "Boomrah", "pant"];
let availability = availabilityOfValue(cricketers, "Rohit");
console.log(`availability of value: ${availability}`);
