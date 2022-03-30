const arr=["hey","hello",3];
console.log(arr);
console.log(arr[arr.length-1]);

//array .forEach() method 

arr.forEach((value)=>console.log(value));

const cas=new Array(10);   //Constructing an array of size 10 
const ca=[10];             //Constructing an array of size 1 having 10 as element
console.log(cas);
console.log(ca);
const c=new Array(10,20,30);
console.log(c); 

const xy=["abc","def"];
console.log(xy); 
xy.push("ghi"); //appendings ghi to the end of xyz 
console.log(xy);
xy.pop(); //remove last element
console.log(xy);

console.log(xy.length);
const xya=[5,"4",3,2,1]; 

xya.sort(); 
console.log(xya);
console.log(typeof xya);
console.log(Array.isArray(xya));  
xya.shift();        //Removes the first element from the array
console.log(xya);
xya.unshift("6");   //Insert the element at beginning of the array
console.log(xya);   
console.log(xya.toString());
console.log(xya.join("*"));
console.log(xya,xy);
var az=xya.concat(xy);    
console.log(az);
console.log(xya.concat(xya,xy,az)); //.concat can take any number of arguments

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);
