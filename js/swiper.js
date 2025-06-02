var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    // slidesGropu:3,
    slidesPerView: 1,
    spaceBetween: 24,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        576: {
            //當螢幕寬度大於等於576
            slidesPerView: 2,
        },
        992: {
            //當螢幕寬度大於等於992
            slidesPerView: 3,
        },
    },
});