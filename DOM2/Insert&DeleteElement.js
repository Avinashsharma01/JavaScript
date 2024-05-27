let newElement=document.createElement("h1")
newElement.innerText='This is append by javaScript'
let div= document.querySelector(".insert")
//append
div.append(newElement)



//prepend
let preElement=document.createElement("h1")
preElement.innerText="This is Prepend by javascript"
div.prepend(preElement)




//before
let soumya=document.querySelector(".hello")
let beforeEle=document.createElement("h3")
beforeEle.innerText="This is insert before the Soumya"
soumya.before(beforeEle)



//after
let afterEle=document.createElement("h3")
afterEle.innerText="This is insert after the soumya "
soumya.after(afterEle)


//Delete Element 
let del=document.querySelector(".delete")
// del.remove()

