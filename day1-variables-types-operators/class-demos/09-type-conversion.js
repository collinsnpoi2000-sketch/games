// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Implicit coercion vs explicit conversion
{
  console.group("09. Type conversion");

  // Implicit: JavaScript guesses
  console.log("5" + 2);        // "52"  (+ with a string concatenates)
  console.log("5" - 2);        // 3
  console.log("5" * "2");      // 10
  console.log(true + 1);       // 2
  console.log("hello" - 1);    // NaN
  console.log(null + 5);       // 5
  console.log(undefined + 5);  // NaN

  // Explicit: you decide (preferred)
  console.log(Number("42"));        // 42
  console.log(Number("42px"));      // NaN
  console.log(parseInt("42px"));    // 42
  console.log(parseFloat("3.5kg")); // 3.5
  console.log(String(99));          // "99"
  console.log((99).toString());     // "99"
  console.log(Boolean(0));          // false
  console.log(Boolean("hi"));       // true

  // prompt() and form inputs always give strings.
  // const age = Number(prompt("Your age?"));

  console.groupEnd();
}
