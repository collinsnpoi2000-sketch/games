// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// The ternary operator
{
  console.group("06. Ternary");

  const age = 16;
  const status = age >= 18 ? "adult" : "minor";
  console.log(status);

  const items = 1;
  console.log(`You have ${items} item${items === 1 ? "" : "s"}`);

  const isDark = true;
  console.log(isDark ? "🌙" : "☀️");

  // ❌ Legal but hard to read: prefer if / else if for more than two outcomes
  const s = 65;
  const g = s >= 70 ? "A" : s >= 60 ? "B" : s >= 50 ? "C" : "F";
  console.log(g);

  console.groupEnd();
}
