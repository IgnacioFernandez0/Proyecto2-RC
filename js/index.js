const user = JSON.parse(localStorage.getItem("token")) || false;     //en el caso de que haya algo dentro del local storage se guarda en login sino es false

if(!user){
    window.location.href = "/html/inicioSesion.html";
}
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", ()=>{
    alert("Hasta pronto!");
    localStorage.removeItem("token"); //me borra la cuenta iniciada del localStorage cuando cierre sesion
    window.location.href = "inicioSesion.html";
})