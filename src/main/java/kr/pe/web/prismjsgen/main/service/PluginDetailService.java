package kr.pe.web.prismjsgen.main.service;

import net.sf.json.JSONObject;
import org.w3c.dom.Document;

public interface PluginDetailService {
    Document getPluginDetailTag(JSONObject jsonObject, Document xmlDoc);
}
