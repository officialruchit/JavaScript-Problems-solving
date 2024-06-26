function getFileextention(file) {
  let part = file.split(".");
  let extention = part[part.length - 1];
  return extention;
}

let file = "document.pdf";
let extention = getFileextention(file);
console.log(extention);
