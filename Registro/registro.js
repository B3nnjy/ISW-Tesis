function registrarUsuario() {
    // Obtener los valores del formulario
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    // Crear un objeto de usuario
    var usuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena
    };

    // Obtener la lista de usuarios almacenados o inicializarla si no existe
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario a la lista
    listaUsuarios.push(usuario);

    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // Mostrar un mensaje de registro exitoso (puedes cambiar esto según tus necesidades)
    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // Redirigir a la página de inicio de sesión (cambiar la ruta según sea necesario)
    window.location.href = "index.html";
}
