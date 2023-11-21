import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence to check if it's a pangram: ");
        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitivity

        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram!");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    public static boolean checkPangram(String input) {
        Set<Character> uniqueLetters = new HashSet<>();

        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                uniqueLetters.add(c);
            }
        }

        return uniqueLetters.size() == 26; // There are 26 letters in the English alphabet
    }
}

//Output: The quick brown fox jumps over the lazy dog
//The input is a pangram!
