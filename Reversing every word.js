function reverseWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");

    // Reverse each word in the array
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

// Example usage
var inputSentence = "Hello cloud vandana";
var reversedResult = reverseWords(inputSentence);

// Displaying the reversed sentence
console.log(reversedResult);

//Output: olleH duolc anadnav
