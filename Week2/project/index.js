// /**
//   In this week 's project you'll be making a Pomodoro Clock!
//   A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

//   If the timer is running, the user can 't change the session length anymore
//   Use at least 3 functions
//   Display minutes and seconds
//   If the timer finishes the timer should be replaced by the message: Time 's up!
//  * 
//  */



//Hello;
//Thank you for reviewing my homework, I just want to mention two points:
//First Fadi helped me in this project.
//Second I tried a lot to do all the requirement but i didn't achieve any succeed.

let minutes = document.getElementById('minutes');
let secounds = document.getElementById('seconds');
let session = document.getElementById('session');
let sentence = document.getElementById('sentence')

let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let stopButton = document.getElementById('stop');

session.innerText = 25;
minutes.innerText = session.innerText; 
seconds.innerText = "00";

let interval;

function  stopInterval() {
  clearInterval(interval);
}

//increaseButton
increaseButton.addEventListener('click', () => {
  if (session.innerText >= 0 && minutes.innerText >= 0 && !interval) {
    session.innerText++;
    minutes.innerText++
  }
});

//decrease Button
decreaseButton.addEventListener('click',()=>{
    if(session.innerText >0 && minutes.innerText > 0 && !interval){
    session.innerText -- ;
    minutes.innerText --;
    }
});

//start Button
startButton.addEventListener('click', () => {
  if (interval === undefined) {
    setInterval(timer, 1000);
  }
})
//pauseButton
pauseButton.addEventListener('click', () => {
  clearInterval(interval);
}
)


//stop Button
stopButton.addEventListener('click', () => {
  clearInterval(interval);
  minutes.innerText = session.innerText;
  seconds.innerText = "00";
  
})



///Running time function
function timer() {
  
  if (secounds.innerText != 0){
    secounds.innerText--;

  }
  if (minutes.innerText != 0 && secounds.innerText == 0) {
    secounds.innerText = 59;
    minutes.innerText --;
  }
  if (minutes.innerText == 0 && secounds.innerText == 0) {
    sentence.innerText = "Time is Up"
    minutes.style.display='none';
    secounds.style.display='none';
      clearInterval(interval);
    } 
    if (secounds.innerText < 10 ){
      secounds.innerText = `0${secounds.innerText}`;
     console.log(secounds.innerText);
    }
};
