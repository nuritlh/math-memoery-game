import React from 'react';

import './modalSettings.css';

const ModalSettings = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <h1>Geme Settings</h1>
                <div className="details-wrapper">
                    
                    <div className="ui form">
                        <div className="grouped fields">
                            <label>Number of players</label>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="players" defaultChecked="checked" value="2" onChange={props.onChange} />
                                    <label>2</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="players" value="3" onChange={props.onChange} />
                                    <label>3</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="players" value="4" onChange={props.onChange} />
                                    <label>4</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui form">
                        <div className="grouped fields">
                            <label>Time per user round</label>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="timePerRound" defaultChecked="checked" value="15" onChange={props.onChange} />
                                    <label>15</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="timePerRound" value="30" onChange={props.onChange} />
                                    <label>30</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="timePerRound" value="45" onChange={props.onChange} />
                                    <label>45</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui form">
                        <div className="grouped fields">
                            <label>Difficulty:</label>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="difficulty" defaultChecked="checked" value="easy" onChange={props.onChange} />
                                    <label>easy (4X3)</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui slider checkbox">
                                    <input type="radio" name="difficulty" value="hard" onChange={props.onChange} />
                                    <label>hard (6X4)</label>
                                </div>
                            </div>
                        </div>
                    </div>

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

export default ModalSettings;

