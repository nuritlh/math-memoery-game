import React from 'react';

import GameService from '../../services/game';
import PlayersService from '../../services/players';

import Card from './Card';
import Timer from './Timer';
import Players from './Players';
import ModalWin from '../modals/ModalWin';


class GameBoard extends React.Component {

    roundTime;

    constructor(props) {
        super(props);
        this.state = {
            players: this.props.players,
            gBoard: null,
            isPartOfSeries: true,
            playersBoard: [],
            playingUserIdx: 1,
            seconds: this.props.timePerRound,
            isWin: false,
            winner: null
        }
    }

    componentDidMount() {
        this.initBoard();
        this.initPlayers();
    }

    initBoard = () => {
        const gBoard = GameService.getBoardGame(this.props.difficulty);
        this.setState({
            gBoard
        })
    }

    initPlayers = () => {
        const playersBoard = PlayersService.createPlayers(this.state.players);
        this.setState({
            playersBoard
        })
    }

    selectCard = (value, rowIdx, collIdx) => {
        let numOfFlippedCard = GameService.getFlippedCards(this.state.gBoard).length;
        if (numOfFlippedCard < 3 && this.state.isPartOfSeries) {
            let gBoard = GameService.flippedCard(this.state.gBoard, rowIdx, collIdx);
            const flippedCards = GameService.getFlippedCards(gBoard);
            this.setState({
                gBoard
            })
            if (flippedCards.length === 1) this.startRoundTime();
            let isPartOfSeries = GameService.checkIfSeries(flippedCards);
            if (!isPartOfSeries) {
                this.handleNotMatch(flippedCards);
            }
            if (flippedCards.length === 3 && isPartOfSeries) {
                this.handleMatch(flippedCards);
            }
        }
    }

    handleMatch = (flippedCards) => {
        let matchedBoard = GameService.createMatch(this.state.gBoard, flippedCards);
        this.updatePlayingUser();
        const playersBoard = PlayersService.addPoint(this.state.playersBoard, this.state.playingUserIdx - 1);
        this.setState({
            gBoard: matchedBoard,
            playersBoard
        })
        this.cleartRoundTime();
        this.checkIfWin();
    }

    handleNotMatch = (flippedCards) => {
        this.cleartRoundTime();
        let newboard = GameService.clearFlippedCards(this.state.gBoard, flippedCards);
        this.updatePlayingUser();
        setTimeout(() => {
            this.setState({
                gBoard: newboard,
                isPartOfSeries: true,
            })
        }, 750)
    }

    updatePlayingUser = () => {
        const player = (this.state.playingUserIdx === +this.state.players) ? 1 : this.state.playingUserIdx + 1;
        this.setState({
            playingUserIdx: player
        })
    }

    startRoundTime = () => {
        clearInterval(this.roundTime);
        var seconds = this.props.timePerRound;
        this.roundTime = setInterval(() => {
            seconds--;
            if (seconds >= 0) {
                this.setState({
                    seconds
                })
            }
            if (seconds === 0) {
                clearInterval(this.roundTime);
                this.setState({
                    seconds: this.props.timePerRound
                })
                return false;
            }
        }, 1000);
    }

    cleartRoundTime = () => {
        clearInterval(this.roundTime);
        this.setState({
            seconds: this.props.timePerRound
        })
    }

    checkIfWin = () => {
        const isWin = GameService.checkIfWin(this.state.gBoard);

        if (isWin) {
            const winner = PlayersService.getWinner(this.state.playersBoard);
            this.setState({
                isWin,
                winner
            })
        }
    }

    closeModalHandler = () => {
        this.setState({
            isWin: false
        });
    }

    renderBoard = () => {
        return this.state.gBoard.map((row, rowIdx) => {
            return row.map((card, collIdx) => {
                return <Card
                    selectCard={e => this.selectCard(card.value, rowIdx, collIdx)}
                    key={`${rowIdx},${collIdx},${card.isFlipped},${card.isMatched}`}
                    value={card.value}
                    isFlipped={card.isFlipped || card.isMatched} />
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.isWin &&
                    <ModalWin
                        className="modal"
                        close={this.closeModalHandler}
                        winner={this.state.winner}
                    />}
                <div className="game-settings">
                    <Players playingUserIdx={this.state.playingUserIdx} playersBoard={this.state.playersBoard} />
                    <Timer seconds={this.state.seconds} />
                </div>
                <div className="cards-wrapper">
                    {this.state.gBoard &&
                        this.renderBoard()}
                </div>
            </div>
        )
    }

}

export default GameBoard;