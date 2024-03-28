console.log(document.getElementById('welcome'));


console.log(document.getElementById('click'));

const click = document.getElementById('click')

//Variables and data types and type of

click.onclick = function () {

    let name = document.getElementById('welcome').innerText = 'lokesh'
    console.log(name)
    console.log(typeof name);
    console.log(typeof 22);
    console.log(typeof true);
    alert(`Helow ${name}`)

}

//Functions

function square(number) {
    console.log(number)
    return number * number;
}
const result = square(10);
console.log(result);

//Arrow function
//default values in parameter

const defaultValues = (x, y, z = 30) => {
    console.log(x + " " + y + " " + z);
}
defaultValues(10, 20);

//for single line we can concise like this
const greetings = name => `Helow ${name}`;
console.log(greetings('lokesh'))

//factory function
//FUNCTION THAT IT RETURNS NEW OBJECT INSTEAD WITHOUT OUT NEW KEYWORD

let person = {
    name: "david",
    age: 24,
    interest: ['foot ball', 'cricket'],
    adress: {
        place: "chennai",
        pincode: 600709
    },
    grettings: function (name) {
        let msg = `Hi my name is ${this.name} `; // this refers to current object {david}
        console.log(msg);
    }
};
person.grettings('jhon')

function createPerson(name) {
    return {
        name: name,
        age: 24,
        interest: ['foot ball', 'cricket'],
        adress: {
            place: "chennai",
            pincode: 600709
        },
        grettings: function () {
            let msg = `Hi my name is ${this.name} `; // this refers to current object {david}
            console.log(msg);
        }
    }
}
createPerson('jhon').grettings(); // create new object
createPerson('ROCK').grettings(); // create new object

//creating multiple person by arrow function

const createPersonUsingArrowFunction = (name, age) => {
    let person = {}
    person.name = name;
    person.age = age;
    person.greets = function () {
        console.log(`His name is ${this.name}`);
    }
    return person;
};

let person1 = createPersonUsingArrowFunction("person1", 20);
let person2 = createPersonUsingArrowFunction("person2", 30);

console.log(`His age is ${person1.age}`);
console.log(createPersonUsingArrowFunction("dhoni", 40).name);

//arrays

let ages = [22, 33, 12];
let filteredAge = [];
ages.forEach(age => {
    if (age > 18) {
        filteredAge.push(age);
        console.log(age)
    }
})

console.log(filteredAge)


//closure   
//it binds the out function reference to inner function even outer executed

function outerFunction() {
    let outerVariable = 'outerFunction';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunc = outerFunction();

innerFunc();


//promise
//promise is a new javascrip object that produce asyn operation 

// Create a Promise
const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject("Random number is too small");
        }
    }, 1000);
});

// Consuming the Promise
myPromise.then((success) => {
    console.log("Promise resolved with result:", success);
}).catch((error) => {
    console.error("Promise rejected with error:", error);
});

const booking = new Promise((resolve, reject) => {

    let booked = true;
    if (booked) {
        resolve(`Booked successfully ${booked}`)
    } else {
        reject("Booking cancel")
    }
});


//get the promise
booking.then((success) => {
    console.log("Ticked", success);
}).catch((error) => {
    console.log("Ticked clossed", error);
})

//A callback is a function that is passed as an argument to another function, and is called after the main function 
//has finished its execution. The main function is called with a callback function as its argument, 
//and when the main function is finished, it calls the callback function to provide a result. 
//Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner



function mainFunction(callbackFunction) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callbackFunction("Operation complete");
    }, 3000);
  }
   
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
  }

  mainFunction(callbackFunction);
   
//loop arrays

var numbers = [1, 2, 3, 4, 5];
 
// Define the main function
function mainArrayFunction(callbackArrayFunction) {
  console.log("Performing array operation...");
  // Use Array.forEach to loop through the array of numbers
   numbers.forEach(callbackArrayFunction);
//   numbers.map(callbackArrayFunction);
}
 
// Define the callback function
function callbackArrayFunction(number) {
  console.log("Result: " + number);
}
 
// Call the main function with the callback function
mainArrayFunction(callbackFunction);


//Memory management 

//primitives - stack
//non primitive - heap but references stored in stack

const employee = {                     //values stored in heap but reference stored in stack (hash of the values pointing to stack reference)
    name: 'Rajesh',
    age: 30,
  };

  console.log(employee.name)
   
  const newname="Ram"

  console.log(newname)
   
  function getname(name) {      
  console.log(name)                    //values stored in heap but reference stored in stack (hash of the values pointing to stack reference)
      return name;
  }

  getname('dhoni')

   
  const newEmployee = employee;       //reference stored in stack but pointing to the same object in heap

  newEmployee.name="lokesh"
  console.log(employee.name)          // same object applies to all other different references


//shallow copy
//When a reference variable is copied into a new reference variable using the assignment operator, 
// a shallow copy of the referenced object is created

 let student = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("student=> ", student);
let newStudent = student; // Shallow copy
console.log("New student=> ", newStudent);

console.log("---------After modification----------");
newStudent.ename = "Beck";
console.log("student=> ", student);
console.log("New student=> ", newStudent);


//deep copy
//take copy of all the members of the old object, allocates a separate memory location for the new object, 
//and then assigns the copied members to the new object
//Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods

let manager = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
let newManager = JSON.parse(JSON.stringify(manager));
console.log("manager=> ", manager);
console.log("New manager=> ", newManager);
console.log("---------After modification---------");
newManager.ename = "Beck";
newManager.salary = 70000;
console.log("manager=> ", manager);
console.log("New manager=> ", newManager);

//rest operetot(...input)
//The rest parameter is an improved way to handle function parameters, 
//allowing us to more easily handle various inputs as parameters in a function. 

function addByLoop(...input) {
    console.log(input)
    let sum = [];
    for(let i of input) {
        sum.push(i);
    }
    return sum;
}
console.log(addByLoop(1,2,3))

// rest with function and other arguments
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); 
    console.log(c); 
    console.log(c[0]); 
    console.log(c.length); 
    console.log(c.indexOf('Lionel')); 
}
fun('ronaldo', 'mappi', 'Lionel', 'Messi', 'Barcelona');


//spread operator  (it is shallow copy..)
//The JavaScript spread operator (...) allows us to quickly copy all or 
//part of an existing array or object into another array or object.

const one = [1, 2, 3];

const two = [4, 5, 6]

const combine =[...one, ...two];
console.log(combine);

//we can also use with object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)


//shallow copy
const myName = { firstName: "Tobi", lastName: "Sofela" };
const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };

console.log(bio);


//call back hell

//   let flights = {
//     name  : ['kingfisher', 'spicejet', 'indigo'],
//     venue : ['chennai', 'mumbai', 'pune']
//   }


//   let flightBooking = (flightName, callFlight) => {
//     console.log('Flight booked succesfully')
//     setTimeout(() => {
//         console.log(`Your flight is ${flights.name[flightName]}`);
//         callFlight()
//     }, 2000)


//   }

//   let flight = () => {
//     setTimeout(() => {
//         console.log('Flight has started')
//         setTimeout(() => {
//             console.log('You will reach your destination in few min')  
//             setTimeout(() => {
//                 console.log('Passengers we arrived ')
//                 setTimeout(() => {
//                     console.log("Thank you for choosing us")
//                 }, 0)
//             }, 3000)
//         },2000)
//     }, 0)
//   }

//   flightBooking(0, flight);


//promise to overcome callback hell

// let flights = {
//     name  : ['kingfisher', 'spicejet', 'indigo'],
//     venue : ['chennai', 'mumbai', 'pune']
//   }

// let isAirPortOpen = true
// let flightBooking = (time, work) => {

//     return new Promise((resolve, reject) => {

//         if (isAirPortOpen) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         } else {
//             reject('Booking closed')
//         }
//     })
// }

// flightBooking(4000, () => console.log('Flight booked successfully'))
// .then(() => {
//     return flightBooking(2000, () => {
//         console.log(`Your flight is ${flights.name[1]}`);
//     })
// })
// .then(() => {
//     return flightBooking(2000, () => {
//         console.log('You will reach your destination in few min')
//     })
// })
// .then(() => {
//     return flightBooking(3000, () => {
//         console.log('Passengers we arrived ')
//     })
// })
// .then(() => {
//     return flightBooking(0, () => {
//         console.log("Thank you for choosing us")
//     })
// })
// .catch(() => {
//     setTimeout(() => {
//         console.log('Sorry We are about to die')
//     }, 2000)
    
// });



let flights = {
    name: ['kingfisher', 'spicejet', 'indigo'],
    venue: ['chennai', 'mumbai', 'pune']
}

let isAirPortOpen = true;

let flightBooking = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isAirPortOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject('Booking closed');
        }
    });
};

async function bookFlight() {
    try {
        await flightBooking(4000, () => console.log('Flight booked successfully'));

        await flightBooking(2000, () => {
            console.log(`Your flight is ${flights.name[1]}`);
        });

        await flightBooking(2000, () => {
            console.log('You will reach your destination in few min');
        });

        await flightBooking(3000, () => {
            console.log('Passengers we arrived');
        });

        await flightBooking(0, () => {
            console.log("Thank you for choosing us");
        });
    } catch (error) {
        setTimeout(() => {
            console.log('Sorry We are about to die');
        }, 2000);
    }
}

// bookFlight()

//Event looping in javascript

//The event loop in JavaScript allows it to behave asynchronously and carry out non-blocking I/O operations 
//even though it's a single-threaded language.

//The event loop is a critical component of JavaScript's runtime environment that allows JavaScript 
//to handle asynchronous operations efficiently. 
//It's a mechanism that manages the execution of multiple tasks in a single-threaded environment

//JavaScript is inherently single-threaded, meaning it can only execute one task at a time on the main thread. 
//This can pose a problem when dealing with tasks that take time to complete, such as network requests, file I/O operations, or timeouts.
//To handle such asynchronous operations without blocking the main thread, JavaScript uses an event-driven model along with the event loop.


//what is event loop - We use the event loop whenever we deal with asynchronous operations in JavaScript,
//such as network requests, file I/O, or timer events.
//how it works
//call stack   - tracking of function call, when call it keep adding frames in call stack, when returns frames removed from call stack
//event queue  - This queue holds tasks that are ready to be executed.task may be click, keypresses any event,  asynchronous operations etc
//event loop    -The event loop continuously checks two things: 
//the call stack and the task queue. If the call stack is empty and there are tasks in the queue, 
//the event loop moves tasks from the queue to the call stack for executiontracking.


function square(s) {
  return s * s;
}

function cube(x) {
  return x * square(x);
}

console.log(cube(3));     //1.console 2.cube 3.square 4.cube 5.console  this is call stack

//here no possibility of keeping something into parallel. But there is something called "WEB APIs" in the browser environment


//some ex : dom, ajax(networkinh), setTimeout()

console.log("Start fetching weather data");


//classes and inheritance
//when a clas extends other it shoul call super() before using this and also used to call methods of super class

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super()
      this.name=name;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  d.speak(); // Mitzie barks.

  //acces super class method

  class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Lion extends Cat {
    speak() {
        super.speak()
        console.log(`${this.name} roars.`);
    }
  }
  
  const l = new Lion("Fuzzy");
  l.speak();


  //Math operators

  Math.round(2.2) // 2
  Math.ceil(2.2) // far
  Math.floor(3.6) //neareast
  Math.trunc(5.5) // 5
  Math.sign(-4); //posi, naga, null

  //Event Bubbling and Event Capturing in JavaScript 

  //What is event 

  //  events in javascript are like functions what ever the active that we made on browser by clicking, keypressing etc 
  //are called event.
  //Javascript creates an event object whenever an event occurs. This object has properties and methods, and provides details about the event.


  //what is event handlers
  //event handlers are nothing but function has event object as parameter.
  //You can set a function that will be executed whenever the event occurs with event handlers function in JavaScript.

  //Event Flow in the DOM
  //1.capturing 2.target 3.bubbling

  //1.capturing - whenevr click occurs at any target element before reach its final destination it traverse from its parent to the target(beggin to target)
  //Event capturing can't happen until the third argument of addEventListener is set to the Boolean value of true 
  //2.target element - to which i add event to handle are the targeted element
  //3. bubbling phase -the phase where the event bubbles up from the target element all the way to the global window object.(target to document object)
  //. By default, all events you add with addEventListener are in the bubble phase.

      const parentbubbling = document.querySelector("div");
      const childbubbling = document.querySelector(".child");

    //   parentbubbling.addEventListener("click", function () {
    //     console.log("clicked parent");
    //   });                                                   //child invoked first then the parent div callled bubbling

    //   childbubbling.addEventListener("click", function () {
    //     console.log("clicked child");
    //   });

      const parentcapturing = document.querySelector("div");
      const childcapturing = document.querySelector(".child");

    //   parentcapturing.addEventListener("click", function () {
    //     console.log("clicked parent");
    //   }, true);                  //by passing thrid arg as true into event handler the parent invoked first then the child button callled capturing

    //   childcapturing.addEventListener("click", function () {
    //     console.log("clicked child");
    //   });

    //Event stopPropagation - to cover only the target element

    //event.stopPropagation()



    //Event deligation - to deligate work to its child

    const li = document.querySelectorAll("li");

    // li.forEach((list)=> {
    //     list.addEventListener('click', function() {
    //         console.log(typeof list.textContent);
    //         if (list.textContent === 'Orange') {
    //             alert('Yes clicked orange')
    //         } else {
    //             alert('Yes clicked others')
    //         }
    //     })
    // })

    const ul = document.querySelector("ul");

    ul.addEventListener("click", function (event) {
       if(event.target.tagName = 'li') {
          if (event.target.textContent === 'Banana') {
          alert('Yes clicked Banana')
          } else {
            alert('Yes clicked others')
          }
       }

  })



  //Function chaining

  //grouping of function in single line using dot 
  // By "return this" statement, in the functions such as sayHello() and sayAge() are returned and made function chaining possible

const Person = {
  name: "",

  setName: function(name) {
    this.name = name;
    return this; // Return 'this' to enable chaining
  },

  sayHello: function() {
    console.log("Hello, my name is " + this.name);
    return this; // Return 'this' to enable chaining
  },

  sayAge: function(age) {
    console.log("I am " + age + " years old");
    return this; // Return 'this' to enable chaining
  }
};

Person.setName("Alice").sayHello().sayAge(30);

//// Example of function chaining
const Mobile = {

  model: "",
  setModel: function(model) {
    this.model=model;
    return this;
  },

  sayName: function() {
    console.log('my mobile model is ' + this.model)
  }
}

Mobile.setModel(2023).sayName();


//another example
var cal = function() {
    this.i=0;
    this.add=function(i) {
      this.i += i;
      return this;
    };

    this.sub=function(i) {
      this.i -= i;
      return this;
    };

    this.print = function(){
      document.write(this.i);
    };
}

var add = new cal();
add.add(55).sub(45).print();



//bind binding one object property into other 

// let nameObj = { 
//   name: "Tony"
// } 

// let PrintName = { 
//   name: "steve", 
//   sayHi: function () { 

//       // Here "this" points to nameObj 
//       console.log(this.name);  
//   } 
// } 

// let sayHi = PrintName.sayHi.bind(nameObj); 
// sayHi();



//bind method by using Object.prototype.MyBind

// let nameObj = { 
//   name: "Tony"
// } 

// let PrintName = { 
//   name: "steve", 
//   sayHi: function () { 
//       console.log(this.name); 
//   } 
// } 

// Object.prototype.MyBind = function (bindObj) { 

//   // Here "this" will be sayHi function 
//   bindObj.myMethod = this; 
//   console.log("bindObj ->",bindObj); 
//   return function () { 
//       bindObj.myMethod(); 
//   } 
// } 
// let HiFun = PrintName.sayHi.MyBind(nameObj); 
// HiFun();


//we can also pass external arguments while calling MyBind method


// let nameObj = { 
//   name: "Tony"
// } 

// let PrintName = { 
//   name: "steve", 
//   sayHi: function (age) { 
//       console.log(this.name + " age is " + age); 
//   } 
// } 

// Object.prototype.MyBind = function (bindObj, ...args) { 
//   bindObj.myMethod = this; 
//   return function () { 
//       bindObj.myMethod(...args); 
//   } 
// } 
// let HiFun = PrintName.sayHi.MyBind(nameObj, 42); 
// HiFun();


//call method

// the call method given by javascript doesn’t return a method

// let nameObj = { 
//   name: "Tony"
// } 

// let PrintName = { 
//   name: "steve", 
//   sayHi: function (age) { 
//       console.log(this.name + " age is " + age); 
//   } 
// } 

// Object.prototype.MyCall = function (bindObj, ...args) { 
//   bindObj.myMethod = this; 

//   bindObj.myMethod(...args); 

// } 
// PrintName.sayHi.MyCall(nameObj, 42);


//apply method
//here in apply method we only need to pass an array as a parameter. Rest is the same as call 

// let nameObj = { 
//   name: "Tony"
// } 

// let PrintName = { 
//   name: "steve", 
//   sayHi: function (age, place) { 
//       console.log(this.name + " age is " + age + " place " +place ); 
//   } 
// } 

// Object.prototype.MyApply = function (bindObj, args) { 
//   bindObj.myMethod = this; 

//   bindObj.myMethod(...args); 

// } 
// PrintName.sayHi.MyApply(nameObj, [42, "chennai"]);

//Object.freeze
//we can't change its property of the object when it is Object.freeze  



const objectperson = Object.freeze({name: "notchanged"}); 
objectperson.name = "changing";  
console.log(objectperson.name)

//const 
//we cant reassign the varibles but we an change the property of the object when it is const



const constperson = { 
  constperson: "Geeksforgeeks"
}; 
        
// No TypeError 
constperson.name = "changed"; 
console.log(constperson.name);




// By value (primitives)  

//it holds different memory location in stack is called call by value
let a = 5;
let b;
b = a;
a = 3;
console.log(a);
console.log(b);

// By reference (all objects (including functions))
//different references pointing to the same object called call by reference
let c = { greeting: 'Welcome' };
let e;
e = c;
 
// Mutating(changing) the value of c
c.greeting = 'Welcome to geeksforgeeks';
console.log(c);
console.log(e);

//eval()
//The eval() function in JavaScript is used to evaluate the expression. 
//It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.

let aa = 10;
let bb = 20;
console.log(eval("aa * bb"));



//hoisting
//1.var - for var we can initialize first then declare it 
//2.let & const - it wont work for let and const
x = 59;              
console.log(x);  
var x;
console.log("number : ",x)

//JavaScript Initializations are Not Hoisted
var cc;
console.log("not hoisted :", cc)
cc=11;

//prototype
//JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
//JavaScript engine adds a prototype property inside a function, Prototype property is basically 
//an object (also known as Prototype object), where we can attach methods and properties in a prototype object

  
 // function constructor 
 function Personcreate(name, job, yearOfBirth){   
  this.name= name; 
  this.job= job; 
  this.yearOfBirth= yearOfBirth; 
} 

//addind property
Personcreate.prototype.nationality = "india";

//adding methods
Personcreate.prototype.calculateAge= function(){  
  console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Personcreate.prototype)
  
// creating Object Personcreate
let Person1= new Personcreate('Jenni', 'clerk', 1986);  
console.log(Person1) 
let Person2= new Personcreate('Madhu', 'Developer', 1997); 
console.log(Person2) 
let Person3= new Personcreate('sara', 'Developer', 1997); 
console.log('I am '+Person3.nationality) 

Person1.calculateAge(); 
Person2.calculateAge(); 


// generator function

//A generator function is a special type of function in JavaScript that allows pausing and resuming its execution during runtime
// generator functions can be paused and resumed multiple times, making them particularly useful 
//for dealing with asynchronous operations, handling large datasets, and writing custom iterators.


//
// function* generatorFunction() {
//   yield value1;                         //yield function is used to pause the function and it produce value
//   yield value2;                         //will obtain(return) itrator object.it has two method return() and next()
// }


//next() 
//method used to resume the paused function it returns two properties value and done
//value contains the value produced by the yield
//done has true or flase(still running)

//example
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = simpleGenerator();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }


//return()
//The return() method allows us to force a generator to complete before it reaches the end. 
//It can take an optional argument that will be returned as the final value of the generator.

//example
function* generatorWithReturn() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator1 = generatorWithReturn();
console.log(iterator1.next()); // Output: { value: 1, done: false }
console.log(iterator1.return("Finished!")); // Output: { value: "Finished!", done: true }
console.log(iterator1.next()); // Output: { value: undefined, done: true }


function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const count = counter();
console.log(count.next()); // Output: { value: 1, done: false }
console.log(count.next()); // Output: { value: 2, done: false }
console.log(count.next()); // Output: { value: 3, done: false }



//decorators
//Decorators are often used to add additional functionality to objects, such as logging or security checks, without changing the underlying code.
// This makes them a powerful tool for extending the functionality of objects without the need to make significant changes to the original code.
// In JavaScript, decorators are functions that can modify classes, methods, properties, or even parameters. 


// A simple decorator
function log(target, key, descriptor) {
  console.log(`Logging ${key} function`);
  return descriptor;
}

class Example {
  greet() {
    console.log("Hello, world!");
  }
}

const example = new Example();
log(Example.prototype, 'greet', Object.getOwnPropertyDescriptor(Example.prototype, 'greet'));
example.greet();


//functional composition or higher-order functions (read about it)

//higher order function
// similar to call back give func as parameter and process it then return the function is HOF








  



















