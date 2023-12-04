// Modifica navbar con información de usuario

window.addEventListener("load", function () {
  const userLogged = JSON.parse(localStorage.getItem("token"));
  const userLog = document.getElementById("userLog");
  const nombreUsuario = document.getElementById("nombreUsuario");
  const noUser = document.getElementById("noUser");
  const admin = document.getElementById("admin");
  if (userLogged) {
    nombreUsuario.textContent = userLogged.nombre;
    
    noUser.classList.replace("d-flex","d-none")
    if(userLogged.rol === "admin"){
      admin.style.display = "block";
    }
  } else {
    // Si el usuario no está logeado, mostrar el elemento li con el id "noUser"
    noUser.style.display = "none";
    userLog.style.display = "none";
  }
});

