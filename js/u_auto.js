// $.ajax({
//     url:'http://192.168.1.64:3000/useing/public',
//     success:function(res){
//         var data = res;
//         console.log(res)
//         var dot_tem=doT.template($('#domm').text());
//         $('#list').html(dot_tem(data))
//     },
//     dataType:'json'
// })
var timer = null;
$('.nomain_loading').on('click', function () {
    clearTimeout(timer);
    $(this).hide();
    $('.nomain_load').show();
    timer = setTimeout(function () {
        $('.nomain_load').hide();
    }, 2000)
    $.ajax({
        url:'http://192.168.1.64:3000/useing/public',
        success:function(res){
            var data=res;
            var dot_tem=doT.template($('#domm').text());
            $('#list').html(dot_tem(data))
        },
        dataType:'json'
    })
});

//弹出登录
$('.login').on('click',function(){
    $('.box').toggle();
})