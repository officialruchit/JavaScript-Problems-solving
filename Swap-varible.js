function swapUsingTemp(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function swapUsingAddition(a, b) {
  let temp = a + b;
  a = temp - a;
  b = temp - b;
  return [a, b];
}

function swapUsingDestructuring(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

let num1 = 10;
let num2 = 20;

let resultTemp = swapUsingTemp(num1, num2);
console.log(
  "Using Temp Variable - Before swap: num1: " + num1 + " num2: " + num2
);
console.log(
  "Using Temp Variable - After swap: num1: " +
    resultTemp[0] +
    " num2: " +
    resultTemp[1]
);

let resultAddition = swapUsingAddition(num1, num2);
console.log("Using Addition - Before swap: num1: " + num1 + " num2: " + num2);
console.log(
  "Using Addition - After swap: num1: " +
    resultAddition[0] +
    " num2: " +
    resultAddition[1]
);

let resultDestructuring = swapUsingDestructuring(num1, num2);
console.log(
  "Using Destructuring - Before swap: num1: " + num1 + " num2: " + num2
);
console.log(
  "Using Destructuring - After swap: num1: " +
    resultDestructuring[0] +
    " num2: " +
    resultDestructuring[1]
);
