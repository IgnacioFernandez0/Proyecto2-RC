const userLogueado = localStorage.getItem("token");
if(userLogueado){
    window.location.href="index.html"
}

function manejarFormulario(event){
    event.preventDefault(); 

    const correo = document.getElementById("inputEmail").value;
    const nombre = document.getElementById("inputName").value;
    const pass = document.getElementById("inputPass").value;

    //Debemos checkear que el correo no este ya ingresados

    const usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
    //usuarior es un array de objetos. Despues busamos el storage que guarda los usuarios.

    const isUserRegistered = usuarios.find(user => user.correo === correo) //buscamos un usuario que tenga el mismo mail que acabo de ingresar en el formulario
    //Validamos:
    if(isUserRegistered){
        return alert("El usuario ya esta registrado");
        //AQUI ME FALTARIA UNA FUNCION QUE ME LIMPIE EL FORMULARIO
    }

    //Aca quiero agregar un elemento al array
    const usuario = {
        nombre: nombre, 
        correo: correo,
        pass: pass,
        rol: "user" // Modificación para separar roles
    };  
    usuarios.push(usuario);
    localStorage.setItem("token",JSON.stringify(usuario)); // Guarda sesion cuando se registra
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
    alert("Registro exitoso");
    //redirecciono al login
    window.location.href = "inicioSesion.html"
}