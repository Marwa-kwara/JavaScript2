/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9; //let x is a variable, it has number 9 as a value, and it has a global scope.

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); //The output will be 9 because the value of x is not complex data structure so it pass in the f1 function as an argument by the value.

const y = {
  x: 9
}; //let y is a variable, it is an object.

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); //The output will be {x : 10} because of y has a complex data structure ,so it pass in the f2 function as an argument by the reference.