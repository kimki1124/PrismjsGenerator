package kr.pe.web.prismjsgen.main.impl.plugins;

import kr.pe.web.prismjsgen.main.service.PluginDetailService;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class LineNumbersServiceImpl implements PluginDetailService{
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    public Document getPluginDetailTag(JSONObject jsonObject, Document xmlDoc) {
        String dataStart = String.valueOf(jsonObject.get("dataStart"));

        // pre 태그에 line-numbers class attribute 추가
        Node node = xmlDoc.getElementsByTagName("pre").item(0);
        String nodeClass = ((Element)node).getAttribute("class");
        nodeClass = nodeClass + "line-numbers ";
        ((Element)node).setAttribute("class", nodeClass);

        // pre 태그에 data-start attribute 추가
        ((Element)node).setAttribute("data-start", dataStart);

        return xmlDoc;
    }
}
