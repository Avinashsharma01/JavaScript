// addEventListener

let div=document.querySelector(".color")
div.addEventListener('click',(e)=>{
    console.log(e)
})
// EventListeners are used for multiple event at the same time 


//removeEventListener
//removeEventListener
//removeEventListener
//removeEventListener

let fun1=()=>{
    console.log("This is function 1")
}
div.addEventListener('mouseover',fun1)



let fun2=()=>{
    console.log("This is function 2")
}
div.addEventListener('click',fun2)



let fun3=()=>{
    console.log("This is function 3")
}
div.addEventListener('click',fun3)



let fun4=()=>{
    console.log("This is function 4")
}
div.addEventListener('click',fun4)



let fun5=()=>{
    console.log("This is function 5")
}
div.addEventListener('click',fun5)


// i want to remove the fun3 
div.removeEventListener('click',fun3)


// i want to remove the fun3 
div.removeEventListener('mouseover',fun1)








// callback function is a kind of function which is used as an argument and parameter in another function