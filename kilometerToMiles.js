function convertToMiles(kilometer) {
  const conversionRate = 1.609344;
  const miles = kilometer / conversionRate;
  return miles.toFixed(4);
}
const kilometers = 10;
const miles = convertToMiles(kilometers);
console.log(`The distance of ${kilometers} kilometers = ${miles} miles.`);
