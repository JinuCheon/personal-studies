package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.*;

public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>(); //Map 자료형 DB
    private static long sequence = 0L; //long 타입의 0은 뒤에 L을 붙여서 표시해준다.

    @Override //새로운 맴버를 생성
    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member); //map 자료형에 key, value로 값을 추가
        return member;
    }

    @Override //id로 맴버 찾기
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override //name으로 맴버 찾기
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name))
                .findAny();
    }

    @Override //모든 맴버 가져오
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }
}
