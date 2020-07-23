const add = function(a,b){
    console.log(arguments)
    return a + b
}

console.log(add(4,9))

const add2 = (a,b) => {
    //console.log(arguments)
    return a + b
}


const user = {
    name: 'Adoniram',
    cities:['Miami', 'Yokohama'],
    printPlacesList: function(){ //this function is bound to the object
        console.log(this.name)
        console.log(this.cities)
        // the following code will produce an error

        // this.cities.forEach(function (city) {  
        //     console.log(this.name + ' has lived in ' + city)
        // })

        // the the anonymous function inside forEach is not bound to the object so this is undefined

        this.cities.forEach( city => console.log(this.name + ' has lived in ' + city)) 
        // changing the anonymous function to an arrow functions removes the error. Why? Arrow functions inherit 'this' in the context they were created
    }
}

user.printPlacesList()
var multiplyBy = 10
const multiplier = {
    numbers:[1,2,3,4,5],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map( number  => number * this.multiplyBy)

        // return this.numbers.map(function(number) {
        //     console.log(this)
        //     //return number * this.multiplyBy
        // })
    }
}

console.log(multiplier.multiply())