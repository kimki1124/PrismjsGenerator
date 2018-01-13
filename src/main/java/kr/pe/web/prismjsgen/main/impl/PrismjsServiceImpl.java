package kr.pe.web.prismjsgen.main.impl;

import kr.pe.web.prismjsgen.main.service.PrismjsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("prismService")
public class PrismjsServiceImpl implements PrismjsService{
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public String getConvertSource(String source, String language, String[] plugins) {

        return null;
    }
}
