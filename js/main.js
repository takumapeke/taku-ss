$(function(){
    //ハンバーガー
    $('.js-hamburger').click(function(){
        $(this).toggleClass('hamburger--active');
        $('.js-gnav').toggleClass('gnav--open');
        $('body').toggleClass('-fixed');
    });

    //ページトップリンク
    function PageTopAnime(){
        //スクロール量取得
        var scroll = $(window).scrollTop();
        if(scroll >= 200){
            $(".js-page-top").removeClass("DownMove");
            $(".js-page-top").addClass("UpMove");
        }else{
            if($(".js-page-top").hasClass("UpMove")){
                $(".js-page-top").removeClass("UpMove");
                $(".js-page-top").addClass("DownMove");
            }
        }
    }
    $(window).scroll(function(){
        PageTopAnime();
    });
    //スムーススクロール
    $(".js-page-top a").click(function(){
        $("body,html").animate({scrollTop:0},500);
        return false;
    });
    $(".media__link,.service__link").click(function(){
        var target = $($(this).attr("href")).offset().top;
        $("body,html").animate({scrollTop: target},500);
        return false;
    });
});