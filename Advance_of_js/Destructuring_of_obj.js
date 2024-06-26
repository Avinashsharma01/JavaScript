let obj={
    Name:"Avinash Sharma",
    age:20,
    course:"B tech IT"
}

//instead of this 
console.log(obj.Name)
console.log(obj.age)
console.log(obj.course)

console.log("--------------------------------------------------------------")

//  we can destructure it 
let {Name, age, course}=obj
console.log(Name)
console.log(age)
console.log(course)