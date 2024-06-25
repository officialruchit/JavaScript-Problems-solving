function checkNumber(a) {
  if (a === 0) {
    return "Zero";
  }
  if (a < 0) {
    return "Negative number";
  }
  if (a > 0) {
    return "Positive number";
  }
}

function checkWithTernaryOperator(a) {
  return a === 0 ? "Zero" : a > 0 ? "Positive number" : "Negative number";
}

let num = 0;
let result1 = checkNumber(num);
console.log(`checkNumber result for ${num}: ${result1}`);

num = 9;
let result2 = checkWithTernaryOperator(num);
console.log(`checkWithTernaryOperator result for ${num}: ${result2}`);


