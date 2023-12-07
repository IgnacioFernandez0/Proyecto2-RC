const userLogueado = localStorage.getItem("token");
// if(userLogueado){
//     window.location.href="index.html"
// }


function loginFormulario(e){
    e.preventDefault(); 

    //Tenemos los campos de los input
    const nombre =  document.getElementById("User").value;
   
    const contrasena = document.getElementById("Pass").value;

    //Traemos la base de datos del LS. La key en el Ls era listaUsuarios y en el caso de que no haya una base de datos creada asignamos un array vacio a usuarios 
    const usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
    
    const admin = {
        nombre: "admin",
        correo: "admin@admin.com",
        pass: "admin",
        rol: "admin"
    }
    usuarios.push(admin);

    //ahora usamos un find para buscar el nombre y la contraseña en la base de datos y en el caso de que coincidan entonces se logueo correctamente el usuario y le damos acceso a la app

    const validUser = usuarios.find(user => user.nombre === nombre && user.pass === contrasena);  //buscamos el nombre de usuario y la contraseña
    //Cuando usamos user.(lo que va aqui es como yo lo guarde en el localstorage) === (la variable que cree en este index)



    //Si el find me devuelve un undefine por ejempo, quiere decir que el usuario no me mando el usuario o la contraseña entonces, salimos de la funcion mostrandos un alerta.
    if(!validUser){
        return alert("Usuario y/o contraseña incorrectos!"); //esto en el caso de que haya ingresado mal la contraseña
    }else{
        alert("Bienvenido ", validUser.nombre);
        localStorage.setItem("token", JSON.stringify(validUser));   //Para saber si hay algun usuario logeuado dentro de la app
        window.location.href = "../html/index.html";
    }

}
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", ()=>{
    alert("Hasta pronto!");
    localStorage.removeItem("token"); //me borra la cuenta iniciada del localStorage cuando cierre sesion
    window.location.href = "inicioSesion.html";
})