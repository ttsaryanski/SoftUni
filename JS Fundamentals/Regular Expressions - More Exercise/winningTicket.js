function winningTicket(input) {

    while (input.includes(' ')) {
        input = input.replace(' ', '');
    }
    let ticketsArr = input.split(',');
    for (let curTicket of ticketsArr) {
        if (curTicket.length !== 20 ) {
            console.log('invalid ticket');
        } else {
            let midIdx = curTicket.length / 2;
            let leftPiece = curTicket.slice(0, midIdx);
            let rightPiece = curTicket.slice(midIdx);

            let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/;
            if (pattern.test(leftPiece) && pattern.test(rightPiece)) {
                let leftMatch = leftPiece.match(pattern)[0];
                let rightMatch = rightPiece.match(pattern)[0];
                if (leftMatch[0] === rightMatch[0]) {
                    let symbols = leftMatch[0];
                    if (leftMatch.length === rightMatch.length) {
                        if (leftMatch.length !== 10) {
                            console.log(`ticket "${curTicket}" - ${leftMatch.length}${symbols}`);
                        } else {
                            console.log(`ticket "${curTicket}" - ${leftMatch.length}${symbols} Jackpot!`);
                        }
                    } else if (leftMatch.length > rightMatch.length) {
                        console.log(`ticket "${curTicket}" - ${rightMatch.length}${symbols}`);
                    } else if (leftMatch.length < rightMatch.length) {
                        console.log(`ticket "${curTicket}" - ${leftMatch.length}${symbols}`);
                    }
                } else {
                    console.log(`ticket "${curTicket}" - no match`);
                }
            } else {
                console.log(`ticket "${curTicket}" - no match`);
            }
        }
    }
    
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');
