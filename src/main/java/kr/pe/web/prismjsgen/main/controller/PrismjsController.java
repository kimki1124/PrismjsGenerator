package kr.pe.web.prismjsgen.main.controller;

import kr.pe.web.prismjsgen.main.service.PrismjsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@RestController
public class PrismjsController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Resource(name="prismService")
    private PrismjsService prismService;

    /**
     * originalSource Converting
     * @param originSource
     * @return
     */
    @RequestMapping("/convert")
    public String convertOriginalSource(@RequestParam String source, @RequestParam String language, @RequestParam String[] plugins) throws UnsupportedEncodingException {
        logger.info("### call method => {}", "/convert");
        String convertSource = prismService.getConvertSource(source, language, plugins);
        return convertSource;
    }
}
