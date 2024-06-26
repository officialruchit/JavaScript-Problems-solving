function trimString(str) {
  return str.trim();
}

let originalString = "     Rohit Sharma   ";
let updatedString = trimString(originalString);

console.log(`Original string: '${originalString}'`);
console.log(`Trimmed string: '${updatedString}'`);
