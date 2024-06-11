let array=[1,2,3,4,5,6,7,8,9,10]

let newarray=array.map((value, index, arr)=>{
    console.log("this is value",value)
    console.log("this is index",index)
    console.log("this is array",arr)
})