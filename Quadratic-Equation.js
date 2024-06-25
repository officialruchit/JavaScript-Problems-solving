function solveQuadraticEquation(a, b, c) {
    const discriminantNumber = b * b - 4 * a * c;
  
    if (discriminantNumber > 0) {
      const sqrtDiscriminant = Math.sqrt(discriminantNumber);
      const x1 = (-b + sqrtDiscriminant) / (2 * a);
      const x2 = (-b - sqrtDiscriminant) / (2 * a);
      return [x1, x2];
    } else if (discriminantNumber === 0) {
      const x = -b / (2 * a);
      return [x];
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(Math.abs(discriminantNumber)) / (2 * a);
        const root1 = `${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i`;
        const root2 = `${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
        return [root1, root2];
    }
  }
  
  
  let a = 2, b = -5, c = 2;
  const roots = solveQuadraticEquation(a, b, c);
  console.log(`Roots of ${a}x^2 + ${b}x + ${c} = 0 are: ${roots}`);
  