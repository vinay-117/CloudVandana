function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

// Example usage
var myArray = [5, 2, 9, 1, 5, 6];
var sortedArray = sortArrayDescending(myArray);

// Displaying the sorted array
console.log(sortedArray);
