
function hello() {
    //const name = prompt("What is your name?");
    const name = document.getElementById('name').value;
    alert(`Hello there ${name}!`);
}

function nextYear() {
    // convert numeric input to number:
    const year = Number(document.getElementById('year').value);
    alert(`Next year is ${year + 1}!`);
}

/**
 * Concatenation
 */
const piName = "Pi";
const piVal = 3.14;

// The "old way", good for quick testing
console.log("The value of " + piName + " is " + piVal + "!");
 let html =  "<p>The value of <i>" + piVal + "</i> is <b>"+ 3.14+ "</b></p>";


// The new better way: template literal (backtick)
console.log(`The value of ${piName} is ${piVal}!`);

html = `
    <p>
        The value of <i>${piName}</i> is <b>${piVal}</b>
    </p>
`;

