function birthdayCountdown() {
    const birthdayDate = new Date ("July 24, 2024, 12:40");
    const now = new Date();
    const diff = birthdayDate - now;
    console.log(birthdayDate, now);

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor (diff/msInDay)
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor ((diff % msInDay ) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinutes = Math.floor ((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor ((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

        if (diff <= 0) {
            document.querySelector(".days").textContent = 0;
            document.querySelector(".hours").textContent = 0;
            document.querySelector(".minutes").textContent = 0;
            document.querySelector(".seconds").textContent = 0;
            clearInterval(timerID);
            happyBirthday();
        }
}

let timerID = setInterval(birthdayCountdown, 1000);

function happyBirthday() {
    const header = document.querySelector("h1");
    header.textContent = "HAPPY BIRTHDAY, KRISTINA!";
    header.classList.add("red");
}

const buttonPlay = document.querySelector(".playButton");
buttonPlay.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})

const buttonStop = document.querySelector(".stopButton");
buttonStop.addEventListener("click", function() {
    document.querySelector("#myAudio").pause();
})