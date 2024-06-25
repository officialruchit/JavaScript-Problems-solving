function findSquareRoot(number) {
  for (var i = number; i >= 1; i--) {
    if (i * i === number) {
      return i;
    }
  }
  return -1;
}

function findSqrt(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return "Invalid number, please enter a positive number";
  }
  for (var i = 1; i <= num; i++) {
    if (i * i === num) {
      return i;
    }
  }
  return -1;
}

let number1 = 64;
let sqrtResult1 = findSquareRoot(number1);
if (sqrtResult1 !== -1) {
  console.log(`The perfect square root of ${number1} is= ${sqrtResult1}`);
} else {
  console.log(`No perfect square root found for ${number1}`);
}

let number2 = 15;
let sqrtResult2 = findSqrt(number2);
if (typeof sqrtResult2 === "string") {
  console.log(sqrtResult2);
} else if (sqrtResult2 !== -1) {
  console.log(`The perfect square root of ${number2} is= ${sqrtResult2}`);
} else {
  console.log(`No perfect square root found for ${number2}`);
}
