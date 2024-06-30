document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box'); // Seleciona todas as caixas
    
    boxes.forEach(box => {
        box.addEventListener('click', function() { // Adiciona evento de clique a cada caixa
            boxes.forEach(b => {
                b.classList.remove('selected'); // Remove a classe 'selected' de todas as caixas
                b.querySelector('.boxstyle').style.display = 'none'; // Esconde o conteúdo de todas as caixas
            });
            this.classList.add('selected'); // Adiciona a classe 'selected' à caixa clicada
            this.querySelector('.boxstyle').style.display = 'block'; // Exibe o conteúdo da caixa clicada
        });
    });
});