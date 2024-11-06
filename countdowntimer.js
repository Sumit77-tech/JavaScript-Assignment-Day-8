let countdownTime = parseInt(prompt("Enter the number of seconds for the countdown: "), 10);
let timeRemaining = countdownTime;
let countdownInterval;

function startCountdown() {
    console.log(`Countdown starting from ${timeRemaining} seconds...`);
    countdownInterval = setInterval(() => {
        if (timeRemaining > 0) {
            console.log(`Time remaining: ${timeRemaining} seconds`);
            timeRemaining--;
        } else {
            console.log("Countdown Complete!");
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function checkForStopKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === 's') {
            console.log("Countdown stopped by user.");
            clearInterval(countdownInterval);
        }
    });
}
startCountdown();
checkForStopKey();
