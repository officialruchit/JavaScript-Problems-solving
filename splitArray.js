function chunkArray(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i = i + chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 3;
console.log(chunkArray(array, chunkSize));
