const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password')
};

function onChangeEmail() {
    toggleButtonsDisable();
    toggleError('email');
}

function onChangePassword() {
    toggleButtonsDisable();
    toggleError('password');
}

function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "páginas/perfil/perfil.html";
    }).catch(error => {
        alert(getErrorMessage(error))
    });
}

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        alert('Email enviado com sucesso');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}


function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado!";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha incorreta";
    }

    return error.message;
}

function register() {
    window.location.href = "páginas/register/register.html";
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
    const email = document.getElementById('email').value;
    return email && validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    return !!password;
}

function toggleError(field) {
    const value = document.getElementById(field).value;
    const requiredError = document.getElementById(`${field}-required-error`);
    const invalidError = document.getElementById(`${field}-invalid-error`);

    if (!value) {
        requiredError.style.display = 'block';
        invalidError.style.display = 'none';
    } else if (field === 'email' && !validateEmail(value)) {
        requiredError.style.display = 'none';
        invalidError.style.display = 'block';
    } else {
        requiredError.style.display = 'none';
        invalidError.style.display = 'none';
    }
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    document.getElementById('recover-password-button').disabled = !emailValid;
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}
