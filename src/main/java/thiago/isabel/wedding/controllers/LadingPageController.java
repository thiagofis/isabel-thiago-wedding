package thiago.isabel.wedding.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LadingPageController {

    @GetMapping("/index")
    public void index() {
    }

    @GetMapping("/thanks")
    public void thanks() {
    }
}
