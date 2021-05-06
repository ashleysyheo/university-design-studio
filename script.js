const currTime = document.querySelector('#time');

// set time 
let time = () => {
    let date = new Date();
    let hour = `${date.getHours()}`.padStart(2, '0');
    let minute = `${date.getMinutes()}`.padStart(2, '0');
    let second = `${date.getSeconds()}`.padStart(2, '0');
    let displayTime = hour + ":" + minute + ":" + second;
    currTime.innerHTML = displayTime; 
    let timeChange = setTimeout(time, 1000);
}

window.onload = () => {
    time();
};
