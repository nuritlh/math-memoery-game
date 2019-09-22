import React from 'react';

const Players = (props) => {
       return (
           <div className="players">
                <div className="ui blue label">
                    now is playing player number 
                    <div className="detail">{props.playingUserIdx}</div>
                </div>
                <table className="ui inverted olive  table">
                    <thead>
                        <tr>
                            <th>Players</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.playersBoard.map(player => {
                        return  <tr key={player.name}>
                                    <td> {player.name} </td>
                                    <td> {player.points} </td>
                                </tr>
                    })}
                    </tbody>
                </table>
            </div>
      );
    }

export default Players;
