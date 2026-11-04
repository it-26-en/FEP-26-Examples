function hello() {
    const name = document.getElementById('name').value;
    let output = "";
    if (name === "Fredrik" || name === "Fredde") {
        output = "You like JavaScript!";
    } else if (name === "Dennis") {
        output = "You like Robots!";
    } else {
        output = "I don't know you.";
    }

    document.getElementById('name-output').textContent = output;
}