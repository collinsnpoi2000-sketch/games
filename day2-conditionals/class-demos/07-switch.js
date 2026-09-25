// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// switch statements
{
  console.group("07. switch");

  const day = "Sat";
  let plan;

  switch (day) {
    case "Mon":
    case "Wed":
    case "Fri":
      plan = "Class day";
      break;
    case "Tue":
    case "Thu":
      plan = "Assignment day";
      break;
    case "Sat":
    case "Sun":
      plan = "Weekend project";
      break;
    default:
      plan = "Unknown day";
  }
  console.log(plan);

  // Forgotten break: watch what happens
  switch (2) {
    case 2: console.log("two");
    case 3: console.log("three (fell through!)");
  }

  // Traffic light
  const light = "amber";
  switch (light) {
    case "red":   console.log("Stop");      break;
    case "amber": console.log("Get ready"); break;
    case "green": console.log("Go");        break;
    default:      console.log("Signal fault");
  }

  console.groupEnd();
}
