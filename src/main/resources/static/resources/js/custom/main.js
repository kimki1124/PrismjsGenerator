$(document).ready(function(){

    //언어 SELECT OPTION ITEM 세팅
    initLanguageItem();

    // 플러그인 mouseover 이벤트
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

    // 플러그인 mouseover 이벤트
    $('#plugins > li').mouseout(function(){
        $(this).css("color", "");
        $(this).css("background-color", "");
        $(this).css("border-color", "");
        $(this).css("outline", "");
        $(this).css("box-shadow", "");
    });

    // 플러그인 click 이벤트
    $('#plugins > li').click(function(){
        onClickPluginDiv($(this), $(this).attr('name'));
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

/**
 * 언어 SELECT OPTION ITEM 세팅
 */
function initLanguageItem(){
    var languageSelect = $('#language');
    var depLangSelect = $('#dependencies-language');
    $.ajax({
        dataType: "json",
        url: 'resources/LanguageMenu.json',
        success: function(data){
            $.each(data, function(i, val){
                languageSelect.append($('<option />', { value: val.value, text: val.text }));
                depLangSelect.append($('<option />', { value: val.value, text: val.text }));
            });
        },
        error:function(error){
            console.log(error);
        }
    });
}

/**
 * 플러그인 활성화, 비활성화 시 옵션 DIV 열고 닫음
 * @param view
 * @param name
 */
function onClickPluginDiv(view, name){
    if(view.hasClass("active")){
        view.removeClass("active");
        $('#'+name+'_opt').css('display', 'none');
    }else{
        $('#'+name+'_opt').css('display', 'block');
        view.addClass("active");
    }
}

/**
 * Autoloader 플러그인 내 Language 추가 버튼 클릭 이벤트
 */
$('#btn-lang-add').click(function(){
    var lang = $('#dependencies-language option:selected').text();
    var append = '';
    append = '<span class="badge badge-info" id="badge-'+lang+'">';
    append += lang;
    append += '&nbsp;&nbsp;<i class="fa fa-times pointer" aria-hidden="true" onclick="removeDepLang(\''+lang+'\');"></i>';
    append += '</span>&nbsp;&nbsp;';

    $('#dep-lang-addon').append(append);
});

/**
 * Autoloader 플러그인 내 Language 뱃지 삭제 버튼 이벤트
 * @param lang
 */
function removeDepLang(lang){
    $('#badge-'+lang).remove();
}