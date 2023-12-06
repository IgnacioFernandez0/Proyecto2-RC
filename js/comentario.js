function guardarComentario() {
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
      const commentObj = { username, comment };
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push(commentObj);
      localStorage.setItem('comments', JSON.stringify(comments));

      // Actualiza la lista de comentarios en la página
      mostrarComentarios();
      
      // Limpia los campos del formulario
      document.getElementById('username').value = '';
      document.getElementById('comment').value = '';
    }
  }

  function mostrarComentarios() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    comments.forEach(commentObj => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${commentObj.username}:</strong> ${commentObj.comment}`;
      commentList.appendChild(listItem);
    });
  }

  mostrarComentarios();