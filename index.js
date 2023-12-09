const login = document.querySelector('.login');
const register = document.querySelector('.register');

// Checking password and verifying password match for registering
register.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = register['new_password'].value;
    const verify = register['verify'].value;

    if (password !== verify) {
        alert('Passwords do not match. Please re-enter your password.');
    }
    register.submit();
});

// Checking username and password for logging in
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = login['username'].value;
    const pass = login['password'].value;

    if (username === '' || pass === '') {
        alert('Please enter both your username and password.');
    }
    login.submit();

});