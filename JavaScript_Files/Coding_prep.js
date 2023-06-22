/*1. Create a class Animal. include properties: type, color, no_of_feet
  add a method inside the class cry(). Child class: bird , change the
  method cry(). Child class: amphibian, change the method cry().*/
  class Animal{
    constructor(type, color, feet){
        this.type=type;
        this.color=color;
        this.feet=feet;
    }
    cry(){
        console.log("inside the parent class Animal");
    }
  }
  const dog = new Animal("terrestria","Black",4);
  dog.cry();
 
//2. Create an array of numbers. Display the even & odd numbers.
// Initializing numbers array
var numbers = [10, 23, 12, 21,9,4,2,7,13];
  
// Declaring empty Even array
var even = [];
var odd = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       { even.push(numbers[i]);}
        else{odd.push(numbers[i]);}
}
  
// Printing output
console.log(`Even numbers in an array are: ${even}`);
console.log(`odd numbers in an array are: ${odd}`); 

//3. Create an array of strings. Display the array.

const cars = ["Saab", "Volvo", "BMW"];


//4. Create a function to display the factorial of a number.

function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    else{
        return n* factorial(n-1);
    }
}

console.log(factorial(10));


//5. Write a fucntion to reverse a string.
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));


 /*6. create a 2D square matrix(eg: 3*3 , 4*4) and print this output:

    1000   00 01 02 03

    0100   10 11 12 13

    0010   20 21 22 23

    0001   30 31 32 33*/
 let Array = [];
let row = 4;
let col=4;
let h=0
for (var i = 0; i < row; i++) {
	Array[i]=[];
	for (var j = 0; j < col; j++) {
		Array[i][j] = h++;
	}
}
console.log(Array);