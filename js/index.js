//倒计时
function ssy() {
    var timer = null;
    timer = setInterval(function () {
        var new_ = new Date('12 12,2020').getTime();
        var now_ = new Date().getTime();
        var err = new_ - now_;


        var _day = Math.floor(err / 24 / 60 / 60 / 1000);
        var _hour = Math.floor(err / 60 / 60 / 1000 % 24);
        var _minute = Math.floor(err / 60 / 1000 % 60);
        var _sec = Math.floor(err / 1000 % 60);

        $('.nav>div p').text('申请时间剩余：' + _day + '天' + _hour + '小时' + _minute + '分' + _sec + '秒');
    }, 1000)
}
ssy();

//轮播
var timers = null,timers_1 = null;
    var index = 1;
        $('.lunbo_scroll').scrollLeft($('.lunbo_so ul').eq(0).css('width').split('p')[0]);
        function autochange_(m){
        var num = 0;
        var maxnum = 20;
        var start = $('.lunbo_scroll').scrollLeft();
        var end = $('.lunbo_so ul').eq(0).css('width').split('p')[0]*m;
        var everynum = (end - start)/maxnum;
        timers = setInterval(function(){
            num++;
            if(num>=maxnum){
                num = 0;
                clearInterval(timers);
            }
            start += everynum;
            $('.lunbo_scroll').scrollLeft(start);
        },20);
    }
    //移出
    function automove_(){
        clearInterval(timers_1)
        timers_1 = setInterval(function(){
            clearInterval(timers);
            index++;
            if(index>=$('.lunbo_so ul').length){
                index = 1;
                $('.lunbo_scroll').scrollLeft(0);
            }
            autochange_(index);
        },2000);
    }
    //清除
    function mouse(){
        $('.lunbo_so ul').each(function(indexs,item){
           $(item).hover(function(){
               clearInterval(timers);
               clearInterval(timers_1);
           },function(){
               automove_(); 
               autochange_(indexs);
           });
        });
    }
    function clicked(){
        $('.prev').on('click',function(){
            clearInterval(timers)
            clearInterval(timers_1)
            index--;
            if(index == 0){index = $('.lunbo_so ul').length;}
            automove_();
            autochange_(index);
        });
        $('.next').on('click',function(){
            clearInterval(timers)
            clearInterval(timers_1)
            index++;
            if(index == $('.lunbo_so ul').length){index = 0;}
            automove_();
            autochange_(index);
        });
    }
    automove_();
    mouse();
    clicked();

    // 移入图片变模糊

    $('li').hover(function(){
        $(this).find('img').toggleClass('img_l');
    },function(){
        $(this).find('img').toggleClass('img_l');
    });


//点小心心
$('article ul li span:nth-of-type(2) img').on('click', function () {

    var num = $(this).parent().text();
    num++;
    $(this).parent().html('<img src="./img/xinRedh.png">' + num);
})
$('article ul li span:nth-of-type(3) img').on('click', function () {
    var num = $(this).parent().text();
    num++;
    $(this).parent().html('<img src="./img/reply.png">' + num);

})





//加载
var timer = null;
$('.nomain_loading').on('click', function () {
    clearTimeout(timer);
    $(this).hide();
    $('.nomain_load').show();
    timer = setTimeout(function () {
        $('.nomain_load').hide();
    }, 2000)
    $.ajax({
        url: 'http://192.168.1.64:3000/play/hot',
        success: function (res) {
            var data = res[2];
            var dot_tem = doT.template($('#domm').text());
            $('#list').html(dot_tem(data))
        },
        dataType: 'json'
    })
})