function display(callback){
    console.log('hello') // second console
    console.log(callback)
}

function add(a,b){
    console.log('Helloo')   // first console
    let c=a+b
    display(c)  // third console
}

add(2,4)




// another methods in call back functions 
// another methods in call back functions 
function result(data){
    console.log(data)
}

function sum(a,b,callback){
    let addd=a+b
    console.log("this-Is-Another-Method")
    callback(addd)
}

sum(3,4,result)