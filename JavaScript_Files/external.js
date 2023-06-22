//alert("Welcom to the page!");
//var age = prompt("Please enter your age:");
//if (age>18)
//document.write("<b> You are an Adult</b>");
//else
//document.write("<b> You are an Kid</b>");
function display_age() {
   alert("Welcom to the page!");
   var age = prompt("Please enter your age:");
   if (age > 18)
      document.write("<b> You are an Adult</b>");
   else
      document.write("<b> You are an Kid</b>");

}
//function declaration
//function call/ invoking the function
//display_age();
//let names = ['Nikita', 'Jhunulata', 'Rahul', 'Satish']//index
//console.log(names);
//console.log(names[3]);

function add(a, b) {
   return (a + b);
}
//var a=parseInt(prompt("enter number 1"));
//var a=parseInt(prompt("enter number 2"));
//display_age();
let names= ['Nikita', 'Jhunulata', 'Rahul', 'Satish']//index
console.log(names);
document.write("names"+names);
console.log(names[3]);
document.write("4th eleent:"+names[90]);
let numes= ['Agarwal', 'Jhunulata', 34, 90]//index
console.log(names.concat(numes));
console.log(names);//immutable
//assignment-2 create aJS file,implement all in-built function inside array class.
numes.fill(10,1,3);
document.wrte("<br>"+numes);
document.wrte("1st"+names[0]);
document.wrte("2nd"+names[1]);
document.wrte("3rd"+names[2]);
document.wrte("4th"+names[3]);
//loops for while ,do-while
//for(assignment;comparison;increment/decrement)
for(let i=0;i<=numes.length;i++)
{
document.write("element"+i+"is"+numes[i]);
}
numes.forEach(function disolay(e){
document.write("<br>"+e)
});
//callback isa fuction passed as a parameter to another function.
function disp()
{
   //function body
}
varoutput=(a,b)=>{
   return(a+b);
}
document.write(output(4,5));


document.write("reversed"+numes.reverse());
document.wrte(numes);
numes.filter((f)=>{
   if(f>=100)
   document.write(f);
})
numes.map((n)=>{
   document.write(2*n);
})
document.write("Double"+double_num);

var arr=[12,23,34,45,56];
document.write("shift method"+arr.shift());
arr.push(900);
document.write("after pusf<br>"+arr);
document.write("<br>after pop"+arr.pop());
