const emoji = document.querySelector(".emoji");
const span = document.querySelector("span");

const emojis = ["😂😂","🤣🤣","🥹🥹","🙂🙂","🤭🤭","😋😋","☹️☹️","🥺🥺","😢😢","😔😔","😓😓","🫠🫠"];
const text = ["Sorry, ", "Oops! ", "Awww, ", "Shittt, "];


window.addEventListener('load', () => {
    const index = Math.floor(Math.random()*emojis.length);
    const idx = Math.floor(Math.random()*text.length);
    emoji.textContent = emojis[index];
    span.textContent = text[idx];
});

document.oncontextmenu = () => {
    return false;
};

document.onkeydown = (e) => {
    if(e.key == "F12") {
        return false;
    }

    if(e.ctrlKey && e.key == "u") {
        return false;
    }
};