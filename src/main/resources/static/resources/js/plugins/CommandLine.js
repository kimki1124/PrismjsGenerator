var CommandLine = {
    getPluginDetail : function(){
        var jsonObject = new Object();
        jsonObject["pluginName"] = "CommandLine";
        var dataHost = $('#dataHost').val();
        var dataUser = $('#dataUser').val();

        jsonObject["dataHost"] = dataHost;
        jsonObject["dataUser"] = dataUser;

        if($('#dataOutputYn')[0].checked){
            var dataOutput = $('#dataOutput').val();
            jsonObject["dataOutput"] = dataOutput;
        }

        return jsonObject;
    },

    /**
     * Command Line 설정 폼이 공백일 시 true
     */
    isBlank : function(){
        if($('#dataHost').val() == '' || $('#dataUser').val() == ''){
            return true;
        }

        if($('#dataOutputYn')[0].checked && $('#dataOutput').val() == ''){
            return true;
        }

        return false;
    },

    /**
     * Command Line 설정 폼 유효성 검사
     * @returns {boolean}
     */
    isValidate : function(){
        var reg = /^((\d+\-)?\d+,?)*((\d+\-)?\d+)$/;
        var value = $('#dataOutput').val();

        if(reg.test(value)){
            return true;
        }else{
            return false;
        }
    }
};