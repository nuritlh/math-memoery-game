import React from 'react';

import ModalSettings from '../components/modalSettings/ModalSettings';
import Board from '../components/gameBoard/Board';

import './modalSettings/modalSettings.css'

class App extends React.Component {

    state = {
        isShowing: false,
        numberOfPlayers: 2,
        timePerRound: 15,
        difficulty: 'easy'
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div className="ui container">
                {this.state.isShowing && 
                    <ModalSettings 
                        className="modal"
                        close={this.closeModalHandler}
                        onChange={this.onChange} />}
                {!this.state.isShowing &&  
                    <Board
                        numberOfPlayers={this.state.numberOfPlayers}
                        timePerRound={this.state.timePerRound}
                        difficulty={this.state.difficulty} /> }
            </div>
        )
    }
    
}

export default App;