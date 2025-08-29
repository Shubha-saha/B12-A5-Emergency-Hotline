1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById-select by id and its returns single element.
     getElementsByClassName-select by className and its returns HTMLCollection.
     querySelector-select by css selector and its returns single element.
     querySelectorALL-select by css selector and its returns all matching elements(nodeList).
2. How do you create and insert a new element into the DOM?
Ans: createElement() method is used to create a new HTML element then use appendChild() method. This method appends a node as the last child of a specified parent node.
3. What is Event Bubbling and how does it work?
Ans: Event Bubbling- When an event happens on a child element, it bubbles up to its parent elements.
4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation- Instead of attaching event listeners to multiple child elements, you attach one listener to a parent and detect the target element inside the handler.

Why useful:-
  a. Saves memory
  b. Works for dynamically added elements
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:  preventDefault()- stop browser default action
      stopPropagation()- stop event bubbling