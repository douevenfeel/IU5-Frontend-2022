// task-1
function randomColor() {
    let color = Math.floor(Math.random() * 256 ** 3);
    return "#" + color.toString(16);
}

const elementSquare = document.getElementById("first-task");

elementSquare.addEventListener("click", () => (elementSquare.style.background = randomColor()));

// task-2
const elementTimer = document.getElementById("second-task");
let timerM = 0;
let timerS = 0;
let timerMS = 0;
let timer;

elementTimer.addEventListener("mouseenter", () => {
    timer = setInterval(() => {
        timerMS++;
        if (timerMS == 100) {
            timerS++;
            timerMS = 0;
        }
        if (timerS == 60) {
            timerM++;
            timerS = 0;
        }
        if (timerM == 0) {
            elementTimer.innerHTML = `${timerS}.${timerMS}`;
        } else {
            elementTimer.innerHTML = `${timerM}:${timerS}.${timerMS}`;
        }
    }, 10);
});

elementTimer.addEventListener("mouseleave", () => {
    clearInterval(timer);
});

// task-3
const elementButton = document.getElementById("button");
const elementHidden = document.getElementById("list");

elementButton.addEventListener("click", () => {
    elementHidden.classList.toggle("visible");
});

// task-4
const elementCircle = document.getElementById("circle");
const elementSpace = document.getElementById("fourth-task");
const rightBorder = elementSpace.offsetWidth - elementCircle.offsetWidth / 2;
const bottomBorder = elementSpace.offsetHeight - elementCircle.offsetHeight / 2;
let clicked = false;

elementCircle.addEventListener("click", () => {
    clicked = true;
});

document.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
        clicked = false;
    }
});

elementSpace.addEventListener("mousemove", (event) => {
    if (clicked) {
        let posX = event.pageX - elementSpace.offsetLeft;
        let posY = event.pageY - elementSpace.offsetTop;
        if (posX < rightBorder && posY < bottomBorder && posX > 16 && posY > 16) {
            elementCircle.style.left = posX - 16 + "px";
            elementCircle.style.top = posY - 16 + "px";
        }
    }
});
