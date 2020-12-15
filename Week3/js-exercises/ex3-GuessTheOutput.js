/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;  //let a is a variable, it has number 10 as a value, and it has a global scope.
const x = (function () {
  a = 12; // re-assigning a and give it another value, but its global doesn't change it still has a global scope, because it was declared it there.
  return function () {
  alert(a); //ReferenceError: alert is not defined
  };
})();
// if we add here console.log(a) then the output will be 12 because we changed the value inside the function.
x();