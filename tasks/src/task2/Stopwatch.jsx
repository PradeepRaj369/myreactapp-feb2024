import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: false,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  };

  handleStart = () => {
    if (!this.state.running) {
      this.startTimer();
      this.setState({ running: true });
    }
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, running: false });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    const timeStyle = {
      fontSize: '24px',
      marginBottom: '10px',
    };
  
    return (
      <div>
        <h2>Stopwatch</h2>
        <div style={timeStyle}>Time: {this.state.time} seconds</div>
        <button style={buttonStyle} onClick={this.handleStart}>Start</button>
        <button style={buttonStyle} onClick={this.handlePause}>Pause</button>
        <button style={buttonStyle} onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}  
export default Stopwatch;
