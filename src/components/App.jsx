import React from 'react';

import ModalSettings from './modals/ModalSettings';
import BoardLayout from '../components/gameBoard/BoardLayout';

import './modals/modalSettings.css'
import './gameWallpaper.css';

class App extends React.Component {

    state = {
        showSettingsModal: true,
        players: 2,
        timePerRound: 15,
        difficulty: 'easy'
    }

    closeModalHandler = () => {
        this.setState({
            showSettingsModal: false
        });
    }

    startOver = () => {
        this.setState({
            showSettingsModal: true,
            players: 2,
            timePerRound: 15,
            difficulty: 'easy'
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div className="game-wallpaper">
                <div className="ui container">
                    {this.state.showSettingsModal && 
                        <ModalSettings 
                            className="modal"
                            close={this.closeModalHandler}
                            onChange={this.onChange} />}
                    {!this.state.showSettingsModal &&  
                        <BoardLayout
                            className="board"
                            players={this.state.players}
                            timePerRound={this.state.timePerRound}
                            difficulty={this.state.difficulty} /> }
                    <button className="ui red button" onClick={this.startOver}>Start Over</button>
                </div>
            </div>
        )
    }
    
}

export default App;