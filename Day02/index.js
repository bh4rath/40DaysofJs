console.log("Day 02");

//Variables: Variables are used to save data in JavaScript

// - `var` : Function-scoped, can be redeclared 
// - `let` : Block-scoped, can be reassigned
// - `const` : Block-scoped, cannot be reassigned

const address = "Kadambathur";

console.log(address);


let age;
age = 12;

let name, salary, ages;

/*

- ** Primitive Data Types**
      - `String` - Text values ("Hello")
      - `Number` - Numeric values ("21","3.14")
      - `Boolean` - True/False ("True", "False")
      - `Undefined` - A variable declared but not assigned (let x)
      - `Null` - Represents "nothing" (let y = null)
      - `BigInt` - Large numbers (BigInt (1234567890))
      - `Symbol` - Unique identifiers (Symbol ("id"))

- ** Non-Primitive Data Types**
      - `Object` - Collection of key-value pairs
      - `Array` - Ordered list of values
      - `Function` - Code that can be executed

  */


let student = {
    studentName: "Bharath",
    studentAge: 25,
    isEnrolled: true 
};

console.log("here is the student details:",student)

let arr = [1,2,3];

console.log(arr);