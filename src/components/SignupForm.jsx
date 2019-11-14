import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(
      `${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.username} ${this.state.password} ${this.state.confirmPassword}`,
    );
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default SignupForm;
