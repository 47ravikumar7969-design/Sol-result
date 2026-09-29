const rollNo = document.querySelector("#roll");
const image = document.querySelector(".Captcha-img");
const btn = document.querySelector("button");
const input = document.querySelector("#Captcha-text");
const error = document.querySelector("#error");
const selecter = document.querySelector("#selecter");
const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

let randNum = '';
function generateCapture() {
    randNum = Math.floor(Math.random() * (1e6 - 1e5) + 1e5);
    image.textContent = randNum;
}

function validateDetails() {
    if(selecter.value === "" || rollNo.value === "" || date.value === "" || month.value === "" || year.value === "" || input.value === "") {
        if(selecter.value === "") {
            selecter.style.border = "0.1vw solid red";
        } else {
            selecter.style.border = "";
        }

        if(rollNo.value === "") {
            rollNo.style.border = "0.1vw solid red";
        } else {
            rollNo.style.border = "";
        }
        
        if(date.value === "") {
            date.style.border = "0.1vw solid red";
        } else {
            date.style.border = "";
        }

        if(month.value === "") {
            month.style.border = "0.1vw solid red";
        } else {
            month.style.border = "";
        }

        if(year.value === "") {
            year.style.border = "0.1vw solid red";
        } else {
            year.style.border = "";
        }

        if(input.value === "") {
            input.style.border = "0.1vw solid red";
        } else {
            input.style.border = "";
        }

        error.textContent = "Please fill the mandatory fields.";
        return false;
    } else {
        selecter.style.border = "";
        rollNo.style.border = "";
        date.style.border = "";
        month.style.border = "";
        year.style.border = "";
        input.style.border = "";
    }

    if(rollNo.value < 25000000000 || rollNo.value > 26000000000) {
        rollNo.style.border = "0.1vw solid red";
        error.textContent = "Please fill the valide exam roll no.";
        return false;
    }
    
    if(input.value != randNum) {
        input.style.border = "0.1vw solid red";
        error.textContent = "Sorry! Invalid captch code.";
        generateCapture();
        return false;
    }

    return true;
}

btn.addEventListener('click', () => {
    generateCapture();
});

window.addEventListener('load', () => {
    generateCapture();
});

function getBrowserName() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf("Edg") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Mozilla Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Apple Safari";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        return "Opera";
    } else {
        return "Unknown Browser";
    }
}

document.querySelector(".Browser").textContent = getBrowserName();

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