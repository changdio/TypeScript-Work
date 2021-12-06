// Palindrome //
var word = "bob"
var reversed = word.split("").reverse().join("")

if (word == reversed) {
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome (" + reversed + ")")
}

