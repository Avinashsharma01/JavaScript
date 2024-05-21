let p=document.querySelector(".parent")
console.log(p.children)
let allchild=p.children

for(let i=0; i< allchild.length; i++){
    console.log(allchild[i].innerHTML)
}

// it's very important concetps 

// Document traversell 
// 1. Parent to child 
// 2. child to parent 


let day=document.querySelector(".day")
console.log(day.parentElement)

let cTOp=day.parentElement
let collection=cTOp.children

console.log(collection)

for(let j=0; j<collection.length; j++){
    console.log(collection[j].innerHTML)
}



