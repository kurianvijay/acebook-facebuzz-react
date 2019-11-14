import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SignInForm from './SignInForm';
//import { Test } from './Navbar.styles';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      hasSession: false,
      loginVisible: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }


  // componentWillMount = () => {
  //   console.log('Navbar will mount');
  // }

  // componentDidMount = () => {
  //   console.log('Navbar mounted');
  // }

  // componentWillReceiveProps = (nextProps) => {
  //   console.log('Navbar will receive props', nextProps);
  // }

  // componentWillUpdate = (nextProps, nextState) => {
  //   console.log('Navbar will update', nextProps, nextState);
  // }

  // componentDidUpdate = () => {
  //   console.log('Navbar did update');
  // }

  // componentWillUnmount = () => {
  //   console.log('Navbar will unmount');
  // }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ hasSession: true })
    console.log('hello')
  }

  logout(event) {
    event.preventDefault()
    this.setState({ hasSession: false })
    console.log('bye')
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="NavbarWrapper">
          <h1>Something went wrong.</h1>
        </div>)
    }

    if (this.state.hasSession === false) {
      return (
        <div className="NavbarWrapper">
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="badge badge-pill badge-secondary text-light">
                  <h1>aceBook</h1>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <div className="navbar-brand mx-auto">
                {/* <a className="badge badge-pill badge-secondary text-light" href="#">
                Placeholder for left hand side of navbar
              </a> */}
              </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="badge badge-pill badge-secondary text-light" data-method="delete" href="/users/sign_out"
                  >Logout</a
                >
              </li>
            </ul> */}
              <SignInForm handleSubmit={this.handleSubmit} />
            </div>
          </nav>
        </div>
      );
    }
    if (this.state.hasSession === true) {
      return (
        <div className="NavbarWrapper">
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="badge badge-pill badge-secondary text-light">
                  <h1>aceBook</h1>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <div className="navbar-brand mx-auto">
                {/* <a className="badge badge-pill badge-secondary text-light" href="#">
                Placeholder for left hand side of navbar
              </a> */}
              </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="badge badge-pill badge-secondary text-light">
                  <button type="submit" className="btn btn-primary mb-2" onClick={this.logout}>Logout</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
