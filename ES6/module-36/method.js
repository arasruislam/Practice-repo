const student = {
  name: "Ashraful Islam",
  money: 5000,
  study: "Math",
  subject: ["calculate", "algebra", "geometry"],

  //  method আর মধ্যে obejct  আর কোন property access  করতে হলে this.objectPropertyName দিয়ে object property কল করতে হবে। 
  exam: function () {
    return this.name + " is participating in an exam";
  },
    improveExam: function (subject) {
    // call one method inside of another method
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDay: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};

const output = student.exam();
// console.log(output);
const reExam = student.improveExam("Algebra");
// console.log(reExam);
const remaining = student.treatDay(600);
// console.log(remaining);
