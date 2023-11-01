// AREA DE FILMES

function adicionarFilme() {
  // Obtém o elemento `ul` que contém a lista de filmes
  const filmes = document.querySelector("#filmes");

  // Cria um novo elemento `li`
  const novoFilme = document.createElement("li");

  // Obtém os dados do novo filme
  const titulo = prompt("Digite o título do filme:");
  

  // Obtém a imagem do filme
  const imagem = document.querySelector("#imagem").files[0];

  // Adiciona uma imagem ao elemento `li`
  const imagemElemento = document.createElement("img");
  imagemElemento.src = URL.createObjectURL(imagem);
  imagemElemento.alt = "Imagem do filme";
  novoFilme.appendChild(imagemElemento);

  // Modifica o atributo `src` do elemento `<img>`
  imagemElemento.src = URL.createObjectURL(imagem);

  // Adiciona um título ao elemento `li`
  const tituloElemento = document.createElement("h3");
  tituloElemento.textContent = titulo;
  novoFilme.appendChild(tituloElemento);
 
  // Adiciona o novo elemento `li` à lista de filmes
  filmes.appendChild(novoFilme);

}


function removerUltimoFilme() {
  const filmes = document.querySelector("#filmes");
  const ultimoFilme = filmes.lastElementChild;

  // Obtém o elemento `img` do elemento `li`
  const imagem = ultimoFilme.querySelector("img");

  // Remove o elemento `img` do elemento `li`
  ultimoFilme.removeChild(imagem);

  // Remove o elemento `li` da lista de filmes
  filmes.removeChild(ultimoFilme);
}


// Obtém o elemento `ul` que contém a lista de filmes
//const filmes = document.querySelector("#filmes");

// Percorre a lista de filmes
//for (const filme of filmes.querySelectorAll("li")) {
// Obtém o elemento `img` do filme
//const imagem = filme.querySelector("img");

// Adiciona um evento de clique ao elemento `img`
//imagem.addEventListener("click", () => {
  // Mostra uma mensagem de confirmação
  //alert("Você selecionou o filme: " + filme.querySelector("h3").textContent + "\nDiretor: " + filme.querySelector("h1").textContent);
//});
//}













//function adicionarFilme() {
  // Obtém o elemento `ul` que contém a lista de filmes
 // const filmes = document.querySelector("#filmes");

  // Cria um novo elemento `li`
 // const novoFilme = document.createElement("li");

  // Obtém os dados do novo filme
 // const titulo = prompt("Digite o título do filme:");
 // const diretor = prompt("Digite o nome do diretor:");

  // Adiciona uma imagem ao elemento `li`
 // const imagem = document.createElement("img");
  //imagem.src = "img/filme6.jpg";
  //imagem.alt = "Imagem do filme";
 // novoFilme.appendChild(imagem);

  // Adiciona um título ao elemento `li`
  //const tituloElemento = document.createElement("h3");
  //tituloElemento.textContent = titulo;
  //novoFilme.appendChild(tituloElemento);

  // Adiciona um diretor ao elemento `li`
  //const diretorElemento = document.createElement("h1");
 // diretorElemento.textContent = diretor;
 // novoFilme.appendChild(diretorElemento);

  // Adiciona o novo elemento `li` à lista de filmes
//   filmes.appendChild(novoFilme);
//  }





