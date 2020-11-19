//关闭
$('.clos').on('click',function(){
    $('.box').hide();
});
$('.username').on('focus',function(){
    $(this).val('');
    $(this).css('color','black');
});
$('.username').on('blur',function(){
    if($('.username').val().search(/^[^\s\u4e00-\u9fa5]{6,12}$/)==-1){
    $(this).val('用户名格式不正确！');
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
    $('.box').hide();
var pass = $('.password').val();
    if($('.username').val()=='' && $('.password').val()==''){
        alert('请输入手机号和密码');
    }else if($('.username').css('color')=='rgb(255, 0, 0)'||$('.password').css('color')=='rgb(255, 0, 0)'){
        alert('手机号码或者密码格式不正确！')
    } else{
        $.ajax({
            url:'http://192.168.1.64:3000/users/login',
            type:'post',
            data:{  
                username:$('.username').val(),
                password:$('.password').val()
            },
            success:function (res) {
                console.log(res);
                alert(res.msg);
                
                if($('.checkbox').is(':checked')){
                            localStorage.setItem('username',$('.username').val());
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
        $('.username').val(localStorage.getItem('username'));
        $('.password').val(localStorage.getItem('pss'));
        $('.checkbox').attr('checked',localStorage.getItem('tick'));
    }
