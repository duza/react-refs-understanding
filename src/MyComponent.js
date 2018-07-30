import React, { Component } from 'react';

export default class MyComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      uppercase: false,
    };
  }

  toggleInputCase = () => {
    const isUpper = this.state.uppercase;
    // Accessing the ref using this.refs.inputField
    const value = this.refs.inputField.value;

    this.refs.inputField.value = isUpper
      ? value.toLowerCase()
      : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }

  render() {
    return (
      <div>
       {/* Creating a string ref named: inputField */}
        <input type="text" ref="inputField" />

        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
