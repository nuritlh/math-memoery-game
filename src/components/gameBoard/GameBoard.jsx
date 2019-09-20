import React from 'react';

import Service from '../../services/index';
import Card from './Card';

class GameBoard extends React.Component {

    state = {
        numberOfPlayers: this.props.numberOfPlayers,
        timePerRound: this.props.timePerRound,
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
                let isPartOfSeries = Service.checkIfSeries(this.state.flippedCards);
                this.setState({
                    isPartOfSeries
                }, () => {
                    console.log('isPartOfSeries', isPartOfSeries);
                    console.log('gBoard', this.state.gboard);
                    if(!isPartOfSeries) {
                        this.state.flippedCards.forEach(card => {
                            gBoard = Service.flippedCard(this.state.gboard, card.rowIdx, card.collIdx);
                        })
                    console.log('gBoard', this.state.gboard);
                    setTimeout(() => {
                        this.setState({
                            gBoard,
                            flippedCards: [],
                            isPartOfSeries: true
                        })
                    }, 750)
                    }
                })
                
            })
            
        }
    }

    // checkWin = () => {
    //     if(this.state.flippedCards.length > 2) {
    //         const gboard = Service.markCardAsFlipped(this.state.gboard, this.state.flippedCards);
    //         //add point to user
    //         //clear flippedCards
    //         console.log(gboard);
            
    //         this.setState({
    //             gboard,
    //             flippedCards: []
    //         })
    //     }
    // }

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



    render() {
        return (
            <div className="cards-wrapper">
                {this.state.gboard && 
                    this.renderBoard()}
            </div>
        )
    }
    
}

export default GameBoard;