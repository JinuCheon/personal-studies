package hello.core.singleton;

public class SingletonService {

    private static final SingletonService instance = new SingletonService();
    //static 영역에 단 하나의 객체만 생성해둔다.
    //static 이 붙으면, 클래스의 영역에 생성된다. 없으면 인스턴스의 영역이다.


    //이 싱글톤 객체 인스턴스가 필요하다면, 이 static 메서드를 통해서면 조회하도록 한다.
    public static SingletonService getInstance(){
        return instance;
    }


    //생성자를 private로 선언해서, 외부에서 new 로 새로 생성하는 것을 막는다.
    private SingletonService(){
    }

    public void logic() {
        System.out.println("싱글톤");
    }
}
