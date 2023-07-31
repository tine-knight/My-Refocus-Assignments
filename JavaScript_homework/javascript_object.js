// Task 1: Create the customer variable
let customer = {
customer_name: "Johnny Manggo",
points: 12300,
cart: [
{ item: "Shampoo", quantity: 2, price: 3 },
{ item: "Soap", quantity: 2, price: 2 },
{ item: "Toothpaste", quantity: 1, price: 3 }
]
};

// Task 2: Greet the customer and show their points
console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points are: ${customer.points}.`);

// Task 3: Print the receipt
let total_bill = 0;

console.log("Purchased Items:");
for (let i = 0; i < customer.cart.length; i++) {
let item = customer.cart[i];
let item_total = item.quantity * item.price;
console.log(`${item.quantity}x ${item.item} ---- $ ${item_total.toFixed(2)}`);
total_bill += item_total;
}

console.log(`Total Bill: ${total_bill}`);

// Task 4: Calculate the new points
let new_points = 0;
for (let i = 0; i < customer.cart.length; i++) {
new_points += customer.cart[i].quantity;
}
customer.points += new_points;

console.log(`New total number of points: ${customer.points}.`);