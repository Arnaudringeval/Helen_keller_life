/* carousel*/

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
/*fin carousel*/

/*  bouton up*/
if (window.innerWidth > 480){
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("#top").addClass("fixed");
            $("#top").css('display', 'block');
            $("#top").removeClass("invisible");
        } else {
            $("#top").removeClass("fixed");
            $("#top").css('diplay', 'none');
            $("#top").addClass("invisible");
        }
    })
    }
    /*fin bouton up*/

    /* changement taille menu*/
if (window.innerWidth > 480){
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".menu a div img").css('width', '70px');
            $(".menu a div p").css('font-size', '36px');
            $("header div").css('height', '70px')
            $(".menu a div img").css('left', '240px');
        }
        else {
            $(".menu a div img").css('width', '140px');
            $(".menu a div p").css('font-size', '72px');
            $("header div").css('height', '140px')
            $(".menu a div img").css('left', '0px');
        }
    })}