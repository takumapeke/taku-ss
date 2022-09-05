$(function(){
    // ハンバーガー
    $('#js-ham').click(function(){
        $(this).toggleClass('header__ham--active');
        $('#js-drawer').toggleClass('drawer--open');
        $('body').toggleClass('is-fixed');
    });
    // totop
    function toTop(){
        var scroll = $(window).scrollTop();
        if(scroll >= 500){
            $('#js-top').removeClass('totop--down');
            $('#js-top').addClass('totop--up');
        }else{
            if($('#js-top').hasClass('totop--up')){
                $('#js-top').removeClass('totop--up');
                $('#js-top').addClass('totop--down');
            }
        }
    }
    $(window).scroll(function(){
        toTop();
    });
    $('#js-top').click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    // スムーススクロール
    $('a[href^="#"]:not([href="#"])').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({scrollTop: position},500);
        return false;
    });
});