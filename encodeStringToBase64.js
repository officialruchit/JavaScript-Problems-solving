function encodeToBase64(str) {
  return btoa(str);
}

let originalString = "Virat";
let base64String = encodeToBase64(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Base64 encoded string: ${base64String}`);
