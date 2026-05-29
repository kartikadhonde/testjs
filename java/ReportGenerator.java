package sample;

import java.util.Date;

public class ReportGenerator {
    private String title;
    private Date creationDate;

    public ReportGenerator(String title) {
        this.title = title;
        this.creationDate = new Date();
    }

    public String generateHeader() {
        return "Report: " + title + "\nGenerated on: " + creationDate.toString() + "\n====================";
    }

    public String formatRow(String label, double value) {
        return String.format("%-15s: %.2f", label, value);
    }
}
