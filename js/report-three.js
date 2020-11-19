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

//点击

    $('.p-p').on('click',function(){
        $(this).next().show();
        var item = $(this).next().text();
        item++;
        $(this).next().text(item);   
    });
    $('.p-t').on('click',function(){
        $(this).siblings('input').show();
        $(this).siblings('button').show();
        $(this).siblings('button').on('click',function(){
            if($(this).siblings('input').val() !=''){
            $(this).siblings('input').hide();
            $(this).hide();
            var num =$(this).siblings('.span-t').text();
            num++;
            $(this).siblings('.span-t').text(num);
            }else{
                $(this).siblings('input').show();
                $(this).show();
            }
        });
        


    })