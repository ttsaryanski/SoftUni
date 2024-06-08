function deckOfCards(arr) {

    let result = [];

    for (let card of arr) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(createCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ` + `${card}`);
            return;
        }
    }

    console.log(result.join(` `));



    function createCard(face, suit) {

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
    
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);
