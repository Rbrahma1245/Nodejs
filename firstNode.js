let func = require("./secondNode");

let { findMax, findMin } = func;

let arr = [1, 2, 4, 55, 78, 11, 3];
console.log(findMax(arr), "Maximum");
console.log(findMin(arr), "Minimum");
