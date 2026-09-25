// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Activity 1: Shopping cart calculator (pairs, 30 min)
//
// Steps
// 1. Declare const variables for three products: name, unit price (naira) and quantity.
// 2. Declare VAT_RATE (7.5%) and DELIVERY_FEE (₦1,500).
// 3. Calculate each line total, then the subtotal.
// 4. Calculate vat and grandTotal (subtotal + VAT + delivery).   <- swap driver/navigator here
// 5. Print a receipt using template literals. Round money to 2 decimal places.
// 6. Print typeof for every variable you created.
//
// Stretch: ask for a discount percentage with prompt(), convert it to a number,
// and apply it to the subtotal BEFORE VAT.
//
// Expected output
// ===== RECEIPT =====
// Rice (5kg) x2   ₦17000.00
// Palm oil  x1    ₦4500.00
// Indomie  x10    ₦3000.00
// -------------------
// Subtotal:       ₦24500.00
// VAT (7.5%):     ₦1837.50
// Delivery:       ₦1500.00
// TOTAL:          ₦27837.50

const VAT_RATE = 0.075;
const DELIVERY_FEE = 1500;

const item1Name = "Rice (5kg)";
const item1Price = 8500;
const item1Qty = 2;

// TODO: item 2 → Palm oil, ₦4,500, quantity 1

// TODO: item 3 → Indomie, ₦300, quantity 10


const item1Total = item1Price * item1Qty;
// TODO: item2Total, item3Total


// TODO: replace each 0 with the right calculation
const subtotal = 0;
const vat = 0;
const grandTotal = 0;

console.log("===== RECEIPT =====");
console.log(`${item1Name} x${item1Qty}   ₦${item1Total.toFixed(2)}`);
// TODO: remaining item lines
console.log("-------------------");
// TODO: Subtotal, VAT, Delivery and TOTAL lines


// TODO (step 6): print the type of every variable, e.g.
// console.log(`item1Price → ${typeof item1Price}`);
