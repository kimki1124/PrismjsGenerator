package kr.pe.web.prismjsgen.main.impl.plugins;

import kr.pe.web.prismjsgen.main.service.PluginDetailService;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import java.util.List;

public class AutoloaderServiceImpl implements PluginDetailService {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    public Document getPluginDetailTag(JSONObject jsonObject, Document xmlDoc) {
        List list = (List)jsonObject.get("autoLangArray");
        String str = "";

        for(int i=0;i<list.size();i++){
            String lang = String.valueOf(list.get(i));

            if(i == list.size() - 1){
                str += lang;
            }else{
                str += lang + ",";
            }
        }

        Node pre = xmlDoc.getElementsByTagName("pre").item(0);
        ((Element)pre).setAttribute("data-dependencies", str);

        return xmlDoc;
    }
}
