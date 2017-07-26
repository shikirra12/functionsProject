// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
  if (x > y){
    return 'x is larger than y';
  } else (x < y)
    return 'y is larger than x';
    // Your answer here
}

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
  if (x > y) {
    if (x > z) {
      return 'x is larger than y and z';
    }
  }
    if (y > z) {
      if ( y > x) {
        return 'y is larger than x and z';
      }
    }
    if (z > y) {
      if (z > x) {
        return 'z is larger than x and y';
      }
    }
    // Your answer here
}
console.log(maxOfThree (1,2,3));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u') {
    return true; 
  } else {
      return false;
  // Your answer here
  }
}
console.log(isVowel('a'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x,y) {
  return x + y;
}
console.log(sum(2,2));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x,y,z) {
  return (x + y + z)/3;
}
console.log(avg(1,2,3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(word) {
  return word.length;
}
console.log(getLength('kitty'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1,num2) {
  if (num1 < num2){
    return true;
  } else (num1 > num2)
    return false;
}
console.log(greaterThan(15,20));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(firstName) {
  console.log("Hello, " + firstName + "!");
}
greet('Shikirra');

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(adjective, color, animal, thing) {
  console.log("A " + adjective + " " + color + " " + animal + "  " + "jumps over " + thing + ".");
}
madlib("quick", "brown", "fox", "fence")
