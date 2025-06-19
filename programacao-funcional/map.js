const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(el => el * 2)

console.log(numbers, numbersV2)

const students = [
    { name: 'jake', score: 6.4 },
    { name: 'susan', score: 8.6 },
    { name: 'emma', score: 9.4},
    { name: 'peter', score: 9.1},
]

const getScore = el => el.score

const result = students
        .map(getScore)   //floor arredonda para baixo
        .map(Math.ceil) //ceil arredonda pra cima
console.log(students, result)