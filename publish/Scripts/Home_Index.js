(function ($) {

    $('.item').on('click', function () {
        var index = $(this).attr('data-item');
        bannerSwitch(index);
    });

})(jQuery)

function bannerSwitch(key) {
    var top;
    const singleHeight = document.body.clientHeight / 6;
    window.scrollTo(0, (singleHeight * (key - 1)));
}