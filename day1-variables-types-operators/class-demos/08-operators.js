// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Arithmetic and assignment operators
{
  console.group("08. Operators");

  console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 % 2, 2 ** 3); // 9 5 14 3.5 1 8

  const n = 12;
  console.log(`${n} is even?`, n % 2 === 0);

  let points = 10;
  points += 5;  console.log(points); // 15
  points -= 3;  console.log(points); // 12
  points *= 2;  console.log(points); // 24
  points /= 4;  console.log(points); // 6
  points %= 4;  console.log(points); // 2
  points **= 3; console.log(points); // 8

  let count = 0;
  count++; console.log(count); // 1
  count--; console.log(count); // 0

  // Precedence
  console.log(2 + 3 * 4);   // 14
  console.log((2 + 3) * 4); // 20

  console.groupEnd();
}
