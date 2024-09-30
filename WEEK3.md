# Q&A 3

### Esen Karataş  
**Today at 12:03 PM**  
Hi, my question is: Why is it recommended to write unit tests before the implementation?

#### Answer
1. It forces you to think about what you want to build, before you build it. Which makes you faster at building the right thing.
2. It gives you a nice way to run the code as you develop it. Because you get constant feedback.(also makes you faster)

---


### Vlada B  
**Today at 12:46 PM**  
Which approach would you recommend for us, as beginners, to start with — writing code first and testing after, or using Test-Driven Development?

---
#### Answer
I recommend that you try hard to think about how you could write a test first, and attempt that, and if you really can't, then code first. Eventually you will write more and more tests first, and this will greatly help you in improving your coding skills. 

Even a test that simply calls your function, is better than nothing. If your function throws an error, it will fail. 


### Fady  
**Today at 5:00 AM**  
Using jest testing .. should I export each function aside in a file which has many functions … and is using testing libraries like jest a part of the developer daily work or it is a major by itself?

#### Answer
Organise your code in a way that makes sense to you. If you are working in a team, you might want to have a convention. I.e. you all do it in the same way, so that your code is consistent.

It is common to have related functions in the same file. If these functions are used in the current file, and other files, it is common to have them in a separate file. The test files does not count in this regard. 

Testing your code is a large part of the job. You either do it manually, in production, or you write automated tests, such as unit tests, which you can do with jest, or other libraries.

Some large teams may have a dedicated QA engineer, or even team, that writes tests. But this is far from always the case.

Writing good tests, is about writing good, testable code, and ensuring that all your code works together as you add more functionality. Therefore, testing is very much part of any good developers daily work.

---

### Ali Abbas  
**Today at 2:43 PM**  
Why can’t we just return a value from a function instead of using a closure? What's the difference?

#### Answer
You can do both. 

*Returning a value*
- Simpler and straighforward
- Suitable for one-time computations
- Function completes and doesn't maintain any state.

I am doing simple computations and want to store/use the value elsewhere.

*Closure*
- Allows you to maintain state between function calls. 
- Encapsulate the data
- When you want to have several instances of the same thing that remembers different values.

I am doing computations where i need the value in the same place later, and i may continue changing it and want to continue from where i left off.

---

### Abdul kader  
**Today at 3:05 PM**  
What is the difference between map and forEach? I searched on this topic and found that we use forEach to modify the current array and we use map to modify a new array, but can't we use forEach in a new variable and thus map == forEach?

#### Answer
Sure, map == forEach true, but map === forEach false.

*Map* "Take each value in this array, run this function and let the return value of that function be the new value in a new array"
- I want a new array

*forEach* "Element in this array, do whatever I do in this function"
- I want to loop each element and run a function that has the element value as the argument

```js
const numbers = [1, 2, 3, 4];

// Using map
const doubledMap = numbers.map(num => num * 2);
console.log(doubledMap); // [2, 4, 6, 8]

// Using forEach
const doubledForEach = [];
numbers.forEach(num => doubledForEach.push(num * 2));
console.log(doubledForEach); // [2, 4, 6, 8]
```

---


### Ruba Hasan  
**Today at 1:20 PM**  
How can you determine when to use Unit Testing, Integration Testing, and End-to-End Testing in a software development project? Explain the advantages and disadvantages of each type of test, and how they contribute to ensuring the quality of the application at different stages.

---
#### Answer
- Unit testing helps you test individual functions/components, and is a great tool to help you test modular code.
- Integration testing helps you test how different parts of your app work together. Such as database, API, and frontend. These are more difficult because you involve a database, and may need to wipe/seed it before the tests. 
- End-to-end testing is when you test the entire app, from start to finish, as a user would. This is useful to ensure that the entire app works as expected and the user can do the key things. These may take longer to run, and can be challenging to maintain (ensuring you can change interface without breaking the tests).

All tests contribute to ensuring the features you already have, keep working as expected, as you add more features. And they make your other developers more productive, because they won't have to manually test everything to make sure stuff works. 

Overall, the disadvantage of testing is that it takes time to do, and if the tests aren't adding value, because you're testing the wrong things, or with the wrong type of tests, then it might be a waste of time.



### Liya  
**Today at 3:15 PM**  
1) How to balance coding, debugging, and testing to write high-quality code?  
```js
let message = () => {
  return 'Hello, HYF!';
} 
// or 
let message = () => 'Hello, HYF!';

2)	Which one is preferable to use: the full arrow function syntax or the simplified one? (edited)
```

#### Answer 1
1. Testing
2. Coding
Write perfect code, never debug!  

Tests helps you run individual parts of your code, and that can greatly help making your debugging more efficient also. 

#### Answer 2

Which do you prefer, and why? Do you understand the difference between them? Is there a difference? These are the types of questions you should ask yourself when you encounter this type of syntax difference. 


--- 

### Dalia Saeed
**Today at 3:40 PM**
Can you explain the differences between statement coverage, branch coverage, and path coverage in software testing?

#### Answer
- Statement; did your tests call every function?
- Branch; if x call function b if z call function a, does your test coverage run with both x and z, and therefore both a and b are called?
- Path; if you have loops, if statements, etc, you can have multiple paths. Does your test coverage run all the paths?

```js
function example(a, b) {
  if (a > 0) {           // Branch point
    if (b > 0) {         // Another branch point
      return a + b;
    } else {
      return a - b;
    }
  } else {
    return -a;
  }
}
```

### Alex P  
**Yesterday at 10:32 AM**  
How to optimize the performance of a large Jest test suite? What strategies should be implemented to reduce test execution time. (edited)

#### Answer
Remember that *Premature optimization is the root of all evil*
That the running of your tests takes too long, is a problem you get at a later stage in the development process. The more common problem is lack of testing, and writing code that is difficult to test, and therefore the testing slowing you down. 

With that said, general good practices to have tests running fast:
- Many unit tests as a base
- Fewer integreation in the middle
- and E2E tests covering critical paths.

Avoding exessive testing, especially if features are changing often, can be wise.

Specific strategies:
- design tests so that they aren't dependent on each other. (so you can run them in parallel, with --maxWorkers)
- mock things that are slow, like API calls, or use snapshots for UI. 
- use good setup/teardown and beforeAll/afterAll to avoid repeating things.
- make separations between unit, integration and end-to-end tests.

---

### Lidiia  
**Yesterday at 10:42 AM**  
When I test with jest, I create 2 files. The first one contains the function under test and the second one contains the test itself. The test file calls the function directly. But if the function calls any variables, arrays or objects inside the first file, they also need to be added when exporting. Why? Because the test file calls only the function.

#### Not really an answer
- Can you show me an example?
- Jest runs the code in its own environment, so its context might not be the same everytime but i'm not sure if that's what you're asking for.

---


