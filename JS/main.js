// NOTE: The Console
/*
* ****************
! Console Log
* ****************

* javaScriptPage.html <line: 83>
*/

//? The console is a point where we, as developers, can have a spot to help us debug.  We can easily track our code and test.  JavaScript is meant to interact with our DOM as a whole.  Understand that the console is a tool, not a result.  We will be using it to track some various aspects of JS.

console.log('Hello World!');
//? Making sure that our script.js is linked to our HTML, we can access our console by right-clicking and choosing "inspect" and then selecting "console".
//? See if you can find out the quick keys to access it.

//? We can pass a multitude of information through it to view within the browsers console.
console.log(2);
//? We can pass multiple values into it as well, separating them with a comma:
console.log("One Value", 2, true);
//? We can do simple math:
console.log(10 + 12);

// NOTE: Variables
/*  
* ****************
! Variables
* ****************

* javaScriptPage.html <line: 108>

? What is a variable?
    - named containers for sorting data
    - resources that we call upon later.
? We store data, which could be a value or a function, that we reference.
    - can hold multiple types of data.
*/

let a = 2;
/* 
    - "let": our KEYWORD
    - "a": the NAME of our variable
    - "=": our ASSIGNMENT OPERATOR
    - "2": is our variable VALUE
*/

//? lets add another variable
let b = 1;

console.log('Adding:', a + b); //? What should be expected

//? We do have some restrictions with variables.
//* listed within javascriptPage.html - Variables - inClassNotes

let startsWithLetter = 'Works!';
let _startsWithUnderscore = "Works!";
let $startsWithDollarSign = "Works!";
// let 4startsWithNumber = 'Breaks :(';
console.log(startsWithLetter, _startsWithUnderscore, $startsWithDollarSign);

//? camelCase is an easier form to read.  ex:
let myName = 'Eric';
let myname = 'Eric';

//? We note our variables with keywords:
/*
    - var:  'old' keyword for variable.  ** We won't be using this as often but is still a viable to use.  We will be focusing on "let" and "const" throughout this course.

    - let: 'new' keyword for variables (introduced with ES6 *newest version of ECMAScript, which is a standarization of JS)

    - const: also 'new' and declares a unchangeable, or constant, variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';
console.log(variable, letVariable);