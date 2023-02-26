
/*Problem #1:  
 
Please construct the two classes with the appropriate properties for the Node and DLL, then for the DLL, 
please write the methods for:  
*/
 
- Shift() 
- Unshift() 
- Push() 
- Pop() 
- Get() 
- Set() 
- Insert() 
- Remove() 
 
class Node{ 
    constructor(val){ 
        this.value = val
        this.next = null
        this.prev = null
    } 
} 
 
class DoublyLinkedList{ 
    constructor(){ 
        this.head = null
        this.tail = null
        this.length = 0 
    } 

    shift(){
        //setting up edge cases to check if the linked list is empty and returns undefined.
        if(!this.length) return

        //saving the node to be removed in a variable
        let removedNode = this.head

        // setting the head and tail property to null if there is only one node is in the linked list
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } 

        //setting the new head to be the removed node next value and disconnecting the removed node from the linked list
        else {
            this.head = removedNode.next
            this.head.prev = null
            removedNode.next = null
        }

        // decreasing the length and returning the removed node
        this.length--
        return removedNode;
    }

    unshift(val) {
        //creating the new node 
        let newNode = new Node(val)

        //setting the head and tail to the new node if there is no node in the linked list
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } 

        // setting up the connections to link the new node to the linked list
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        // increasing the length and returning the linked list
        this.length++
        return this; 
    }

    push(val) {
        //creating the new node 
        let newNode = new Node(val)

        //setting the head and tail to the new node if there is no node in the linked list
        if (!this.length) {
            this.head = newNode 
            this.tail = newNode
        } 
        
        // setting up the connections to link the new node to the linked list
        else {
            this.tail.next = newNode 
            newNode.prev = this.tail
            this.tail = newNode
        }

        // increasing the length and returning the linked list
        this.length++
        return this; 
    }

    pop() {
        //setting up edge cases to check if the linked list is empty and returns undefined.
        if (!this.length) return; 

        //saving the node to be removed in a variable
        let poppedNode = this.tail

        // setting the head and tail property to null if there is only one node is in the linked list
        if (this.length === 1) {
           this.head = null
           this.tail = null
        } 


        //setting the new tail to be the removed node pervious value and disconnecting the removed node from the linked list
        else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--
        return poppedNode;
    }

    get(index) {
        // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
        if (index < 0 || index >= this.length) return; 
        
        
        //setting up a counter and current variables to simulate the indexes for the linked list, 
        let counter; 
        let current; 

        //checking the nodes closer to the head, if the index is less than the length divided by two
        if (index <= this.length/2) {
            counter = 0; 
            current = this.head 

            while (counter !== index) {
                current = current.next
                counter++
            }
        } 
        //  checking the from the tail backward if the index is greater than the length divided by two
        else {
            counter = this.length - 1; 
            current = this.tail; 

            while (counter !== index) {
                current = current.prev
                counter--
            }
        }

        return current;
    }

    set(index, val) {
        //using the get function to retrieve the node
        let foundNode = this.get(index)

        //if the node is found, update the value
        if (foundNode) {
            foundNode.val = val
            return true; 
        }

        // else return false because that node wasn't found in the linked list
        return false; 
    }


    insert(index, val) {
        // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
        if (index < 0 || index > this.length) return; 
        
        
        // Using the push method to add the new node to the end of the linked list if the index is equal to the linked list length
        if (index === this.length) return this.push(val)

        // Using the unshift method to add the new node to the beginning of the linked list if the index is equal to 0
        if (index === 0) return this.unshift(val);

        //creating the new node if the condition above hasn't been met
        let newNode = new Node(val)

        //setting up variables to capture the values of the nodes that come before and after where we are inserting the new node.
        let prevNode = this.get(index - 1)
        let afterNode = prevNode.next; 

        //connecting the previous node to the new node
        prevNode.next = newNode; 
        newNode.prev = prevNode; 

        //making the connection between the next node and the new node
        newNode.next = afterNode; 
        afterNode.prev = newNode; 

        this.length++
        return this;
    }


    remove(index) {
         // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
        if (index < 0 || index > this.length) return ;

        //Using the shift method to remove the head node if the index is equal to 0
        if (index === 0) return this.shift()
        
        //Using the pop method to remove the tail node if the index is equal to the length minus 1
        if (index === this.length - 1) return this.pop()


        //saving the removed node to a variable
        let removedNode = this.get(index);

        //setting up variables to capture the values of the nodes that come before and after where we are removing the node.
        let prevNode = removedNode.prev; 
        let afterNode = removedNode.next; 

        
        prevNode.next = afterNode; 
        afterNode.prev = prevNode;
        
        //disconnecting the previous and next node from the removed node
        removedNode.next = null; 
        removedNode.prev = null; 
        this.length--
        return removedNode;
    }


    removedOccurences(x){
        let counter = 0
        let current = this.head
        
        while(current){ 
          console.log(current.value)
          console.log(counter)
          if(current.value === x){
            current = current.next
            console.log('inside of if statement',counter)
            this.remove(counter) 
          }
          else{
             current = current.next
            counter++
          }  
        }
        console.log(this.printList())
      }


      firstPair(target) {
        let counterR = 0
        let counterL = this.length - 1
        let current1 = this.head
        let current2 = this.tail
        let targetNum = []
    
        while (counterR < counterL) {
          let sum = current1.value + current2.value
          console.log(sum)
          if (sum === target) {
            targetNum.push(current1.value, current2.value)
            console.log(targetNum)
            return targetNum
          }
          else if (sum > target) {
            current2 = current2.prev
            console.log(" i am current value 2", current2.value)
            counterL--
          }
          else {
            current1 = current1.next
            console.log(" i am current value 1", current1.value)
            counterR++
          }
    
        }
        return false
      }
    
    

} 
 
 
/*Problem 2: Given a doubly linked list and a value x. Create a method called removeOccurences(this, x) that 
removes all occurrences of x from the doubly linked list. The removeOccurences method accepts a DLL as the irst argument and x as the value to remove. 
*/

// removedOccurences(x){
//     let counter = 0
//     let current = this.head
    
//     while(current){ 
//       console.log(current.value)
//       console.log(counter)
//       if(current.value === x){
//         current = current.next
//         console.log('inside of if statement',counter)
//         this.remove(counter) 
//       }
//       else{
//          current = current.next
//         counter++
//       }  
//     }
//     return this
//   }


/*Problem 3: Given a SORTED doubly linked list of positive, DISTINCT elements, create a function called 
firstPair(this, target) that finds the FIRST pair of numbers that equal to the sum called target. Return the sum 
in a array. The firstPair method accepts a DLL as the first argument and target of the value that the pair must 
sum up to.
*/

// firstPair(target) {
//     let counterR = 0
//     let counterL = this.length - 1
//     let current1 = this.head
//     let current2 = this.tail
//     let targetNum = []

//     while (counterR < counterL) {
//       let sum = current1.value + current2.value
//       console.log(sum)
//       if (sum === target) {
//         targetNum.push(current1.value, current2.value)
//         console.log(targetNum)
//         return targetNum
//       }
//       else if (sum > target) {
//         current2 = current2.prev
//         console.log(" i am current value 2", current2.value)
//         counterL--
//       }
//       else {
//         current1 = current1.next
//         console.log(" i am current value 1", current1.value)
//         counterR++
//       }

//     }
//     return false
//   }
