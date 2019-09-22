import React from 'react';

const Card = (props) => {
    const selectCard = () => {
        props.selectCard();
    }
    
    return (
        <>
            {(props.isFlipped &&
                <div 
                    className={`card ${!props.isFlippe? 'flipped' : ''}`}  >
                    {props.value}
                </div>
            )}
            {(!props.isFlipped &&
                <div 
                    className="card card-background"
                    onClick={selectCard} >
                </div>
            )}
        </>
    )    
}

export default Card;