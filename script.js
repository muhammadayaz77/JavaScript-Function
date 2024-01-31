// Q # 01
// Create a function named greet that takes a name as a
// parameter and logs a greeting message to the console.

// let name = 'Ayaz';

function res(name) {
    console.log("Salam !!! " + name)
}
res('Ayaz');

// Q # 02 

// Define a variable multiply and assign it a function expression that multiplies two numbers.

let mul = (n1, n2) => {
    console.log(n1 * n2)
}
mul(1, 3);

// Q # 03 

// Write a function called calculateArea that takes the radius of a circle as a parameter and returns the area of the circle.

function calculateArea(radius) {
    return Math.PI * radius;
}

console.log("Area is " + calculateArea(2))

// Q # 04

//Create a function power that takes two parameters, a base, and an exponent. Set the exponent to a default value of 2.

function power(base, ex = 2) {
    return Math.pow(base, ex);
}

console.log("Power : " + power(4));

// Q # 05 
//Assign an anonymous function to a variable sum that takes two numbers as parameters and returns their sum.

let a = function (n1, n2) {
    return n1 + n2;
}
console.log("Sum : " + a(2, 4));

// Q # 06
//Write a function called performOperation that takes two numbers and a callback function as parameters. Execute the callback function with the two numbers as arguments.

function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

// Example usage with addition operation
function add(a, b) {
    return a + b;
}

let resultAddition = calculate(5, 3, add);
console.log("Result of addition: " + resultAddition);

// Q # 07
// Convert the double function (which doubles a number) to an arrow function.

let ab = (num) => num + num;

console.log("Double : " + ab(4));

// Q # 08
// Create a variable globalVar outside any function. Write a function that attempts to log the value of globalVar from inside the function. Explain the result.
let globalvar = 'Ayaz';

function res(globalVar) {
    console.log("Name : " + globalVar);
}

res(globalvar);

 // Q # 09
 // Write a function counter that returns a function. The returned function should, when invoked, increment a counter variable declared in the outer function.

 function counter() {
    let count = 1;
  
    // Returned function that increments the counter
    function incrementCounter() {
      count++;
      console.log("Current count: " + count);
      return count;
    }
  
    // Return the inner function
    return incrementCounter;
  }
  
  // Example usage:
  const myCounter = counter();
  
  // Each time you invoke myCounter, it increments the count variable
  myCounter(); // Output: Current count: 1
  myCounter(); // Output: Current count: 2
  myCounter(); // Output: Current count: 3
  
  // Q # 10
  // Implement a recursive function factorial that calculates the factorial of a given number.

  function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }
  
//   Example usage:
  let result = factorial(5);
  console.log("Factorial of 5 is: " + result);
  