export default {
    getBoardGame,
    checkIfSeries,
    flippedCard,
    clearFlippedCards,
    getFlippedCards,
    createMatch,
    checkIfWin
}

function getBoardGame(difficulty) {
    const board = createBoard(difficulty);
    return board;
}
function createBoard(difficulty) {
    const boardSize = getBoadSize(difficulty);
    let {boardRow, boardCol, numOfSeries} = boardSize;
    var series = getGameNumbers(numOfSeries);
    const board = buildBoard(boardRow, boardCol, series);

    return board;
}

function getBoadSize(difficulty){
    let boardRow = 4;
    let boardCol = 3;
    let numOfSeries = 4;
    if (difficulty === 'hard') {
        boardRow = 8;
        boardCol = 3;
        numOfSeries = 8
    }
    
    return {boardRow, boardCol, numOfSeries}
}

function getGameNumbers(numOfSeries){

    const series = [];

    while (series.length < numOfSeries) {
        let number = Math.floor(Math.random() * 9) + 2;
        if(series.indexOf(number) === -1 ) series.push(number);
    }

    return series;
}

function buildBoard(boardRow, boardCol, series) {
    const board = [];
    for(let i = 0; i < boardRow; i++ ) {
        for(let j = 0; j < boardCol; j++) {
            let num = Math.pow(series[i], j +1 );
            const card = {
                value: num,
                isFlipped: false,
                isMatched: false
            }
            board.push(card);
        }
    };
    shuffle(board);
    var gboard = [];
    let k = 0;
    for(let i = 0; i < boardRow; i++ ) {
        let row = [];
        for(let j = 0; j < boardCol; j++) {
            row.push(board[k]);
            k++;
        }
        gboard.push(row);
    };

    return gboard;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function flippedCard(board, rowIdx, collIdx) {
    const cboard =JSON.parse(JSON.stringify(board))

    cboard[rowIdx][collIdx].isFlipped = !cboard[rowIdx][collIdx].isFlipped;
    return cboard
}

function getFlippedCards(board) {
    const length = (board.length === 4)? 1 : 5;
    let flippedCards = [];
    for( let i = 0; i < board.length; i++ ) {
        for( let j = 0; j < board.length-length ; j++ ) {
            if(board[i][j].isFlipped) {
                let card = {
                    value: board[i][j].value,
                    rowIdx: i,
                    collIdx: j
                }
                flippedCards.push(card)
            }
        }
    }
    return flippedCards
}

function checkIfSeries(values) {
    if (values.length < 2) {
        return true;
    }
    const sortedValues = values.sort((a,b) =>  a.value - b.value );
    const min_num = sortedValues[0].value;
    const mid_num = sortedValues[1].value;

    if (values.length === 2) {
        if (mid_num === Math.pow(min_num, 2) ||
            mid_num === Math.pow(min_num, 3) ||
            Math.pow(min_num, 1/2) === Math.pow(mid_num, 1/3) ||
            Math.pow(min_num, 1/2) === Math.ceil(Math.pow(mid_num, 1/3))
            ) {
                return true;
            }
    }

    if (values.length === 3) {
        if (Math.pow(min_num, 2) === mid_num &&
            Math.pow(min_num, 3) === sortedValues[2].value) {
                return true;
            }
    }

    

    return false;

}

function clearFlippedCards(board, flippedCards) {
    flippedCards.forEach(card => {
        board[card.rowIdx][card.collIdx].isFlipped = false
    })

    return board;
}

function createMatch(board, flippedCards) {
    flippedCards.forEach(card => {
        board[card.rowIdx][card.collIdx].isFlipped = false;
        board[card.rowIdx][card.collIdx].isMatched = true;

    })

    return board
}

function checkIfWin(board) {

    const isWin = board.every(row => {
        return row.every(card => {
            return card.isMatched === true
        })
    })

    return isWin;
}
