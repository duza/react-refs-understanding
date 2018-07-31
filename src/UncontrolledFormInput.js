import React, { Component } from 'react';

export default class UncontrolledFormInput extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.state = {
      value: 'Pavel',
    };
  }

  handleChange = () => {
    this.setState({ value: this.inputField.current.value });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.value}!</h1>
        {/* Attach the created ref: this.inputField */}
        <input
          className="input"
          type="text"
          ref={this.inputField}
          defaultValue='Pavel'
          onChange={this.handleChange}
          placeholder="Enter your name"
        />
      </div>
    );
  }
}

