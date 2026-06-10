const convertToCelsius = function (temperature) {
  const result = ((temperature - 32) * 5) / 9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (temperature) {
  const result = temperature * 1.8 + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
