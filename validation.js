
const contactName = document.getElementById("contactName");
const email = document.getElementById("email");
const form = document.getElementById("form");
const joinButton = document.getElementById("joinButton")

//HardCoded Authorization
let input1 = "lautaro";
let input2 = "lautaroferrandi@gmail.com"

const access = () => {
    location.href = "https://stuart.com/";
}

form.addEventListener('submit', (e)=>{

e.preventDefault
})

const redirect = () =>{

    if(contactName.value == input1 && email.value==input2) {      
        access();
        console.log("hey shitty")

        }else{
            alert("fuckoff")
        }
    
}






