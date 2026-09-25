// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Naming rules and conventions
{
  console.group("04. Naming");

  // ✅ Good: camelCase, descriptive, booleans read like questions
  const firstName = "Chioma";
  let cartTotal = 0;
  const isAdmin = false;
  const VAT_RATE = 0.075;       // UPPER_SNAKE_CASE for fixed config
  console.log(firstName, cartTotal, isAdmin, VAT_RATE);

  // ❌ Invalid (these would stop the whole file, so they stay commented)
  // let 2ndPlace = "Bola";     // starts with a digit
  // let first-name = "Ada";    // hyphen not allowed
  // let let = 5;               // reserved word

  // ⚠️ Valid but unclear. What do these mean?
  let d = 7;
  let thing = "Lagos";
  console.log(d, thing);

  // Class exercise: rename d and thing so their purpose is obvious.
  console.groupEnd();
}
