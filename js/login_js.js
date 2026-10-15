let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-z]+\.[a-z]+(?:\d{2})?@e-uvt\.ro$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Emailul nu e bun");
        console.log("Email failed regex check");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Parola nu e buna");
        console.log("Password failed regex check");
        return;
    }
    alert("Login reușit!");
    console.log("Login reusit!");
    window.location.href = "home.html";
});