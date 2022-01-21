// Class code example
//This is a function that wil be attached to de GLOBAL object
//therefore the "this" keyword wil point to the global object


function sayHelloFloating(){
    console.log("this object of a floating function", this)
    console.log(this.firstName)
}

const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello: function sayHello(){
        console.log(`hola ${this.firstName}`)
    }
}

sayHelloFloating()

//This function is attached to a "person1" object



person1.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){
        console.log(`Buen día, soy ${this.firstName}`)
    }
}

console.log(person2.sayHello)


const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    age: 33,
    tellAge: function(){
    return `I am ${this.age} years young`
    }
}


console.log(abstractPerson.tellAge())

console.log(abstractPerson.tellAge.bind(person1)())