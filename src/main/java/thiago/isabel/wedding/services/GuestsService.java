package thiago.isabel.wedding.services;

import java.io.IOException;

public interface GuestsService {

    void add(String guestName, int companionsNumber) throws IOException;

    String get() throws IOException;
}
