//1. Write a program to find duplicates in the array using a different method rather than loop and sort the array
//Loop
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
let isDuplicate = false;
   // Outer for loop
for (let i = 0; i < numbers.length; i++) {
    // Inner for loop
    for (let j = 0; j < numbers.length; j++) {
        // Skip self comparison
        if (i !== j) {
            // Check for duplicate
            if (numbers[i] === numbers[j]) {
                isDuplicate = true;
                // Terminate inner loop
                break;
            }
        }
        // Terminate outer loop
        if (isDuplicate) {
            break;
        }
    }
}
if (!isDuplicate) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.

//2. Write a program to take input from the user and display whether the number is zero, positive or negative.

 /*const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}*/

//3. To declare an object in javascript

const person = { 
    name: 'Jhunulata',
    gender:'Femal',
    age: 21
};
console.log(typeof person);

//4. To reverse an array

var color = ['Red','Black','Pink','Gray','Yellow'];
      var revarr = color.reverse();
      document.write(color);

//5. difference between let var and const(write code and explain)
//Var
    /* Variables declared with var can have a global or local scope. 
     Global scope is for variables declared outside functions, while local scope is 
     for variables declared inside functions.*/

     var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print() // 2500

//let
    /*let is Block Scoped. It should be used in situations where you want to
     declare a variable that should be restricted to the block in which it is restricted.*/ 

     function func() 
{
    let x = 10; 
 
    if(x === 10) 
    {
        let y = 20; 
 
        console.log(x); //Output 10
        console.log(y); //Output 20
    }
     
    console.log(x); // Output 10
   // console.log(y); // ’undefined'
}
 func();

 //const
      /*The const keyword follows the same rules as the let keyword. The only difference with const 
        is that const is used to define only constant values in JavaScript programs.*/
        
        const myVar = 1000;
 
       // myVar = 2.5;// Uncaught TypeError: Assignment to constant variable.
        


//6. sort the array
let num = [0, 9 , 2, 6, 1, 20, 4  ];
num.sort();
console.log(num);

//7. use of useEffect hook
    /*The useEffect Hook allows you to perform side effects in your components.
      Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      useEffect accepts two arguments. The second argument is optional.
      useEffect(<function>, <dependency>)*/


//8. write a code on closures and explain

/*Closures are functions that refer to independent (free) variables. In other words, the function 
defined in the closure ‘remembers’ the environment in which it was created.*/

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num1 = 1;
  function checkNumber() { 
    console.log(num1);
  }
  num1++;
  return checkNumber;
}

var number1 = numberGenerator();
number1(); // 2

/*->In the example above, the function numberGenerator creates a local “free” variable num (a number) and
 checkNumber (a function which prints num to the console).
  ->The function checkNumber doesn’t have any local variables of its own — however, it does have access to
   the variables within the outer function, numberGenerator, because of a closure.
  ->Therefore, it can use the variable num declared in numberGenerator to successfully log it to the console
   even after numberGenerator has returned.*/










