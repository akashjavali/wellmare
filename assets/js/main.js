/* Swiper starts */

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* Swiper ends */

/* Swiper gallery starts */

var swiper = new Swiper('.swiper-gallery', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


/* Swiper gallery ends */



/* navbar onscroll color change functionality */
$(document).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".fixed-top").addClass("change_navColor", "main_nav");
    } else {
        $(".fixed-top").removeClass("change_navColor", "main_nav");
    }
});



/* scroll to anchor */
$(".nav_home").click(function () {
    $("html, body").animate({
            scrollTop: $(".hero").offset().top
        },
        800
    );
});
$(".nav_about").click(function () {
    $("html, body").animate({
            scrollTop: $(".about").offset().top
        },
        800
    );
});
$(".nav_products").click(function () {
    $("html, body").animate({
            scrollTop: $(".products").offset().top
        },
        800
    );
});
$(".nav_gallery").click(function () {
    $("html, body").animate({
            scrollTop: $(".gallery").offset().top
        },
        800
    );
});
$(".nav_contact").click(function () {
    $("html, body").animate({
            scrollTop: $(".contactus").offset().top
        },
        800
    );
});