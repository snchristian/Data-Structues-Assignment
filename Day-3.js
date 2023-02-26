/* 
Given an array of integers and a number, write a function called maxSubarraySum,  
which finds the maximum sum of a subarray with the length of the number passed to the function. 
Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is 
not. 
*/ 
const maxSubarraySum = (arr, n) => {
    //setting up edge case to make sure that the array lenght is never less then the subarray needed
    if (arr.length < n) {
      return null
    }
  
    //setting up initial values for maxSum and tempSum  
    let maxSum = 0
    let tempSum = 0
  
    // setting up loop to get the inital sliding window sum
    for (let i = 0; i < n; i++) {
      maxSum += arr[i]
    }
  
    // setting tempSum to be equal to maxSum 
    tempSum = maxSum
  
    //setting up a loop to achieve the sliding window, starting the loop at n because we already got the first sum of the sliding window with the first loop.
    for (let i = n; i < arr.length; i++) {
      tempSum = tempSum - arr[i - n] + arr[i]
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
  
  } 
 
// Test Cases:  
// maxSubarraySum([100,200,300,400], 2) 700 
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) 39  
// maxSubarraySum([-3,4,0,-2,6,-1], 2) 5 
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) 5 
// maxSubarraySum([2,3], 3) null 

//
// Given a sorted array of integers, find the first occurrence of a target value.  
// If the target is not found in the array, return -1. 
 
function binarySearchFirstOccurrence(nums, target) {
    // setting up the pointer 
    let start = 0
    let end = nums.length - 1
    let targetOccurrence = -1
  
    // setting up a while loop  
    while (start <= end) {
      // finding the middleIndex
      let middleIndex = Math.floor((start + end) / 2)

      //retrieving middlevalue
      let middleValue = nums[middleIndex]
      console.log(middleValue)
     // Setting up conditional to check if the middle value is the target. If the middle value is our target, we still need to move our pointer to make sure that there isn't an earlier occurrence of the target
      if (middleValue === target) {
        targetOccurrence = middleValue
        end = middleValue - 1
      }
      // If the middle value isn't our target, we check if it is more or less than our target and move the pointer accordingly. 
      else if (middleValue < target) {
        start = middleValue + 1
      }
      else {
        end = middleValue - 1
      }
      return targetOccurrence
    }
  
    return -1
  }
 
  // Given a string, find the length of the longest substring without repeating characters. 
 
  
function lengthOfLongestSubstring(s) {
    let start = 0
    let charMap = {}
    let maxLength = 0
  
    for (let i = 0; i < s.length; i++) {
      if (charMap[s[i]] >= start) {
        start = charMap[s[i]] + 1;
      }
  
      charMap[s[i]] = i;
      maxLength = Math.max(maxLength, i - start + 1);
    }
  
    return maxLength;
  }
  

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1 
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 
 
 
 
 
 
 


 
 
 
 
 
 