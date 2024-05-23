

let countSpace=(str)=>{
    let count=0
    for(let i=0; i<str.length; i++){
        console.log(str[i])
        if(str[i]===' '){
            count++
        }
    }
    console.log(count)
}
countSpace("Avinash Kumar Sharma")