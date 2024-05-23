// we are playing with functions in javascript 
// we are play with the function's parameters and return values and their scope and also we are playing with the function's arguments


function print(msg){
    console.log("Message:"+ msg);
    console.log("Function Name:print")
}
print("Hello World");
print();




function loop(i,n){    // i and n are the parameters of the loop function
    for(i; i< n ; i++){
        console.log("Loop:"+i);
        function add(){                     //nested function
            return console.log(i + n)
        }
    }
    add();
}

loop(0,5);
loop(1,10);  //1 and 10 are the arguments of the loop function





// all about return values in functions in javascript

function hello(){    // this function does not returning any value
    console.log("Hello World")  
}
hello();  





function add(a,b){  //  but this function returns the sum of two numbers
    return a + b;
}

let sum =add(2,3);
console.log("Sum:"+sum)