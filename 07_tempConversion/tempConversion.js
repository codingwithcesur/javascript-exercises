const ftoc = function (degree) {
  let ftocConverted = (degree - 32) * (5 / 9);
  return parseFloat(ftocConverted.toFixed(1));
};

const ctof = function (degree) {
  let ctofConverted = degree * (9 / 5) + 32;
  return parseFloat(ctofConverted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
