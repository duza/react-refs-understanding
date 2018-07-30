import React, { Component } from 'react';
import './MyComponent.css';

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
    // const value = this.refs.inputField.value;
    // Accessing the ref using this.inputField
    const value = this.inputField.value;

    // this.refs.inputField.value = isUpper
    this.inputField.value = isUpper 
      ? value.toLowerCase()
      : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }

  render() {
    return (
      <div className="container">
       {/* Creating a string ref named: inputField 
        <input className="input" type="text" ref="inputField" />
       */}
       {/* Creating a callback ref and storing it in this.inputField */}
        <input className="input" type="text" ref={elem => this.inputField = elem} />

        <button className="button" type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
