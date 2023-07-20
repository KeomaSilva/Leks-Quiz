const form = document.getElementById('formRegister');
const nickInput = document.getElementById('nickName');
const emailInput = document.getElementById('contatemail');
const passqordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nickInput.value === ""){
        alert("Sem Nick");
        return;
    }
    if(emailInput.value === "" || !emailValid(emailInput.value)){
        SpeechRecognitionAlternative("Preencha o email");
        return;
    }





    form.submit();
})
function emailValid(email){
    const emailRegex = new RegExp{
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    };
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}