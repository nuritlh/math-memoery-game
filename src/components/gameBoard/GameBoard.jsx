import React from 'react';

import Service from '../../services/index';
import Card from './Card';
import Timer from './Timer';
import ReactCountdownClock from 'ReactCountdownClock';

class GameBoard extends React.Component {

    state = {
        numberOfPlayers: this.props.numberOfPlayers,
        difficulty: this.props.difficulty,
        gboard: null,
        flippedCards: [],
        isPartOfSeries: true
    }


    componentDidMount() {
        this.initBoard();
    }

    initBoard = () => {
        const gboard = Service.getBoardGame(this.state.difficulty);
        this.setState({
            gboard
        })
        console.log('gboard', gboard);   
    }

    selectCard = (value, rowIdx, collIdx) => {
        if( this.state.flippedCards.length < 3 && this.state.isPartOfSeries) {
            let gBoard = Service.flippedCard(this.state.gboard, rowIdx, collIdx);
            const card = { value, rowIdx, collIdx }
            this.setState((prevState) => { 
                return {
                    gBoard,
                    flippedCards: prevState.flippedCards.concat(card)
            }}, () => {
                // if( this.state.flippedCards.length === 1 ) this.startRoundTime();
                let isPartOfSeries = Service.checkIfSeries(this.state.flippedCards);
                this.setState({
                    isPartOfSeries
                }, () => {
                    if(!isPartOfSeries) {
                        // this.cleartRoundTime();
                        this.state.flippedCards.forEach(card => {
                            gBoard = Service.flippedCard(this.state.gboard, card.rowIdx, card.collIdx);
                        })
                    setTimeout(() => {
                        this.setState({
                            gBoard,
                            flippedCards: [],
                            isPartOfSeries: true
                        })
                    }, 750)
                    }
                });
                if( this.state.flippedCards.length === 3 && isPartOfSeries) {
                    // this.cleartRoundTime();
                    this.setState({
                        flippedCards: []
                    })
                }
            })
        }
    }

    renderBoard = () => { 
        return this.state.gboard.map((row, rowIdx) => {
            return row.map((card, collIdx) => {
                return <Card
                selectCard={ e => this.selectCard(card.value, rowIdx, collIdx)}
                key={card.value}
                value={card.value}
                isFlipped={card.isFlipped} />
                })
        })
    }

    timeIsUp = () => {
        console.log('time end');
        
    }

    render() {
        return (
            <div className="cards-wrapper">
                {/* <Timer  seconds={this.state.seconds} /> */}
                <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={this.timeIsUp} />
                {this.state.gboard && 
                    this.renderBoard()}
            </div>
        )
    }
    
}

export default GameBoard;