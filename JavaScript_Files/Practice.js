var a;//global scope
a=90;
console.log("value of a:" +a);
let b;//global scope
b=100;
console.log("value of b" +b);
const c="String value";  //global scope
let car={"wheels":3, "Color":"red", "Speed":120};
console.log(car);
let arr=[12,13,14,15];
console.log(arr);

function print()//local scop
{
    var x=1001;
    console.log("value of x:"+x);
}
print();
//document.write("value of x is:"+x);------Error

if(a>1)
{
    var y=40;
    console.log("value of y:"+y);
}
document.write("value of y is:"+y);  //block scope

if(a>2)
{
    var cab="Jhunulata";
    let abc=1900;
    const xyz=120;
    console.log("value of abc:"+abc);
    console.log("value of xyz:"+xyz);
    console.log("value of cab:"+cab);
}
//document.write("value of abc is:"+abc);//--------Error
//document.write("value of xyz is:"+xyz);
//document.write("Outside the block:"+cab)

//lexical scope
function parent(){
    var pl="Java";    //lexical scope & closure
    document.write("<br>Inside parent function:"+pl);
    function child(){
        document.write("<br>Inside child function:"+pl);
        var ch="Oindrila";
        document.write("value of ch:"+ch);
    }
    child();
}
parent();

//function
function display()
{
    console.log("Hello World!")
}
display();

//arrow function
let add=(a,b)=>{
    console.log("addition is"+(a+b));
    return(a+b);
}
add(3,4);
console.log(add(90,80));

//hosting
substract(90,30);
function substract(a,b)
{
    console.log("difference is:"+(a-b));
}

//callback
welcome(display);
function welcome(mycallback){
    document.write("<br>Welcome to FSWD");
    mycallback();
}
/*
function multiply(a,b){
    document.write("<br>Multiplication of a*b:"+(a*b));

}
multiply(4,5);  */

function print(result)
{
    document.write("<br> The result is:"+result);
}
function multiply(x,y, callback)
{
    return callback(x*y);
}
multiply(90,30, print);

//objects

class technology{
    constructor(language,type,dob){
        this.language=language;
        this.type=type;
        this.dob=dob;
    }
    print()
    {
        document.write("<br>The technology is:"+this.language+" " +this.type);
    }
}
fs= new technology('javaScript', 'Web development','2018' );
fs.print();

//call by value & call by reference
//Primitive: boolean, integer, float, char
//Nonprimitive: object

javaFs=fs;
javaFs.dob=2023;
document.write("<br>dob of new object is:"+javaFs.dob);
document.write('<br> dob of old is:'+fs.dob+"<br>");
let array=[12,13,14,15];
document.write(array);
console.log(array);
let new_array;
new_array=[90,80,100];
console.log(array);
console.log(new_array);
let old=90;
let n=old;
console.log("<br>old is:"+old+ "new is:"+n);
n=9000;
console.log("<br>old is:"+old+ "new is:"+n);

//loops
let array1=["dotnet", "fullstack", "java", "Python"];
for(let i=0;i<4;i++)
{
    document.write("<br>"+array1[i]);
}
array1.forEach(print);
array1.forEach((k)=>{document.write("<b>"+k+"</b")});
function print(element)
{
    document.write(" "+element);
}


let student={ name:"Jhunulata", age:20, major:"technology"};
for(k in student)
{
document.write(k);
}

let j=0;
while(j<5)
{
    document.write("<br>"+j);
    j++;
}

let m=0;
do{
document.write("<br>Hello World!");
}
while(m>0)
