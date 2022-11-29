const inputEmail =document.getElementById("input-email")
const inputPassword =document.getElementById("input-password")

const emailWarning = document.getElementById('input-email-warning')
const passWarning  = document.getElementById('input-password-warning')


function checkForErrors(inputValue,warningElement)
{
    let error=false;

    if(inputValue ===''){
        warningElement.innerHTML ="This field is required";
        error =true;
    }

   else if(inputValue.length <6){
        warningElement.innerHTML ="At least 6 characters required";
        error =true;
    }

    else {
        warningElement.innerHTML ='';
    }

    return error;
}

function login() {
    const emailError =checkForErrors(inputEmail.value,emailWarning);
    const passError  =checkForErrors(inputPassword.value,passWarning);
}