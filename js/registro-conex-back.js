window.onload = function () {
        
    document.getElementById('registroForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombreCompleto').value;
        const email = document.getElementById('correoElectronico').value;
        const contrasena = document.getElementById('contrasena').value;
        const dni = document.getElementById('dni').value


        // Crear objeto de usuario
        const usuario = {
            nombreUser: nombre,
            correo: email,
            password: contrasena,
            dniUser: dni,
            // Puedes agregar más propiedades según la estructura de tu UsuarioVO
        };

        // Mostrar mensaje de registro exitoso
        const mensajeRegistro = document.getElementById('mensajeRegistro');
        mensajeRegistro.style.display = 'block';

        // Enviar el JSON al servicio web usando fetch
        fetch('http://localhost:8080/usuarios/insertar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => {
                // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
                console.log('Respuesta del servidor:', response);
            })
            .catch(error => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error('Error al enviar la solicitud:', error);
            });
    });
}