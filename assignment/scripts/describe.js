// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to a string called 'Dane'
// We create a conditional to check if the variable name is set to 'Mary' using the === to ensure the strings are of equal value
// If the variable name is set to 'Mary', the console will log 'Hi, Mary!'
// We then create an else portion of the conditional, so that if the variable name is not set to 'Mary', the console will log 'How do you do?'
// When we run this code, since name is set to 'Dane', it will not be equal to 'Mary', so we expect the console to log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create an undefined variable named secret, and a numerical variable called code set to 123
// We create a conditional so that if the variable code is exactly equal to 123, the variable secret will be set to the string 'super' and we will set the numerical variable code to a new value of itself multiplied by 2
// Since the numerical variable code is equal to 123, the variable will be multiplied by 2, and now equal 246
// We then create a second conditional to check if the new value of the variable code is greater than 250, and if so, change the string value of variable secret to 'duper.'
// Since the new value of code is 246, it is not greater than 250, so when we console log the variable secret, we expect it to read "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent set to the boolean value, true, we create a variable called age set to the numerical value of 34, and we create a variable called zip set to the numerical value 55407
// Then, we create a conditional, if isStudent is equal to the boolean value of true, AND zip is greater than 8000, the console will log "You're a student on the west coast!"
// In the same conditional we create a second condition, so that if isStudent is equal to the boolean value of false, and age is less than 30, the console will log "What are your hobbies?"
// In the same conditional we create a third condition, so that if isStudent is equal to the boolean value of true, the console will log "Welcome to Prime!"
// Finally, in the same conditional, if none of the initial three conditions are true, we will have the console log "How about the weather?"
// Since zip is set to less than 80000, we do not expect the first condition to be true, since isStudent is not set to false, and age is set a value greater than 30, we do not expect the second condition to be true
// Since isStudent is set to true, we do expect the third condition to be true, and therefore the console should log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - instructions indicated to set colorOne to blue, and colorTwo to red
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


// FIX - Instructions indicate to set colorTwo to purple as well
// add: colorTwo = 'purple'; in the same conditional
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Instructions indicate that both temp needs to be greater than 39 AND time needs to be greater than or equal to 4
// the || indicates either or, needs to be changed to &&

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Instructions indicate that if age is greater than or equal to minAge the console will log 'enter'
// As it is, it will log 'no entry', the console log in the if portion of the conditional needs to be changed to 'enter', and the else console log needs to be change to 'no entry'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

