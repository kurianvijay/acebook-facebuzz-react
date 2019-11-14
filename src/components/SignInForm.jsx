import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './SignIn.styles';

class SignInForm extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      email: "",
      password: "",
      password_field: "password",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillMount = () => {
  //   console.log('SignInForm will mount');
  // }

  // componentDidMount = () => {
  //   console.log('SignInForm mounted');
  // }

  // componentWillReceiveProps = (nextProps) => {
  //   console.log('SignInForm will receive props', nextProps);
  // }

  // componentWillUpdate = (nextProps, nextState) => {
  //   console.log('SignInForm will update', nextProps, nextState);
  // }

  // componentDidUpdate = () => {
  //   console.log('SignInForm did update');
  // }

  // componentWillUnmount = () => {
  //   console.log('SignInForm will unmount');
  // }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleClick(event){
    event.preventDefault()
    if (this.state.password_field === "password"){
      this.setState({password_field: "text"})
      console.log('hide')
    } else {
      this.setState({password_field: "password"})
      console.log('show')
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    };
    return (
      <div className="SignInWrapper">
        <form className="form-inline" name="sign_in" 
          id="email_sign_in" onSubmit={this.props.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <input type="email" name="email" value={this.state.email} 
            placeholder="Email" onChange={this.handleChange}
             className="form-control" id="inputEmail2"/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input type={this.state.password_field} name="password" value={this.state.password} 
            placeholder="Password" onChange={this.handleChange} className="form-control" id="inputPassword2"/>
            <button id="show_hide_button" onClick={this.handleClick}>
              Show/Hide
            </button>
          </div>
          <button id="sign_up_button" type="submit" className="btn btn-primary mb-2">Not a robot</button>
        </form>
      </div>
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
