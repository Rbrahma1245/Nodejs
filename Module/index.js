// console.log("hiiii");
// console.log("hello have a good day");

// let count1 = 0
// let count2 = 100

// function x(){
//     console.log(count1);
//     count1++
// }

// function y(){
//     console.log(count2);
//     count2++
// }

// setInterval(x, 7000)
// console.log("...................");

// setInterval(y, 1000)
// console.log("_____________________");

function number(operation, num1, num2) {
  return operation(num1, num2);
}

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

console.log(number(add, 10, 20));
console.log(number(sub, 10, 20));
console.log(number(mul, 10, 20));
console.log(number(div, 10, 20));
