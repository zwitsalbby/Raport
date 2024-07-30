// Event listener untuk login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'grades.html';
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah!';
    }
});

// Event listener untuk registrasi
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    document.getElementById('register-message').textContent = 'Registrasi berhasil! Silakan login.';
});
