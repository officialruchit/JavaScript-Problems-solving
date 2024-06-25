let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4, d: 66 };

let mergedObject = { ...object1, ...object2 };

console.log(mergedObject);
