var pag1 = document.getElementById("pagination-1");
var pag2 = document.getElementById("pagination-2");
var pag3 = document.getElementById("pagination-3");

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

var botao_continue = document.getElementById("botao_continue");
var botao_getStarted = document.getElementById("botao_getStarted");
var botao_skip = document.getElementById("botao_skip");

function resetDisplay() {
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
        var el = cards[i];
        if (el.classList.contains("card-active")) {
            el.classList.remove("card-active");
        }
    }
}

function resetInput() {
    var input = document.querySelectorAll(".card__inputs-item");
    for (var i = 0; i < input.length; i++) {
        var el = input[i];
        el.style.border = "1px solid #000000";
        el.style.background = "transparent";
    }
}

function showFirstPage() {
    resetDisplay();
    resetInput();
    card1.classList.add("card-active");
    pag1.style.border = "1px solid #92e3a9";
    pag1.style.background = "#92e3a9";
    botao_continue.style.display = "inline-block";
    botao_skip.style.display = "inline-block";
    botao_getStarted.style.display = "none";
}

function showSecondPage() {
    resetDisplay();
    resetInput();
    card2.classList.add("card-active");
    pag2.style.border = "1px solid #92e3a9";
    pag2.style.background = "#92e3a9";
    botao_continue.style.display = "inline-block";
    botao_skip.style.display = "inline-block";
    botao_getStarted.style.display = "none";
}

function showThirdPage() {
    resetDisplay();
    resetInput();
    card3.classList.add("card-active");
    pag3.style.border = "1px solid #92e3a9";
    pag3.style.background = "#92e3a9";
    botao_continue.style.display = "none";
    botao_skip.style.display = "none";
    botao_getStarted.style.display = "inline-block";
}

function botaoContinue() {
    if (card1.classList.contains("card-active")) {
        showSecondPage();
    } else if (card2.classList.contains("card-active")) {
        showThirdPage();
    }
}

if (pag1) {
    pag1.addEventListener("click", function () {
        showFirstPage();
    });
}

if (pag2) {
    pag2.addEventListener("click", function () {
        showSecondPage();
    });
}

if (pag3) {
    pag3.addEventListener("click", function () {
        showThirdPage();
    });
}
