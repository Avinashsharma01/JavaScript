let itme=[345,567,786,654,986,574,456]
console.log(itme)

for(let i=0; i<itme.length; i++){
    console.log(i, "==>", itme[i])
    let offer=itme[i]/10
    console.log(offer)
    itme[i]=itme[i]-offer
    // itme[i]-=offer
    console.log(itme[i])

}
console.table(itme)