const sideNav = () => {
    let bug = document.querySelector(".nav-Fill-logo");
    let nav = document.querySelector(".menu");

    bug.addEventListener('click', ent => {
        nav.classList.toggle('nav-active');

    });
};
sideNav();

// $(".menu").hide();

// $(".nav-Fill-logo").on({
//   click : function () {
//     $(".menu").toggle().mouseleave(function () {
//       $(".menu").hide();
//     });
//  }
// });


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotactive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dotactive";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}