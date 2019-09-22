import React from 'react';

class Timer extends React.Component {
  
    render() {
       return (
        <div className="timer-wrapper">
          <div>
              {this.props.seconds}  
          </div>
        </div>
      );
    }
  }

export default Timer;
