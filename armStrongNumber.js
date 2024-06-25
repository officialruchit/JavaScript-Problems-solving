function isArmstrongNumber(number) {
  let strNumber = number.toString();
  let numberOfDigits = strNumber.length;
  let sum = 0;

  for (let i = 0; i < numberOfDigits; i++) {
    let digit = parseInt(strNumber[i]);
    sum += Math.pow(digit, numberOfDigits);
  }

  return sum === number;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(371));
console.log(isArmstrongNumber(9474));
console.log(isArmstrongNumber(123));
