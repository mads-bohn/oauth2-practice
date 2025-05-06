package com.oauth2_practice_api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable) // disables CSRF
                .authorizeHttpRequests(authorizeRequests -> authorizeRequests.anyRequest().authenticated()) // requires endpoint authentication
                .oauth2Login(oauth2 -> oauth2.defaultSuccessUrl("http://localhost:5173/dashboard", true)) // oauth2 login with success page redirect
                .logout(oauth2 -> oauth2.logoutSuccessUrl("http://localhost:5173").permitAll());  // logout with success page redirect
        return http.build();
    }
}
