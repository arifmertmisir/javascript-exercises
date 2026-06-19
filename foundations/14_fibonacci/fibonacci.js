const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (isNaN(num)) {
    return "OOPS";
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }

  let firstElement = 0;
  let secondElement = 1;
  let result = 0;
  for (let i = 1; i <= num; i++) {
    firstElement = secondElement;
    secondElement = result;
    result = firstElement + secondElement;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
