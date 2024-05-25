// Counting Loop (using for):
for (let i = 0; i < 10; i++) {
    console.log(`Number: ${i}`);
}



//   Iterating Over Array (using for...of):
const numbers = [10, 20, 30];
for (const number of numbers) {
    console.log(`Number: ${number}`);
}



// Iterating Over Object Properties (using for...in):
const user = { name: 'John', age: 30 };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}



// Applying Function to Array Elements (using forEach):
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));



// Questions and Answers   // Questions and Answers
// Questions and Answers  // Questions and Answers



// 1. For Loop
// Question: Write a for loop to print the numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//   Explanation: This loop initializes i to 1, checks if i is less than or equal to 10, prints i, and then increments i by 1 after each iteration.




// 2. for...of Loop
// Question: Write a for...of loop to print each element of an array ['a', 'b', 'c', 'd'].
const letters = ['a', 'b', 'c', 'd'];
for (const letter of letters) {
  console.log(letter);
}
// Explanation: This loop iterates over each element in the letters array and prints it.






// 3. for...in Loop
// Question: Write a for...in loop to print all the keys and values of an object {name: 'Alice', age: 25, city: 'Wonderland'}.
const person = {name: 'Alice', age: 25, city: 'Wonderland'};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Explanation: This loop iterates over each property in the person object, printing the key and its corresponding value.







// 4. forEach Loop
// Question: Write a forEach loop to print each element of an array ['apple', 'banana', 'cherry'].
const fruittt = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Explanation: This forEach loop applies the provided function to each element in the fruits array, printing each fruit.










