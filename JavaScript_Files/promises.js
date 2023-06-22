var number=0;
var new_p=new Promise((resolve,reject) =>{
    //generate a result
    number=prompt("enter a value");
    if(number>18)
    resolve('User is a adult');
    else
    reject('Under 18');
})
console.log(new_p);
new_p.than(()=> {console.log("Success");})
.than(() =>{console.log("Sucessed again");})
.catch((error)=>{console.log("Failed")}) 

//Revers String
function reverse(str){
    let string='';
    for(let i=str.length-1; i>=0; i--)
    {
        string +=str[i];
    }
}
const string=prompt("Enter a string");
const result=(reverse(string));
console.log(result);