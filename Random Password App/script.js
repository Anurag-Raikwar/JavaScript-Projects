const passwordBox = document.querySelector("#password");
const generatePassword = document.querySelector(".generate-password");
const len= 12;

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+={}[]<>/?`~";


function createPassword(){
    let password = "";
    for(let i=1;i<=len;i++){
        password+= str[Math.floor(Math.random()*str.length)];
    }
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
generatePassword.addEventListener("click",(e)=>{
    createPassword();
})
