package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member); //domain에 있는 member 클래스이다.

    //optional은 null값을 처리해준다.
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll(); //
}
