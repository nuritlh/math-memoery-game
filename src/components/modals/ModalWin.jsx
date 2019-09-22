import React from 'react';

import './modalSettings.css';

const ModalWin = (props) => {    
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <h1>Geme Over !</h1>
                <div className="details-wrapper">
                    <h1 className="winner-title">Congratulations 
                        {props.winner.map(player => {
                            return <span key={player.name}>{" "}{player.name}{" "} </span>
                        })}
                        
                    </h1>
                </div>
                <div className="pyro">
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
                <div className="actions">
                    <div className="ui black deny button" onClick={props.close}>
                        start game !
                    </div>
                </div>
            </div>
        </div>       
    )    
}

export default ModalWin;
