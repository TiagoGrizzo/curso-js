const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total = el
const total = numbers.reduce(sum, 100)
console.log(total)

const avg = (acc, el, i, array) => {
    if(i === array.lenght - 1 ) {
        return (acc + el) / array.lenght
    } else{
        return acc + el
    }
}

const result = numbers.reduce(avg)
console.log(result)