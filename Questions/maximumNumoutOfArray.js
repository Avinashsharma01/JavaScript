let marks=[45,86,35,98,78,68,86,48,86,59]
marks.filter((ele)=>{
    if(ele>80){
        console.log(ele)
    } 
})
console.log(" ")


// we can do that using tradition looop
for(let i=0; i<marks.length; i++){
    if(marks[i]>80){
        console.log(marks[i])
    }
}