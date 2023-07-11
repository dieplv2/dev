const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let navs = $('.icon').onclick = function() {
    let x = $('#navs');
    if(x.className === "topnav") {
        x.className += " reponsive";
        console.log(x);
    } else {
        x.className = "topnav";
        console.log(x);
    }
};


// slide

let slides = $$('.slide-item');
let slideIndex = 0;
showSlide();

function showSlide() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1};
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlide, 2000);
}

// action

let imgs = $$('.action-list-item img');

// console.log(thumnal);

imgs.forEach(function(img, index){
    img.onmouseover = function() {
         let srcs = this.getAttribute('src');
         console.log(srcs);
         
         $('#thumnal img').src = srcs;
    }
});