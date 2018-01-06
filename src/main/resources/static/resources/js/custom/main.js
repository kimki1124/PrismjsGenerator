$(document).ready(function(){

    // 플러그인 옵션 mouseover 이벤트
    $('#plugins > li').mouseover(function(){
        if($(this).hasClass("active")){
            $(this).css("color", "#fff");
            $(this).css("background-color", "#007bff");
            $(this).css("border-color", "#007bff");
        }else{
            $(this).css("color", "#495057");
            $(this).css("background-color", "#fff");
            $(this).css("border-color", "#80bdff");
        }

        $(this).css("outline", "0");
        $(this).css("box-shadow", "0 0 0 0.2rem rgba(0,123,255,.25)");
    });

    // 플러그인 옵션 mouseover 이벤트
    $('#plugins > li').mouseout(function(){
        $(this).css("color", "");
        $(this).css("background-color", "");
        $(this).css("border-color", "");
        $(this).css("outline", "");
        $(this).css("box-shadow", "");
    });

    // 플러그인 옵션 click 이벤트
    $('#plugins > li').click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
});

$("#convert").click(function(){

   $(".convertSource").removeAttr("hidden");
});