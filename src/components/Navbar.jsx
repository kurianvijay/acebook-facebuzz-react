import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SignInForm from './SignInForm';
//import { Test } from './Navbar.styles';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initiateLogOut = this.initiateLogOut.bind(this);
    this.renderConditionalContent = this.renderConditionalContent.bind(this);
  }

  renderConditionalContent() {
    if (this.props.isLoggedIn) {
      return (
        <button className="btn btn-primary" onClick={this.initiateLogOut}>
          Logout
        </button>
      )
    } else {
      return <SignInForm handleLogIn={this.props.handleLogIn} />
    }
  }

  initiateLogOut(event) {
    event.preventDefault()
    this.props.handleLogOut()
  }

  render() {
    return (
      <nav className="NavbarWrapper navbar navbar-expand-md bg-secondary">
        <div className="">
          <h1>AceBook</h1>
        </div>
        <ul className="navbar-nav mr-auto"> &nbsp; </ul>
        { this.renderConditionalContent() }
      </nav>
    )
  }
}

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
