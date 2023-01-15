import React, { Component } from 'react';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="form-label">
          <p> Email address</p>
          <input
            type="text"
            className="form-control"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p> Password</p>
          <input
            type="text"
            className="form-control"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
