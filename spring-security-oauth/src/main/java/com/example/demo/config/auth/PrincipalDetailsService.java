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
// 사실 loadUserByUsername 은 기본적으로 자동 실행되지만,
// oauth, 로컬로그인 둘 다 적용 가능한 PrincipalDetails 을 사용하기 위해 수정해주는 것.
// 하나만 사용한다면, override 해서 수정할 필요 없음.

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
