// Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!"
// should be become "emocleW ot siht tpircsavaJ !ediuG"
//to make a string into an array use .split
 //then to convert array to a string use .join

let string = "Welcome to this JavaScript Guide!";

// Output becomes !ediuG tpircSavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator (string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseBySeparator(string, ""));
