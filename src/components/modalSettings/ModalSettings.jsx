import React from 'react';

import './modalSettings.css';

class ModalSettings extends React.Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.close}>&times;</span>
                    <h1>Geme Settings</h1>
                    <div className="details-wrapper">
                        
                        <div className="ui form">
                            <div className="grouped fields">
                                <label>Number of players</label>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="numberOfPlayers" defaultChecked="checked" value="2" onChange={this.props.onChange} />
                                        <label>2</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="numberOfPlayers" value="3" onChange={this.props.onChange} />
                                        <label>3</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="numberOfPlayers" value="4" onChange={this.props.onChange} />
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
                                        <input type="radio" name="timePerRound" defaultChecked="checked" value="15" onChange={this.props.onChange} />
                                        <label>15</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="timePerRound" value="30" onChange={this.props.onChange} />
                                        <label>30</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="timePerRound" value="45" onChange={this.props.onChange} />
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
                                        <input type="radio" name="difficulty" defaultChecked="checked" value="easy" onChange={this.props.onChange} />
                                        <label>easy (4X3)</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui slider checkbox">
                                        <input type="radio" name="difficulty" value="hard" onChange={this.props.onChange} />
                                        <label>hard (6X4)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="actions">
                        <div className="ui black deny button" onClick={this.props.close}>
                            start game !
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}

export default ModalSettings;

