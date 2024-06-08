function playingCards(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    let suits = {
        S: `\u2660`,
        H: `\u2665`,
        D: `\u2666`,
        C: `\u2663`,
    }

    if (!Object.keys(suits).includes(suit)) {
        throw new Error `Error`;
    }

    if (!validFaces.includes(face)) {
        throw new Error `Error`;
    }

    let card = {
        face,
        suit: suits[suit],
        toString: function() {
            return this.face + this.suit;
        }
    };

    return card;
    
}

playingCards('A', 'S');
playingCards('10', 'H');
playingCards('1', 'C');
