let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 0, 1, 0, 0);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = todayTime - endTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime > todayTime) {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = (daysLeft);
    hrBox.textContent = (hrsLeft);
    minBox.textContent = (minsLeft);
    secBox.textContent = (secsLeft);
  } else {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown Has Expired</h1>`;
  }
}

let i = setInterval(countdown, 1000);
countdown();