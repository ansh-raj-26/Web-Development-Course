// How to accept user input:

// Two Ways:
//   Window Prompt
//   HTML Textbox

/*let username;

username = window.prompt("What is you'r username");

console.log(username)  */ 


let username;

document.getElementById("mySubmit").onclick = function(){
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent=`Hello ${username}`;
}
//This is HTML Form

//Notes:


/* User types text
        ↓
Input Box (.value)
        ↓
Store in variable
        ↓
Button Click
        ↓
Update H1 (.textContent)
        ↓
Display Output */