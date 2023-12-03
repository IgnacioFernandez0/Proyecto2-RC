let juegos = [];


function nuevoJuego(event){
    event.preventDefault(); 
    const codigo = document.getElementById("codigo").value;
    const nombreJuego = document.getElementById("nombreJuego").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    //Este mepa que no...
    const publicado = document.getElementById("publicado").value;
   
    //Validaciones al formulario

    if(codigo == ""){
        alert("Se requiere ingresar un codigo");
        return false;
    }else if(codigo < 0){
        alert ("El codigo debe ser un numero positivo")
    }
/*
    if(nombreJuego ==""){
        alert("Se requiere ingresar el Nombre del juego");
        return false;
    }

    if(categoria ==""){
        alert("Se requiere ingresar la categoria juego");
        return false;
    }

    if(descripcion ==""){
        alert("Se requiere ingresar alguna descripcion del juego");
        return false;
    }
    

*/



    const juego = {
        codigo: codigo, 
        nombreJuego: nombreJuego,
        categoria: categoria,
        descripcion: descripcion,
        publicado: publicado,
    }; 
    
    

    juegos.push(juego); 

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS(); //Cosa que el usuario de click en submit y se agregue automaticamente a la lista
   

    //Aca vamos a refrescar los valores de los input para que no los tena que borrar de forma manual
    document.getElementById("codigo").value;
    document.getElementById("nombreJuego").value;
    document.getElementById("categoria").value;
    document.getElementById("descripcion").value;
    document.getElementById("publicado").value;

    //yo podria sacar los .value de la linea 6 a la 10 y poner el .value en las propiedades del objeto. Asi directamente podria llamar de la linea 30 a 24 la variable por ej codigo.value = ""
    codigo.focus(); // esto cuando toque el submit me apunta directamente al input de codigo
}


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

    juegos.forEach(element => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${element.codigo}</th>
            <td>${element.nombreJuego}</td>
            <td>${element.categoria}</td>
            <td>${element.descripcion}</td>
            <td>${element.publicado}</td>
            <td> <button class="btn btn-danger" onclick="borrarJuego(${element.codigo})">Eliminar</button> </td>    
        </tr>
        `; //me permite los saltos de linea
        //aqui el $ seguido de {} con "codigo" dentro quiero hacer que me diga que elemento con el codigo estoy borrando
        
    });

}

//invoco la funcion
cargarLS();


//NOTA: FALTARIA ALGO PARA QUE EL CODIGO NO SE ME REPITA 