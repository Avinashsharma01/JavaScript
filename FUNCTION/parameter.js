function para(i,b){
    for(i=1; i<=b; i++){
        console.log("Avinash:-"+i)
    }
}

para(1,1)

//Default Parameter Values
function add(a,b=10){ // defalt parameter
    return c=a+b
}
console.log(add(5))


//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function rest(first, ...rest){
    console.log(first)
    // console.log(rest)
}

let a=[1,2,3,4,5,6,7,8,9,10]

let restfun=rest(a)



//Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x)

// Function Rest Parameter

function summ(...rest){
    let add=0
    for(let arg of rest)  add+=arg 
    return add
}

let pr=summ(1,2,3,5,6,7,8,9,10)
console.log(pr)