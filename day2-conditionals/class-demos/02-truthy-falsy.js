// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Truthy and falsy values
{
  console.group("02. Truthy and falsy");

  const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
  for (const v of falsy) console.log(v, "→", Boolean(v));

  const surprisinglyTruthy = ["0", "false", " ", [], {}, -1];
  for (const v of surprisinglyTruthy) console.log(v, "→", Boolean(v));

  const username = "";
  if (username) {
    console.log(`Welcome, ${username}`);
  } else {
    console.log("Please enter a username");
  }

  const items = [];
  if (items.length) {
    console.log("Cart has items");
  } else {
    console.log("Cart is empty");
  }

  console.groupEnd();
}
