const square = function(x){
    return x*x
}

console.log(square(5))

const squareArrow = (x) => {
    return x*x
}

console.log(squareArrow(9))

const cube = x => x**3

console.log(cube(3))

const multiply = (x,y) => x*y

console.log(multiply(5,6))

const getFirstName = x => {
    const firstName = x.split(' ')[0]
    return firstName
}

console.log(getFirstName('Adoniram Vargas'))

const getLastName = x => x.split(' ')[1]

console.log(getLastName('Adoniram Vargas'))

function getName(x){
    return x.split(' ')[0]
}

console.log(getName('Mike Smith'))