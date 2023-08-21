function sort(students) {
  return students
    .sort((a, b) => a.age - b.age)
    .sort((a, b) => a.fullName.split(' ')[1].charCodeAt(0) - b.fullName.split(' ')[1].charCodeAt(0))
    .sort((a, b) => b.gpa - a.gpa)
    .map(student => student.fullName)
    .join(',')
};

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};

const s = [new Student(23, 88, "David Goodman"), 
new Student(25, 82, "Mark Rose"), 
new Student(22, 90, "Jane Doe"),
new Student(25, 90, "Jane Dane")];

console.log(sort(s)) // "Jane Doe,Jane Dane,David Goodman,Mark Rose"