// toggle the links
let mainLinks = document.querySelector(".header ul");
let mainIcon = document.querySelector(".header .links");
let secondIcon = document.querySelector(".header .links .icon span:nth-child(2)");

mainIcon.onclick = () => {
    mainLinks.classList.toggle("open");
    secondIcon.classList.toggle("fill");
}

// animate the title

let specialHeader = document.querySelectorAll(".special-header");
let left = document.querySelector(".left")
let right = document.querySelector(".right");

// auto click on image slider
let arrowRight = document.querySelector(".swiper-button-next")
let arrowLeft = document.querySelector(".swiper-button-prev")

function changeNext (right) {
    let changeRight = setInterval( function () {
            right.click();
            if (right.classList.contains("swiper-button-disabled")) {   
                clearInterval(changeRight)
                changePrev(arrowLeft);
            }
        
    }, 10000)
}
function changePrev (left) {
    let changeLeft = setInterval( function () {
            left.click();
            if (left.classList.contains("swiper-button-disabled")) {
                clearInterval(changeLeft)
                changeNext(arrowRight);
            }
        
    }, 10000)
}
changeNext(arrowRight);