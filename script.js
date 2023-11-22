let hour = document.querySelector("#hr")
let minute = document.querySelector("#mn")
let second = document.querySelector("#sc")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

setInterval(() => {
    let day = new Date
    let hr = day.getHours()*30
    let mn = day.getMinutes()*6
    let sc = day.getSeconds() *6
    console.log(`${hr}:${mn}:${sc}`);

    let h = day.getHours()
    let m = day.getMinutes()
    let s = day.getSeconds()

    let ampm = h >= 12 ? "PM" : "AM"

    if (h > 12) {
        h = h - 12
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s

    hour.style.transform = `rotate(${hr + (mn / 12)}deg)`
    minute.style.transform = `rotate(${mn}deg)`
    second.style.transform = `rotate(${sc}deg)`
}, 1000);