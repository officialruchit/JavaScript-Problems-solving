function TwoDArray(rows, column) {
  let array = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < column; j++) {
      row.push(j);
    }
    array.push(row);
  }
  return array;
}

let row = 3;
let column = 3;
console.log(TwoDArray(row, column));
