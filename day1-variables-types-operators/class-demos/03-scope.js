// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Block scope, and why const doesn't freeze objects
{
  console.group("03. Scope");

  let greeting = "Hello";

  if (true) {
    let message = "Inside";   // block scoped
    var leaky = "Oops";       // var ignores blocks
    console.log(greeting, message);
  }

  console.log(leaky);          // "Oops" (var leaked out of the if block)
  // console.log(message);     // ❌ ReferenceError: message is not defined

  // const locks the label, not the contents
  const student = { name: "Ada" };
  student.name = "Tunde";      // ✅ changing a property is allowed
  // student = {};             // ❌ TypeError: reassigning the variable
  console.log(student);

  const nums = [1, 2];
  nums.push(3);                // ✅ [1, 2, 3]
  console.log(nums);

  console.groupEnd();
}
