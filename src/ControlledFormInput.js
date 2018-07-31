import React, { Component } from 'react';

export default class ControlledFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Pavel',
    }
  }

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.value}!</h1>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter your name"
        />
      </div>
    );
  }
}

