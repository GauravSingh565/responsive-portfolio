window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

var typed = new Typed('.h2_span', {
    strings: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "UI Designer..!!"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

let counter = document.querySelector(".count_1");
let count = 1
setInterval(function() {
    if (count < 2000) {
        count++;
        counter.textContent = count++
    }
}, 10)
let counter_2 = document.querySelector(".count_2");
let count_2 = 1
setInterval(function() {
    if (count_2 < 1800) {
        count_2++;
        counter_2.textContent = count_2++
    }
}, 10)
let counter_3 = document.querySelector(".count_3");
let count_3 = 1
setInterval(function() {
    if (count_3 < 1500) {
        count_3++;
        counter_3.textContent = count_3++
    }
}, 10)
let counter_4 = document.querySelector(".count_4");
let count_4 = 1
setInterval(function() {
    if (count_4 < 2500) {
        count_4++;
        counter_4.textContent = count_4++
    }
}, 10)



let menu = document.getElementById("ulitem");
menu.style.maxHeight = "0px";

function menubtn() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "220px"
    } else {
        menu.style.maxHeight = "0px"
    }
}