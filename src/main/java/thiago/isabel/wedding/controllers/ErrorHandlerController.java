package thiago.isabel.wedding.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorHandlerController implements ErrorController {

    @RequestMapping("/error")
    public ModelAndView handleError(HttpServletRequest request) {
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        var modelAndView = new ModelAndView();
        if (status != null) {
            modelAndView.addObject("code", status);
        }
        modelAndView.setViewName("error");
        return modelAndView;
    }

    @ExceptionHandler({Exception.class})
    public ModelAndView handleError(HttpServletRequest req, Exception ex) {
        var modelAndView = new ModelAndView();
        modelAndView.addObject("exception", ex);
        modelAndView.addObject("url", req.getRequestURL());
        modelAndView.addObject("code", 500);
        modelAndView.setViewName("error");
        return modelAndView;
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
