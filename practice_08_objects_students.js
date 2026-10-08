// ============================================================
// AP CSP — Practice 08: JavaScript Objects
// Unit 5: Working with Data
// ============================================================
// Instructions:
//   Work through each TODO in order.
//   Run the file after each problem to check your output.
//   Use: node practice_08_objects_students.js
// ============================================================

// -----------------------------------------------------------------
// STARTER DATA — use this for Problems 1, 3, and 4
// -----------------------------------------------------------------
const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null

function findByName(students, targetName) {
  // TODO: use .find() to search by name
  // Hint: .find() returns undefined if nothing matches — convert that to null using || (or) operator
  const found = students.find(student.name(targetName))
  return found
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 3 ---");
// console.log(findByName(students, "ChenZee"));
// console.log(findByName(students, "Jane"));
// console.log(findByName(students, "Marcus"));

// =================================================================
// PROBLEM 4 — Roster Report
// =================================================================
// Write a function printRoster(students) that uses .forEach() to
// print each student in this format:
//
//   [Grade 11] Jane — GPA: 3.8 ★
//   [Grade 12] ChenZee — GPA: 3.5
//   [Grade 10] Dakota — GPA: 3.9 ★
//
// The ★ appears only if isHonors is true.
// Try solving without the honors first THEN try the star

function printRoster(students) {
  // TODO: loop through students with .forEach()
  // TODO: print each student in the format above
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 4 ---");
// printRoster(students);

// =================================================================
// PROBLEM 5 — Object Inspector
// =================================================================
// Write a function inspectObject(obj) that uses Object.entries() to
// print every key-value pair in this format:
//
//   name → Jane
//   grade → 11
//   gpa → 3.8
//   isHonors → true
//
// It should work on ANY object — test it on the student object below
// AND on the movie object from Problem 1.
// Hint: Object.entries(obj).forEach(([key, value]) => { ... })

const student = {
  name: "Jane",
  grade: 11,
  gpa: 3.8,
  isHonors: true,
};

function inspectObject(obj) {
  // TODO: use Object.entries() and .forEach() with destructuring
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 5: student ---");
// inspectObject(student);
// console.log("\n--- Problem 5: movie ---");
// inspectObject(movie);

// =================================================================
// PROBLEM 6 — Sum the Values
// =================================================================
// Write a function sumValues(obj) that:
//   - Uses Object.values() to get all the values
//   - Adds up only the values that are numbers (typeof value === "number")
//   - Returns the total
// I would chain forEach like the lastg problem
//
// Expected output:
//   sumValues({ math: 92, english: 85, history: 78, name: "Alex" }) → 255

function sumValues(obj) {
  // TODO: get the values with Object.values()
  // TODO: loop through them, add only numbers to a total
  // TODO: return the total
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 6 ---");
// const scores = { math: 92, english: 85, history: 78, name: "Alex" };
// console.log(sumValues(scores));  // → 255
// console.log(sumValues(student)); // → 11 + 3.8 = 14.8  (skips strings and booleans)

// =================================================================
// STRETCH — Push a New Student
// =================================================================
// Use .push() and your createStudent() function to add a 5th student.
// Then call printRoster() again — no changes to the function needed!

// TODO (stretch): push a new student into the students array
// students.push(createStudent( ??? ))

// console.log("\n--- Stretch: Updated Roster ---");
// printRoster(students);

// EXTRA STRETCH:
// Rewrite printRoster() using Object.entries() so it prints every
// property of each student dynamically — even if you add a new property later.
