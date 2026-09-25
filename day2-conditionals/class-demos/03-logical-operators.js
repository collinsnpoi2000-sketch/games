// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// &&, || and !
{
  console.group("03. Logical operators");

  const age = 22;
  const hasTicket = true;
  const isVIP = false;

  if (age >= 18 && hasTicket) console.log("Entry allowed");
  if (isVIP || age >= 65) console.log("Priority seating");
  if (!hasTicket) console.log("Buy a ticket first");
  if ((age >= 18 && hasTicket) || isVIP) console.log("Welcome in");

  // Short-circuiting: && and || return a value
  const name = "" || "Guest";
  console.log(name);                 // "Guest"

  const isLoggedIn = true;
  isLoggedIn && console.log("Show dashboard");

  console.log(!!"hello");            // true (double NOT converts to boolean)

  console.groupEnd();
}
