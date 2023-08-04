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
        speed: 3000,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        slideActiveClass: 'on',
        loopAdditionalSlides: 1,

    });

    const waveSlide = new Swiper('.wave_slide', {
        loop: true,
        parallax: true,
        speed: 3000,
        slideActiveClass: 'on',
        spaceBetween: 30,
        slidesPerView: 1,
        // slidesPerGroup : 3,
        loopFillGroupWithBlank: true,

        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            820: {
                slidesPerView: 2,
            },
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


    $('.main_show .tab_menu li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.main_show .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.header .gnb>ul>li').on('click', function (e) {
        if($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.sub').stop().slideToggle();
        }
    });

    $(window).on('resize', function(){
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});