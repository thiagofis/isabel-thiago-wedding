package thiago.isabel.wedding.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import thiago.isabel.wedding.Domain.Guest;
import thiago.isabel.wedding.services.GuestsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class GuestController {

    private final GuestsService guestsService;

    public GuestController(GuestsService guestsService) {
        this.guestsService = guestsService;
    }

    @PostMapping("/guest")
    @ResponseStatus(value = HttpStatus.OK)
    public void add(@ModelAttribute Guest guest) throws IOException {
        guestsService.add(guest.getName(), guest.getCompanionsNumber());
    }

    @RequestMapping(value = "/guests.csv")
    public void download(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv; charset=utf-8");
        var csvContent = guestsService.get();
        response.getWriter().print(csvContent);
    }

    @ExceptionHandler({IOException.class, Exception.class})
    public ModelAndView  handleError(HttpServletRequest req, Exception ex) {
        var modelAndView = new ModelAndView();
        modelAndView.addObject("exception", ex);
        modelAndView.addObject("url", req.getRequestURL());
        modelAndView.setViewName("error");
        return modelAndView;
    }


}
