document.addEventListener('DOMContentLoaded', function() {
 var form = document.querySelector('form');
 form.addEventListener('submit', function(event) {
   event.preventDefault();

   var formData = new FormData(form);

   fetch('processaFormulario.php', {
     method: 'POST',
     body: formData,
   })
   .then(response => response.text())
   .then(data => {
     console.log('Resposta do servidor:', data);
     // Atualize a interface do usuário aqui
     // Por exemplo, exiba a mensagem de sucesso
     document.getElementById('mensagemResposta').innerText = data;
     form.reset(); // opcional: resetar o formulário após o envio
   })
   .catch((error) => {
     console.error('Erro:', error);
     // Trate os erros aqui
     // Por exemplo, exiba a mensagem de erro
     document.getElementById('mensagemResposta').innerText = 'Ocorreu um erro ao enviar o formulário.';
   });
 });
});