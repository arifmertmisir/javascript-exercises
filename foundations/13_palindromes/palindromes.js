const palindromes = function (myStr) {
  const cleanedMyStr = myStr
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");

  const reverseMyStr = cleanedMyStr.split("").reverse().join("");
  return cleanedMyStr === reverseMyStr;
};

// Do not edit below this line
module.exports = palindromes;
