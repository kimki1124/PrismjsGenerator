var LineHighlight = {
    getPluginDetail : function(){
        var jsonObject = new Object();
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
    }
};