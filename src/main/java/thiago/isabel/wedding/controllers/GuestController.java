package thiago.isabel.wedding.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import thiago.isabel.wedding.Domain.Guest;
import thiago.isabel.wedding.services.GuestsService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class GuestController {

    private final GuestsService guestsService;

    public GuestController(GuestsService guestsService) {
        this.guestsService = guestsService;
    }

    @PostMapping("/guest")
    public void add(@ModelAttribute Guest guest) throws IOException {
        guestsService.add(guest.getName(), guest.getCompanionsNumber());
    }

    @RequestMapping(value = "/guests.csv")
    public String download(HttpServletResponse response) throws IOException {
        response.setContentType("text/plain; charset=utf-8");
        return guestsService.get();
    }

    @ExceptionHandler({IOException.class, Exception.class})
    public String handleError() {
        return "index";
    }


}
