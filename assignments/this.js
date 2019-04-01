/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first is Global. This will bind the 'this' keyword to the window object.
* 2. The second is implicit. This will bind the 'this' keyword to the object calling the function. This is represented by whatever is to the left of the period. IE: me.sayName();.
        In this case, 'this' would be bound to the me object.
* 3. The third is the New method. This happens when using the 'new' keyword and a constructor function. This will bind 'this' to the new object being created.
* 4. The fourth is explicit. This is when you use .call, .apply, or .bind methods to chose what to pass as the 'this' keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function answerToLife() {
    console.log(`${this.answer} - This won't work since the window object does not have this variable.`)
}

answerToLife();

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'Sean',
    greeting: 'hello!',
    sayGreeting: function(){
        console.log(`${this.name} says ${this.greeting}`);
    }
};

myObj.sayGreeting();

// Principle 3

// code example for New Binding

function Person (attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
}

Person.prototype.sayGreeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const sean = new Person({
    name: 'Sean',
    age: 28
});

sean.sayGreeting();

// Principle 4

// code example for Explicit Binding

const joe = new Person({
    name: 'Joe',
    age: 34
});

console.log("The following is Sean calling sayGreeting, with joe being 'this'");
sean.sayGreeting.call(joe);