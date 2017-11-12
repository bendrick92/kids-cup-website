$(document).ready(function () {
    var header = $('header');
    var introSection = $("#intro");

    checkHeader();

    $(document).scroll(function () {
        checkHeader();
    });

    function checkHeader() {
        var scrollY = $(this).scrollTop();
        var triggerHeight = introSection.height() - header.height();
        if (scrollY > triggerHeight) {
            if (!header.hasClass('fixed-header')) {
                header.hide();
                header.css('position', 'fixed');
                header.addClass('fixed-header');
                header.slideDown();
            }
        }
        else {
            if (header.hasClass('fixed-header')) {
                header.css('position', 'absolute');
                header.removeClass('fixed-header');
            }
        }
    }
});