package hello.hellospring.controller;

public class MemberForm {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        // 이 setName은 스프링이 자동으로 호출한다.
        // input 태그의 name 속성값과 변수 명을 맞춰줘야한다.
        this.name = name;
    }
}
