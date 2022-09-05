$(function(){
    // タブ
    $('.tab2,.tab3').hide();
    $('.form__tab-btn').click(function(){
        $('.form__item').hide();
        var target = $(this).attr('id');
        $('.form__tab-btn--current').removeClass('form__tab-btn--current');
        $(this).addClass('form__tab-btn--current');
        $('.form__item').each(function(){
            if($(this).hasClass(target)){
                $(this).show();
            }
        });
        return false;
    });
    // バリデーション
    // シャンプー
    $('#js-submit1').click(function(){
        var send = true;
        if(!$('#fullname1').val()){
            $('.contact-form__fullname1').show();
            send = false;
        }else{
            $('.contact-form__fullname1').hide();
        }
        if(!$('#email1').val()){
            $('.contact-form__email1').show();
            send = false;
        }else{
            $('.contact-form__email1').hide();
        }
        if(($('#month1').val() == 'none') || ($('#day1').val() == 'none')){
            $('.contact-form__date1').show();
            send = false;
        }
        else{
            $('.contact-form__date1').hide();
        }
        if($('#kind1').val() == 'none'){
            $('.contact-form__kind1').show();
            send = false;
        }
        else{
            $('.contact-form__kind1').hide();
        }
        if($('#time').val() == 'none'){
            $('.contact-form__time').show();
            send = false;
        }
        else{
            $('.contact-form__time').hide();
        }
        if($('#keep').val() == 'none'){
            $('.contact-form__keep').show();
            send = false;
        }
        else{
            $('.contact-form__keep').hide();
        }
        if(send == false){
            return false;
        }
    });

    // しつけ教室
    $('#js-submit2').click(function(){
        var send = true;
        if(!$('#fullname2').val()){
            $('.contact-form__fullname2').show();
            send = false;
        }else{
            $('.contact-form__fullname2').hide();
        }
        if(!$('#email2').val()){
            $('.contact-form__email2').show();
            send = false;
        }else{
            $('.contact-form__email2').hide();
        }
        if(($('#month2').val() == 'none') || ($('#day2').val() == 'none')){
            $('.contact-form__date2').show();
            send = false;
        }
        else{
            $('.contact-form__date2').hide();
        }
        if($('#kind2').val() == 'none'){
            $('.contact-form__kind2').show();
            send = false;
        }
        else{
            $('.contact-form__kind2').hide();
        }
        if($('#part').val() == 'none'){
            $('.contact-form__part').show();
            send = false;
        }
        else{
            $('.contact-form__part').hide();
        }
        if(send == false){
            return false;
        }
    });

    // ペットホテル
    $('#js-submit3').click(function(){
        var send = true;
        if(!$('#fullname3').val()){
            $('.contact-form__fullname3').show();
            send = false;
        }else{
            $('.contact-form__fullname3').hide();
        }
        if(!$('#email3').val()){
            $('.contact-form__email3').show();
            send = false;
        }else{
            $('.contact-form__email3').hide();
        }
        if(($('#month3').val() == 'none') || ($('#day3').val() == 'none')){
            $('.contact-form__date3').show();
            send = false;
        }
        else{
            $('.contact-form__date3').hide();
        }
        if($('#kind3').val() == 'none'){
            $('.contact-form__kind3').show();
            send = false;
        }
        else{
            $('.contact-form__kind3').hide();
        }
        if($('#walk').val() == 'none'){
            $('.contact-form__walk').show();
            send = false;
        }
        else{
            $('.contact-form__walk').hide();
        }
        if($('#use').val() == 'none'){
            $('.contact-form__use').show();
            send = false;
        }
        else{
            $('.contact-form__use').hide();
        }
        if(send == false){
            return false;
        }
    });
});