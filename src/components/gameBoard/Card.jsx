import React from 'react';

class Card extends React.Component {

    selectCard = () => {
        this.props.selectCard();
    }

    render() {
        let randomColor = {
            backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
        }
        return (
            <>
                {(this.props.isFlipped &&
                    <div 
                        className={`card ${!this.props.isFlippe? 'flipped' : ''}`} style={randomColor} >
                        {this.props.value}
                    </div>
                )}
                {(!this.props.isFlipped &&
                    <div 
                        className="card card-background"
                        onClick={this.selectCard} >
                    </div>
                )}
            </>
        )
    }
}

export default Card;