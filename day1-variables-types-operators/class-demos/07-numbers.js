// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Numbers and Math
{
  console.group("07. Numbers");

  console.log(0.1 + 0.2);              // 0.30000000000000004
  console.log((0.1 + 0.2).toFixed(2)); // "0.30" (a string)

  console.log(10 / 0);                 // Infinity
  console.log("abc" * 2);              // NaN
  console.log(Number.isNaN("abc" * 2));// true
  console.log(NaN === NaN);            // false!

  console.log(Math.round(4.6));        // 5
  console.log(Math.floor(4.9));        // 4
  console.log(Math.ceil(4.1));         // 5
  console.log(Math.max(3, 9, 1));      // 9
  console.log(Math.random());          // 0 <= n < 1

  const dice = Math.floor(Math.random() * 6) + 1;
  console.log("Dice roll:", dice);     // 1 to 6

  // Money tip: work in kobo (integers), divide by 100 only for display
  const priceInKobo = 1999;
  console.log(`₦${(priceInKobo / 100).toFixed(2)}`); // ₦19.99

  console.groupEnd();
}
