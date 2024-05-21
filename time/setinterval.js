const container = document.querySelector(".container");
let btn=document.querySelector(".btn");
let btn1=document.querySelector(".btn1");


btn1.addEventListener("click", ()=>{
    let a = 0;
    let hello= setInterval(amimation, 10);
    function amimation() {
        a = a + 1;
        console.log(a);
        if(a==650){
            clearInterval(hello)
        }else{
            container.style.marginLeft=a+ "px";
        }
    }
    btn.addEventListener("click",()=>{
        clearInterval(hello)
    })
})
