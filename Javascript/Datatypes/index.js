
// Datatype: Change the Datatype of a value to another.
//             (string, numbers, boolenas. etc.)

/*
let age = window.prompt("What is your age?")

age=Number(age); // This define the type of age like if it a no or string etc

age+=2 //this is just adding +2 in age 
//the will only come age +2 if the age is define an number.
console/console.log(age, typeof age);
*/


let x = 'pizza';// you can play with it, converting this into number
let y = 'pizza';//this into string
let z = '';//this into boolean

x=Number(x);//it gives NaN bcz it does not have any number only alphabets.
y=String(y);//it has strings 
z=Boolean(z);// here z is equal to pizza so its true if we leave empty its false
console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)



/*
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"

*/

/*
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
*/