/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


function titleCase(str) {
 var array = str.toLowerCase().split(' ');
 
 var title = array.map(function (word) { //this version does not allow =>
    return (word.charAt(0).toUpperCase() + word.slice(1));
 }).join(' ');
  
  return title;
}

titleCase("I'm a little tea pot");
