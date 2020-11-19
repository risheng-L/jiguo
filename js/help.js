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
    },1000)
}
ssy();

