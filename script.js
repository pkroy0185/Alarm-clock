let alarmInterval;
const alarmSound = document.getElementById('alarmSound');
const alarmTimeInput = document.getElementById('alarmTime');
const timeDisplay = document.getElementById('time');

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    const [hours, minutes] = alarmTime.split(":");
    let currentTime = new Date();
    let currentAlarmTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes);
    console.log(currentAlarmTime)
    if (isNaN(currentAlarmTime.getTime())) {
        alert('Invalid time format. Please use HH:mm.');
        return;
    }

    const now = new Date();
    const timeDifference = currentAlarmTime - now;

    if (timeDifference <= 0) {
        alert('Invalid time. Please select a future time.');
        return;
    }

    alarmInterval = setTimeout(() => {
        playAlarm();
    }, timeDifference);
}

function playAlarm() {
    const greet = document.getElementById('greetings');
    message = document.createElement("h2");
    message.innerText = "Have a Nice and Cheerful day :)"
    greet.appendChild(message)
    alarmSound.play();
}

function stopAlarm() {
    clearTimeout(alarmInterval);
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

setInterval(updateTime, 1000);
updateTime();
