let birth_year= 1999;
let birth_month = 3; // Assuming September (index 8) as the birth month
const current_month = new Date().getMonth();
let current_year = new Date().getFullYear();
current_year--; // Subtracting 1 from the current year
let age = current_year - birth_year;
if (birth_month <= current_month) {
  age++; // Increment age by 1 if birth month has passed in current year
}
console.log(`Patient's Accurate Age: ${age}`);
