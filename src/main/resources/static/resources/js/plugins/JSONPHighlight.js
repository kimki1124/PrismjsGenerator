var JSONPHighlight = {
    getPluginDetail : function(){
        var jsonObject = new Object();
        jsonObject["pluginName"] = "JSONPHighlight";
        var jsonpHighlight = $('#jsonpPath').val();
        jsonObject["jsonpHighlight"] = jsonpHighlight;

        return jsonObject;
    },

    /**
     * JSONP Path 설정 폼이 공백일 시 true
     */
    isBlank : function(){
        if($('#jsonpPath').val() == ''){
            return true;
        }else{
            return false;
        }
    }
}