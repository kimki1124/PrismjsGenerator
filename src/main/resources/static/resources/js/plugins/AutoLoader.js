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
        return false;
    }
}
