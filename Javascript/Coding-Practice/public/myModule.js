// myModule.js

// Named export
export const myAge = 31;

// Named export
export function welcome() {
  console.log("Welcome to JS");
}

// Named export
export const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

// Default export
const company = { name: "Credit Suisse", address: "Pune" };
export default company;
