const userLogueado = localStorage.getItem("token");



function loginFormulario(e){
    e.preventDefault(); 

    const nombre =  document.getElementById("User").value;
   
    const contrasena = document.getElementById("Pass").value;

    
    const usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
    
    const admin = {
        nombre: "admin",
        correo: "admin@admin.com",
        pass: "admin",
        rol: "admin"
    }
    usuarios.push(admin);

    
    const validUser = usuarios.find(user => user.nombre === nombre && user.pass === contrasena);  



   
    if(!validUser){
        return alert("Usuario y/o contraseña incorrectos!"); 
    }else{
        alert("Bienvenido ", validUser.nombre);
        localStorage.setItem("token", JSON.stringify(validUser));   
        window.location.href = "../html/index.html";
    }

}
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", ()=>{
    alert("Hasta pronto!");
    localStorage.removeItem("token"); 
    window.location.href = "inicioSesion.html";
})