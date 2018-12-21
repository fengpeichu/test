require(['./js/config.js'], function() {
    require(['jquery'], function($) {
        $('.bottom').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass();
            if ($(this).html() === '分账') {
                $('.zo').css({
                    "display": "block"
                })
            } else {
                $('.zo').css({
                    "display": "none"
                })
            }
        })
        $('.try').on('click', function() {
            location.href = './page/add.html';
        })
    })
})