let a=document.querySelector('.heading')
let hello=()=>{   //it's a arrow function
        a.style.color='white' 
        a.style.fontSize='50px'
        a.style.backgroundColor='green'
        a.style.borderRadius='50px'
        a.style.padding='15px'
        a.style.textAlign='center'
}

hello()


let Avinash = function(a, b){
    console.log("hello sir")
    let c=a+b;
    return c
}
let Avi=Avinash(2,3)
console.log(Avi)



// Nested function start frome here 
function addSqure(){
    let a=squre(2)
    let b=squre(2)
    let c=squre(2)
    function squre(num){
        return num*num
    }
    return a+b+c
    
}

let print=addSqure()
console.log(print)



function add(){
    console.log(print*print)
}

add()




// from here we start the advance function like 
//  arrow function and callback function

let arrowfun =()=>{
    console.log("Hello World")
}
arrowfun()


//singal line function 
let express = ()=> console.log("Helllo Avinash")
express()

 




// callback function start from here
 
let calculate = (a,b, add) =>{
    return add(a,b)
}

calculate(5,3, function(e, r){
    console.log(e+r)
})


 

// example

let arr=[2,4,5,6,7,-7,7,5,4,-5,9]

let negetive=(num)=>{
    return num === 9
}

r=arr.findIndex(negetive)
console.log(r)

arr.forEach((num ,k)=>{
    console.log("array", num, k)
})

