$(document).ready(function () {
    $('#intro-carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        arrows: true,
        prevArrow: '<a class="slick-prev slick-arrow"><span class="fa fa-chevron-left"></span></a>',
        nextArrow: '<a class="slick-next slick-arrow"><span class="fa fa-chevron-right"></span></a>',
        dots: true
    });

    $('#intro-carousel .slick-slide').each(function () {
        var img = $(this).children('img');
        if (img.length) {
            $(this).css('background-image', 'url(' + img.attr('src') + ')');
            img.remove();
        }
    });
});