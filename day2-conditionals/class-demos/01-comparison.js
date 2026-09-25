// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Day 2 (Fri, Sep 25): Comparison operators
{
  console.group("01. Comparison");

  console.log(5 === 5, 5 !== "5", 8 > 3, 8 < 3, 18 >= 18, 4 <= 3);

  // == converts types, === does not
  console.log(5 == "5");            // true
  console.log(5 === "5");           // false
  console.log(0 == false);          // true 😬
  console.log(0 === false);         // false
  console.log(null == undefined);   // true
  console.log(null === undefined);  // false
  console.log("" == 0);             // true 😬

  // Strings compare by character code
  console.log("apple" < "banana");  // true
  console.log("Zebra" < "apple");   // true (uppercase comes first)

  // Class rule: always use === and !==
  console.groupEnd();
}
