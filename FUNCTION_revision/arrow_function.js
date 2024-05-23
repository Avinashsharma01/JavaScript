let arr=[1,2,3,4,5,6,7,8,9,10,343,43,566,998]


const sum= (a,b)=>{
    return a+b
}
console.log(sum)  //sum is a variable which is store the value as variable store the value 
// becouse it store a function defination that why this is a function right now
console.log(sum(3,5))



let array=()=>{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
array()



let without = () => console.log("Hello Wolrd")
without()
