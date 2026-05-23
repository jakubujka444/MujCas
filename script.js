
/* DIGITÁLNÍ HODINY */

function updateClock() {

    const now = new Date();

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    const clock = document.getElementById("digitalClock");

    if (clock) {
        clock.innerText = `${h}:${m}:${s}`;
    }
}

setInterval(updateClock, 1000);


/* ANALOGOVÉ */

function updateAnalogClock() {

    const hour = document.getElementById("hour");

    if (!hour) return;

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);


/* STOPKY */

let stopwatchInterval;
let stopwatchSeconds = 0;

function updateStopwatch() {

    stopwatchSeconds++;

    let h = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
    let m = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
    let s = String(stopwatchSeconds % 60).padStart(2, '0');

    document.getElementById("stopwatch").innerText =
        `${h}:${m}:${s}`;
}

function start() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stop() {
    clearInterval(stopwatchInterval);
}

function reset() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById("stopwatch").innerText = "00:00:00";
}


/* ODPOČÍTÁVÁNÍ */

let countdownInterval;

function startCasovac() {

    clearInterval(countdownInterval);

    let time = parseInt(document.getElementById("countInput").value);

    if (isNaN(time) || time <= 0) {
        alert("Zadej sekundy");
        return;
    }

    document.getElementById("countdown").innerText = time;

    countdownInterval = setInterval(() => {

        time--;

        document.getElementById("countdown").innerText = time;

        if (time <= 0) {
            clearInterval(countdownInterval);
            alert("Čas vypršel!");
        }

    }, 1000);
}