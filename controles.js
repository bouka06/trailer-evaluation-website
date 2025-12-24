// Play a movie by its number (1, 2, 3...)
function playMovie(movieNumber) {
    let fileName = "film" + String(movieNumber) + ".mp4";
    let moviePlayer = document.getElementById("film"); // <video id="film">
    moviePlayer.src = fileName;
    moviePlayer.play();
}

let captchaString = "";

function generateCaptcha() {
    let captcha = "";
    let code = 0;
    for (let i = 1; i < 6; i++) {
        code = Math.round(Math.random() * 74 + 48);
        captcha += String.fromCharCode(code);
    }
    document.getElementById("captchaText").innerHTML = captcha;
    captchaString = captcha;
}

function validatePasswordField() {
    let password = document.getElementById("password").value;
    let lblPassword = document.getElementById("lblPassword");
    if (!isValidPassword(password) || password.length < 6 || password.length > 10) {
        lblPassword.style.color = "red";
    } else {
        lblPassword.style.color = "black";
    }
}

function validateMovieField() {
    let movieIndex = document.getElementById("movie").selectedIndex;
    let lblMovie = document.getElementById("lblMovie");
    if (movieIndex == 0) {
        lblMovie.style.color = "red";
    } else {
        lblMovie.style.color = "black";
    }
}

function validateCaptchaField() {
    let captchaAnswer = document.getElementById("captchaAnswer").value;
    let lblCaptcha = document.getElementById("lblCaptcha");
    if (Number(captchaAnswer) != countLetters(captchaString)) {
        lblCaptcha.style.color = "red";
    } else {
        lblCaptcha.style.color = "black";
    }
}

function validateForm() {
    // IMPORTANT FIX: run the checks before returning
    validatePasswordField();
    validateMovieField();
    validateCaptchaField();

    let password = document.getElementById("password").value;
    let captchaAnswer = document.getElementById("captchaAnswer").value;

    let lblPassword = document.getElementById("lblPassword");
    let lblMovie = document.getElementById("lblMovie");
    let lblCaptcha = document.getElementById("lblCaptcha");

    if (password == "") {
        lblPassword.style.color = "red";
    } else if (captchaAnswer == "") {
        lblCaptcha.style.color = "red";
    }

    return lblPassword.style.color == "black"
        && lblCaptcha.style.color == "black"
        && lblMovie.style.color == "black";
}

// Password must contain at least one LETTER and one DIGIT
// (Fixed to accept lowercase too, because your DB has aaa2025 / bbb2025 / cccc2025)
function isValidPassword(text) {
    let i = 0;
    let hasLetter = false;
    let hasDigit = false;

    while ((!hasLetter || !hasDigit) && (i < text.length)) {
        if (text[i].toUpperCase() <= "Z" && text[i].toUpperCase() >= "A" && !hasLetter) {
            hasLetter = true;
        } else if (Number(text[i]) <= 9 && Number(text[i]) >= 0 && !hasDigit) {
            hasDigit = true;
        }
        i++;
    }
    return (hasLetter == true && hasDigit == true);
}

function countLetters(text) {
    let letterCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toUpperCase() <= "Z" && text[i].toUpperCase() >= "A") {
            letterCount++;
        }
    }
    return letterCount;
}
