// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Activity 2: Cinema ticket pricer (groups of 3, 35 min)
// Roles: Driver (types), Navigator (reads rules), Tester (runs the test cases)
//
// Base price by age (use if / else if)
//   Under 3 ....... Free
//   3 to 12 ....... ₦2,000
//   13 to 59 ...... ₦4,000
//   60 and above .. ₦2,500
// Day (use switch):  Tue = "Cheap Tuesday", 50% off.  Sat/Sun add ₦500.
// Format (use a ternary): 3D adds ₦1,000.
// Student with valid ID aged 13 to 25 gets 20% off (use &&).
// Apply in this order: base → day rule → 3D → student discount.
// Free tickets stay free.
//
// Test cases
//   age 20, Tue, 3D, student  → ₦2,400
//   age 70, Sat, 2D           → ₦3,000
//   age 2, any day            → ₦0
//
// Stretch: accept "tue", "TUESDAY" etc.; show the result on the page too.

const age = Number(prompt("Enter age:"));
const day = prompt("Day (Mon, Tue, ... Sun):");
const is3D = (prompt("3D? (yes/no)") ?? "").toLowerCase() === "yes";
const isStudent = (prompt("Student? (yes/no)") ?? "").toLowerCase() === "yes";


if (Number.isNaN(age) || age < 0) {
  console.log("❌ Please enter a valid age.");
} else {
  let price;


if (age <3) {
  price =0;
} else if (age <=12) {
  price= 2000;
} else if (age <= 59) {
  price = 4000;
} else{
  price = 2500;
}


let discountvalue;

switch (day) {
  case "Tue":
  discountvalue = price *50/100;
  price = price - discountvalue;
  break;
case "Sat":
  case "Sun":
    price = price +500;
    break
}

    price = price + is3D ? 1000 : 0

    let studentDiscountValue;
    if (isStudent && age >= 13 && age <= 25) {
      studentDiscountValue = price * 20 * 100;
      price = price - studentDiscountValue;
    }
      console.log(`Final price: ₦${price}`);
}


  if (age < 3) {
    price = 0;
  } else if (false /* TODO: 3 to 12 */) {
    // TODO
  }
  // TODO: remaining age brackets

  
  // 2. Day adjustments with switch
  switch (day) {
    case "Tue":
    
      break;
    // TODO: weekend cases
  }

  // 3. 3D surcharge with a ternary
  // TODO

  // 4. Student discount with &&
  // TODO


