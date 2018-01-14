var LineNumbers = {
    getPluginDetail : function(){
        var jsonObject = new Object();
        jsonObject["pluginName"] = "LineNumbers";
        var dataStart = $('#dataStart').val();
        jsonObject["dataStart"] = dataStart;

        return jsonObject;
    },

    /**
     * Line Numbers 설정 폼이 공백일 시 true
     */
    isBlank : function(){
        return false;
    }
};