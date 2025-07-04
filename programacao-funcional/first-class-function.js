/*
*A programming language is said to have
*First-class functions when functions in
*that language ate treated like any other
*variable.
*/

const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
} 

const multiply = (x, y) => x * y
const divide = (x, y) => x / y

console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))
