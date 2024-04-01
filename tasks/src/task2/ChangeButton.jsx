import React from 'react';

class ChangeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    };
  }

  handleChangeColor = () => {
    const newColor = this.state.color === 'blue' ? 'red' : 'blue';
    this.setState({ color: newColor });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleChangeColor}>Change Color</button>
        <div style={{ width: '100px', height: '100px', backgroundColor: this.state.color }}></div>
      </div>
    );
  }
}

export default ChangeButton;
