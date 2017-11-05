$(document).ready(function () {
    $('#intro-carousel').slick({
        /*autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,*/
    });

    $('#intro-carousel .slick-slide').each(function () {
        var img = $(this).children('img');
        if (img.length) {
            $(this).css('background-image', 'url(' + img.attr('src') + ')');
            img.remove();
        }
    });
});