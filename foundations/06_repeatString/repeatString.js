const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }

  if (num === 0) {
    return "";
  }

  let temp = string;
  for (let i = 1; i <= num - 1; i++) {
    string = string + temp;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
