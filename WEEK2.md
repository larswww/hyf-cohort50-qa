### Alex P

- Show us simple examples of principles:

  1. KISS (Keep It Simple, Stupid)
  2. DRY (Don't Repeat Yourself)
  3. YAGNI (You Aren't Gonna Need It)

  - YAGNI, last week.
```javascript

// Approach A: Basic functionality
class TodoList {
  constructor() {
    this.todos = [];
  }
  addTodo(text) {
    this.todos.push({ text, completed: false });
  }
  markAsCompleted(index) {
    this.todos[index].completed = true;
  }
}
// Approach B: "Future-proofed" functionality
class TodoList {
  constructor() {
    this.todos = [];
    this.categories = [];
    this.users = [];
  }
  addTodo(text, category, assignedTo, dueDate, priority) {
    this.todos.push({
      text,
      category,
      assignedTo,
      dueDate,
      priority,
      completed: false,
    });
  }
  markAsCompleted(index) {
    this.todos[index].completed = true;
  }
  addCategory(name) {
    this.categories.push(name);
  }
  addUser(name) {
    this.users.push(name);
  }
}

```


### Lidiia
- Is it possible to set the name of a local variable inside a function the same as it is already assigned to a global variable? If I want to change the value of this variable outside the function - which variable will be overwritten?

### Ruba Hasan
- If there is a variable with the same name in the global scope and the private scope of a function, how can you access the variable in the global scope from within the function?

### Liya
1. In which cases is it more effective to use the VSCode debugger instead of the browser debugger and vice versa?
2. How can you determine where is the best place to put breakpoints?
- Figure out where the earliest possible place where your problem starts could be
- Top of function
- Before conditionals
- Where variables or data changes, before next function call.
- create conditional breakpoints https://code.visualstudio.com/Docs/editor/debugging#_advanced-breakpoint-topics
3. How do you recommend to track bugs related to variable scope?
- This is where you use watch.
- Console log can be nice here, at different scopes.
4. What to do if it is tricky bug/pitfall?
- Write tests
5. Sometimes UPPER_SNAKE_CASE is used for constants. What benefits does using UPPER_SNAKE_CASE provide for constants, besides better readability?
- Convention, "enum", "hardcoded"
6. Is the IIFE function still in use?
- legacy code, namespace pollution, libraries that run on import.
7. How to use optional rest parameters? (edited)
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
````

```javascript
function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}!`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// Output: "Hello Alice, Bob, Charlie!"
```

- Browser vs Server side code.
- Browser especially for things related to the DOM, network problems and looking at their responses (network tab)
- Performance profiling and issues
- React Dev Tools

### Vlada B

- Hello! I'm trying to understand the difference in how "this" behaves in regular functions versus arrow functions in JavaScript.
  From what I understand, regular functions change the meaning of "this" depending on how they're called, while arrow functions keep the meaning of "this" from where they are written.
  In this example:

  ```javascript
  function regularFunction() {
    console.log(this);
  }

  const arrowFunction = () => {
    console.log(this);
  };

  const obj = {
    method1: regularFunction,
    method2: arrowFunction,
  };

  obj.method1(); // logs 'obj'
  obj.method2(); // logs the global object Window
  ```

  According to the example, my questions are:

  1. Why does this behave differently in method1 (regular function) and method2 (arrow function)?
  2. Can you explain the concept of lexical binding in arrow functions and how it impacts this compared to regular functions?
  3. In which situations is it better to use regular functions and in which ones is it better to use arrow functions?

- In regular functions, this is bound based on how the function is called. Same function called in different places, can have different this values. "_dynamic this_"
- Arrow functions do not have their own this. They inherit it from its parent scope. **The surrounding code** - "_preserved this_"
- with callbacks use arrow functions.

### Fady

- Actually, I would share Liya's question about debugging. How can we determine the right place for the breakpoints? Can you please give a simple example for the debugging process?
- Also, trial and error! :)

### Esen Karataş

- Hi, my question is: How can you debug asynchronous code in JavaScript, like promises or async/await? What makes debugging asynchronous code more challenging than regular code?
- It doesn't run in order anymore :)

  ```javascript
  console.log("Before fetch"); // breakpoint
  fetch("https://api.example.com/data")
    .then((response) => {
      console.log("Fetch completed"); // breakpoint
      return response.json();
    })
    .then((data) => {
      console.log("Data processed:", data); // breakpoint
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log("After fetch call"); // breakpoint
  ```

      ```javascript

  async function fetchData() {
  try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
  } catch (error) {
  console.error('Error:', error);
  }
  }

  ```

  ```

### Ali Abbas

- What are some good tips for using try/catch in async functions? How do I know where to put them?

### Abdul kader

- I would like to ask if you can explain in practical terms the correct way we have to think about problem-solving.

- "the correct way"..
- Understand the problem
- Break it down
- Plan!
- Pseudocode
- Code parts (individual functions)
- Tests! Inputs and outputs.

### Dalia Saeed

- When we copy from array to array, how do we solve the problem that the first matrix is not affected by changes in the second matrix?

```javascript
// Shallow copy example
let originalMatrix = [
  [1, 2],
  [3, 4],
];
let shallowCopy = [...originalMatrix];

shallowCopy[0][0] = 99;

console.log(originalMatrix); // [[99, 2], [3, 4]]
console.log(shallowCopy); // [[99, 2], [3, 4]]
```

```javascript
// Deep copy using JSON is lossy
let originalMatrix = [
  [1, 2],
  [3, 4],
];
let deepCopy = JSON.parse(JSON.stringify(originalMatrix));

deepCopy[0][0] = 99;

console.log(originalMatrix); // [[1, 2], [3, 4]]
console.log(deepCopy); // [[99, 2], [3, 4]]
```

- https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
- https://lodash.com/docs#cloneDeep
