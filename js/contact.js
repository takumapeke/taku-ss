$(function(){
    $("#form-btn").click(function(){
        //送信できるか判定する変数
        var send1 = true;

        if(!$("#name").val()){ //入力がない場合
            $(".contact-form__alert--name").show();
            send1 = false;
        }else{ //入力がある場合
            $(".contact-form__alert--name").hide();
        }

        if(!$("#email").val()){
            $(".contact-form__alert--email").show();
            send1 = false;
        }else{
            $(".contact-form__alert--email").hide();
        }

        if(!$("#message").val()){
            $(".contact-form__alert--message").show();
            send1 = false;
        }else{
            $(".contact-form__alert--message").hide();
        }

        if(send1 == false){
            return false;
        }
    });
});