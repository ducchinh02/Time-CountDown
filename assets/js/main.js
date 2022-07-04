const days = document.querySelector('.days');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const formatNumber = (num) => {
    parseInt(num.textContent) >= 10 ? num.textContent = parseInt(num.textContent) : num.textContent = '0' + parseInt(num.textContent)
}

formatNumber(days)
formatNumber(hour)
formatNumber(min)
formatNumber(sec)

let secVal = parseInt(sec.textContent);
let minVal = parseInt(min.textContent);
let hourVal = parseInt(hour.textContent);
let daysVal = parseInt(days.textContent);

const secCount = () => {
    secVal >= 10 ? sec.textContent = secVal -= 1 : sec.textContent = `0${secVal -= 1}`
    if (secVal < 0) {
        sec.textContent = "00";
        minCount()
    }
}
const minCount = () => {
    secVal = 60
    secCount();
    minVal >= 10 ? min.textContent = minVal -= 1 : min.textContent = `0${minVal -= 1}`
    if (minVal < 0) {
        min.textContent = "00";
        hourCount()
    }
}
const hourCount = () => {
    minVal = 60
    minCount()
    hourVal >= 10 ? hour.textContent = hourVal -= 1 : hour.textContent = `0${hourVal -= 1}`
    if (hourVal < 0) {
        hour.textContent = "00";
        daysCount();
    }
}
const daysCount = () => {
    hourVal = 24
    hourCount();
    daysVal >= 10 ? days.textContent = daysVal -= 1 : days.textContent = `0${daysVal -= 1}`

    if (daysVal < 0) {
        days.textContent = "00";
    }
}

const timeDown = setInterval(() => {
    secCount();
    if (daysVal <= 0 && minVal <= 0 && secVal <= 0 && hourVal <= 0) {
        clearInterval(timeDown)
    }
}, 1000);