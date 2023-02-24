/** 
 * ! Topic Today I Learn
 * * Class
 * * super()
 * * constructor()
 * * extends
*/

class TeamMember {
  name;
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web course instructor";
  team = "web team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for the module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web course instructor";
  team = "web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`please develop the ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job placement commandos";
  team = "web team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`please develop the ${feature}`);
  }
  prepareStudent(version) {
    console.log(`please release the version ${version}`);
  }
}

const alia = new Developer("Alia bhatt", "Dhaka", "React");
console.log(alia);
alia.provideFeedback();
const asru = new JobPlacement("Asru Islam", "Uttara", "Dhaka");
console.log(asru);
