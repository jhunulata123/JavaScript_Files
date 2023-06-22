//Fibonacci number using for loop
number = 10;
let n1 = 0, n2 = 1, nextTerm, sum = 0;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    sum += n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log("Sum is: " + sum);

//Fibonacci number using recursion
function Fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {

        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}
//console.log(Fibonacci(i));
const nTerms = prompt('Enter the number of terms: ');

if (nTerms <= 0) {
    console.log('Enter a positive integer.');
}
else {
    let sum = 0;
    for (let i = 0; i < nTerms; i++) {

        console.log(Fibonacci(i));
        sum += Fibonacci(i);
    }

    console.log("Sum is: " + sum);
}

//  *
//  * *
//  * * *
//  * * * *
/*let n=4;
let string="";
for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        string +="*";
    }
    string +="\n";
}
console.log(string);*/


//   *
//  * *
// *   *
//  * *
//   *
let rows=3;
let char = "";
for (let i = 1; i <= rows; i++) {
  for (let j = rows; j > i; j--) {
    char += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      char += "*";
    }
    else {
      char += " ";
    }
  }
  char += "\n";
}
for (let i = 1; i <= rows - 1; i++) {
    for (let j = 0; j < i; j++) {
      char += " ";
    }
    for (let k = (rows - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (rows - i) * 2-1) {
        char += "*";
      }
      else {
        char += " ";
      }
    }
    char += "\n";
  }
console.log(char);
// ****
//   *****
//     *****
/*let n=4;
let string="";
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        string +=" ";
    }
    for(let k=0;k<2*(n-1)-1;k++){
        string+="*"
    }
    string +="\n";
}
console.log(string);*/





