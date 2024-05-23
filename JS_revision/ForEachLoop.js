let arr=[1,2,3,4,5,6,7,8,9,10]
let name=['Avinash', 'Akash','Aman','Soumya', ]

name.forEach((val,i, arr)=>{  // for each loop has 3 parameter
    console.log(val,i,arr)
})

arr.forEach((val)=>{
    console.log(val*val)
})




let array=[1,2,3,4,5,6,7,8,9,10]

let addplus=(val)=>{
    console.log(val +" ===>", val+=1)
}

array.forEach(addplus)