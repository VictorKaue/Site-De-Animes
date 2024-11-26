// Espera o carregamento do DOM antes de adicionar os ouvintes de evento
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona o evento de clique no avatar do usuário
    document.getElementById('user-avatar').addEventListener('click', function(event) {
        const options = document.getElementById('user-options');
        // Alterna a visibilidade do dropdown
        options.style.display = (options.style.display === 'block' ? 'none' : 'block');
        event.stopPropagation(); // Impede que o clique no dropdown feche imediatamente
    });

    // Fecha o dropdown se o usuário clicar fora dele
    document.addEventListener('click', function(event) {
        const options = document.getElementById('user-options');
        // Verifica se o clique não foi nem no menu nem no avatar
        if (!options.contains(event.target) && !document.getElementById('user-avatar').contains(event.target)) {
            options.style.display = 'none';
        }
    });
});
