import React from 'react';

import GameBoard from './GameBoard';
import './board.css';

const BoardLayout = (props) => {
    return (
        <div className="board-wrapper">
            <header className="header-settings">
                <div className="ui blue label">
                Number Of Players
                    <div className="detail">{props.players}</div>
                </div>
                <div className="ui teal label">
                Time Per Round
                    <div className="detail"> {props.timePerRound}</div>
                </div>
                <div className="ui pink label">
                Difficulty
                    <div className="detail">{props.difficulty}</div>
                </div>
            </header>
            <div className="board">
                <GameBoard
                    players={props.players}
                    timePerRound={props.timePerRound}
                    difficulty={props.difficulty}/>
            </div>
            
        </div>
    )
}

export default BoardLayout;