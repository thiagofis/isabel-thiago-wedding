$(window).on('load',function () {
    setTimeout(hiddeniFrame, 700);
});

function hiddeniFrame() {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "1000000px");
}

$("#writealine-trigger").click(function () {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "0px");
});

$("#writealine-close").click(function () {
    $("[title='fb:comments Facebook Social Plugin']").css("right", "1000000px");
});