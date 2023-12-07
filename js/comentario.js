function guardarComentario() {
    const indexJuego = (localStorage.getItem("juegoDetalle"));

    if(!indexJuego){
        window.location.href="index.html";
        return;
    }
    
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));
    const codigoJuego = juegos[indexJuego].codigo;

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
      const commentObj = { username, comment, codigoJuego };
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push(commentObj);
      localStorage.setItem('comments', JSON.stringify(comments));

      mostrarComentarios();
      
      document.getElementById('username').value = '';
      document.getElementById('comment').value = '';
    }
  }

  function mostrarComentarios() {

    const indexJuego = (localStorage.getItem("juegoDetalle"));

    if(!indexJuego){
        window.location.href="index.html";
        return;
    }
    
    const juegos = JSON.parse(localStorage.getItem("listaJuegos"));

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsJuego = comments.filter(comment => comment.codigoJuego === juegos[indexJuego].codigo)
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    commentsJuego.forEach(commentObj => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${commentObj.username}:</strong> ${commentObj.comment}`;
      commentList.appendChild(listItem);
    });
  }

  mostrarComentarios();