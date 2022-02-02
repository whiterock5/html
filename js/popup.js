$(document).ready(function () {
    $('.popup').slideUp(0);
    $('.popup').slideDown('slow');

    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a').click(function () {
        var chk = $('#chkBox').prop('checked');

        if (chk) {
            setCookie('maindiv', 'done', 1);
        }

        $('.popup').slideUp('slow');
    });


    //초기실행
    cookiedata = document.cookie;
    if (cookiedata.indexOf('maindiv=done') < 0) {
        $('.popup').css('display', 'block');
    } else {
        $('.popup').css('display', 'none');
    }
});
