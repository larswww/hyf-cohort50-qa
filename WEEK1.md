# AGENDA
- Practice questions
- Prep exersice (your solutions)
- Questions



# Q&A Session Questions

## Alex P
1. Why do the proposed solutions not meet all the stated requirements?
   
```6:12:WEEK1.md
./practice-exercises/solutions/3-recipe-card.js
    // Declare a variable that holds an empty object literal (your meal recipe).
    const myRecipe = { //properties are not added to an empty object but are created during initialization
        title: 'Omelette',
        servings: 2,
        ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'],
    };
```

   
```13:24:WEEK1.md
./practice-exercises/solutions/4-reading-list.js
    //For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
    for (let bookIndex in listOfBooks) {
        const book = listOfBooks[bookIndex];
        //it should be something like this:
        //console.log(`${book.title} by ${book.author}`);
        if (book.alreadyRead) {
            console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
        } else {
            console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
        }
    }
```


2. Why is a `for...in` loop chosen for an array?
   
```27:35:WEEK1.md
./practice-exercises/solutions/4-reading-list.js
    for (let bookIndex in listOfBooks) {
        const book = listOfBooks[bookIndex];
        if (book.alreadyRead) {
            console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
        } else {
            console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
        }
    }
```


## Vlada B
1. What is the purpose of using strict mode ("use strict")? Can I avoid the strict mode or is it mandatory?
- Why do you want to avoid it?
- Behave more predicably
- Catch some common mistakes
- Easier to write "secure" JavaScript
- Strict mode catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.
- It makes it easier to write "secure" JavaScript by preventing certain actions.
- It changes previously accepted "bad syntax" into real errors.

### Examples of bad syntax and errors thrown:
1. Assigning to an undeclared variable:
   ```javascript
   "use strict";
   x = 3.14; // Throws an error because x is not declared
   ```

2. Deleting a variable, function, or argument:
   ```javascript
   "use strict";
   var x = 3.14;
   delete x; // Throws an error
   ```

3. Duplicating a parameter name:
   ```javascript
   "use strict";
   function sum(a, a, c) { // Throws an error
     return a + a + c;
   }
   ```

4. Writing to a read-only property:
   ```javascript
   "use strict";
   const obj = {};
   Object.defineProperty(obj, "x", { value: 0, writable: false });
   obj.x = 3.14; // Throws an error
   ```

5. Using `with` statement:
   ```javascript
   "use strict";
   with (Math) { // Throws an error
     x = cos(2);
   }
   ```

### Actions prevented by strict mode:
- Accidental creation of global variables.
- Assignment to non-writable properties.
- Assignment to get-only properties.
- Assignment to non-existing properties on an object (if the object is not extensible).
- Usage of `with` statement.
- Usage of `eval` and `arguments` as variable or function names.
- Deleting plain names (variables, functions, arguments).




## Liya
1. Why is `null == 0` false but `null >= 0` (or `null <= 0`) true?
- what is this operator? >= what does it do? 
2. Why does `0.2 + 0.6 == 0.8` return true, but `0.2 + 0.7 == 0.9` returns false? (Can you explain why some floating-point comparisons in JavaScript return true while others do not?)
- binary, need 
3. Where do you use the `switch` operator?
- Difference between if else and switch?

## Lidiia
1. In array destructuring, if I want to get only one variable with a value at index 3, for example, is there a simple method to do this?
- Why destructure in that case?
- Does an array fit your needs in this case?
- ```javascript const [,,, fourthElement] = myArray;```
2. If I should execute a provided function for only half of the array elements, which method should I use? Is the `forEach` method (maybe with some special syntax) valid for this case?
- This seems like a weird scenario. Why are you in this situation?
- Which half? And why? 

## Ruba Hasan
1. Which types of variables in JavaScript use the most memory, and how does memory usage vary based on the type of variable and the data stored in it?
- What is the purpose of this question?
- Don't worry about it. 
- Things in global scope use more.
2. How does the value of `this` change in JavaScript in different situations, like in global scope, object methods, and arrow functions?
- its undefined in global scope/strict mode
- in an object method, refers to the object
- in an arrow function, refers to the parent scope
### Examples of `this` in different scenarios:

1. Global Scope (non-strict mode):
   ```javascript
   console.log(this); // In a browser, this will log the Window object
   ```

2. Global Scope (strict mode):
   ```javascript
   "use strict";
   console.log(this); // undefined
   ```

3. Object Method:
   ```javascript
   const obj = {
     name: 'Object',
     getName: function() {
       return this.name;
     }
   };
   console.log(obj.getName()); // 'Object'
   ```

4. Arrow Function:
   ```javascript
   const obj = {
     name: 'Object',
     getName: () => {
       return this.name;
     }
   };
   console.log(obj.getName()); // undefined (arrow functions do not have their own `this`)
   ```

5. Event Listener:
   ```javascript
   const button = document.createElement('button');
   button.textContent = 'Click me';
   button.addEventListener('click', function() {
     console.log(this); // the button element
   });
   document.body.appendChild(button);
   ```

6. Constructor Function:
   ```javascript
   function Person(name) {
     this.name = name;
   }
   const person = new Person('John');
   console.log(person.name); // 'John'
   ```

7. Call and Apply:
   ```javascript
   function greet() {
     console.log(this.name);
   }
   const person = { name: 'Alice' };
   greet.call(person); // 'Alice'
   greet.apply(person); // 'Alice'
   ```

8. Bind:
   ```javascript
   function greet() {
     console.log(this.name);
   }
   const person = { name: 'Bob' };
   const boundGreet = greet.bind(person);
   boundGreet(); // 'Bob'
   ```


## Esen Karataş
1. How can you stop an infinite loop in JavaScript, and what problems can happen if there is an infinite loop?
- If you ship an infinite loop to production.... 
- break, return, throw an error
- ctrl+c

## Fady
1. Should functions always return something? Should we always use the `return` keyword with functions?
   ```javascript
   function add(c) {
     c + d;
   }
   console.log(add(['']));
   ```
   Here the output is undefined, but with `return` it gives the right number.
- "Functions always return something" - is this true?

2. When an exercise says that a function should take an array in its parameter or should be a string, what does that mean?
- what is a parameter? argument? 

## Ali Abbas
1. What is the benefit of declaring `const len` in the following loop instead of just using `months.length` directly?
   ```javascript
   const months = ['January', ...etc];
   let index = 0;
   const numberOfMonthsInAYear = months.length;
   while (index < numberOfMonthsInAYear) {
     console.log(months[index]);
     index += 1;
   }
   ```
- Why name it len? Is that a good name?
- Property lookups, but doesn't matter.   

2. What happens if I write a condition that doesn't become false? Will the browser crash if there's an infinite loop?
- Try it :) 

## Abdul kader
1. When should I use `const` and `let`?
- Why is it good to not be able to reassign a variable?
2. When there is a loop running without stop, how can I stop it immediately?

## Dalia Saeed
1. How does the `for...in` loop work?
```javascript
const array = [1, 2, 3];
console.log(typeof array); // what is the result?
for (let something in array) {
  console.log(something); // Outputs: 'a', 'b', but not 'c'
}

const object = {
  a: 1,
  b: 2
};
console.log(typeof object); // what is the result?
for (let something in object) {
  console.log(something); // Outputs: 'a', 'b', but not 'c'
}
// let or const?
```

```javascript
const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
});

for (let key in obj) {
  console.log(key); // Outputs: 'a', 'b', but not 'c'
}

console.log(Object.keys(obj)); // Outputs: ['a', 'b']