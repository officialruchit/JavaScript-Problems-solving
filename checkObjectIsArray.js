function isArray(object) {
  return Array.isArray(object);
}

let object1 = { name: "kohli", number: 18 };
let array1 = [1, 2, 3, 4];

console.log(`is object1 an array:${isArray(object1)}`);
console.log(`is array1 an array:${isArray(array1)}`);
