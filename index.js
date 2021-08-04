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
