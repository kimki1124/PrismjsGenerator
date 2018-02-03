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
    },

    /**
     * Line Numbers 설정 폼 유효성 검사
     * @returns {boolean}
     */
    isValidate : function(){
        var reg = /^\d+$/;
        var value = $('#dataStart').val();

        if(reg.test(value)){
            return true;
        }else{
            return false;
        }
    }
};