function carregarPagina(pagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("conteudo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", pagina, true);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", function () {
    // Carregar a página inicial
    carregarPagina('./index.html');

    // Adicionar evento de clique aos links do nav
    var links = document.querySelectorAll('nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            var pagina = this.getAttribute('href');
            carregarPagina(pagina);
        });
    });
});