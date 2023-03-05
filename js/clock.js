const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); //function and mili-seconds - repeating every seconds set
// setTimeout(sayHello, 5000); //function and mili-seconds - waiting for seconds set
getClock()
setInterval(getClock, 1000); //function and mili-seconds - repeating every seconds set