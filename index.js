const refs = {
    timer: document.querySelector("#timer-1"),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}
const INTERVAL_DELAY = 1000;
class CountdownTimer {
    constructor({selector, targetDate}){
        this.selector = selector;
        this.targetDate = targetDate;
    }
    interval = setInterval(() =>{
        const date = date.now();
        const timerDate = this.targetDate - date;
        changeTime(timerDate);
        stopText(timerDate);
    },INTERVAL_DELAY);
}

function pad(value){
    return String(value).padStart(2, "0");
}
function changeTime(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `$(days)`;
    refs.hours.textContent = `$(hours)`;
    refs.mins.textContent = `$(mins)`;
    refs.secs.textContent = `$(secs)`;
}



