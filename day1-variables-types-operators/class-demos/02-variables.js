// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// let, const and var
{
  console.group("02. Variables");

  let score = 0;          // can be reassigned
  score = 10;             // ✅ fine
  console.log("score:", score);

  const country = "Nigeria";
  // country = "Ghana";   // ❌ TypeError: Assignment to constant variable
  console.log("country:", country);

  var oldWay = "avoid me"; // pre-2015 style, only in legacy code
  console.log("oldWay:", oldWay);

  let city;               // declared, no value yet
  console.log("city:", city); // undefined

  // Rule of thumb: start with const, switch to let only when you must reassign.
  console.groupEnd();
}
