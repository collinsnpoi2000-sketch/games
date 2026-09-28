// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// if / else if / else
{
  console.group("05. if / else");

//if Block
// if (the comaprison) {
// //body of the code
//}


  const newAge = prompt ("enter your age");
  
  if(newAge < 18) {
    alert(` At ${newAge}, you are still an underage fellow.`)
  } else{
    alert(`At ${newAge}, you an adult.`)
  }

  const score = prompt("enter student");
  let grade;

  if (score >= 70) {
    grade = "A";
  } else if (score >= 60) {
    grade = "B";
  } else if (score >= 50) {
    grade = "C";
  } else if (score >= 45) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Score ${score}: grade ${grade}`);

  // Nested conditions (keep to 2 levels)
  const isLoggedIn = true;
  const isAdmin = false;
  if (isLoggedIn) {
    if (isAdmin) {
      console.log("Admin panel");
    } else {
      console.log("User dashboard");
    }
  }

  // Class exercise: change score to 90, 55, 30. Then move the >= 45 check to the top. What breaks?
  console.groupEnd();
}
