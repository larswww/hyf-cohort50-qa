Chat gpt
- How did the practice exam go?
- Did you have to use chat gpt?
- Google?
- What if you couldn't pass this without chatGpt or google?
- Why is it good to try without chatgpt/google?
- Is there any of them we should do together?


- The 5 different ways all have their advantages and disadvantages. Which way did you prefer? Why?
- Which did you find easiest to understand?
- How much did you change in the `main` function of each of them? Why is that important?
- Why getters and setters?


### Lidiia

My question for the session: After study I got wat getter and setter are, but why and when should I use they is still a question for me. Some cases of usage will be very helpful for me.

```js
// what is the advantage of setter here?
// what about the getter?
// what is "absolute zero" ? https://en.wikipedia.org/wiki/Absolute_zero
// what is a "domain"?
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible");
    }
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.celsius = 30;
console.log(temp.fahrenheit); // 86
temp.fahrenheit = 68;
console.log(temp.celsius); // 20
```

- Sometimes you want to do things before you give a value.
- If you have to calculate the value before you give it.
- Encapsulation and access control.


### Alex P
Please give an example of the same code that can be written in OOP and functional style. Which approach is more preferable?
- Depends! :) 
- You can use both.
- Use what your team is using. 


#### OOP style
"Encapsulate the value and the methods that operate on it in a single object"


```js
class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    if (n === 0) throw new Error("Cannot divide by zero");
    this.value /= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator(10)
  .add(5)
  .multiply(2)
  .subtract(8)
  .divide(2)
  .getResult();

console.log(result); // 6
```
- You always use the whole calculator.
- Store state in the calculator object.
- Good for a calculator UI. I'm pretty certain ahead of time what the calculator should do and how its going to be used. We're not going to re-invent the calculator.

#### Functional style
"Pass the value through a series of independent functions to get the result"

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const calculate = pipe(
  (x) => add(x, 5),
  (x) => multiply(x, 2),
  (x) => subtract(x, 8),
  (x) => divide(x, 2)
);

// (value - 32) * 5) / 9;
const fahrenheitToCelcius = pipe(
  (x) => subtract(x, 32),
  (x) => multiply(x, 5),
  (x) => divide(x, 9)
)

const expected = 23
const result = fahrenheitToCelcius(82) 
expect(result).toBe(expected)

const result = calculate(10);
console.log(result); // 6
```
- the functions are composable, they can be combined to create new functions.
- Good if you want to combine these into various operations: const fahrenheitToCelcius = pipe...
- And many other things you come up with. The app is going to calculate lots of different things and i don't really know which.


### Vlada B

According to our prep-exercise #2 (ex2-classes.js), could you please explain the difference between a prototype and proto of these objects? Why do they have different comparison results?
- an instance has a __proto__ which points to the prototype of the constructor.
- so an instance of an object does not have a prototype, it has a __proto__.
```js
console.log(walletJack.__proto__ === Wallet.prototype); // true (we set __proto__ to Wallet.prototype when creating it with new. instanceof Wallet)
console.log(walletJack.__proto__ === walletJane.__proto__); // true (same constructor, same prototype chain)
console.log(walletJack.prototype === walletJane.prototype); // true (this is an object)
console.log(walletJack.prototype === Wallet.prototype); // false (does wallet jack have a prototype?)
console.log(walletJack.__proto__ === walletJane.prototype); // false (does wallet jane have a prototype?)
```
- the prototype is used to build the __proto__ of the object.

```js
const obj = {};
console.log(obj.prototype)
console.log(obj.__proto__)
// undefined
// Object {}

function func () {

}
console.log(func.prototype)
console.log(func.__proto__)
// Object {}
// function ()
```

### Fady

What is the difference between these two codes : in constructor function

```js
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.model} is driving`);
};
const car1 = new Car("Honda", "Civic");
```

And this In class :

```js
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log(`${this.brand} ${this.model} is driving`);
        }
}
const car2 = new Vehicle("Ford", "ka");
```
- They are the same.
- Class is more similar to other programming languages
- Syntactic sugar.

In term of prototype .. does that mean we should use prototype to add method in constructor function but in class not?
- You can but you don't have to, thats the point with the class syntax.
And as I understand that we have four ways to create objects :

- 1 Factory function object without new keyword
- 2- Constructor function instance of an object


- 3- Classes. inheritance
- 4- Prototype inherit properties and methods directly from other objects (Create a "parent" function, and then on the prototype, add methods, and then create "children" of that parent, which "inherits" those methods.)

What is the difference between instance and inheritance?
- Instance is an object created from a class.
- Inheritance is a mechanism to inherit properties and methods from a parent class.

So when you create a new Car, you have a new instance, and you've inherited the drive method.


### Abdul kader

1- Why The arrow function (func: () => { ... }) does not have its own this.
Therefore, even if we use this.parameter inside the func, it will not work, but to the top-level scope (usually undefined or window in the browser
and normal function (func: function () => { ... })have own this
- 
- What is this in arrow function? Where does it get it from?

```js
class Timer {
  let seconds = 100;
  constructor() {
    this.seconds = 0;
    this.intervalId = null;
  }

  start() {
    // Using an arrow function here
    this.intervalId = setInterval(function () {
      console.log(Timer.seconds)
      console.log(this)
      console.log(this.seconds)
      console.log(this.seconds++)
      this.seconds++;
      console.log(`Timer: ${this.seconds} seconds`);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    console.log(`Timer stopped at ${this.seconds} seconds`);
  }
}

const timer = new Timer();
timer.start();

// Stop the timer after 5 seconds
setTimeout(() => timer.stop(), 5000);
```

### Ruba Hasan

1.What is the difference between prototype-based inheritance and class-based inheritance in JavaScript?
- Classes is a nicer way of doing it.
2.Can static methods in classes be overridden? (edited)

```js
class Parent {
  static staticMethod() {
    return "Parent static method";
  }
}

class Child extends Parent {
  static staticMethod() {
    return "Child static method";
  }
}

console.log(Parent.staticMethod()); // "Parent static method"
console.log(Child.staticMethod());  // "Child static method"
```

### Liya

It is said that using the underscore _ is a common convention to show that a variable is private, but it doesn’t actually make the variable private, like in factory functions where true private fields don’t exist. So why use _ if it doesn’t offer real privacy, especially when we have better alternatives like closures or the # symbol in classes to make variables truly private?
- we didn't always have that class syntax.
- it's a known convention across languages.
- it was perhaps not always desired to use a closure.
- but rather you just want to tell a future colleague or someone using your library, don't touch _me.


```js
var DONT_CHANGE = 'xyz'
```

I would like to improve function resetDailyAllowance () in our pre-assigment and use JavaScript’s Date() object to track current time and when the last reset happened. So the idea is that it should automatically reset the daily withdrawals after 24 hours. We need provide checking the time difference when the user withdraws or transfers money and if 24 hours have passed, the daily withdrawals should be reseted. It looks tricky to calculate 24 hours from real date. Can we write it together?
(edited)
- sure
```js


// day of the day
  // if 3rd of sept !== 4th sept, reset. If day same, keep it. 
// where to put the logic?
  // put in withdraw/transfer functions
  // reset at midnight. 
  // store a last-reset?

// B: make a loop of all wallets
// if time === midnight, call resetAllowance on all

// C: Make something run only at midnight, call reset allowance?

// D: Save last current date, when you used it, if else check if variable is same, 

// E: Save

// F: add to withdrawl and transfer, if limit is more than 40,

```



### Esen Karataş

Hi, my question is : What happens to the value of this when a method is assigned to a variable and then called separately from its original object? How can this be fixed?
- lets find out?

```js
class Something {

  constructor ( ) {

    this.value = "Question?"
  }

  doing() {
    console.log('this is...', this)

  }

}

class OneMore extends Something {
  does () {
    console.log('this!!')
  }
}

const extended = new OneMore()
extended.doing()
extended.does()

```

### Dalia Saeed
Can we use the keyword (new) with classes?
- lets try


### Ali Abbas

In what situations might the default value of this lead to bugs in the code?
- when you are using this and it's not what you expect it to be, and you're not checking for that.
Why would we choose to use a class over a constructor function if both can be used to create object instances?
- it's a syntax question.

