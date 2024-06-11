// destructuring of Objects
let obj={
    Name:'Avinash Sharma',
    Age:20,
    Salary:50000,
}

let {Name,Age,Salary}=obj

console.log(Name, typeof(Name))
console.log(Age, typeof(Age))
console.log(Salary , typeof(Salary))


console.log("-------------Destructuring of Array----------------")
// Destructuring of Array
let Array=[1,2,3,4,5,6,7,8,9,10]
let [First, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth]=Array
console.log(First)
console.log(second)
console.log(third)
console.log(fourth)
console.log(fifth)
console.log(sixth)
console.log(seventh)
console.log(eighth)
console.log(ninth)
console.log(tenth)


//Nested Objects and Arrays
console.log('-------------Nested Objects and Arrays----------]--')
let nested={
    KName:"Avinash Sharma",
    Address:{
        State:'Bihar',
        pincode:841426,
        country:'India'
    }
}

let {KName, Address:{State,pincode,country}}=nested

console.log(KName)
console.log(State)
console.log(pincode)
console.log(country)