//登录遮罩
$('.login').on('click',function(){
    $('.box').toggle();
    $('.bodys').toggle();
})
//切换页面
$('.main-ll').hide();
$('.lil').on('click',function(){
    $('.main-ll').hide();
    $('.main-l').show();
});
$('.lill').on('click',function(){
    $('.main-l').hide();
    $('.main-ll').show();
});
//淡出动画

$('.p-one').mouseenter(function(){
    $(this).siblings('.main-lp-div').slideDown(500);
    $(this).siblings('.main-lp-div').mouseleave(function(){
        $(this).fadeOut(500); 
    })
});

