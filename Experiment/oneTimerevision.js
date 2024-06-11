let display=(data)=>{
    console.log(data)
}


let sum=(a,b , callback)=>{
    let c=a+b
    callback(c)
}


sum(2,3, display)