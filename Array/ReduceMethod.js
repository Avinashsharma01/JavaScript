let arr=[1,2,3,4,5,6,7,8,9,10]   // 1+2=3,  3+3=6, 6+4=10, 10+5=15, ........  where 1= pre and 2= cur

let add =  arr.reduce((pre, cur)=>{  
    return pre+cur
})
console.log(add)



// write a program to find largest number from the array
let avi=[9,1,2,4,6,8,7]
let largest=avi.reduce((pre, cur)=>{
    return pre > cur ? pre:cur
})
console.log(largest)



// we can also find the largest element from the array using this method
let lar=avi[0]
// console.log(lar)
for(let i=0; i<=avi.length; i++){
    if(avi[i]>lar){
        lar=avi[i]
    }
}
console.log(lar)