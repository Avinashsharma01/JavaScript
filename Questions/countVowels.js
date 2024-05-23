// this program is used to count the vowel from the string 
function countVowel(str) {
    let count = 0
    for (const char of str) {
        console.log(char)
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++
        }
    }
    console.log(`Total Vowel in ${str} is:- ${count}`)
    return count
}
countVowel("Avinash")



// this program is used to count the vowel from the string 
// with the help of aarow function 
let countV = (str) => {
    let c = 0
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            c++
        }
    }
    console.log(`Total vowel in ${str} is ${c}`)
    return  c
}
countV("HelloA")


