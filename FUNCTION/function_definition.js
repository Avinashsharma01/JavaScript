// this is the basic function 
function add(a, b) {
    return (a + b)
}
console.log(add(3, 4))



//A function expression can be stored in a variable:
const x = function (a, b) {
    return (a + b)
}
console.log(x(3, 5))



//Functions can also be defined with a built-in JavaScript function constructor called Function().
const myFunction = new Function("a", "b", "return a * b")

console.log(myFunction(3,3))



// Function Hoisting

// Because of this, JavaScript functions can be called before they are declared:
console.log(hello(2,3))
function hello(a,b){
    return(a+b)
}



// Self-Invoking Functions

// This type of function is often used to create a private scope, avoiding the pollution of the global namespace.

(function (){
    let a="HEllo"
    console.log(a)
})()


// Functions Can Be Used as Values

function Avinash(){
    console.log("Avinash Sharma")
}

let func= Avinash()


// Arrow Functions

// ES5
let aa = function (){
    console.log("Hello Avinash");
    console.log(100)
}
aa()


// ES6
let ar=()=> console.log("I'm Avinash Sharma")
const xx = (x, y) => x * y;
ar()
console.log(xx(4,5))

