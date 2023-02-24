/**
 * ! classes
 */

/**
 * ? Object has two part
 * 
 * * First: property [Attribute or state]
 * * Second: Method [Do something function & Procedure]
 */


// Syntactic sugar

class instructor {
  name;
  designation = "Web course instructor";
  team = "web team";
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
  startSupportSession(time) {
    console.log(`start the support at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for the module ${module}`);
  }
}

const amir = new instructor('amir', 'Dhaka');

console.log(amir);

amir.startSupportSession("9.00");
amir.createQuiz(60);
 

const asru = new instructor('asru islam', 'Uttara');
console.log(asru);