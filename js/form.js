//月日の選択肢を追加
let i=1;
while(i <= 12){
    const option=`<option value="${i}">${i}</option>`;
    document.getElementById('month1').insertAdjacentHTML('beforeend',option);
    document.getElementById('month2').insertAdjacentHTML('beforeend',option);
    document.getElementById('month3').insertAdjacentHTML('beforeend',option);
    i++;
}
let p=1;
while(p <=31){
    const option=`<option value="${p}">${p}</option>`;
    document.getElementById('date1').insertAdjacentHTML('beforeend',option);
    document.getElementById('date2').insertAdjacentHTML('beforeend',option);
    document.getElementById('date3').insertAdjacentHTML('beforeend',option);
    p++;
}


$(function(){
    //バリデーション
    //シャンプー予約
    $("#form-btn1").click(function(){
        //送信できるか判定する変数
        var send1 = true;

        if(!$("#name1").val()){ //入力がない場合
            $(".contact-form__alert--name1").show();
            send1 = false;
        }else{ //入力がある場合
            $(".contact-form__alert--name1").hide();
        }

        if(!$("#email1").val()){
            $(".contact-form__alert--email1").show();
            send1 = false;
        }else{
            $(".contact-form__alert--email1").hide();
        }

        if($("#month1").val() == "none" || $("#date1").val() == "none"){
            $(".contact-form__alert--date1").show();
            send1 = false;
        }else{
            $(".contact-form__alert--date1").hide();
        }

        if($("#time").val() == "none"){
            $(".contact-form__alert--time").show();
            send1 = false;
        }else{
            $(".contact-form__alert--time").hide();
        }

        if($("#kind1").val() == "none"){
            $(".contact-form__alert--kind1").show();
            send1 = false;
        }else{
            $(".contact-form__alert--kind1").hide();
        }

        if($("#keep").val() == "none"){
            $(".contact-form__alert--keep").show();
            send1 = false;
        }else{
            $(".contact-form__alert--keep").hide();
        }

        if(send1 == false){
            return false;
        }
    });

    //しつけ教室予約
    $("#form-btn2").click(function(){
        //送信できるか判定する変数
        var send1 = true;

        if(!$("#name2").val()){ //入力がない場合
            $(".contact-form__alert--name2").show();
            send1 = false;
        }else{ //入力がある場合
            $(".contact-form__alert--name2").hide();
        }

        if(!$("#email2").val()){
            $(".contact-form__alert--email2").show();
            send1 = false;
        }else{
            $(".contact-form__alert--email2").hide();
        }

        if($("#month2").val() == "none" || $("#date2").val() == "none"){
            $(".contact-form__alert--date2").show();
            send1 = false;
        }else{
            $(".contact-form__alert--date2").hide();
        }

        if($("#kind2").val() == "none"){
            $(".contact-form__alert--kind2").show();
            send1 = false;
        }else{
            $(".contact-form__alert--kind2").hide();
        }

        if($("#part").val() == "none"){
            $(".contact-form__alert--part").show();
            send1 = false;
        }else{
            $(".contact-form__alert--part").hide();
        }

        if(send1 == false){
            return false;
        }
    });

    //ペットホテル予約
    $("#form-btn3").click(function(){
        //送信できるか判定する変数
        var send1 = true;

        if(!$("#name3").val()){ //入力がない場合
            $(".contact-form__alert--name3").show();
            send1 = false;
        }else{ //入力がある場合
            $(".contact-form__alert--name3").hide();
        }

        if(!$("#email3").val()){
            $(".contact-form__alert--email3").show();
            send1 = false;
        }else{
            $(".contact-form__alert--email3").hide();
        }

        if($("#month3").val() == "none" || $("#date3").val() == "none"){
            $(".contact-form__alert--date3").show();
            send1 = false;
        }else{
            $(".contact-form__alert--date3").hide();
        }

        if($("#kind3").val() == "none"){
            $(".contact-form__alert--kind3").show();
            send1 = false;
        }else{
            $(".contact-form__alert--kind3").hide();
        }

        if($("#walk").val() == "none"){
            $(".contact-form__alert--walk").show();
            send1 = false;
        }else{
            $(".contact-form__alert--walk").hide();
        }

        if($("#use").val() == "none"){
            $(".contact-form__alert--use").show();
            send1 = false;
        }else{
            $(".contact-form__alert--use").hide();
        }

        if(send1 == false){
            return false;
        }
    });
});