package com.example.demo.config.auth.provider;

// provider 마다 유저 정보, 시스템 정보 등의 필드 명들이 다 다르다.
// 그래서 인터페이스 및 구현체를 통해 해결함
public interface OAuth2UserInfo {
    String getProviderId();
    String getProvider();
    String getEmail();
    String getName();
}
