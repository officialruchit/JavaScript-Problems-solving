function decimalToBinary(num) {
  if (num < 0) {
    console.log("Please enter a non-negative integer.");
    return;
  }
  return num.toString(2);
}
let decimalNumber = 10;
let binaryString = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is: ${binaryString}`);
