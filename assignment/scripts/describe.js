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
// Line 36: Declares a variable as string 'Dane'
// Line 38: Begins a conditional statement block. The block checks if the variable 'name' is equivalent
// in type and content to the string 'Mary'. If it is, 'Hi, Mary!' is logged to the console.
// If the value of name is not 'Mary', 'How do you do?' is logged to the console.

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
// Line 57: Declares variable secret, it currently has 'null' value(?).
// Line 59: Declares variable 'code', setting it's value to 123.
// Line 61: Conditional statement, where if the value of var 'code' is equivalent to 123 in type and value
// the value of var 'secret' is set to string 'super', and the value of var 'code' is equal to 246 (multiplied by its held value twice)
// Line 66: The next conditional statement checks if var 'code' has a value higher than 250. If so,
// the value of var 'secret' is set to string 'duper'.
// Line 70: logs the value of var 'secret', currently the string 'duper', to the console
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
// Line 82-84 declares three variables, values Boolean true, and ints 34 & 55407
// Line 86: nested conditional statement. First checks isStudent to true & zip > 80000
// Both are not true, so it moves to the next block. if isStudent is false OR age <30.
// Neither are true, so it checks if 'isStudent' is true. It is. 'Welcome to Prime!' is logged to the console'
// Line 93 is an else statement that if none of the above three conditions were met, would print 'How about the weather?'.
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



//4. We start with three variables -- colorOne's value is set to string 'blue' and
// colorTwo's value is set to string 'red', and mix's value is set to boolean true.
// PROBLEM: As written, the conditional would only set colorOne's value to 'purple'
// PROBLEM: Only colorOne is reassigned a value. Need also to reassign colorTwo
// After fixing we check if mix is true.
//    It is: the conditional sets colorOne and colorTwo values to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX: colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set constant to 4.
// Before fixing the conditional checks if temp is higher than 39 OR
//    if time is greater or equal to  4
// Both values are true, so the condition is met and the console logs 'throw away the food!'
//---- PROBLEM: The logical operator here is an OR, instead of an AND.
//      Which means that even if the temp was within threshold, the time alone would prompt the toss.
// ASSUMPTION: I am assuming that the time safety is meant to be constant based on food science or whatever.
//      Were this to need to chance depending on the food/conditions, we could declare 'time' with 'let'.
/*
let temp = 40;
const time = 4;
// ASSUMPTION FIX change to 'let time = 4;' in case we need that to be a value that is mutable.

if (temp > 39 || time >= 4) {
//FIX Above Line: 'if (temp > 39 && time >=4) {' will ensure BOTH conditions are met before tossing the food.
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// Before fixing, the conditional checks if var 'age' is less than or equal to var 'minAge'
// Before fixing, the console would log 'no entry'. Which would bar 21 y/o from entering!
// PROBLEM: The conditional statement in the if block is set to less-than-equal,
//      which would result barring people whose age IS the minAge requirement.
// After fixing, the conditional checks whether the value of var 'minAge' is greater than var 'age'.
// Alternatively, the fix could be to check whether the value of var 'age' is less than var 'minAge'
// With the fix implemented, console will log 'enter'.
// 21 y/o can now get their dance on, or whatever they're doing on the other side of this age check.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
//FIX Replace Above Line: if (minAge > age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
