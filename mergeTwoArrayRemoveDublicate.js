function removeDublicate(array1, array2) {
  return [...new Set([...array1, ...array2])];
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 66, 77, 88];
let mergerArray=removeDublicate(array1, array2);
console.log(mergerArray)
