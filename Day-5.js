//Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
//please write the methods for:  
 
- Shift() 
- Unshift() 
- Push() 
- Pop() 
- Get() 
- Set() 
- Insert() 
- Remove() 
 

class Node {
    constructor(val) {
      //setting up the properties for the node of a linked list
      this.val = val
      this.next = null
    }
  }
  
  class SinglyLinkedList {
    //setting up the properties for the linked list
    constructor() {
      this.length = 0;
    }
  
    shift() {
      //setting up edge cases to check if the linked list is empty and returns undefined.
      if (!this.length) return
  
      //saving the node to be removed in a variable
      let removedNode = this.head
      //setting the head to be the removed node's next value and decreasing the length
      this.head = removedHead.next
      this.length--
  
      //setting the head and tail to null if after removing the node the length is equal to 0 
      if (this.length === 0) {
        this.head = null
        this.tail = null
      }
  
      // return the removednode
      return removedNode;
    }
  
    unshift(val) {
      //creating the new node 
      let newNode = new Node(val)
  
      //setting up edge cases to check if the linked list is empty. If the linked list is empty, set the head and tail to the newNode 
      if (!this.length) {
        this.head = newNode
        this.tail = newNode
        //  setting the next property of the new node to be the current head and set the head property to be the new node 
      } else {
        newNode.next = this.head
        this.head = newNode
      }
      //after the new node is added and the connections have been made, increase the length and return the linked list
  
      this.length++
  
      return this
    }
  
    push(val) {
      //creating the new node 
      let newNode = new Node(val)
  
      //setting the head and tail to the new node if the linked listed is empty
      if (!this.length) {
        this.head = newNode
        this.tail = newNode
  
        //connecting the old tail to the new node and making the new node the new tail. 
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }
      //after the new node is added and the connections have been made, increase the length and return the linked list
      this.length++
      return this
    }
  
    pop() {
      //setting up edge cases to check if the linked list is empty and returns undefined.
      if (!this.length) return

      let current = this.head
      let newTail = current

      while (current.next) {
        newTail = current;
        current = current.next
      }
  
      this.tail = newTail
      this.tail.next = null
      this.length--
  
      if (this.length === 0) {
        this.head = null
        this.tail = null
      }
  
      return current
    }
  
    get(index) {
      // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
      if (index < 0 || index >= this.length) return
  
      //setting up a counter and current variables to simulate the indexes for the linked list, 
      let counter = 0;
      let current = this.head
  
      // setting up a loop to check if the counter is equal to the index we are looking for if not, setting the current variable to the next value in the linked list
      while (counter !== index) {
        current = current.next
        counter++
      }
  
      return current
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
      return false
    }
  
    insert(index, val) {
      // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
      if (index < 0 || index > this.length) return
  
      // Using the push method to add the new node to the end of the linked list if the index is equal to the linked list length
      if (index === this.length) return this.push(val)
  
      // Using the unshift method to add the new node to the beginning of the linked list if the index is equal to 0
      if (index === 0) return this.unshift(val)
  
      //creating the new node if the condition above hasn't been met
      let newNode = new Node(val)
  
      //setting up variables to capture the values of the nodes that come before and after where we are inserting the new node.
      let prevNode = this.get(index - 1)
      let temp = prev.next;
  
      // setting up the connection between the previous node and the node that comes after. 
      prevNode.next = newNode
      newNode.next = temp
      this.length++
      return this
    }
  
    remove(index) {
      // setting up edge cases if the index is less than 0, then it doesn't exist if the index is greater than the length of the linked list, then it can't exist
      if (index < 0 || index >= this.length) return
  
      //Using the shift method to remove the head node if the index is equal to 0 
      if (index === 0) return this.shift()
  
      //Using the pop method to remove the tail node if the index is equal to the length minus 1 
      if (index === this.length - 1) return this.pop()
  
      //setting up variables to capture the values of the nodes that come before and after where we are removing the node.
      let prevNode = this.get(index - 1)
      let removed = prevNode.next
  
      prev.next = removed.next
      this.length--
      return removed
    }
  
    mostFrequent() {
      // setting up frequency counter 
      let freq = {};
  
      // setting up a variable to iterate through the linked list and update the frequency counter with the values
      let current = this.head
      while (current) {
        freq[current.val] = (freq[current.val] || 0) + 1
        current = current.next
      }
      
      // filter through the frequency values to find the highest
      let max = Math.max(...Object.values(freq))
      console.log(Object.keys(freq).find(key => freq[key] === max))
  
      // return the key with the highest frequency by finding the key equal to the max variable
      return Object.keys(freq).find(key => freq[key] === max)
    }
  }


//Problem #2:  
// Given a linked list, create a method called mostFrequent(this) that returns the node that occurs 

// mostFrequent() {
//     // setting up frequency counter 
//     let freq = {};

//     // setting up a variable to iterate through the linked list and update the frequency counter with the values
//     let current = this.head
//     while (current) {
//       freq[current.val] = (freq[current.val] || 0) + 1
//       current = current.next
//     }
    
//     // filter through the frequency values to find the highest
//     let max = Math.max(...Object.values(freq))
//     console.log(Object.keys(freq).find(key => freq[key] === max))

//     // return the key with the highest frequency by finding the key equal to the max variable
//     return Object.keys(freq).find(key => freq[key] === max)
//   }


