

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
    
    noUser.style.display = "block";
    userLog.style.display = "none";
  }
});

