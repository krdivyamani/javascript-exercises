const convertToCelsius = function(fahrenheit) {
  let ans = (5/9) * (fahrenheit - 32);
  return Math.round(ans * 10)/10
};

const convertToFahrenheit = function(celsius) {
  let ans = celsius * (9/5) + 32;
  return Math.round(ans * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
