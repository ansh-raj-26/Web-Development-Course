
const Decbtn=document.getElementById("Decbtn");//we are assiging the id which we dont wnat to chane 
const Resetbtn=document.getElementById("Resetbtn");
const Incbtn=document.getElementById("Incbtn");
const Countlabel=document.getElementById("Countlabel");//this is for count that is the number 0 it 
let count = 0;//This is the count which initially is zero but can change so we use let 

Incbtn.onclick=function(){
    count++;
    Countlabel.textContent=count;//onclick the count will be +1 and the current count will be shown
}

Decbtn.onclick=function(){
    count--;
    Countlabel.textContent=count;//onclick the count will decrease by -1 

}
Resetbtn.onclick=function(){
    count =0;
    Countlabel.textContent=count;//onclick it wil reset to the value again to zero
}

