const Fname=document.getElementById("First");
const FnameError=document.getElementById("fname-error");
const Lname=document.getElementById("Last");
const LnameError=document.getElementById("lname-error");
const Email=document.getElementById("email");
const EmailError=document.getElementById("email-error");
const Phone=document.getElementById("phone");
const PhoneError=document.getElementById("phone-error");
const Password=document.getElementById("password");
const PasswordError=document.getElementById("password-error");
const Confirm=document.getElementById("Confirm");
const ConfirmError=document.getElementById("confirm-error");
Fname.addEventListener('input', (event)=>{
    if(Fname.value===''){
        FnameError.textContent='Please type in your first name.';
    }
    else{
        FnameError.textContent='';
    }
});
Lname.addEventListener('input', (event)=>{
    if(Lname.value===''){
        LnameError.textContent='Please type in your Last name.';
    }
    else{
        LnameError.textContent='';
    }
});
Email.addEventListener('input',(event)=>{
    if(Email.validity.typeMismatch){
        EmailError.textContent="Please enter in a valid Email. like(Sunlight@email.com)"
    }
    else{
        EmailError.textContent='';
    }
});
Phone.addEventListener('input',(event)=>{
    if(Phone.validity.patternMismatch){
          PhoneError.textContent='Please insert a 10 digit phone number';
    }
    else{
        PhoneError.textContent='';
    }
});
Password.addEventListener('input',(event)=>{
    if(Password.validity.patternMismatch){
        const value=Password.value;
        const regExpLetter=/[A-Za-z]/g;
        const regExpDig=/[0-9]/g;
        const regExpChar=/[@$!%*#?&]/g;
        let result='';
        if(regExpLetter.test(value)){
            result+='';
        }else{
            result+=`Missing at least 1 capital letter.`;
            result+='\n';
        }


        if(regExpDig.test(value)){
            result+='';
        }else{
            result+='Missing at least 1 number.';
            result+='\n';
        }


        if(regExpChar.test(value)){
            result+='';
        }else{
            result+='Missing at least 1 special characte.';
            result+='\n';
        }


        if(value.length<9){
            result+='Password must be at least 8 characters.';
            result+='\n';
        }else{
            result+='';
        }
        console.log(result);
        PasswordError.textContent=result;
    } else{
        PasswordError.textContent='';
    }
});
Confirm.addEventListener('input',(event)=>{
    if(Confirm.value !== Password.value){
        ConfirmError.textContent='Password do not match'
    }
    else{
        ConfirmError.textContent='';
    }
});