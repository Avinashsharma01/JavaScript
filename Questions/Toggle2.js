let body=document.querySelector("body")
let btn=document.querySelector(".btn")

let curruntMode='light'
btn.addEventListener('click',(e)=>{
    if(curruntMode==='light'){
        curruntMode='dark'
        console.log("dark")
        body.classList.add('dark')
    }
    else{
        curruntMode='light'
        console.log("light")
        body.classList.remove('dark')
    }
})