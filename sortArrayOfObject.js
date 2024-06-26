function sortByProperty(array, property) {
  return array.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
}

let cricketers = [
  { name: "Rohit", run: 9000 },
  { name: "Kohli", run: 15000 },
  { name: "Surya", run: 7000 },
  { name: "Dhoni", run: 10000 },
];
let sortByRun = sortByProperty(cricketers, "run");
console.log("Sorted by runs:", sortByRun);
