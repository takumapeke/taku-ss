$(function(){
    $('.js-filter__btn').click(function(){
        var target = $(this).attr('value');
        $('.js-search__item').each(function(){
            $(this).animate({"opacity": 0},300,function(){
                $(this).hide();
                if($(this).hasClass(target) || target == "all"){
                    $(this).show();
                    $(this).animate({"opacity": 1},300);
                }
            });
        });
        $('.filter__btn--current').removeClass('filter__btn--current');
        $(this).addClass('filter__btn--current');
    });
});