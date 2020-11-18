

//手机号
$('.phone').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
});
$('.phone').on('blur',function(){
    if($(this).val()==''){
        $(this).val('手机号不能为空！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else if($(this).val().search(/^1[3578]\d{9}$/)==-1){
        $(this).val('请输入正确的手机号！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
    }
});
//点击发送验证码，在计时器未结束之前不能进行第二次点击
var four=$('.sub').text();
var timer=20;//倒计时20秒
var timers=null;
$('.sub').on('click',function(){
    $(this).attr('disabled',true);//限制第二次点击
    timers=setInterval(function(){
        timer--;
        $('.sub').css('background-color','red');
        $('.sub').text(timer+"秒后获取验证码")
   
    if(timer<0){
        timer=20;
        clearInterval(timers);
        $('.sub').text('点击重新获取验证码');
        $('.sub').css('background-color','white');
        $(this).attr('disabled',false);
    }
},1000);
});
//用户名
$('.username').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
})
$('.username').on('blur',function(){
    if($(this).val()==''){
        $(this).val('用户名不能为空！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else if($(this).val().length>11){
        $(this).val('用户名不能超过10个字符！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
    }
});
//密码
$('.password').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
});
$('.password').on('blur',function(){
    if($(this).val()==''){
        $(this).next('.mima').text('密码不能为空!');
        $(this).next('.mima').css('display','block');
        $(this)[0].bool=false;
    }else if($(this).val().search(/^[^\s\u4e00-\u9fa5]{6,12}$/)==-1){
        $(this).next('.mima').text('不能含有空格，汉字,密码长度6-12');
        $(this).next('.mima').css('display','block');
        $(this)[0].bool=false;
    }else {
        $(this).css('color','black');
        $(this)[0].bool=true;
        $(this).next('.mima').css('display','none');
    }
});
//重新确认密码
$('.passwordnow').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
});
$('.passwordnow').on('blur',function(){
    if($(this).val()==''){
        $(this).next('.mimas').text('请再次输入密码确认！');
        $(this).next('.mimas').show();
        $(this)[0].bool=false;
    }else if($(this).val() != $('.password').val()){
        $(this).next('.mimas').text('两次密码输入的不一样！');
        $(this).next('.mimas').show();
        $(this).val('');  
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
        $(this).next('.mimas').hide();
    }
});
//提交
$('.btn').on('click',function(){
    var ajax_=true;
    $('.loginAll input').each(function(){
        var bl=$(this)[0].bool;
        if(bl==false){
            alert('请按照正确的格式填写^^');
            ajax_=false;
            return false;
        }
    });
    var a=$('.phone').val();
    var b=$('.password').val();
if(ajax_){
    $.ajax({
       url:'htttp://192.168.1.64:3000/users',
       type:'post',
       data:{
           type:'login',
           username:a,
           password:b
       },
       success:function(json){
           console.log(json);
        window.open('register.html');
       } , 
       
    });
}
});




        