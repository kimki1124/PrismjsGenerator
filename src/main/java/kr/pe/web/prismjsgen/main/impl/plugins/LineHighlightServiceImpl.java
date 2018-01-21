package kr.pe.web.prismjsgen.main.impl.plugins;

import kr.pe.web.prismjsgen.main.service.PluginDetailService;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class LineHighlightServiceImpl implements PluginDetailService {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    public Document getPluginDetailTag(JSONObject jsonObject, Document xmlDoc) {
        String pluginOpt = String.valueOf(jsonObject.get("lineHighlightNum"));
        Node pre = xmlDoc.getElementsByTagName("pre").item(0);
        ((Element)pre).setAttribute("data-line", pluginOpt);

        return xmlDoc;
    }
}
