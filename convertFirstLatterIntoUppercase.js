function capitalizaFirstLatter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let str = "rohit sharma";
let capitalizedString = capitalizaFirstLatter(str);
console.log(capitalizedString);
