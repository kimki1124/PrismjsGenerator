package kr.pe.web.prismjsgen.main.impl;

import com.sun.org.apache.xerces.internal.dom.DocumentImpl;
import kr.pe.web.prismjsgen.main.service.PrismjsService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.StringWriter;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

@Service("prismService")
public class PrismjsServiceImpl implements PrismjsService{
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public String getConvertSource(String source, String language, String[] plugins, String pluginDetail) {
        String targetSource = "";
        JSONArray jsonArray = JSONArray.fromObject(pluginDetail);
        String pluginPackageName = "kr.pe.web.prismjsgen.main.impl.plugins";
        Document xmlDoc = new DocumentImpl();
        Element pre = xmlDoc.createElement("pre");
        Node code = xmlDoc.createElement("code");
        pre.appendChild(code);
        xmlDoc.appendChild(pre);

        try{
            //플러그인 세팅
            for(int i=0;i<jsonArray.size();i++){
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                String pluginName = String.valueOf(jsonObject.get("pluginName"));
                String fullPackageName = pluginPackageName + "." + pluginName + "ServiceImpl";
                Class<?> c = Class.forName(fullPackageName);
                Object o = c.newInstance();
                Method m = o.getClass().getDeclaredMethod("getPluginDetailTag", JSONObject.class, Document.class);
                xmlDoc = (Document) m.invoke(o, jsonObject, xmlDoc);
            }

            //code 태그에 언어 설정
            xmlDoc = setPrismjsLanguage(xmlDoc, language);

            // 태그 내에 소스 삽입
            Node codeTag = (xmlDoc.getElementsByTagName("code")).item(0);
            codeTag.setTextContent(source);
            targetSource = xmlToString(xmlDoc);

        }catch(ClassNotFoundException e){
            logger.error(e.getMessage(), e);
        }catch(InstantiationException ee){
            logger.error(ee.getMessage(), ee);
        }catch(IllegalAccessException eee){
            logger.error(eee.getMessage(), eee);
        }catch(NoSuchMethodException eeee){
            logger.error(eeee.getMessage(), eeee);
        }catch(InvocationTargetException eeeee){
            logger.error(eeeee.getMessage(), eeeee);
        }

        return targetSource;
    }

    private String xmlToString(Document xmlDoc) {
        try {
            StringWriter sw = new StringWriter();
            TransformerFactory tf = TransformerFactory.newInstance();
            Transformer transformer = tf.newTransformer();
            transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
            transformer.transform(new DOMSource(xmlDoc), new StreamResult(sw));
            return sw.toString();
        } catch (Exception ex) {
            throw new RuntimeException("Error converting to String", ex);
        }
    }

    private Document setPrismjsLanguage(Document xmlDoc, String language) {
        Node code = xmlDoc.getElementsByTagName("code").item(0);
        ((Element)code).setAttribute("class", language);
        return xmlDoc;
    }
}
