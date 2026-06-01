//Const= a variable which cant be reassigned.

const pi =3.14

let radius;
let circumference;

document.getElementById('mySubmit').onclick = function(){//under box bracket it will do what funxtion to perform like on click fuction will be performed as writte below inside the brackets.
    radius=document.getElementById("myText").value;//this will take value entered in the box
    radius=Number(radius);
    circumference=2*pi*radius
    document.getElementById('myH3').textContent = circumference + "cm" //this give the content to the text to print circumference and we add cm 
}