// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// SHOPPING CART
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added

if (shoppingCart.includes("Meat") === false) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart.includes("Meat"));

// - add Sugar at the end of you shopping cart if it has not been already added

if (shoppingCart.includes("Sugar") === false) {
  shoppingCart.push("Sugar");
}
// console.log(shoppingCart);

//     - remove 'Honey' if you are allergic to honey
const allergicCondition = true;
let index;
if (allergicCondition) {
  index = shoppingCart.indexOf("Honey");
  shoppingCart.splice(index, 1);
}

//     - modify Tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf("Tea");
for (let i = 0; i < shoppingCart.length; i++) {
  shoppingCart[indexOfTea] = "Green Tea";
}
console.log(shoppingCart);
