//JavaScript Array shift()
let arr=['Avinash', 'Brijesh', 'Soumya','Aman','ajay','Babalu']
console.log(arr)

let shift=arr.shift()
console.log(arr)  //shift method is used to shift the first element from the array and return it 
console.log(shift) // it return the element (Avinash)



//JavaScript Array unshift()
let unshift=arr.unshift("JavaScript") //it add an element from the beggining of  the array 
console.log(arr)
console.log(unshift)  // and don't know why but it returns the lenght of the array 


//JavaScript Array splice()
let ag=['aa','bb','cc','dd','ee','ff','gg']
console.log(ag)
ag.splice(1,1,'Hello')  // spice method used to add and remove element from the array 
console.log(ag)

