package com.example.demo.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

@Configuration
@EnableWebSecurity //스프링 필터체인에 스프링 시큐리티 필터 등록
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder encoderPwd() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
        .authorizeRequests()
            .antMatchers("/user/**").authenticated()
            .antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
            .antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
            .anyRequest().permitAll()
            .and()
                .formLogin()
                .loginPage("/loginForm") //인증이 필요한 페이지의 경우, 로그인 창으로 리다이렉트
                .loginProcessingUrl("/login") //login 주소가 호출되면, 시큐리티가 인터셉트해서 시큐리티가 직접 로그인을 진행해줌.
                .defaultSuccessUrl("/"); //로그인 성공시 리다이렉트 주소. 그런데 특정 페이지에서 있다가 오는 경우, 해당 페이지로 다시 보내준다.
        return http.build();
    }
}
