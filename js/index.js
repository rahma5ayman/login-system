document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            const storedName = localStorage.getItem('name');

            if (email === storedEmail && password === storedPassword) {
                window.location.href = `welcome.html?name=${storedName}`;
            } else {
                alert('Invalid email or password');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('User registered successfully');
            window.location.href = 'login.html';
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        document.getElementById('welcomeMessage').textContent = `Hi, ${name}`;
    }
});

var logout = document.getElementById('logout')

logout.addEventListener('click' , function() {
    window.location.href = 'index.html';
})
