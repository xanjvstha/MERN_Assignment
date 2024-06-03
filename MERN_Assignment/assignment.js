/* JavaScript Mini Project Assignment
Objective
The objective of this assignment is to test your understanding of JavaScript, including promises, closures, array and object manipulation, higher-order functions (map, find, reduce, and filter), classes, objects, callbacks, and async/await. Additionally, you'll be asked conceptual questions to assess your understanding of these topics.
Instructions
1.	Complete each task below using JavaScript.
2.	Write clean, readable, and well-documented code.
3.	Answer the conceptual questions in the comments.
4.	Submit your solution as a single JavaScript file through a GitHub repository link. */


//  Tasks


//  1. Promises
//  Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object should represent a user with properties id, name, and age.
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = [
                    { id: 1, name: 'Alice', age: 25 },
                    { id: 2, name: 'Bob', age: 30 },
                    { id: 3, name: 'Charlie', age: 35 }
                ];
                Math.random() > 0.2 ? resolve(data) : reject('Failed to fetch data');
            }, 2000);
        });
    }


//  2. Closures
//  Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.
    function createCounter() {
        let count = 0;
        return {
            increment: () => { count++; },
            getCount: () => { return count; }
        };
    }


//  3. Callbacks
//  Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.
    function processData(numbers, callback) {
        return numbers.map(callback);
    }

//  4. Async/Await
//  Rewrite the fetchData function from Question 1 using async and await.
    async function fetchDataAsync() {
        try {
            const data = await fetchData();
            return data;
        } catch (error) {
            console.error(error);
        }
    }


//  5. Array Manipulation: Map
//  Given an array of numbers, create a function that doubles each number using map.
    function doubleNumbers(numbers) {
        return numbers.map(num => num * 2);
    }


//  6. Array Manipulation: Filter
//  Given an array of numbers, create a function that filters out numbers less than 10 using filter.
    function filterNumbers(numbers) {
        return numbers.filter(num => num >= 10);
    }


//  7. Array Manipulation: Find
//  Given an array of numbers, create a function that finds the first number greater than 15 using find.
    function findNumber(numbers) {
        return numbers.find(num => num > 15);
    }


//  8. Array Manipulation: Reduce
    Given an array of numbers, create a function that sums all numbers using reduce.
    function sumNumbers(numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }


//  9. Object Manipulation
//  Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.
    function transformUsersToObj(users) {
        return users.reduce((obj, user) => {
            obj[user.id] = user;
            return obj;
        }, {});
    }


//  10. Classes and Objects
//  Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        describe() {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
    }


//  11. Inheritance
//  Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.

    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }

        study() {
            return `${this.name} is studying.`;
        }
    }


//  12. Error Handling with Promises
//  Modify the fetchData function to randomly reject the promise with an error message "Failed to fetch data". Handle this error using .catch when calling the function.

    fetchData().then(data => {
        console.log('Data fetched:', data);
    }).catch(error => {
        console.error(error);
    });


//  13. Error Handling with Async/Await
//  Modify the fetchData function with async/await to handle errors using try/catch blocks.
    (async function () {
        try {
            const data = await fetchData();
            console.log('Data fetched (async/await):', data);
        } catch (error) {
            console.error(error);
        }
    })();


//  14. Complex Array Manipulation
//  Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.
    function getUniqueHobbies(users) {
        return users.reduce((acc, user) => {
            user.hobbies.forEach(hobby => {
                if (!acc.includes(hobby)) {
                    acc.push(hobby);
                }
            });
            return acc;
        }, []);
    }


//      Conceptual Questions
// 1.	Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
        /* Promises are used for handling asynchronous operations. They provide a clearer and more readable way to manage asynchronous code than traditional callback functions.
        Advantages of promises over callbacks:
        Avoids "callback hell" by chaining `.then()` methods.
        Provides better error handling through `.catch()`.
        Improves code readability and maintainability. */


// 2.	What is a closure in JavaScript? Provide an example.
//      A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
        function outerFunction() {
            let outerVariable = 'I am from outer function';
            return function innerFunction() {
                console.log(outerVariable);
            };
        }
        const inner = outerFunction();
        inner();


// 3.	What is a callback function and why is it used in JavaScript?
//      A callback function is a function passed into another function as an argument and is executed after some operation has been completed.


// 4.	What are async/await in JavaScript and how do they improve asynchronous programming?
//      `async` and `await` are syntactic sugar built on promises that make asynchronous code look and behave more like synchronous code.
//      They improve readability and maintainability by allowing developers to write asynchronous code in a more straightforward manner.


// 5.	Write the difference between ES6 and JS.
        /* ES6 (ECMAScript 2015) is the 6th edition of the ECMAScript language specification, which is a significant up-date to the JavaScript language.
        avaScript is the language itself that implements the ECMAScript specification.
        ES6 introduced many new features and improvements to JavaScript, such as let/const, arrow functions, clas-ses, template literals, destructuring, and more. */


// 6.	What are some of the major features introduced in ES6?
        /* Major features introduced in ES6 include:
        1.	`let` and `const` for block-scoped variable declarations.
        2.	Arrow functions for concise function expressions.
        3.	Template literals for string interpolation.
        4.	Classes for object-oriented programming.
        5.	Destructuring assignment for extracting values from arrays or objects.
        6.	Default parameters for functions.
        7.	Rest and spread operators for working with arrays and objects.
        8.	Promises for handling asynchronous operations.
        9.	Modules for modular code organization. */
