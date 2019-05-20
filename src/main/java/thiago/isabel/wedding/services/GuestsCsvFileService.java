package thiago.isabel.wedding.services;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class GuestsCsvFileService implements GuestsService {

    private static final String pathToCsv = "/guest-list.csv";

    @Override
    public void add(String guestName, int companionsNumber) throws IOException {
        var csvFile = new File(pathToCsv);

        var csvWriter = new FileWriter(csvFile);
        if (csvFile.isFile()) {
            csvWriter.append("Guest Name");
            csvWriter.append(",");
            csvWriter.append("Companions Number");
            csvWriter.append("\n");
        }

        csvWriter.append(guestName);
        csvWriter.append(",");
        csvWriter.append(Integer.toString(companionsNumber));
        csvWriter.append("\n");

        csvWriter.flush();
        csvWriter.close();
    }

    @Override
    public String get() throws IOException {

        var csvFile = new File(pathToCsv);
        if (!csvFile.exists()) {
            return null;
        }

        byte[] encoded = Files.readAllBytes(Paths.get(pathToCsv));
        return new String(encoded, Charset.defaultCharset());

    }
}
