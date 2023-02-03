// Day 1 Assignment

// Problem 1 In 3-4 sentences, please explain what Big O notation? 

// Big O notation measures how fast a function performs by how many operations are used as the data increases. It helps measure a problem's complexity based on time and space. In short, Big O notation helps developers find the best situation for a problem. 

/* Problem 2: For each of the time complexities shown below: 
 - Name the complexity 
 - Rank from 1-5 (1 being the best, 5 being the worst) 
 - Describe in 1-2 sentences of the complexity 
 - Provide a code example of how the complexity works
 */


/* 1. O(1) Constant Rank 1 
Constant time complexity means that no matter how large the data set is, the time to compute the operation will remain the same. 
*/

// Example 

function addTwoNumber(num1, num2){
    return num1 + num2 
}
addTwoNumber(15,7)

/* 2. O(LogN) Logarithmic Rank 2 
Logarithmic time complexity is when the amount of operation grows slowly as the data size increase. 
*/

//Example

bingoNumber = ["B31","N42","G2","O6","I23","G56","G59","O17","B49","I32","N75","O19","N14","I61","B20","O58","B75","G39","O16","I48","G72","N40","B31"]

  for(let i=1; i < bingoNumber.length; i*=2 ){
    console.log(bingoNumber[i])   
 }

 /*3. O(n) Linear Rank 3 
 Linear time complexity is when the number of operations grows as the data set increases. 
*/

//Example 
tropicalFruits =["Mango", "Pineapple", "DragonFruit", "Passion Fruit", "Guava"]
for(let i=0; i < tropicalFruits.length; i++){
    console.log(tropicalFruits[i])
}

  /*4. O(n^2) Quadratic Rank 4
Quadratic Time complexity is when the number of operations grows proportional to the square of the input size.
*/

//Example 
for(let i = 0; i < array1.length; i++){
    for(j = 0; j < array2.lenght; j++){
        console.log(i)
    }
}


/*
5. O(n!) Factorial time complexity Rank 5
Factorial time complexity is the worst time complexity because the operation's growth is based on a sequence. 
*/

// Example


// Name 3 reasons why we care about Big O and we care about code performance. 
  
 /* 
 Big O notation helps us to write efficient code that will scale effectively as our application grows. 
It also helps to determine the optimal solution for algorithms. Optimal code can lead to a better experience for the user. 
*/

//What is the problem of using a time method such as performance.now() to measure how "fast" a 
//code runs on our machines.

//Performance. now( )is an ineffective way of testing how fast code runs because different machines have different processing speeds. The speed of one machine's computation differs from another, resulting in different times.

 /*Problem 5-6: Given the following piece of code: 
- Explain what the TOTAL time complexity is 
o For example, if a function had one linear and a nested for...loop, it would be: n + n^2 
- Explain what the CONSOLIDATED time complexity is 
o For example, if a function had one linear and a nested for...loop, it would condense to: n^2
*/

//  Answer problem 5  Total = 1 + 2n + n^2  Consolidated = n^2 

//  Answer problem 6 Total = 2 + O(n) + O(n^3) Consolidated = O(n^3)

 
// Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

// We ignore constants because we are looking at the trends of the algorithm complexity rather than every specific case. We are generally looking at the Overview of complexity. So We consolidate our time complexities to the complexity that would impact performance most.

// Problem 8: In 2-3 sentences, please explain what space complexity is and why we care. 

// Space Complexity is how much space/memory an algorithm to include its input will need to execute. Space Complexity can help us to determine the best algorithm to maximize space. 

 /*Problem 9: Given the following data TYPES, label what the space complexity is for each one:
- Boolean  Constant
- Undefined Costant
- Null Constant 
- Numbers Constant
- String Linear
- Array Linear 
- Object Linear 
*/

// Problem 10: Give two reasons when you should use a array and when you should use a object.
// We should use an array when needing fast access to elements. Another best case for an array is when we need data to be ordered. 
// On the flip side, an object should be used when there is no need for ordering the elements, and fast access to an element is not a factor. 

// Problem 11: Given the following object methods, label what the TIME complexity is for each one:


const obj = {
    name: 'tony'
    }
    
    //inserting
    obj.age = 44; // Constant

    //removing
    delete obj.age; //Constant

    //searching 1
    obj.hasOwnProperty['name']  // Constant

    //searching 2
    for (const prop in obj) {  // Linear 
    console.log(obj[prop])
    }
    //accessing
    obj.age //44  // Constant

    //retrieving keys
    Object.keys(obj) // Linear 

    //retrieving values
    Object.values(obj)  //Linear 

// Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1
arr2.push(8) // Constant

//inserting 2
arr2.unshift(0) // Linear

//removing 1
arr2.pop()  // Constant

//removing 2
arr2.shift() // Linear

//searching 1
const findNumber = arr2.find(num => num === 2) // Linear

//searching 2
for (let i = 0; i < arr2.length; i++) { //  Linear
if (arr2[i] === 2) {
return arr2[i]
}
}

//retrieving
const getNumber = arr2[3] // Constant

//method 1
const double = arr2.map(num => num * 2) // Linear

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) // Linear

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) // Linear 

//method 4
for (const num of nums) { // Linear 
console.log(num * 2) 
}

//method 5
const convertToString = arr2.join(' ') // Linear 

// Problem 13 1-10: For each one of these code blocks, please identify the time & Space complexity and explanation of why it is.
//P.S. I do not fully understand measuring space complexity correctly; please forgive my answers. 

//Answer 1 This problem would be O(N) Linear time because it loops through an array to find the number matching the user input. This is Constant Space because it returns a number that takes up Constant Space. 

//Answer 2 This is also an O(N) Linear time; although there is a constant, the Linear would take precedence making the whole algorithm O(N). This is a Linear Space because the array it returns is getting larger with each loop. 

//Answer 3 This is O(1) Constant time because we just access specific array elements. We only access elements on an array and do not change anything in return its Constant Space complexity. 

//Answer 4 This is an O(N) Linear time; although there is a constant, the Linear would take precedence, making the whole algorithm O(N). This is also Constant Space because it returns a number that takes up Constant Space.

//Answer 5 This is O(1) Constant because of it pure mathematical computations. This is Constant Space complexity because numbers take up Constant Space. 

//Answer 6 This is O(N) Linear because it looping through the array. It's Constant Space because it is returning the same values. 
    
//Answer 7 This is O(n^2)Quadratic because of it nested loops. This is a Linear Space because the array it returns is getting larger with each loop. 

//Answer 8 This is O(n^2)Quadratic because of it nested loops. This is also a Linear Space because it returns an array.


//Answer 9  This is O(n^2)Quadratic because of it nested loops. Array. includes is loops through the array to check if the array includes the element. This is a Linear Space because the array it returns is getting larger with each loop.


//Answer 10 I think that this is O(N) Linear because both filter and reduce are looping through the array; however, they are not nested within each other, so that the total would be O(2N), but we would need to drop the constant making it O(N). Linear Space because the result of the array is changed. 
