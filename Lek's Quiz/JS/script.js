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

const theme = document.querySelectorAll('[name=colorTheme]')

const storeTheme = function(theme){
    localStorage.setItem("theme", theme)
}
theme.forEach(themeOption =>{
    themeOption.addEventListener('click', () =>{
        storeTheme(themeOption.id)
    })
})

const changeTheme = function(){
    const activeTheme = localStorage.getItem("theme");
    theme.forEach((themeOption)=>{
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    })
}
document.onload = changeTheme();

const linkRegister = document.getElementById('linkRegister');

linkRegister.addEventListener('click', ()=>{
    const btnMenuRegister = document.getElementById('btnMenuRegister');
    btnMenuRegister.checked = true;
})