package com.example.demo.config.oauth;

import com.example.demo.config.auth.PrincipalDetails;
import com.example.demo.config.auth.provider.FacebookUserInfo;
import com.example.demo.config.auth.provider.GoogleUserInfo;
import com.example.demo.config.auth.provider.NaverUserInfo;
import com.example.demo.config.auth.provider.OAuth2UserInfo;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.nimbusds.openid.connect.sdk.claims.UserInfo;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    //oauth2 인증 성공 후 후처리 (해당 oauth 서비스로 부터 받은 유저 데이터도 다룬다.)
    //인가코드는 이미 내부에서 처리되었고, 해당 인가코드로 요청해서 받은 엑세스 토큰 값을 들고 있다.

    // loadUser도, override 하지 않으면 기본 동작을 하는데 이렇게 재정의한 이유는,
    // 1. oauth로 넘어온 정보를 토대로 강제 회원가입 하기 위해서
    // 2. 기본 OAuth2User 이 아닌, PrincipalDetails 를 사용하기 위해서. (PrincipalDetails 설명 확인)
    @SneakyThrows
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OAuth2User oAuth2User = super.loadUser(userRequest);
        System.out.println("oAuth2User.getAttributes() = " + oAuth2User.getAttributes());

        OAuth2UserInfo oAuth2UserInfo = null;
        if(userRequest.getClientRegistration().getRegistrationId().equals("google")) {
            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        } else if(userRequest.getClientRegistration().getRegistrationId().equals("facebook")) {
            oAuth2UserInfo = new FacebookUserInfo(oAuth2User.getAttributes());
        } else if(userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
            oAuth2UserInfo = new NaverUserInfo((Map)oAuth2User.getAttributes().get("response"));
        } else {
            throw new Exception();
        }

        String provider = oAuth2UserInfo.getProvider();
        String providerId = oAuth2UserInfo.getProviderId();
        String username = provider + "_" + providerId;
        String password = "password";
        String email = oAuth2UserInfo.getEmail();
        String role = "ROLE_USER";

        User user = userRepository.findByUsername(username);
        if(user == null) {
            System.out.println("회원가입 진행");
            user = User.builder()
                    .username(username)
                    .password(password)
                    .email(email)
                    .role(role)
                    .provider(provider)
                    .providerId(providerId)
                    .build();
            userRepository.save(user);
        } else {
            System.out.println("기존 회원 로그인");
        }

        return new PrincipalDetails(user, oAuth2User.getAttributes());
    }
}

// 유저 정보 추출
//System.out.println("oAuth2User.getAttributes() = " + oAuth2User.getAttributes());
//{sub=117579391350137605406, - oauth 내부 서버 고유값
// name=Jinwoo Cheon, given_name=Jinwoo, family_name=Cheon,
// picture=https://lh3.googleusercontent.com/a-/AFdZucrvv3rDtoBPMIfhdyCEyT6sds3XjniVQJ0c1RwkPQ=s96-c,
// email=woojin8787@gmail.com, email_verified=true, locale=ko}

// 엑세스 토큰 추출
// System.out.println("getTokenValue = " + userRequest.getAccessToken().getTokenValue());
// getTokenValue = ya29.a0AVA9y1tA9kHTDODbnsXzK2CA6BPUSWp7hJUNc2Aqm9CvA57y8PyCxyjNmqB2-auZpp6t ~~~~ 생략