// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// The data types and typeof
{
  console.group("05. Data types");

  console.log(typeof "hello");    // "string"
  console.log(typeof 42);         // "number"
  console.log(typeof 3.5);        // "number"
  console.log(typeof true);       // "boolean"
  console.log(typeof undefined);  // "undefined"
  console.log(typeof 10n);        // "bigint"
  console.log(typeof Symbol("id"));// "symbol"
  console.log(typeof { a: 1 });   // "object"
  console.log(typeof [1, 2]);     // "object"   ⚠️
  console.log(typeof null);       // "object"   ⚠️ historic bug
  console.log(typeof NaN);        // "number"   ⚠️

  // Precise checks
  console.log(Array.isArray([1, 2])); // true
  const winner = null;
  console.log(winner === null);       // true

  // Dynamic typing: the type follows the current value
  let value = 5;
  console.log(typeof value);      // "number"
  value = "five";
  console.log(typeof value);      // "string"

  console.groupEnd();
}
