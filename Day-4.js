// Write a recursive function called flatTheArray which accepts an array of arrays  
// and returns a new array with all values flattened. 
 
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5] 
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5] 
// flatTheArray([[1],[2],[3]]) // [1,2,3] 
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3] 
 
const flatTheArray = (arr) => { 
    // setting up a new array to hold the contents of the flattened array.
    const flattenedArray = []
    // setting up the recursion in a different function because I don't need the array to be cleared every time the function is cleared.
    flattened(index=0, arr, flattenedArray)
    // return the array
    return flattenedArray
}

const flattened = (index,arr,flattenedArray) => {
    // if the index is greater than the array length then stop calling the function  
    if (index >= arr.length) return;

    // checking to see if the array index is an array to avoid throwing an error, if its an array send it through the function and each of those indexes get pushed into the array 

    if(Array.isArray(arr[index])){
        flattened(0,arr[index],flattenedArray);
    }else{

        // pushing the index to a new array to remove nested array
        flattenedArray.push(arr[index])
    }
    // calling the function to start the cycle over 
    flattened(index + 1,arr,flattenedArray)
}

// Write a recursive function called capitalizeWords.  
// Given an array of words, return a new array containing each word capitalized. 
 
// let words = ['tony', 'kim']; 
// capitalizedAllLetters(words); // ['TONY', 'KIM'] 
 
const capitalizeAllLetters = (array,index) => { 
    capitalizedWordsArray = []
    capitalized(array,index,capitalizedWordsArray)
    return capitalizedWordsArray

}

const capitalized = (array,index,capitalizedWordsArray) => {
    if (index >= array.length) return;
    capitalizedWordsArray.push(array[index].text.toUpperCase())
    capitalized(array,index +1, capitalizedWordsArray)
}
 
//Problem 3: Recursion 
// example 12: collect Strings 
 
// Write a function called collectStrings which accepts an object and returns  
// an array of all the values in the object that have a typeof string 
 
// collectStrings(obj)  ["foo", "bar", "baz"]) 
 
//recursion with helper 
 
function collectStrings(obj) {
    let stringArray = []
    collectingStringArray(obj, stringArray)
    return stringArray
  }
  
  const collectingStringArray = (obj, stringArray) => {
    for (key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        collectingStringArray(obj[key], stringArray)
      }
      else if (typeof obj[key] === "string") {
        stringArray.push(obj[key])
      }
    }
  }
  
 /* Using the bubble sort, please sort each profile 
 by ascending order for the following properties:  
- age 
- rating 
If you want to know how to retrieve a value from a map, 
*/
function sortedByAge (arr){
    // setting up the buuble sort formula
    for(let i= arr.length - 1; i > 0; i--){
      for(let j = 0; j < i; j++){
        console.log(data[j]['age'].get('age'))
        // getting into the object and using the .get() method to retrieve the value from a map
          if(data[j]['age'].get('age') > data[j + 1]['age'].get('age')){
            // setting up the switch mechanic by first saving the first item to a variable then setting the lower item to the take the place of the higher one
              let temp = data[j];
              data[j] = data[j+1];
              data[j+1] = temp;
          }
      }
   }
    return arr;
  }

  const bubbleSortByAge = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        console.log(data[j]['favoriteMovie'][0]['rating'])
        if (data[j]['favoriteMovie'][0]['rating'] > data[j + 1]['favoriteMovie'][0]['rating']) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    return data;
  }