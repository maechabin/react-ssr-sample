import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.text}</h1>
        <button onClick={() => this.setState({text: 'React!!'})}>Click</button>
      </div>
    );
  };
}
