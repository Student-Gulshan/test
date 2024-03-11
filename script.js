let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")

setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hr = 30 * hTime + mTime / 2;
    min = 6*mTime;
    sec = 6*sTime;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${min}deg)`;
    second.style.transform = `rotate(${sec}deg)`;
}, 1000)