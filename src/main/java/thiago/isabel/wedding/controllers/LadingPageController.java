package thiago.isabel.wedding.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
public class LadingPageController {

    @GetMapping("/index")
    public void index() {
    }

    @ExceptionHandler({IOException.class, Exception.class})
    public ModelAndView handleError(HttpServletRequest req, Exception ex) {
        var modelAndView = new ModelAndView();
        modelAndView.addObject("exception", ex);
        modelAndView.addObject("url", req.getRequestURL());
        modelAndView.setViewName("error");
        return modelAndView;
    }

}
