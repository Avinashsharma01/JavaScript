// First code 
// First code 
// First code 
// First code 
let promiseshai= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 1 ")
        resolve()
    },1000)
})

promiseshai.then(function(){
    console.log("resolve hai ")
})
//  it is just a BREAK POINT 
setTimeout(()=>{
    console.log("This is the breake point")
    console.log("This is the breake point")
    console.log("This is the breake point")
    console.log("This is the breake point")
    console.log("This is the breake point")
    console.log("This is the breake point")
},1000)

// sECOND CODE Start from here 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2")
        resolve()
    },2000)
}).then(()=>{
    console.log("Resolve 2 hai ")
})



// this learning processs start from here 

const hello= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async 3")
        resolve({
            Name:'Avinash sharma', Phone_no:6201693634, Age:21
        })
    },3000)
})

hello.then((user)=>{
    console.log(user)
    console.log(user.Age)
})

// this is the learning process of four start frome here 

const async = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({
                Name:'Avinash', lang:'Hindi', age:20, pass:123
            })
        }else{
            reject("This is the error")
        }
    },4000)
})

async.then((user)=>{
    console.log(user)
    return user.Name
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("This is the final promises")
})

// This is the learning process of fivr start from here 


const asyncfive= new Promise((resolve, reject)=>{
    setInterval(()=>{
        let error=true
        if(!error){
            resolve()
        }
    })
})