var seconds = 00;
var tens = 00;
var getSeconds = document.querySelector("#seconds");
var getTens = document.querySelector("#tens");
var Start = document.querySelector("#button-start");
var Stop = document.querySelector("#button-stop");
var Reset = document.querySelector("#button-reset");
var interval;

Start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    console.log("start");
}

Stop.onclick = function () {
    clearInterval(interval);
    console.log("stop");
}

Reset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
    console.log("reset");
}

function startTimer() {
    tens++;

    if(tens <= 9){
        getTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        getTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = "0";
        getTens.innerHTML = "0" + tens;
    }

    if(seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
}