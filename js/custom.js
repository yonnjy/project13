$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 400 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });
    
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

    let cartNum = 0;

    $('.cart').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {
            alert('이미 장바구니에 담은 티켓 입니다.');
            return;
        } else {
            cartNrm = cartNum + 1;
        }
        cartNum = cartNum + 1;
        $('.header .h_top i small').text(cartNum);
    });
});