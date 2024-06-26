function appentObjectToArray(array, item) {
  array.push(item);
  return array;
}
let cricketers = [
  { name: "Rohit", run: 10000 },
  { name: "kohli", run: 14000 },
  { name: "yuvraj", run: 8000 },
];

let newCricketer = { name: "dhoni", run: 9000 };

cricketers = appentObjectToArray(cricketers, newCricketer);

console.log(cricketers);
