$.ajax({
    url:'http://192.168.1.64:3000/play/new',
    success:function(res){
        var data=res[0];
        var dot_tem=doT.template($('#domm').text());
        $('#list').html(dot_tem(data))
    },
    dataType:'json'
})
$('.nomain_loading').on('click',function(){
    $(this).hide();
    $('.nomain_load').show();
})