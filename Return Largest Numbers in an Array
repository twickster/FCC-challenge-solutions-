/*

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/


function largestOfFour(arr) {
  // You can do this!
  var answer =[];
  
  for (i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (n = 0; n < arr[i].length; n++) {
      if (arr[i][n] > largestNumber) {
        largestNumber = arr[i][n];
      }
    }
    answer[i] = largestNumber;
  }
  return answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Works but not satisfied with my understanding or the code itself. Will need to revist this after I have improved a bit.
