import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './SignIn.styles';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleLogIn(this.state.email, this.state.password);
  }

  render() {
    return (
        <form className="SignInWrapper form-inline" onSubmit={this.props.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mr-2"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mr-2"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" onClick={this.handleClick}>
            Log In
          </button>
        </form>
    );
  }
}

SignInForm.propTypes = {
  // bla: PropTypes.string,
};

SignInForm.defaultProps = {
  // bla: 'test',
};

export default SignInForm;
