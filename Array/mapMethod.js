let array=[1,2,3,4,5,6,7,8,9,10]
array.map((val, index, arr)=>{  // it is very similer to forEach loop in javaScript 
    // console.log(val,index, arr)
})



const arry=[2,4,6,8,10,12,14,16,18,20]
let newarry=arry.map((val)=>{  // it is also used to return a new array 
    console.log(val)
    return val*2
})

console.log(newarry)


let Avi=[11,22,33,44,55,66,77,88,99,100]

let newarray=Avi.map((item)=>{
    console.log(item)
})