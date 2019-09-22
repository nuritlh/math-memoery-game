export default {
    createPlayers,
    addPoint,
    getWinner
}

function createPlayers(numOfPlayers) {
    let players = [];
    for( let i = 0; i < numOfPlayers ; i++ ) {
        let player = {
            name: 'Player ' + (i + 1),
            points: 0
        };
        players.push(player);
    }
    return players;
}

function addPoint(playersBoard, userIdx) {
    playersBoard[userIdx] = {...playersBoard[userIdx], points: playersBoard[userIdx].points + 1 };
    return playersBoard
}

function getWinner(playersBoard) {
    let maxPoints = playersBoard[0].points;
    let winner = []
    playersBoard.forEach(player => {
        if(maxPoints <= player.points) maxPoints = player.points;
        
    })    
    playersBoard.forEach(player => {
        if(player.points === maxPoints) winner.push(player)
    })
    return winner;
}