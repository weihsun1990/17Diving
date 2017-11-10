(function ($) {

    $('.anchor').on('click', function () {
        var index = $(this).attr('data-item');
        anchorSwitch(index);
    });

})(jQuery)


function anchorSwitch(key) {
    var top;
    const singleHeight = document.body.clientHeight / 7;
    window.scrollTo(0, (singleHeight * (key - 1)));
}