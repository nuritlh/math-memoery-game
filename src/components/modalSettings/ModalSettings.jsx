import React from 'react';

import './modalSettings.css';

class ModalSettings extends React.Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.close}>&times;</span>
                    <div className="details-wrapper">
                    <div className="ui form">
                        <div className="grouped fields">
                            <label>Number of players</label>
                            
                        </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui black deny button" onClick={this.props.close}>
                            close
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}

export default ModalSettings;

