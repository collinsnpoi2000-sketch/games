// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// ?? (nullish coalescing) and ?. (optional chaining)
{
  console.group("04. ?? and ?.");

  const qty = 0;
  console.log(qty || 1);   // 1  ❌ treats 0 as missing
  console.log(qty ?? 1);   // 0  ✅ only null/undefined count as missing

  let theme;
  console.log(theme ?? "light"); // "light"

  const user = { profile: null };
  // console.log(user.profile.city); // ❌ TypeError
  console.log(user.profile?.city);   // undefined, no crash

  console.groupEnd();
}
