package sample;

import java.util.List;

public class DataAnalyzer {
    public double calculateMean(List<Double> numbers) {
        if (numbers == null || numbers.isEmpty()) {
            return 0.0;
        }
        double sum = 0.0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.size();
    }

    public double findMax(List<Double> numbers) {
        if (numbers == null || numbers.isEmpty()) {
            throw new IllegalArgumentException("List cannot be empty or null");
        }
        double max = numbers.get(0);
        for (double num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}
