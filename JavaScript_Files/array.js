//Map()
var arrayValue=[3,4,5,8,9];
var output=arrayValue.map(x => x+10);
for(i=0; i<output.length;i++){
    document.write(output[i]+"</br>");
}
//reduce()
var arrayValue=[500,200,100,100];
var iteration=1;
var output=arrayValue.reduce(userFunction);
function userFunction(firstValue,restTotalValue)
{
    document.write('Running Iteratin:', iteration,'</br>');
    document.write('Initial value:', firstValue,'</br>');
    document.write('Next value:', restTotalValue,'</br>');
    iteration++;
    return firstValue-restTotalValue;
}
document.write('Final Result : ',output+'</br>');
//filter()
var arrayValue=[2,3,4,5,6,7,8,9];
var output=arrayValue.map(x => x%2==0);
for(i=0; i<output.length;i++){
    document.write(output[i]+"</br>");
}
//concat()
var array1=[2,3,4,5];
var array2=[9,10,11];
var array3=[12,13,14,15];
var output=array1.concat(array2,array3);
for(i=0; i<output.length;i++){
    document.write(output[i]+"</br>");
}
//copyWithin()
var arrayValue=[2,3,4,5,6,7,8,9];
var output=arrayValue.copyWithin(1,2);
for(i=0; i<output.length;i++){
    document.write(output[i]+"</br>");
}
//entires()
var arrayValue=["Tools","QA","JavaScript","Tutorial"];
var output=arrayValue.entries();
for(var x of output){
    document.write(x+"</br>");
}
//fill()
var arrayValue=["Tools","QA","JavaScript","Tutorial"];
var output=arrayValue.fill("Tuts",3,4);
for(var x of output){
    document.write(x+"</br>");
}

