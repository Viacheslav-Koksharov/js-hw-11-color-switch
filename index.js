import "./style.css"
import { colors } from './colors.js';

const DELAY = 1000;
let timeoutId = null;

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', startSwitchColor);
refs.stop.addEventListener('click', stopSwitchColor);

function startSwitchColor() {
    timeoutId = setInterval(() => { onChangeColor(colors) }, DELAY);
    refs.start.setAttribute("disabled", "disabled");
    refs.start.classList.remove("button");
    refs.start.classList.add("button-notActive");
};

function onChangeColor(colors) {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
};

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function stopSwitchColor() {
    clearInterval(timeoutId)
    refs.start.removeAttribute("disabled", "disabled");
    refs.start.classList.remove("button-notActive");
    refs.start.classList.add("button")
};