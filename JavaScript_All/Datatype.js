//Number
let lenght=10
let weight=20

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


console.log(person)

const Avinash={
    Name:"Avinash Sharma",
    Course:"B Tech (IT)",
    Session:"2022",
    College:"SVSU",
    Hostle:"Udham Singh",
}

console.log(Avinash)
console.table(Avinash)


let ll="Avinash"+"Sharma"
for(let i=0; i<=ll.length; i++){
    console.log(i+" Hello Avinash Sharma")
    if(i===5){
        console.log("This is the fifth index")
    }
}
console.log(ll.length)