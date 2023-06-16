window.addEventListener("scroll", reveal);
window.setInterval(ChangeSlide, 2000)
// To check the scroll position on page load
reveal();

function reveal() {
    var reveals = document.querySelectorAll(".listCard");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("listCardActive");
        } else {
            reveals[i].classList.remove("listCardActive");
        }
    }
}

var slides = document.querySelectorAll(".slide");
slides[0].classList.add("slideActive");
var ind = 0;

function ChangeSlide(){
    ind ++;
    if(ind >= 3) 
    {
        ind = 0;
    }
    console.log(ind);
    
    for (var i = 0; i < 3; i++) {
        if(ind === i) 
        {
            slides[i].classList.add("slideActive");
        }
        else
        {
            slides[i].classList.remove("slideActive");
        }

    }

    console.log("ping");
}
