var slideIndex = 1;

function showslides(){
    var i;
    var slide =document.getElementsByClassName("slide");

    for (i= 0; i< slide.length; i++) {
        slides[i].style.display="none";
    }
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slide.length;
    }
    slide[slideIndex-1].style.display="none";
}

showslides(1)

function plusSlides(n){
    slideIndex += n;
    showslides(1);
}

setInterval(plusSlides, 3000,1);