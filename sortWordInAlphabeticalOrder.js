function sortArray(array) {
  return array.sort((a, b) => a.localeCompare(b));
}
let person = ["rohit", "kohli", "surya", "pandya"];
let sortOrder = sortArray(person);
console.log(sortOrder);
