let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(function () {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    displayTime();
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function displayTime() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerText =
    h + ":" + m + ":" + s;
}
