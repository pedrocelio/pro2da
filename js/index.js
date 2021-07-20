$(function(){
    var number =0;
   
     var height = $('.esticar img').eq(1).width()-5
     $('.decorar').css('width',height)
     var height = $('.junto').eq(0).width()-5
     $('.window').css('width',height)
    
    setInterval(function(){
         slider(number)
         number ++
         if(number == $('.esticar img').length){
             number=0;
         }
    },2000)

    function slider(number){
        var position = $('.esticar img').eq(number).offset().left;
        $('.decorar').animate({
            'scrollLeft' : position - $('.esticar').offset().left
        })
    }
   $('.musica').click(function(){
       var des = $(this).find('.description p').text()
       $('.play').html('<audio autoplay controls><source src='+des+'><audio>')
   })
   $('.fas').click(function(){
    $('.mobile').css('animation-name','height').css('animation-duration','0.5s').css('width','80%')
    $('.all').fadeIn()
   
 })
 $('.all').click(function(e){
     e.stopPropagation()
    $('.mobile').css('animation-name','fadein').css('animation-duration','0.5s').css('width','0')
    $('.all').fadeOut()
 })
 $('.mobile').click(function(e){
     e.stopPropagation()
 })
 $('a').click(function(){
      var att = $(this).attr('href')
     var off = $(att).offset().top
     $('body,html').animate({
         'scrollTop': off-100
     })
     
     return false;
 })
    
         
    

var pos = 0;
$('.seta img').eq(1).click(function(){
    pos++;
    if(pos == $('.junto').length){
        pos=0;
    }
    sliders()

})
$('.seta img').eq(0).click(function(){
    pos--;
    if(pos == -1 ){
        pos=$('.junto').length- 1;
    }
    sliders()

})
 function sliders(){
     let left =$('.junto').eq(pos).offset().left
     $('.window').animate({
         'scrollLeft' : left - $('.big').offset().left
     })
 }
})