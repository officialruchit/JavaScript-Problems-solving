function convertToFahrenheit(celcius) {
  const Fahrenheit = (celcius * 9) / 5 + 32;
  return Fahrenheit;
}

const celsius = 12;
const fahrenheit = convertToFahrenheit(celsius);
console.log(
  `${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(
    2
  )} degrees Fahrenheit.`
);
