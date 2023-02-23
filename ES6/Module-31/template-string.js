/**
 * ! Template String (``)
 *
 * use for multi line code
 */

// normal string
const a = 4;
const b = 43;

const summary = "sum of:" + a + "and" + b + "is: " + (a + b);

// Template String
const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
