let body=document.querySelector("body")
let btn=document.querySelector(".btn")


btn.addEventListener('click',(e)=>{
    if(body.style.backgroundColor=== ''|| body.style.backgroundColor==='white'){
        console.log("if")
        body.style.backgroundColor='black'
        btn.innerText='Light Mode'
    }
    else{
        console.log("else")
        body.style.backgroundColor='white'
        btn.innerText='Dark Mode'
    }
})
