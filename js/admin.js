const verificarUsuario = () => {
    const userString = localStorage.getItem('token');
    if (!userString) {
        window.location.href = '/html/logOut.html'
    }

    const user = JSON.parse(userString);
    if (!user || user.rol !== 'admin') {
        window.location.href = '/html/logOut.html'
    }
}

verificarUsuario()

let juegos = [];

const cargarJuegos = () => {
    verificarUsuario()
    const juegosDB = [
        {
            codigo: 1, 
            nombreJuego: 'Grand Theft Auto 5',
            portadaJuego: 'https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png',
            portadaJuego2: 'https://images.ctfassets.net/wn7ipiv9ue5v/TDpmhxf0FSMnPktwjArbt/64604f6cd6f5804e5863bfb01dd74b94/GTAV_Gen9_MFT_Webstore_ProductPage_2048x879_DELIV__1_.jpg',
            precioJuego: 500,
            categoria: 'Accion',
            descripcion: 'Juego de mundo abierto con disparos con mucha acción',
            publicado: true,
        },{
            codigo: 2, 
            nombreJuego: 'Grand Theft Auto 6',
            portadaJuego: 'https://media.vandal.net/m/12-2023/2023125940893_1.jpg',
            portadaJuego2: 'https://phantom-marca.unidadeditorial.es/bfa4488dbd58779cdbf12d6cff6ae71b/resize/828/f/jpg/assets/multimedia/imagenes/2023/12/05/17017638344011.jpg',
            precioJuego: 1500,
            categoria: 'Accion',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 3, 
            nombreJuego: 'Counter Strike 2',
            portadaJuego: 'https://media.tycsports.com/files/2023/09/27/623414/counter-strike-2_862x485_wmk.webp',
            portadaJuego2: 'https://www.mundodeportivo.com/alfabeta/hero/2023/06/counter-strike-2.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            precioJuego: 10,
            categoria: 'Accion',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 4, 
            nombreJuego: 'Assassins Creed',
            portadaJuego: 'https://www.mundodeportivo.com/alfabeta/hero/2020/04/alfabetajuega-assassins-creed-2-15042020.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            portadaJuego2: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4CdAD2JX2wqu1ytWiPxP3j/8e20767528333b13e640611147069018/-ACII-_Screenshots_-_5.jpg',
            precioJuego: 60,
            categoria: 'Accion',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 5, 
            nombreJuego: 'Cyberpunk 2077',
            portadaJuego: 'https://cyberpunk-static.qtlglb.com/build/images/social-thumbnail-en-ddcf4d23.jpg',
            portadaJuego2: 'https://www.hd-tecnologia.com/imagenes/articulos/2023/12/Cyberpunk-2077-Ultimate-Edition-ahora-disponible-en-PS5-Xbox-Series-S-y-PC.jpg',
            precioJuego: 55,
            categoria: 'Accion',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 6, 
            nombreJuego: 'Apex Legends',
            portadaJuego: 'https://media.ambito.com/p/32dc834685c48254fe9edac02c8a3f97/adjuntos/239/imagenes/038/249/0038249043/apexjpg.jpg',
            portadaJuego2: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/apex-legends-2325601.jpg?tf=3840x',
            precioJuego: 55,
            categoria: 'Accion',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 7, 
            nombreJuego: 'Football Manager 2024',
            portadaJuego: 'https://media.tycsports.com/files/2023/11/06/642736/football-manager-2024_1440x810_wmk.webp?v=4',
            portadaJuego2: 'https://img.asmedia.epimg.net/resizer/NIOw8GtOvzWxeYroFCULw7hBH-E=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SPEXF3DJXZFQJDKCAKJDTKYA3Y.jpg',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 8, 
            nombreJuego: 'Football Manager 2024',
            portadaJuego: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg',
            portadaJuego2: 'https://phantom-marca.unidadeditorial.es/086a0a84b6c72f32cb8bf0ca8ac5757e/resize/828/f/jpg/assets/multimedia/imagenes/2019/10/16/15712106036632.png',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 9, 
            nombreJuego: 'The Witcher 3',
            portadaJuego: 'https://assetsio.reedpopcdn.com/Witcher-PC-Site.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
            portadaJuego2: 'https://estaticos-cdn.prensaiberica.es/clip/a8bf7777-aaea-4556-a10a-2a872695b0a1_16-9-discover-aspect-ratio_default_0.jpg',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 10, 
            nombreJuego: 'Mariachi Legends',
            portadaJuego: 'https://ksr-ugc.imgix.net/assets/042/904/173/999e94e433f9fe2ea55d204a0e0b38fd_original.jpg?ixlib=rb-4.1.0&crop=faces&w=1024&h=576&fit=crop&v=1698802525&auto=format&frame=1&q=92&s=3404ab7ea6b118bb0066c8ff2d167d63',
            portadaJuego2: 'https://www.up.edu.mx/wp-content/uploads/2023/11/mariachi-legends-videojuego-inspirado-en-la-cultura-mexicana-int-uno.jpg',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 11, 
            nombreJuego: 'Path of Exile',
            portadaJuego: 'https://static.invenglobal.com/upload/image/2020/10/02/i1601681005987357.jpeg',
            portadaJuego2: 'https://image.api.playstation.com/cdn/UP4781/CUSA11924_00/FREE_CONTENTYALS4gIEjw2Ise5DsWs4/FJJFalhT_PREVIEW_SCREENSHOT1_171472.jpg',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 12, 
            nombreJuego: 'Age of Empires',
            portadaJuego: 'https://generacionxbox.com/wp-content/uploads/2022/05/age-of-empires-3-kom-generacion-xbox-1.jpg',
            portadaJuego2: 'https://e.rpp-noticias.io/xlarge/2021/10/31/300930_1167322.jpg',
            precioJuego: 55,
            categoria: 'Estrategia',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 13, 
            nombreJuego: 'Forza Horizon 5',
            portadaJuego: 'https://i.ytimg.com/vi/sfAxRnc6640/maxresdefault.jpg',
            portadaJuego2: 'https://areajugones.sport.es/wp-content/uploads/2021/11/destacada-forza-1920-1080-1560x880.jpg',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 14, 
            nombreJuego: 'Snow Runner',
            portadaJuego: 'https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_PortraitImage_860x1148-860x1148-bdf591a23e5a348671dc2a77465d0ba6c5871d68-860x1148-5a5adeae2140a3f0b5586750f70bf8e2-860x1148-5a5adeae2140a3f0b5586750f70bf8e2.jpg',
            portadaJuego2: 'https://i.ytimg.com/vi/XkbDXZdl1f0/maxresdefault.jpg',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 15, 
            nombreJuego: 'Ea Sport WRC',
            portadaJuego: 'https://img.asmedia.epimg.net/resizer/J2SPAhFjQ6hoXsMLQLflmdqUIUU=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YURNKSPJSBDJ5PZ7TMOB52IQVY.jpg',
            portadaJuego2: 'https://media.contentapi.ea.com/content/dam/ea/ea-sports-wrc/common/news-articles/launch-article-assets/wrc-ea-classic-porsche.png.adapt.crop16x9.431p.png',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 16, 
            nombreJuego: 'Car Mechanic',
            portadaJuego: 'https://i.ytimg.com/vi/p4qvNXJSSDI/maxresdefault.jpg',
            portadaJuego2: 'https://cdn.akamai.steamstatic.com/steam/apps/672271/header.jpg?t=1635328711',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 17, 
            nombreJuego: 'Cars Drift Racing Online',
            portadaJuego: 'https://cdn.akamai.steamstatic.com/steam/apps/635260/header.jpg?t=1694001671',
            portadaJuego2: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1786050/ss_80a870b5750d888b7bedee1246edb69c70274325.1920x1080.jpg?t=1638883040',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 18, 
            nombreJuego: 'Need For Speed Most wanted',
            portadaJuego: 'https://cdn.akamai.steamstatic.com/steam/apps/1262560/header.jpg?t=1605151411',
            portadaJuego2: 'https://gamingbolt.com/wp-content/uploads/2012/09/Need-For-Speed-Most-Wanted-2012-Wallpaper.jpg',
            precioJuego: 55,
            categoria: 'Carreras',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 19, 
            nombreJuego: 'WWE 2K23',
            portadaJuego: 'https://solowrestling.mundodeportivo.com/uploads/mobileRESEM125178wargames.jpg',
            portadaJuego2: 'https://solowrestling.mundodeportivo.com/uploads/mobileRESEM125656wwe-nxt.jpg',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 20, 
            nombreJuego: 'NBA 2K23',
            portadaJuego: 'https://media.vandal.net/m/122141/nba-2k23-202283015131648_1.jpg',
            portadaJuego2: 'https://www.jugomobile.com/wp-content/uploads/2022/07/%C2%BFNBA-2K23-para-PC-sigue-siendo-la-version-de-generacion.jpeg',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 21, 
            nombreJuego: 'Tenis Virtual Spin',
            portadaJuego: 'https://cdn.alfabetajuega.com/alfabetajuega/2021/02/virtua-tennis-3.jpg?height=400&aspect_ratio=9:12',
            portadaJuego2: 'https://hips.hearstapps.com/hmg-prod/images/virtua-tennis-dreamcast-juegos-tenis-1586008625.jpg',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 22, 
            nombreJuego: 'Fifa 2024',
            portadaJuego: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/ea-sports-fc-24-todo-sabemos-sucesor-fifa-24-3084248.jpg',
            portadaJuego2: 'https://www.ocu.org/-/media/ocu/images/home/tecnologia/television/fifa%2024/fc24_800x450.jpg?rev=e906b8a3-985e-4858-bcc8-23009b20d3a0&mw=660&hash=2F4483E6799CE92A5786E8DE3060B708',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 23, 
            nombreJuego: 'Fifa Street',
            portadaJuego: 'https://i.blogs.es/0cbf57/fifa2sale/650_1200.jpg',
            portadaJuego2: 'https://i.ytimg.com/vi/cJIt0K4hivE/maxresdefault.jpg',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        },{
            codigo: 24, 
            nombreJuego: 'UFC 5',
            portadaJuego: 'https://www.mundodeportivo.com/alfabeta/hero/2023/09/ea-sports-ufc-5-key-art.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            portadaJuego2: 'https://www.gamingcoffee.com/wp-content/uploads/2023/10/UFC-5_01.jpeg',
            precioJuego: 55,
            categoria: 'Deportes',
            descripcion: 'Juego de disparos con mucha acción',
            publicado: true,
        }
            
    ]

    const juegosActuales = (localStorage.getItem('listaJuegos'))
    const juegosParse = JSON.parse(juegosActuales)
    juegos = juegosDB

    if(!juegosActuales || juegosParse.length < 20){
        localStorage.setItem('listaJuegos', JSON.stringify(juegosDB))
        return;
    }
    return;
}
cargarJuegos()

function nuevoJuego(event){
    verificarUsuario()
    event.preventDefault();
    const codigo = document.getElementById("codigo");
    const portadaJuego = document.getElementById("portadaJuego").value;
    const portadaJuego2 = document.getElementById("portadaJuego2").value;
    const nombreJuego = document.getElementById("nombreJuego").value;
    const precioJuego = document.getElementById("precioJuego").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const formCrearJuego = document.getElementById("formCrearJuego");
    
    

    const codigoExistente = juegos.find(juego => juego.codigo === codigo.value)
    if(codigoExistente){
        alert("El codigo esta en uso")
        return; 
    }

    if (isNaN(codigo.value) || codigo.value < 0) {
        alert("El codigo debe ser un numero positivo");
        return false;
    }
    
    if(portadaJuego === ""){
        alert("Se requiere ingresar una portada");
        return false;
    }
    
    if(portadaJuego2 === ""){
        alert("Se requiere ingresar otra portada");
        return false;
    }

    if(nombreJuego.trim() === ""){
        alert("Se requiere ingresar el Nombre del juego");
        return false;
    }

    if(descripcion.trim() === ""){
        alert("Se requiere ingresar alguna descripcion del juego");
        return false;
    }


    const juego = {
        codigo: codigo.value, 
        nombreJuego: nombreJuego.trim(),
        portadaJuego,
        portadaJuego2,
        precioJuego,
        categoria,
        descripcion: descripcion.trim(),
        publicado: false,
    }; 
    
    juegos.push(juego); 

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();
   
    
    
  
    formCrearJuego.reset();

    codigo.focus();
   
}

const cambiarPublicado = (index) => {
    verificarUsuario()
    
    juegos[index].publicado = !juegos[index].publicado;
    localStorage.setItem("listaJuegos",JSON.stringify(juegos));
};


function borrarJuego(codigo) {
    verificarUsuario()
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));
    const index = juegos.findIndex((c) => c.codigo == codigo);

    if (index !== -1) {
      alert("Se borro el juego" + " " + juegos[index].nombreJuego);
      juegos.splice(index, 1);
      localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    }
    cargarLS();
}


function modificarJuegoBoton(codigo){
    verificarUsuario()
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));
    const codigoJuego = document.getElementById("codigo");
    codigoJuego.readOnly = true;
    const nombreJuego = document.getElementById("nombreJuego");
    const portadaJuego = document.getElementById("portadaJuego");
    const portadaJuego2 = document.getElementById("portadaJuego2");
    const precioJuego = document.getElementById("precioJuego");
    const categoria = document.getElementById("categoria");
    const descripcion = document.getElementById("descripcion");
    const botonCancelar = document.getElementById("botonCancelar");
    const submitModificar = document.getElementById("submitModificar");
    const submitJuego = document.getElementById("submitJuego");

    const index = juegos.findIndex((c) => c.codigo == codigo);
    if (index !== -1) {
        codigoJuego.value = juegos[index].codigo;
        nombreJuego.value = juegos[index].nombreJuego;
        portadaJuego.value = juegos[index].portadaJuego;
        portadaJuego2.value = juegos[index].portadaJuego2;
        precioJuego.value = juegos[index].precioJuego;
        categoria.value = juegos[index].categoria;
        descripcion.value = juegos[index].descripcion;
        botonCancelar.style.display = "flex";
        submitModificar.style.display ="flex";
        submitJuego.style.display ="none";
    }
}

function modificarJuego(){
    verificarUsuario()
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));

    const nombreJuego = document.getElementById("nombreJuego");
    const portadaJuego = document.getElementById("portadaJuego");
    const portadaJuego2 = document.getElementById("portadaJuego2");
    const precioJuego = document.getElementById("precioJuego");
    const categoria = document.getElementById("categoria");
    const descripcion = document.getElementById("descripcion");
    const codigo = document.getElementById("codigo");

    if(portadaJuego.value === ""){
        alert("Se requiere ingresar una portada");
        return false;
    }

    if(portadaJuego2.value === ""){
        alert("Se requiere ingresar otra portada");
        return false;
    }

    if(nombreJuego.value.trim() === ""){
        alert("Se requiere ingresar el Nombre del juego");
        return false;
    }

    if(descripcion.value.trim() === ""){
        alert("Se requiere ingresar alguna descripcion del juego");
        return false;
    }

    const index = juegos.findIndex((c) => c.codigo == codigo.value);

    if (index !== -1){
        juegos[index].nombreJuego = nombreJuego.value;
        juegos[index].precioJuego = precioJuego.value;
        juegos[index].portadaJuego = portadaJuego.value;
        juegos[index].categoria = categoria.value;
        juegos[index].descripcion = descripcion.value;
    }

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));

    botonCancelar();
    cargarLS(); 

    codigo.readOnly = false;
}


function botonCancelar(){
    const codigo = document.getElementById("codigo");
    const formCrearJuego = document.getElementById("formCrearJuego");
    const botonCancelar = document.getElementById("botonCancelar");
    const submitModificar = document.getElementById("submitModificar");
    const submitJuego = document.getElementById("submitJuego");
    formCrearJuego.reset();
    codigo.readOnly = false;
    botonCancelar.style.display = "none";
    submitModificar.style.display ="none";
    submitJuego.style.display ="flex";
}



function cargarLS() {
    verificarUsuario()
    
    const listaJuegos = localStorage.getItem("listaJuegos");

    if(listaJuegos){
        juegos = JSON.parse(listaJuegos); 
    }else{
        juegos = [];
    }

    

    const tabla = document.getElementById("tablaJuegos");
    tabla.innerHTML = "";   

    juegos.forEach((element, index) => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${element.codigo}</th>
            <td>${element.nombreJuego}</td>
            <td>${element.categoria}</td>
            <td>${element.descripcion}</td>
            <td><input class="form-check-input" type="checkbox" ${element.publicado ? "checked" : ""} onchange="cambiarPublicado(${index})"</td>
            <td>
             <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminarJuego${element.codigo}">Eliminar</button> 
             <button class="btn btn-success" onclick="modificarJuegoBoton(${element.codigo})">Modificar</button> 
            </td>   
        </tr>
        <div class="modal fade" id="modalEliminarJuego${element.codigo}" tabindex="-1" aria-labelledby="modalEliminarJuego${element.codigo}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalEliminarJuego${element.codigo}Label">Eliminar juego</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>¿Estas seguro que deseas eliminar el juego ${element.nombreJuego}?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="borrarJuego(${element.codigo})" data-bs-dismiss="modal">Eliminar</button>
                </div>
                </div>
            </div>
        </div>

        `; 
    });

}


cargarLS();


