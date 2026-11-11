const colors = ["red", "green", "blue"];

console.log(colors);
colors.push("gray");
console.log(colors);

console.log(`green is at ${colors.indexOf('green')}`)

const skyColor = 3;

console.log(`Roses are ${colors[0]}, 
    the sky is ${colors[skyColor]}
    and the grass is ${colors[1]}`);

const numbers = "one two three";
console.log(numbers);
const numbersArr = numbers.split(" ");
console.log(numbersArr);

console.log("element-3".split('-')[1])

const person = {
    name: "Linus", // person['name'] or person.name 
    age: 50,
    likes: "to code"
};

console.log(`${person.name} likes ${person.likes}`)

const colorsObjArr = [
   { name: "Red", hex: "#ff0000" },
   { name: "Green", hex: "rgb(0, 140, 0)" },
   { name: "Blue", hex: "#0000ff" },
   { name: "Yellow", hex: "#ffff00" }
];
//document.body.style.backgroundColor = colorsObjArr[1].hex;

for (let i = 0; i < colorsObjArr.length; i++) {
    document.getElementById('colors').innerHTML += `
        <li style="background-color: ${colorsObjArr[i].hex};">
            ${i}: ${colorsObjArr[i].name}
        </li>
    `;
}


