import React from 'react';

class Card extends React.Component {
    state = {
        dataValue: this.props.coll.value,
        powers: this.props.coll.powers,
        isFlipped: false,
        cardRef: React.createRef()
    }

    componentDidUpdate(prevProps, prevState) {        
        console.log('card', prevProps.isPartOfSeries, this.props.isPartOfSeries);
        if (prevProps.isPartOfSeries !== this.props.isPartOfSeries) {
            if(!this.props.isPartOfSeries) {
                setTimeout(() => { 
                    this.setState({
                        isFlipped: false
                    })
                 }, 1000);
            }
        }
    }

    selectCard = () => {
        if(this.props.flippedCards.length < 3) {
            
            this.setState({
                isFlipped: true
            });
            this.props.selectCard(this.state.dataValue, this.state.powers);
        }
    }

    render() {
        let randomColor = {
            backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
        }
        return (
            <>
                {(this.state.isFlipped && 
                    <div 
                        className={`card ${!this.state.isFlippe? 'flipped' : ''}`} style={randomColor} >
                        {this.props.coll.value}
                    </div>
                )}
                {(!this.state.isFlipped && 
                    <div 
                        className={`card card-background  ${this.state.isFlippe? 'flipped' : ''}`}
                        onClick={this.selectCard} >
                    </div>
                )}
            </>
        )
    }
}

export default Card;