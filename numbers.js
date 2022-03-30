var x=3.14,y=2.45;
var x = 10;
var y = "20";
var z = x + y;
console.log(z);

//All strings can convert to numbers when numeric  operations are there
var x="7";
var y='7';
console.log(y/x);

//.toString() method for converting numbers base 10 to different base numbers
var a=10;
console.log(a.toString(2));

//Primitive values can not have properties and methods but in javascript it treats every primitve value as object

var s=10;
var st=(10).toString(); 
console.log(typeof s,typeof st);
var rs=(10).toExponential(2);
console.log(rs);
var a=10.5627;
console.log(a);
console.log(a.toFixed());
console.log(a.toFixed(1));
console.log(a.toFixed(2));
console.log(a.toFixed(3));

var x = 9.656;
console.log(x);
console.log(x.toPrecision());
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));

//parseInt and parseFloat values
console.log(parseInt("10.32 years"));
console.log(parseInt("years 10"));
console.log(parseFloat("10.32 years"));
console.log(parseFloat("years 10"));