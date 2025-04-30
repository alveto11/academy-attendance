
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('code').value;
    const access = {
        "1234": "ahmed.html",
        "123": "omran.html",
        "12": "basem.html",
        "1": "admin.html"
    };
    if (access[code]) {
        window.location.href = access[code];
    } else {
        document.getElementById('error').textContent = "رمز غير صحيح";
    }
});
