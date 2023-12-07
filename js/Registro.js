const userLogueado = localStorage.getItem("token");
if(userLogueado){
    window.location.href="../html/index.html"
}

function crearUsuarioForm(event){
    event.preventDefault(); 

    const correo = document.getElementById("inputEmail").value;
    const nombre = document.getElementById("inputName").value;
    const pass = document.getElementById("inputPass").value;

    const usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

    const isUserRegistered = usuarios.find(user => user.correo === correo)
    if(isUserRegistered){
        return alert("El usuario ya esta registrado");
    }

    const regexNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/u;

    if (!regexNombre.test(nombre.trim())) {
        alert("El nombre es invalido.");
        return false;
    }

    if(nombre.trim() === ""){
        alert("Se requiere ingresar un nombre.");
        return false;
    }

    if(correo.trim() === ""){
        alert("Se requiere ingresar un correo electrónico.");
        return false;
    }
    
    if(pass.trim() === ""){
        alert("Se requiere ingresar una contraseña.");
        return false;
    }

    const usuario = {
        nombre, 
        correo,
        pass,
        rol: "user"
    };

    usuarios.push(usuario);

    localStorage.setItem("token",JSON.stringify(usuario));
    
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

    alert("Registro exitoso");

    window.location.href = "../html/index.html"
}