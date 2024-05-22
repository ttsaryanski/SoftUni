function chessBoard(cheesSize) {

    let divCounter = 0;

    console.log('<div class="chessboard">');
    
    for (let i = 0; i < cheesSize; i++) {
        divCounter++;

        console.log('  <div>');

        for (let j = 0; j < cheesSize; j++) {
            if (divCounter % 2 !== 0) {
                if (j % 2 === 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            } else {
                if (j % 2 === 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
        }

        console.log('  </div>');
    }

    console.log('</div>');
}

chessBoard(3);
