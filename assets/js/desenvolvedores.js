// SCRIPT DE DESENVOLVEDOR


// Obtém o elemento `ul` que contém a lista de filmes
const desenvol = document.querySelector("#desenvolvedor");

// Percorre a lista de filmes
for (const desenvolvedor of desenvol.querySelectorAll("li")) {
// Obtém o elemento `img` do filme
const imagem = desenvolvedor.querySelector("img");

// Adiciona um evento de clique ao elemento `img`
imagem.addEventListener("click", () => {
  // Mostra uma mensagem de confirmação
  alert("Nome Completo: " + desenvolvedor.querySelector("h3").textContent + "\nIdade: " + desenvolvedor.querySelector("h1").textContent + "\nFunção: " + desenvolvedor.querySelector("p").textContent);
});
}
