function addItem(array, item) {
  array.push(item);
  return array;
}

let person = ["rohit", "kohli", "pandya"];
person = addItem(person, "surya");
console.log(person);
