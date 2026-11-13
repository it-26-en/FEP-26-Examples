
/* old version to be fixed:

const names =  [ "Coffe", "Cake", "Ice Cream" ];
const prices = [  3,       3.5,    4 ];
const stock =  [  100,     15,     45 ];   

for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} costs ${prices[i]}, stock ${stock[i]}`);
}*/

const products = [
    { name: "Coffe", price: 3, stock: 100 },   // 0
    { name: "Cake", price: 3.5, stock: 15 },   // 1
    { name: "Ice Cream", price: 4, stock: 45 } // 2
];

console.log(`${products[1].name} costs ${products[1].price}`);
products[1].price = 7.9;
console.log(`${products[1].name} costs ${products[1].price}`);


let output = "";
/**
 * for loop
 */
output = "for loop:\n";
for (let i = 0; i < products.length; i++) {
    output += `${i} - ${products[i].name} costs ${products[i].price}, stock ${products[i].stock}\n`;
}
console.log(output);
/**
 * for...of
 */
output = "for...of:\n";
for (const prod of products) {
    output += `${prod.name} costs ${prod.price} €, we have ${prod.stock} in stock.\n`
}
console.log(output);

/**
 * forEach()
 */
output = "forEach():\n";
products.forEach(prod => {
    output += `${prod.name} costs ${prod.price} €, we have ${prod.stock} in stock.\n`

})
console.log(output);

/**
 * forEach() numbered
 */
output = "forEach() numbered:\n";
products.forEach((prod, i) => {
    output += `${i} ${prod.name} costs ${prod.price} €, we have ${prod.stock} in stock.\n`

})
console.log(output);


