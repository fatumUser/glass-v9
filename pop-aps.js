function popUpsShow() {
    document.getElementById("wrap-pop-ups").classList.add("wrap-pop-ups-show");
    document.getElementById("body").classList.add("body-no-scroll");
}
function ClosePopUps() {
    document.getElementById("wrap-pop-ups").classList.remove("wrap-pop-ups-show");
    document.getElementById("pop-up-log").classList.remove("hidden");
    document.getElementById("pop-up-reg").classList.add("hidden");
    document.getElementById("body").classList.remove("body-no-scroll");
}
document.getElementById("pop-up-reg").classList.add("hidden");
function popUpRegShow() {
    document.getElementById("pop-up-log").classList.add("hidden");
    document.getElementById("pop-up-reg").classList.remove("hidden");
}
function popUpLogShow() {
    document.getElementById("pop-up-log").classList.remove("hidden");
    document.getElementById("pop-up-reg").classList.add("hidden");
}

document.getElementById("pop-up-wholesale-buyers-reg").classList.add("show-grid");
function popUps2Show() {
    document.getElementById("wrap-pop-ups2").classList.add("wrap-pop-ups-show");
    document.getElementById("body").classList.add("body-no-scroll");
}
function ClosePopUps2() {
    document.getElementById("wrap-pop-ups2").classList.remove("wrap-pop-ups-show");
    document.getElementById("body").classList.remove("body-no-scroll");
    document.getElementById("pop-up-fiz").classList.remove("show");
    document.getElementById("pop-up-urid").classList.remove("show");
    document.getElementById("pop-up-wholesale-buyers-reg").classList.add("show-grid");
}
function popUpFizShow() {
    document.getElementById("pop-up-fiz").classList.add("show");
    document.getElementById("pop-up-wholesale-buyers-reg").classList.remove("show-grid");
}
function popUpUridShow() {
    document.getElementById("pop-up-urid").classList.add("show");
    document.getElementById("pop-up-wholesale-buyers-reg").classList.remove("show-grid");
}
function popUpBack() {
    document.getElementById("pop-up-fiz").classList.remove("show");
    document.getElementById("pop-up-urid").classList.remove("show");
    document.getElementById("pop-up-wholesale-buyers-reg").classList.add("show-grid");
}


function popUps3Show() {
    document.getElementById("wrap-pop-ups3").classList.add("show");
    document.getElementById("body").classList.add("body-no-scroll");
}

function ClosePopUps3() {
    document.getElementById("wrap-pop-ups3").classList.remove("show");
    document.getElementById("body").classList.remove("body-no-scroll");
    document.getElementById("pop-up-cart").classList.remove("hidden");
    document.getElementById("pop-up-order").classList.remove("show");
}
function popUpOrderShow() {
    document.getElementById("pop-up-cart").classList.add("hidden");
    document.getElementById("pop-up-order").classList.add("show");
}
function popUpOrderBack() {
    document.getElementById("pop-up-cart").classList.remove("hidden");
    document.getElementById("pop-up-order").classList.remove("show");
}
