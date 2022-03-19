$(function(){
    $('.js-search__item').click(function(){
        var target = $(this).attr('id');
        $('.js-modal__item').each(function(){
            if($(this).hasClass(target)){
                $(this).addClass('modal__item--open');
            }
        });
        $('.js-modal').addClass('modal--open');
        $('body').addClass('modal-fixed');
        return false;
    });
    $('.js-modal__close').click(function(){
        $('.modal__item--open').removeClass('modal__item--open');
        $('.js-modal').removeClass('modal--open');
        $('body').removeClass('modal-fixed');
        return false;
    });
});