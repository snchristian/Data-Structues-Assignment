/* Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
*/
const countUniqueValues = (arr) => {
    // setting up frequency counter 
    let freq = {};
    
    // Looping to update fequency counter 
    for(let val of arr){
       freq[val] = (freq[val] || 0) + 1
    }
    
    //count all the unique values by counting the keys in the frequency counter.
    return Object.keys(freq).length

}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

// Problem #2: 
/*
Write a function called, areThereDuplicates which accepts a array of letters, 
and checks whether there are any duplicates among the argument passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/
const areThereDuplicates = (arrOfLetters) => {
    // setting up frequency counter
    let frequency1 = {}
  
    //Loopin to update frequency counter 
    for (val of arrOfLetters) {
      frequency1[val] = (frequency1[val] || 0) + 1
    }
  
    // looping through the values of the frequency counter and checking to see if the values are greater than 1, if yes then their are duplicates in the array.
    for (key in frequency1) {
      if (frequency1[key] > 1) {
        return true
      }
      else {
        return false
      }
    }
  }

  
//Tests
// areThereDuplicates(['a', 'a', 'c', 'd']) true
// areThereDuplicates(['a', 'b', 'c']) // false


// Problem 3: 
/* 
Write a function called avgPair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the 
array 
where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
*/

const avgPair = (arr, avgTarget) => {

  // setting up pointer
  let left = 0
  let right = arr.length - 1

  //setting up a while loop to loop through the array and compare the average, if the average is equal to the average total return, else return  false.

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2
    console.log(average)

    if (average === avgTarget) {
      return true
    }
    else if (average > avgTarget) {
      right--
    }
    else {
      left++
    }
  }
  return false
}
// Test Cases: 
// avgPair([1,2,3],2.5) true
// avgPair([1,3,3,5,6,7,10,12,19],8) true
// avgPair([-1,0,3,4,5,6], 4.1) false
// avgPair([],4) false