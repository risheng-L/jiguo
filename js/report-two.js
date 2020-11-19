//弹出登录
$('.box').hide();
$('.login').on('click',function(){
    $('.box').toggle();
})
//返回顶部
//显示隐藏
$(window).scroll(function(){
    if($(document).scrollTop()>500){
        $('.up').show();
    } else {
        $('.up').hide();
    }
});
//点击回到顶部
var up_=null;
up_=setInterval(function(){
$('.up').on('click',function(){
        var m=$(document).scrollTop;
        var n=parseInt(m/(Math.random()+4));
        $(document).scrollTop(m-n);
        if(m > 5){
        clearInterval(up_);
        }
    });
},100);

