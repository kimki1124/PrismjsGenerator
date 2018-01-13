package kr.pe.web.prismjsgen.main;

import kr.pe.web.prismjsgen.main.controller.PrismjsController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class PrismjsgenApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(PrismjsgenApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(PrismjsgenApplication.class, args);
	}
}