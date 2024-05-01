const body = document.querySelector('body');
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");
const fontColor = document.querySelector("#fontColor");
const options = document.querySelector('select');

function colorChange() {
    body.style.background = `linear-gradient(${options.value}, ${color1.value},${color2.value})`;
    css.textContent = body.style.background + ";";
}

console.log(color1.value);


color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
options.addEventListener("input", colorChange);
fontColor.addEventListener("input", function () {
    body.style.color = fontColor.value;
})