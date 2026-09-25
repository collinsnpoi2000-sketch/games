// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Weekly Challenge: Student report card generator (20 pts, bonus +3)
// Due: Wed, Sep 30, 11:59 PM  |  Submit to week6/challenge with a README
//
// Requirements
// 1. Loop through subjects; print each with score, grade and Pass/Fail.
//    Grades: A 70+, B 60 to 69, C 50 to 59, D 45 to 49, F below 45
// 2. Total, average (1 decimal), highest and lowest score with subject names
// 3. Count passes and fails
// 4. Overall remark using switch on the average's grade letter
// 5. Promoted if average >= 50 AND no more than 1 fail
//
// Bonus: handle 3 students with an outer loop and print the class top performer.

const studentName = "Ifeoma Okafor";
const subjects = ["Maths", "English", "Biology", "Physics", "Civic Ed"];
const scores = [78, 64, 49, 91, 38];
const PASS_MARK = 45;

console.log("======= REPORT CARD =======");
console.log(`Student: ${studentName}`);
console.log("---------------------------");

// TODO: your code here
