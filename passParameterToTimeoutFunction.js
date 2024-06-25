function setTimeOutWithparameter(age) {
  let name = "Ruchit";
  let number = 7;
  setTimeout(function () {
    console.log(
      `Parameters received: name: ${name} and number: ${number} age:${age}`
    );
  }, 2000);
}
let age = 22;
setTimeOutWithparameter(age);
