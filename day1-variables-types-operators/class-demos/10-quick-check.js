// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Quick check: predict each output BEFORE opening the console
{
  console.group("10. Quick check");

  console.log(typeof "10");  // 1
  console.log("10" + 5);     // 2
  console.log("10" - 5);     // 3
  console.log(10 % 3);       // 4
  console.log(typeof null);  // 5

  const x = 5;
  try {
    x = 6;                   // 6 (what happens?)
  } catch (err) {
    console.log("6 ->", err.message);
  }

  // Answers: "string", "105", 5, 1, "object", TypeError
  console.groupEnd();
}
