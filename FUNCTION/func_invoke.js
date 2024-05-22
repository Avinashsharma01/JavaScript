
function add(a,b){
    return a+b
}
let w=add(2,3) // function is involking here
console.log(w)


function invoke(){
    return this  // x will be the window object
}
// console.log(invoke())






// Invoking a Function as a Method 1
let myobj={
    firstname:'Avinash',
    lastname:'Sharma',
    fullname: function(){
        let n=this.firstname+ " "+ this.lastname
        console.log(n)
    }
}
myobj.fullname()





// Invoking a Function as a Method 2
// The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  let gg=myObject.fullName();         // Will return "John Doe"
console.log(gg)




// Invoking a Function as a Method 3
//The thing called this, is the object that "owns" the JavaScript code
const aviobj={
    firstName:"Soumya",
    lastName: "mishra",      
    fullname: function(){
        return this      //The thing called this, is the object that "owns" the JavaScript code
    }
}

let thhh= aviobj.fullname()
console.log(thhh)