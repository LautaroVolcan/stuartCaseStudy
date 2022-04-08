const contactName = document.getElementById("contactName");
const email = document.getElementById("email");
const form = document.getElementById("form");
const joinButton = document.getElementById("joinButton");

//HardCoded Authorization
let input1 = "lautaro";
let input2 = "lautaroferrandi@gmail.com";

function redirect() {
  if (contactName.value == input1 && email.value == input2) {
    
    console.log(contactName.value);
    setTimeout(() => {
      location.href = "https://stuart.com/";
    },2000);
  } else {

    alert("Please fill the form to access");
  }
}
