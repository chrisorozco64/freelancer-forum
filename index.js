/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const $app = document.querySelector("#app");

// === Functions ===

// Step 1
const freelancer = () => {
  return {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    price_range: Math.floor(Math.random() * (200 - 20) + 20),
  };
};

console.log(freelancer());

// Step 2

const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(freelancer(freelancers));
}
console.log(freelancers);

// Step 3
const calculateAverageRate = () => {
  const prices = freelancers.map((item) => item.price_range);
  const sum = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / prices.length;
  return average;
};

// Step 4
const averageRate = calculateAverageRate(freelancers);
console.log(averageRate);

// Step 5 Write a component function to represent a single freelancer.
const freelancerRow = () => {
  const $tr = document.createElement("tr");
       $tr.innerHTML = `
  <tr>
     <td>${freelancer().name}</td>
     <td>${freelancer().occupation}</td>
    <td>$${freelancer().price_range}</td>
   </tr>
   `;
  return $tr;
};

// Step 6 - Table
const freelancerRows = () => {
  const $table = document.createElement("table");
  $app.append($table);
  $table.innerHTML = `
    <tr>
    <th>NAME</th>
    <th>OCCUPATION</th>
    <th>RATE</th>
  </tr>
  `;
  for (let i = 0; i < freelancers.length; i++) {
    $table.append(freelancerRow());
  }
  return $table;
};

// Step 7
const displayAverageRate = () => {
  const $p = document.createElement("p");
  $p.textContent = `The average rate is $${averageRate}.`;
  $app.append($p);
  return $p;
};

// Step 8
const render = () => {
  $app.innerHTML = `
   <h1>Freelancer Forum</h1>
   <averageRate></averageRate>
   <table id="freelancerRows"></table>
`;
  $app.querySelector("#freelancerRows").replaceWith(freelancerRows());
  $app.querySelector("averageRate").replaceWith(displayAverageRate());
};

render();
