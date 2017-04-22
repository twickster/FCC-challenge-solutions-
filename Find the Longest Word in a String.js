/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19. 

*/

function findLongestWord(str) {
var words = str.split(' ');
var longestWord = 0;
 for (i = 0; i < words.length; i++) {
   if (words[i].length > longestWord) {
     longestWord = words[i].length;
   }
 }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
