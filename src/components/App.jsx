import React from 'react';

import ModalSettings from '../components/modalSettings/ModalSettings';
import './modalSettings/modalSettings.css'

class App extends React.Component {

    state = {
        isShowing: true
    }

    closeModalHandler = () => {
        console.log('here');
        
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <div>
                {this.state.isShowing && 
                <ModalSettings 
                    className="modal"
                    close={this.closeModalHandler} />}
                    {!this.state.isShowing &&   <div >board</div>}
            </div>
        )
    }
    
}

export default App;