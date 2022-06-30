const repeatString = function (string, num) {
  let repeatStr = string;
  if (num === 0) {
    return "";
  } else if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i < num; i++) {
      repeatStr += string;
    }
    return repeatStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
