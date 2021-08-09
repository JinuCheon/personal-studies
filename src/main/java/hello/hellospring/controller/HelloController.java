package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller //어떤 동작을 위한 것인지는 아직 잘 모르겠다. "어노테이션" 이라고 한다.
public class HelloController {

    @GetMapping("hello") //http get 요청을 처리한다.
    public String hello(Model model) {
        model.addAttribute("data", "hello!!!");
        //hello.html data 키에 hello!!!를 넣는다.
        return "hello"; //hello.html을 리턴한다.
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }
}
