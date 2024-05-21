let container=document.querySelector(".container");
let btn=document.querySelector(".btn");
console.log(container);

const hello= setTimeout(()=>{
    console.log("Hello sir");
    container.style.marginLeft="250px"
    container.style.width="300px"
    container.style.height="300px"
},1000);

btn.addEventListener("click",()=>{
    clearTimeout(hello)
})

// it is a concept
// it is a concept
const Avinash=()=>{
    console.log("Jai Bajrang Bali")
}
setTimeout(Avinash, 5000)
// it is a concept
// it is a concept