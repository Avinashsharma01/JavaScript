let divs=document.querySelectorAll("div")
console.log(divs)
// div[0].innerText='Avinash'
// div[1].innerText='Kumar'
// div[2].innerText='Sharma'


// let i=1
// for(div of divs ){
//     div.innerText=`Avinash  ${i}`
//     i++
// }


for(let i=0; i<divs.length; i++){
    divs[i].innerText=`Aviansh ${i}`
}