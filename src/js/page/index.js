require(['./js/config.js'], function() {
    require(['jquery'], function($) {
        $.ajax({
            url: '/users/api/read',
            success: function(data) {
                console.log(data);
                var str = '';
                for (var i in data) {
                    str += ` <li>
                    <div class="img"><img src="./images/a.jpg" alt=""></div>
                    <div class="con">
                        <div class="left">
                            <p class='eat'> <b>${data[i].title}</b> </p>
                            <p class='zf'>:付款</p>
                        </div>
                        <div class="right">￥<b>${data[i].prise}</b></div>
                    </div>
                </li>`
                }
                $('ul').append(str);
            }
        })

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