let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval function
let interval = null;

//Define var to hold start/stop status

let status = "stopped";

//Function that increments time after Start button is clicked
function stopWatch(){
  seconds++;

  //Logic to determine when to increment next value
  if( seconds / 60 === 1){
    seconds=0;
    minutes++;
    if (minutes / 60 === 1){
      minutes=0;
      hours++;
    }
  }
//If seconds/minutes/hours are single digits, add leading "0"
if (seconds < 10){
  displaySeconds = "0" + seconds.toString();
}
else{
  displaySeconds = seconds;
}
if (minutes < 10){
  displayMinutes = "0" + minutes.toString();
}
else{
  displayMinutes = minutes;
}
if (hours < 10){
  displayHours = "0" + hours.toString();
}
else{
  displayHours = hours;
}


  //Display updated time values
  document.getElementById('display').innerHTML =  displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


//Function to call the stopWatch function when the Start button is clicked
function start(){
  if(status === "stopped"){
    //Start the stopwatch (by calling the setInterval() function)
    interval = window.setInterval(stopWatch, 100)
    document.getElementById('start').innerHTML = "Stop"
    status = "started";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("start").innerHTML = "Start"
    status = "stopped";
  }
}

//Function to reset the stopWatch
function reset(){

  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('display').innerHTML = "00:00:00";
  document.getElementById('start').innerHTML = "Start";
}
