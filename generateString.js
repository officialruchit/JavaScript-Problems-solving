function generateString(len) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < len; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

let randomString = generateString(7);
console.log(randomString);
