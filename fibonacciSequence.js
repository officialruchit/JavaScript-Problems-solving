function generateFibonacci(n) {
  if (n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  let fibSequence = [];

  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
  }

  return fibSequence;
}

let numberOfTerms = 20;
let fibonacciSequence = generateFibonacci(numberOfTerms);

console.log(
  `Fibonacci sequence (${numberOfTerms} terms):`,
  fibonacciSequence.join(", ")
);
