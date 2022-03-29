$(document).ready(function () {
    // banner slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
    })
    // team slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
    })
    // team two slider
    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-img'
      });
      $('.slider-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text-slider',
        prevArrow:'.team-arrow-left',
        nextArrow:'.team-arrow-right',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
      });
    //   venobox
    $('.venobox').venobox({
        framewidth: '550px',
        frameheight: '450px',
        border: '10px',
    });
    // sticky top menu
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        var sticky = $('.sticky-top');

        if (scrolling >= 100) {
            sticky.addClass('nab-bg');
        } else{
            sticky.removeClass('nab-bg');
        }
    })
})