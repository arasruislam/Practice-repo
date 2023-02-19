/**
 * !Variable =>
 * var, let, const
 */

/**
 * !Data Type =>
 * Primitive Data Type (String, Boolean, Number),
 * Composite Data Type (Array, Function, Object, all types of objects),
 * Special Data Type (Undefined, Null)
 * */

/**
 * ! Operator =>
 * Arithmetic Operators (+, -, *, /, %),
 * Assignment Operators (=, +=, -=, *=, /= %=),
 * Incrementing and Decrementing Operators (++, --),
 * Logical Operators (&&, ||, !),
 * Comparison Operators (<, >, ==, ===, !=, !==, <=, >=)
 */

/** 
 * ! String => A string is a sequence of letters, numbers, special characters and arithmetic values or combination of all.
 * 
*/



/** 
 * * DOM --> Document Object Model
 * 
 * ! get element by there, Class Name || Id || Tag name
 * 
 * ? ClassName -> document.getElementsByClassName("Class Name");
 * ? ID -> document.getElementById("Id Name");
 * ? TagName -> document.getElementsByTagName("Tag Name");
 * 
 * * Query Selector
 * ? Single Selector -> document.querySelector("")
 * ? Multi Selector-> document.querySelectorAll("")
*/

// Option 1
function makeGray() {
    document.body.style.backgroundColor = "gray";
}
// Option 2
const makeRed = document.getElementById('make-red');
makeRed.onclick = makeRedColor;

function makeRedColor() {
    document.body.style.backgroundColor = 'red';
}

// Option 3 & mostly useful option
document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})