const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum+=item, 0);
};

const multiply = function(arr) {
  let sum = 1;
  if(arr.length == 0) return null;
  for(let item of arr) sum*=item;
  return sum;
};

const power = function(a, b) {
	let sum = 1;
  for(let i = 0; i < b; i++) sum*=a;
  return sum;
};

const factorial = function(a) {
	let sum = 1;
  for(let i = a; i > 0; i--) {
    sum*=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
