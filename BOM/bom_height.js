function Avinash() {
    console.log("Innerheight:- " + window.innerHeight);
    console.log("InnerWidth:- " + window.innerWidth);
    console.log("outerHeight:- " + window.outerHeight);
    console.log("outerWifth:- " + window.outerWidth);

    document.write("<br>Innerheight:- " + window.innerHeight + "<br>");
    document.write("InnerWidth:- " + window.innerWidth + "<br>");
    document.write("outerHeight:- " + window.outerHeight + "<br>");
    document.write(" outerWifth:- " + window.outerWidth + "<br>");
}
Avinash();



//open and close window method in javascript
//open and close window method in javascript
//open and close window method in javascript
//open and close window method in javascript
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let soumya;
open.addEventListener("click", () => {
    soumya = window.open("https://avinashsharma.000.pe", "", "width=700px, height=500px, left=400px, top=150px");
});

//open and close window method in javascript
//open and close window method in javascript
//open and close window method in javascript
//open and close window method in javascript
close.addEventListener("click", () => {
    soumya.close();
});





// Mouse button event 
// Mouse button event 
// Mouse button event 
// Mouse button event 



// let mouse=document.getElementsByClassName("avi");
let mouse = document.querySelector(".avi");
console.log(mouse);
mouse.addEventListener("mousedown", (e) => {
    let a = e.button;
    console.clear();
    console.log(a);
    if (a == 0) {
        mouse.style.backgroundColor = 'red';
    }
    else if (a == 1) {
        mouse.style.backgroundColor = 'lime';
    }
    else {
        mouse.style.backgroundColor = 'yellow';
    }
});
//keydown properties start drom here
//keydown properties start drom here
//keydown properties start drom here
//keydown properties start drom here
//means which key of the keyboard was clicked



let input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    let hello = e.key;
    let somu='Enter';
    console.log(typeof(hello));
});