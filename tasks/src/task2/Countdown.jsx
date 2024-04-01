import React  from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.initialTime,
      running: false,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer = () => {
    if (!this.state.running && this.state.time > 0) {
      this.timer = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time - 1,
        }), () => {
          if (this.state.time === 0) {
            clearInterval(this.timer);
            this.setState({ running: false });
          }
        });
      }, 1000);
      this.setState({ running: true });
    }
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ time: this.props.initialTime, running: false });
  };

  render() {
    return (
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Countdown: {this.state.time} Seconds</h2>
        <button style={buttonStyle} onClick={this.startTimer}>Start</button>
        <button style={buttonStyle} onClick={this.handlePause}>Pause</button>
        <button style={buttonStyle} onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
const buttonStyle = {
  backgroundColor: 'skyblue',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Countdown;
