const sumAll = function (num1, num2) {
  let sumNumbers = 0;
  if (
    !(typeof num1 === "number") ||
    !(typeof num2 === "number") ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      sumNumbers += i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      sumNumbers += i;
    }
  }
  return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
