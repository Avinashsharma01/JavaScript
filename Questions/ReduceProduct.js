let arr = []
let n = 10
for (let i = 1; i <= n; i++) {
    arr.push(i)
}
console.log(arr)


let product = arr.reduce((pre, cur) => {
    return pre * cur
})
console.log(product)