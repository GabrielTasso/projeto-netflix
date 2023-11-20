// Funções para editar, remover e ler informações do documentário
function editarDocumentario() {
    const docTitulo = this.parentNode.querySelector('h2');
    const novoTitulo = prompt('Digite o novo título do documentário:', docTitulo.textContent);
    if (novoTitulo) {
        docTitulo.textContent = novoTitulo;
    }
}

function removerDocumentario() {
    this.parentNode.remove();
}

function lerDocumentario() {
    const docInfo = this.parentNode.querySelector('p').textContent;
    alert(docInfo);
}

document.addEventListener('DOMContentLoaded', function() {
    // Adicionando eventos aos botões existentes na página
    document.querySelectorAll('.editar-documentario').forEach(function(button) {
        button.addEventListener('click', editarDocumentario);
    });

    document.querySelectorAll('.remover-documentario').forEach(function(button) {
        button.addEventListener('click', removerDocumentario);
    });

    document.querySelectorAll('.ler-documentario').forEach(function(button) {
        button.addEventListener('click', lerDocumentario);
    });
});
