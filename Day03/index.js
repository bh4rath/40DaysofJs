console.log("Day 03");

//Operator - Symbols like + - * /
//Operands - x+y - Here x y are the operands
//Expression - 3 + 3

/*
Operators

Arithmetic
Assignment
Comparison
Relational
Logical
Bitwise
Conditional

Grouping

typeOf
instanceOf
*/


//Arithmetic Operators

let a= 10;
let b = 20;

console.log(a+b); //30
console.log(a-b); //-10
console.log(b-a); //10
console.log(a * b) //200

let count = 5;
console.log(count++)

console.log(count)

console.log(++count)
console.log(count)


// Assignment Operators

let x = 10;

x += 5; //x= x+5 (15)


//Comparison Operators

console.log(4 == 5)
console.log(0 == false) // JS converts false to 0 and the output is true
console.log(2 == '2') // true because js converts string to number

// == is loosely equality

// === is the strict equality 

console.log(null === null)
console.log(undefined === undefined)

// NaN - not a number


let obj1 = {'name':'Bharath'}
let obj2 = {'name':'Bharath'}

console.log(obj1 === obj2) // false because the memory location is different even though they have same values

console.log(obj1 !== obj2)


// Logical Operators

console.log(!true)  //false

let a1 = null ?? 1;
console.log(a1);

let a2 = undefined ?? 1;
console.log(a2);

let a3 = 0 ?? "Bharath";
console.log(a3);

let a4 = false ?? "Bharath";
console.log(a4);

//Conditional (ternary) operator

// condition ? Val1 : Val2

let age = 60;

console.log(age >= 60 ? "Bharath" : "Tapas");


// Grouping

let p = 1;
let q = 2
let r = 3;

console.log(p + q + r)

console.log(p + (q*r))

console.log((p+q) * r)

//typeof

console.log(typeof "tapas");

console.log(typeof false);

let size = 100;
console.log(typeof size);

const numbers = [1,2,3];

console.log(typeof numbers); // In Javascript Array is also an object

console.log(typeof null);

//instanceof



//Day 3 Tasks

//Task 1 Odd or even?
let n1 = 9;
let result = (n1 % 2);
if(result == 0){
    console.log("the number "+n1 +" is an even number")
} else {
    console.log("the number "+n1 +" is an odd number")
}

//Task 2 Do you have a Driving License?

let driverAge = 18;
if(driverAge >= 18) {
    console.log("Congrats your eligible to take a driving license")
} else {
    console.log("Sorry your not eligible to take a driving license")
}


//Task 3 Calculate CTC with a Bonus

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
console.log(annualSalary);
let bonusAmount = (annualSalary/100) * 20;
console.log(bonusAmount);

let annualCTC = bonusAmount + annualSalary;
console.log("The CTC is " + annualCTC);

// Task 4 Write a program for the Traffic Light Simulation.

let color = "Green"
if(color === "Red"){
    console.log("Hey Please Stop")
} else if (color === "Green"){
    console.log("Hey Please Go-head")
}


// Task 5 Create an Electricity Bill Calculator

let units = 5;
let unitCostPerDay = 150;
let totalCostPerMonth = units * unitCostPerDay;
console.log("Electricity bill for the month is " +totalCostPerMonth);

let annualBill = totalCostPerMonth * 12;
console.log("annual bill without discount is " + annualBill)
let discountOnAnnualPayment = (annualBill/100) * 20;
console.log("Annual discount is " + discountOnAnnualPayment)

let annualChargeToBePayed = annualBill - discountOnAnnualPayment;
console.log("Annual Payment is " + annualChargeToBePayed)

//Task 6 Leap Year Checker

let year = 2024;
isLeapYear = year % 4 === 0 ? "Its a leap year" : "Its not a leap year";
console.log(isLeapYear);

//Task 7 Max of Three Numbers

let p1 = 22; q1 = 15; r1 = 56;

if(p1 > q1 ) {
    if(p1 > r1)
    {
        console.log(p1 +" is the max number")
    }
}else if(q1 > r1) {
    console.log(q1 +" is the max number")
} else{
    console.log(r1 +" is the max number")
} 

// Task 8

let counts = 5;

    

