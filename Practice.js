//To print "Hello World!" in the console
console.log("Hello World!");

console.log("This is my first JavaScript code.");
console.log("I am learning how to use JavaScript in HTML.");
console.log("JavaScript is a powerful programming language.");
console.log("I can use it to create interactive web pages.");
console.log("I am excited to learn more about JavaScript!");


//Arthimetical operations
console.log("Arthimetical operations");

let a = 100;
let b = 20;

let c = a + b;
console.log("Addition of two numbers", c);

let d = a - b;
console.log("Subtraction of two numbers", d);

let e = a * b;
console.log("Multiplication of two numbers", e);

let f = a / b;
console.log("Division of two numbers", f);


                      //Functions
const btn = document.getElementById("submitBtn");
const inp = document.getElementById("nameInput");

//Addition function
function addNumbers(number1, number2)
 {
    let sum = number1+number2;
    console.log("The sum of the two numbers is:", sum);
}
//calling the function
addNumbers(10, 20);
addNumbers(20, 30);
addNumbers(30, 40);

//Subtraction function
function subtractNumbers(number1, number2)
 {
    let substraction = number1-number2;
    console.log("The substraction of the two numbers is:", substraction);
}
//calling the function
subtractNumbers(10, 20);
subtractNumbers(20, 30);
subtractNumbers(30, 40);

//Multiplication function
function multiplication(number1, number2)
 {
    let Product = number1*number2;
    console.log("The product of the two numbers is:", Product);
}
//calling the function
multiplication(10, 20);
multiplication(20, 30);
multiplication(30, 40);

//Division function
function division(number1, number2) {
    let division = (number1/number2);
    console.log("The division of the two numbers is:", division);
}
//calling the function
division(10, 20);
division(20, 30);
division(30, 40);

                          //Arrays
let c1students = ["mahesh", "suresh", "ramesh", "suresh"];
console.log(c1students);
console.log(c1students[0]);
console.log(c1students[1]);
console.log(c1students[2]);
console.log(c1students[3]);
 
let c1marks = [10, 20, 30, 40, 50];
console.log(c1marks);
console.log(c1marks[0]);
console.log(c1marks[1]);
console.log(c1marks[2]);
console.log(c1marks[3]);
console.log(c1marks[4]);

btn.addEventListener("click", () => {
  console.log("clicked");
});
inp.addEventListener("input", (event) => {
    console.log("User is typing:", inp.value);
});

let classStudents = ["mahesh", "suresh", "ramesh", "suresh", "Prasad", "suresh"];
 
console.log(classStudents.length);
 // for loop to iterate through the array
for(let i = 0; i < classStudents.length; i++)
    {
    console.log(classStudents[i]);
}
// to count the number of times "suresh" appears in the array
let class1Students = ["mahesh", "suresh", "ramesh", "suresh", "Prasad", "suresh", "suresh", "mahesh"]; 
let Count = 0;
console.log(class1Students.length);
for(let i = 0; i < class1Students.length; i++)
  if(class1Students[i] === "suresh"){
   Count++;
  }
  console.log(Count);
//methods of array
  let fruits = ["apple", "banana", "orange", "grape", "mango"];

  // to get the length of the array
  console.log(fruits.length);

 // to access the first element of the array
  console.log(fruits[0]);

 // to add a new element to the end of the array
   console.log(fruits.push("kiwi"));

  // to remove the last element of the array
    console.log(fruits.pop());

  // to check if an element is present in the array
  console.log(fruits.includes("apple"));

  // to remove the first element of the array
    console.log(fruits.shift());

  // to add a new element to the beginning of the array
    console.log(fruits.unshift("strawberry"));

 // to get the index of an element in the array
  console.log(fruits.indexOf("banana"));

  // to join all elements of the array into a string
  console.log(fruits.join(", "));

                           //Strings 
let name = 'sireesha';
// to convert the string to uppercase
console.log(name.toUpperCase());
console.log(name.length);

// to check if the string includes a certain substring
console.log(name.includes("java"));

// to split the string into an array of substrings based on a delimiter
console.log(name.split("e"));

// to convert the string to lowercase
console.log(name.toLowerCase());

// to extract a portion of the string based on specified indices
console.log(name.slice(0, 4));

// to replace a specified substring with another substring
console.log(name.replace('esha','Anil'));

// to remove whitespace from both ends of the string
let name1 = '  Anil Kumar  ';
console.log(name1.trim());


                         //Objects
let car = { brand: 'Ertiga', model: 2025, price: 1000000 };
console.log(car);

// to access the properties of the object
console.log(car.brand);
console.log(car.model); 

// to add a new property to the object
car.colour = "white";
console.log(car);

// to update the value of an existing property
car.price = 1200000;
console.log(car);

// Another object for practice
let vegetables = ["potato", "tomato", "onion", "carrot", "cabbage"];
console.log(vegetables);
console.log(vegetables[0]);
vegetables.push('brinjal');
console.log(vegetables);
vegetables.pop();
console.log(vegetables);
console.log(vegetables.includes("tomato"));
vegetables.shift();
console.log(vegetables);
console.log(vegetables.indexOf("carrot"));
console.log(vegetables.join(", "));
console.log(vegetables.length);

let scooty ={ brand: 'Activa', model: 2025, price: 85000 };
console.log(scooty);
console.log(scooty.brand);
console.log(scooty.model);
scooty.colour = 'black';
console.log(scooty);
scooty.price = 90000;
console.log(scooty);

// Another string for practice
let name2 = 'harisha';
console.log(name2.toUpperCase());
console.log(name2.length);
console.log(name2.includes("java"));
console.log(name2.split('a'));
console.log(name2.toLowerCase());
console.log(name2.slice(0,3));
console.log(name2.replace('har','Anil'));
let name3 = 'Anil Kumar';
console.log(name3.trim());

                    //Conditional statements
let Marks = 75;
let grade;
if (Marks >= 90) grade = "A";
else if (Marks >= 70) grade = "B";
console.log(grade);

let number = 1;

if (number % 2 === 0) {
    console.log(number + " is Even")
} else {
    console.log(number + " is Odd");
}

let votingAge = 18;
if (votingAge >= 18) {
    console.log("You are eligible to vote.");
}else if (votingAge < 18) {
    console.log("You are not eligible to vote.");
}

let x = 10;
let y = 25;
let z = 15;

if (x >= y && x >= z) {
    console.log(x + " is the largest number");
} else if (y >= x && y >= z) {
    console.log(y + " is the largest number");
} else {
    console.log(z + " is the largest number");
}

let arr = [10, 20, 30];
for (let num of arr) {
console.log(num)};

for (let i = 1; i <= 100; i++) {
    console.log(i)};

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

//Using split(), reverse(), and join()
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// using a for loop
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("ANIL"));


// Count vowels in a string
let str = prompt("Enter a string:");
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}
console.log("Number of vowels:", count);

// Largest number in an array
let arr1 = [10, 25, 5, 40, 15];

let largest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }
}
console.log("Largest number:", largest);




