
const mytext= document.getElementById("mytext");
const mybtn= document.getElementById("mybtn");
const result= document.getElementById("result");
let age;

mybtn.onclick = function(){
    age= mytext.value;
    age = Number(age);

    if(age>=100){
        result.textContent= `You are too old to enter this site`;
    }
    else if(age==0){
        result.textContent=`You can enter you just born`

    }
    else if(age >=18){
        result.textContent=`You are old enough to enter this site`
    }

    else if(age <0){
        result.textContent=`You age can be below 0`
    }
    
    else{
        result.textContent= `You must be 18+ to enter this site`;
    }
}