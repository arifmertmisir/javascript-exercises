const sumAll = function (from, until) {
  if (from < 0 || until < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(from) || !Number.isInteger(until)) {
    return "ERROR";
  }

  let total = 0;
  if (from < until) {
    for (let i = from; i <= until; i++) {
      total += i;
    }
    return total;
  } else {
    for (let i = from; i >= until; i--) {
      total += i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
