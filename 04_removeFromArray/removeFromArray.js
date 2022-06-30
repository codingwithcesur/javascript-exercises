const removeFromArray = function (...theStrs) {
  const arr = theStrs[0];
  return arr.filter((str) => !theStrs.includes(str));
};

// Do not edit below this line
module.exports = removeFromArray;
