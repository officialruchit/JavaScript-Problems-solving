function removeWhiteSpace(str) {
  return str.split(" ").join("");
}
let str = "    Rohit Sharma";
str = removeWhiteSpace(str);
console.log(str);
