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
        loopAdditionalSlides: 1,

    });

    const waveSlide = new Swiper('.wave_slide', {
        loop: true,
        parallax: true,
        speed: 3000,
        slideActiveClass: 'on',
        spaceBetween: 30,
        // slidesPerGroup : 3,
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1200: {
                slidesPerView: 3,

                768: {
                    slidesPerView: 1,
                },
            }
        }


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

    $('.header .lang').on('click', function () {
        $(this).toggleClass('on');
    });

    $('.header .ham_btn').on('click', function () {
        $('.header .h_bottom').toggleClass('on');
    });

    $('.header .gnb>ul>li').on('click', function(){
        $('.header .sub').toggleClass('on');
    })
});