const email = document.querySelector('.form__email');
const pass = document.querySelector('.form__pass');

pass.addEventListener('blur', (e) => {
    if (e.target.value.length >= 6) {
        alert('Perfect password');
    } else {
        alert('6 Symbol');
    }
});

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

email.addEventListener('blur', (e) => {
    if (validateEmail(e.target.value)) {
        alert('Correct email');
    } else {
        alert('Invalid email');
    }
});