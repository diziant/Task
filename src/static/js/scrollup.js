$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup__link').fadeIn();
        } else {
            $('.scrollup__link').fadeOut();
        }
    });

    $('.scrollup__link').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

});
