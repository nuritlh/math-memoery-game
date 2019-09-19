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

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.isPartOfSeries === false) {
    //         this.setState({
    //             flippedCards: [],
    //             isPartOfSeries: true
    //         })
    //     }
    // }

    initBoard = () => {
        const gboard = Service.getBoardGame(this.state.difficulty);
        this.setState({
            gboard
        })
        console.log('gboard', gboard);   
    }

    selectCard = (dataValue, powers) => {
        this.setState({
            flippedCards: this.state.flippedCards.concat(dataValue)
        })
        let isPartOfSeries = Service.checkIfSeries(dataValue, powers);
        this.setState({
            isPartOfSeries
        })
        console.log('isPartOfSeries',isPartOfSeries);
        if(!isPartOfSeries) {
            this.setState({
                flippedCards: []
            })
        }
        this.checkIfSeries();
    }

    checkIfSeries = () => {
        if(this.state.flippedCards.length === 2) {
            //add point to user
            //clear flippedCards
            this.setState({
                flippedCards: []
            })
        }
    }

    renderBoard = () => { 
        return this.state.gboard.map(row => {
            return row.map(coll => {
                return this.renderCard(coll)
                })
        })
    }

    renderCard = (coll) => {
        return <Card
            isPartOfSeries={this.state.isPartOfSeries}
            flippedCards={this.state.flippedCards}
            coll={coll}
            selectCard={this.selectCard}
            key={coll.value}/>
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