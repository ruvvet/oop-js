// const legend = {
//     name: 'furyhorn',
//     type: 'sugarcone',
//     col: 'pink',
//     game: 'TFT',

//     start: function(){
//         return "Bye"
//     },
//     stop: function(){
//         return "Hi"
//     },

// }


//

//CREATING A CONSTRUCTOR FUNCTION

function HumanA (first, last, age) {
    this.fname = first;
    this.lname = last;
    this.age = age;
}
const one = new HumanA('ABC', 'DEF', 10);
console.log(one.fname)
const two = new HumanA('HIJ', 'KLM', 20);
console.log(two.lname)

// PROTOTYPING
// adds a function to constructor function
// <constructor function name>.prototype.<function name> => { function}
// all instances of constructor get the hello function

HumanA.prototype.hello = () =>{
    console.log('Hello');

}

two.hello();





class Human {

    constructor (name, age) {
        this.name = name
        this.age = age
        this.hello = function(){console.log('hi')}
    }

    printHuman (){
        console.log(`I am ${this.name} and I am ${this.age} old`)
}
}


let humanOne = new Human("abc", 123);
let humanTwo = new Human('def', 567);

humanOne.printHuman();
humanTwo.printHuman();
humanOne.hello();

