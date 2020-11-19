

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
//pictur
$('.pictur').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
});
$('.pictur').on('blur',function(){
    if($(this).val()==''){
        $(this).val('校验码不能为空！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else if($(this).val()!='r2b7'){
        $(this).val('校验码错误！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
    }
});
//验证码
$('.four').on('focus',function(){
    $(this).css('color','black');
    $(this).val('');
});
$('.four').on('blur',function(){
    if($(this).val()==''){
        $(this).val('验证码不能为空！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else if($(this).val()!='1234'){
        $(this).val('验证码错误！');
        $(this).css('color','red');
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
    }
});

//点击发送验证码，在计时器未结束之前不能进行第二次点击
var four=$('.sub').text();
var timer=5;//倒计时20秒
var timers=null;
function abc(){
$('.sub').on('click',function(){
    $(this).off('click');//限制第二次点击
    timers=setInterval(function(){
        timer--;
        $('.sub').css('background-color','red');
        $('.sub').text(timer+"秒后获取验证码")
    if(timer<0 ){
        clearInterval(timers);
        timer=5;
        abc();
        $('.sub').text('点击重新获取验证码');
        $('.sub').css('background-color','red');
    }


   
},1000);
});
};
abc();
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
    }else if($(this).val().search(/^[^\s\u4e00-\u9fa5]{6,12}$/)==-1){
        $(this).val('请用字母数字下划线汉字4-8位组成！');
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
        if(bl == false){
            alert('请按照正确的格式填写^^');
            ajax_=false;
            return false;
        }
    });
    
if(ajax_){
   
    
    $.ajax({
       url:'http://192.168.1.64:3000/users/register',
       type:'post',
       data:{
           username:$('.phone').val(),
           password:$('.password').val()
       },
       success:function(res){
           console.log(res);
        //    alert(res.msg);
        // window.open('register.html');
       }, 
       dataType:'json',
    });
}
});




        