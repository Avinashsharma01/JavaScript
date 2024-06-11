
// Example of error handling 

try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log('An error occurred:', error.message);
} finally {
    console.log('This will run no matter what.');
}

function riskyOperation() {
    throw new Error('Something went wrong!');
}