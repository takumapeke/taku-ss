$(function(){
    $('.js-tab__cont[id != "tab1"]').hide();
    $('.js-tab__link').click(function(){
        $('.js-tab__cont').hide();
        $($(this).attr('href')).show();
        $('.tab__link--current').removeClass('tab__link--current');
        $(this).addClass('tab__link--current');
        return false;
    });
});