$(function () {
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        slideActiveClass: 'on',

    });

    $('.main_vi .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_vi .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });
});