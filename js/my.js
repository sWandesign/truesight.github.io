$(function(){
    // header
    $(window).scroll(function(){
  
        var N = $(window).scrollTop();
        if(N > 350){
          // //加入class & 由上往下移動天的位置 & 透明度
          $('header').addClass('smallTop').animate({top: 0, opacity: 1}, 500);
          //會有空白區塊的跳格問題,加上 margin
          $('.title').css('marginTop',0);
          //Logo 使用 attr 更換
          $('#logo' ).attr('src', 'logo_small.png');
          
        }else{
          //除了class外, 動畫使用 sytle 所以 stop 與移除 style 都要做
          $('header').removeClass('smallTop').stop(true,false).removeAttr('style');
          $('.title').removeAttr('style');
          $('#logo').attr('src', 'logo.png');
        }
    })




    // // scroll
    $('.demo').click(function() {

        $('html,body').animate({scrollTop: 780}, 2000)
        return false;
    });
    $('.sec_1').click(function() {

        $('html,body').animate({scrollTop: 780}, 1000)
        return false;
    });
    $('.sec_2').click(function() {

        $('html,body').animate({scrollTop: 1200}, 1000)
        return false;
    });
    $('.sec_3').click(function() {

        $('html,body').animate({scrollTop: 2200}, 1000)
        return false;
    });
    
    // // scrollend

    // totop
    $('.toTop').click(function(){
      $('html,body').animate({scrollTop: 0}, 500)
      return false;
    })

    
    
})