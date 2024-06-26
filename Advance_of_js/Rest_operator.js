let fun=function(...parameter){
    return parameter.reduce((pre, cur)=> pre+cur)
}

console.log(fun(1,2,3,4,5,6,7,8,9,10))