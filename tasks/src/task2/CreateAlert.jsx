import React  from 'react';

class CreateAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstRender: true
    };
  }

  componentDidMount() {
    if (this.state.isFirstRender) {
        alert("Component rendered for the first time!");
        this.setState({ isFirstRender: false });
    }
  }

  render() {
    return (
      <div>
        <h2>This is a Alert Component</h2>
      </div>
    );
  }
}

export default CreateAlert;
