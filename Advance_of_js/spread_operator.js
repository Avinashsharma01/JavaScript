let arr1=[1,2,3,4,5,6,7]
let arr2=arr1
let arr3=[...arr1]

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

console.log(arr1) 
console.log(arr2)
console.log(arr3)

// let's playing with objects 
let obj1={
    name:"Avinash Sharma",
    age:20,
    course:"B-tech IT"
}



let obj2={...obj1}
console.log(obj2)



let fun=function(a,b,c){
    return a+b+c
}


let number=[1,2,3]
console.log(fun(...number))