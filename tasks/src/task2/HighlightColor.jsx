import React from 'react';

class HighlightColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Initial content',
      highlight: false 
    };
  }

  updateContent = (newContent) => {
    this.setState({ content: newContent, highlight: true });
    setTimeout(() => {
      this.setState({ highlight: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.highlight ? 'yellow' : 'transparent',
            transition: 'background-color 0.3s ease'
          }}
        >
          {this.state.content}
        </div>
        <button onClick={() => this.updateContent('Updated content')} style={{backgroundColor:'blue', border:'none'}}>Update Content</button>
      </div>
    );
  }
}

export default HighlightColor;
