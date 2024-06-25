let person = {
  name: "Ruchit",
  number: 7,
  city: "anand",
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
