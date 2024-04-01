import React from 'react';
import styled from 'styled-components';

const ButtonToggle=styled.button`
width:50px;
height:30px;
border-radius:10px;
background-color:${(props)=>(props.red && 'red')|| "green"};
border:none;
cursor:pointer;
`
class Toggle extends React.Component {
constructor(props){
  super(props);
  this.state = {
    isOn: false
  };
}
  toggleState = () => {
    this.setState({ isOn:!this.state.isOn });
  }

  render() {
    return (
      <div>
        <ButtonToggle onClick={this.toggleState}>
          {this.state.isOn ? 'On' : 'Off'}
        </ButtonToggle>
        <div>Status is: {this.state.isOn ? 'On' : 'Off'}</div>
      </div>
    );
  }
}

export default Toggle;
