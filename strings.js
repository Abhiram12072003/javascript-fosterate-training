//String with double qoutes
var a="Hey how are you doing?";
console.log(a);

//Strings with single qoutes
var b='Hello';
console.log(b);

let s="I am 'Abhi'";
console.log(s);

//We can use back slash '\' to avoid inverted commas
var str='It\'s be a';
console.log(str);

//Printing the length of the string
var text="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

let t="We are so called \"Heroes\"";
console.log(t);

//Javascripts strings as objects 
var x="John";
console.log(x);
var y=new String("John");
console.log(y);
//When we compare two different objects of same class then it will return false

//There are three methods for extracting part of the string they are: slice(),substring().substr() 

let z="Apple, Banana, Kiwi"

//Slice 
console.log(z.slice(0,3));  //App  
console.log(z.slice(-5,-1));  //_Kiw 

//Substring
console.log(z.substring(3,5)); //le
console.log(z.substring(5,3,-1)); //

//Replace
var sr="Hey how are you Abhi";
console.log(sr);
var newText=sr.replace('Abhi','Xyz');
console.log(newText);

//.indexOf
var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));

//String templates
let firstName="Falsa";
let secondName="Trulsa";
var text=`First name ${firstName} Last name ${secondName}`;
console.log(text);

//HTML templates
var header="HTML Templates"
var html=`<h1>${header}</h1><ul>`
let tags=["template1","template2","template3","template4"]
for(const x of tags){
    html+=`<li>${x}</li>`;
}
html+=`</ul>`;
console.log(html);     