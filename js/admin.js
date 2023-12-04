let juegos = [];


function nuevoJuego(event){
    event.preventDefault(); 
    const codigo = document.getElementById("codigo");
    const nombreJuego = document.getElementById("nombreJuego").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const formCrearJuego = document.getElementById("formCrearJuego");
    

   
    //Validaciones al formulario

    const codigoExistente = juegos.find(juego => juego.codigo === codigo.value)
    if(codigoExistente){
        alert("El codigo esta en uso")
        return; 
    }

    if (isNaN(codigo.value) || codigo.value < 0) {
        alert("El codigo debe ser un numero positivo");
        return false;
    }


    const juego = {
        codigo: codigo.value, 
        nombreJuego: nombreJuego,
        categoria: categoria,
        descripcion: descripcion,
        publicado: false,
    }; 
    
    juegos.push(juego); 

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();
   
    
    
    // document.getElementById("codigo").value;
    // document.getElementById("nombreJuego").value;
    // document.getElementById("categoria").value;
    // document.getElementById("descripcion").value;
    formCrearJuego.reset();

    codigo.focus();
   
}

const cambiarPublicado = (index) => {
    //Debo traer el valor del input y cambairle el valor
    juegos[index].publicado = !juegos[index].publicado;
    localStorage.setItem("listaJuegos",JSON.stringify(juegos));
};


function borrarJuego(codigo) {
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));
    const index = juegos.findIndex((c) => c.codigo == codigo);

    if (index !== -1) {
      alert("Se borro el juego" + " " + juegos[index].nombreJuego);
      juegos.splice(index, 1);
      localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    }
    cargarLS();
}

function cargarLS() {
    //ver si hay algo en el LS
    const listaJuegos = localStorage.getItem("listaJuegos");

    if(listaJuegos){
        juegos = JSON.parse(listaJuegos); //Si es no null le asigna lo que tiene en el LS y sino seguira siendo un array vacio
    }else{
        juegos = [];
    }

    //dibujar en la table sus elementos

    const tabla = document.getElementById("tablaJuegos");
    tabla.innerHTML = "";   //Como es un acumulador debo inicializarlo en 0. porque sino se me acumulan los anteriores mas el nuevo
    //Esto lo hace que se vacie la tabla y despues se vuelva a llenar

    juegos.forEach((element, index) => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${element.codigo}</th>
            <td>${element.nombreJuego}</td>
            <td>${element.categoria}</td>
            <td>${element.descripcion}</td>
            <td><input class="form-check-input" type="checkbox" ${element.publicado ? "checked" : ""} onchange="cambiarPublicado(${index})"</td>
            <td> <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminarJuego${element.codigo}">Eliminar</button> </td>    
        </tr>
        <div class="modal fade" id="modalEliminarJuego${element.codigo}" tabindex="-1" aria-labelledby="modalEliminarJuego${element.codigo}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalEliminarJuego${element.codigo}Label">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>¿Estas seguro que deseas eliminar este juego?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="borrarJuego(${element.codigo})" data-bs-dismiss="modal">Eliminar</button>
                </div>
                </div>
            </div>
        </div>

        `; //me permite los saltos de linea
        //aqui el $ seguido de {} con "codigo" dentro quiero hacer que me diga que elemento con el codigo estoy borrando
        
    });

}

//invoco la funcion
cargarLS();


