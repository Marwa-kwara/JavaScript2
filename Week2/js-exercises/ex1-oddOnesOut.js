/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.


function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

/** My code */
function doubleEvenNumbers(numbers) {
  const evenNumbers = myNumbers.filter(myNumbers => myNumbers % 2 === 0);
  const newNumbers = evenNumbers.map(myNumbers => myNumbers * 2);
            
  return newNumbers
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));