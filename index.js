

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countDown() {
    const newYearDateTime = new Date("January 1, 2023");
    const newYearDateSeconds = newYearDateTime.getTime() / 1000;

    const currentDateTime = new Date();
    const currentDateSeconds = currentDateTime.getTime() / 1000;

    let secondLeft = Math.floor((newYearDateTime - currentDateTime) / 1000);
    let days = Math.floor(secondLeft / (60 * 60 * 24));
    const hours = Math.floor(secondLeft / 3600) % 24;
    const mins = Math.floor(secondLeft / 60) % 60;
    const seconds = Math.floor(secondLeft) % 60;

    console.log(hours);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;


}

countDown();

setInterval(countDown, 1000);