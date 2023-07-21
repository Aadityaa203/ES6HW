// 2. Create two variables that have numbers as their values
var num1 = 2;
var num2 = 4;

// 3. Create a function that returns the sum of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function sumOfTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log (sumOfTwoNumbers(2, 4));

// 4. Create a function that returns the difference of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function difference(num1, num2){
    return num1 - num2;
}
console.log(difference(num1, num2));

// 5. Create a function that returns two arguments multiplied by each other. Then console.log the function with the variables from step two as your two arguments.
function product(num1, num2){
    return num1 * num2;
}
console.log(product(num1, num2))

// 6. Create a function that returns divides the first argument by the second argument and returns the new value. Then console.log the function with the variables from step two as your two arguments.
function quotation(num1, num2) {
    return num1 / num2;
}
let result = quotation(num1, num2);
console.log(result);
// 7. Take the four functions that you created above and turn them into Arrow Functions, do not delete the original functions made, please have the original function and the arrow function on your completed homework. You should have a total of eight functions, four regular and four arrow functions.
function sumOfTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log (sumOfTwoNumbers(2, 4));
// Arrow function
const sumOfTwoNumbers = (num1 , num2) => num1 + num2;
console.log(num1, num2);




function difference(num1, num2){
    return num1 - num2;
}
console.log(difference(num1, num2));
// Arrow function
const difference = (num1 , num2) => num1 - num2;
console.log(num1, num2);



function product(num1, num2){
    return num1 * num2;
}
console.log(product(num1, num2))
// Arrow function
const product = (num1 , num2) => num1 * num2;
console.log(num1, num2);



function quotation(num1, num2) {
    return num1 / num2;
}
let result = quotation(num1, num2);
console.log(result);
// Arrow function
const quotation = (num1 , num2) => num1 / num2;
let result = quotation(num1, num2)
console.log(result);
