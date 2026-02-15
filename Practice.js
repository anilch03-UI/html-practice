console.log("Hello World!");
console.log("This is my first JavaScript code.");
console.log("I am learning how to use JavaScript in HTML.");
console.log("JavaScript is a powerful programming language.");
console.log("I can use it to create interactive web pages.");
console.log("I am excited to learn more about JavaScript!");

console.log("Hello World");
console.log("we are arthimetical operators");

let a = 100;
let b = 20;

let c = a + b;
console.log("Addition of two numbers");
console.log(c);

let d = a - b;
console.log("Subtraction of two numbers");
console.log(d);

let e = a * b;
console.log("Multiplication of two numbers");
console.log(e);

let f = a / b;
console.log("Division of two numbers");
console.log(f);

console.log("Hello World");
console.log("we are arthimetical operators");

const btn = document.getElementById("submitBtn");
const inp = document.getElementById("nameInput");

function addNumbers(number1, number2) {
    let sum = number1+number2;
    console.log("The sum of the two numbers is:", sum);
}
//calling the function
addNumbers(10, 20);
addNumbers(20, 30);
addNumbers(30, 40);
addNumbers(40, 50);
addNumbers(50, 60);
addNumbers(60, 70);
addNumbers(70, 80);
addNumbers(80, 90);
addNumbers(90, 100);
addNumbers(100, 110);
addNumbers(110, 120);
addNumbers(120, 130);
addNumbers(130, 140);
addNumbers(140, 150);

function subtractNumbers(number1, number2) {
    let substraction = number1-number2;
    console.log("The substraction of the two numbers is:", substraction);
}
//calling the function
subtractNumbers(10, 20);
subtractNumbers(20, 30);
subtractNumbers(30, 40);
subtractNumbers(40, 50);
subtractNumbers(50, 60);
subtractNumbers(60, 70);
subtractNumbers(70, 80);
subtractNumbers(80, 90);
subtractNumbers(90, 100);
subtractNumbers(100, 110);
subtractNumbers(110, 120);
subtractNumbers(120, 130);
subtractNumbers(130, 140);
subtractNumbers(140, 150);

function multiplication(number1, number2) {
    let Product = number1*number2;
    console.log("The product of the two numbers is:", Product);
}
//calling the function
multiplication(10, 20);
multiplication(20, 30);
multiplication(30, 40);
multiplication(40, 50);
multiplication(50, 60);
multiplication(60, 70);
multiplication(70, 80);
multiplication(80, 90);
multiplication(90, 100);
multiplication(100, 110);
multiplication(110, 120);
multiplication(120, 130);
multiplication(130, 140);
multiplication(140, 150);

function division(number1, number2) {
    let division = (number1/number2);
    console.log("The division of the two numbers is:", division);
}
//calling the function
division(10, 20);
division(20, 30);
division(30, 40);
division(40, 50);
division(50, 60);
division(60, 70);
division(70, 80);
division(80, 90);
division(90, 100);
division(100, 110);
division(110, 120);
division(120, 130);
division(130, 140);
division(140, 150);

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

let students = ["mahesh", "suresh", "ramesh", "Prasad"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

 
let marks = [10, 20, 30, 40, 50];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let classStudents = ["mahesh", "suresh", "ramesh", "suresh", "Prasad", "suresh"];
 
console.log(classStudents.length);// array declaration
 
for(let i = 0; i < classStudents.length; i++){
    console.log(classStudents[i]);

}

let letters = ["a", "b", "c", "d", "e","a"]
console.log(letters.length);

let class1Students = ["mahesh", "suresh", "ramesh", "suresh", "Prasad", "suresh", "suresh", "mahesh"]; 
let Count = 0;
console.log(class1Students.length);// array declaration
 
for(let i = 0; i < class1Students.length; i++)
  if(class1Students[i] === "suresh"){
   Count++;
  }
  console.log(Count);

  let fruits = ["apple", "banana", "orange", "grape", "mango"];
  console.log(fruits.length);
  console.log(fruits[0]);
  fruits.push("kiwi");
  console.log(fruits);
  fruits.pop();
  console.log(fruits);
  console.log(fruits.includes("apple"));
  fruits.shift();
 console.log(fruits);
 fruits.unshift("strawberry");
 console.log(fruits);
 fruits.indexOf("banana");
 console.log(fruits.indexOf("banana"));
 console.log(fruits.join(", "));

let name = 'sireesha';
console.log(name.toUpperCase());
console.log(name.length);
console.log(name.includes("java"));
console.log(name.split("e"));
console.log(name.toLowerCase());
console.log(name.slice(0, 4));
console.log(name.replace('esha','Anil'));
let name1 = 'Anil Kumar';
console.log(name1.trim());

let car = { brand: 'Ertiga', model: 2025, price: 1000000 };
console.log(car);
console.log(car.brand);
console.log(car.model); 
car.colour = 'white';
console.log(car);
car.price = 1200000;
console.log(car);

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

let scooty ={ brand: 'Activa', model: 2025, price: 85000 };
console.log(scooty);
console.log(scooty.brand);
console.log(scooty.model);
scooty.colour = 'black';
console.log(scooty);
scooty.price = 90000;
console.log(scooty);

let students1 = ["mahesh", "suresh", "ramesh", "Prasad"];
console.log(students1);
console.log(students1[0]);
console.log(students1[1]);
console.log(students1[2]);
console.log(students1[3]);
console.log(students1.length);

let vowels = 'aeiou';
console.log(vowels.length);
console.log(vowels.toUpperCase());
console.log(vowels.includes("java")); 
