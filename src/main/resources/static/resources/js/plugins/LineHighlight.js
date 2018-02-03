var LineHighlight = {
    getPluginDetail : function(){
        var jsonObject = new Object();
        jsonObject["pluginName"] = "LineHighlight";
        var lineHighlightNum = $('#lineHighlightNum').val();
        jsonObject["lineHighlightNum"] = lineHighlightNum;

        return jsonObject;
    },

    /**
     * Line Highlight 설정 폼이 공백일 시 true
     */
    isBlank : function(){
        if($('#lineHighlightNum').val() == ''){
            return true;
        }else{
            return false;
        }
    },

    /**
     * Line Highlight 설정 폼 유효성 검사
     * @returns {boolean}
     */
    isValidate : function(){
        var reg = /^((\d+\-)?\d+,?)*((\d+\-)?\d+)$/;
        var value = $('#lineHighlightNum').val();

        if(reg.test(value)){
            return true;
        }else{
            return false;
        }
    }
};