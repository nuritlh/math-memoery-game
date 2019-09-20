var roundTime;

export default {
    getBoardGame,
    checkIfSeries,
    flippedCard
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
                isFlipped: false,
                isMatched: false
            }
            board.push(card);
        }
    };
    // shuffle(board);
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
    board[rowIdx][collIdx] = {...board[rowIdx][collIdx], isFlipped: !board[rowIdx][collIdx].isFlipped};
    return board
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
            Math.pow(min_num, 1/2) === Math.pow(mid_num, 1/3)
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

// function doesManyThings(time, values) {
//     if (isFirstCard) {
//         startRoundTime(time)
//         isFirstCard = false;
//         return true;
//     }
//     if(flippedCards.indexOf(value) !== -1) {
//         counter++
//         if(counter === 2) {
//             flippedCards = [];
//             counter = 0;
//             clearInterval(rountTime);
//             isFirstCard = true;
//         }
//         return true;
//     }
//     else {
//         flippedCards = [];
//         isFirstCard = true;
//         counter = 0;
//         clearInterval(rountTime);
//         return false
//     };
// }

function markCardAsFlipped(board, flippedCards) {
    board.forEach(row => {
        row.forEach(coll => {
            if( flippedCards.indexOf(coll.value) !== -1 ) {
                coll.isFlipped = true;
            }
        })
    })
    
    return board
}

function startRoundTime(time) {
    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + time + 1);

    roundTime = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('timer').innerHTML = seconds + 's'
        if (distance < 0) {
          clearInterval(roundTime);
        }
      }, 1000);
}

