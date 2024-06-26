let obj={
    Name:"Avinash",
    age:20,
    course:"B-tech It",
    inroll:2201000001869
}



console.log(obj.Name)
console.log(obj.age)    
console.log(obj.course)  // this is the one method to accese the properties of obj
console.log(obj.inroll)

console.log(obj["Name"])     // this is the onother method to accese the properties of obj
console.log("-----------------------------------------------------------")



 // check the type
console.log(typeof(obj))  
console.log(typeof(obj.age))
console.log(typeof(obj.Name))  
console.log("-----------------------------------------------------------")



// add and delete from the object
//1. delete 
delete obj.Name
console.log(obj)

//2. add
obj.Name='Avinash'
console.log(obj)
console.log("-----------------------------------------------------------")


// refrence of onjects
let obj2=obj
delete obj.age
console.log(obj2)