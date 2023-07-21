const form = document.getElementById('formRegister');
const passwordInput = document.getElementById('passwordRegister');
const confirmPasswordInput = document.getElementById('confirmPassword');

function validadePassword(passwordInput, minDigits){
    if(passwordInput.length >= minDigits) {
        return true;
    }
    return false;
}
function samePassword(passwordInput, confirmPasswordInput){
    if(passwordInput.value === confirmPasswordInput){
        return true;
    }
    passwordInput.classList.add('invalid');
    confirmPasswordInput.classList.add('invalid');
    return false;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!validadePassword(passwordInput.value,8)){
        passwordInput.classList.add('invalid');
        return
    }
    if(!samePassword(passwordInput, confirmPasswordInput)){
        return
    }

    form.submit();
})