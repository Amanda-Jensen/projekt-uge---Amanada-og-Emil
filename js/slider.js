// refeencer til dom elementer
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__slide");
const prevBtn = document.querySelector(".slider__prev");
const nextBtn = document.querySelector(".slider__next");
const dotsContainer = document.querySelector(".slider__dots");
// variabler til at tælle for os
let slideIndex = 0;
let changer
let sliderSpeed = 3000


// gør den første slide gyldig ved pageload
slides.forEach(function (element, index) {
    if (index == 0) {
        dotsContainer.innerHTML += `<div class="slider__dot slider__dot--active" data-index="${index}"></div>`
    }
    else {
        dotsContainer.innerHTML += `<div class="slider__dot" data-index="${index}"></div>`
    }
})


// main funktion kaldt af alle knapper og senere timer
function showSlide(index) {
    let dots = document.querySelectorAll(".slider__dot")

    slides.forEach(function (slide, i) {
        slide.classList.remove("slider__slide--visible")
        dots[i].classList.remove("slider__dot--active")

        slides[index].classList.add("slider__slide--visible")
        dots[index].classList.add("slider__dot--active")
    })
}


// handler funktioner til events oså kaldt callback

function nextSlide() {
    slideIndex++
    if (slideIndex == slides.length) {
        slideIndex = 0
    }
    // console.log(slideIndex)
    showSlide(slideIndex)
}

function prevSlide() {
    slideIndex--
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    // console.log(slideIndex)
    showSlide(slideIndex)
}

function changeByDot(event) {
    if (event.target != dotsContainer) {
        showSlide(event.target.dataset.index)
    }
}


// click events
nextBtn.addEventListener("click", nextSlide)

prevBtn.addEventListener("click", prevSlide)

dotsContainer.addEventListener("click", function (event) {
    changeByDot(event)
})


// pageload slides
slides[0].classList.add("slider__slide--visible")



// automatisk

function changeAutomatic(timeout) {
    changer = setInterval(function () {
        nextSlide()
    }, timeout)
}

slider.addEventListener("mouseenter", function () {
    clearInterval(changer)
})

slider.addEventListener("mouseleave", function () {
    changeAutomatic(sliderSpeed)
})

changeAutomatic(sliderSpeed)