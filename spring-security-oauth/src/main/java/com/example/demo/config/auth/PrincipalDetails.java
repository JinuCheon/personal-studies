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
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

// 이 PrincipalDetails는, 시큐리티 세션의 Authentication에 들어가는 객체다.
// UserDetails 는 로컬 로그인에서 받은 정보를 담는 객체이고,
// OAuth2User 는 OAuth2 에서 받은 정보를 담는 객체이다.
// PrincipalDetails 는, 둘 다 한 번에 다룰 수 있게 하기위해, double implement 를 해준다.
public class PrincipalDetails implements UserDetails, OAuth2User {

    private User user; //콤포지션
    private Map<String, Object> attributes; //oauth provider 쪽에서 받은 유저 정보 담고 있음

    //일반 로그인 사용
    public PrincipalDetails(User user) {
        this.user = user;
    }

    //oauth 로그인 사용
    public PrincipalDetails(User user, Map<String, Object> attributes) {
        this.user = user;
        this.attributes = attributes;
    }

    public User getUser() {
        return user;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
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

    @Override //oauth provider의 고유 식별자인데, 필요 없어서 안씀
    public String getName() {
        return null;
//        return attributes.get("sub");
    }
}
