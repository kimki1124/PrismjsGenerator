package kr.pe.web.prismjsgen.main.impl.plugins;

import kr.pe.web.prismjsgen.main.service.PluginDetailService;
import net.sf.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import java.util.List;

public class CommandLineServiceImpl implements PluginDetailService{

    @Override
    public Document getPluginDetailTag(JSONObject jsonObject, Document xmlDoc) {
        String dataHost = String.valueOf(jsonObject.get("dataHost"));
        String dataUser = String.valueOf(jsonObject.get("dataUser"));
        String dataOutput = String.valueOf(jsonObject.get("dataOutput"));

        Node pre = xmlDoc.getElementsByTagName("pre").item(0);
        ((Element)pre).setAttribute("class", "command-line");
        ((Element)pre).setAttribute("data-host", dataHost);
        ((Element)pre).setAttribute("data-user", dataUser);

        if(!"null".equals(dataOutput)){
            ((Element)pre).setAttribute("data-output", dataOutput);
        }

        return xmlDoc;
    }
}
