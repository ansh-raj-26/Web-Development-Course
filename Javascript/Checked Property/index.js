const checkboxbtn = document.getElementById("checkboxbtn");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const submitbtn = document.getElementById("submitbtn");
const submitresult = document.getElementById("submitresult");
const payresult = document.getElementById("payresult");


submitbtn.onclick = function(){
    
    if(checkboxbtn.checked){
        submitresult.textContent = `You have Subscribed to our Newsletter.`;
    }
    else{
        submitresult.textContent = `You must subscribe to our newsletter.`;
    }
       
    if(visabtn.checked){
        payresult.textContent = `Visa is the mode of payment`;
    }
    else if(mastercardbtn.checked){
        payresult.textContent = `Mastercard is the mode of payment`;
    }
    else if(paypalbtn.checked){
        payresult.textContent = `Paypal is the mode of payment`;
    }
    else{
        payresult.textContent = `Select The mode of Payment`;
    }
   
}
