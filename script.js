var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
}

function stopwatch() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    var hrstring = hr < 10 ? "0" + hr : hr;
    var minstring = min < 10 ? "0" + min : min;
    var secstring = sec < 10 ? "0" + sec : sec;
    var countstring = count < 10 ? "0" + count : count;

    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("count").innerHTML = countstring;

    setTimeout(stopwatch, 10);
  }
}
