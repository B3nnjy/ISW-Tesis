function loguear() {
    // Obtener los valores de usuario y clave
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    alert("Intentando iniciar sesión...\nUsuario: " + usuario + "\nClave: " + clave);

    if (usuario === "juan" && clave === "1234") {
        // Redirigir a otra página si la validación es exitosa
        window.location.href = "index1.html";
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
    }

    // Devuelve false para evitar que el formulario se envíe
    return false;
}
