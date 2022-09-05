package com.example.demo.config.auth;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// 시큐리티 설정에서 loginProcessingUrl("/login"); 이 실행되었을때 여기로 넘어옴.
// 그리고 loadUserByUsername 함수가 실행됨.

@Service
public class PrincipalDetailsService implements UserDetailsService {

    @Autowired private UserRepository userRepository;

    // (시큐리티 session (Authentication (UserDetails) ) ) )
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("username = " + username);
        User user = userRepository.findByUsername(username);
        if(user != null) {
            return new PrincipalDetails(user);
        }
        return null;
    }
}
