$(function(){
    // バリデーション
    $('#js-submit').click(function(){
        var send = true;
        if(!$('#fullname').val()){
            $('.contact-form__fullname').show();
            send = false;
        }else{
            $('.contact-form__fullname').hide();
        }
        if(!$('#email').val()){
            $('.contact-form__email').show();
            send = false;
        }else{
            $('.contact-form__email').hide();
        }
        if(!$('#message').val()){
            $('.contact-form__message').show();
            send = false;
        }else{
            $('.contact-form__message').hide();
        }
        if(send == false){
            return false;
        }
    });
});