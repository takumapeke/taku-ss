$(function(){
    // フィルタリング
    $('.search__filter-item').click(function(){
        var target = $(this).attr('value');
        $('.search__filter-item--current').removeClass('search__filter-item--current');
        $(this).addClass('search__filter-item--current');
        $('.search__item').each(function(){
            $(this).animate({'opacity':0},300,function(){
                $(this).hide();
                if($(this).hasClass(target) || target == 'all'){
                    $(this).show();
                    $(this).animate({'opacity':1},300);
                }
            });
        });
    });
    // モーダル
    $('.search__link').click(function(){
        var target = $(this).attr('id');
        $('#js-modal').addClass('modal--open');
        $('body').addClass('is-fixed2');
        $('.modal__item').each(function(){
            if($(this).hasClass(target)){
                $(this).addClass('modal__item--open');
            }
        });
        return false;
    });
    $('.modal__link').click(function(){
        $('#js-modal').removeClass('modal--open');
        $('body').removeClass('is-fixed2');
        $('.modal__item--open').removeClass('modal__item--open');
        return false;
    });
});