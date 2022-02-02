
$(document).ready(function(){

    var bg = $('<div class="subbg"></div>');
    
    $('header').append(bg); 

    $('.subNav, .subBg').slideUp(0);

    $('.gnb').hover(function(){
        $('.subNav, .subBg').stop().slideDown('fast');

    },function(){
        $('.subNav, .subBg').stop().slideUp('fast');
    });

    $('.mainNav').focus(function(){
 
        $('.mainNav').removeClass('on');
        
      
        $(this).addClass('on');
        
        $('.subNav, .subBg').stop().slideDown('fast');
    });
    

    $('.subNav li:last a').keydown(function(e){

        if(e.keyCode == 9){ 
            if(!e.shiftKey){ 
                $('.mainNav').removeClass('on');
                $('.subNav, .subBg').stop().slideUp('fast');
            }
        }
    });
    
 
    $('.subNav a').focus(function(){
        $('.mainNav').removeClass('on');
        $(this).parents('.subNav,.subBg').prev().addClass('on');
    });
    
    $('.mainNav').first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){ 
            $('.mainNav').removeClass('on');
            $('.subNav,.subBg').stop().slideUp('fast');
            }
        }
    });
    
});



//familysite

$(document).ready(function(){

    $('.familySite ul').slideUp(0);
    
    
    $('.familySite button').click(function(){
        $(this).next().slideToggle('fast');
        $(this).children('.icon').toggleClass('on');
    });
    

    $('.familySite li:last a').blur(function(){
       $(this).parent().parent().slideUp('fast');
        $(this).parent().parent().prev().children('.icon').removeClass('on');
    });
    

    $('.familySite').mouseleave(function(){
        $(this).children('ul').slideUp('fast');
        $(this).find('.icon').removeClass('on');
    });
});

//sitemap

$(document).ready(function(){
    
    //2.검은색배경이 안보이게 처리
    $('.blackBg').fadeOut(0);


    $('.sitemapOpen').click(function(){
        
        $('.blackBg').fadeIn(100);
        
        $('.sitemap').fadeIn(100);
        
        $('.exit').click(function(){
            $('.blackBg').trigger('click');
        });
    });
    
    
    $('.blackBg').click(function(){
        $('.sitemap').fadeOut(100);
        $('.blackBg').fadeOut(100);
        });
});

$(document).ready(function(){
    $('.loginerror').click(function(){
        alert("로그인이 필요합니다.")
    });
});

