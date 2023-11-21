import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ArrayShuffler {

    public static void main(String[] args) {
        // Create an array with values (1, 2, 3, 4, 5, 6, 7)
        Integer[] myArray = {1, 2, 3, 4, 5, 6, 7};

        // Convert the array to a list for shuffling
        List<Integer> myList = new ArrayList<>(Arrays.asList(myArray));

        // Shuffle the list
        Collections.shuffle(myList);

        // Convert the list back to an array
        myArray = myList.toArray(new Integer[0]);

        // Print the shuffled array
        System.out.println("Shuffled Array: " + Arrays.toString(myArray));
    }
}
