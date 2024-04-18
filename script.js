const counterClient = document.querySelector(".counterClient");
const body = document.querySelector("body");
const modalContainer = document.querySelector(".modalContainer");
const modalBtn = document.querySelector(".modalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
let counter = 0;
let isCounterStarted = false;


modalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
    body.style.overflow = "hidden";
});
closeModalBtn.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
    body.style.overflow = "auto"; 
});

function autoIncrement() {
    if (isCounterStarted && counter < 800) {
        counter = counter + 1;
        counterClient.textContent = counter;
    } else {
        clearInterval(intervalId);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isCounterStarted) {
            isCounterStarted = true;
            const intervalId = setInterval(autoIncrement, 5);
        }
    });
});

observer.observe(counterClient);
