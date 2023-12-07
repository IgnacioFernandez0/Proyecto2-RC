const imprimirDetallesJuego = (juego) =>{

    if(!juego){
        window.location.href="index.html"
        return;
    }

    const carouselJuego1 = document.getElementById("carouselJuego1");
    const carouselJuego2 = document.getElementById("carouselJuego2");
    const descripcionJuego = document.getElementById("descripcionJuego");
    const categoriaJuego = document.getElementById("categoriaJuego");
    const tituloJuego = document.getElementById("tituloJuego");
    const precioJuego = document.getElementById("precioJuego");
    const precioJuego2 = document.getElementById("precioJuego2");

    carouselJuego1.src=juego.portadaJuego;
    carouselJuego2.src=juego.portadaJuego2;
    descripcionJuego.innerHTML= juego.descripcion;
    categoriaJuego.innerHTML=juego.categoria;
    tituloJuego.innerHTML=juego.nombreJuego;
    precioJuego.innerHTML=juego.precioJuego;
    precioJuego2.innerHTML=juego.precioJuego;
}

const getJuego = () =>{
    const indexJuego = (localStorage.getItem("juegoDetalle"));

    
    if(!indexJuego){
        window.location.href="../html/index.html";
        return;
    }
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));
    imprimirDetallesJuego(juegos[indexJuego])
}

getJuego()