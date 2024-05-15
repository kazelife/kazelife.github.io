let timerDisplay = document.getElementById('timer-display');
let countdownInput = document.getElementById('countdown-input');
let startButton = document.getElementById('start-button');
let pauseButton = document.getElementById('pause-button');
let resumeButton = document.getElementById('resume-button');
let cancelButton = document.getElementById('cancel-button');
let alarmSound = document.getElementById('alarm-sound');

let countdownTime = 0;
let intervalId = 0;
let isRunning = false;
let isPaused = false;

startButton.addEventListener('click', () => {
  if (!isRunning) {
    countdownTime = parseInt(countdownInput.value);
    isRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    cancelButton.disabled = false;
    intervalId = setInterval(() => {
      countdownTime--;
      updateTimerDisplay();
      if (countdownTime <= 0) {
        clearInterval(intervalId);
        alarmSound.play();
        alert('Countdown finished!');
      }
    }, 1000);
  }
});

pauseButton.addEventListener('click', () => {
  if (isRunning && !isPaused) {
    isPaused = true;
    pauseButton.disabled = true;
    resumeButton.disabled = false;
    clearInterval(intervalId);
  }
});

resumeButton.addEventListener('click', () => {
  if (isRunning && isPaused) {
    isPaused = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    intervalId = setInterval(() => {
      countdownTime--;
      updateTimerDisplay();
      if (countdownTime <= 0) {
        clearInterval(intervalId);
        alarmSound.play();
        alert('Countdown finished!');
      }
    }, 1000);
  }
});

cancelButton.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    cancelButton.disabled = true;
    clearInterval(intervalId);
    countdownTime = 0;
    updateTimerDisplay();
  }
});

function updateTimerDisplay() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;
  timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
