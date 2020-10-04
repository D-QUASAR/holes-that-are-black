// scroll to a DOM node
$(function() {
    var target = $('.info');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});