let arr=[1,2,3,4,5,6,7,8,9,10]

arr.filter((val)=>{ // this is fillter all even number from the array
    if(val%2==0){
        console.log(val)  
    }
})

arr.filter((val)=>{ // it filters all the odd number from the array
    if(val%2==1){
        console.log('this is even number:- '+val)
    }
})

let newarr= arr.filter((val)=>{
    if(val%3==0){
        console.log('this is odd number:- '+val)
        return val
    }
})
console.log("this is original", newarr)





// we can also filter an array with tradional for loop

console.log('e')
console.log('e')
for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}