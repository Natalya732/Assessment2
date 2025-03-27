document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const radioInputs = document.querySelectorAll('input[type="radio"]');

    function handleRadioSelection(radio) {
        cards.forEach(card => {
            card.classList.remove('popular');

            const cardOptions = card.querySelector('.options');
            if (cardOptions) {
                cardOptions.style.display = 'none';
            }
        });

        const selectedCard = radio.closest('.card');

        selectedCard.classList.add('popular');

        const selectedCardOptions = selectedCard.querySelector('.options');
        if (selectedCardOptions) {
            selectedCardOptions.style.display = 'block';
        }
    }

    radioInputs.forEach(radio => {
        radio.addEventListener('change', (event) => {
            handleRadioSelection(event.target);
        });
    });

    if (radioInputs.length > 0) {
        radioInputs[0].checked = true;
        handleRadioSelection(radioInputs[0]);
    }
});