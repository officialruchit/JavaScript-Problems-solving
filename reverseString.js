function reverseString(name, len) {
  let reverse = "";
  for (let i = len - 1; i >= 0; i--) {
    reverse += name[i];
  }
  return reverse;
}

let name = "Ruchit";
let len = name.length;
let reverse = reverseString(name, len);
console.log(reverse);
