$(document).ready(function(){

    // 플러그인 옵션 mouseover 이벤트
    $('#plugins > li').mouseover(function(){
        // active 클래스가 있는 노드와 없는 노드가 스타일이 다름
        if(!$(this).hasClass("active")){
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
            if($(this).text() == 'Line Highlight'){
                $('#lineHighlightOpt').removeAttr('hidden');
            }
            $(this).addClass("active");
        }
    });
});

// CONVERT 버튼 클릭 이벤트
$("#convert").click(function(){
    var source = $('#originSource').val();
    var language = $('#language option:selected').val();
    var pluginList = $('#plugins > li');
    var pluginArray = [];

    for(var i=0;i<pluginList.length;i++){
        if($(pluginList[i]).hasClass("active")){
            pluginArray.push($(pluginList[i]).attr('value'));
        }
    }

    //var applyPlugin = JSON.stringify(pluginArray);

    $.ajax({
        type:'POST',
        url:'/prismjsGenerator/convert',
        data:'source='+encodeURIComponent(source)+'&language='+encodeURIComponent(language)+"&plugins="+encodeURIComponent(pluginArray),
        success:function(data){
            $(".convertSource").removeAttr("hidden");
            $("#convertSource").val(data);
        },
        error : function(request,status,error){
            console.log(request.responseText);
        }
    });
});