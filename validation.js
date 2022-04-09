const contactName = document.getElementById("contactName");
const email = document.getElementById("email");
const form = document.getElementById("form");
const joinButton = document.getElementById("joinButton");

//HardCoded Authorization
let input1 = /^[a-zA-Z ]{2,30}$/;
let input2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function redirect() {
  if (contactName.value.match(input1) && email.value.match(input2)) {
 
    setTimeout(() => {
      location.href = "https://stuart.com/";
    },2000);
    
  } else {
      
  }
}
