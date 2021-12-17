let sec = 0;
let min = 0;
let ms = 0;

let timer;

let minutesEl = document.getElementById('seconds');
let secondsEl = document.getElementById('tens');

function start(){
  timer = setInterval(run, 10);
}

function run(){
  secondsEl.textContent = "0" + sec;
  if (sec < 10){
    secondsEl =
  }
}
