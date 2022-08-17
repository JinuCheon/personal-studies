package hello.core.singleton;

public class SingletonService {

    //static 키워드를 사용하여, 클래스 객체를 생성한다. -> 인스턴스를 생성해도 같은 값을 가짐.
    private static final SingletonService instance = new SingletonService();

    public static SingletonService getInstance() {
        return instance;
    }

    //private으로 생성자를 사용해서, 혹시라도 누군가가 new 키워드로 새로운 인스턴스를 생성하지 않게 막는다.
    private SingletonService() {
    }

    public void logic() {
        System.out.println("싱글톤 객체 로직 호출");
    }
}
