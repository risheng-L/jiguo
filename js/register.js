//关闭
$('.clos').on('click',function(){
    $('.box').hide();
});
$('.phone').on('focus',function(){
    $(this).val('');
    $(this).css('color','black');
});
$('.phone').on('blur',function(){
    if($('.phone').val().search(/^1[3578]\d{9}$/)==-1){
    $(this).val('手机号格式不正确！');
    $(this).css('color','red');
    $(this)[0].bool=false;
};
});
$('.password').on('focus',function(){
    $(this).val('');
    $(this).css('color','black');
});
$('.password').on('blur',function(){
    if($('.password').val().search(/^[^\s\u4e00-\u9fa5]{6,16}$/)==-1){
    $(this).val('');    
    $(this).siblings('.pas').text('密码格式不正确！');
    $(this).siblings('.pas').show();
    $(this)[0].bool=false;
    }else if($(this).val()==''){
        $(this).siblings('.pas').text('密码不能为空！');
        $(this).siblings('.pas').show();
        $(this)[0].bool=false;
    }else{
        $(this).css('color','black');
        $(this)[0].bool=true;
        $(this).siblings('.pas').hide(); 
    }
});
$('.btn').on('click',function(){
    var phone = $('.phone').val();
var pass = $('.password').val();
    if(phone==''&&pass==''){
        alert('请输入手机号和密码');
    }else if($('.phone').css('color')=='rgb(255, 0, 0)'||$('.password').css('color')=='rgb(255, 0, 0)'){
        alert('手机号码或者密码格式不正确！')
    } else{
        $.ajax({
            url:'http://192.168.1.64:3000/users/login',
            type:'get',
            data:{
                type:'register',
                phone:username,
                pass:password
            },
            success:function (json) {
                json=JSON.parse(json);
                console.log(json);
                alert(json.msg);
                
                if($('.checkbox').is(':checked')){
                            localStorage.setItem('phone',$('.phone').val());
                            localStorage.setItem('pss',$('.password').val());
                            localStorage.setItem('tick',$('.checkbox').is(':checked'));
                        }   
                        else{
                            localStorage.clear();
                }
            }
        });
   }
   
    });
//存储
if(localStorage.getItem('tick')){
        $('.phone').val(localStorage.getItem('phone'));
        $('.password').val(localStorage.getItem('pss'));
        $('.checkbox').attr('checked',localStorage.getItem('tick'));
    }
