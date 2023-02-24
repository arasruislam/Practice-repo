const student = {
  name: "asru islam",
  age: 21,
  class: "varsity",
  marks: {
    math: 78,
    physics: 85,
    chemistry: 94,
    biology: 75,
  },
};

// access property dot notation
const marks = student.marks;
const math = student.marks.math;
// console.log(math);

// access property with array notation
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);