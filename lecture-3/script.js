function hello(name) {
    let output = "";
    if (name === "Fredrik" || name === "Fredde") {
         output = "You like JavaScript!";
    } else if (name === "Dennis") {
        output = "You like Robots!";
    } else {
        output = "I don't know you.";
    }
    return output;
}

function helloHandler() {
    const name = document.getElementById('name').value;
    const nameOutput = hello(name);
    document.getElementById('name-output').textContent = nameOutput;
}
/*function helloHandler() {
    document.getElementById('name-output')
        .textContent = hello(document.getElementById('name').value);
}*/
