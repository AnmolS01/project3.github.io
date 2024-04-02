let workDuration = 25;
let breakDuration = 5;
let timer;
let minutes = workDuration;
let seconds = 0;
let isPaused = true;

function startTimer() {
  if (isPaused) {
    timer = setInterval(updateTimer, 1000);
    isPaused = false;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  minutes = workDuration;
  seconds = 0;
  updateDisplay();
  isPaused = true;
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    if (workDuration > 0) {
      minutes = breakDuration;
      workDuration = 0;
    } else {
      minutes = workDuration;
      breakDuration = 0;
    }
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
