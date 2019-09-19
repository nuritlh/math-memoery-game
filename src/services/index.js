var flippedCards = [];
var isFirstCard = true;
var counter = 0;
export default {
    getBoardGame,
    checkIfSeries
}

function getBoardGame(difficulty) {
    const board = createBoard(difficulty);
    return board;
}
function createBoard(difficulty) {
    const boardSize = getBoadSize(difficulty);
    let {boardRow} = boardSize;
    let {boardCol} = boardSize;

    var series = getGameNumbers(boardCol);
    const board = buildBoard(boardRow, boardCol, series);

    return board;
}

function getBoadSize(difficulty){
    let boardRow = 4;
    let boardCol = 3;
    if (difficulty === 'hard') {
        boardRow = 6;
        boardCol = 4;
    }
    
    return {boardRow,boardCol}
}

function getGameNumbers(numOfSeries){

    const series = [];

    while (series.length < 4) {
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
                powers: [Math.pow(series[i], 1 ),Math.pow(series[i], 2 ),Math.pow(series[i], 3 )],
                isflipped: false
            }
            board.push(card);
        }
    };
    // shuffle(board)
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

function checkIfSeries(value, powers) {
    if (isFirstCard) {
        flippedCards = powers;
        isFirstCard = false;
        return true;
    }
    if(flippedCards.indexOf(value) !== -1) {
        counter++
        if(counter === 2) {
            flippedCards = [];
            counter = 0;
            isFirstCard = true;
        }
        return true;
    }
    else {
        flippedCards = [];
        isFirstCard = true;
        counter = 0;
        return false
    };
}