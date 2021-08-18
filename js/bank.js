// for login

document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;

    // get user password
    const passField = document.getElementById('user-pass');
    const passValue = passField.value;
    if (emailValue == 'abc@gmail.com' && passValue == 'abc123') {
        window.location.href = 'home.html';
    }
    else {
        window.alert('wrong password');
    }
})


