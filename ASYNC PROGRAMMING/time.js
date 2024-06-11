// setTime out
setTimeout(()=>{
    console.log("hello")
},2000)


let setTime=()=>{
    console.log("this is time")
}

setTimeout(setTime, 2000)






// setInterval
setInterval(()=>{
    console.log("this setInterval")
},500)


let hello=()=>{
    console.log("Hello Avi")
}

setInterval(hello, 100)

