package com.example.demo.config.auth;

// 시큐리티가 /login 주소 요청이 오면 낚아채서 로그인을 진행시킴.
// 로그인 진행이 완료되면 시큐리티 session을 만들어줌

// 여기에서 세션은 일반적인 세션과 똑같은 세션이지만,
// 시큐리티에서만 사용하는 세션 공간이 있음. (Security ContextHolder)
// 이 세션에 담을 수 있는 정보는 Authentication 타입 객체로 제한되어 있음.

// 그리고 Authentication 안에 유저 정보를 담아야하는데,
// 이 유저 정보를 담는 오브젝트의 타입도 UserDetails 타입 객체로 제한되어 있다.
// 여기에서는 이 UserDetails 를 구현한다.

import com.example.demo.model.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class PrincipalDetails implements UserDetails {

    private User user; //콤포지션

    public PrincipalDetails(User user) {
        super();
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // 여기는 해당 User의 권한을 Return 하는 곳이다.
        Collection<GrantedAuthority> collect = new ArrayList<>();
        collect.add((GrantedAuthority) () -> user.getRole());
        return collect;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        // 계정이 만료 되지 않았는가
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // 계정이 block 되었는가
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // 비밀번호 변경 주기가 지났는가
        return true;
    }

    @Override
    public boolean isEnabled() {
        // 계정이 활성화 되어 있는가 (휴먼계정 관리)
        return true;
    }
}
