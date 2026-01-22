const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const img = card.querySelector('img');
    const yesBtn = card.querySelector('.yes');
    const noBtn = card.querySelector('.no');

    // Mostrar botões ao clicar na imagem
    img.addEventListener('click', () => {
        if (!card.classList.contains('answered')) {
            card.classList.add('show-actions');
        }
    });

    // Clique em SIM
    yesBtn.addEventListener('click', () => {
        card.classList.add('correct', 'answered');
        card.classList.remove('wrong');
        card.classList.remove('show-actions');
    });

    // Clique em NÃO
    noBtn.addEventListener('click', () => {
        card.classList.add('wrong', 'answered');
        card.classList.remove('correct');
        card.classList.remove('show-actions');
    });
});
