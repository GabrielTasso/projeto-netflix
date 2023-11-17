// Funções para editar, remover e ler informações do filme
function editarFilme() {
    const filmeTitulo = this.parentNode.querySelector('h2, h3');
    const novoTitulo = prompt('Digite o novo título do filme:', filmeTitulo.textContent);
    if (novoTitulo) {
      filmeTitulo.textContent = novoTitulo;
    }
  }
  
  function removerFilme() {
    this.parentNode.remove();
  }
  
  function lerFilme() {
    const filmeInfo = this.parentNode.querySelector('p').textContent;
    alert(filmeInfo);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Adicionando eventos aos botões existentes na página
    document.querySelectorAll('.editar-filme').forEach(function(button) {
      button.addEventListener('click', editarFilme);
    });
  
    document.querySelectorAll('.remover-filme').forEach(function(button) {
      button.addEventListener('click', removerFilme);
    });
  
    document.querySelectorAll('.ler-filme').forEach(function(button) {
      button.addEventListener('click', lerFilme);
    });
  });
  
  /* Interação Adicionar Filmes */
  document.getElementById('adicionarFilme').addEventListener('click', function() {
    const nomeFilme = prompt('Digite o nome do filme:');
    const imagemFilme = prompt('Digite o URL da imagem do filme:');
    const descricaoFilme = prompt('Digite uma breve descrição do filme:');
  
    if (!nomeFilme || !imagemFilme || !descricaoFilme) {
      alert('Por favor, forneça todas as informações para adicionar o filme.');
      return;
    }
  
    const ul = document.querySelector('main .filmes ul');
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${nomeFilme}</h2>
      <div class="filme-imagem">
        <img src="${imagemFilme}" alt="Banner do filme ${nomeFilme}">
      </div>
      <p>${descricaoFilme}</p>
      <button class="editar-filme">Editar</button>
      <button class="remover-filme">Remover</button>
      <button class="ler-filme">Ler</button>
    `;
  
    ul.appendChild(li);
  
    // Adicionando eventos aos novos botões
    li.querySelector('.editar-filme').addEventListener('click', editarFilme);
    li.querySelector('.remover-filme').addEventListener('click', removerFilme);
    li.querySelector('.ler-filme').addEventListener('click', lerFilme);
  });