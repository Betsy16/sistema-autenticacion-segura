const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");

 if (usuario === CONFIG.usuario && password === CONFIG.password) {

        mensaje.textContent = "Inicio de sesión exitoso.";

        mensaje.style.color = "green";

    } else {

        mensaje.textContent = "Usuario o contraseña incorrectos.";

        mensaje.style.color = "red";

    }

});