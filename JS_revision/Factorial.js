let num =5
let factorial = 1;

if (num < 0) {
    console.log("Factorial of a negative number doesn't exist.");
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
}
