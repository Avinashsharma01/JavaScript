let h1=document.querySelector("h1")
let div=document.querySelector(".new")
let newele=document.createElement('h2')
newele.innerText='This is appended, click on me and see the magic'
newele.style.cursor='pointer'
div.append(newele)
let body=document.querySelector("body")


newele.onmouseover=()=>{
    console.log('Hello')
    h1.innerText='this is inserted by javascript'
}

newele.onclick=()=>{
    h1.innerText=''
}


