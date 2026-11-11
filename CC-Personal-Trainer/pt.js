function pt() {
    const MIN_TIME = 30;
    const MAX_TIME = 180;

    const minutes = document.getElementById('minutes').value;

    // Guard statement
    if (minutes === '' || isNaN(minutes)) return alert("ERROR: Not a number!");

    let ptOutput = "";

    if (minutes <= 0) {
        ptOutput = "You should exercise every day!";
    } else if (minutes < MIN_TIME) {
        ptOutput = "Good, but you can probably do better.";
    } else if (minutes > MAX_TIME) {
        ptOutput = "Well done, remember to rest a little sometimes.";
    } else {
        ptOutput = "Great job, keep up the good work!";
    }

    document.getElementById('pt-output').textContent = ptOutput;
}

//document.getElementById('btn-ok').addEventListener('click', pt);

document.getElementById('btn-ok').addEventListener('click', function (evt) {
    pt();
    //console.log(evt);
});