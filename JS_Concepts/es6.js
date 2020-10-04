// what is es6 why such a big deal


// 1. Object keys

//ES5
var name2="suhani"
var age=18

var obj={
    name:name2,
    age:age
}

console.log(obj)

//ES6
var obj2={
    name:name2,
    age
}
console.log(obj2)

// 2. Template strings

//ES5
console.log(name+"is "+age+"years old")

//ES6
console.log(`${name} is ${age} years old`)


// 3. Anonymmous functions

//ES5
function abcd(){
    console.log("hi")
}

//ES6
const abcdw=function(){
    console.log("hello")
}
abcdw()


// 4. Arrow functions
//Find out the difference between normal and arrow functions

//ES5
function abscd(){
}

//ES6
const tt=(abc,dhs)=>{
    console.log(abc)
}

tt("sdhj")

// Resource for other differences
// https://medium.com/@muthuks/difference-between-es-5-and-es-6-e993c7ab0a70

// Question of the day- does javascript have classes?

class Animal{
    constructor(){
        console.log("constrcutor")
    }
    hello(){
        console.log("hello")
    }
}

const obsj=new Animal()
obsj.hello()