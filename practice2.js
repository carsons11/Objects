// =================================================================
// PROBLEM 2 — Build Your Own Object
// =================================================================
// Write a function createStudent(name, grade, gpa) that:
//   - Returns an object with those three properties
//   - Also includes isHonors: true if gpa >= 3.5, false otherwise
//
// Expected output:
//   createStudent("Alex", 11, 3.7)  → { name: "Alex", grade: 11, gpa: 3.7, isHonors: true }
//   createStudent("Sam",  10, 2.9)  → { name: "Sam",  grade: 10, gpa: 2.9, isHonors: false }

function createStudent(name, grade, gpa) {
  // TODO: return an object with name, grade, gpa, and isHonors
  isHonors = false
  if (gpa>=3.5){
    isHonors = true
  }
  const student = {name: name, grade: grade, gpa: gpa, isHonors: isHonors}
  return student
}

// Test your function — uncomment when ready:
console.log(createStudent("Alex", 11, 3.7));
console.log(createStudent("Sam", 10, 2.9));