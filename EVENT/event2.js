let color=document.querySelector(".color")
let clickbtn=document.querySelector(".btn")
let dblclick=document.querySelector(".dblbtn")
// Mouse events 
function Cchange(){
    color.style.backgroundColor='red'
}
function out(){
    color.style.backgroundColor='gray'
}

// Click events
function Click(){
    color.style.backgroundColor='yellow'
}
function Ondbl(){
    color.style.backgroundColor='gray'
}

//style the div by click event
function sty(){
    color.style.borderRadius='50%'
}


// this is another kind of method 
let color2=document.querySelector(".color2")
color2.onclick=()=>{
    console.log("Hello")
}