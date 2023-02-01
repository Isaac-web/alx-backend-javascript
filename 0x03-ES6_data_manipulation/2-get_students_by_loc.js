/* eslint-disable linebreak-style */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter((student) => student.city === city);
}
