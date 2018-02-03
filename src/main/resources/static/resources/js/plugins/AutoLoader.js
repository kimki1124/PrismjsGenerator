var AutoLoader = {
    getPluginDetail : function(){
        var jsonObject = new Object();
        jsonObject["pluginName"] = "Autoloader";
        var langArray = [];
        var addon = $('#dep-lang-addon > span');

        for(var i=0;i<addon.length;i++){
            var targetLang = $(addon[i]).text().trim();
            langArray.push(targetLang);
        }

        jsonObject['autoLangArray'] = langArray;

        return jsonObject;
    },

    /**
     * Auto Loader Language 설정 폼이 공백일 시 true
     */
    isBlank : function(){
        if($('#dep-lang-addon')[0].children.length > 0){
            return false;
        }else{
            return true;
        }
    },

    /**
     * Auto Loader 설정 폼 유효성 검사
     * @returns {boolean}
     */
    isValidate : function(){
        return true;
    }
}
