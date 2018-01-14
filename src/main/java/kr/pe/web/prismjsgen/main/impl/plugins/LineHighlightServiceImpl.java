package kr.pe.web.prismjsgen.main.impl.plugins;

import kr.pe.web.prismjsgen.main.service.PluginDetailService;
import org.springframework.stereotype.Service;

import java.util.HashMap;

public class LineHighlightServiceImpl implements PluginDetailService {


    @Override
    public HashMap<String, String> getPluginDetailTag(HashMap<String, String> paramMap) {
        return paramMap;
    }
}
