require(['../js/config.js'], function() {
    require(['jquery'], function($) {
        // $('.hyy').on('focus', function() {
        //         $('.key').css({
        //             "display": "block"
        //         })
        //         $('.body').css({
        //             "display": "none"
        //         })
        //     })
        // $('.hyy').on('blur', function() {
        //     $('.key').css({
        //         "display": "none"
        //     })
        //     $('.body').css({
        //         "display": "block"
        //     })
        // });
        //点击计算
        $('ul').on('click', 'span', function() {
            if ($('.hyy').html().indexOf('.') == -1) {
                $('.hyy').append($(this).html());
            }
        })
    })
})