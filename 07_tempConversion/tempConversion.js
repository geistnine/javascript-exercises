// num.toFixed(decimal) rounds to desired decimal, returns
// a string that will need to be converted back to num

const ftoc = function(degreesF) {
  // c = (f - 32) * (5 / 9)
  const degreesC = (degreesF - 32) * (5 / 9);
  return parseFloat(degreesC.toFixed(1));

};

const ctof = function(degreesC) {
  // f = (c * (9/5) + 32)
  const degreesF = (degreesC * (9 / 5 ) + 32)
  return parseFloat(degreesF.toFixed(1));
};

console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
