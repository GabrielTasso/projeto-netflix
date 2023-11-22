// Adiciona um ouvinte de eventos de clique para cada item de desenvolvedor
document.querySelectorAll('.desenvolvedor li').forEach(function(dev) {
    dev.addEventListener('click', function() {
      // Exibe as informações ocultas para o desenvolvedor clicado
      const hiddenInfo = dev.querySelector('div[hidden]');
      hiddenInfo.removeAttribute('hidden');
    });
  });