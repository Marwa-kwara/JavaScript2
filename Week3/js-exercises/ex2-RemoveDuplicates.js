/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

const { check } = require("prettier");


// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
function removeDuplicateElements() {
  const uniqueLetters = letters.filter((item, index) => letters.indexOf(item) === index);
console.log(uniqueLetters);
  if (checkSolution(letters)) {
    console.log("Hooray!")
  }
}

