let greet=(name, age)=>{
    console.log("Hello World!")
    return "Hello "+name+age
}
console.log(greet('Avinash  your age is ', 20 +" year"))



// this keyword 

let obj={
    hello(){
        console.log(this)
    }
}
obj.hello()