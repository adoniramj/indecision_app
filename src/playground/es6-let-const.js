var nameVar = 'Adoniram'
var nameVar = 'Mike'

console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'John'
// let nameLet = 'Mike'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName () {
    const petName = "Hal"
    return petName
}

getPetName()

// console.log(petName)

var fullName = 'Adoniram Vargas'

if(fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)

if (fullName) {
    let lastName = fullName.split(' ')[1]
    console.log(lastName)
}

console.log(lastName)