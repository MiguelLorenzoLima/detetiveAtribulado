document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const yes = card.querySelector('.yes');
    const no = card.querySelector('.no');

    img.onclick = () => {
        if (!card.classList.contains('answered')) {
            card.classList.add('show-actions');
        }
    };

    yes.onclick = () => {
        card.classList.add('correct','answered');
        card.classList.remove('show-actions');
    };

    no.onclick = () => {
        card.classList.add('wrong','answered');
        card.classList.remove('show-actions');
    };
});