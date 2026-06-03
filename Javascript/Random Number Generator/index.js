const Mybtn = document.getElementById("Mybtn");//these get the id 
const myLabel1= document.getElementById("myLabel1");
const myLabel2= document.getElementById("myLabel2");
const myLabel3= document.getElementById("myLabel3");
 
const min = 1;
const max = 6;

let randomNum1;//genrate a random no 
let randomNum2;//same with this and below
let randomNum3;

Mybtn.onclick = function(){
    randomNum1= Math.floor (Math.random() * max) +min;//it will generate the no within the max and the min value then the no decimal will be removed by floor
    randomNum2= Math.floor (Math.random() * max) +min;
    randomNum3= Math.floor (Math.random() * max) +min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;

}



//Wanted to add a dice in this instead of button




