import faker from "faker";

let products = "";

for (let index = 0; index < 3; index++) {
  const name = faker.commerce.productName(0);

  products += `<div>${name}</div>`;
}
console.log(products);

document.querySelector("#dev-products").innerHTML = products;
