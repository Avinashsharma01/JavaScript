let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(array)

// lets iterate this array with the help of array 
let lenght=array.length
for(let i=0; i<lenght; i++){
    console.log(array[i])
}

console.log('Avinash')


// lets add this all element from this array with the help of for of loop
let sum=0
for(let element of array){
    sum+=element
}
console.log(sum)


// lets add this all element from this array with the help of simple for loop
let add=0
for(let i=0; i<array.length; i++){
    add+=array[i]
}
console.log(add)



let aaa=[1,23,4,4,5]
aaa.push(3333)
console.log(aaa)

function add(a,b){
    return a+b
}
