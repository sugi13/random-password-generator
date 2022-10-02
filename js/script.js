let passwordLengthField = document.getElementById("password-length");
let passwordShowField = document.getElementById("password-get-field");
let GenerateButton = document.getElementById("generate-btn");
let copyButton = document.getElementById("copy-btn");

let numberCheckField = document.getElementById("number");
let characterOnlyField = document.getElementById("characters");

let chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let res = '';
passwordShowField.disabled = true;

// function create password;

function generatePassword(){
  passwordShowField.disabled = false;
  numberCheckField.disabled = true;
  characterOnlyField.disabled = true;

  if(passwordLengthField.value === ""){
    alert("Enter number!");
  }
  else {
    for(let i = 1; i <= Number(passwordLengthField.value); i++){
      let random = Math.floor(Math.random()*chars.length);
      res += chars.charAt(random);
    }
    passwordShowField.value = res;
  }
}

// function copy to text 

function copyToClipBoard(){
  navigator.clipboard.writeText(passwordShowField.value);
  alert("text copied!");
  passwordLengthField.value = "";
  passwordShowField.value = "";
  location.reload();
}

// function onlyNumbers
   numberCheckField.addEventListener("change", function(e){
    GenerateButton.disabled = true;
    characterOnlyField.disabled = true;
    let numbers = '1234567890';
    if(e.target.checked){
      for(let i = 1; i<= Number(passwordLengthField.value); i++){
        let randomNumber = Math.floor(Math.random()*numbers.length)
        res += numbers.charAt(randomNumber);
      }
      passwordShowField.value = res;
    }
    else {
      alert("Enter password Length!");
    }
   })

   // function onlyCharacters
   characterOnlyField.addEventListener("change", function(e){
    GenerateButton.disabled = true;
    numberCheckField.disabled = true;
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(e.target.checked){
      for(let i = 1; i <= Number(passwordLengthField.value); i++){
        let randomChar = Math.floor(Math.random()*characters.length);
        res += characters.charAt(randomChar);
      }
      passwordShowField.value = res;
    }
    else {
      alert("Enter password length");
    }
   })



copyButton.addEventListener("click", copyToClipBoard);
GenerateButton.addEventListener("click", generatePassword);