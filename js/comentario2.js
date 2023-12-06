function guardarComentario() {
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
      const commentObj = { username, comment };
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push(commentObj);
      localStorage.setItem('comments', JSON.stringify(comments));

      // para dejar en blanco los campos del formulario
      document.getElementById('username').value = '';
      document.getElementById('comment').value = '';
    }
  }