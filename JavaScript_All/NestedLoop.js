let n=2

for(let i=1; i<=5; i++){
    console.log(i)
}


for(let i=1; i<=n;  i++){
    for(let j=1; j<=i; j++){
        for(let k=1; k<=j; k++){
            console.log("Im' K")
        }
        console.log(j+"   I'm inner loop")
    }
    console.log("        I'm outer loop")
}



let m=10
let Avistr=0
for(let i=1; i<=m; i++){
    Avistr+=5
}
console.log(Avistr)
