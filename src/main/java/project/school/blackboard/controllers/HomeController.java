package project.school.blackboard.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {
    @GetMapping("/")
    public String main() {
        return "App";
    }
//    @GetMapping("/login")
//    public String login() {
//        return "redirect:https://cas.sbuniv.edu/cas/login?service=http://localhost:8081&redirectUrl=http://localhost:8081";
//    }

}
