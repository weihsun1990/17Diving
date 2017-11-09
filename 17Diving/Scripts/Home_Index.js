

$(document).ready(function () {

    $('.item').on('click', function () {
        var index = $(this).attr('data-item');
        QQQ(index);
    });

});


function QQQ(key) {
    var top;
    const singleHeight = document.body.clientHeight / 6;
    window.scrollTo(0, (singleHeight * (key - 1)));
}