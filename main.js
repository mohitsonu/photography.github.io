// Preload certain things
window.onload = () => {
    document.getElementById('total-bg-images-in-slider').innerText = '03';
    document.getElementById('bg-image-position-in-slider').innerText = '01';
}

//-------- Hero Slider Logic -----------
const hero_bg_images = ['./images/hero1.jpeg', './images/hero2.jpeg', './images/hero3.jpeg'];
const hero = document.getElementById('hero');
const heroSliderPreviousBgButton = document.getElementById('get-previous__bg__slider_btn');
const heroSliderNextBgButton = document.getElementById('get-next__bg__slider_btn');
const currentBgPositionInHeroSlider = document.getElementById('bg-image-position-in-slider');
const totalImagesInHeroSlider = document.getElementById('total-bg-images-in-slider');

// Handler to move the slider images backward
heroSliderPreviousBgButton.onclick = (e) => {
    let getCurrentBgPosition = (+currentBgPositionInHeroSlider.innerText) - 1; //0-indexed
    // If we reached to 1st image => then go to last images else decrement the position by 1;
    if (getCurrentBgPosition === 0){
        hero.style.background = `url(${hero_bg_images[hero_bg_images.length-1]}) no-repeat center`;
        currentBgPositionInHeroSlider.innerText = `0${hero_bg_images.length}`;
    }
    else {
        hero.style.background = `url(${hero_bg_images[getCurrentBgPosition-1]}) no-repeat center`;
        currentBgPositionInHeroSlider.innerText = `0${getCurrentBgPosition}`;
    }
    hero.style.backgroundSize = 'cover';
}






// Handler to move the slider images forward
heroSliderNextBgButton.onclick = (e) => {
    let getCurrentBgPosition = (+currentBgPositionInHeroSlider.innerText); //0-indexed
    // If we reached to last image => then go to 1st images else increment the position by 1;
    if (getCurrentBgPosition === hero_bg_images.length){
        hero.style.background = `url(${hero_bg_images[0]}) no-repeat center`;
        currentBgPositionInHeroSlider.innerText = `01`;
    }
    else {
        hero.style.background = `url(${hero_bg_images[getCurrentBgPosition]}) no-repeat center`;
        currentBgPositionInHeroSlider.innerText = `0${getCurrentBgPosition+1}`;
    }
    hero.style.backgroundSize = 'cover';
}

// -- Change Top Navigation Background Color on Scroll ----
window.onscroll = (e) => {
    let navigationBar = document.getElementById('navigation-bar');
    console.log(window.scrollY)
    if (window.scrollY <= 200) {
        navigationBar.style.backgroundColor = "transparent";
    } else {
        navigationBar.style.backgroundColor = "#424242";
    }
}






document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider1");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide1");
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
  
    function showSlides() {
      slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    showSlides();
  
    prevBtn.addEventListener("click", function () {
      slideIndex = (slideIndex === 0) ? totalSlides - 1 : slideIndex - 1;
      showSlides();
    });
  
    nextBtn.addEventListener("click", function () {
      slideIndex = (slideIndex === totalSlides - 1) ? 0 : slideIndex + 1;
      showSlides();
    });
  });
  