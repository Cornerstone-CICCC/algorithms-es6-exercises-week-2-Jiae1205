/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function (instructors) {
  const result = {};
  for (const instructor of instructors) {
    const course = instructor.course;
    const name = instructor.name;
    if (!result[course]) {
      result[course] = [];
    }
    result[course].push(name);
  }
  return result;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
); //{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}

module.exports = organizeInstructors;
