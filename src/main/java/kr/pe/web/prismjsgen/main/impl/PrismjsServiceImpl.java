package kr.pe.web.prismjsgen.main.impl;

import kr.pe.web.prismjsgen.main.service.PrismjsService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@Service("prismService")
public class PrismjsServiceImpl implements PrismjsService{
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public String getConvertSource(String source, String language, String[] plugins, String pluginDetail) {
        JSONArray jsonArray = JSONArray.fromObject(pluginDetail);
        String pluginPackageName = "kr.pe.web.prismjsgen.main.impl.plugins";
        HashMap<String, String> paramMap = new HashMap<String, String>();
        paramMap.put("pre", "<pre>");
        paramMap.put("code", "<code>");

        try{
            for(int i=0;i<jsonArray.size();i++){
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                String pluginName = String.valueOf(jsonObject.get("pluginName"));
                String fullPackageName = pluginPackageName + "." + pluginName + "ServiceImpl";
                Class<?> c = Class.forName(fullPackageName);
                Object o = c.newInstance();
                Method m = o.getClass().getDeclaredMethod("getPluginDetailTag", HashMap.class);
                HashMap<String, String> returnMap = (HashMap<String, String>) m.invoke(o, paramMap);
            }
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

        return null;
    }
}
