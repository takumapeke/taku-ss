$(function(){
    var open;
    $.scrollify({
        section:".section",
        interstitialSection:'.header,.footer',
        overflowScroll: false,
        setHeights: false,
        before:function(i,section){
            open = i
            $('.pagenation .active').removeClass('active');
            $('.pagenation').find('a').eq(i).addClass('active');
        },
        afterRender:function(){
            var pagenation = '<ul class="pagenation">';
            $('.section').each(function(i){
                pagenation += '<li><a></a></li>';
            });
            pagenation += '</ul>';
            $('body').append(pagenation);
            $('.pagenation a').each(function(i){
                $(this).on('click',function(){
                    $.scrollify.move(i);
                });
            });
            $('.pagenation li:first-child').find('a').addClass('active');
        },
    });
});

$(window).on('load resize', function(){
    if(window.matchMedia("(min-height:900px)").matches){
        $.scrollify.disable();
    }else if(window.matchMedia("(min-width:1024px)").matches){
        $.scrollify.enable();
    }else{
        $.scrollify.disable();
    }
});