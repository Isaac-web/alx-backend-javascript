/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const matchingStudents = students.filter((s) => s.location === city);

  return matchingStudents.map((s) => {
    const gradeObject = newGrades.filter((g) => g.studentId === s.id)[0];

    if (gradeObject && gradeObject["grade"]) s.grade = gradeObject["grade"];
    else s.grade = "N/A";

    return s;
  });
}
