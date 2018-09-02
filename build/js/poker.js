var Poker = {
    element: document.getElementById('js-poker'),
    hovercard: document.getElementById('js-poker-hovercard'),
    value: document.getElementById('js-poker-value'),
    init: function () {
        if(Poker.element) {
            // loop all poker cards
            Array.prototype.slice.call(Poker.element.getElementsByClassName('js-poker-card')).forEach(Poker.attachEventListeners);
        }
    },
    attachEventListeners: function (item) {
        // add event listener for poker cards
        item.addEventListener('click', Poker.showHoverCard);
    },
    showHoverCard: function () {
        // set back card value
        Poker.value.innerHTML = this.innerHTML;

        // add show class to hover card
        Poker.hovercard.classList.add('is-visible');

        // add event listener for card flip
        Poker.hovercard.addEventListener('click', Poker.flipHoverCard);
    },
    flipHoverCard: function () {
        if (!Poker.hovercard.classList.contains('is-flipped')) {
            // add flip class to hover card
            Poker.hovercard.classList.add('is-flipped');
        } else {
            // remove show / flip class from hover card
            Poker.hovercard.classList.remove('is-visible');
            Poker.hovercard.classList.remove('is-flipped');
        }
    }
};

Poker.init();