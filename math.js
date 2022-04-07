//Math inbuilt functions
console.log(Math.PI);
console.log(Math.E);
console.log(Math.log10(10));
console.log(Math.sqrt(4));

//Round float to int 
console.log(Math.round(12.83));
console.log(Math.floor(12.5));
console.log(Math.ceil(12.5));

//Random functions

var rand=Math.random();                     //Math.random returns a random number between 0 to 1
console.log(rand);
var rand=Math.floor(Math.random()*10);      //Here it returns the numbers between 0 to 9 
console.log(rand);
var rand=Math.floor(Math.random()*11);      //Here it returns the numbers between to 10 
console.log(rand);
var rand=Math.floor(Math.random()*10)+1;    //Here it returns the numbers between 1 to 10 
console.log(rand);
let randomrange=(min,max)=>{return Math.floor(Math.random()*(max-min))+min;}   //Here it return the random number between the given range
console.log(randomrange(3,6));

