// 1
/**
 * - Is it possible to set the name of a local variable inside a function the same as it is already assigned to a global variable?
 * If I want to change the value of this variable outside the function - which variable will be overwritten?
 */

let count = 10;

function updateCount() {
  // Local variable with the same name as the global variable
  let count = 5;

  console.log("Inside function, local count:", count);

  // Modify the local variable
  count = count + 1;

  console.log("Inside function, after modification:", count);
}

console.log("Before function call, global count:", count);

updateCount();

console.log("After function call, global count:", count);

// Modify the global variable
count = count + 1;

console.log("After global modification:", count);

/**
 *  If there is a variable with the same name in the global scope and the private scope of a function,
 * how can you access the variable in the global scope from within the function?
 *
 * - why?
 *   - parameter
 *   - global variable
 */

// 2
// this

function regularFunction() {
  // how does it get its this value?
  console.log(this);
}

const arrowFunction = () => {
  // how does it get its this value?
  console.log(this);
};

const obj = {
  method1: regularFunction,
  method2: arrowFunction,
};

obj.method1(); // logs 'obj'
obj.method2(); // logs the global object Window

class Counter {
  constructor() {
    this.count = 0;
    this.intervalId = null;
  }

  start() {
    // Using an arrow function here ensures `this` refers to the Counter instance
    this.intervalId = setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

const counter = new Counter();
counter.start(); // This will log increasing numbers every second
// counter.stop(); // Uncomment this to stop the counter

