// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Strings in depth
{
  console.group("06. Strings");

  const a = 'single quotes';
  const b = "double quotes";
  const name = "Emeka";
  const c = `Hi ${name}, 2 + 2 = ${2 + 2}`;
  console.log(a, "|", b, "|", c);

  const poem = `Line one
Line two`;
  console.log(poem);

  const s = "  JavaScript  ";
  console.log(s.length);                 // 14
  console.log(s.trim());                 // "JavaScript"
  console.log(s.toUpperCase());          // "  JAVASCRIPT  "
  console.log(s.trim()[0]);              // "J"
  console.log(s.includes("Script"));     // true
  console.log(s.trim().slice(0, 4));     // "Java"
  console.log(s.replace("Java", "Type"));// "  TypeScript  "
  console.log("a,b,c".split(","));       // ["a", "b", "c"]

  // Strings are immutable: methods return new strings
  console.log(s);                        // unchanged

  console.groupEnd();
}
